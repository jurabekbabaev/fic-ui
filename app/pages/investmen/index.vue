<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref, watch, onBeforeUnmount } from "vue";
import PageHero from "~/components/shared/PageHero.vue";
const { t, locale } = useI18n();
const localePath = useLocalePath();

useHead({
  title: `${t("Инвестиции в Узбекистан")} | FIC`,
});

const intro = [
  "С <strong>2017</strong> года Узбекистан осуществил одну из самых масштабных экономических трансформаций в Евразии. Либерализация валютного рынка, налоговая и судебная реформы, открытие рынков капитала и приватизация превратили прежде закрытую экономику в одно из наиболее динамичных инвестиционных направлений региона. Сегодня это крупнейший по населению рынок Центральной Азии — около <strong>37,7 млн</strong> человек — с устойчиво растущим внутренним спросом.",
  "<strong>2025</strong> год подтвердил эту траекторию. Рост <strong>ВВП</strong> достиг <strong>7,7%</strong> — выше большинства прогнозов; инфляция снизилась до <strong>7,3%</strong>, безработица — до <strong>4,8%</strong>. <strong>Fitch</strong> впервые за семь лет повысил суверенный рейтинг до <strong>BB</strong>, <strong>S&amp;P</strong> подтвердил уровень <strong>BB</strong>, <strong>Moody's</strong> сохранил <strong>Ba3</strong> с улучшением прогноза до «позитивного». Завершается процесс вступления во Всемирную торговую организацию — крупнейшее структурное открытие экономики со времён валютной либерализации <strong>2017</strong> года.",
];

type Stat = {
  value?: number;
  raw?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  accent: "light";
};

const stats: Stat[] = [
  {
    value: 135,
    prefix: ">$",
    suffix: " млрд",
    decimals: 0,
    label: "ВВП (цель 2026 — >$150 млрд)",
    accent: "light",
  },
  {
    value: 7.7,
    prefix: "",
    suffix: "%",
    decimals: 1,
    label: "рост ВВП (МВФ, 2025)",
    accent: "light",
  },
  {
    value: 42,
    prefix: "~$",
    suffix: " млрд",
    decimals: 0,
    label: "приток иностранных инвестиций",
    accent: "light",
  },
  {
    raw: "BB",
    label: "рейтинг Fitch и S&P; Moody's Ba3 (прогноз позитивный)",
    accent: "light",
  },
  {
    value: 55,
    prefix: "$",
    suffix: " млрд",
    decimals: 0,
    label: "золотовалютные резервы (+35%)",
    accent: "light",
  },
  {
    value: 7.3,
    prefix: "",
    suffix: "%",
    decimals: 1,
    label: "инфляция (с 9,8% годом ранее)",
    accent: "light",
  },
  {
    value: 23,
    prefix: "+",
    suffix: "%",
    decimals: 0,
    label: "рост экспорта (~$32 млрд)",
    accent: "light",
  },
  {
    value: 31.9,
    prefix: "",
    suffix: "%",
    decimals: 1,
    label: "совокупные инвестиции к ВВП",
    accent: "light",
  },
  {
    value: 4.8,
    prefix: "",
    suffix: "%",
    decimals: 1,
    label: "безработица (минимум)",
    accent: "light",
  },
];

function formatStat(stat: Stat, currentVal: number): string {
  const decimals = stat.decimals ?? 0;
  // English uses a decimal point (7.7%); ru/uz use a comma (7,7%).
  const sep = locale.value === "en" ? "." : ",";
  const formatted =
    decimals > 0
      ? currentVal.toFixed(decimals).replace(".", sep)
      : Math.floor(currentVal).toString();
  const suffix = stat.suffix ? t(stat.suffix) : "";
  return `${stat.prefix ?? ""}${formatted}${suffix}`;
}

const displayValues = ref(
  stats.map((stat) => (stat.raw !== undefined ? stat.raw : formatStat(stat, 0)))
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

// The page renders inside <client-only>, so the template ref only resolves
// after the slot hydrates on the client. Attach the observer the moment the
// element exists rather than relying on the parent's onMounted timing.
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
        if (entries.some((entry) => entry.isIntersecting)) {
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

onBeforeUnmount(() => {
  observer?.disconnect();
});

const guarantees = [
  {
    icon: ["M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z", "M9 12l2 2 4-4"],
    term: "Правовые гарантии.",
    text: "Закон «Об инвестициях и инвестиционной деятельности» гарантирует свободный перевод средств за пределы страны и защиту инвестиций от национализации.",
  },
  {
    icon: [
      "M19 5L5 19",
      "M7.5 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z",
      "M16.5 14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z",
    ],
    term: "Налоговая стабильность.",
    text: "Базовые ставки налогов для бизнеса не изменятся до 2028 года.",
  },
  {
    icon: [
      "M5 5h13a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H10l-4 3v-3H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z",
      "M8 9h7M8 12h4",
    ],
    term: "Прямой диалог.",
    text: "Совет иностранных инвесторов при Президенте — институциональный канал решения вопросов инвесторов на высшем уровне.",
  },
  {
    icon: [
      "M12 4v15",
      "M6 19h12",
      "M5 8h14",
      "M5 8l-2.5 5a2.5 2.5 0 0 0 5 0z",
      "M19 8l-2.5 5a2.5 2.5 0 0 0 5 0z",
    ],
    term: "Разрешение споров.",
    text: "Ташкентский международный арбитражный центр; Ташкентский международный коммерческий суд.",
  },
  {
    icon: [
      "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z",
      "M3.5 9h17M3.5 15h17",
      "M12 3c2.6 2.6 2.6 15.4 0 18M12 3c-2.6 2.6-2.6 15.4 0 18",
    ],
    term: "Льготы для членов Совета.",
    text: "Безвизовый въезд для членов Совета и членов их семей.",
  },
];

const sectors = [
  {
    icon: ["M13 2L4 14h7l-1 8 9-12h-7z"],
    title: "Зелёная энергетика",
    points: [
      "ACWA Power, Masdar, TotalEnergies, EDF, Voltalia",
      "свыше $8 млрд инвестиций в ВИЭ",
      "солнце, ветер, водород, накопление энергии",
    ],
  },
  {
    icon: [
      "M7 7h10v10H7z",
      "M10 10h4v4h-4z",
      "M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3",
    ],
    title: "Цифровая инфраструктура и ИИ",
    points: [
      "DataVolt — крупнейший «зелёный» дата-центр региона",
      "VEON — суперприложение на базе ИИ",
      "Yandex — карты и цифровые сервисы",
    ],
  },
  {
    icon: [
      "M3 21h18",
      "M5 21V5l8-2v18",
      "M13 21V9l6 2v10",
      "M8 8h2M8 12h2M8 16h2",
    ],
    title: "Инфраструктура и ГЧП",
    points: [
      "$4,5 млрд проектов ГЧП в 2025",
      "дороги, транспорт, водоснабжение, ирригация",
      "смешанное финансирование с МФИ",
    ],
  },
  {
    icon: ["M3 10l9-6 9 6", "M5 10v8M9 10v8M15 10v8M19 10v8", "M3 21h18"],
    title: "Финансовые услуги",
    points: [
      "Ташкентский международный финансовый центр",
      "исламские финансы (Green Sukuk, Takaful)",
      "дебютные суверенные облигации в сумах",
    ],
  },
  {
    icon: ["M3 21V10l6 4V10l6 4V7l6 4v10z", "M3 21h18"],
    title: "Обрабатывающая промышленность",
    points: [
      "химия и удобрения (Indorama)",
      "текстиль, стройматериалы (Knauf)",
      "экспортно-ориентированное производство",
    ],
  },
  {
    icon: ["M6 3h12l3 6-9 12L3 9z", "M3 9h18M9 3l-3 6 6 12M15 3l3 6-6 12"],
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
  <div>
    <client-only>
      <PageHero title="Инвестиции в Узбекистан" />

      <div class="container pb-20 lg:pb-28">
        <!-- Intro / overview -->
        <section class="invest-intro">
          <div class="invest-intro__aside">
            <span class="invest-eyebrow">{{ t("Обзор") }}</span>
            <h2 class="invest-intro__heading">
              {{ t("Одна из самых динамичных экономик Евразии") }}
            </h2>
          </div>
          <div class="invest-intro__body">
            <p
              v-for="(paragraph, index) in intro"
              :key="`invest-intro-${index}`"
              v-html="paragraph"
            ></p>
          </div>
        </section>

        <!-- Key indicators -->
        <section class="invest-section">
          <div class="invest-head">
            <span class="invest-eyebrow">{{ t("Макроэкономика") }}</span>
            <h2 class="invest-title">{{ t("Ключевые показатели") }}</h2>
            <p class="invest-sub">{{ t("Итоги 2025 года") }}</p>
          </div>

          <div
            ref="statsContainer"
            class="invest-stats"
            :class="{ 'is-visible': statsVisible }"
          >
            <div
              v-for="(stat, index) in stats"
              :key="stat.label"
              class="invest-stat"
              :style="{ '--delay': `${index * 60}ms` }"
            >
              <div class="invest-stat__value">{{ displayValues[index] }}</div>
              <div class="invest-stat__label">{{ t(stat.label) }}</div>
            </div>
          </div>
        </section>

        <section class="invest-section">
          <div class="invest-head">
            <span class="invest-eyebrow">{{ t("Девять лет реформ") }}</span>
            <h2 class="invest-title">{{ t("Траектория реформ") }}</h2>
            <p class="invest-sub">
              {{ t("От открытия экономики к рынку капитала") }}
            </p>
          </div>

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
        </section>

        <section class="invest-section">
          <div class="invest-head">
            <span class="invest-eyebrow">{{ t("Секторы возможностей") }}</span>
            <h2 class="invest-title">{{ t("Секторы для инвестиций") }}</h2>
            <p class="invest-sub">
              {{ t("Приоритетные направления с поддержкой государства") }}
            </p>
          </div>

          <div class="invest-sectors">
            <article
              v-for="(sector, index) in sectors"
              :key="`invest-sector-${index}`"
              class="invest-sector"
            >
              <div class="invest-sector__head">
                <span class="invest-iconBox" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path
                      v-for="(d, di) in sector.icon"
                      :key="di"
                      :d="d"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <h3 class="invest-sector__title">{{ t(sector.title) }}</h3>
              </div>
              <ul class="invest-sector__list">
                <li
                  v-for="(point, pIndex) in sector.points"
                  :key="`invest-sector-${index}-point-${pIndex}`"
                >
                  {{ t(point) }}
                </li>
              </ul>
            </article>
          </div>
        </section>
        <!-- Guarantees -->
        <section class="invest-section">
          <div class="invest-head">
            <!-- <span class="invest-eyebrow">{{ t("Защита") }}</span> -->
            <h2 class="invest-title">{{ t("Гарантии для инвесторов") }}</h2>
            <p class="invest-sub">
              {{ t("Правовая и институциональная защита капитала") }}
            </p>
          </div>

          <div class="invest-guarantees">
            <article
              v-for="(item, index) in guarantees"
              :key="`invest-guarantee-${index}`"
              class="invest-guarantee"
            >
              <span class="invest-iconBox" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    v-for="(d, di) in item.icon"
                    :key="di"
                    :d="d"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <p class="invest-guarantee__text">
                <span class="invest-guarantee__term">{{ t(item.term) }}</span>
                {{ t(item.text) }}
              </p>
            </article>
          </div>
        </section>

        <div
          class="flex items-center gap-3 mt-10 px-4 py-3 rounded-xl bg-[#F7F7F7] border border-[#0000000D]"
        >
          <i class="icon-file-text text-[#505A63] text-lg shrink-0 mt-0.5"></i>
          <div class="flex-1 min-w-0">
            <span
              class="block text-xs font-semibold text-[#191C1F] uppercase tracking-wide mb-0.5"
            >
              {{ t("Источники данных") }}
            </span>
            <span class="text-sm text-[#505A63] font-normal leading-relaxed">
              {{
                t(
                  "МВФ (Article IV, 2026), Всемирный банк, ЕБРР; Fitch, S&P, Moody's; обращение Президента по итогам 2025 года; invest.gov.uz / МИПТ; Руководство инвестора PwC."
                )
              }}
            </span>
          </div>
          <button
            @click.stop="navigateTo(localePath('/reports'))"
            class="shrink-0 cursor-pointer flex items-center gap-1 text-sm font-medium text-[#191C1F] hover:opacity-70 transition-opacity whitespace-nowrap"
          >
            {{ t("Подробнее") }}
            <i class="icon-move-right text-base"></i>
          </button>
        </div>
        <!-- Sectors -->

        <!-- Reform trajectory timeline -->
      </div>
    </client-only>
  </div>
</template>

<style scoped>
/* ===== Shared section scaffolding ===== */
.invest-section {
  margin-top: 72px;
}

@media (min-width: 1024px) {
  .invest-section {
    margin-top: 110px;
  }
}

.invest-eyebrow {
  display: inline-block;
  color: #191c1f;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.invest-head {
  margin-bottom: 36px;
  text-align: center;
}

.invest-title {
  margin-top: 12px;
  font-family: "Aeonik Pro", "Onest", sans-serif;
  font-size: clamp(26px, 4vw, 44px);
  line-height: 1.05;
  font-weight: 900;
  text-transform: uppercase;
  color: #191c1f;
}

.invest-sub {
  margin: 12px auto 0;
  max-width: 560px;
  color: #505a63;
  font-size: 16px;
  line-height: 1.5;
}

/* Reusable icon chip (guarantees + sectors) */
.invest-iconBox {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  border: 1px solid rgba(25, 28, 31, 0.08);
  background: #f4f5f7;
  color: #191c1f;
  transition: background-color 0.28s ease, color 0.28s ease,
    transform 0.28s ease;
}

.invest-iconBox svg {
  width: 24px;
  height: 24px;
}

/* ===== Intro ===== */
.invest-intro {
  margin-top: 8px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

.invest-intro__heading {
  margin-top: 14px;
  font-family: "Aeonik Pro", "Onest", sans-serif;
  font-size: clamp(24px, 3vw, 34px);
  line-height: 1.12;
  font-weight: 800;
  color: #191c1f;
}

.invest-intro__body {
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #505a63;
  font-size: 16px;
  line-height: 1.7;
}

@media (min-width: 1024px) {
  .invest-intro {
    grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
    gap: 56px;
    align-items: start;
  }

  .invest-intro__body {
    font-size: 17px;
    line-height: 1.75;
  }
}

/* ===== Key indicators ===== */
.invest-stats {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

@media (min-width: 1024px) {
  .invest-stats {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
  }
}

.invest-stat {
  display: flex;
  flex-direction: column;
  min-height: 148px;
  padding: 22px;
  border-radius: 20px;
  border: 1px solid rgba(25, 28, 31, 0.08);
  background: #fff;
  box-shadow: 0 16px 40px -28px rgba(25, 28, 31, 0.3);
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.3s ease, border-color 0.3s ease;
}

.invest-stats.is-visible .invest-stat {
  opacity: 1;
  transform: translateY(0);
  transition-delay: var(--delay, 0ms), var(--delay, 0ms), 0s, 0s;
}

.invest-stat:hover {
  box-shadow: 0 26px 54px -28px rgba(25, 28, 31, 0.4);
  border-color: rgba(25, 28, 31, 0.16);
}

.invest-stat__value {
  font-family: "Aeonik Pro", "Onest", sans-serif;
  font-size: clamp(26px, 3.2vw, 40px);
  font-weight: 800;
  line-height: 1.04;
  letter-spacing: -0.02em;
  color: #191c1f;
}

.invest-stat__label {
  margin-top: auto;
  padding-top: 18px;
  font-size: 13px;
  line-height: 1.4;
  color: #505a63;
}

@media (min-width: 1024px) {
  .invest-stat {
    min-height: 170px;
    padding: 28px;
  }

  .invest-stat__label {
    font-size: 14px;
  }
}

/* ===== Guarantees ===== */
.invest-guarantees {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

@media (min-width: 700px) {
  .invest-guarantees {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.invest-guarantee {
  display: flex;
  gap: 18px;
  padding: 24px;
  border-radius: 20px;
  border: 1px solid rgba(25, 28, 31, 0.08);
  background: #fff;
  box-shadow: 0 16px 40px -30px rgba(25, 28, 31, 0.28);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.invest-guarantee:hover {
  transform: translateY(-3px);
  border-color: rgba(25, 28, 31, 0.14);
  box-shadow: 0 26px 54px -30px rgba(25, 28, 31, 0.38);
}

.invest-guarantee:hover .invest-iconBox {
  background: #191c1f;
  color: #fff;
}

.invest-guarantee__text {
  color: #505a63;
  font-size: 16px;
  line-height: 1.6;
}

.invest-guarantee__term {
  display: block;
  margin-bottom: 4px;
  color: #191c1f;
  font-weight: 700;
}

/* ===== Sectors ===== */
.invest-sectors {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

@media (min-width: 640px) {
  .invest-sectors {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .invest-sectors {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
  }
}

.invest-sector {
  display: flex;
  flex-direction: column;
  padding: 26px;
  border-radius: 22px;
  border: 1px solid rgba(25, 28, 31, 0.08);
  background: #fff;
  box-shadow: 0 16px 40px -30px rgba(25, 28, 31, 0.28);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.invest-sector:hover {
  transform: translateY(-4px);
  border-color: rgba(25, 28, 31, 0.14);
  box-shadow: 0 28px 58px -30px rgba(25, 28, 31, 0.4);
}

.invest-sector:hover .invest-iconBox {
  background: #191c1f;
  color: #fff;
  transform: translateY(-2px);
}

.invest-sector__head {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
}

.invest-sector__title {
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  color: #191c1f;
}

.invest-sector__list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: auto;
}

.invest-sector__list li {
  position: relative;
  padding-left: 20px;
  color: #505a63;
  font-size: 15px;
  line-height: 1.5;
}

.invest-sector__list li::before {
  content: "";
  position: absolute;
  top: 9px;
  left: 0;
  width: 8px;
  height: 2px;
  border-radius: 2px;
  background: rgba(25, 28, 31, 0.35);
}

/* ===== "Траектория реформ" — centred alternating timeline ===== */
/* Mobile: single rail on the left. Desktop (>=1024px): cards alternate either
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
  box-shadow: 0 0 0 5px #fff;
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
    font-family: "Aeonik Pro", "Onest", sans-serif;
    font-size: clamp(40px, 4vw, 62px);
    font-weight: 800;
    line-height: 1;
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
