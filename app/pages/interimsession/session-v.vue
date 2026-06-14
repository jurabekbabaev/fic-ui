<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import PageHero from "~/components/shared/PageHero.vue";
import HeroImage from "@/assets/images/plenarysessions/ps_5.png";

// This page is reachable only through the "Подробнее" button on the interim
// sessions table (ИС-5 / ИС-6). Opening it directly redirects back.
definePageMeta({
  middleware: [
    (to) => {
      if (to.query.source !== "interim") {
        const localePath = useLocalePath();
        return navigateTo(localePath("/interimsession"));
      }
    },
  ],
});

const { t } = useI18n();

interface IStat {
  count: string;
  label: string;
}

// Headline figures of the V interim session.
const stats: IStat[] = [
  { count: "21", label: "инициатива в дорожной карте (Приложение № 1)" },
  { count: "3", label: "новые рабочие группы" },
  { count: "8", label: "межведомственных групп представили итоги" },
];

// Strategic initiatives raised at the session.
const strategicInitiatives: string[] = [
  "Региональный альянс инвестиционных советов Центральной Азии и Кавказа (RAIC-CAC) — гармонизация подходов к инвестиционному климату и трансграничная координация. Куратор — Азиатский банк развития. Официальный запуск — на V ТМИФ.",
  "Рабочая группа «Циркулярная экономика» — анализ и адаптация передовых международных практик; учреждение премии FIC «Circular Economy». Куратор — Coca-Cola.",
  "Рабочая группа «Акселератор креативных индустрий» — преобразование креативных отраслей в инвестиционно- и экспортно-ориентированные в течение пяти лет. Куратор — Фонд развития культуры и искусства.",
  "Рабочая группа по искусственному интеллекту — изучение и адаптация мировых практик ИИ. Куратор — EY.",
  "Национальная открытая платформа «Навыки будущего» — развитие десяти ключевых компетенций. Кураторы — Яндекс, OTP Group.",
];

// Roadmap by working group (21 initiatives, Appendix No. 1).
const roadmap: string[] = [
  "Корпоративное управление (Franklin Templeton) — программы обучения корпоративных секретарей и МСФО, развитие рынка капитала.",
  "Налоговое администрирование (EY) — упрощение сертификатов налогового резидентства; налоговые правила для проектов ГЧП.",
  "Ответственное ведение бизнеса (Crowe) — проект указа о поэтапном внедрении стандартов RBC.",
  "Альтернативные инвестиционные фонды (Vision Invest) — преобразование Узбекистана в региональный центр частного и венчурного капитала.",
  "Энергетика (ACWA Power, EDF, China Energy) — частные инвестиции в распределение электроэнергии; план развития сетей; стабильность правового и налогового режима.",
  "Выделение земель (Kosta Legal) — упрощение и ускорение процедур, проект Стратегии использования земельных ресурсов.",
  "Подготовка кадров (OTP Group, Яндекс) — национальный портал практик; открытая образовательная платформа; Фонд обязательных технических стажировок.",
  "Залоговое законодательство (BDO, EY, Uzum, TBC) — новые виды залога; исламские финансы (Green Sukuk, Takaful); секьюритизация; защищённый обмен данными.",
];

// Split a list item into the bold lead (before the first "—") and the rest.
const splitItem = (text: string) => {
  const idx = text.indexOf("—");
  if (idx === -1) return { lead: text, rest: "" };
  return {
    lead: text.slice(0, idx).trim(),
    rest: text.slice(idx),
  };
};

const localePath = useLocalePath();
const goBack = async () => {
  await navigateTo(localePath("/interimsession"));
};
const openDocuments = async () => {
  await navigateTo(localePath("/reports"));
};
</script>

<template>
  <div class="pb-20 lg:pb-28">
    <client-only>
      <PageHero title="V промежуточная сессия Совета" :image="HeroImage" />

      <div class="container">
        <!-- Back link -->
        <div class="mb-8">
          <button
            type="button"
            class="btn btn-secondary btn-sm w-fit"
            @click="goBack"
          >
            ← {{ t("Назад") }}
          </button>
        </div>

        <!-- Section title -->
        <h2 class="section-head">
          {{ t("19 ноября 2025") }}
        </h2>

        <!-- Intro -->
        <div class="intro-card mt-5 lg:mt-6">
          <p
            class="text-base font-normal leading-[180%] text-[#191C1F] lg:text-lg"
          >
            {{
              t(
                "Пятая промежуточная сессия Совета прошла под председательством Министра инвестиций, промышленности и торговли Л. Кудратова. Протокол № 1 утверждён 23 января 2026 года. На сессии межведомственные рабочие группы представили результаты работы, а члены Совета вынесли ряд стратегических инициатив.",
              )
            }}
          </p>
        </div>

        <!-- Stats -->
        <div
          class="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-5"
        >
          <div v-for="(stat, index) in stats" :key="index" class="stat-card">
            <span class="stat-card__count">{{ stat.count }}</span>
            <span class="stat-card__label">{{ t(stat.label) }}</span>
          </div>
        </div>

        <!-- Strategic initiatives -->
        <section class="mt-14 lg:mt-20">
          <h2 class="section-head">
            {{ t("Стратегические инициативы сессии") }}
          </h2>
          <ul class="initiative-list mt-6">
            <li
              v-for="(item, index) in strategicInitiatives"
              :key="index"
              class="initiative-list__item"
            >
              <span class="initiative-list__dot" aria-hidden="true"></span>
              <p class="initiative-list__text">
                <strong>{{ splitItem(t(item)).lead }}</strong
                >{{ splitItem(t(item)).rest ? " " + splitItem(t(item)).rest : "" }}
              </p>
            </li>
          </ul>
        </section>

        <!-- Roadmap by working group -->
        <section class="mt-14 lg:mt-20">
          <h2 class="section-head">
            {{ t("Дорожная карта по рабочим группам (21 инициатив)") }}
          </h2>
          <ul class="initiative-list mt-6">
            <li
              v-for="(item, index) in roadmap"
              :key="index"
              class="initiative-list__item"
            >
              <span class="initiative-list__dot" aria-hidden="true"></span>
              <p class="initiative-list__text">
                <strong>{{ splitItem(t(item)).lead }}</strong
                >{{ splitItem(t(item)).rest ? " " + splitItem(t(item)).rest : "" }}
              </p>
            </li>
          </ul>
        </section>

        <!-- Legal basis -->
        <div
          class="flex items-center gap-3 mt-12 lg:mt-16 px-4 py-3 rounded-xl bg-[#F7F7F7] border border-[#0000000D]"
        >
          <i class="icon-file-text text-[#505A63] text-lg shrink-0 mt-0.5"></i>
          <div class="flex-1 min-w-0">
            <span
              class="block text-xs font-semibold text-[#191C1F] uppercase tracking-wide mb-0.5"
            >
              {{ t("Правовая основа") }}
            </span>
            <span class="text-sm text-[#505A63] font-normal leading-relaxed">
              {{
                t(
                  "По Итогам Постановление Президента от 18.07.2025 (вступила в силу 21.07.2025) - ПП-226"
                )
              }}
            </span>
          </div>
          <button
            @click.stop="openDocuments"
            class="shrink-0 cursor-pointer flex items-center gap-1 text-sm font-medium text-[#191C1F] hover:opacity-70 transition-opacity whitespace-nowrap"
          >
            {{ t("Подробнее") }}
            <i class="icon-move-right text-base"></i>
          </button>
        </div>
      </div>
    </client-only>
  </div>
</template>

<style scoped>
.intro-card {
  border: 1px solid rgba(25, 28, 31, 0.08);
  border-radius: 24px;
  background: #f7f7f7;
  padding: 28px;
}

@media (min-width: 1024px) {
  .intro-card {
    padding: 40px;
  }
}

.stat-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 168px;
  border-radius: 24px;
  background: #191c1f;
  color: #ffffff;
  padding: 28px;
}

.stat-card__count {
  font-size: clamp(40px, 6vw, 56px);
  font-weight: 900;
  line-height: 1;
}

.stat-card__label {
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.74);
}

.section-head {
  font-size: clamp(18px, 2.4vw, 22px);
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #191c1f;
  padding-bottom: 14px;
  border-bottom: 2px solid #191c1f;
}

.initiative-list {
  display: flex;
  flex-direction: column;
}

.initiative-list__item {
  display: flex;
  gap: 16px;
  padding: 20px 4px;
  border-bottom: 1px solid #e5e5e5;
}

.initiative-list__item:last-child {
  border-bottom: 0;
}

.initiative-list__dot {
  flex: 0 0 auto;
  width: 8px;
  height: 8px;
  margin-top: 9px;
  border-radius: 50%;
  background: #191c1f;
}

.initiative-list__text {
  font-size: 15px;
  font-weight: 400;
  line-height: 1.7;
  color: #505a63;
}

.initiative-list__text strong,
.initiative-list__text b {
  color: #191c1f;
  font-weight: 700;
}

@media (min-width: 1024px) {
  .initiative-list__text {
    font-size: 17px;
  }
}
</style>
