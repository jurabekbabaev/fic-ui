<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import {
  getLocalizedField,
} from "~/composables/helpers";
import { useWeeklyEventsStore } from '@/stores/weeklyEvents'
const store = useWeeklyEventsStore();
const route = useRoute();
const paramId = computed(() => {
  return route.params['id'];
})
const model = ref(null);
const getModel = () => {
  store.getModel(paramId.value).then(res => {
    model.value = res;
  })
}
onMounted(() => {
  getModel();
})
</script>
<template>
  <div class="container">
    <client-only>
      <div class="w-full mt-[100px]">
        <div class="w-auto flex flex-col items-center" v-if="model">
          <img :src="model.image_path" alt="" />
          <div class="lg:w-2/4 w-full">
            <h3 class="lg:text-[32px] text-[#191C1F] font-black mt-10 mb-5">
              {{ getLocalizedField(model, 'title') }}
            </h3>
            <span
              class="rounded-[30px] bg-[#191C1F] text-white py-1 px-4 text-base font-normal"
            >
              <span v-for="(dateItem,index) in model.dates"><span v-if="index>0"> - </span> {{ date(dateItem, 'DD.MM.YYYY') }}</span>
            </span>
            <div class="text-[#505A63] text-base font-normal mt-8 page-content" v-html="getLocalizedField(model, 'content')"></div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
            <img v-for="(path,index) in model.gallery" :key="index" :src="fullPath(path)" alt="">
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<style></style>
