<script setup>
import { useI18n } from "vue-i18n";
import FicImage from "@/assets/images/news/FIC+-1.jpg";
const { t, locale } = useI18n();
const localePath = useLocalePath();

function getFile(report) {
  if (!report.files) return report.file;
  if (locale.value.startsWith("uz")) return report.files.uz;
  if (locale.value.startsWith("en")) return report.files.en;
  return report.files.ru;
}

const downloadIcon =
  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>';

const analyticsReports = [
  {
    icon: "icon-chart-pie",
    title:
      "Комплексная оценка социально-экономического воздействия инвестиций в Узбекистане",
    image: FicImage,
    file: "/documents/report-1.pdf",
  },
  {
    icon: "icon-board",
    title:
      "Привлечение креативных инвестиций: мировой опыт и его адаптация в Узбекистане",
    image: "/documents/report-2.jpg",
    file: "/documents/report-2.pdf",
  },
  {
    icon: "icon-users-dollar",
    title:
      "Управленческие компетенции в Республике Узбекистан: интерес к цифровизации и уверенный рост",
    image: "/documents/report-3.jpg",
    files: {
      ru: "/documents/report-3-ru.pdf",
      en: "/documents/report-3-en.pdf",
      uz: "/documents/report-3-uz.pdf",
    },
  },
  {
    icon: "icon-investment-dollar",
    title: "Обзор инвестиционной среды Центральной Азии и Кавказа",
    image: FicImage,
    file: "/documents/report-4.pdf",
  },
  {
    icon: "icon-reload-zap",
    title: "Циркулярная экономика",
    image: FicImage,
    file: "/documents/report-5.pdf",
  },
];
</script>
<template>
  <div>
    <div class="container">
      <h1
        class="lg:text-[64px] text-[32px] uppercase font-black text-center mt-[100px] mb-[24px]"
      >
        {{ t("Публикации") }}
      </h1>

      <p
        class="mx-w-[560px] text-center text-[#505A63] font-normal text-base leading-[155%] mb-[60px] mx-auto"
      >
        {{ t("publications_quote") }}
      </p>

      <div class="mt-12 mb-24">
        <h2
          class="lg:text-[32px] text-center text-[24px] uppercase font-black text-[#191C1F] mb-2"
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
            class="reports-card p-4 rounded-xl bg-[#F7F7F7] flex flex-col"
          >
            <img
              :src="report.image || FicImage"
              alt=""
              class="w-full rounded-lg"
            />
            <p class="text-[#00000080] text-sm font-normal mt-3">
              14 июня 2026
            </p>
            <p
              class="text-base mb-4 font-medium mt-2 text-[#191C1F] leading-snug"
            >
              {{ t(report.title) }}
            </p>
            <a
              :href="getFile(report)"
              download
              class="dl-btn dl-btn--primary mt-auto justify-center w-full"
            >
              <span v-html="downloadIcon" class="dl-icon" />
              {{ t("Скачать") }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dl-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 500;
  padding: 11px 22px;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.2s;
}
.dl-icon {
  display: inline-flex;
}
.dl-btn--primary {
  background: rgba(77, 113, 222, 0.1);
  color: #4d71de;
}
.dl-btn--primary:hover {
  background: #4d71de;
  color: #fff;
}
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
