<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { ref } from "vue";
import {
  getLocalizedField,
} from "~/composables/helpers";
const store = useWeeklyEventsStore();
const models = computed(() => {
  return store.list;
})
const loading = computed(() => {
  return store.loading;
})
const pagination = computed(() => {
  return store.pagination;
})
const filter = ref({
  page: 1,
  per_page: 5
})

const getModels = () => {
  store.getList(filter.value);
}

const toNextPage = () => {
  filter.value.page++;
  store.appendList({ page: filter.value.page, per_page: 5 });
}

const isLastPage = computed(() => {
  return pagination.value && pagination.value.last_page <= filter.value.page;
})

const closeList = () => {
  filter.value.page = 1;
  getModels();
}

onMounted(() => {
  getModels();
})


const localePath = useLocalePath();

function View(item) {
  const to = localePath(`/weeklyevents/${item.id}`);
  navigateTo(to);
}
</script>
<template>
  <div>
    <div class="container">
      <h1
        class="lg:text-[64px] text-[32px] uppercase font-black lg:text-center sm:text-left mt-[100px] mb-14"
      >
        {{ t('weeklyEvents.index.title') }}
      </h1>
      <div class="mt-12">
        <h3 class="lg:text-[32px] text-xl font-black text-[#191C1F] mb-8 uppercase lg:text-center sm:text-left">
          {{ t('weeklyEvents.index.subtitle') }}
        </h3>
        <!-- Loading Skeletons (initial load: no items yet) -->
        <div v-if="loading && models.length === 0" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          <div v-for="i in 5" :key="'sk-' + i" class="skeleton-card">
            <div class="skeleton-img"></div>
            <div class="skeleton-body">
              <div class="skeleton-line short"></div>
              <div class="skeleton-line"></div>
              <div class="skeleton-line medium"></div>
            </div>
          </div>
        </div>

        <!-- Actual cards -->
        <div v-if="models.length > 0" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          <div v-for="(item, i) in models" :key="item.id || i">
            <img :src="item.preview_image_path" class="w-full rounded-tl-xl rounded-tr-xl h-[180px] sm:h-[220px] lg:h-[320px] object-cover" />
            <div
              class="bg-[#F7F7F7] pt-5 pb-6 px-3 rounded-bl-xl rounded-br-xl cursor-pointer"
              @click="View(item)"
            >
              <p class="text-[#505A63] text-base font-medium">
                {{ t("weeklyEvents.index.card.label") }}
              </p>
              <p class="text-[#191C1F] text-base font-medium pt-2 content">
                {{ getLocalizedField(item, 'title') }}
              </p>
              <p class="text-[#505A63] text-base font-normal pt-2">
                <span v-for="(dateItem,index) in item.dates"><span v-if="index>0"> - </span> {{ date(dateItem, 'DD.MM.YYYY') }}</span>
              </p>
            </div>
          </div>
        </div>

        <!-- Skeleton appended at bottom while loading more -->
        <div v-if="loading && models.length > 0" class="grid lg:grid-cols-5 sm:grid-cols-2 gap-5 mt-5">
          <div v-for="i in 5" :key="'sk-more-' + i" class="skeleton-card">
            <div class="skeleton-img"></div>
            <div class="skeleton-body">
              <div class="skeleton-line short"></div>
              <div class="skeleton-line"></div>
              <div class="skeleton-line medium"></div>
            </div>
          </div>
        </div>

        <!-- Pagination buttons -->
        <div class="w-full flex justify-center mt-8" v-if="!loading && models.length > 0">
          <button
            v-if="!isLastPage"
            class="btn btn-secondary"
            @click="toNextPage"
          >
            {{ t('weeklyEvents.index.viewMore') }}
          </button>
          <button
            v-else-if="models.length > 5"
            class="btn btn-outline-secondary"
            @click="closeList"
          >
            {{ t('weeklyEvents.index.close') }}
          </button>
        </div>
      </div>
    </div>
    <Partners class="lg:block sm:hidden" />
  </div>
</template>

<style scoped>
:deep(.content) {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
}

/* Skeleton styles */
@keyframes shimmer {
  0% { background-position: -468px 0; }
  100% { background-position: 468px 0; }
}

.skeleton-card {
  border-radius: 12px;
  overflow: hidden;
}

.skeleton-img {
  width: 100%;
  aspect-ratio: 4 / 3;
  background: linear-gradient(90deg, #e8e8e8 25%, #f5f5f5 50%, #e8e8e8 75%);
  background-size: 936px 100%;
  animation: shimmer 1.4s infinite linear;
}

.skeleton-body {
  background: #F7F7F7;
  padding: 16px 12px 20px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.skeleton-line {
  height: 14px;
  border-radius: 6px;
  width: 100%;
  background: linear-gradient(90deg, #e0e0e0 25%, #ebebeb 50%, #e0e0e0 75%);
  background-size: 936px 100%;
  animation: shimmer 1.4s infinite linear;
}

.skeleton-line.short {
  width: 50%;
}

.skeleton-line.medium {
  width: 70%;
}
</style>
