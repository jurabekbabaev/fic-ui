<template>
  <div
    id="foreignInvestorsMembers"
    ref="rootEl"
    :class="
      embedded ? 'foreign-members-embedded' : 'section foreign-members-reveal'
    "
  >
    <div>
      <div class="mainContainer mb-[60px] pb-[40px]">
        <h2
          class="title-64 pt-[40px] lg:pt-[100px] text-center mb-8 text-[32px] lg:mb-10 lg:text-[64px]"
        >
          {{ t("Показатели") }}
        </h2>
        <div
          ref="statsRef"
          class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
        >
          <div
            v-for="(stat, i) in councilStats"
            :key="stat.label"
            class="flex flex-col gap-3 p-5 lg:p-6 rounded-2xl bg-[#F7F7F7] text-[#191C1F]"
          >
            <div class="text-[32px] lg:text-[40px] font-bold leading-none">
              {{ statDisplayValues[i] }}
            </div>
            <div class="text-base text-[#191C1F]/70 leading-snug font-medium">
              {{ t(stat.label) }}
            </div>
          </div>
        </div>
      </div>
      <div class="mainContainer">
        <div
          v-if="!embedded"
          class="lg:text-center text-left mb-[20px] mt-[100px] flex justify-center"
        >
          <h2 class="title-64 mb-3 lg:text-[64px] text-[32px]">
            {{ t("состав совета") }}
          </h2>
        </div>
        <div
          v-if="!embedded"
          class="lg:text-center text-left mb-[50px] flex justify-center"
        >
          <h2
            class="title-16 lg:text-2xl text-1xl mb-3 lg:w-[698px] w-full text-[#191C1F] uppercase"
          >
            {{ t("Зарубежные участники Совета Иностранных Инвесторов") }}
          </h2>
        </div>
      </div>

      <div
        ref="marqueeContainer"
        :class="[
          'foreign-members-marquee cursor-grab select-none',
          embedded ? 'foreign-members-marquee--embedded' : '',
          embedded ? 'mb-0' : 'mb-[50px]',
        ]"
        @mousedown="onMouseDown"
        @mouseleave="onMouseUp"
        @mouseup="onMouseUp"
        @mousemove="onMouseMove"
      >
        <div ref="track" class="foreign-members-track">
          <ul
            v-for="copyIndex in 2"
            :key="copyIndex"
            :class="[
              'foreign-members-list',
              embedded ? 'foreign-members-list--embedded' : '',
            ]"
            :aria-hidden="copyIndex === 2 ? 'true' : undefined"
          >
            <li
              v-for="logo in logos"
              :key="`${copyIndex}-${logo.src}`"
              class="foreign-members-item"
            >
              <button
                type="button"
                class="foreign-members-button"
                :aria-label="logo.alt"
                @click="goToCompany($event, logo.targetId)"
              >
                <div
                  :class="[
                    'foreign-members-card',
                    embedded ? 'foreign-members-card--embedded' : '',
                  ]"
                >
                  <img
                    :src="logo.src"
                    :alt="logo.alt"
                    draggable="false"
                    :class="[
                      'foreign-members-logo',
                      embedded ? 'foreign-members-logo--embedded' : '',
                    ]"
                  />
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="mainContainer">
        <hr v-if="!embedded" class="text-gray-200 mt-[100px]" />
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  companyLogoFiles,
  getCompanyLogoSrc,
  getCompanyName,
  getCompanyTargetId,
} from "@/constants/becomeMemberCompanies";
import { useDesktopMarquee } from "./useDesktopMarquee";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const councilStats = [
  { target: 43, label: "Членов совета" },
  { target: 85, label: "Активных компаний" },
  { target: 19, label: "Стран" },
  { target: 16, label: "Рабочих групп" },
  { target: 120, label: "Инициатив до IV Пленарной Сесии", suffix: "+" },
];

const statDisplayValues = ref(councilStats.map(() => "0"));
const statsRef = ref(null);
let statsObserver = null;

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function animateStats() {
  const duration = 1800;
  const start = performance.now();
  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = easeOutCubic(progress);
    councilStats.forEach((s, i) => {
      statDisplayValues.value[i] = Math.floor(eased * s.target).toString() + (s.suffix ?? "");
    });
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}
const props = defineProps({
  embedded: {
    type: Boolean,
    default: false,
  },
});
const localePath = useLocalePath();
const rootEl = ref(null);
const {
  marqueeContainer,
  track,
  onMouseDown,
  onMouseMove,
  onMouseUp,
  preventDragClick,
} = useDesktopMarquee();
const logos = companyLogoFiles.map((fileName) => ({
  src: getCompanyLogoSrc(fileName),
  alt: getCompanyName(fileName).replace(/-/g, " "),
  targetId: getCompanyTargetId(fileName),
}));

function goToCompany(event, targetId) {
  if (preventDragClick(event)) return;

  const to = localePath({
    path: "/becomemember",
    query: { target: targetId },
  });
  navigateTo(to);
}

onMounted(() => {
  if (!("IntersectionObserver" in window)) return;

  if (!props.embedded) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          const el = rootEl.value;
          if (el && el.classList) el.classList.add("is-visible");
          revealObserver.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    if (rootEl.value) revealObserver.observe(rootEl.value);
  }

  statsObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        animateStats();
        statsObserver.disconnect();
      }
    },
    { threshold: 0.3 }
  );
  if (statsRef.value) statsObserver.observe(statsRef.value);
});

onBeforeUnmount(() => {
  statsObserver?.disconnect();
});
</script>

<style scoped>
.foreign-members-embedded {
  padding: 0;
}

.foreign-members-reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 360ms ease, transform 360ms ease;
}

.foreign-members-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.foreign-members-marquee {
  overflow: hidden;
}

.foreign-members-marquee--embedded {
  width: 100%;
  margin-left: 0;
  margin-right: 0;
}

.foreign-members-track {
  display: flex;
  width: max-content;
  will-change: transform;
}

.foreign-members-list {
  display: flex;
  flex-shrink: 0;
  gap: 24px;
  min-width: max-content;
  margin: 0;
  padding: 0 24px 0 0;
}

.foreign-members-list--embedded {
  gap: 14px;
  padding: 0 14px 0 0;
}

.foreign-members-item {
  list-style: none;
}

.foreign-members-button {
  display: block;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
}

.foreign-members-card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(150px, 18vw, 240px);
  aspect-ratio: 16 / 9;
  padding: clamp(14px, 1.8vw, 20px);
  border: 1px solid rgba(25, 28, 31, 0.08);
  border-radius: 16px;
  background: #fff;
}

.foreign-members-card--embedded {
  width: clamp(156px, 14vw, 208px);
  padding: 16px;
  border-radius: 16px;
}

.foreign-members-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}

.foreign-members-logo--embedded {
  transform: scale(0.96);
}

@media (max-width: 768px) {
  .foreign-members-list {
    gap: 16px;
    padding-right: 16px;
  }

  .foreign-members-card {
    width: clamp(132px, 42vw, 180px);
    border-radius: 14px;
  }

  .foreign-members-marquee--embedded {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }

  .foreign-members-list--embedded {
    gap: 12px;
    padding-right: 12px;
  }

  .foreign-members-card--embedded {
    width: clamp(124px, 34vw, 168px);
    padding: 14px;
    border-radius: 14px;
  }
}
</style>
