<script setup>
import { useI18n } from 'vue-i18n'
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import PageHero from '~/components/shared/PageHero5.vue'
const { t } = useI18n()

const platformStats = [
  { prefix: '×', target: 5, label: 'рост вовлечённости компаний' },
  { from: 54, target: 85, label: 'активных компаний-участников' },
  { target: 43, highlight: true, label: 'компания — члены Совета' },
  { target: 19, label: 'стран-участников' },
  { target: 4, label: 'международных института (3 в Исполкоме)' },
  { target: 23, label: 'сектора экономики' },
]

const environmentStats = [
  { from: 5, target: 16, label: 'рост числа рабочих групп' },
  { target: 50, suffix: '+', label: 'заседаний рабочих групп' },
  { target: 120, highlight: true, label: 'инициатив (рост втрое)' },
  { target: 8, label: 'НПА разработано при участии Совета' },
  { target: 3, label: 'стратегические инициативы' },
  { target: 5, label: 'социальных инициатив' },
]

const npaList = [
  'Проект Закона об альтернативных инвестиционных фондах',
  'Проект постановления Президента о принципах ответственного ведения бизнеса',
  'Проект закона о внесении изменений в Налоговый кодекс',
  'Проект закона о внесении изменений в Закон об электроэнергетике',
  'Проект постановления Кабинета Министров о правилах пользования электроэнергией и природным газом',
  'Проект закона о внесении изменений в Закон «О государственно-частном партнёрстве»',
  'Проект постановления Президента о резервировании земельных участков',
  'Проект постановления о системе финансового учёта по международным стандартам',
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
      <PageHero title="Результаты Совета" />
      <div class="container">
      <div class="bg-[#F7F7F7] rounded-2xl p-6 lg:p-8 lg:max-w-[1000px]">
        <p class="text-base lg:text-lg text-[#505A63] font-normal leading-[170%]">
          {{ t('За отчётный период Совет иностранных инвесторов существенно усилил роль как ключевая платформа взаимодействия государства и иностранных инвесторов и инструмент развития инвестиционной политики Узбекистана.') }}
        </p>
      </div>

      <div class="mt-12">
        <h2 class="lg:text-[32px] text-[24px] uppercase font-black text-[#191C1F] mb-6">
          {{ t('Платформа для инвесторов') }}
        </h2>
        <div ref="platformRef" class="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 mt-5">
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
          {{ t('Развитие инвестиционной среды') }}
        </h2>
        <div ref="environmentRef" class="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 mt-5">
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
          {{ t('Восемь НПА, разработанных при участии Совета') }}
        </h2>
        <ul class="mt-6 border-t border-[#0000000D] lg:max-w-[1000px]">
          <li
            v-for="(npa, i) in npaList"
            :key="i"
            class="flex gap-3 py-4 border-b border-[#0000000D] text-base text-[#505A63] leading-relaxed"
          >
            <span class="text-[#191C1F] leading-none mt-1.5">•</span>
            <span>{{ t(npa) }}</span>
          </li>
        </ul>
      </div>
      </div>
    </client-only>
  </div>
</template>

<style scoped></style>
