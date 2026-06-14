<template>
  <div>
    <client-only>
      <div class="container">
        <timeline />

        <h1
          class="lg:text-[64px] text-[32px] uppercase font-black text-left mt-[100px]"
        >
          {{ t("calendarplan.heading") }}
        </h1>

        <div>
          <div class="flex gap-2 mb-6 items-center lg:w-1/4 w-full mt-8">
            <el-select
              v-model="periodid"
              label-key="name"
              value-key="id"
              class="lg:w-full w-1/2"
              size="large"
              :placeholder="t('calendarplan.filters.period.placeholder')"
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
              :placeholder="t('calendarplan.filters.industry.placeholder')"
            >
              <el-option
                v-for="item in industryList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </div>
        </div>

        <!-- Desktop Grid -->
        <div
          v-if="!isMobile"
          class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-8"
        >
          <div
            v-for="item in data"
            :key="item.id"
            class="bg-[#F7F7F7] p-4 rounded-xl flex flex-col justify-between lg:min-h-[200px] min-h-[148px]"
          >
            <div>
              <span
                class="text-[#191C1F] bg-[#191C1F1A] px-4 py-1 rounded-[4px] text-base font-normal"
              >
                {{ item.date }}
              </span>
              <div class="font-medium lg:text-2xl text-[#191C1F] text-xl mt-4">
                {{ item.content }}
              </div>
            </div>
            <div>
              <span
                class="text-sm font-normal text-[#505A63] flex items-center gap-2.5 cursor-pointer mt-2"
              >
                <span>{{ t("Подробнее (календарь)") }}</span>
                <i class="icon-move-right"></i>
              </span>
            </div>
          </div>
        </div>

        <!-- Mobile Carousel (custom, without external lib) -->
        <div v-else class="mt-8">
          <div class="relative">
            <!-- Slider -->
            <div
              ref="slider"
              class="carousel flex gap-4 overflow-x-auto snap-x snap-mandatory touch-pan-x scrollbar-hidden py-2"
              @scroll="onScroll"
            >
              <div
                v-for="(item, index) in data"
                :key="item.id"
                class="slide snap-start flex-shrink-0 w-[90%]"
              >
                <div
                  class="bg-[#F7F7F7] p-4 rounded-xl flex flex-col justify-between min-h-[148px] h-full"
                >
                  <div>
                    <span
                      class="text-white bg-[#191C1F] px-4 py-1 rounded-[30px] text-base font-normal"
                    >
                      {{ item.date }}
                    </span>
                    <div class="font-medium text-xl text-[#191C1F] mt-4">
                      {{ item.content }}
                    </div>
                  </div>
                  <div>
                    <span
                      class="text-sm font-normal text-[#505A63] flex items-center gap-2.5 cursor-pointer mt-2"
                    >
                      <span>{{ t("calendarplan.learnMore") }}</span>
                      <i class="icon-move-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Dots -->
            <div class="dots mt-3 flex justify-center gap-2">
              <button
                v-for="(item, i) in data"
                :key="i"
                @click="goTo(i)"
                :class="[
                  'dot w-3 h-3 rounded-full',
                  currentIndex === i ? 'active' : '',
                ]"
                aria-label="'Go to slide ' + (i+1)"
              />
            </div>
          </div>
        </div>

        <!-- Button -->
        <!-- <div class="text-center mt-[50px]">
          <router-link to="/calendarplan" class="btn btn-secondary">
            Узнать больше
          </router-link>
        </div> -->

        <div class="m-pagination mt-6">
          <div class="w-full flex justify-center">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="1000"
            />
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";
import Timeline from "./timeline.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const periodid = ref();
const industryid = ref();

const periodList = computed(() => [
  { id: 0, name: t("calendarplan.filters.period.days7") },
  { id: 1, name: t("calendarplan.filters.period.days3") },
  { id: 2, name: t("calendarplan.filters.period.days2") },
]);
const industryList = computed(() => [
  { id: 0, name: t("calendarplan.filters.industry.placeholder") },
  { id: 1, name: t("calendarplan.filters.industry.industry1") },
  { id: 2, name: t("calendarplan.filters.industry.industry2") },
]);

const data = computed(() => [
  {
    id: 1,
    date: t("calendarplan.items.item1.date"),
    content: t("calendarplan.items.item1.content"),
  },
  {
    id: 2,
    date: t("calendarplan.items.item2.date"),
    content: t("calendarplan.items.item2.content"),
  },
  {
    id: 3,
    date: t("calendarplan.items.item3.date"),
    content: t("calendarplan.items.item3.content"),
  },
  {
    id: 4,
    date: t("calendarplan.items.item4.date"),
    content: t("calendarplan.items.item4.content"),
  },
  {
    id: 5,
    date: t("calendarplan.items.item5.date"),
    content: t("calendarplan.items.item5.content"),
  },
  {
    id: 6,
    date: t("calendarplan.items.item6.date"),
    content: t("calendarplan.items.item6.content"),
  },
]);

// Responsive
const isMobile = ref(false);
function handleResize() {
  isMobile.value =
    typeof window !== "undefined" ? window.innerWidth <= 768 : false;
}

// Slider refs & state
const slider = (ref < HTMLElement) | (null > null);
const currentIndex = ref(0);
const slideGap = 16; // px — css gap between slides

function onScroll() {
  if (!slider.value) return;
  const slides = slider.value.querySelectorAll < HTMLElement > ".slide";
  if (!slides.length) return;
  const firstW = slides[0].getBoundingClientRect().width;
  const scrollLeft = slider.value.scrollLeft;
  const step = firstW + slideGap;
  const idx = Math.round(scrollLeft / step);
  currentIndex.value = Math.min(Math.max(idx, 0), slides.length - 1);
}

function next() {
  if (!slider.value) return;
  const slides = slider.value.querySelectorAll < HTMLElement > ".slide";
  if (!slides.length) return;
  const firstW = slides[0].getBoundingClientRect().width;
  const step = firstW + slideGap;
  slider.value.scrollBy({ left: step, behavior: "smooth" });
}

function prev() {
  if (!slider.value) return;
  const slides = slider.value.querySelectorAll < HTMLElement > ".slide";
  if (!slides.length) return;
  const firstW = slides[0].getBoundingClientRect().width;
  const step = firstW + slideGap;
  slider.value.scrollBy({ left: -step, behavior: "smooth" });
}

function goTo(index) {
  if (!slider.value) return;
  const slides = slider.value.querySelectorAll < HTMLElement > ".slide";
  if (!slides.length) return;
  const firstW = slides[0].getBoundingClientRect().width;
  const step = firstW + slideGap;
  const left = index * step;
  slider.value.scrollTo({ left, behavior: "smooth" });
  currentIndex.value = index;
}

onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);

  // ensure slider ref is ready and set initial index
  nextTick(() => {
    onScroll();
  });
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
