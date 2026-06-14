<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref, onMounted, onBeforeUnmount } from "vue";

const { t } = useI18n();

const stats = [
  { target: 43, suffix: "", decimals: 0, label: "homePage.councilStats.members" },
  { target: 85, suffix: "", decimals: 0, label: "homePage.councilStats.companies" },
  { target: 19, suffix: "", decimals: 0, label: "homePage.councilStats.countries" },
  { target: 16, suffix: "", decimals: 0, label: "homePage.councilStats.workingGroups" },
  { target: 120, suffix: "", decimals: 0, label: "homePage.councilStats.initiatives" },
];

const displayValues = ref(stats.map(() => "0"));
const containerRef = ref<HTMLElement | null>(null);
const hasAnimated = ref(false);
let observer: IntersectionObserver | null = null;

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function animateCountUp() {
  if (hasAnimated.value) return;
  hasAnimated.value = true;

  const duration = 1800;
  const startTime = performance.now();

  function update(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutCubic(progress);

    stats.forEach((stat, index) => {
      const currentVal = easedProgress * stat.target;
      const formatted =
        stat.decimals > 0
          ? currentVal.toFixed(stat.decimals)
          : Math.floor(currentVal).toString();
      displayValues.value[index] = `${formatted}${stat.suffix}`;
    });

    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) animateCountUp();
      });
    },
    { threshold: 0.3 }
  );
  if (containerRef.value) observer.observe(containerRef.value);
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>

<template>
  <div class="relative z-[20] bg-white pt-[100px]">
    <div class="container">
      <h2 class="title-64 text-center mb-8 text-[32px] lg:mb-12 lg:text-[64px]">
        {{ t("homePage.councilStats.title") }}
      </h2>
      <div
        ref="containerRef"
        class="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 lg:grid-cols-5"
      >
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          class="card-item p-5 lg:p-7 flex flex-col justify-between min-h-[130px]"
        >
          <div
            class="text-[36px] font-bold leading-none text-[#191C1F] lg:text-[52px]"
          >
            {{ displayValues[index] }}
          </div>
          <div class="mt-3 text-sm text-grey lg:text-base">
            {{ t(stat.label) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
