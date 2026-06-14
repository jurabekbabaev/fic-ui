<template>
  <div>
    <client-only>
      <page-hero :title="t('календарный план')" />
      <div class="container">
        <timeline />

        <!-- <h1
          class="lg:text-[64px] text-[32px] uppercase font-black text-left mt-[100px]"
        >
          {{ t("календарный план") }}
        </h1> -->

        <!-- <div>
          <div class="flex gap-2 mb-6 items-center lg:w-1/4 w-full mt-8">
            <el-select
              v-model="periodid"
              label-key="name"
              value-key="id"
              class="lg:w-full w-1/2"
              size="large"
              :placeholder="t('за 7 дней')"
            >
              <el-option
                v-for="item in periodList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
            <el-select
              v-model="industryid"
              label-key="name"
              value-key="id"
              class="lg:w-full w-1/2"
              size="large"
              :placeholder="t('Отрасль')"
            >
              <el-option
                v-for="item in industryList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </div>
        </div> -->

        <!-- Desktop Grid -->
        <!-- <div v-if="!isMobile" class="mt-8 mb-16 flex flex-col gap-10">
          <div v-for="group in groupedData" :key="group.dayLabel">
            <div class="flex items-center gap-3 mb-5">
              <span
                class="text-[11px] font-bold uppercase tracking-wider bg-[#191C1F] text-white px-4 py-2 rounded-full whitespace-nowrap"
              >
                {{ group.dayLabel }}
              </span>
              <div class="flex-1 border-t border-[#0000001A]"></div>
            </div>
            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
              <a
                v-for="item in group.items"
                :key="item.id"
                :href="item.link"
                target="_blank"
                rel="noopener noreferrer"
                class="event-card bg-[#F7F7F7] p-5 rounded-2xl flex flex-col gap-3 hover:bg-[#EFEFEF] transition-colors duration-200 group no-underline"
              >
                <span
                  class="text-[10px] font-semibold text-[#505A63] bg-white px-3 py-1.5 rounded-full border border-[#0000001A] self-start"
                >
                  {{ item.date }}
                </span>
                <p
                  class="font-semibold text-[#191C1F] text-sm leading-snug flex-1"
                >
                  {{ item.content }}
                </p>
                <div
                  class="flex items-start gap-2 text-xs text-[#9AA4AE] leading-snug"
                >
                  <svg
                    class="shrink-0 mt-0.5"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>{{ item.address }}</span>
                </div>
                <div
                  class="flex items-center gap-1.5 text-sm font-medium text-[#191C1F] pt-3 border-t border-[#0000001A]"
                >
                  <span>{{ t("Подробнее") }}</span>
                  <i
                    class="icon-move-right text-base group-hover:translate-x-1 transition-transform duration-200"
                  ></i>
                </div>
              </a>
            </div>
          </div>
        </div>

        Mobile
        <div v-else class="mt-8 mb-16 flex flex-col gap-8">
          <div v-for="group in groupedData" :key="group.dayLabel">
            <div class="flex items-center gap-3 mb-4">
              <span
                class="text-[11px] font-bold uppercase tracking-wider bg-[#191C1F] text-white px-4 py-2 rounded-full whitespace-nowrap"
              >
                {{ group.dayLabel }}
              </span>
              <div class="flex-1 border-t border-[#0000001A]"></div>
            </div>
            <div
              class="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hidden pb-2"
            >
              <a
                v-for="item in group.items"
                :key="item.id"
                :href="item.link"
                target="_blank"
                rel="noopener noreferrer"
                class="event-card snap-start flex-shrink-0 w-[82vw] bg-[#F7F7F7] p-5 rounded-2xl flex flex-col gap-3 no-underline group"
              >
                <span
                  class="text-[10px] font-semibold text-[#505A63] bg-white px-3 py-1.5 rounded-full border border-[#0000001A] self-start"
                >
                  {{ item.date }}
                </span>
                <p
                  class="font-semibold text-[#191C1F] text-sm leading-snug flex-1"
                >
                  {{ item.content }}
                </p>
                <div
                  class="flex items-start gap-2 text-xs text-[#9AA4AE] leading-snug"
                >
                  <svg
                    class="shrink-0 mt-0.5"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>{{ item.address }}</span>
                </div>
                <div
                  class="flex items-center gap-1.5 text-sm font-medium text-[#191C1F] pt-3 border-t border-[#0000001A]"
                >
                  <span>{{ t("Подробнее") }}</span>
                  <i class="icon-move-right text-base"></i>
                </div>
              </a>
            </div>
          </div>
        </div> -->

        <!-- Button -->
        <!-- <div class="text-center mt-[50px]">
          <router-link to="/calendarplan" class="btn btn-secondary">
            Узнать больше
          </router-link>
        </div> -->

        <!-- <div class="m-pagination mt-6">
          <div class="w-full flex justify-center">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="1000"
            />
          </div>
        </div> -->
      </div>
    </client-only>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import Timeline from "./timeline.vue";
import { useI18n } from "vue-i18n";
import PageHero from "~/components/shared/PageHero.vue";
const { t } = useI18n();

const periodid = ref();
const industryid = ref();

const periodList = computed(() => [
  { id: 0, name: t("за 7 дней") },
  { id: 1, name: t("за 3 дней") },
  { id: 2, name: t("за 2 дней") },
]);
const industryList = computed(() => [
  { id: 0, name: t("Отрасль") },
  { id: 1, name: t("Отрасль 1") },
  { id: 2, name: t("Отрасль 2") },
]);

const data = ref([
  {
    id: 1,
    day: "Day: 0 – 16 JUNE 2026",
    date: "Time: 09:00–15:00",
    content: "Business breakfast – Energy Sector",
    address:
      "Venue: JW Marriott Hotel Tashkent, Grand Ballroom,‌28th floor, roof-top ‌ ‌ ‌ ‌ ‌ ‌",
    link: "https://foreigninvestorscouncil.uz/p/11366ca/",
  },
  {
    id: 2,
    day: "DAY: 0 – 16 JUNE 2026",
    date: "Time: 09:00–15:00",
    content: "RAIC-CAC Strategic Session",
    address: "Venue: JW Marriott Hotel Tashkent‌",
    link: "https://foreigninvestorscouncil.uz/p/11364b2/",
  },
  {
    id: 3,
    day: "Day: 0 – 16 JUNE 2026",
    date: "Time: 16:45–18:45",
    content:
      "RAIC-CAC Panel Session‌ Regional Alliance of Investment Councils of Central Asia and the Caucasus: Unlocking Regional Investment Potential",
    address: "Venue : CAEx Center ‌ ‌ ‌ ‌",
    link: "https://foreigninvestorscouncil.uz/p/1136b0c/",
  },
  {
    id: 4,
    day: "DAY: 0 – 16 JUNE 2026",
    date: "Time: 20:00–22:00",
    content: "Silk Road Night Run",
    address: "Venue: New Uzbekistan Park ‌ ‌ ‌ ‌",
    link: "https://foreigninvestorscouncil.uz/p/1136b40/",
  },
  {
    id: 5,
    day: "DAY: 1 – 17 JUNE 2026",
    date: "Time: 07:30–09:00",
    content: "Business breakfast - Digitalization and AI",
    address: "‌Venue: Hilton Tashkent City Room Tashkent 1−2, 2nd floor",
    link: "https://foreigninvestorscouncil.uz/p/1136a13/",
  },
  {
    id: 6,
    day: "DAY: 1 – 17 JUNE 2026",
    date: "T‌ime: 10:00–11:30",
    content: "OPENING CEREMONY OF THE FORUM Plenary Session‌*By Invitation",
    address: "Venue: Congress Hall, Tashkent city",
    link: "https://foreigninvestorscouncil.uz/p/1136a62/",
  },
  {
    id: 7,
    day: "DAY: 1 – 17 JUNE 2026",
    date: "Time: 12:00–13:30",
    content:
      "Panel Session ‌TIFC on the Map: The Global View of Financial Centre Leaders and Investors",
    address: "‌Venue: CAEx Centre",
    link: "https://foreigninvestorscouncil.uz/p/1136b83/",
  },
  {
    id: 8,
    day: "DAY: 1 – 17 JUNE 2026",
    date: "Time: 18:00–20:30",
    content: "ESG Award Ceremony & ESG Review Report Presentation",
    address:
      "Venue: Japanese Garden (near UzExpoCentre, entrance from the Azimut Hotel)",
    link: "https://foreigninvestorscouncil.uz/p/1136b85/",
  },
  {
    id: 9,
    day: "DAY: 1 – 17 JUNE 2026",
    date: "Time: 18:30–21:00",
    content:
      "“Wildberries” in Uzbekistan: From Market Entry to the Next Phase of Growt‌h",
    address: "‌Venue: Rooftop Hall, Piramid Tower",
    link: "https://foreigninvestorscouncil.uz/p/113a6cd/",
  },
  {
    id: 10,
    day: "DAY: 1 – 17 JUNE 2026",
    date: "‌Time: 20:00–00:00",
    content: "Exclusive Yandex Uzbekistan Night",
    address: "Venue: Zo’r TV",
    link: "https://foreigninvestorscouncil.uz/p/1136c15/",
  },
  {
    id: 11,
    day: "DAY: 2 – 18 JUNE 2026",
    date: "‌Time: 07:30–09:00",
    content: "Uzum Business Breakfast: The Power of Local Expertise",
    address: "Venue: Suzani by Kasimbaeva, 35 Suzuk-Ota str",
    link: "https://foreigninvestorscouncil.uz/p/113a6fd/",
  },
  {
    id: 12,
    day: "DAY: 2 – 18 JUNE 2026",
    date: "Time: 10:00–13:00",
    content:
      "IV Plenary Session of the Foreign Investors Council under the President of the Republic of Uzbekistan",
    address: "Venue: Congress Hall Tashkent city",
    link: "https://foreigninvestorscouncil.uz/p/1136c23/",
  },
  {
    id: 13,
    day: "DAY: 2 – 18 JUNE 2026",
    date: "Time: 11:30–13:00",
    content:
      "Fireside Chat , “From Transactions to Ecosystems: Uzbekistan’s Fintech Inflection Point”",
    address: "Venue: CAEx Center ‌ ‌ ",
    link: "https://foreigninvestorscouncil.uz/p/113a713/",
  },
  {
    id: 14,
    day: "DAY: 2 – 18 JUNE 2026",
    date: "Time: 15:30–17:00",
    content:
      "Panel Session,“Alternative Investment Funds: Regulatory Frameworks for Institutional Capital” (By Foreign Investors Council and Vision Invest)",
    address: "Venue: CAEx Centre‌ ‌ ",
    link: "https://foreigninvestorscouncil.uz/p/1136c47/",
  },
  {
    id: 15,
    day: "DAY: 2 – 18 JUNE 2026",
    date: "Time: 17:30–19:00",
    content:
      "Panel session, “Circular Economy in Uzbekistan: Waste, Water, and Emissions as Catalysts for Sustainable Growth”",
    address: "Venue: CAEx Centre‌ ‌ ",
    link: "https://foreigninvestorscouncil.uz/p/1136c50/",
  },
  {
    id: 16,
    day: "DAY: 2 – 18 JUNE 2026",
    date: "Time: 20:00–02:30",
    content: "FIC Special Event - TIIF After-Party",
    address: "Venue: Nukus 89‌ ",
    link: "https://foreigninvestorscouncil.uz/p/1136c5e/",
  },
]);

const groupedData = computed(() => {
  const groups = {};
  data.value.forEach((item) => {
    const match = item.day.match(/DAY[:\s]+(\d+)/i);
    const key = match ? match[1] : "0";
    if (!groups[key]) groups[key] = { dayLabel: item.day, items: [] };
    groups[key].items.push(item);
  });
  return Object.values(groups);
});

// Responsive
const isMobile = ref(false);
function handleResize() {
  isMobile.value =
    typeof window !== "undefined" ? window.innerWidth <= 768 : false;
}

onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
/* hide scrollbar */
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}
.scrollbar-hidden {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* nav buttons */
.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: rgba(25, 28, 31, 0.85);
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border: none;
  cursor: pointer;
}
.carousel-nav:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.left-nav {
  left: 8px;
}
.right-nav {
  right: 8px;
}

/* dots */
.dots .dot {
  background: #e2e8f0;
  border: none;
  display: inline-block;
}
.dots .dot.active {
  background: #191c1f;
}

/* ensure slide content fills */
.slide > div {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* small tweak: make the center of the slide visible nicely */
.carousel {
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}

/* optional: make nav buttons subtle on larger screens (they are only used in mobile) */
@media (min-width: 769px) {
  .carousel-nav {
    display: none;
  }
}

:deep(.el-select__wrapper) {
  border-radius: 100px;
  padding: 16px 30px;
  min-height: 46px;
  background-color: #ebebf0;
}

:deep(.el-select__placeholder.is-transparent) {
  color: #505a63;
}

:deep(.el-select__caret) {
  color: #505a63;
}
</style>
<style>
.el-pagination .el-pager li {
  background: white !important;
}

.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev {
  border: 1px solid #595d62 !important;
  background: white !important;
  border-radius: 8px !important;
}

.el-pager li:hover {
  color: #191c1f !important;
}

.el-pager li.is-active {
  background: #191c1f !important;
  border-radius: 8px !important;
}

.el-pagination.is-background .btn-next:hover,
.el-pagination.is-background .btn-prev:hover {
  color: #191c1f !important;
}
</style>
