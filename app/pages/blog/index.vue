<script setup>
import { useI18n } from 'vue-i18n'
import {
  getLocalizedField,
  t as tHelper,
  date,
} from "~/composables/helpers";
const { t } = useI18n()
import { useBlogsStore } from "@/stores/blogs";
const store = useBlogsStore();
const filter = ref({
  subject_id: null,
  year: null,
  page: 1
});
const allModels = ref([]);
const isTestSubject = (item) => {
  const names = [
    item?.name,
    item?.name_ru,
    item?.name_uz,
    item?.name_en,
  ]
    .filter(Boolean)
    .map((value) => String(value).trim().toLowerCase());

  return names.includes("test");
};
const subjects = computed(() => {
  return store.subjects.filter((item) => !isTestSubject(item));
});
const pagination = computed(() => {
  return store.pagination;
});
// Backend filterlarni qo'llab-quvvatlamaydi, shuning uchun frontendda filtrlaymiz
const models = computed(() => {
  return allModels.value.filter((item) => {
    const matchSubject =
      !filter.value.subject_id || item.subject_id === filter.value.subject_id;
    const matchYear =
      !filter.value.year ||
      String(item.date || '').slice(0, 4) === String(filter.value.year);
    return matchSubject && matchYear;
  });
});
onMounted(() => {
  store.getSubjects()
  getModels();
})
const getModels = (params) => {
  store.getList(filter.value).then(_ => {
    if(params?.isFilter){
      allModels.value = store.list;
    }else{
      allModels.value = allModels.value.concat(store.list);
    }
  })
}
const localePath = useLocalePath();
const View = (item) => {
  const to = localePath(`/blog/${item.id}`);
  navigateTo(to);
}
const toNextPage = () => {
  filter.value.page++;
  getModels();
}
</script>
<template>
  <div>
    <div class="container">
      <h1
        class="lg:text-[64px] text-[32px] uppercase font-black lg:text-center sm:text-left mt-[50px] lg:mt-[100px] mb-8 lg:mb-14"
      >
        {{ t('Аналитика и статьи') }}
      </h1>

      <div class="filters justify-center mb-5">
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
          <el-select
            clearable
            v-model="filter.year"
            :placeholder="t('Все годы')"
            >
            <el-option label="2025" :value="2025" />
            <el-option label="2024" :value="2024" />
          </el-select>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="mb-4 rounded-bl-xl rounded-br-xl" v-for="(item, i) in models" :key="i" style="background: rgb(247, 247, 247);">
          <div class="card-item cursor-pointer" @click="View(item)">
            <div
              class="card-item-image"
              :style="{ backgroundImage: `url(${item.image_path})` }"
            ></div>
            <div class="card-item-body">
              <div class="font-medium text-grey mb-1">
                {{ getLocalizedField(item.subject, "name") }}
              </div>
              <div
                class="font-medium mb-2 lg:text-[32px] text-xl leading-normal"
              >
                {{ getLocalizedField(item, "title") }}
              </div>
              <div>{{ date(item.date, 'DD.MM.YYYY') }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center" v-if="pagination?.last_page > filter.page">
        <button class="btn btn-secondary" @click="toNextPage">{{$t('Посмотреть больше')}}</button>
      </div>

    </div>
  </div>
</template>

<style></style>
