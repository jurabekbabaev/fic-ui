<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref, onMounted, onBeforeUnmount } from "vue";

const { t } = useI18n();

useHead({
  title: "Инвестиции в Узбекистан | FIC",
});

const stats = [
  { target: 137, prefix: "$", suffix: "B+", decimals: 0, label: "ВВП 2025 (МВФ)" },
  { target: 7.6, prefix: "", suffix: "%", decimals: 1, label: "Рост ВВП 2025" },
  { target: 37.7, prefix: "", suffix: "M", decimals: 1, label: "Население" },
  { target: 43, prefix: "$", suffix: "B+", decimals: 0, label: "Иностр. инвестиции 2025 *" },
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
      const formatted = stat.decimals > 0
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

const paragraphs = [
  "С 2016 года мы наблюдали, как Узбекистан трансформировался из преимущественно закрытой экономики в один из самых динамичных инвестиционных направлений Евразии. Программа реформ, начавшаяся в 2017 году, перестроила правовую базу, открыла рынки капитала и сделала Узбекистан подлинным приоритетом для международного капитала.",
  "2025 год стал явной точкой перелома. Fitch и S&P повысили суверенный рейтинг Узбекистана до BB — первое повышение с 2018 года — сигнализируя институциональным инвесторам об устойчивом улучшении макрофундаментов. МВФ подтвердил рост ВВП выше 7% в первых трёх кварталах 2025 года. Всемирный банк относит Узбекистан к тройке самых быстрорастущих развивающихся экономик Европы и Центральной Азии в 2026 году. Вступление в ВТО, запланированное на начало 2026 года, станет крупнейшим структурным открытием экономики со времён либерализации валюты в 2017 году.",
];

const callout = {
  lead: "Чего не отражают данные: неформальные знания, определяющие успех проекта — связи, тайминг, правильная подача нужному чиновнику, понимание того, когда давить, а когда ждать.",
  highlight: "Эти знания приходят только от присутствия здесь.",
};

const highlights = [
  "Комплексная правовая реформа с 2017 года — инвестиционный кодекс, закон о ГЧП, реформа налогового кодекса",
  "Приоритетные секторы: возобновляемая энергетика, агробизнес, производство, IT, логистика, туризм",
  "Твёрдая государственная приверженность привлечению международного капитала и экспертизы",
  "Стратегические ворота: граничит с Китаем, Афганистаном, Казахстаном, Кыргызстаном, Таджикистаном, Туркменистаном",
  "Повышение суверенного рейтинга: Fitch и S&P повысили до BB в 2025 году — первое повышение с 2018 года. Moody's пересмотрело прогноз на «позитивный»",
  "Всемирный банк: Узбекистан входит в тройку самых быстрорастущих развивающихся экономик в регионе Европа и Центральная Азия в 2026 году. Прогноз роста ВВП 6%+ до 2027 года",
  "Вступление в ВТО намечено на 2026 год — заключительный этап переговоров. Расширит доступ на рынки, стандартизирует торговые правила и откроет экономику для международного капитала",
];

const footnote =
  "* Иностранные инвестиции (2025): invest.gov.uz / МИПТ. Включает ПИИ, кредиты и проектное финансирование. ВВП (2025): МВФ. Рост (2025): миссия МВФ, ноябрь 2025. Прогноз 2026: Всемирный банк.";

const partnersNote =
  "Международные финансовые организации, активные в Узбекистане, с которыми Asar Advisory имеет рабочие отношения.";
</script>

<template>
  <section class="container pb-18 lg:pb-24" style="padding-top: 60px;">
    <div class="mx-auto max-w-[1200px]">
      <h2 class="title-64 mb-8 text-[32px] lg:mb-12 lg:text-[64px]">
        {{ t("Инвестиции в Узбекистан") }}
      </h2>

      <div ref="statsContainer" class="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
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

      <p class="mt-4 text-sm italic text-grey">
        {{ t(partnersNote) }}
      </p>

      <div class="mx-auto mt-12 max-w-[920px] lg:mt-16">
        <div class="space-y-5 text-base leading-8 text-grey lg:space-y-6 lg:text-lg">
          <p v-for="(paragraph, index) in paragraphs" :key="`invest-p-${index}`">
            {{ t(paragraph) }}
          </p>
        </div>

        <div class="mt-8 border-t border-[#191C1F14] pt-8 lg:mt-10">
          <p class="text-base leading-8 text-grey lg:text-lg">
            {{ t(callout.lead) }}
            <span class="font-semibold text-[#191C1F]">{{ t(callout.highlight) }}</span>
          </p>
        </div>

        <ul class="mt-10 space-y-3 lg:mt-12">
          <li
            v-for="(item, index) in highlights"
            :key="`invest-highlight-${index}`"
            class="flex gap-3 text-base leading-7 text-[#191C1F] lg:text-[17px]"
          >
            <span
              aria-hidden="true"
              class="mt-[10px] h-[6px] w-[6px] flex-none rounded-full bg-[#191C1F]"
            ></span>
            <span>{{ t(item) }}</span>
          </li>
        </ul>

        <p class="mt-10 text-xs leading-6 text-[#8C8C8C] lg:text-sm">
          {{ t(footnote) }}
        </p>

        <div
          class="mt-10 flex flex-col gap-3 border-t border-[#191C1F14] pt-8 sm:flex-row sm:flex-wrap lg:mt-12"
        >
          <a
            href="https://fics.uz"
            target="_blank"
            rel="noreferrer"
            class="btn btn-primary"
          >
            link
          </a>
          <a
            href="/documents/AR_2023_finalized.pdf"
            download="plenary-session-2022-materials.pdf"
            class="btn btn-secondary"
          >
            doc
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
