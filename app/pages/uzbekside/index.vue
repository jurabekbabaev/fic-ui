<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import {
  getLocalizedField,
} from "~/composables/helpers";
import { useUzbekExpertsStore } from '@/stores/uzbekExperts'
const store = useUzbekExpertsStore();
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
      <div class="container">
        <h1
          class="lg:text-[64px] text-[32px] uppercase font-black mb-10 mt-12"
        >
          {{ t('Узбекская сторона') }}
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 lg:gap-[50px]">
          <div
            class="lg:flex items-center gap-6"
            v-for="(item, i) in models"
            :key="i"
          >
            <img
              :src="item.image_path"
              :alt="item.fullname"
              class="shrink-0 w-full lg:w-[260px] h-[360px] sm:h-[440px] md:h-[300px] lg:h-[320px] rounded-xl object-cover object-top lg:object-center mb-4 lg:mb-0"
            />
            <div class="block">
              <span class="block text-base lg:text-lg font-medium text-[#505A63] mt-3">{{
                getLocalizedField(item, 'position')
              }}</span>
              <div class="text-2xl lg:text-[32px] font-medium text-[#191C1F] uppercase">
                {{ getLocalizedField(item, 'full_name') }}
              </div>
              <span class="block text-sm lg:text-base font-normal text-[#505A63] mt-6">{{
                getLocalizedField(item, 'about')
              }}</span>
            </div>
          </div>
        </div><div class="uzb-members-footer-copy">
          <div class="uzb-members-footer-text">
            {{
              t(
                "Официальный состав правительственной стороны Совета. Основание — Постановление Президента № ПП-226, Приложение № 2."
              )
            }}
          </div>
          <a
            href="https://lex.uz/ru/docs/7637571"
            class="uzb-members-footer-link"
            target="_blank"
          >
            {{ t("Узнать больше") }}
          </a>
        </div>
      </div>
      
    </client-only>
  </div>
</template>

<style>

.uzb-members-footer-copy {
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  margin-top: 50px;
}

.uzb-members-footer-text {
  max-width: 760px;
  font-size: 16px;
  line-height: 1.45;
  margin-bottom: 16px;
}

.uzb-members-footer-link {
  text-transform: uppercase;
  font-weight: 400;
  font-size: 14px;
  color: #191c1f;
  opacity: 0.6;
}

</style>
