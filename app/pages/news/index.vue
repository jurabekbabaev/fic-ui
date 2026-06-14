<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import {
  getLocalizedField,
  getLocalizedTitle,
  t as tHelper,
} from "~/composables/helpers";
import { useNewsStore } from "@/stores/news";
const models = computed(() => {
  return store.list;
})
const store = useNewsStore();
const page = ref(1);
const getModels = () => {
  store.getList({page: page.value})
}
const pagination = computed(() => {
  return store.pagination;
});
onMounted(() => {
  getModels();
})
const toNextPage = () => {
  page.value++;
  getModels();
}
</script>
<template>
  <div>
    <div class="container">
      <h1
        class="lg:text-[64px] text-[32px] uppercase font-black lg:text-center sm:text-left mt-[100px] mb-14"
      >
        {{ t('newsPage.title') }}
      </h1>
      <div class="grid lg:grid-cols-3 sm:grid-cols-1 gap-5">
        <div class="p-4 rounded-xl bg-[#F7F7F7]" v-for="(model,index) in models" :key="index">
          <img :src="model.image_path" alt="" />
          <div class="flex justify-between mt-3">
            <p class="text-[#00000080] text-sm font-normal">
              {{ date(model.date, 'MONTH DAY, YYYY') }}
            </p>
            <a :href="model.other_link" target="_blank" class="text-[#191C1F] text-sm font-normal flex items-center">
              <span>{{ t('newsPage.moreLabel') }}</span> <i class="icon-move-right ml-1"></i>
            </a>
          </div>
          <p class="text-base font-medium mt-3 text-[#191C1F]">
            {{ getLocalizedField(model, "title") }}
          </p>
        </div>
      </div>
      <div class="text-center" v-if="pagination && pagination.last_page > page">
        <button class="btn btn-secondary" @click="toNextPage">{{ t('newsPage.loadMoreButton') }}</button>
      </div>
    </div>
  </div>
</template>

<style></style>
