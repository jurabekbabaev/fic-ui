<template>
    <div class="flex items-center justify-center text-center">
      <div class="text-center">
        <img src="@/assets/images/home/Development-amico 1.png" alt="">
        <div class="text-[36px] font-bold text-[#191C1F] mt-6">{{ t("nodata.title") }}</div>
        <div class="flex justify-center">
          <p class="w-[436px] text-base font-normal text-[#505A63] mt-5">{{ t("nodata.description") }}</p>
        </div>
        <router-link to="/" class="btn btn-secondary mt-4">{{ t("nodata.backButton") }}</router-link>
      </div>
    </div>
  </template>

  <script setup lang="ts">
  import { useI18n } from "vue-i18n";

  const { t } = useI18n();
  </script>
  
  <style>
  
  </style>