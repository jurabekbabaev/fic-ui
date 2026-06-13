<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref, watch, onBeforeUnmount } from "vue";

const { t, locale } = useI18n();
const localePath = useLocalePath();

const stats = [
  { value: 135, prefix: ">$", suffix: " млрд", decimals: 0, label: "ВВП (цель 2026 — >$150 млрд)" },
  { value: 7.7,  prefix: "",   suffix: "%",      decimals: 1, label: "рост ВВП (МВФ, 2025)" },
  { value: 42,   prefix: "~$", suffix: " млрд",  decimals: 0, label: "приток иностранных инвестиций" },
  { raw: "BB",                                                 label: "рейтинг Fitch и S&P; Moody's Ba3 (прогноз позитивный)" },
  { value: 55,   prefix: "$",  suffix: " млрд",  decimals: 0, label: "золотовалютные резервы (+35%)" },
  { value: 7.3,  prefix: "",   suffix: "%",      decimals: 1, label: "инфляция (с 9,8% годом ранее)" },
  { value: 23,   prefix: "+",  suffix: "%",      decimals: 0, label: "рост экспорта (~$32 млрд)" },
  { value: 31.9, prefix: "",   suffix: "%",      decimals: 1, label: "совокупные инвестиции к ВВП" },
  { value: 4.8,  prefix: "",   suffix: "%",      decimals: 1, label: "безработица (минимум)" },
];

function formatStat(stat: typeof stats[number], currentVal: number): string {
  const decimals = (stat as any).decimals ?? 0;
  const sep = locale.value === "en" ? "." : ",";
  const formatted = decimals > 0
    ? currentVal.toFixed(decimals).replace(".", sep)
    : Math.floor(currentVal).toString();
  const suffix = (stat as any).suffix ? t((stat as any).suffix) : "";
  return `${(stat as any).prefix ?? ""}${formatted}${suffix}`;
}

const displayValues = ref(
  stats.map((s) => ((s as any).raw !== undefined ? (s as any).raw : formatStat(s, 0)))
);

const statsContainer = ref<HTMLElement | null>(null);
const statsVisible = ref(false);
const hasAnimated = ref(false);
let observer: IntersectionObserver | null = null;

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function animateCountUp() {
  if (hasAnimated.value) return;
  hasAnimated.value = true;
  statsVisible.value = true;

  const duration = 2000;
  const startTime = performance.now();

  function update(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutCubic(progress);

    stats.forEach((stat, index) => {
      if ((stat as any).raw !== undefined) return;
      const currentVal = easedProgress * ((stat as any).value ?? 0);
      displayValues.value[index] = formatStat(stat, currentVal);
    });

    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

watch(
  statsContainer,
  (el) => {
    if (!el || hasAnimated.value) return;
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      animateCountUp();
      return;
    }
    observer?.disconnect();
    observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          animateCountUp();
          observer?.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
  },
  { immediate: true }
);

onBeforeUnmount(() => observer?.disconnect());
</script>

<template>
  <div class="bg-white py-[80px]">
    <div class="container">
      <h2 class="title-64 text-center mb-8 text-[32px] lg:mb-12 lg:text-[64px]">
        {{ t("Инвестиции в Узбекистан") }}
      </h2>

      <div
        ref="statsContainer"
        class="iStats"
        :class="{ 'is-visible': statsVisible }"
      >
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          class="iStats__card"
          :style="{ '--delay': `${index * 55}ms` }"
        >
          <div class="iStats__value">{{ displayValues[index] }}</div>
          <div class="iStats__label">{{ t(stat.label) }}</div>
        </div>
      </div>

      <div class="flex justify-center mt-10">
        <NuxtLink :to="localePath('/investmen')" class="btn btn-secondary">
          {{ t("Batafsil") }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.iStats {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

@media (min-width: 640px) {
  .iStats {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
  }
}

@media (min-width: 1024px) {
  .iStats {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
  }
}

.iStats__card {
  display: flex;
  flex-direction: column;
  min-height: 140px;
  padding: 20px;
  border-radius: 16px;
  border: 1px solid rgba(25, 28, 31, 0.07);
  background: #fff;
  box-shadow: 0 14px 36px -24px rgba(25, 28, 31, 0.28);
  opacity: 0;
  transform: translateY(16px);
  transition:
    opacity 0.55s ease,
    transform 0.55s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.28s ease,
    border-color 0.28s ease;
}

.iStats.is-visible .iStats__card {
  opacity: 1;
  transform: translateY(0);
  transition-delay: var(--delay, 0ms), var(--delay, 0ms), 0s, 0s;
}

.iStats__card:hover {
  border-color: rgba(25, 28, 31, 0.14);
  box-shadow: 0 22px 48px -24px rgba(25, 28, 31, 0.38);
}

.iStats__value {
  font-family: "Aeonik Pro", "Onest", sans-serif;
  font-size: clamp(24px, 3vw, 38px);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: #191c1f;
}

.iStats__label {
  margin-top: auto;
  padding-top: 16px;
  font-size: 13px;
  line-height: 1.4;
  color: #505a63;
}

@media (min-width: 1024px) {
  .iStats__card {
    min-height: 160px;
    padding: 26px;
  }

  .iStats__label {
    font-size: 14px;
  }
}
</style>
