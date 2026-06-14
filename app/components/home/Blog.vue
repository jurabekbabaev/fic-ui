<template>
  <div class="section" ref="blogSection">
    <div class="mainContainer">
      <div class="lg:text-center sm:text-left mb-[50px]">
        <h2 class="title-64 lg:text-[64px] text-[32px] mb-3">
          {{ t("Статьи") }}
        </h2>
      </div>

      <!-- <div class="filters justify-center mb-5">
        <div class="filter-field">
          <el-select
            clearable
            v-model="filter.subject_id"
            :placeholder="t('Все темы')"
          >
            <el-option
              v-for="item in subjects"
              :key="item.id"
              :label="tHelper(item, 'name')"
              :value="item.id"
            />
          </el-select>
        </div>
        <div class="filter-field">
          <el-select clearable v-model="filter.year" :placeholder="t('Все годы')">
            <el-option label="2025" value="2025" />
            <el-option label="2024" value="2024" />
          </el-select>
        </div>
      </div> -->

      <!-- <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
        <div class="mb-4">
          <div class="card-item">
            <div
              class="card-item-image"
              style="
                background-image: url('@/assets/images/home/6f652409742b7e603d7432bbc3dfde3bf3217b7f.png');
              "
            ></div>
            <div class="card-item-body">
              <div class="font-medium text-grey mb-1">
                {{ t("Налоговая политика") }}
              </div>
              <div
                class="font-medium mb-2 lg:text-[32px] text-xl leading-normal"
              >
                {{ t("Как меняется налоговая система") }}
              </div>
              <div>{{ t("12 июля 2025") }}</div>
            </div>
          </div>
        </div>
        <div class="mb-4">
          <div class="card-item">
            <div
              class="card-item-image"
              style="background-image: url('@/assets/images/home/blogs1.png')"
            ></div>
            <div class="card-item-body">
              <div class="font-medium text-grey mb-1">
                {{ t("Цифровизация") }}
              </div>
              <div
                class="font-medium mb-2 lg:text-[32px] text-xl leading-normal"
              >
                {{ t("Цифровые решения в госуправлении") }}
              </div>
              <div>{{ t("5 июля 2025") }}</div>
            </div>
          </div>
        </div>
      </div> -->
      <!-- Loading skeleton -->
      <div v-if="isLoading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="mb-4" v-for="n in 6" :key="n">
          <div class="card-item">
            <div
              class="card-item-image lg:h-[260px] h-[180px] bg-gray-200 animate-pulse"
            ></div>
            <div class="card-item-body">
              <div class="h-4 bg-gray-200 animate-pulse rounded mb-2"></div>
              <div class="h-6 bg-gray-200 animate-pulse rounded mb-2"></div>
              <div class="h-6 bg-gray-200 animate-pulse rounded mb-2"></div>
              <div class="h-4 bg-gray-200 animate-pulse rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Actual content -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          class="mb-4 rounded-bl-xl rounded-br-xl"
          v-for="(item, i) in data"
          :key="i"
          style="background: rgb(247, 247, 247)"
        >
          <div class="card-item cursor-pointer" @click="View(item)">
            <div
              class="card-item-image"
              :style="{ backgroundImage: `url(${item.image_path})` }"
            ></div>
            <!-- <div class="card-item-body">
              <div class="font-medium text-grey mb-1">
                {{ getLocalizedField(item.subject, "name") }}
              </div>
              <div
                class="font-medium mb-2 lg:text-[32px] text-xl leading-normal"
              >
                {{ getLocalizedField(item, "title") }}
              </div>
              <div>{{ date(item.date, "DD.MM.YYYY") }}</div>
            </div> -->
          </div>
        </div>
      </div>
      <div class="text-center mt-[24px] mb-8">
        <WLocaleLink to="/blog" class="btn btn-secondary">{{
          t("Узнать больше")
        }}</WLocaleLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import WLocaleLink from "~/components/shared/WLocaleLink.vue";
import { useI18n } from "vue-i18n";
import {
  getLocalizedField,
  getLocalizedTitle,
  t as tHelper,
} from "~/composables/helpers";
const { t } = useI18n();

import { useBlogsStore } from "@/stores/blogs";
const store = useBlogsStore();

const year = ref("");

const localePath = useLocalePath();
function View(item) {
  const to = localePath(`/blog/`);
  navigateTo(to);
}

const data = computed(() => {
  return store.list;
});

const subjects = computed(() => {
  return store.subjects;
});

const getData = async (params = {}) => {
  try {
    isLoading.value = true;
    await Promise.all([
      store.getList({ ...params, ...{ per_page: 6 } }),
      store.getSubjects(),
    ]);
    isLoading.value = false;
  } catch (error) {
    isLoading.value = false;
  }
};
const filter = ref({
  subject_id: null,
  year: null,
});

const blogSection = ref(null);
const isDataLoaded = ref(false);
const isLoading = ref(false);

watch(
  () => filter.value.subject_id,
  (newValue, oldValue) => {
    if (isDataLoaded.value && newValue !== oldValue) {
      getData(filter.value);
    }
  },
  { deep: true }
);

watch(
  () => filter.value.year,
  (newValue, oldValue) => {
    if (isDataLoaded.value && newValue !== oldValue) {
      getData(filter.value);
    }
  },
  { deep: true }
);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isDataLoaded.value) {
          getData(filter.value);
          isDataLoaded.value = true;
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
      rootMargin: "100px",
    }
  );

  if (blogSection.value) {
    observer.observe(blogSection.value);
  }

  onUnmounted(() => {
    observer.disconnect();
  });
});
</script>

<style></style>
