<template>
  <div class="introHeroFlow">
    <!-- Transition overlay shown while moving from the EBRD hero to the council -->
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

    <!-- Pinned hero viewport. On desktop the page is held here while the
         wheel/touch steps between stages; the hero images crossfade and the
         council reveals via CSS transitions. On mobile (<=1023px) everything
         stacks and scrolls natively (see the media query in <style>). -->
    <section ref="introRef" class="introHero">
      <!-- Crossfading hero slides -->
      <div class="introHeroScene">
        <article
          v-for="(hero, index) in heroSlides"
          :key="hero.id"
          class="introHeroPanel"
          :style="getHeroPanelStyle(index)"
          :aria-hidden="index !== activeHeroIndex"
        >
          <div
            class="introHeroPanel__bg"
            :style="getHeroBackgroundStyle(index)"
          />

          <div class="mainContainer introHeroPanel__shell">
            <div
              class="mainBannerTxt flex flex-col justify-start pt-[100px] px-5 lg:flex-row lg:justify-start lg:items-center lg:pt-0 lg:px-0 leading-normal w-full lg:pl-[8%]"
            >
              <!-- President of Uzbekistan: quote aligned left -->
              <div
                v-if="hero.layout === 'quote-left'"
                class="newMBCol1 lg:mt-[80px]"
              >
                <a
                  v-if="hero.link"
                  :href="hero.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  @click.stop
                  class="block relative z-20 lg:w-[78%] text-white transition-opacity hover:opacity-85 cursor-pointer"
                >
                  <h1
                    class="font-black lg:text-[28px] text-[20px] uppercase mb-3 leading-[1.25]"
                  >
                    {{ hero.quote }}
                  </h1>
                </a>

                <div class="w-10 h-[2px] bg-white/50 mb-4" />

                <div class="introHeroIdentity lg:max-w-none">
                  <h2
                    class="lg:text-2xl text-[17px] font-bold mb-1 lg:whitespace-nowrap text-white"
                  >
                    {{ hero.name }}
                  </h2>
                  <h3 class="lg:text-base text-[13px] font-normal text-white/70">
                    {{ hero.position }}
                  </h3>
                </div>
              </div>

              <!-- EBRD President: quote aligned right -->
              <div v-else class="newMBCol1 introHeroQuoteRight">
                <h1
                  class="block relative z-20 lg:-top-[98px] font-black lg:text-[44px] text-[20px] uppercase mb-3 leading-[1.25] text-white"
                >
                  {{ hero.quote }}
                </h1>

                <div class="w-10 h-[2px] bg-white/50 mb-4 lg:ml-auto" />

                <div class="introHeroIdentity introHeroIdentity--right">
                  <h2 class="lg:text-2xl text-[17px] font-bold mb-1 text-white">
                    {{ hero.name }}
                  </h2>
                  <h3 class="lg:text-base text-[13px] font-normal text-white/70">
                    {{ hero.position }}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- Council leadership, revealed at the final stage -->
      <div class="introHeroOverlay" :style="councilOverlayStyle">
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
    </section>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import Management1 from "@/assets/images/management/image11.png";
import Management2 from "@/assets/images/management/image12.png";
import EBank from "@/assets/images/brands/e-bank.png";
import EbrdLogo from "@/assets/images/brands/ebrd.png";

const desktopImg = "/images/60f66bb43e415a780b96ef1fc99600ee027b94c4.png";
const mobileImg = "/images/banner-img-mobile.png";
const secondHeroImg = "/images/l2.png";
const ficLogo = "/images/pr.png";
const presidentLink = "https://president.uz/en/lists/view/7194";

/* ── Tuning ─────────────────────────────────────────────────────────────── */
const MOBILE_BREAKPOINT = 1023; // at or below this width: native scroll, no jacking
const STAGE_MIN = 0;
const STAGE_MAX = 2; // 0: president hero, 1: EBRD hero, 2: council reveal
const HERO_SWITCH_DURATION = 900; // hero ↔ hero crossfade (ms, matches CSS)
const COUNCIL_REVEAL_DURATION = 850; // hero ↔ council reveal (ms, matches CSS)
const TEXT_OVERLAY_DURATION = 1300; // intro text overlay animation (ms)
const WHEEL_GESTURE_IDLE_MS = 160; // collapse one wheel "fling" into one step
const TOUCH_TRIGGER_THRESHOLD = 12; // px a finger must travel to switch stage
const INTRO_COVER_TOLERANCE = 4; // px slack when checking the hero fills the viewport

/* ── State ──────────────────────────────────────────────────────────────── */
const { t } = useI18n();
const introRef = ref(null);
const isMobile = ref(false);
const currentStageIndex = ref(STAGE_MIN);
const isStageLocked = ref(false); // a transition is currently playing
const isWheelGestureActive = ref(false); // a wheel gesture is in progress

const touchStartY = ref(null);
const isTouchGestureHandled = ref(false);

const isTextOverlayActive = ref(false);
const textOverlayProgress = ref(0);

let stageUnlockTimer = 0;
let wheelIdleTimer = 0;
let textOverlayFrameId = 0;

/* ── Content ────────────────────────────────────────────────────────────── */
const heroSlides = computed(() => [
  {
    id: "president",
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
    id: "ebrd",
    quote: t(
      "Мы готовы внести свой вклад везде, где наш опыт и инвестиции могут принести дополнительную ценность."
    ),
    name: t("Одил Рено-Бассо"),
    position: t("Президент Европейского банка реконструкции и развития"),
    image: secondHeroImg,
    imagePosition: "center center",
    imageSize: "cover",
    layout: "identity-left",
    link: null,
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

/* ── Derived visuals ────────────────────────────────────────────────────── */
// Stage 0 shows the president, stages 1+ show the EBRD president. CSS supplies
// the crossfade/reveal animation; here we only flip the target values.
const activeHeroIndex = computed(() =>
  currentStageIndex.value === 0 ? 0 : 1
);
const isCouncilRevealed = computed(() => currentStageIndex.value === STAGE_MAX);

// Inline styles drive the desktop crossfade/reveal; the mobile media query
// overrides them with !important so the stacked layout is correct even before JS.
const getHeroPanelStyle = (index) => {
  const isActive = index === activeHeroIndex.value;
  return {
    opacity: isActive ? 1 : 0,
    pointerEvents: isActive ? "auto" : "none",
    zIndex: isActive ? 2 : 1,
  };
};

const getHeroBackgroundStyle = (index) => {
  const hero = heroSlides.value[index];
  return {
    backgroundImage: `url('${hero.image}')`,
    backgroundPosition: hero.imagePosition,
    backgroundSize: hero.imageSize,
  };
};

const councilOverlayStyle = computed(() => ({
  opacity: isCouncilRevealed.value ? 1 : 0,
  transform: isCouncilRevealed.value ? "translateY(0)" : "translateY(24px)",
  pointerEvents: isCouncilRevealed.value ? "auto" : "none",
}));

/* ── Intro text overlay animation ───────────────────────────────────────── */
const easeOutInQuart = (value) => {
  if (value < 0.5) {
    const u = 2 * value;
    return 0.5 * (1 - Math.pow(1 - u, 4));
  }
  const u = 2 * value - 1;
  return 0.5 + 0.5 * Math.pow(u, 4);
};

const textOverlayStyle = computed(() => {
  const eased = easeOutInQuart(textOverlayProgress.value);
  const y = (0.5 - eased) * 110;
  const shape = Math.sin(eased * Math.PI);
  const scale = 0.45 + 0.55 * shape;
  const opacity = Math.min(1, shape * 1.6);
  const blur = (1 - shape) * 5;

  return {
    transform: `translate3d(0, ${y.toFixed(3)}vh, 0) scale(${scale.toFixed(3)})`,
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
      const progress = Math.min((now - startTime) / TEXT_OVERLAY_DURATION, 1);
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

/* ── Stage navigation ───────────────────────────────────────────────────── */
function scheduleStageUnlock(duration) {
  if (stageUnlockTimer) window.clearTimeout(stageUnlockTimer);
  stageUnlockTimer = window.setTimeout(() => {
    isStageLocked.value = false;
    stageUnlockTimer = 0;
  }, duration);
}

function goToStage(targetStage) {
  const fromStage = currentStageIndex.value;
  if (
    targetStage === fromStage ||
    targetStage < STAGE_MIN ||
    targetStage > STAGE_MAX
  ) {
    return;
  }

  isStageLocked.value = true;

  // Moving from the EBRD hero into the council plays the text overlay first.
  if (fromStage === 1 && targetStage === 2) {
    playTextOverlay().then(() => {
      currentStageIndex.value = 2;
      scheduleStageUnlock(COUNCIL_REVEAL_DURATION);
    });
    return;
  }

  currentStageIndex.value = targetStage;
  const touchesCouncil = fromStage === STAGE_MAX || targetStage === STAGE_MAX;
  scheduleStageUnlock(
    touchesCouncil ? COUNCIL_REVEAL_DURATION : HERO_SWITCH_DURATION
  );
}

/* ── Gesture handling (desktop only) ────────────────────────────────────── */
// The intro is "engaged" only while the hero fully covers the viewport. The
// page is held here (gestures are prevented), so once engaged it stays engaged;
// at the first/last stage the boundary scroll passes through to the rest of the
// page. This needs no sticky positioning, so it is robust against the
// `overflow-x: hidden` on <html>/<body> that would otherwise break sticky.
function isIntroEngaged() {
  if (typeof window === "undefined" || !introRef.value) return false;
  const rect = introRef.value.getBoundingClientRect();
  return (
    rect.top <= INTRO_COVER_TOLERANCE &&
    rect.bottom >= window.innerHeight - INTRO_COVER_TOLERANCE
  );
}

function queueWheelGestureReset() {
  if (wheelIdleTimer) window.clearTimeout(wheelIdleTimer);
  wheelIdleTimer = window.setTimeout(() => {
    isWheelGestureActive.value = false;
    wheelIdleTimer = 0;
  }, WHEEL_GESTURE_IDLE_MS);
}

function handleWheel(event) {
  if (isMobile.value || !isIntroEngaged()) return;

  // While locked or mid-gesture, swallow scrolling so the page stays put.
  if (isStageLocked.value || isWheelGestureActive.value) {
    event.preventDefault();
    queueWheelGestureReset();
    return;
  }

  const direction = Math.sign(event.deltaY);
  if (!direction) return;

  const targetStage = currentStageIndex.value + direction;
  // At a boundary (above the first stage / below the last) let the page scroll.
  if (targetStage < STAGE_MIN || targetStage > STAGE_MAX) return;

  event.preventDefault();
  isWheelGestureActive.value = true;
  queueWheelGestureReset();
  goToStage(targetStage);
}

function handleTouchStart(event) {
  if (isMobile.value) return;
  touchStartY.value = event.touches[0]?.clientY ?? null;
  isTouchGestureHandled.value = false;
}

function handleTouchMove(event) {
  if (isMobile.value || !isIntroEngaged()) return;

  if (isStageLocked.value) {
    event.preventDefault();
    return;
  }

  const currentY = event.touches[0]?.clientY;
  if (currentY == null || touchStartY.value == null) return;

  const deltaY = touchStartY.value - currentY; // swipe up => positive
  if (Math.abs(deltaY) < TOUCH_TRIGGER_THRESHOLD) return;

  if (isTouchGestureHandled.value) {
    event.preventDefault();
    return;
  }

  const targetStage = currentStageIndex.value + Math.sign(deltaY);
  if (targetStage < STAGE_MIN || targetStage > STAGE_MAX) return;

  event.preventDefault();
  isTouchGestureHandled.value = true;
  touchStartY.value = currentY;
  goToStage(targetStage);
}

function resetTouchGesture() {
  touchStartY.value = null;
  isTouchGestureHandled.value = false;
}

/* ── Viewport + lifecycle ───────────────────────────────────────────────── */
function updateViewportMode() {
  if (typeof window === "undefined") return;
  isMobile.value = window.innerWidth <= MOBILE_BREAKPOINT;
}

function handleResize() {
  updateViewportMode();
  if (stageUnlockTimer) window.clearTimeout(stageUnlockTimer);
  if (wheelIdleTimer) window.clearTimeout(wheelIdleTimer);
  isStageLocked.value = false;
  isWheelGestureActive.value = false;
  resetTouchGesture();
}

onMounted(() => {
  updateViewportMode();

  window.addEventListener("wheel", handleWheel, { passive: false });
  window.addEventListener("touchstart", handleTouchStart, { passive: true });
  window.addEventListener("touchmove", handleTouchMove, { passive: false });
  window.addEventListener("touchend", resetTouchGesture, { passive: true });
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  if (textOverlayFrameId) window.cancelAnimationFrame(textOverlayFrameId);
  if (stageUnlockTimer) window.clearTimeout(stageUnlockTimer);
  if (wheelIdleTimer) window.clearTimeout(wheelIdleTimer);
  isTextOverlayActive.value = false;

  window.removeEventListener("wheel", handleWheel);
  window.removeEventListener("touchstart", handleTouchStart);
  window.removeEventListener("touchmove", handleTouchMove);
  window.removeEventListener("touchend", resetTouchGesture);
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
.introHeroFlow {
  background: #fff;
}

/* ── Intro text overlay ───────────────────────────────────────────────── */
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

/* ── Pinned hero viewport ─────────────────────────────────────────────── */
/* -76px tucks the hero up behind the (transparent) home header for a
   full-bleed look; keep in sync with #header's height. */
.introHero {
  position: relative;
  height: 100svh;
  margin-top: -76px;
  overflow: hidden;
  background: #fff;
}

.introHeroScene {
  position: absolute;
  inset: 0;
}

.introHeroPanel {
  position: absolute;
  inset: 0;
  transition: opacity 900ms ease;
  will-change: opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
}

.introHeroPanel__bg {
  position: absolute;
  inset: 0;
  background-repeat: no-repeat;
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

.introHeroQuoteRight h1 {
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

/* ── Council reveal overlay ───────────────────────────────────────────── */
.introHeroOverlay {
  position: absolute;
  inset: 0;
  z-index: 11;
  display: flex;
  overflow-y: auto;
  background: #fff;
  transition: opacity 850ms ease, transform 850ms ease;
  will-change: opacity, transform;
}

/* margin:auto keeps the block centred while still allowing scroll on short
   viewports (flex centring would otherwise clip the top). */
.introCouncilShell {
  width: min(100%, 900px);
  margin: auto;
  padding: 48px 16px;
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

/* ── Mobile + tablet: scroll-jacking off, plain stacked sections ───────── */
@media (max-width: 1023px) {
  .introHero {
    height: auto;
    margin-top: 0;
    overflow: visible;
  }

  .introHeroScene {
    position: static;
    height: auto;
  }

  .introHeroPanel {
    position: relative !important;
    inset: auto;
    height: 100dvh;
    min-height: 560px;
    opacity: 1 !important;
    pointer-events: auto !important;
    transition: none;
  }

  .introHeroPanel__bg::after {
    background: linear-gradient(
      180deg,
      rgba(15, 23, 18, 0.6) 0%,
      rgba(15, 23, 18, 0.28) 34%,
      rgba(15, 23, 18, 0.18) 60%,
      rgba(15, 23, 18, 0.55) 100%
    );
  }

  .introHeroPanel :deep(.mainBannerTxt) {
    min-height: 100dvh;
  }

  .introHeroQuoteRight {
    margin-left: 0;
    text-align: left;
  }

  .introHeroQuoteRight h1 {
    width: 100%;
    margin-left: 0;
  }

  .introHeroIdentity {
    max-width: 100%;
  }

  .introHeroIdentity--right {
    margin-left: 0;
    text-align: left;
  }

  .introHeroOverlay {
    position: static !important;
    opacity: 1 !important;
    transform: none !important;
    pointer-events: auto;
    overflow: visible;
    transition: none;
  }

  .introCouncilShell {
    width: 100%;
    margin: 0 auto;
    padding: 60px 16px 40px;
  }

  .introCouncilLeaders {
    gap: 16px;
  }

  .introCouncilCard {
    min-height: 380px;
    padding: 24px 20px 28px;
  }

  .introCouncilCard__logo {
    height: 64px;
  }

  .introCouncilCard__imageWrap {
    height: 260px;
  }
}

@media (max-width: 640px) {
  .introCouncilLeaders {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 16px;
  }

  .introCouncilCard {
    min-height: 340px;
  }
}
</style>
