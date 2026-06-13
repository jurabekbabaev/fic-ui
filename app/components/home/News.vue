<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import {
  getLocalizedField,
  getLocalizedTitle,
  t as tHelper,
} from "~/composables/helpers";
import WLocaleLink from "~/components/shared/WLocaleLink.vue";
import { useNewsStore } from "@/stores/news";
const models = computed(() => {
  return store.list;
})
const store = useNewsStore()
const getModels = () => {
  store.getList({per_page: 6})
}
onMounted(() => {
  getModels();
})
</script>

<template>
  <div class="bg-[#191C1F] py-[80px]">
    <div class="container">
      <!-- Header -->
      <div class="mb-[50px] flex justify-between items-center">
        <h1 class="lg:text-[64px] text-[32px] font-black text-white leading-1">
          {{ t('Новости') }}
        </h1>
        <WLocaleLink to="/news" class="btn btn-secondary btn-sm">
          {{ t('Все новости') }}
        </WLocaleLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div class="p-4 rounded-xl bg-[#F7F7F7]" v-for="(model,index) in models" :key="index">
          <img :src="model.image_path" alt="" />
          <div class="flex justify-between mt-3">
            <p class="text-[#00000080] text-sm font-normal">{{ date(model.date, 'MONTH DAY, YYYY') }}</p>
            <a :href="model.other_link" target="_blank" class="text-[#191C1F] text-sm font-normal flex items-center">
              <span>{{$t('Подробнее')}}</span> <i class="icon-move-right ml-1"></i>
            </a>
          </div>
          <p class="text-base font-medium mt-3 text-[#191C1F]">
            {{ getLocalizedField(model, "title") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
