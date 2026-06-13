<template>
  <div>
    <client-only>
      <div class="container">
        <h1
          class="lg:text-[64px] text-[32px] uppercase font-black lg:text-center sm:text-left mt-[100px]"
        >
          {{ t("календарный план") }}
        </h1>
      </div>

      <!-- Desktop: Infinite auto-scroll marquee with drag support -->
      <div
        v-if="!isMobile"
        ref="marqueeContainer"
        class="overflow-hidden mt-8 cursor-grab select-none"
        @mousedown="onMouseDown"
        @mouseleave="onMouseUp"
        @mouseup="onMouseUp"
        @mousemove="onMouseMove"
      >
        <div ref="track" class="calendar-track">
          <!-- Original set -->
          <div
            v-for="item in data"
            :key="'a-' + item.id"
            class="calendar-card bg-[#F7F7F7] p-4 rounded-xl flex-shrink-0 lg:min-h-[200px] min-h-[148px]"
          >
            <span
              class="text-[#191C1F] bg-[#191C1F1A] px-4 py-1.5 rounded-[4px] text-base font-normal inline-block leading-snug"
            >
              {{ item.date }}
            </span>
            <div class="font-medium lg:text-2xl text-[#191C1F] text-xl mt-4">
              {{ item.content }}
            </div>
          </div>
          <!-- Duplicate set for seamless loop (aria-hidden for a11y) -->
          <div
            aria-hidden="true"
            v-for="item in data"
            :key="'b-' + item.id"
            class="calendar-card bg-[#F7F7F7] p-4 rounded-xl flex-shrink-0 lg:min-h-[200px] min-h-[148px]"
          >
            <span
              class="text-[#191C1F] bg-[#191C1F1A] px-4 py-1.5 rounded-[4px] text-base font-normal inline-block leading-snug"
            >
              {{ item.date }}
            </span>
            <div class="font-medium lg:text-2xl text-[#191C1F] text-xl mt-4">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>

      <div v-else class="container mt-8">
          <div class="relative">
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
                  class="bg-[#F7F7F7] p-4 rounded-xl min-h-[148px]"
                >
                  <span
                    class="text-[#191C1F] bg-[#191C1F1A] px-4 py-1.5 rounded-[4px] text-base font-normal inline-block leading-snug"
                  >
                    {{ item.date }}
                  </span>
                  <div class="font-medium text-xl text-[#191C1F] mt-4">
                    {{ item.content }}
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
                :aria-label="'Go to slide ' + (i + 1)"
              />
            </div>
          </div>
      </div>

      <div class="container">
        <div class="text-center mt-[50px]">
          <WLocaleLink to="/calendarplan" class="btn btn-primary">
            {{ t("Все мероприятия") }}
          </WLocaleLink>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import { useI18n } from "vue-i18n";
import WLocaleLink from "~/components/shared/WLocaleLink.vue";
import { DESKTOP_MARQUEE_SPEED } from "./useDesktopMarquee";
const { t } = useI18n();

interface IType {
  id: number;
  date: string;
  content: string;
}

const data = ref<IType[]>([
  {
    id: 1,
    date: t("Июль - Ноябрь 2025"),
    content: t("Разработка утвержденных инициатив"),
  },
  {
    id: 2,
    date: t("Ноябрь 2025"),
    content: t("Привлечение креативных инвестиций в узбекистан"),
  },
  {
    id: 3,
    date: t("Ноябрь 2025 - Апрель 2026"),
    content: t("Коллекция новых инициатив к пленарной сессии 2026 года"),
  },
  {
    id: 4,
    date: t("Апрель 2026"),
    content: t("Определение новых инициатив"),
  },
  {
    id: 5,
    date: t("Июль - Ноябрь 2025"),
    content: t("Разработка утвержденных инициатив"),
  },
]);

// ─── Responsive ─────────────────────────────────────────────────────────────
const isMobile = ref(false);
function handleResize() {
  isMobile.value =
    typeof window !== "undefined" ? window.innerWidth <= 768 : false;
}

// ─── Desktop marquee (RAF-based) ─────────────────────────────────────────────
const marqueeContainer = ref<HTMLElement | null>(null);
const track = ref<HTMLElement | null>(null);
const position = ref(0);      // current translateX in px (always in [-halfWidth, 0])
const halfWidth = ref(0);     // width of one full set of cards
const rafId = ref<number | null>(null);

// Drag state
const isDragging = ref(false);
const dragStartX = ref(0);
const dragStartPos = ref(0);

function measureHalfWidth() {
  if (!track.value) return;
  // Track contains 2 identical sets → half of scrollWidth = one set width
  halfWidth.value = track.value.scrollWidth / 2;
}

/** Normalise any position into the seamless range [-halfWidth, 0) */
function normalise(pos: number): number {
  const h = halfWidth.value;
  if (h <= 0) return 0;
  let n = pos % h; // result in (-h, h)
  if (n > 0) n -= h; // shift positive values into (-h, 0]
  return n;
}

function applyTransform(pos: number) {
  if (track.value) {
    track.value.style.transform = `translateX(${pos}px)`;
  }
}

function tick() {
  if (!isDragging.value) {
    position.value = normalise(position.value - DESKTOP_MARQUEE_SPEED);
    applyTransform(position.value);
  }
  rafId.value = requestAnimationFrame(tick);
}

// ─── Mouse drag handlers ─────────────────────────────────────────────────────
function onMouseDown(e: MouseEvent) {
  isDragging.value = true;
  dragStartX.value = e.clientX;
  dragStartPos.value = position.value;
  if (marqueeContainer.value) marqueeContainer.value.style.cursor = "grabbing";
}

function onMouseMove(e: MouseEvent) {
  if (!isDragging.value) return;
  const delta = e.clientX - dragStartX.value;
  // Allow free dragging in both directions; normalise keeps it seamless
  position.value = normalise(dragStartPos.value + delta);
  applyTransform(position.value);
}

function onMouseUp() {
  if (!isDragging.value) return;
  isDragging.value = false;
  if (marqueeContainer.value) marqueeContainer.value.style.cursor = "grab";
}

// ─── Mobile carousel ─────────────────────────────────────────────────────────
const slider = ref<HTMLElement | null>(null);
const currentIndex = ref(0);
const slideGap = 16;

function onScroll() {
  if (!slider.value) return;
  const slides = slider.value.querySelectorAll<HTMLElement>(".slide");
  if (!slides.length) return;
  const firstW = slides[0].getBoundingClientRect().width;
  const step = firstW + slideGap;
  const idx = Math.round(slider.value.scrollLeft / step);
  currentIndex.value = Math.min(Math.max(idx, 0), slides.length - 1);
}

function goTo(index: number) {
  if (!slider.value) return;
  const slides = slider.value.querySelectorAll<HTMLElement>(".slide");
  if (!slides.length) return;
  const firstW = slides[0].getBoundingClientRect().width;
  const step = firstW + slideGap;
  slider.value.scrollTo({ left: index * step, behavior: "smooth" });
  currentIndex.value = index;
}

// ─── Lifecycle ───────────────────────────────────────────────────────────────
onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);

  nextTick(() => {
    onScroll();
    if (!isMobile.value) {
      measureHalfWidth();
      rafId.value = requestAnimationFrame(tick);
    }
  });
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
  if (rafId.value !== null) cancelAnimationFrame(rafId.value);
});
</script>

<style scoped>
/* ── Desktop marquee track ── */
.calendar-track {
  display: flex;
  gap: 12px;
  will-change: transform;
}

.calendar-card {
  width: 340px;
}

/* ── Mobile: hide scrollbar ── */
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}
.scrollbar-hidden {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* ── dots ── */
.dots .dot {
  background: #e2e8f0;
  border: none;
  display: inline-block;
}
.dots .dot.active {
  background: #191c1f;
}

/* ── ensure slide content fills ── */
.slide > div {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.carousel {
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}
</style>
