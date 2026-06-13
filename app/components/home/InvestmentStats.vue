<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref, onMounted, onBeforeUnmount } from "vue";

const { t } = useI18n();
const localePath = useLocalePath();

const stats = [
  {
    target: 137,
    prefix: "$",
    suffix: "B+",
    decimals: 0,
    label: "ВВП 2025 (МВФ)",
  },
  { target: 7.6, prefix: "", suffix: "%", decimals: 1, label: "Рост ВВП 2025" },
  { target: 37.7, prefix: "", suffix: "M", decimals: 1, label: "Население" },
  {
    target: 43,
    prefix: "$",
    suffix: "B+",
    decimals: 0,
    label: "Иностр. инвестиции 2025 *",
  },
];

const displayValues = ref(stats.map(() => "0"));
const statsContainer = ref<HTMLElement | null>(null);
const hasAnimated = ref(false);
let observer: IntersectionObserver | null = null;

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function animateCountUp() {
  if (hasAnimated.value) return;
  hasAnimated.value = true;

  const duration = 2000;
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
      displayValues.value[index] = `${stat.prefix}${formatted}${stat.suffix}`;
    });

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCountUp();
        }
      });
    },
    { threshold: 0.3 }
  );

  if (statsContainer.value) {
    observer.observe(statsContainer.value);
  }
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
  <div class="bg-white py-[80px]">
    <div class="container">
      <h2 class="title-64 text-center mb-8 text-[32px] lg:mb-12 lg:text-[64px]">
        {{ t("Инвестиции в Узбекистан") }}
      </h2>
      <div
        ref="statsContainer"
        class="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
      >
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          class="card-item p-5 lg:p-7"
        >
          <div
            class="text-[28px] font-bold leading-none text-[#191C1F] lg:text-[40px]"
          >
            {{ displayValues[index] }}
          </div>
          <div class="mt-2 text-sm text-grey lg:text-base">
            {{ t(stat.label) }}
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-10">
        <NuxtLink :to="localePath('/investmen')" class="btn btn-primary">
          {{ t("Batafsil") }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
