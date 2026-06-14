<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import { getLocalizedField } from "~/composables/helpers";
import { useNewsStore } from "@/stores/news";
import PageHero from "~/components/shared/PageHero4.vue";
const models = computed(() => {
  return store.list;
});
const store = useNewsStore();
const page = ref(1);
const getModels = () => {
  store.getList({ page: page.value });
};
const pagination = computed(() => {
  return store.pagination;
});
onMounted(() => {
  getModels();
});
const toNextPage = () => {
  page.value++;
  getModels();
};
</script>
<template>
  <div>
    <PageHero :title="t('Новости')" />
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          class="p-4 rounded-xl bg-[#F7F7F7]"
          v-for="(model, index) in models"
          :key="index"
        >
          <img :src="model.image_path" alt="" />
          <div class="flex justify-between mt-3">
            <p class="text-[#00000080] text-sm font-normal">
              {{ date(model.date, "MONTH DAY, YYYY") }}
            </p>
            <a
              :href="model.other_link"
              target="_blank"
              class="text-[#191C1F] text-sm font-normal flex items-center"
            >
              <span>{{ $t("Подробнее") }}</span>
              <i class="icon-move-right ml-1"></i>
            </a>
          </div>
          <p class="text-base font-medium mt-3 text-[#191C1F]">
            {{ getLocalizedField(model, "title") }}
          </p>
        </div>
      </div>
      <div class="text-center" v-if="pagination && pagination.last_page > page">
        <button class="btn btn-secondary" @click="toNextPage">
          {{ $t("Посмотреть больше") }}
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
