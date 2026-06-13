<script setup lang="ts">
import { nextTick, watch } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import BgImage from "@/assets/images/plenarysessions/image 4.png";
import BgImageMobile from "@/assets/images/plenarysessions/Без имени-1 1.png";
import ResultSection from "./result.vue";

const route = useRoute();
const isMobile = ref(false);

const normalizedTargetMap: Record<string, string> = {
  "plenary-2023": "plenary-2022",
};

const scrollToTarget = async () => {
  if (typeof window === "undefined") return;

  await nextTick();

  const target = route.query.target;
  if (!target || typeof target !== "string") return;

  const normalizedTarget = normalizedTargetMap[target] || target;
  const element = document.getElementById(normalizedTarget);
  if (!element) return;

  setTimeout(() => {
    const offset = 110;
    const top =
      element.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }, 100);
};

onMounted(() => {
  if (typeof window !== 'undefined') {
    const handleResize = () => {
      isMobile.value = window.innerWidth <= 768;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });
  }

  scrollToTarget();
});

watch(
  () => route.query.target,
  () => {
    scrollToTarget();
  }
);
</script>

<template>
  <client-only>
    <div>
      <div class="w-full h-[800px]">
        <img
          :src="BgImage"
          alt=""
          class="w-screen h-[800px] absolute top-0 -z-1 object-cover object-top"
          v-if="!isMobile"
        />
        <img
          :src="BgImageMobile"
          alt=""
          class="w-screen h-full absolute top-0 -z-1"
          v-else
          
        />
        <div class="container">
          <div
            class="absolute uppercase text-white lg:text-[64px] text-[32px] lg:w-[736px] w-[260px] font-black"
            :class="[isMobile ? 'title-mobile' : 'title']"
          >
            {{ t('Результаты пленарных сессий') }}
          </div>
        </div>
      </div>
      <div class="container">
        <!-- 1-section -->
        <div>
          <ResultSection />
        </div>
      </div>
    </div>
  </client-only>
</template>

<style scoped>
:deep(.title) {
  transform: translate(0%, 460px);
}

:deep(.title-mobile) {
  transform: translate(0%, 380px);
}
</style>
