<script setup>
import { useI18n } from 'vue-i18n'
import PageHero from '~/components/shared/PageHero.vue'
import WLocaleLink from '~/components/shared/WLocaleLink.vue'
const { t } = useI18n()

const mainParagraphs = [
  'Совет иностранных инвесторов при Президенте Республики Узбекистан учреждён Постановлением Президента № ПП-4519 от 13 ноября 2019 года как консультативно-совещательный орган для прямого диалога между иностранными инвесторами, международными финансовыми институтами и Правительством Республики Узбекистан.',
  'По мере расширения деятельности Совета возникла необходимость в постоянно действующем операционном органе. Постановлением Президента № ПП-226 от 18 июля 2025 года поддержано предложение членов Совета и международных финансовых институтов об образовании Секретариата Совета в форме негосударственной некоммерческой организации.',
  'Во исполнение данного постановления 4 ноября 2025 года зарегистрировано Объединение юридических лиц (Ассоциация, Союз) «Foreign Investors Council», ИНН 312 551 219, — юридическое лицо, выполняющее функции Секретариата Совета.',
]

const functions = [
  'организация пленарных и промежуточных сессий',
  'координация деятельности 16 рабочих групп',
  'ежедневное взаимодействие с инвесторами',
  'сбор и продвижение инициатив',
  'аналитическое сопровождение Совета',
]

const structure = [
  'Общее собрание учредителей — высший орган',
  'Исполнительный комитет — коллегиальный орган',
  'Глава Ассоциации / Руководитель Секретариата',
]
</script>

<template>
  <div>
    <client-only>
      <PageHero title="Ассоциация" />

      <div class="container">
        <div class="lg:max-w-[900px] w-full">
          <h1 class="lg:text-[44px] text-[28px] uppercase font-black text-[#191C1F] mb-6">
            {{ t('Правовая основа и институциональный статус') }}
          </h1>
          <p
            v-for="(paragraph, i) in mainParagraphs"
            :key="i"
            class="text-base lg:text-lg text-[#505A63] font-normal leading-[170%] pb-5"
          >
            {{ t(paragraph) }}
          </p>

          <WLocaleLink to="/reports" class="btn btn-secondary mt-2">
            {{ t('Документы') }}
          </WLocaleLink>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12 mb-[80px]"
        >
          <div class="bg-[#F7F7F7] rounded-2xl p-6 lg:p-7">
            <h2 class="text-lg lg:text-xl uppercase font-black text-[#191C1F]">
              {{ t('Функции Секретариата') }}
            </h2>
            <ul class="list-disc pl-5 mt-4 text-[#505A63] font-normal text-base flex flex-col gap-2">
              <li v-for="(item, i) in functions" :key="i">{{ t(item) }}</li>
            </ul>
          </div>

          <div class="bg-[#F7F7F7] rounded-2xl p-6 lg:p-7">
            <h2 class="text-lg lg:text-xl uppercase font-black text-[#191C1F]">
              {{ t('Структура управления') }}
            </h2>
            <ul class="list-disc pl-5 mt-4 text-[#505A63] font-normal text-base flex flex-col gap-2">
              <li v-for="(item, i) in structure" :key="i">{{ t(item) }}</li>
            </ul>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<style></style>
