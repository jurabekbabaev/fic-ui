<template>
  <div class="mt-[50px] lg:mt-[100px]">
    <div class="container mx-auto">
      <div class="lg:flex block gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-6 lg:w-1/3 w-full">
          <h2
            class="text-[32px] lg:text-[64px] leading-[100%] font-extrabold uppercase text-[#191C1F] lg:w-[413px] w-full"
          >
            {{ t("about_us") }}
          </h2>
          <p class="text-[#191C1F] lg:text-lg text-base font-normal">
            {{
              t(
                "Руководители международных организаций поделились своими впечатлениями и результатами участия в Совете иностранных инвесторов."
              )
            }}
          </p>
        </div>

        <!-- Right Carousel -->
        <div 
          class="relative lg:w-2/3 w-full lg:mt-0 mt-8 select-none"
          :class="{ 'cursor-grab': !isDragging, 'cursor-grabbing': isDragging }"
          @touchstart="onTouchStart"
          @touchmove="onTouchMove"
          @touchend="onTouchEnd"
          @mousedown="onMouseDown"
          @mousemove="onMouseMove"
          @mouseup="onMouseUp"
          @mouseleave="onMouseLeave"
        >
          <div
            class="overflow-hidden"
            :class="isMobile ? 'px-4' : 'flex justify-start'"
          >
            <TransitionGroup
              name="home-feedback"
              ref="carouselContainer"
              tag="div"
              class="flex items-center"
              :class="isDragging ? '' : 'transition-transform duration-500 ease-in-out'"
              :style="{ transform: isDragging ? `translateX(${translateX}px)` : 'translateX(0)' }"
            >
              <!-- Slides -->
              <div
                v-for="(slide, index) in orderedSlides"
                :key="slide?.id || slide?.video_source || slide?.caption_path || `about-slide-${index}`"
                class="home-feedback-item lg:w-[300px] w-full flex-shrink-0 px-2"
                :class="index === 0 ? 'home-feedback-item--active' : 'home-feedback-item--inactive'"
              >
                <div
                  class="home-feedback-card bg-white rounded-xl shadow-lg overflow-hidden relative cursor-pointer"
                  @click="goToSlide(index)"
                >
                  <div class="relative h-[360px] md:h-[500px]">
                    <div v-if="selectedVideoLink === slide?.video_source" class="absolute inset-0 z-50 bg-black rounded-xl w-full h-full">
                      <iframe
                        :src="getEmbedUrl(slide.video_source)"
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
                    <template v-else>
                      <img
                        :src="slide?.caption_path"
                        class="w-full h-full object-cover rounded-xl"
                      />
                      <button
                        v-if="index === 0 && !selectedVideoLink"
                        class="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow cursor-pointer animate-pulse z-10"
                        @click.stop="OpenYoutube(slide)"
                      >
                        <svg
                          class="w-6 h-6 text-gray-700"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </template>
                  </div>
                  <!-- <div
                    class="absolute bg-white p-3 rounded-xl left-3 right-3 bottom-3"
                  >
                    <img :src="slide.logo" class="h-10 m-2" />
                    <p class="text-lg text-[#191C1F] font-bold mt-2">
                      {{ t(slide.name) }}
                    </p>
                    <p class="text-base text-[#505A63] font-normal mt-1">
                      {{ t(slide.title) }}
                    </p>
                  </div> -->
                </div>
              </div>
            </TransitionGroup>
          </div>

          <!-- Pagination Dots -->
          <div class="flex justify-center mt-6 space-x-2">
            <button
              v-for="(slide, index) in slides"
              :key="'dot-' + index"
              @click="goToSlideByIndex(index)"
              :class="[
                'w-3 h-3 rounded-full transition-colors duration-200 cursor-pointer',
                currentSlide === index ? 'bg-gray-800' : 'bg-gray-300',
              ]"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import Image1 from "@/assets/images/about/Primkulov Akmal.png";
import Image2 from "@/assets/images/about/Jon Zaidi.png";
import Image3 from "@/assets/images/about/Azizbek Akhmadjonov.png";
import Image4 from "@/assets/images/about/Andrey Pyatakhin1.png";
import Image5 from "@/assets/images/about/Vaclav Harant.png";
import Image6 from "@/assets/images/about/selchuk.png";
import Image7 from "@/assets/images/about/Nika Kurdianini.png";
import Image8 from "@/assets/images/about/Alex Wang.png";
import Image9 from "@/assets/images/about/Marius Dan.png";
import Image10 from "@/assets/images/about/fic.png";
import { useI18n } from "vue-i18n";
import { useExpertFeedbacksStore } from '@/stores/expertFeedbacks'
const store = useExpertFeedbacksStore();
const { t } = useI18n()
const slides = computed(() => {
  return store.list;
})
const getModels = () => {
  store.getList();
}

const currentSlide = ref(0);
const isMobile = ref(false);
const carouselContainer = ref(null);
const translateX = ref(0);
const autoplayInterval = ref(null);
const isAutoplayPaused = ref(false);
const autoplayDelay = 4000; // 4 seconds

const touchStartX = ref(null);
const touchEndX = ref(0);
const isDragging = ref(false);
const dragStartX = ref(null);
const currentTranslate = ref(0);
const selectedVideo = ref(null);
const selectedVideoLink = ref(null);

// const slides = ref([
//   {
//     image: Image1,
//     hasVideo: true,
//     link: 'https://www.youtube.com/shorts/--Pbm9G-RAc'
//   },
//   {
//     image: Image2,
//     hasVideo: false,
//     link: 'https://www.youtube.com/shorts/ahJuNXAqNlU'
//   },
//   {
//     image: Image3,
//     hasVideo: false,
//     link: 'https://www.youtube.com/shorts/SjKBXRuuqFk'
//   },
//   {
//     image: Image4,
//     hasVideo: false,
//     link: 'https://www.youtube.com/shorts/cAverhrE0xw'
//   },
//   {
//     image: Image5,
//     hasVideo: false,
//     link: 'https://www.youtube.com/shorts/UkJ-tMGzNW0'
//   },
//   {
//     image: Image6,
//     hasVideo: false,
//     link: 'https://youtube.com/shorts/EGsqqu9Tx5I?si=5rG8NVa4HFGeBizs'
//   },
//   {
//     image: Image7,
//     hasVideo: false,
//     link: 'https://www.youtube.com/shorts/MyFdY6pTb2E'
//   },
//   {
//     image: Image8,
//     hasVideo: false,
//     link: 'https://youtu.be/oxRLLuNpqGI?si=zpNe-R__Gf5IbYrx'
//   },
//   {
//     image: Image9,
//     hasVideo: false,
//     link: 'https://www.youtube.com/shorts/pdx1sDOvQVM'
//   },
//   {
//     image: Image10,
//     hasVideo: false,
//     link: 'https://youtube.com/shorts/VtLsc0B2UTg?si=iEyA3bYlXzmIzIby'
//   },
// ]);

function OpenYoutube(slide) {
  selectedVideo.value = slide;
  selectedVideoLink.value = slide.video_source;
  pauseAutoplay();
}

function closeVideo() {
  selectedVideo.value = null;
  selectedVideoLink.value = null;
  resumeAutoplay();
}

function getEmbedUrl(url) {
  if (!url) return '';
  
  let videoId = '';
  
  // har xil YouTube URL formatlarini boshqarish
  if (url.includes('youtube.com/shorts/')) {
    const match = url.match(/youtube\.com\/shorts\/([^?&]+)/);
    videoId = match ? match[1] : '';
  } else if (url.includes('youtu.be/')) {
    const match = url.match(/youtu\.be\/([^?&]+)/);
    videoId = match ? match[1] : '';
  } else if (url.includes('youtube.com/watch?v=')) {
    const match = url.match(/[?&]v=([^&]+)/);
    videoId = match ? match[1] : '';
  } else if (url.includes('youtube.com/embed/')) {
    const match = url.match(/youtube\.com\/embed\/([^?&]+)/);
    videoId = match ? match[1] : '';
  }
  
  if (videoId) {
    // shorts uchun URL
    if (url.includes('shorts')) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return `https://www.youtube.com/embed/${videoId}`;
  }
  
  return url;
}

const orderedSlides = computed(() => {
  return [
    slides.value[currentSlide.value],
    ...slides.value.slice(currentSlide.value + 1),
    ...slides.value.slice(0, currentSlide.value),
  ];
});

const goToSlide = (index) => {
  if (selectedVideoLink.value) {
    closeVideo();
    return;
  }
  if (index === 0) return; 
  currentSlide.value = (currentSlide.value + index) % slides.value.length;
  
  pauseAutoplay();
  setTimeout(() => {
    resumeAutoplay();
  }, autoplayDelay * 2); 
};

const goToSlideByIndex = (index) => {
  if (currentSlide.value === index) return;
  currentSlide.value = index;
  pauseAutoplay();
  setTimeout(() => {
    resumeAutoplay();
  }, autoplayDelay * 2);
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length;
};

const startAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
  }
  autoplayInterval.value = setInterval(() => {
    if (!isAutoplayPaused.value) {
      nextSlide();
    }
  }, autoplayDelay);
};

const pauseAutoplay = () => {
  isAutoplayPaused.value = true;
};

const resumeAutoplay = () => {
  isAutoplayPaused.value = false;
};

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
    autoplayInterval.value = null;
  }
};

const onTouchStart = (e) => {
  const touch = e.touches[0];
  touchStartX.value = touch.clientX;
  dragStartX.value = touch.clientX;
  isDragging.value = true;
  currentTranslate.value = 0;
  translateX.value = 0;
  pauseAutoplay();
};

const onTouchMove = (e) => {
  if (!isDragging.value || touchStartX.value === null) return;
  e.preventDefault();
  
  const currentX = e.touches[0].clientX;
  const diff = currentX - dragStartX.value;
  currentTranslate.value = diff;
  
  translateX.value = diff;
};

const onTouchEnd = (e) => {
  if (!isDragging.value || touchStartX.value === null) return;
  
  touchEndX.value = e.changedTouches[0].clientX;
  const diff = touchStartX.value - touchEndX.value;
  const minSwipeDistance = 50;
  
  // Reset drag state first
  isDragging.value = false;
  translateX.value = 0;
  currentTranslate.value = 0;
  touchStartX.value = null;
  dragStartX.value = null;
  
  if (Math.abs(diff) > minSwipeDistance) {
    if (diff > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  }
  
  setTimeout(() => {
    resumeAutoplay();
  }, autoplayDelay * 2);
};

const onMouseDown = (e) => {
  if (e.button !== 0) return; 
  
  const target = e.target;
  if (target.closest('button') || target.closest('.bg-white.rounded-xl')) {
    return;
  }
  
  dragStartX.value = e.clientX;
  touchStartX.value = e.clientX;
  isDragging.value = false; 
  currentTranslate.value = 0;
  translateX.value = 0;
};

const onMouseMove = (e) => {
  if (touchStartX.value === null) return; 
  
  const currentX = e.clientX;
  const diff = currentX - dragStartX.value;
  
  if (Math.abs(diff) > 5) {
    if (!isDragging.value) {
      isDragging.value = true;
      pauseAutoplay();
    }
    currentTranslate.value = diff;
    translateX.value = diff;
    e.preventDefault();
  }
};

const onMouseUp = (e) => {
  if (touchStartX.value === null) return;
  
  touchEndX.value = e.clientX;
  const diff = touchStartX.value - touchEndX.value;
  const minSwipeDistance = 50;
  
  const wasDragging = isDragging.value;
  
  isDragging.value = false;
  translateX.value = 0;
  currentTranslate.value = 0;
  touchStartX.value = null;
  dragStartX.value = null;
  
  if (wasDragging && Math.abs(diff) > minSwipeDistance) {
    e.preventDefault();
    if (diff > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
    setTimeout(() => {
      resumeAutoplay();
    }, autoplayDelay * 2);
  } else if (wasDragging) {
    resumeAutoplay();
  }
};

const onMouseLeave = (e) => {
  if (touchStartX.value !== null) {
    isDragging.value = false;
    translateX.value = 0;
    currentTranslate.value = 0;
    touchStartX.value = null;
    dragStartX.value = null;
    if (isAutoplayPaused.value) {
      resumeAutoplay();
    }
  }
};

const checkMobile = () => {
  if (typeof window !== "undefined") {
    isMobile.value = window.innerWidth < 1024;
  }
};

onMounted(() => {
  checkMobile();
  currentSlide.value = 0;
  startAutoplay();
  window.addEventListener("resize", checkMobile);

  getModels()
});

onUnmounted(() => {
  stopAutoplay();
  if (typeof window !== "undefined") {
    window.removeEventListener("resize", checkMobile);
  }
});
</script>

<style scoped>
.home-feedback-item {
  transition:
    transform 760ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 760ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform, opacity;
}

.home-feedback-item--active {
  opacity: 1;
  transform: scale(1.04);
  z-index: 2;
}

.home-feedback-item--inactive {
  opacity: 0.68;
  transform: scale(0.95);
}

.home-feedback-card {
  border-radius: 0.75rem;
  overflow: hidden;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  clip-path: inset(0 round 0.75rem);
  isolation: isolate;
}

.home-feedback-move,
.home-feedback-enter-active,
.home-feedback-leave-active {
  transition:
    transform 760ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 760ms cubic-bezier(0.22, 1, 0.36, 1);
}

.home-feedback-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.home-feedback-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.home-feedback-leave-active {
  position: absolute;
}

.home-feedback-card,
.home-feedback-card > .relative,
.home-feedback-card img,
.home-feedback-card iframe {
  border-radius: inherit;
}

.home-feedback-item--active .home-feedback-card,
.home-feedback-item--active .home-feedback-card > .relative,
.home-feedback-item--active .home-feedback-card img,
.home-feedback-item--active .home-feedback-card iframe {
  border-radius: 0.75rem !important;
  clip-path: inset(0 round 0.75rem);
}

@media (max-width: 1023px) {
  .home-feedback-item--active,
  .home-feedback-item--inactive {
    transform: none;
    opacity: 1;
  }
}
</style>
