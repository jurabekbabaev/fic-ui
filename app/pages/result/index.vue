<script setup>
import { useI18n } from "vue-i18n";
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import PageHero from "~/components/shared/PageHero5.vue";
const FicImage = img("news/FIC+-1.jpg");
const { t, locale } = useI18n();
const localePath = useLocalePath();

const platformStats = [
  { prefix: "×", target: 5, label: "рост вовлечённости компаний" },
  { from: 54, target: 85, label: "активных компаний-участников" },
  { target: 43, highlight: true, label: "компания — члены Совета" },
  { target: 19, label: "стран-участников" },
  { target: 4, label: "международных института (3 в Исполкоме)" },
  { target: 23, label: "сектора экономики" },
];

const environmentStats = [
  { from: 5, target: 16, label: "рост числа рабочих групп" },
  { target: 50, suffix: "+", label: "заседаний рабочих групп" },
  { target: 120, highlight: true, label: "инициатив (рост втрое)" },
  { target: 8, label: "НПА разработано при участии Совета" },
  { target: 3, label: "стратегические инициативы" },
  { target: 5, label: "социальных инициатив" },
];

const analyticsReports = [
  {
    icon: "icon-users-dollar",
    title: "Развитие управленческих компетенций",
    image: "/documents/report-3.jpg",
    date: "19.11.2025",
  },
  {
    icon: "icon-board",
    title: "Креативные инвестиции",
    image: "/documents/report-2.jpg",
    date: "26.11.2025",
  },
  {
    icon: "icon-chart-pie",
    title: "Комплексная оценка эффектов инвестиционной деятельности",
    image: FicImage,
    date: "23.12.2025",
  },
  {
    icon: "icon-investment-dollar",
    title: "Центральная Азия и Кавказ: инвестиционные приоритеты",
    image: "/documents/report-4.jpg",
    date: "15.06.2026",
  },
  {
    icon: "icon-reload-zap",
    title: "Циркулярная экономика",
    image: "/documents/report-5.jpg",
    date: "17.06.2026",
  },
];

const npaList = [
  "Проект Закона об альтернативных инвестиционных фондах",
  "Проект постановления Президента о принципах ответственного ведения бизнеса",
  "Проект закона о внесении изменений в Налоговый кодекс",
  "Проект закона о внесении изменений в Закон об электроэнергетике",
  "Проект постановления Кабинета Министров о правилах пользования электроэнергией и природным газом",
  "Проект закона о внесении изменений в Закон «О государственно-частном партнёрстве»",
  "Проект постановления Президента о резервировании земельных участков",
  "Проект постановления о системе финансового учёта по международным стандартам",
];

const ANIM_DURATION = 1800;

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function renderStat(stat, eased) {
  if (stat.from !== undefined) {
    return `${Math.floor(eased * stat.from)} → ${Math.floor(
      eased * stat.target
    )}`;
  }
  return `${stat.prefix ?? ""}${Math.floor(eased * stat.target)}${
    stat.suffix ?? ""
  }`;
}

const makeZero = (stats) => stats.map((s) => renderStat(s, 0));

const platformDisplay = ref(makeZero(platformStats));
const environmentDisplay = ref(makeZero(environmentStats));
const platformRef = ref(null);
const environmentRef = ref(null);
const observers = [];

function animateGroup(stats, displayRef) {
  const start = performance.now();
  const step = (now) => {
    const progress = Math.min((now - start) / ANIM_DURATION, 1);
    const eased = easeOutCubic(progress);
    displayRef.value = stats.map((s) => renderStat(s, eased));
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function observe(el, stats, displayRef) {
  if (!el) return;
  let done = false;
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !done) {
          done = true;
          animateGroup(stats, displayRef);
        }
      });
    },
    { threshold: 0.3 }
  );
  obs.observe(el);
  observers.push(obs);
}

onMounted(async () => {
  await nextTick();
  observe(platformRef.value, platformStats, platformDisplay);
  observe(environmentRef.value, environmentStats, environmentDisplay);
});

onBeforeUnmount(() => observers.forEach((o) => o.disconnect()));
</script>

<template>
  <div>
    <client-only>
      <PageHero :title="t('Результаты Совета')" />
      <div class="container">
        <div class="bg-[#F7F7F7] rounded-2xl p-6 lg:p-8">
          <p
            class="text-base lg:text-lg text-[#505A63] font-normal leading-[170%]"
          >
            {{
              t(
                "За отчётный период Совет иностранных инвесторов существенно усилил роль как ключевая платформа взаимодействия государства и иностранных инвесторов и инструмент развития инвестиционной политики Узбекистана."
              )
            }}
          </p>
        </div>

        <div class="mt-12">
          <h2
            class="lg:text-[32px] text-[24px] uppercase font-black text-[#191C1F] mb-6"
          >
            {{ t("Платформа для инвесторов") }}
          </h2>
          <div
            ref="platformRef"
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5"
          >
            <div
              v-for="(stat, i) in platformStats"
              :key="i"
              class="rounded-xl p-6 min-h-[150px] flex flex-col justify-between"
              :class="stat.highlight ? 'bg-[#191C1F]' : 'bg-[#F7F7F7]'"
            >
              <div
                class="font-black lg:text-[44px] text-[36px] leading-none tabular-nums"
                :class="stat.highlight ? 'text-white' : 'text-[#191C1F]'"
              >
                {{ platformDisplay[i] }}
              </div>
              <span
                class="block mt-4 text-sm lg:text-base font-normal leading-snug"
                :class="stat.highlight ? 'text-white/75' : 'text-[#505A63]'"
              >
                {{ t(stat.label) }}
              </span>
            </div>
          </div>
        </div>

        <div class="mt-12">
          <h2
            class="lg:text-[32px] text-[24px] uppercase font-black text-[#191C1F] mb-6"
          >
            {{ t("Развитие инвестиционной среды") }}
          </h2>
          <div
            ref="environmentRef"
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5"
          >
            <div
              v-for="(stat, i) in environmentStats"
              :key="i"
              class="rounded-xl p-6 min-h-[150px] flex flex-col justify-between"
              :class="stat.highlight ? 'bg-[#191C1F]' : 'bg-[#F7F7F7]'"
            >
              <div
                class="font-black lg:text-[44px] text-[36px] leading-none tabular-nums"
                :class="stat.highlight ? 'text-white' : 'text-[#191C1F]'"
              >
                {{ environmentDisplay[i] }}
              </div>
              <span
                class="block mt-4 text-sm lg:text-base font-normal leading-snug"
                :class="stat.highlight ? 'text-white/75' : 'text-[#505A63]'"
              >
                {{ t(stat.label) }}
              </span>
            </div>
          </div>
        </div>

        <div class="mt-12 mb-24">
          <h2
            class="lg:text-[32px] text-[24px] uppercase font-black text-[#191C1F] mb-2"
          >
            {{ t("Восемь НПА, разработанных при участии Совета") }}
          </h2>
          <p class="text-sm text-[#505A63] mb-6">
            {{
              t(
                "Нормативно-правовые акты, разработанные при участии Совета иностранных инвесторов"
              )
            }}
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div
              v-for="(npa, i) in npaList"
              :key="i"
              class="flex items-center gap-4 bg-[#F7F7F7] rounded-xl p-5 hover:bg-[#EFEFEF] transition-colors duration-200"
            >
              <span
                class="shrink-0 w-8 h-8 rounded-lg bg-[#191C1F] text-white text-xs font-bold flex items-center justify-center mt-0.5"
              >
                {{ String(i + 1).padStart(2, "0") }}
              </span>
              <span
                class="text-sm text-[#505A63] leading-relaxed font-normal"
                >{{ t(npa) }}</span
              >
            </div>
          </div>
        </div>

        <div class="mt-12 mb-24">
          <h2
            class="lg:text-[32px] text-[24px] uppercase font-black text-[#191C1F] mb-2"
          >
            {{ t("Новые подходы — пять аналитических докладов") }}
          </h2>
          <div
            class="reports-slider"
            :class="{ 'is-many': analyticsReports.length > 5 }"
          >
            <div
              v-for="(report, i) in analyticsReports"
              :key="i"
              class="reports-card p-4 rounded-xl bg-[#F7F7F7]"
            >
              <img :src="report.image || FicImage" alt="" class="w-full rounded-lg" />
              <div class="flex justify-between items-center mt-3">
                <p class="text-[#00000080] text-sm font-normal">{{ report.date }}</p>
                <span
                  @click="navigateTo(localePath('/publications'))"
                  class="text-[#191C1F] text-sm font-normal flex items-center gap-1 cursor-pointer hover:opacity-70 transition-opacity"
                >
                  <span>{{ t("Подробнее") }}</span>
                  <i class="icon-move-right ml-1"></i>
                </span>
              </div>
              <p class="text-base font-medium mt-2 text-[#191C1F] leading-snug">
                {{ t(report.title) }}
              </p>
            </div>
          </div>
        </div>

        <div
          class="bg-[#F7F7F7] rounded-2xl p-6 lg:p-8 mb-10 border-l-4 border-[#1a1a1a] flex flex-col sm:flex-row items-center gap-6"
        >
          <div class="shrink-0 flex items-center justify-center w-[120px] h-[120px] lg:w-[140px] lg:h-[140px]">
            <img
              src="/documents/raic.png"
              alt="RAIC-CAC"
              class="w-full h-full object-contain"
            />
          </div>
          <div class="flex-1">
            <p
              class="lg:text-sm text-xs font-bold text-[#1a1a1a] uppercase tracking-widest mb-3"
            >
              {{
                locale.startsWith("uz")
                  ? "Strategik tashabbus"
                  : locale.startsWith("en")
                  ? "Strategic Initiative"
                  : "Стратегическая инициатива"
              }}
            </p>
            <p
              class="lg:text-lg text-base font-normal text-[#1a1a1a] leading-relaxed"
            >
              {{
                locale.startsWith("uz")
                  ? "Raqobatbardosh investitsiya muhitini shakllantirish va chegaralararo muvofiqlashtirish uchun Markaziy Osiyo va Kavkaz Mintaqaviy Investitsiya Kengashlari Alyansini (RAIC-CAC) tashkil etish."
                  : locale.startsWith("en")
                  ? "Creation of the Regional Alliance of Investment Councils of Central Asia and the Caucasus (RAIC-CAC) to form a competitive investment environment and cross-border coordination."
                  : "Cоздание Регионального альянса инвестиционных советов Центральной Азии и Кавказа (RAIC-CAC) для формирования конкурентоспособной инвестиционной среды и трансграничной координации."
              }}
            </p>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<style scoped>
.reports-slider {
  display: flex;
  overflow-x: auto;
  gap: 16px;
  padding-bottom: 8px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.reports-slider::-webkit-scrollbar {
  display: none;
}
.reports-card {
  flex-shrink: 0;
  width: 75vw;
  scroll-snap-align: start;
}
@media (min-width: 640px) {
  .reports-card {
    width: 44vw;
  }
}
@media (min-width: 1024px) {
  .reports-slider:not(.is-many) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    overflow: visible;
    scroll-snap-type: none;
    padding-bottom: 0;
  }
  .reports-slider:not(.is-many) .reports-card {
    width: auto;
    flex-shrink: unset;
    scroll-snap-align: none;
  }
}
</style>
