<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import {
  getLocalizedField,
} from "~/composables/helpers";
import { useExpertsStore } from '@/stores/experts'
import PageHero from '~/components/shared/PageHero4.vue'
const store = useExpertsStore();
const models = computed(() => {
  return store.list;
})
const getModels = () => {
  store.getList();
}
onMounted(() => {
  getModels();
})
</script>
<template>
  <div>
    <client-only>
      <PageHero title="Эксперты" />
      <div class="container">
        <div class="lg:max-w-[900px] w-full mb-10">
          <p class="text-base lg:text-lg text-[#505A63] font-normal leading-[170%]">
            {{ t('Эксперты Совета — признанные международные и локальные специалисты, оказывающие экспертную поддержку рабочим группам и инициативам Совета иностранных инвесторов. Совет высоко ценит их вклад в развитие инвестиционной политики Узбекистана и отмечает их профессиональную компетентность.') }}
          </p>
        </div>

        <div class="grid lg:grid-cols-3 sm:grid-cols-1 gap-5 mb-14">
          <div class="bg-[#F7F7F7] rounded-2xl p-6 lg:p-7">
            <h2 class="text-lg lg:text-xl uppercase font-black text-[#191C1F]">
              {{ t('Назначение') }}
            </h2>
            <p class="mt-4 text-base text-[#505A63] font-normal leading-relaxed">
              {{ t('Эксперты Совета — признанные международные и локальные специалисты, оказывающие профессиональную поддержку рабочим группам и инициативам Совета: право, финансы, налогообложение, энергетика, цифровые технологии, устойчивое развитие.') }}
            </p>
          </div>
          <div class="bg-[#F7F7F7] rounded-2xl p-6 lg:p-7">
            <h2 class="text-lg lg:text-xl uppercase font-black text-[#191C1F]">
              {{ t('Международные эксперты') }}
            </h2>
            <p class="mt-4 text-base text-[#505A63] font-normal leading-relaxed">
              {{ t('Представители ведущих консалтинговых, юридических и финансовых организаций, участвующие в разработке законодательных инициатив и адаптации международных стандартов.') }}
            </p>
          </div>
          <div class="bg-[#F7F7F7] rounded-2xl p-6 lg:p-7">
            <h2 class="text-lg lg:text-xl uppercase font-black text-[#191C1F]">
              {{ t('Локальные эксперты') }}
            </h2>
            <p class="mt-4 text-base text-[#505A63] font-normal leading-relaxed">
              {{ t('Национальные специалисты в области инвестиционной политики, корпоративного управления и отраслевого регулирования, связывающие международную практику с условиями Узбекистана.') }}
            </p>
          </div>
        </div>

        <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-[50px]">
          <div
            class="lg:flex sm:block items-center gap-6"
            v-for="(item, i) in models"
            :key="i"
          >
            <img :src="item.photo_path" :alt="item.fullname" class="lg:w-[260px] w-screen lg:h-[320px] h-full rounded-xl object-cover" />
            <div class="block lg:mb-0 mb-12">
              <span class="block text-lg font-medium text-[#505A63] mt-3">{{
                getLocalizedField(item, 'position')
              }}</span>
              <div class="lg:text-[32px] text-2xl font-medium text-[#191C1F] uppercase">
                {{ getLocalizedField(item, 'full_name') }}
              </div>
              <!-- <span class="block text-base  font-medium text-[#505A63] mt-6">{{
                item.email
              }}</span>
              <span class="block text-base font-medium text-[#505A63]">{{
                item.phone
              }}</span> -->
              <span class="block lg:text-base text-sm font-normal text-[#505A63] mt-6">{{
                getLocalizedField(item, 'bio')
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<style></style>
