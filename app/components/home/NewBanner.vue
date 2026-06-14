<template>
  <div class="relative introHeroFlow">
    <Transition name="introTextOverlayFade">
      <div
        v-if="isTextOverlayActive"
        class="introTextOverlay"
        aria-hidden="true"
      >
        <div class="introTextOverlay__backdrop" />
        <div class="introTextOverlay__glow" />
        <div class="introTextOverlay__content" :style="textOverlayStyle">
          <div class="introTextOverlay__text">
            {{ t("Совет поддерживается ЕБРР!") }}
          </div>
          <img
            :src="EbrdLogo"
            alt="EBRD"
            class="introTextOverlay__logo"
            draggable="false"
          />
        </div>
      </div>
    </Transition>

    <div ref="introTrackRef" class="introHeroTrack" :style="introTrackStyle">
      <div class="introHeroSticky">
        <div
          id="newmainBanner"
          class="flex items-center introHeroBanner"
          :class="{
            'scroll-down': isInvestorsRevealed,
            'introHeroBanner--revealed': isInvestorsRevealed,
          }"
        >
          <div class="introHeroScene">
            <article
              v-for="(hero, index) in heroSlides"
              :key="hero.id"
              class="introHeroPanel"
              :style="getHeroPanelStyle(index)"
              :aria-hidden="!isHeroVisible(index)"
            >
              <div
                class="introHeroPanel__bg"
                :style="getHeroBackgroundStyle(index)"
              />

              <div class="mainContainer introHeroPanel__shell">
                <div
                  class="mainBannerTxt lg:flex block lg:items-center lg:justify-between leading-normal w-full"
                  :style="getHeroContentStyle(index)"
                >
                  <template v-if="hero.layout === 'quote-left'">
                    <div class="newMBCol1">
                      <a
                        :href="hero.link"
                        target="_blank"
                        rel="noopener noreferrer"
                        @click.stop
                        class="block relative z-20 top-0 lg:-top-[60px] lg:w-[78%] text-white transition-opacity hover:opacity-85 cursor-pointer"
                      >
                        <h1
                          class="font-black lg:text-[44px] text-[24px] uppercase mb-1 leading-[1.1]"
                        >
                          {{ hero.quote }}
                        </h1>
                      </a>

                      <div class="introHeroIdentity lg:max-w-none mt-0">
                        <h2
                          class="lg:text-2xl text-base font-bold mb-1 lg:whitespace-nowrap"
                        >
                          {{ hero.name }}
                        </h2>
                        <h3 class="lg:text-base text-sm font-normal">
                          {{ hero.position }}
                        </h3>
                      </div>
                    </div>
                  </template>

                  <template v-else>
                    <div class="newMBCol1 introHeroQuoteRight">
                      <a
                        :href="hero.link"
                        target="_blank"
                        rel="noopener noreferrer"
                        @click.stop
                        class="block relative z-20 top-0 lg:-top-[98px] text-white transition-opacity hover:opacity-85 cursor-pointer"
                      >
                        <h1
                          class="font-black lg:text-[44px] text-[24px] uppercase mb-3 leading-[1.1]"
                        >
                          {{ hero.quote }}
                        </h1>
                      </a>

                      <div
                        class="introHeroIdentity introHeroIdentity--right mt-5"
                      >
                        <h2 class="lg:text-2xl text-base font-bold mb-1">
                          {{ hero.name }}
                        </h2>
                        <h3 class="lg:text-base text-sm font-normal">
                          {{ hero.position }}
                        </h3>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div class="fInvestorsSectionWrap introHeroOverlay">
          <div
            class="section"
            id="newfInvestorsSection"
            :class="{ 'scroll-show': isInvestorsRevealed }"
            :style="investorSectionStyle"
          >
            <div class="introCouncilShell">
              <div class="text-center mb-[36px] d-hide">
                <h2 class="title-64 mb-3 lg:text-[64px] text-[32px]">
                  {{ t("Совет Иностранных Инвесторов") }}
                </h2>
                <div class="w-full flex justify-center">
                  <div class="lg:text-[20px] text-base lg:w-3/5">
                    {{
                      t(
                        "barqaror rivojlanish va iqtisodiy islohotlarni qo‘llab-quvvatlash maqsadidagi tashkilotlarni birlashtiradi."
                      )
                    }}
                  </div>
                </div>
              </div>

              <h2
                class="introCouncilLeadersTitle text-center uppercase font-black text-[#191C1F] lg:text-[32px] text-2xl mb-6"
              >
                {{ t("Руководство") }}
              </h2>

              <div class="introCouncilLeaders">
                <article
                  v-for="leader in leaders"
                  :key="leader.id"
                  class="introCouncilCard"
                >
                  <div class="introCouncilCard__logo">
                    <img
                      :src="leader.logo"
                      :alt="leader.logoAlt"
                      :class="['introCouncilCard__logoImage', leader.logoClass]"
                    />
                  </div>

                  <div class="introCouncilCard__imageWrap">
                    <img
                      :src="leader.image"
                      :alt="leader.fullname"
                      class="introCouncilCard__image"
                    />
                  </div>

                  <div class="introCouncilCard__copy">
                    <h3 class="introCouncilCard__name">
                      {{ leader.fullname }}
                    </h3>
                    <p class="introCouncilCard__role">
                      <span
                        v-for="(line, lineIdx) in leader.position.split('—')"
                        :key="lineIdx"
                        class="introCouncilCard__roleLine"
                        >{{ line.trim() }}</span
                      >
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import Management1 from "@/assets/images/management/image11.png";
import Management2 from "@/assets/images/management/image12.png";
import EBank from "@/assets/images/brands/e-bank.png";
import EbrdLogo from "@/assets/images/brands/ebrd.png";

import desktopImg from "@/assets/images/home/60f66bb43e415a780b96ef1fc99600ee027b94c4.png";
import mobileImg from "@/assets/images/home/banner-img-mobile.png";
import secondHeroImg from "@/assets/images/home/l2.png";
import ficLogo from "@/assets/images/pr.png";
const presidentLink = "https://president.uz/en/lists/view/7194";

const HERO_ONE_HOLD_END = 0.04;
const HERO_SWITCH_END = 0.32;
const SECOND_HERO_STAGE_PROGRESS = 0.34;
const INVESTOR_REVEAL_START = 0.38;
const INVESTOR_REVEAL_END = 0.72;
const MENU_STAGE_PROGRESS = 0.76;
const HERO_STAGE_SETTLE_EPSILON = 0.01;
const HERO_SCROLL_TRIGGER_THRESHOLD = 10;
const HERO_SWITCH_SCROLL_DURATION = 1150;
const MENU_REVEAL_SCROLL_DURATION = 1;
const WHEEL_GESTURE_IDLE_MS = 140;
const TEXT_OVERLAY_DURATION = 1300;

const { t } = useI18n();
const introTrackRef = ref(null);
const isMobile = ref(false);
const scrollProgress = ref(0);
const scrollDirection = ref(1);
const lastWindowScrollY = ref(0);
const currentStageIndex = ref(0);
const isStageTransitionLocked = ref(false);
const touchStartY = ref(null);
const hasTouchGestureTriggeredStage = ref(false);
const isWheelGestureActive = ref(false);
const isTextOverlayActive = ref(false);
const textOverlayProgress = ref(0);

let frameId = 0;
let stageAnimationFrameId = 0;
let wheelGestureResetTimer = 0;
let textOverlayFrameId = 0;

const heroSlides = computed(() => [
  {
    id: "first",
    quote: t("Мы создадим все условия"),
    name: t("Шавкат Миромонович Мирзиёев"),
    position: t("Президент Республики Узбекистан"),
    image: isMobile.value ? mobileImg : desktopImg,
    imagePosition: isMobile.value ? "center bottom" : "center 58%",
    imageSize: "cover",
    layout: "quote-left",
    link: presidentLink,
  },
  {
    id: "second",
    quote: t(
      "Мы готовы внести свой вклад везде, где наш опыт и инвестиции могут принести дополнительную ценность."
    ),
    name: t("Одиль Рено-Бассо"),
    position: t("Президент Европейского банка реконструкции и развития"),
    image: secondHeroImg,
    imagePosition: isMobile.value ? "center center" : "center center",
    imageSize: "cover",
    layout: "identity-left",
  },
]);

const leaders = computed(() => [
  {
    id: 1,
    logo: ficLogo,
    logoAlt: "FIC",
    logoClass: "introCouncilCard__logoImage--sm",
    image: Management2,
    fullname: t("Шавкат Миромонович Мирзиёев"),
    position: t("Председатель Совета — Президент Республики Узбекистан"),
  },
  {
    id: 2,
    logo: EBank,
    logoAlt: "EBRD",
    logoClass: "introCouncilCard__logoImage--ebrd",
    image: Management1,
    fullname: t("Одиль Рено-Бассо"),
    position: t("Сопредседатель Совета — Президент ЕБРР"),
  },
]);

const introTrackStyle = computed(() => ({
  // On mobile the scroll-jacking is disabled and the hero + leaders render as
  // normal stacked sections, so the track must size to its content.
  height: isMobile.value ? "auto" : "215vh",
}));

const heroSwitchProgress = computed(() =>
  normalizeProgress(scrollProgress.value, HERO_ONE_HOLD_END, HERO_SWITCH_END)
);

const easeInOutCubic = (value) =>
  value < 0.5 ? 4 * value * value * value : 1 - Math.pow(-2 * value + 2, 3) / 2;

const easeOutInQuart = (value) => {
  if (value < 0.5) {
    const u = 2 * value;
    return 0.5 * (1 - Math.pow(1 - u, 4));
  }
  const u = 2 * value - 1;
  return 0.5 + 0.5 * Math.pow(u, 4);
};

const easedHeroSwitchProgress = computed(() =>
  easeInOutCubic(heroSwitchProgress.value)
);

const textOverlayStyle = computed(() => {
  const p = textOverlayProgress.value;
  const eased = easeOutInQuart(p);
  const y = (0.5 - eased) * 110;
  const shape = Math.sin(eased * Math.PI);
  const scale = 0.45 + 0.55 * shape;
  const opacity = Math.min(1, shape * 1.6);
  const blur = (1 - shape) * 5;

  return {
    transform: `translate3d(0, ${y.toFixed(3)}vh, 0) scale(${scale.toFixed(
      3
    )})`,
    opacity: opacity.toFixed(4),
    filter: `blur(${blur.toFixed(2)}px)`,
  };
});

function playTextOverlay() {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve();
      return;
    }

    if (textOverlayFrameId) {
      window.cancelAnimationFrame(textOverlayFrameId);
      textOverlayFrameId = 0;
    }

    isTextOverlayActive.value = true;
    textOverlayProgress.value = 0;
    const startTime = performance.now();

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / TEXT_OVERLAY_DURATION, 1);
      textOverlayProgress.value = progress;

      if (progress < 1) {
        textOverlayFrameId = window.requestAnimationFrame(step);
        return;
      }

      textOverlayFrameId = 0;
      isTextOverlayActive.value = false;
      textOverlayProgress.value = 0;
      resolve();
    };

    textOverlayFrameId = window.requestAnimationFrame(step);
  });
}

const investorRevealProgress = computed(() =>
  normalizeProgress(
    scrollProgress.value,
    INVESTOR_REVEAL_START,
    INVESTOR_REVEAL_END
  )
);

const easedInvestorRevealProgress = computed(() => {
  return easeInOutCubic(investorRevealProgress.value);
});

const isInvestorsRevealed = computed(() => investorRevealProgress.value > 0.02);

const investorSectionStyle = computed(() => {
  if (isMobile.value) {
    return {
      opacity: "1",
      transform: "scale(1)",
      width: "100%",
      height: "100%",
      paddingTop: "100px",
      paddingBottom: "88px",
      borderRadius: "0px",
      overflow: "visible",
      pointerEvents: "auto",
    };
  }

  const reveal = easedInvestorRevealProgress.value;
  const scale = 0.78 + reveal * 0.22;
  const opacity = reveal;
  const paddingTopVh = 10 + reveal * 20;
  const paddingBottomPx = 56 + reveal * 40;

  return {
    width: "100%",
    height: "110%",
    borderRadius: "0px",
    paddingTop: `${paddingTopVh}vh`,
    paddingBottom: `${paddingBottomPx}px`,
    opacity: opacity.toFixed(4),
    transform: `scale(${scale.toFixed(4)}) translateZ(0)`,
    transformOrigin: "center center",
    overflow: "visible",
    pointerEvents: reveal > 0.08 ? "auto" : "none",
    willChange: "transform, opacity",
  };
});

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

const normalizeProgress = (value, start, end) => {
  if (end <= start) return value >= end ? 1 : 0;
  return clamp((value - start) / (end - start));
};

const getHeroMotion = (index) => {
  const reveal = easedInvestorRevealProgress.value;

  if (reveal > 0) {
    return {
      opacity: 1 - reveal,
      imageShift: index === 0 ? -12 - reveal * 10 : reveal * 6,
      textShift: index === 0 ? -18 - reveal * 10 : reveal * 10,
      scale: 1 - reveal * 0.03,
    };
  }

  const switchPhase = easedHeroSwitchProgress.value;

  if (index === 0) {
    if (switchPhase <= 0) {
      return { opacity: 1, imageShift: 0, textShift: 0, scale: 1 };
    }
    return {
      opacity: 1 - switchPhase,
      imageShift: -12 * switchPhase,
      textShift: -18 * switchPhase,
      scale: 1 - switchPhase * 0.03,
    };
  }

  return {
    opacity: switchPhase,
    imageShift: 12 * (1 - switchPhase),
    textShift: 18 * (1 - switchPhase),
    scale: 0.97 + switchPhase * 0.03,
  };
};

const getHeroPanelStyle = (index) => {
  if (isMobile.value) {
    return {
      opacity: 1,
      visibility: "visible",
      pointerEvents: "auto",
      zIndex: 1,
    };
  }
  const motion = getHeroMotion(index);

  return {
    opacity: motion.opacity.toFixed(4),
    visibility: motion.opacity > 0.001 ? "visible" : "hidden",
    pointerEvents: motion.opacity > 0.001 ? "auto" : "none",
    zIndex: index === 0 ? (easedHeroSwitchProgress.value < 1 ? 2 : 1) : 1,
  };
};

const getHeroBackgroundStyle = (index) => {
  const hero = heroSlides.value[index];
  if (isMobile.value) {
    return {
      backgroundImage: `url('${hero.image}')`,
      backgroundPosition: hero.imagePosition,
      backgroundSize: hero.imageSize,
    };
  }
  const motion = getHeroMotion(index);

  return {
    backgroundImage: `url('${hero.image}')`,
    backgroundPosition: hero.imagePosition,
    backgroundSize: hero.imageSize,
    transform: `translate3d(${motion.imageShift}%, 0, 0) scale(${motion.scale})`,
  };
};

const getHeroContentStyle = (index) => {
  if (isMobile.value) return {};
  const motion = getHeroMotion(index);

  return {
    opacity: motion.opacity.toFixed(4),
    transform: `translate3d(${motion.textShift}%, 0, 0)`,
  };
};

const isHeroVisible = (index) => getHeroMotion(index).opacity > 0.001;

const updateViewportMode = () => {
  if (typeof window === "undefined") return;
  isMobile.value = window.innerWidth <= 1023;
};

const updateScrollProgress = () => {
  frameId = 0;

  if (typeof window === "undefined" || !introTrackRef.value) return;

  const currentScrollY = window.scrollY;
  scrollDirection.value = currentScrollY >= lastWindowScrollY.value ? 1 : -1;
  lastWindowScrollY.value = currentScrollY;

  const maxScrollable = Math.max(
    introTrackRef.value.offsetHeight - window.innerHeight,
    1
  );
  const top = introTrackRef.value.getBoundingClientRect().top;
  const travelled = clamp(-top, 0, maxScrollable);
  scrollProgress.value = travelled / maxScrollable;

  if (!isStageTransitionLocked.value) {
    syncCurrentStage();
  }
};

const queueScrollProgress = () => {
  if (frameId) return;
  frameId = window.requestAnimationFrame(updateScrollProgress);
};

function getIntroMetrics() {
  if (typeof window === "undefined" || !introTrackRef.value) return null;

  const startY =
    window.scrollY + introTrackRef.value.getBoundingClientRect().top;
  const maxScrollable = Math.max(
    introTrackRef.value.offsetHeight - window.innerHeight,
    1
  );

  return {
    startY,
    endY: startY + maxScrollable,
    maxScrollable,
  };
}

function syncCurrentStage() {
  if (scrollProgress.value >= MENU_STAGE_PROGRESS - HERO_STAGE_SETTLE_EPSILON) {
    currentStageIndex.value = 2;
    return;
  }

  if (
    scrollProgress.value >=
    SECOND_HERO_STAGE_PROGRESS - HERO_STAGE_SETTLE_EPSILON
  ) {
    currentStageIndex.value = 1;
    return;
  }

  currentStageIndex.value = 0;
}

function isWithinIntroFlow() {
  if (typeof window === "undefined") return false;

  const metrics = getIntroMetrics();
  if (!metrics) return false;

  return (
    window.scrollY >= metrics.startY - 1 && window.scrollY <= metrics.endY + 1
  );
}

function getStageTargetProgress(targetStage) {
  if (targetStage <= 0) return 0;
  if (targetStage === 1) return SECOND_HERO_STAGE_PROGRESS;
  return MENU_STAGE_PROGRESS;
}

function getStageTargetForDirection(direction) {
  if (direction > 0 && currentStageIndex.value < 2) {
    return currentStageIndex.value + 1;
  }

  if (direction < 0 && currentStageIndex.value > 0) {
    return currentStageIndex.value - 1;
  }

  return null;
}

function cancelStageTransition() {
  if (!stageAnimationFrameId) return;

  window.cancelAnimationFrame(stageAnimationFrameId);
  stageAnimationFrameId = 0;
  isStageTransitionLocked.value = false;
}

function resetWheelGesture() {
  if (wheelGestureResetTimer) {
    window.clearTimeout(wheelGestureResetTimer);
    wheelGestureResetTimer = 0;
  }

  isWheelGestureActive.value = false;
}

function finishStageTransition(targetStage, targetY) {
  window.scrollTo({ top: targetY, left: 0, behavior: "instant" });
  currentStageIndex.value = targetStage;
  isStageTransitionLocked.value = false;
  stageAnimationFrameId = 0;
  lastWindowScrollY.value = targetY;
  updateScrollProgress();

  if (wheelGestureResetTimer) {
    window.clearTimeout(wheelGestureResetTimer);
  }
  wheelGestureResetTimer = window.setTimeout(() => {
    isWheelGestureActive.value = false;
    wheelGestureResetTimer = 0;
  }, 60);
}

function runStageScrollAnimation(targetStage) {
  if (typeof window === "undefined") return;

  const metrics = getIntroMetrics();
  if (!metrics) {
    isStageTransitionLocked.value = false;
    return;
  }

  const startY = window.scrollY;
  const targetY =
    metrics.startY +
    getStageTargetProgress(targetStage) * metrics.maxScrollable;
  const deltaY = targetY - startY;

  if (Math.abs(deltaY) < 1) {
    finishStageTransition(targetStage, targetY);
    return;
  }

  isStageTransitionLocked.value = true;
  scrollDirection.value = deltaY >= 0 ? 1 : -1;

  if (stageAnimationFrameId) {
    window.cancelAnimationFrame(stageAnimationFrameId);
  }

  const duration =
    targetStage === 2 || currentStageIndex.value === 2
      ? MENU_REVEAL_SCROLL_DURATION
      : HERO_SWITCH_SCROLL_DURATION;
  let startTime = 0;

  const animate = (timestamp) => {
    if (!startTime) startTime = timestamp;

    const elapsed = timestamp - startTime;
    const animationProgress = clamp(elapsed / duration);
    const easedProgress = easeInOutCubic(animationProgress);
    const nextY = startY + deltaY * easedProgress;

    window.scrollTo({ top: nextY, left: 0, behavior: "instant" });
    updateScrollProgress();

    if (animationProgress < 1) {
      stageAnimationFrameId = window.requestAnimationFrame(animate);
      return;
    }

    finishStageTransition(targetStage, targetY);
  };

  stageAnimationFrameId = window.requestAnimationFrame(animate);
}

function transitionToStage(targetStage) {
  if (typeof window === "undefined") return;
  if (isStageTransitionLocked.value) return;
  if (
    targetStage === currentStageIndex.value ||
    targetStage < 0 ||
    targetStage > 2
  )
    return;

  if (currentStageIndex.value === 1 && targetStage === 2) {
    isStageTransitionLocked.value = true;
    scrollDirection.value = 1;

    playTextOverlay().then(() => {
      isStageTransitionLocked.value = false;
      runStageScrollAnimation(targetStage);
    });
    return;
  }

  runStageScrollAnimation(targetStage);
}

function handleWheel(event) {
  if (isMobile.value) return;
  if (!isWithinIntroFlow()) return;

  if (isStageTransitionLocked.value) {
    event.preventDefault();
    return;
  }

  const direction = Math.sign(event.deltaY);
  if (!direction) return;

  if (isWheelGestureActive.value) {
    event.preventDefault();
    return;
  }

  const targetStage = getStageTargetForDirection(direction);
  if (targetStage === null) return;

  event.preventDefault();
  isWheelGestureActive.value = true;
  transitionToStage(targetStage);
}

function handleTouchStart(event) {
  if (isMobile.value) return;
  touchStartY.value = event.touches[0]?.clientY ?? null;
  hasTouchGestureTriggeredStage.value = false;
}

function handleTouchMove(event) {
  if (isMobile.value) return;
  if (!isWithinIntroFlow()) return;

  if (isStageTransitionLocked.value) {
    event.preventDefault();
    return;
  }

  const currentTouchY = event.touches[0]?.clientY;
  if (currentTouchY == null || touchStartY.value == null) return;

  const deltaY = touchStartY.value - currentTouchY;
  if (Math.abs(deltaY) < HERO_SCROLL_TRIGGER_THRESHOLD) return;

  if (hasTouchGestureTriggeredStage.value) {
    event.preventDefault();
    return;
  }

  const targetStage = getStageTargetForDirection(Math.sign(deltaY));
  if (targetStage === null) return;

  event.preventDefault();
  hasTouchGestureTriggeredStage.value = true;
  touchStartY.value = currentTouchY;
  transitionToStage(targetStage);
}

function resetTouchGesture() {
  touchStartY.value = null;
  hasTouchGestureTriggeredStage.value = false;
}

const handleResize = () => {
  cancelStageTransition();
  resetWheelGesture();
  resetTouchGesture();
  updateViewportMode();
  updateScrollProgress();
};

onMounted(async () => {
  updateViewportMode();
  await nextTick();
  lastWindowScrollY.value = typeof window !== "undefined" ? window.scrollY : 0;
  updateScrollProgress();

  window.addEventListener("wheel", handleWheel, { passive: false });
  window.addEventListener("touchstart", handleTouchStart, { passive: true });
  window.addEventListener("touchmove", handleTouchMove, { passive: false });
  window.addEventListener("touchend", resetTouchGesture, { passive: true });
  window.addEventListener("scroll", queueScrollProgress, { passive: true });
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  if (frameId) {
    window.cancelAnimationFrame(frameId);
  }

  if (textOverlayFrameId) {
    window.cancelAnimationFrame(textOverlayFrameId);
    textOverlayFrameId = 0;
  }
  isTextOverlayActive.value = false;

  cancelStageTransition();
  resetWheelGesture();
  resetTouchGesture();
  window.removeEventListener("wheel", handleWheel);
  window.removeEventListener("touchstart", handleTouchStart);
  window.removeEventListener("touchmove", handleTouchMove);
  window.removeEventListener("touchend", resetTouchGesture);
  window.removeEventListener("scroll", queueScrollProgress);
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
.introHeroFlow {
  background: #fff;
}

.introTextOverlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  isolation: isolate;
}

.introTextOverlay__backdrop {
  position: absolute;
  inset: 0;
  background: #ffffff;
}

.introTextOverlay__glow {
  position: absolute;
  inset: -10%;
  background: radial-gradient(
      50% 40% at 50% 50%,
      rgba(180, 205, 245, 0.28) 0%,
      rgba(180, 205, 245, 0) 70%
    ),
    radial-gradient(
      30% 25% at 18% 30%,
      rgba(140, 170, 230, 0.18) 0%,
      rgba(140, 170, 230, 0) 70%
    ),
    radial-gradient(
      28% 24% at 82% 72%,
      rgba(120, 150, 210, 0.14) 0%,
      rgba(120, 150, 210, 0) 70%
    );
  filter: blur(30px);
  pointer-events: none;
}

.introTextOverlay__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(20px, 3.2vw, 48px);
  will-change: transform, opacity, filter;
  transform-origin: 50% 50%;
  backface-visibility: hidden;
}

.introTextOverlay__text {
  max-width: 90vw;
  padding: 0 5vw;
  text-align: center;
  font-family: "Onest", sans-serif;
  font-weight: 400;
  font-size: clamp(30px, 6.4vw, 104px);
  line-height: 1.04;
  letter-spacing: -0.015em;
  color: #191c1f;
  text-shadow: 0 8px 40px rgba(25, 28, 31, 0.08);
}

.introTextOverlay__logo {
  width: clamp(160px, 22vw, 340px);
  height: auto;
  object-fit: contain;
  user-select: none;
  pointer-events: none;
}

@media (max-width: 768px) {
  .introTextOverlay__logo {
    width: clamp(140px, 46vw, 240px);
  }
}

.introTextOverlayFade-enter-active,
.introTextOverlayFade-leave-active {
  transition: opacity 180ms ease;
}

.introTextOverlayFade-enter-from,
.introTextOverlayFade-leave-to {
  opacity: 0;
}

.introHeroTrack {
  position: relative;
}

.introHeroSticky {
  position: sticky;
  top: 0;
  height: 100svh;
  overflow: visible;
}

.introHeroBanner {
  height: 100svh;
  overflow: hidden;
  background-color: transparent;
}

.introHeroScene {
  position: relative;
  width: 100%;
  height: 100%;
}

.introHeroPanel {
  position: absolute;
  inset: 0;
  will-change: opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
}

.introHeroPanel__bg {
  position: absolute;
  inset: 0;
  background-repeat: no-repeat;
  background-color: transparent;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
}

.introHeroPanel__bg::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(25, 28, 31, 0.12) 0%,
    rgba(25, 28, 31, 0.04) 100%
  );
}

.introHeroPanel__shell {
  position: relative;
  z-index: 1;
  min-height: 100%;
  display: flex;
  align-items: center;
}

.introHeroPanel :deep(.mainBannerTxt) {
  min-height: 100svh;
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
}

.introHeroQuoteRight {
  margin-left: auto;
  text-align: right;
}

.introHeroQuoteRight a {
  margin-left: auto;
  width: 78%;
}

.introHeroIdentity {
  max-width: 320px;
}

.introHeroIdentity--right {
  margin-left: auto;
  text-align: right;
}

.introHeroOverlay {
  position: absolute;
  inset: 0;
  z-index: 11;
  overflow: visible;
  pointer-events: none;
}

.introHeroOverlay :deep(#newfInvestorsSection) {
  pointer-events: auto;
}

.introHeroOverlay :deep(#newfInvestorsSection.scroll-show) {
  overflow: visible;
}

.introCouncilShell {
  width: min(100%, 900px);
  margin: 0 auto;
  padding-top: 80px;
}

.introCouncilLeaders {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  align-items: stretch;
}

.introCouncilCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 452px;
  padding: 26px 22px 30px;
  border: 1px solid rgba(25, 28, 31, 0.1);
  border-radius: 24px;
  background: #fff;
  text-align: center;
  box-shadow: 0 10px 30px rgba(25, 28, 31, 0.04);
}

.introCouncilCard__logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  margin-bottom: 18px;
}

.introCouncilCard__logoImage {
  width: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.introCouncilCard__logoImage--sm {
  max-width: 78%;
  max-height: 100%;
}

.introCouncilCard__logoImage--ebrd {
  transform: scale(1.25);
  transform-origin: center;
}

.introCouncilCard__imageWrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 318px;
  margin-bottom: 12px;
  overflow: hidden;
  border-radius: 20px;
  background: #8389a4;
}

.introCouncilCard__image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center top;
  transform: scale(1.15);
  transform-origin: center;
}

.introCouncilCard__copy {
  width: 100%;
  margin-top: auto;
  display: grid;
  grid-template-rows: auto auto;
  row-gap: 8px;
  align-items: start;
}

.introCouncilCard__name {
  color: #191c1f;
  font-size: 20px;
  line-height: 1.1;
  font-weight: 600;
}

.introCouncilCard__role {
  color: #505a63;
  font-size: 14px;
  line-height: 1.35;
}

.introCouncilCard__roleLine {
  display: block;
}

@media (max-width: 1023px) {
  .introHeroTrack {
    height: auto !important;
  }

  .introHeroSticky {
    position: static;
    height: auto;
    overflow: visible;
  }

  .introHeroBanner,
  :deep(#newmainBanner) {
    height: 100dvh;
    min-height: 560px;
    margin-top: 0;
    overflow: hidden;
  }

  .introHeroScene {
    height: 100dvh;
    min-height: 560px;
  }

  /* hide the second (EBRD) hero panel on mobile/tablet */
  .introHeroPanel:not(:first-child) {
    display: none;
  }

  /* push content down so it clears the sticky header */
  .introHeroPanel__shell {
    align-items: flex-start;
    padding-top: 120px;
  }

  /* stronger top→bottom scrim for readability */
  .introHeroPanel__bg::after {
    background: linear-gradient(
      180deg,
      rgba(15, 23, 18, 0.6) 0%,
      rgba(15, 23, 18, 0.28) 34%,
      rgba(15, 23, 18, 0.18) 60%,
      rgba(15, 23, 18, 0.55) 100%
    );
  }

  .introHeroOverlay {
    position: static;
    z-index: 1;
    background: #fff;
  }

  .introHeroOverlay :deep(#newfInvestorsSection) {
    position: static;
    transform: none !important;
    opacity: 1 !important;
  }

  .introHeroPanel :deep(.mainBannerTxt) {
    min-height: 100dvh;
  }

  .introHeroQuoteRight {
    margin-left: 0;
    text-align: left;
  }

  .introHeroQuoteRight a {
    width: 100%;
  }

  .introHeroIdentity {
    max-width: 100%;
  }

  .introHeroIdentity--right {
    text-align: left;
  }

  .introCouncilShell {
    width: 100%;
  }

  .introCouncilLeaders {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 20px;
  }

  .introCouncilCard {
    min-height: 420px;
    padding: 24px 20px 28px;
  }

  .introCouncilCard__logo {
    height: 64px;
  }

  .introCouncilCard__imageWrap {
    height: 292px;
  }
}
</style>
