<template>
  <div class="section">
    <div>
      <div class="mainContainer lg:text-center sm:text-left">
        <div class="w-full flex justify-center">
          <h2
            class="title-64 lg:text-[64px] text-[32px] w-[729px] font-extrabold mb-5"
            style="color: rgba(0, 0, 0, 1)"
          >
            {{ $t("Пленарные сессии в объективе") }}
          </h2>
        </div>
        <div class="w-full flex justify-center">
          <p class="lg:text-xl text-base font-normal leading-[100%] w-[596px]">
            {{ $t("Диалог государства и инвесторов, где обсуждаются реформы, принимаются ключевые решения и создаётся инвестиционное будущее Узбекистана") }}
          </p>
        </div>
        <WLocaleLink to="/plenarysessions" class="btn btn-primary mt-6">{{
          $t("Узнать пробронее")
        }}</WLocaleLink>
      </div>

      <div class="mt-10">
        <ClientOnly>
          <Swiper
            :slides-per-view="viewportWidth >= 1024 ? 1.18 : 1.08"
            :space-between="20"
            :centered-slides="true"
            :loop="true"
            :speed="700"
            :modules="modules"
            class="video-section-swiper"
            :autoplay="{
              delay: 3500,
              disableOnInteraction: false,
            }"
            @swiper="onSwiper"
          >
            <SwiperSlide v-for="(item, index) in slides" :key="index">
              <div
                :style="item"
                class="w-full lg:h-[514px] h-[218px] rounded-[12px]"
              ></div>
            </SwiperSlide>
          </Swiper>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script setup>
import WLocaleLink from "~/components/shared/WLocaleLink.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import { computed, onMounted, onUnmounted, ref } from "vue";
import "swiper/css";

const bgImage1 = "/images/cb5dddcfe5111a3955f8298972b7716a7bd6bdbc.png";
const bgImage2 = "/images/27d62ffabcf325674a3da4e2930313a8ea1ad07b.png";

const makeStyle = (img) => ({
  backgroundImage: `url('${img}')`,
  backgroundSize: "cover",
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
});

// Enough slides for Swiper v12 loop to work seamlessly
const slides = computed(() => [
  makeStyle(bgImage1),
  makeStyle(bgImage2),
  makeStyle(bgImage1),
  makeStyle(bgImage2),
  makeStyle(bgImage1),
  makeStyle(bgImage2),
]);

const modules = [Autoplay];

const swiperInstance = ref(null);

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

const viewportWidth = ref(typeof window !== "undefined" ? window.innerWidth : 1440);

const updateViewportWidth = () => {
  viewportWidth.value = window.innerWidth;
};

const desktopHeight = computed(() => (viewportWidth.value >= 1024 ? 514 : 218));

onMounted(() => {
  updateViewportWidth();
  window.addEventListener("resize", updateViewportWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateViewportWidth);
});
</script>

<style scoped lang="scss">
.video-section-swiper :deep(.swiper-slide) {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.45s ease, opacity 0.45s ease;
  opacity: 0.72;
}

.video-section-swiper :deep(.swiper-slide-active) {
  opacity: 1;
}

.video-section-swiper :deep(.swiper-wrapper) {
  align-items: center;
}
</style>
