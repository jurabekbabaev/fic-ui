<script setup>
import { useI18n } from 'vue-i18n'
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import PageHero from '~/components/shared/PageHero5.vue'
const { t } = useI18n()

const platformStats = [
  { prefix: '×', target: 5, label: 'result.platform.stats.companyEngagement' },
  { from: 54, target: 85, label: 'result.platform.stats.activeCompanies' },
  { target: 41, highlight: true, label: 'result.platform.stats.councilMembers' },
  { target: 19, label: 'result.platform.stats.countries' },
  { target: 4, label: 'result.platform.stats.internationalInstitutions' },
  { target: 23, label: 'result.platform.stats.economicSectors' },
]

const environmentStats = [
  { from: 5, target: 16, label: 'result.environment.stats.workingGroupsGrowth' },
  { target: 50, suffix: '+', label: 'result.environment.stats.workingGroupMeetings' },
  { target: 120, highlight: true, label: 'result.environment.stats.initiatives' },
  { target: 8, label: 'result.environment.stats.legalActs' },
  { target: 3, label: 'result.environment.stats.strategicInitiatives' },
  { target: 5, label: 'result.environment.stats.socialInitiatives' },
]

const npaKeys = [
  'result.npa.items.alternativeInvestmentFunds',
  'result.npa.items.responsibleBusiness',
  'result.npa.items.taxCode',
  'result.npa.items.electricPower',
  'result.npa.items.electricityGas',
  'result.npa.items.ppp',
  'result.npa.items.landPlots',
  'result.npa.items.financialAccounting',
]

const ANIM_DURATION = 1800

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3)
}

function renderStat(stat, eased) {
  if (stat.from !== undefined) {
    return `${Math.floor(eased * stat.from)} → ${Math.floor(eased * stat.target)}`
  }
  return `${stat.prefix ?? ''}${Math.floor(eased * stat.target)}${stat.suffix ?? ''}`
}

const makeZero = (stats) => stats.map((s) => renderStat(s, 0))

const platformDisplay = ref(makeZero(platformStats))
const environmentDisplay = ref(makeZero(environmentStats))
const platformRef = ref(null)
const environmentRef = ref(null)
const observers = []

function animateGroup(stats, displayRef) {
  const start = performance.now()
  const step = (now) => {
    const progress = Math.min((now - start) / ANIM_DURATION, 1)
    const eased = easeOutCubic(progress)
    displayRef.value = stats.map((s) => renderStat(s, eased))
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

function observe(el, stats, displayRef) {
  if (!el) return
  let done = false
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !done) {
          done = true
          animateGroup(stats, displayRef)
        }
      })
    },
    { threshold: 0.3 },
  )
  obs.observe(el)
  observers.push(obs)
}

onMounted(async () => {
  await nextTick()
  observe(platformRef.value, platformStats, platformDisplay)
  observe(environmentRef.value, environmentStats, environmentDisplay)
})

onBeforeUnmount(() => observers.forEach((o) => o.disconnect()))
</script>

<template>
  <div>
    <client-only>
      <PageHero :title="t('result.hero.title')" />
      <div class="container">
      <div class="bg-[#F7F7F7] rounded-2xl p-6 lg:p-8 lg:max-w-[1000px]">
        <p class="text-base lg:text-lg text-[#505A63] font-normal leading-[170%]">
          {{ t('result.intro.description') }}
        </p>
      </div>

      <div class="mt-12">
        <h2 class="lg:text-[32px] text-[24px] uppercase font-black text-[#191C1F] mb-6">
          {{ t('result.platform.title') }}
        </h2>
        <div ref="platformRef" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          <div
            v-for="(stat, i) in platformStats"
            :key="i"
            class="rounded-xl p-6 min-h-[150px] flex flex-col justify-between"
            :class="stat.highlight ? 'bg-[#191C1F]' : 'bg-[#F7F7F7]'"
          >
            <div
              class="font-black lg:text-[44px] text-[36px] leading-none tabular-nums"
              :class="stat.highlight ? 'text-white' : 'text-[#191C1F]'"
            >
              {{ platformDisplay[i] }}
            </div>
            <span
              class="block mt-4 text-sm lg:text-base font-normal leading-snug"
              :class="stat.highlight ? 'text-white/75' : 'text-[#505A63]'"
            >
              {{ t(stat.label) }}
            </span>
          </div>
        </div>
      </div>

      <div class="mt-12">
        <h2 class="lg:text-[32px] text-[24px] uppercase font-black text-[#191C1F] mb-6">
          {{ t('result.environment.title') }}
        </h2>
        <div ref="environmentRef" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          <div
            v-for="(stat, i) in environmentStats"
            :key="i"
            class="rounded-xl p-6 min-h-[150px] flex flex-col justify-between"
            :class="stat.highlight ? 'bg-[#191C1F]' : 'bg-[#F7F7F7]'"
          >
            <div
              class="font-black lg:text-[44px] text-[36px] leading-none tabular-nums"
              :class="stat.highlight ? 'text-white' : 'text-[#191C1F]'"
            >
              {{ environmentDisplay[i] }}
            </div>
            <span
              class="block mt-4 text-sm lg:text-base font-normal leading-snug"
              :class="stat.highlight ? 'text-white/75' : 'text-[#505A63]'"
            >
              {{ t(stat.label) }}
            </span>
          </div>
        </div>
      </div>

      <div class="mt-12 mb-24">
        <h2 class="lg:text-[32px] text-[24px] uppercase font-black text-[#191C1F] mb-6">
          {{ t('result.npa.title') }}
        </h2>
        <ul class="mt-6 border-t border-[#0000000D] lg:max-w-[1000px]">
          <li
            v-for="(npaKey, i) in npaKeys"
            :key="i"
            class="flex gap-3 py-4 border-b border-[#0000000D] text-base text-[#505A63] leading-relaxed"
          >
            <span class="text-[#191C1F] leading-none mt-1.5">•</span>
            <span>{{ t(npaKey) }}</span>
          </li>
        </ul>
      </div>
      </div>
    </client-only>
  </div>
</template>

<style scoped></style>
