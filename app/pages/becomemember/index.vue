<script setup>
import {
  becomeMemberCompanies,
  getCompanyBio,
  getCompanyDisplayName,
  getCompanyKey,
  getCompanyLogoSrc,
  getCompanyTargetId,
  parseBecomeMemberCompanyId,
  placeholderBioKey,
} from '@/constants/becomeMemberCompanies'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import PageHero from '~/components/shared/PageHero.vue'

const { locale, t } = useI18n()
const route = useRoute()

const uploadModalOpen = ref(false)

const sortByCompanyId = (left, right) => {
  const leftId = parseBecomeMemberCompanyId(left.id)
  const rightId = parseBecomeMemberCompanyId(right.id)

  return leftId.order - rightId.order
}

const companies = computed(() =>
  becomeMemberCompanies.map((company) => {
    const parsedId = parseBecomeMemberCompanyId(company.id)

    return {
      id: company.id,
      memberType: parsedId.type,
      order: parsedId.order,
      filename: company.filename,
      key: getCompanyKey(company.filename),
      image: getCompanyLogoSrc(company.filename),
      name: getCompanyDisplayName(company, locale.value),
      bio: getCompanyBio(company, locale.value) ?? t(placeholderBioKey),
      targetId: getCompanyTargetId(company.filename),
      website: company.website,
    }
  }),
)

const founders = computed(() =>
  [...companies.value.filter((company) => company.memberType === 'E')].sort(
    sortByCompanyId,
  )
)

const fullMembers = computed(() =>
  [...companies.value.filter((company) => company.memberType === 'F')].sort(
    sortByCompanyId,
  ),
)

const observers = computed(() =>
  [...companies.value.filter((company) => company.memberType === 'O')].sort(
    sortByCompanyId,
  ),
)

const memberSections = computed(() => [
  {
    title: t('Члены исполнительного комитета'),
    add: t('Члены-учредители aссоциации'),
    targetId: 'founding-members',
    items: founders.value,
  },
  {
    title: t('Действительные члены'),
    targetId: 'full-members',
    items: fullMembers.value,
  },
  {
    title: t('Члены-Наблюдатели'),
    targetId: 'observers',
    items: observers.value,
  },
])

const scrollToTarget = async () => {
  if (typeof window === 'undefined') return

  await nextTick()

  const target = route.query.target
  if (!target || typeof target !== 'string') return

  const element = document.getElementById(target)
  if (!element) return

  setTimeout(() => {
    const offset = 110
    const top = element.getBoundingClientRect().top + window.scrollY - offset

    window.scrollTo({
      top,
      behavior: 'smooth',
    })
  }, 100)
}

onMounted(() => {
  scrollToTarget()
})

watch(
  () => route.query.target,
  () => {
    scrollToTarget()
  },
)

</script>
<template>
  <div>

    <div>
    <client-only>
      <PageHero title="Члены Совета" />
      <div class="container">
        <p
          class="lg:max-w-[900px] w-full text-base lg:text-lg text-[#505A63] font-normal leading-[170%]"
        >
          {{ t('Членами Совета иностранных инвесторов являются ведущие международные компании, банки и финансовые институты, осуществляющие стратегические инвестиции в экономику Узбекистана. Членство отражает долгосрочную приверженность развитию страны и предоставляет прямой канал диалога с Правительством по вопросам инвестиционной политики. Совет объединяет 41 члена из 19 стран, представляющих 23 сектора экономики.') }}
        </p>
        <template v-for="section in memberSections" :key="section.title">
          <h1
            class="lg:text-[64px] text-[32px] uppercase font-black mt-12"
            :id="section.targetId"
          >
            {{ section.title }}
          </h1>
          <p
            class="lg:text-[22px] text-[32px] font-normal mb-10"
            :id="section.targetId"
          >
            {{ section.add }}
        </p>
          <div class="grid grid-cols-1 gap-4">
            <a
              v-for="item in section.items"
              :key="item.filename"
              :id="item.targetId"
              :href="item.website"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex flex-col sm:flex-row sm:items-center gap-5 lg:gap-7 bg-white border border-[#0000001A] rounded-2xl p-4 lg:p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#00000033] hover:shadow-[0_18px_40px_rgba(25,28,31,0.08)]"
            >
              <div
                class="shrink-0 flex items-center justify-center w-full sm:w-[200px] lg:w-[220px] h-[150px] lg:h-[176px] p-5"
              >
                <img
                  :src="item.image"
                  :alt="item.name"
                  class="max-w-full max-h-full object-contain"
                />
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="text-lg lg:text-2xl font-bold uppercase leading-snug text-[#191C1F]">
                  {{ item.name }}
                </h3>
                <p class="mt-3 text-sm lg:text-base font-normal leading-relaxed text-[#505A63]">
                  {{ item.bio }}
                </p>
              </div>
            </a>
          </div>
        </template>
      </div>
    </client-only>
  </div>

    <client-only>
      <div id="membership-form" class="container">
        <h1
          class="lg:text-[64px] text-[32px] uppercase font-black lg:text-center sm:text-left mt-[100px] mb-14"
        >
          {{ t('оформить членство') }}
        </h1>

        <div>
          <h3 class="lg:text-[32px] text-2xl font-black mt-[50px]">
            {{ t('Критерии членства') }}
          </h3>
          <div>
            <p class="text-base text-[#505A63] font-semibold mb-3 mt-[32px]">
              {{ t('Прямые критерии:') }}
            </p>
            <ul class="ml-4">
              <li class="list-decimal text-base text-[#505A63] font-normal mb-3">{{ t('Объём инвестиций в Узбекистане (минимум 50 млн долл. США)') }}</li>
              <li class="list-decimal text-base text-[#505A63] font-normal mb-3">{{ t('Социальные проекты в Узбекистане') }}</li>
              <li class="list-decimal text-base text-[#505A63] font-normal mb-3">{{ t('Срок присутствия в Узбекистане') }}</li>
              <li class="list-decimal text-base text-[#505A63] font-normal mb-3">{{ t('Оплата членского взноса') }}</li>
              <li class="list-decimal text-base text-[#505A63] font-normal mb-3">{{ t('Вклад в развитие инвестиционной среды (экспертиза/финансирование)') }}</li>
            </ul>
          </div>
          <div>
            <p class="text-base text-[#505A63] font-semibold mb-3">
              {{ t('Косвенные критерии:') }}
            </p>
            <ul class="ml-4">
              <li class="list-decimal text-base text-[#505A63] font-normal mb-3">{{ t('Стратегические сектора деятельности') }}</li>
              <li class="list-decimal text-base text-[#505A63] font-normal mb-3">{{ t('Количество созданных рабочих мест') }}</li>
            </ul>
          </div>
        </div>
        <div>
          <h3 class="lg:text-[32px] text-2xl font-black mt-[50px] lg:w-[625px]">
            {{ t('Пожалуйста, скачайте форму заявки с руководством по ее заполнению') }}
          </h3>
          <div class="lg:flex sm:block gap-4 mt-6 w-full items-center">
            <a href="/documents/fic-membership-documents.zip" class="btn btn-primary flex! items-center mb-3" download>
                <span class="ml-1">{{ t('Форма заявки') }}</span>
            </a>
            <a href="#" class="btn btn-secondary flex! items-center mb-3" @click.prevent="uploadModalOpen = true">
                <i class="icon-book-info text-2xl">
                    </i>
                <span class="ml-1">{{ t('Руководство по подача заявки') }}</span>
              </a>
          </div>
        </div>
      </div>
    </client-only>

    <ModalUploadDocuments v-if="uploadModalOpen" @close="uploadModalOpen = false" />
  </div>
</template>

<style></style>
