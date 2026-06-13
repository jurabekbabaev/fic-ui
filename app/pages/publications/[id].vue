<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import { useBlogsStore } from "@/stores/blogs";
import { getLocalizedField } from "~/composables/helpers";
const store = useBlogsStore();
import {useRoute} from 'vue-router'
const route = useRoute()
const routeid = route.params.id;

// Reactive data for blog details
const blogData = ref(null);
const isLoading = ref(true);

const getData = async () => {
  try {
    isLoading.value = true;
    const response = await store.getModel(routeid);
    blogData.value = response;
    isLoading.value = false;
  } catch (error) {
    isLoading.value = false;
  }
};

onMounted(() => {
  getData();
});
</script>
<template>
  <div>
    <client-only>
      <div class="container">
        <div class="w-full">
          <!-- Loading state -->
          <div v-if="isLoading" class="w-auto flex flex-col items-center">
            <div class="lg:w-3/4 sm:w-full mt-24 h-64 bg-gray-200 animate-pulse rounded"></div>
            <div class="mt-10 lg:w-2/3 sm:w-full">
              <div class="h-8 bg-gray-200 animate-pulse rounded mb-4"></div>
              <div class="h-4 bg-gray-200 animate-pulse rounded mb-2"></div>
              <div class="h-4 bg-gray-200 animate-pulse rounded mb-2"></div>
            </div>
          </div>
          
          <!-- Content when data is loaded -->
          <div v-else-if="blogData" class="w-auto flex flex-col items-center">
            <img :src="blogData.image_path" alt="" class="lg:w-3/4 sm:w-full h-[460px] mt-24" />
            <div class="mt-10 lg:w-2/3 sm:w-full">
              <h4 class="text-[32px] font-black text-[#191C1F]">
                {{ getLocalizedField(blogData, 'title') }}
              </h4>
              <p class="text-base font-normal text-[#505A63]">
                {{ getLocalizedField(blogData, 'category') }}
              </p>
              <p class="text-base font-normal text-[#505A63]">
                {{ blogData.date || blogData.created_at }}
              </p>
              <div class="text-base font-normal text-[#505A63] block mt-3.5" v-html="getLocalizedField(blogData, 'content')">
              </div>
            </div>
          </div>
          
          <!-- Error state -->
          <div v-else class="w-auto flex flex-col items-center mt-24">
            <div class="text-center">
              <h4 class="text-[32px] font-black text-[#191C1F] mb-4">
                {{ t("Ma'lumot topilmadi") }}
              </h4>
              <p class="text-base font-normal text-[#505A63]">
                {{ t("Kechirasiz, bu blog mavjud emas yoki o'chirilgan.") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<style></style>
