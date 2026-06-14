<template>
  <div class="section w-full">
    <div class="w-full mb-[0px]">
      <div class="mainContainer lg:text-center sm:text-left text-black">
        <h2 class="title-64 lg:text-[64px] text-[32px] mb-5">
          {{ $t("Сильные рядом, которые идут с нами вперёд") }}
        </h2>
        <div class="lg:text-xl text-base mb-4">
          {{ $t("Вместе мы создаём результат, которым можно гордиться.") }}
        </div>
        <WLocaleLink to="/advice" class="btn btn-secondary">
          {{ $t("Рабочие группы") }}
        </WLocaleLink>
      </div>
      <div class="w-full">
        <Carousel
          class="mt-10"
          :items="items"
          :breakpoints="bp"
          :space-between="20"
          :autoplay-ms="3000"
          :height="250"
          :show-controls="false"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import Carousel from "@/components/base/Carousel.vue"
import WLocaleLink from "~/components/shared/WLocaleLink.vue";
const img1 = img("plenarysessions/info3_4.png")
const img2 = img("plenarysessions/info2_4.png")
const img3 = img("plenarysessions/info3_2.png")
const img4 = img("plenarysessions/ps_2.png")

const items = [
  img1,
  img2,
  img3,
  img4,
]

const breakpoints = {
  320: {
    value: 1,
  },
  640: {
    value: 2,
  },
  1024: {
    value: 3,
  },
  1280: {
    value: 4,
  },
};

// Normalize to {width: perView} object expected by Carousel
const bp = Object.fromEntries(
  Object.entries(breakpoints).map(([k, v]) => [k, v.value])
)
</script>

<style scoped>
.mySwiper {
  width: 100%;
  max-width: 100%;
  padding: 10px 0;
}
</style>
