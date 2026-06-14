<script setup>
import { useI18n } from 'vue-i18n'
import PageHero from '~/components/shared/PageHero.vue'
import WLocaleLink from '~/components/shared/WLocaleLink.vue'
const { t } = useI18n()

const mainParagraphs = [
  'association.sections.legalBasis.paragraphs.0',
  'association.sections.legalBasis.paragraphs.1',
  'association.sections.legalBasis.paragraphs.2',
]

const functions = [0, 1, 2, 3, 4]

const structure = [0, 1, 2]
</script>

<template>
  <div>
    <client-only>
      <PageHero :title="t('association.hero.title')" />

      <div class="container">
        <div class="lg:max-w-[900px] w-full">
          <h1 class="lg:text-[44px] text-[28px] uppercase font-black text-[#191C1F] mb-6">
            {{ t('association.sections.legalBasis.heading') }}
          </h1>
          <p
            v-for="(paragraph, i) in mainParagraphs"
            :key="i"
            class="text-base lg:text-lg text-[#505A63] font-normal leading-[170%] pb-5"
          >
            {{ t(paragraph) }}
          </p>

          <WLocaleLink to="/reports" class="btn btn-secondary mt-2">
            {{ t('association.buttons.documents') }}
          </WLocaleLink>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12 mb-[80px]"
        >
          <div class="bg-[#F7F7F7] rounded-2xl p-6 lg:p-7">
            <h2 class="text-lg lg:text-xl uppercase font-black text-[#191C1F]">
              {{ t('association.sections.functions.heading') }}
            </h2>
            <ul class="list-disc pl-5 mt-4 text-[#505A63] font-normal text-base flex flex-col gap-2">
              <li v-for="(item, i) in functions" :key="i">{{ t(`association.sections.functions.items.${i}`) }}</li>
            </ul>
          </div>

          <div class="bg-[#F7F7F7] rounded-2xl p-6 lg:p-7">
            <h2 class="text-lg lg:text-xl uppercase font-black text-[#191C1F]">
              {{ t('association.sections.structure.heading') }}
            </h2>
            <ul class="list-disc pl-5 mt-4 text-[#505A63] font-normal text-base flex flex-col gap-2">
              <li v-for="(item, i) in structure" :key="i">{{ t(`association.sections.structure.items.${i}`) }}</li>
            </ul>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<style></style>
