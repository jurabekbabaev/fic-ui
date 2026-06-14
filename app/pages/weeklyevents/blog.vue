<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const model = {
  id: 1,
  date: "03.04.2026",
  image_path: "",
  title: "Lorem ipsum dolor sit amet",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};
</script>

<template>
  <div class="min-h-screen">
    <div class="container">
      <template v-if="false">
        <div class="w-auto flex flex-col items-center">
          <img
            :src="model.image_path"
            alt=""
            class="lg:w-3/4 sm:w-full mt-24 object-cover"
            style="aspect-ratio: 16/9"
          />
          <div class="mt-10 lg:w-2/3 sm:w-full">
            <h4 class="text-[32px] font-black text-[#191C1F]">
              {{ model.title }}
            </h4>
            <p class="text-base font-normal text-[#505A63]">
              {{ model.date }}
            </p>
            <!-- <div class="text-base font-normal text-[#505A63] block mt-3.5">
              {{ model.content }}
            </div> -->
          </div>
        </div>
      </template>

      <template v-else>
        <h1
          class="lg:text-[64px] text-[32px] uppercase font-black lg:text-center sm:text-left mt-[100px] mb-14"
        >
          {{ t("Встречи") }}
        </h1>

        <!-- TODO: cards will be rendered here from API data -->
        <div class="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
          <!-- card template:
          <div class="mb-4 rounded-bl-xl rounded-br-xl" style="background: rgb(247, 247, 247)">
            <div class="card-item cursor-pointer">
              <div class="card-item-image" :style="{ backgroundImage: `url(${item.image_path})` }"></div>
              <div class="card-item-body">
                <div class="font-medium text-grey mb-1">{{ item.date }}</div>
                <div class="font-medium mb-2 lg:text-[24px] text-xl leading-normal">{{ item.title }}</div>
              </div>
            </div>
          </div>
          -->
        </div>
      </template>
    </div>
  </div>
</template>

<style></style>
