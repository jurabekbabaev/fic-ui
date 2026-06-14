<template>
  <div class="section">
    <div class="mainContainer">
      <div class="mb-[50px]" v-if="route.path != '/maininfo'">
        <h2 class="title-64 lg:text-[64px] text-[32px] mb-3">
          {{ t("homePage.localeInvestors.title") }}
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="card-item p-4 pb-5">
          <div class="round-icon mb-4">
            <i class="icon-chart-combinate"></i>
          </div>
          <div class="font-bold mb-1 text-[18px]">
            {{ t("homePage.localeInvestors.guide.title") }}
          </div>
          <div class="text-grey">
            {{ t("homePage.localeInvestors.guide.description") }}
          </div>
        </div>
        <div class="card-item p-4 pb-5">
          <div class="round-icon mb-4">
            <i class="icon-map-uzb"></i>
          </div>
          <div class="font-bold mb-1 text-[18px]">
            {{ t("homePage.localeInvestors.climate.title") }}
          </div>
          <div class="text-grey">
            {{ t("homePage.localeInvestors.climate.description") }}
          </div>
        </div>
        <div class="card-item p-4 pb-5">
          <div class="round-icon mb-4">
            <i class="icon-circle-dollar"></i>
          </div>
          <div class="font-bold mb-1 text-[18px]">
            {{ t("homePage.localeInvestors.regional.title") }}
          </div>
          <div class="text-grey">
            {{ t("homePage.localeInvestors.regional.description") }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style></style>
