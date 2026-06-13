<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref, onMounted, onBeforeUnmount } from "vue";

const { t } = useI18n();

useHead({
  title: "Инвестиции в Узбекистан | FIC",
});

const intro = [
  "С 2017 года Узбекистан осуществил одну из самых масштабных экономических трансформаций в Евразии. Либерализация валютного рынка, налоговая и судебная реформы, открытие рынков капитала и приватизация превратили прежде закрытую экономику в одно из наиболее динамичных инвестиционных направлений региона. Сегодня это крупнейший по населению рынок Центральной Азии — около 37,7 млн человек — с устойчиво растущим внутренним спросом.",
  "2025 год подтвердил эту траекторию. Рост ВВП достиг 7,7% — выше большинства прогнозов; инфляция снизилась до 7,3%, безработица — до 4,8%. Fitch впервые за семь лет повысил суверенный рейтинг до BB, S&P подтвердил уровень BB, Moody's сохранил Ba3 с улучшением прогноза до «позитивного». Завершается процесс вступления во Всемирную торговую организацию — крупнейшее структурное открытие экономики со времён валютной либерализации 2017 года.",
];

type Stat = {
  value?: number;
  raw?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  accent: "light" | "dark";
};

const stats: Stat[] = [
  { value: 135, prefix: ">$", suffix: " млрд", decimals: 0, label: "ВВП (цель 2026 — >$150 млрд)", accent: "light" },
  { value: 7.7, prefix: "", suffix: "%", decimals: 1, label: "рост ВВП (МВФ, 2025)", accent: "dark" },
  { value: 42, prefix: "~$", suffix: " млрд", decimals: 0, label: "приток иностранных инвестиций", accent: "light" },
  { raw: "BB", label: "рейтинг Fitch и S&P; Moody's Ba3 (прогноз позитивный)", accent: "light" },
  { value: 55, prefix: "$", suffix: " млрд", decimals: 0, label: "золотовалютные резервы (+35%)", accent: "dark" },
  { value: 7.3, prefix: "", suffix: "%", decimals: 1, label: "инфляция (с 9,8% годом ранее)", accent: "light" },
  { value: 23, prefix: "+", suffix: "%", decimals: 0, label: "рост экспорта (~$32 млрд)", accent: "light" },
  { value: 31.9, prefix: "", suffix: "%", decimals: 1, label: "совокупные инвестиции к ВВП", accent: "light" },
  { value: 4.8, prefix: "", suffix: "%", decimals: 1, label: "безработица (минимум)", accent: "light" },
];

function formatStat(stat: Stat, currentVal: number): string {
  const decimals = stat.decimals ?? 0;
  const formatted = decimals > 0
    ? currentVal.toFixed(decimals).replace(".", ",")
    : Math.floor(currentVal).toString();
  return `${stat.prefix ?? ""}${formatted}${stat.suffix ?? ""}`;
}

const displayValues = ref(
  stats.map((stat) => (stat.raw !== undefined ? stat.raw : formatStat(stat, 0)))
);
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
      if (stat.raw !== undefined) return;
      const currentVal = easedProgress * (stat.value ?? 0);
      displayValues.value[index] = formatStat(stat, currentVal);
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

const guarantees = [
  {
    term: "Правовые гарантии.",
    text: "Закон «Об инвестициях и инвестиционной деятельности» гарантирует свободный перевод средств за пределы страны и защиту инвестиций от национализации.",
  },
  {
    term: "Налоговая стабильность.",
    text: "Базовые ставки налогов для бизнеса не изменятся до 2028 года.",
  },
  {
    term: "Прямой диалог.",
    text: "Совет иностранных инвесторов при Президенте — институциональный канал решения вопросов инвесторов на высшем уровне.",
  },
  {
    term: "Разрешение споров.",
    text: "Ташкентский международный арбитражный центр; Ташкентский международный коммерческий суд.",
  },
  {
    term: "Льготы для членов Совета.",
    text: "Безвизовый въезд для членов Совета и членов их семей.",
  },
];

const sectors = [
  {
    title: "Зелёная энергетика",
    points: [
      "ACWA Power, Masdar, TotalEnergies, EDF, Voltalia",
      "свыше $8 млрд инвестиций в ВИЭ",
      "солнце, ветер, водород, накопление энергии",
    ],
  },
  {
    title: "Цифровая инфраструктура и ИИ",
    points: [
      "DataVolt — крупнейший «зелёный» дата-центр региона",
      "VEON — суперприложение на базе ИИ",
      "Yandex — карты и цифровые сервисы",
    ],
  },
  {
    title: "Инфраструктура и ГЧП",
    points: [
      "$4,5 млрд проектов ГЧП в 2025",
      "дороги, транспорт, водоснабжение, ирригация",
      "смешанное финансирование с МФИ",
    ],
  },
  {
    title: "Финансовые услуги",
    points: [
      "Ташкентский международный финансовый центр",
      "исламские финансы (Green Sukuk, Takaful)",
      "дебютные суверенные облигации в сумах",
    ],
  },
  {
    title: "Обрабатывающая промышленность",
    points: [
      "химия и удобрения (Indorama)",
      "текстиль, стройматериалы (Knauf)",
      "экспортно-ориентированное производство",
    ],
  },
  {
    title: "Критические минералы и горнодобыча",
    points: [
      "значительная сырьевая база",
      "проекты переработки с добавленной стоимостью",
      "международные стандарты ESG",
    ],
  },
];

const timeline = [
  {
    year: "2017.",
    text: "Либерализация валютного рынка, старт системных реформ; ВВП около $56 млрд.",
  },
  {
    year: "2019.",
    text: "Учреждение Совета иностранных инвесторов при Президенте — институциональная площадка диалога с инвесторами.",
  },
  {
    year: "2024.",
    text: "Энергетические реформы; рекордные вложения международных компаний в зелёную экономику.",
  },
  {
    year: "2025.",
    text: "Повышение рейтингов Fitch и S&P до BB; приток иностранных инвестиций ~$42 млрд; рост ВВП 7,7%.",
  },
  {
    year: "2026.",
    text: "Завершение вступления в ВТО; создание Ташкентского международного финансового центра; цель — ВВП свыше $150 млрд. За девять лет привлечено около $125 млрд иностранных инвестиций против ~$4,5 млрд в 2017 году.",
  },
];
</script>

<template>
  <section class="container pb-18 lg:pb-24" style="padding-top: 60px;">
    <div class="mx-auto max-w-[1200px]">
      <h2 class="title-64 mb-8 text-[32px] lg:mb-12 lg:text-[64px]">
        {{ t("Инвестиции в Узбекистан") }}
      </h2>

      <div class="rounded-2xl bg-[#F7F7F7] p-6 lg:p-10">
        <div class="space-y-5 text-base leading-8 text-grey lg:space-y-6 lg:text-lg">
          <p v-for="(paragraph, index) in intro" :key="`invest-intro-${index}`">
            {{ t(paragraph) }}
          </p>
        </div>
      </div>

      <div class="mt-14 lg:mt-20">
        <span
          class="inline-flex rounded-lg bg-[#F7F7F7] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#191C1F] lg:text-sm"
        >
          {{ t("Ключевые показатели 2025") }}
        </span>

        <div
          ref="statsContainer"
          class="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-8 lg:grid-cols-3"
        >
          <div
            v-for="(stat, index) in stats"
            :key="stat.label"
            class="flex min-h-[140px] flex-col rounded-2xl p-5 lg:min-h-[168px] lg:p-7"
            :class="stat.accent === 'dark' ? 'bg-[#191C1F]' : 'bg-[#F7F7F7]'"
          >
            <div
              class="text-[26px] font-bold leading-tight lg:text-[40px]"
              :class="stat.accent === 'dark' ? 'text-white' : 'text-[#191C1F]'"
            >
              {{ displayValues[index] }}
            </div>
            <div
              class="mt-auto pt-6 text-xs leading-snug lg:text-sm"
              :class="stat.accent === 'dark' ? 'text-white/70' : 'text-[#191C1F]/70'"
            >
              {{ t(stat.label) }}
            </div>
          </div>
        </div>
      </div>

      <div class="mt-14 lg:mt-20">
        <span
          class="inline-flex rounded-lg bg-[#F7F7F7] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#191C1F] lg:text-sm"
        >
          {{ t("Гарантии и защита инвесторов") }}
        </span>

        <ul class="mt-6 lg:mt-8">
          <li
            v-for="(item, index) in guarantees"
            :key="`invest-guarantee-${index}`"
            class="flex gap-3 border-b border-[#191C1F14] py-5 first:pt-0 last:border-0 last:pb-0"
          >
            <span
              aria-hidden="true"
              class="mt-[10px] h-[6px] w-[6px] flex-none rounded-full bg-[#191C1F]"
            ></span>
            <p class="text-base leading-7 text-grey lg:text-[17px]">
              <span class="font-semibold text-[#191C1F]">{{ t(item.term) }}</span>
              {{ t(item.text) }}
            </p>
          </li>
        </ul>
      </div>

      <div class="mt-14 lg:mt-20">
        <span
          class="inline-flex rounded-lg bg-[#F7F7F7] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#191C1F] lg:text-sm"
        >
          {{ t("Секторы возможностей") }}
        </span>

        <div class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-8">
          <div
            v-for="(sector, index) in sectors"
            :key="`invest-sector-${index}`"
            class="rounded-2xl bg-[#F7F7F7] p-6 lg:p-8"
          >
            <h3
              class="text-base font-bold uppercase tracking-wide text-[#191C1F] lg:text-lg"
            >
              {{ t(sector.title) }}
            </h3>
            <ul class="mt-5 space-y-3">
              <li
                v-for="(point, pIndex) in sector.points"
                :key="`invest-sector-${index}-point-${pIndex}`"
                class="flex gap-2.5 text-base leading-7 text-grey lg:text-[17px]"
              >
                <span aria-hidden="true" class="flex-none text-[#191C1F]/40">—</span>
                <span>{{ t(point) }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-14 lg:mt-20">
        <span
          class="inline-flex rounded-lg bg-[#F7F7F7] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#191C1F] lg:text-sm"
        >
          {{ t("Траектория реформ") }}
        </span>

        <ol class="reformTimeline">
          <li
            v-for="(item, index) in timeline"
            :key="`invest-timeline-${index}`"
            class="reformTimeline__item"
          >
            <!-- Year detail card -->
            <div class="reformTimeline__card">
              <div class="reformTimeline__cardHead">
                <span class="reformTimeline__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 15l5-5 4 4 7-7"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15 7h5v5"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span class="reformTimeline__yearTag">
                  {{ t(item.year).replace(".", "") }}
                </span>
              </div>
              <p class="text-base leading-7 text-grey lg:text-[17px]">
                {{ t(item.text) }}
              </p>
            </div>

            <!-- Center node -->
            <span class="reformTimeline__node" aria-hidden="true"></span>

            <!-- Big faded year on the opposite side (desktop) -->
            <span class="reformTimeline__bigYear" aria-hidden="true">
              {{ t(item.year).replace(".", "") }}
            </span>
          </li>

          <!-- Downward arrow closing the trajectory -->
          <li class="reformTimeline__end" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M12 4v15M6 13l6 6 6-6"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* "Траектория реформ" — centred alternating timeline.
   Mobile: single rail on the left. Desktop (>=1024px): cards alternate either
   side of a central dashed spine, with the year echoed large and faded on the
   opposite side. */
.reformTimeline {
  position: relative;
  margin-top: 2.5rem;
}

@media (min-width: 1024px) {
  .reformTimeline {
    margin-top: 3.5rem;
  }
}

/* Dashed vertical spine */
.reformTimeline::before {
  content: "";
  position: absolute;
  top: 4px;
  bottom: 2.5rem;
  left: 11px;
  border-left: 1px dashed rgba(25, 28, 31, 0.2);
}

@media (min-width: 1024px) {
  .reformTimeline::before {
    left: 50%;
    transform: translateX(-50%);
  }
}

.reformTimeline__item {
  position: relative;
  padding-left: 44px;
  padding-bottom: 1.75rem;
}

.reformTimeline__item:last-of-type {
  padding-bottom: 0;
}

@media (min-width: 1024px) {
  .reformTimeline__item {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    column-gap: 2.5rem;
    padding-left: 0;
    padding-bottom: 2.5rem;
  }
}

/* Node on the spine */
.reformTimeline__node {
  position: absolute;
  top: 8px;
  left: 11px;
  width: 18px;
  height: 18px;
  transform: translateX(-50%);
  border: 2px solid rgba(25, 28, 31, 0.22);
  border-radius: 9999px;
  background: #fff;
  box-shadow: 0 0 0 5px #fff; /* gap in the dashed line around the node */
}

.reformTimeline__node::after {
  content: "";
  position: absolute;
  inset: 0;
  width: 6px;
  height: 6px;
  margin: auto;
  border-radius: 9999px;
  background: #191c1f;
}

@media (min-width: 1024px) {
  .reformTimeline__node {
    position: static;
    grid-column: 2;
    grid-row: 1;
    justify-self: center;
    transform: none;
  }
}

/* Floating card */
.reformTimeline__card {
  padding: 20px;
  border: 1px solid rgba(25, 28, 31, 0.06);
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 18px 40px rgba(25, 28, 31, 0.07);
}

@media (min-width: 1024px) {
  .reformTimeline__card {
    grid-row: 1;
    max-width: 430px;
    padding: 26px 28px;
  }

  .reformTimeline__item:nth-child(odd) .reformTimeline__card {
    grid-column: 1;
    justify-self: end;
  }

  .reformTimeline__item:nth-child(even) .reformTimeline__card {
    grid-column: 3;
    justify-self: start;
  }
}

.reformTimeline__cardHead {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}

.reformTimeline__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 12px;
  background: rgba(25, 28, 31, 0.05);
  color: #191c1f;
}

.reformTimeline__icon svg {
  width: 20px;
  height: 20px;
}

/* Year pill — shown inside the card on mobile, replaced by the big faded
   number on desktop. */
.reformTimeline__yearTag {
  flex: none;
  padding: 5px 12px;
  border-radius: 9999px;
  background: #191c1f;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.02em;
}

@media (min-width: 1024px) {
  .reformTimeline__yearTag {
    display: none;
  }
}

/* Big faded year on the opposite side (desktop only) */
.reformTimeline__bigYear {
  display: none;
}

@media (min-width: 1024px) {
  .reformTimeline__bigYear {
    display: block;
    grid-row: 1;
    font-size: clamp(40px, 4vw, 62px);
    font-weight: 800;
    line-height: 1;
    color: rgba(25, 28, 31, 0.12);
  }

  .reformTimeline__item:nth-child(odd) .reformTimeline__bigYear {
    grid-column: 3;
    justify-self: start;
    padding-left: 8px;
    text-align: left;
  }

  .reformTimeline__item:nth-child(even) .reformTimeline__bigYear {
    grid-column: 1;
    justify-self: end;
    padding-right: 8px;
    text-align: right;
  }
}

/* Closing downward arrow */
.reformTimeline__end {
  position: relative;
  height: 2.5rem;
}

.reformTimeline__end svg {
  position: absolute;
  top: 2px;
  left: 11px;
  width: 22px;
  height: 22px;
  transform: translateX(-50%);
  color: rgba(25, 28, 31, 0.4);
}

@media (min-width: 1024px) {
  .reformTimeline__end svg {
    left: 50%;
  }
}
</style>
