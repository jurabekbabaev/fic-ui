<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
// @ts-ignore
import { useI18n } from "vue-i18n";
const { t } = useI18n();
// @ts-ignore
import { useExpertFeedbacksStore } from "@/stores/expertFeedbacks";

const store = useExpertFeedbacksStore();
const slides = computed(() => store.list || []);

const VISIBLE_COUNT = 5;
const CENTER_IDX = Math.floor(VISIBLE_COUNT / 2); // = 2

const currentSlide = ref(0);
const isMobile = ref(false);
const autoplayInterval = ref<number | null>(null);
const isAutoplayPaused = ref(false);
const autoplayDelay = 7000; // 7s
const selectedVideo = ref<any>(null);
const selectedVideoLink = ref<string | null>(null);

const touchStartX = ref<number | null>(null);
const touchEndX = ref(0);
const isDragging = ref(false);
const dragStartX = ref<number | null>(null);
const translateX = ref(0);
const dragMoved = ref(false);

const orderedSlides = computed(() => {
  const total = slides.value.length;
  if (!total) return [];
  return Array.from({ length: VISIBLE_COUNT }, (_, i) => {
    const offset = i - CENTER_IDX; // -2, -1, 0, +1, +2
    const idx = (currentSlide.value + offset + total) % total;
    return { slide: slides.value[idx], offset };
  });
});

const nextSlide = () => {
  const total = slides.value.length;
  if (!total) return;
  currentSlide.value = (currentSlide.value + 1) % total;
};

const prevSlide = () => {
  const total = slides.value.length;
  if (!total) return;
  currentSlide.value = (currentSlide.value - 1 + total) % total;
};

const goToSlide = (offset: number) => {
  if (dragMoved.value) return;
  if (selectedVideoLink.value) { closeVideo(); return; }
  if (offset === 0) return;
  const total = slides.value.length;
  if (!total) return;
  currentSlide.value = (currentSlide.value + offset + total) % total;
  pauseAutoplay();
  setTimeout(resumeAutoplay, autoplayDelay * 2);
};

const goToSlideByIndex = (index: number) => {
  if (currentSlide.value === index) return;
  currentSlide.value = index;
  pauseAutoplay();
  setTimeout(resumeAutoplay, autoplayDelay * 2);
};

const startAutoplay = () => {
  if (autoplayInterval.value) clearInterval(autoplayInterval.value);
  autoplayInterval.value = window.setInterval(() => {
    if (!isAutoplayPaused.value) nextSlide();
  }, autoplayDelay);
};

const pauseAutoplay = () => { isAutoplayPaused.value = true; };
const resumeAutoplay = () => { isAutoplayPaused.value = false; };

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
    autoplayInterval.value = null;
  }
};

const onTouchStart = (e: TouchEvent) => {
  const touch = e.touches?.[0];
  if (!touch) return;
  touchStartX.value = touch.clientX;
  dragStartX.value = touch.clientX;
  isDragging.value = true;
  dragMoved.value = false;
  translateX.value = 0;
  pauseAutoplay();
};

const onTouchMove = (e: TouchEvent) => {
  if (!isDragging.value || touchStartX.value === null) return;
  const touch = e.touches?.[0];
  if (!touch) return;
  const diff = touch.clientX - (dragStartX.value || 0);
  if (Math.abs(diff) > 4) dragMoved.value = true;
  translateX.value = diff;
};

const onTouchEnd = (e: TouchEvent) => {
  if (!isDragging.value || touchStartX.value === null) return;
  const endTouch = e.changedTouches?.[0];
  if (!endTouch) return;
  touchEndX.value = endTouch.clientX;
  const diff = (touchStartX.value || 0) - touchEndX.value;
  isDragging.value = false;
  translateX.value = 0;
  touchStartX.value = null;
  dragStartX.value = null;
  if (Math.abs(diff) > 50) {
    if (diff > 0) nextSlide();
    else prevSlide();
  }
  window.setTimeout(() => {
    dragMoved.value = false;
  }, 80);
  setTimeout(resumeAutoplay, autoplayDelay * 2);
};

const onMouseDown = (e: MouseEvent) => {
  if (e.button !== 0) return;
  dragStartX.value = e.clientX;
  touchStartX.value = e.clientX;
  isDragging.value = true;
  dragMoved.value = false;
  translateX.value = 0;
  pauseAutoplay();
};

const onMouseMove = (e: MouseEvent) => {
  if (!isDragging.value || touchStartX.value === null) return;
  const diff = e.clientX - (dragStartX.value || 0);
  if (Math.abs(diff) > 4) dragMoved.value = true;
  translateX.value = diff;
};

const onMouseUp = (e: MouseEvent) => {
  if (touchStartX.value === null) return;
  const diff = (touchStartX.value || 0) - e.clientX;
  isDragging.value = false;
  translateX.value = 0;
  touchStartX.value = null;
  dragStartX.value = null;
  if (Math.abs(diff) > 50) {
    if (diff > 0) nextSlide();
    else prevSlide();
    setTimeout(resumeAutoplay, autoplayDelay * 2);
  } else {
    resumeAutoplay();
  }
  window.setTimeout(() => {
    dragMoved.value = false;
  }, 80);
};

const onMouseLeave = () => {
  if (touchStartX.value !== null) {
    isDragging.value = false;
    translateX.value = 0;
    touchStartX.value = null;
    dragStartX.value = null;
    dragMoved.value = false;
    if (isAutoplayPaused.value) resumeAutoplay();
  }
};

const OpenYoutube = (slide: any) => {
  selectedVideo.value = slide;
  selectedVideoLink.value = slide?.video_source || null;
  pauseAutoplay();
};

const closeVideo = () => {
  selectedVideo.value = null;
  selectedVideoLink.value = null;
  resumeAutoplay();
};

const getEmbedUrl = (urlArg?: string) => {
  const url: string = urlArg || "";
  if (!url) return "";
  let videoId = "";
  if (url.includes("youtube.com/shorts/")) {
    videoId = url.match(/youtube\.com\/shorts\/([^?&]+)/)?.[1] ?? "";
  } else if (url.includes("youtu.be/")) {
    videoId = url.match(/youtu\.be\/([^?&]+)/)?.[1] ?? "";
  } else if (url.includes("youtube.com/watch?v=")) {
    videoId = url.match(/[?&]v=([^&]+)/)?.[1] ?? "";
  } else if (url.includes("youtube.com/embed/")) {
    videoId = url.match(/youtube\.com\/embed\/([^?&]+)/)?.[1] ?? "";
  }
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
};

const checkMobile = () => {
  if (typeof window !== "undefined") {
    isMobile.value = window.innerWidth < 1024;
  }
};

onMounted(() => {
  checkMobile();
  currentSlide.value = 0;
  store.getList();
  startAutoplay();
  window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
  stopAutoplay();
  if (typeof window !== "undefined") {
    window.removeEventListener("resize", checkMobile);
  }
});
</script>

<template>
  <client-only>
    <div class="mt-6">
      <div class="mb-6">
        <h1 class="text-[32px] lg:text-[72px] font-extrabold uppercase text-[#191C1F] text-center">
          {{ t("Блиц-интервью") }}
        </h1>
      </div>
      <div
        class="relative lg:w-full w-full select-none"
        :class="{ 'cursor-grab': !isDragging, 'cursor-grabbing': isDragging }"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"
        @mousedown="onMouseDown"
        @mousemove="onMouseMove"
        @mouseup="onMouseUp"
        @mouseleave="onMouseLeave"
      >
        <TransitionGroup
          name="weekly-feedback"
          tag="div"
          class="flex items-center justify-center gap-0 overflow-hidden"
          :class="isDragging ? '' : 'transition-transform duration-700 ease-out'"
          :style="{ transform: `translateX(${translateX}px)` }"
        >
          <div
            v-for="(item, i) in orderedSlides"
            :key="item.slide?.id || item.slide?.video_source || item.slide?.caption_path || item.slide?.image || `weekly-slide-${item.offset}`"
            class="weekly-feedback-item flex-shrink-0 px-2 cursor-pointer"
            :class="item.offset === 0 ? 'weekly-feedback-item--active' : 'weekly-feedback-item--inactive'"
            @click="goToSlide(item.offset)"
          >
            <div
              class="weekly-feedback-card bg-white rounded-xl shadow-lg overflow-hidden relative"
            >
              <img
                :src="item.slide?.caption_path || item.slide?.image"
                alt=""
                class="w-full h-full object-cover object-center rounded-xl"
              />
              <!-- Play button — only on active -->
              <div class="absolute top-3 right-3 z-10">
                <div
                  v-if="item.offset === 0 && !selectedVideoLink"
                  class="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow cursor-pointer animate-pulse"
                  @click.stop="OpenYoutube(item.slide)"
                >
                  <svg class="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <!-- Video overlay — only on active -->
              <div
                v-if="selectedVideoLink === item.slide?.video_source && item.offset === 0"
                class="absolute inset-0 z-50 bg-black rounded-xl w-full h-full"
              >
                <iframe
                  :src="getEmbedUrl(item.slide?.video_source)"
                  class="w-full h-full rounded-xl"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <button
                  class="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow cursor-pointer z-50"
                  @click.stop="closeVideo"
                >
                  <svg
                    class="w-5 h-5 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </TransitionGroup>

        <!-- Pagination dots -->
        <div class="flex justify-center mt-6 space-x-2">
          <button
            v-for="(_, index) in slides"
            :key="index"
            @click="goToSlideByIndex(index)"
            :class="[
              'w-3 h-3 rounded-full transition-colors duration-200',
              currentSlide === index ? 'bg-gray-800' : 'bg-gray-300',
            ]"
          ></button>
        </div>
      </div>
    </div>
  </client-only>
</template>

<style scoped>
.weekly-feedback-item {
  width: 100%;
  position: relative;
  transition:
    transform 760ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 760ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform, opacity;
  transform-origin: center center;
}

.weekly-feedback-item--active {
  opacity: 1;
  transform: scale(1.08);
  z-index: 2;
}

.weekly-feedback-item--inactive {
  opacity: 0.62;
  transform: scale(0.95);
}

.weekly-feedback-card {
  aspect-ratio: 9 / 16;
  border-radius: 0.75rem;
  overflow: hidden;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  clip-path: inset(0 round 0.75rem);
  transition:
    transform 900ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 900ms cubic-bezier(0.22, 1, 0.36, 1);
}

.weekly-feedback-move,
.weekly-feedback-enter-active,
.weekly-feedback-leave-active {
  transition:
    transform 900ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 900ms cubic-bezier(0.22, 1, 0.36, 1);
}

.weekly-feedback-enter-from {
  opacity: 1;
}

.weekly-feedback-enter-from .weekly-feedback-card {
  opacity: 0;
  transform: translate3d(32px, 0, 0);
}

.weekly-feedback-leave-to {
  opacity: 1;
}

.weekly-feedback-leave-to .weekly-feedback-card {
  opacity: 0;
  transform: translate3d(-32px, 0, 0);
}

.weekly-feedback-leave-active {
  position: absolute;
}

.weekly-feedback-card,
.weekly-feedback-card img,
.weekly-feedback-card iframe {
  border-radius: inherit;
}

@media (min-width: 1024px) {
  .weekly-feedback-item {
    width: 280px;
  }
}

@media (max-width: 1023px) {
  .weekly-feedback-item--active,
  .weekly-feedback-item--inactive {
    transform: none;
    opacity: 1;
  }
}
</style>
