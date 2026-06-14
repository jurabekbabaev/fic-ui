<template>
  <div class="section">
    <div class="mainContainer">
      <div class="mb-[50px]" v-if="route.path != '/maininfo'">
        <h2 class="title-64 lg:text-[64px] text-[32px] mb-3">
          {{ t("Инвестиции в Узбекистан") }}
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="card-item p-4 pb-5">
          <div class="round-icon mb-4">
            <i class="icon-chart-combinate"></i>
          </div>
          <div class="font-bold mb-1 text-[18px]">
            {{ t("Краткое руководство инвестора") }}
          </div>
          <div class="text-grey">
            {{
              t(
                "В руководстве представлена ​​исчерпывающая информация о формах корпоративного присутствия, правилах и процедурах регистрации"
              )
            }}
          </div>
        </div>
        <div class="card-item p-4 pb-5">
          <div class="round-icon mb-4">
            <i class="icon-map-uzb"></i>
          </div>
          <div class="font-bold mb-1 text-[18px]">
            {{ t("Инвестиционный климат Узбекистана") }}
          </div>
          <div class="text-grey">
            {{
              t(
                "Узбекистан активно работает над улучшением условий для иностранных инвесторов и модернизацией своей экономики, предоставляя перспективные инвестиционные возможности"
              )
            }}
          </div>
        </div>
        <div class="card-item p-4 pb-5">
          <div class="round-icon mb-4">
            <i class="icon-circle-dollar"></i>
          </div>
          <div class="font-bold mb-1 text-[18px]">
            {{ t("Региональные новости для инвесторов") }}
          </div>
          <div class="text-grey">
            {{
              t(
                "Текущий выпуск Investor Regional Update посвящен Наманганской области. В дальнейшем будут и другие обновления, охватывающие и другие регионы"
              )
            }}
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
