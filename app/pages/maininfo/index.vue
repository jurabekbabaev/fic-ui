<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import PageHero from "~/components/shared/PageHero.vue";
const { t } = useI18n();
import Main from "@/assets/images/main-info.png";

const chronologyRows = [
  {
    period: "Ноябрь 2019",
    event:
      "Учреждение Совета (ПП-4519). Первая промежуточная сессия — 20 ноября",
  },
  {
    period: "Ноябрь 2022",
    event: "I Пленарная сессия — 16 ноября",
  },
  {
    period: "Май 2024",
    event:
      "II Пленарная сессия — 3 мая, в рамках III ТМИФ. ПП-179 — создание четырёх рабочих групп",
  },
  {
    period: "Июнь 2025",
    event:
      "III Пленарная сессия — 11 июня. ПП-226 — расширение состава рабочих групп",
  },
  {
    period: "Ноябрь 2025",
    event:
      "Регистрация Ассоциации — 4 ноября. Промежуточная сессия — 19 ноября",
  },
  {
    period: "Июнь 2026",
    event: "IV Пленарная сессия — 18 июня, в рамках V ТМИФ",
  },
];

const active = ref(2);
const count = chronologyRows.length;

const select = (i) => {
  active.value = i;
};
const prev = () => {
  active.value = (active.value - 1 + count) % count;
};
const next = () => {
  active.value = (active.value + 1) % count;
};

const cardStyle = (i) => {
  const offset = i - active.value;
  const abs = Math.abs(offset);
  const hidden = abs > 2;
  const scale = abs === 0 ? 1 : Math.max(0.78, 1 - abs * 0.1);
  return {
    transform: `translateX(${offset * 72}%) translateZ(${-abs * 140}px) rotateY(${offset * -5}deg) scale(${scale})`,
    zIndex: String(100 - abs),
    opacity: hidden ? "0" : "1",
    pointerEvents: hidden ? "none" : "auto",
  };
};

const taskItems = [
  {
    key: "консультирование Правительства",
    iconPaths: ["M3 9l9-5 9 5", "M5 10v8M9 10v8M15 10v8M19 10v8", "M3 20h18"],
  },
  {
    key: "улучшение инвестклимата",
    iconPaths: ["M4 4v16h16", "M7 14l3-3 3 2 5-6", "M17 7h3v3"],
  },
  {
    key: "диалог с бизнесом",
    iconPaths: [
      "M5 5h13a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H10l-4 3v-3H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z",
      "M8 9h7M8 12h4",
    ],
  },
  {
    key: "выявление барьеров",
    iconPaths: ["M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14z", "M20 20l-4.2-4.2"],
  },
  {
    key: "разработка рекомендаций",
    iconPaths: [
      "M13 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8z",
      "M13 3v5h5",
      "M9 14l2 2 4-4",
    ],
  },
  {
    key: "развитие экспорта",
    iconPaths: [
      "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z",
      "M3.5 9h17M3.5 15h17",
      "M12 3c2.6 2.6 2.6 15.4 0 18M12 3c-2.6 2.6-2.6 15.4 0 18",
    ],
  },
  {
    key: "стандарты качества",
    iconPaths: ["M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z", "M9 12l2 2 4-4"],
  },
  {
    key: "правовые реформы",
    iconPaths: [
      "M12 4v15",
      "M6 19h12",
      "M5 8h14",
      "M5 8l-2.5 5a2.5 2.5 0 0 0 5 0z",
      "M19 8l-2.5 5a2.5 2.5 0 0 0 5 0z",
    ],
  },
  {
    key: "международный имидж",
    iconPaths: [
      "M12 4l2.3 5 5.2.4-3.9 3.4 1.2 5L12 18.8 7.2 21.2l1.2-5L4.5 12.8 9.7 12.4z",
    ],
  },
];

const orbitStyle = (i) => {
  const angle = (i / taskItems.length) * Math.PI * 2 - Math.PI / 2;
  const radius = 39;
  return {
    left: `${50 + radius * Math.cos(angle)}%`,
    top: `${50 + radius * Math.sin(angle)}%`,
    animationDelay: `${0.15 + i * 0.07}s`,
  };
};

const tasksRef = ref(null);
const tasksVisible = ref(false);
let tasksObserver = null;

// The section lives inside <client-only>, so the template ref only resolves
// after the slot renders on the client. Watch it and attach the observer the
// moment the element exists, instead of relying on the page's onMounted timing.
watch(
  tasksRef,
  (el) => {
    if (!el || tasksVisible.value) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      tasksVisible.value = true;
      return;
    }

    tasksObserver?.disconnect();
    tasksObserver = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          tasksVisible.value = true;
          tasksObserver?.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    tasksObserver.observe(el);
  },
  { immediate: true },
);

onBeforeUnmount(() => {
  tasksObserver?.disconnect();
});
</script>
<template>
  <div>
    <client-only>
      <PageHero title="История СИИ" />
      <div class="container">
        <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-10 lg:gap-20 items-center">
          <div>
            <p class="text-base text-[#505A63] font-normal pb-5">
              {{
                t(
                  "Совет иностранных инвесторов при Президенте Республики Узбекистан — институциональная площадка для прямого диалога между Правительством Узбекистана и инвесторами, осуществляющими деятельность в стране. Учреждён Постановлением Президента № ПП-4519 от 13 ноября 2019 года.",
                )
              }}
            </p>
            <p class="text-base text-[#505A63] font-normal pb-5">
              {{
                t(
                  "Деятельность Совета направлена на выявление ключевых препятствий для привлечения инвестиций, разработку совместно с государственными органами решений по их устранению и обеспечение благоприятного инвестиционного климата. Председатель Совета — Президент Республики Узбекистан; сопредседатель — Президент ЕБРР.",
                )
              }}
            </p>
            <a
              href="https://lex.uz/docs/4593913"
              target="_blank"
              rel="noreferrer"
              class="btn btn-primary mt-2"
            >
              {{ t("Подробно") }}
            </a>
          </div>
          <div>
            <img :src="Main" alt="" />
          </div>
        </div>

        <section class="historyFlow">
          <div class="historyFlow__head">
            <span class="historyFlow__kicker">{{ t("Хронология") }}</span>
            <p class="historyFlow__sub">
              {{ t("Ключевые этапы развития Совета") }}
            </p>
          </div>

          <div class="historyFlow__pills">
            <button
              v-for="(row, index) in chronologyRows"
              :key="row.period"
              type="button"
              class="historyFlow__pill"
              :class="{ 'is-active': index === active }"
              @click="select(index)"
            >
              {{ t(row.period) }}
            </button>
          </div>

          <div class="historyFlow__stage">
            <article
              v-for="(row, index) in chronologyRows"
              :key="row.period"
              class="historyFlow__card"
              :class="{ 'is-active': index === active }"
              :style="cardStyle(index)"
              @click="select(index)"
            >
              <span class="historyFlow__num">{{
                String(index + 1).padStart(2, "0")
              }}</span>
              <div class="historyFlow__cardBody">
                <span class="historyFlow__period">{{ t(row.period) }}</span>
                <p class="historyFlow__event">{{ t(row.event) }}</p>
              </div>
            </article>
          </div>

          <div class="historyFlow__nav">
            <button
              type="button"
              class="historyFlow__navBtn"
              @click="prev"
              aria-label="prev"
            >
              <i class="icon-move-right" style="transform: rotate(180deg)"></i>
            </button>
            <button
              type="button"
              class="historyFlow__navBtn"
              @click="next"
              aria-label="next"
            >
              <i class="icon-move-right"></i>
            </button>
          </div>
        </section>

        <section
          ref="tasksRef"
          class="councilTasks"
          :class="{ 'is-visible': tasksVisible }"
        >
          <div class="councilTasks__head">
            <h2 class="councilTasks__title">{{ t("Девять задач Совета") }}</h2>
            <p class="councilTasks__sub">
              {{ t("Ключевые направления деятельности Совета") }}
            </p>
          </div>

          <div class="councilTasks__panel">
            <!-- desktop: orbital diagram -->
            <div class="councilTasks__orbit">
              <span class="councilTasks__ring councilTasks__ring--b" aria-hidden="true"></span>

              <div class="councilTasks__hub">
                <span class="councilTasks__hubNum">9</span>
                <span class="councilTasks__hubLabel">{{ t("задач") }}</span>
              </div>

              <div
                v-for="(item, i) in taskItems"
                :key="item.key"
                class="councilTasks__node"
                :style="orbitStyle(i)"
              >
                <span class="councilTasks__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path
                      v-for="(d, di) in item.iconPaths"
                      :key="di"
                      :d="d"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span class="councilTasks__label">{{ t(item.key) }}</span>
              </div>
            </div>

            <!-- mobile: grid -->
            <div class="councilTasks__grid">
              <div
                v-for="item in taskItems"
                :key="`g-${item.key}`"
                class="councilTasks__cell"
              >
                <span class="councilTasks__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path
                      v-for="(d, di) in item.iconPaths"
                      :key="di"
                      :d="d"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span class="councilTasks__label">{{ t(item.key) }}</span>
              </div>
            </div>
          </div>
        </section>

        <LocaleInvestors class="mb-14" />
      </div>
    </client-only>
  </div>
</template>

<style scoped>
.historyFlow {
  margin-top: 80px;
  text-align: center;
}

.historyFlow__head {
  margin-bottom: 28px;
}

.historyFlow__kicker {
  display: inline-block;
  color: #191c1f;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.historyFlow__sub {
  margin: 10px 0 0;
  color: #505a63;
  font-size: 16px;
}

/* ---- filter pills ---- */
.historyFlow__pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 48px;
}

.historyFlow__pill {
  padding: 10px 20px;
  border: 1px solid rgba(25, 28, 31, 0.16);
  border-radius: 999px;
  background: transparent;
  color: #191c1f;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;
  transition:
    background-color 0.25s ease,
    color 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease;
}

.historyFlow__pill:hover {
  border-color: rgba(25, 28, 31, 0.4);
}

.historyFlow__pill.is-active {
  background: #191c1f;
  border-color: #191c1f;
  color: #fff;
}

/* ---- coverflow stage ---- */
.historyFlow__stage {
  position: relative;
  height: 380px;
  margin-bottom: 36px;
  perspective: 1800px;
  transform-style: preserve-3d;
}

.historyFlow__card {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 320px;
  height: 360px;
  margin: -180px 0 0 -160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  padding: 36px 30px;
  text-align: left;
  border-radius: 24px;
  background: #fff;
  border: 1px solid rgba(25, 28, 31, 0.08);
  color: #191c1f;
  box-shadow: 0 30px 70px -34px rgba(25, 28, 31, 0.35);
  cursor: pointer;
  transform-style: preserve-3d;
  transition:
    transform 0.55s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.55s ease,
    box-shadow 0.55s ease,
    filter 0.55s ease;
}

.historyFlow__card.is-active {
  border-color: rgba(25, 28, 31, 0.12);
  box-shadow: 0 45px 90px -30px rgba(25, 28, 31, 0.4);
  cursor: default;
}

/* dim and fade the side cards so the center one stands out */
.historyFlow__card:not(.is-active) {
  filter: brightness(0.96) saturate(0.95);
}

.historyFlow__num {
  font-size: 42px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.03em;
  color: rgba(25, 28, 31, 0.14);
  transition: color 0.4s ease;
}

.historyFlow__card.is-active .historyFlow__num {
  color: #191c1f;
}

.historyFlow__cardBody {
  display: flex;
  flex-direction: column;
}

.historyFlow__period {
  margin-bottom: 12px;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.2;
  color: #191c1f;
}

.historyFlow__event {
  margin: 0;
  color: #505a63;
  font-size: 15px;
  line-height: 1.55;
}

/* ---- nav buttons ---- */
.historyFlow__nav {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.historyFlow__navBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 1px solid rgba(25, 28, 31, 0.2);
  background: #fff;
  color: #191c1f;
  font-size: 18px;
  cursor: pointer;
  transition:
    background-color 0.25s ease,
    color 0.25s ease,
    border-color 0.25s ease,
    transform 0.2s ease;
}

.historyFlow__navBtn:hover {
  background: #191c1f;
  border-color: #191c1f;
  color: #fff;
}

.historyFlow__navBtn:active {
  transform: scale(0.94);
}

.historyFlow__navBtn i {
  display: inline-flex;
}

@media (max-width: 768px) {
  .historyFlow {
    margin-top: 48px;
  }

  .historyFlow__stage {
    height: 340px;
  }

  .historyFlow__card {
    width: 260px;
    height: 320px;
    margin: -160px 0 0 -130px;
    padding: 24px;
  }
}

/* ===== Council tasks (9) ===== */
.councilTasks {
  margin-top: 96px;
  text-align: center;
}

.councilTasks__head {
  margin-bottom: 36px;
}

.councilTasks__title {
  font-size: clamp(26px, 4vw, 44px);
  line-height: 1.05;
  font-weight: 900;
  text-transform: uppercase;
  color: #191c1f;
}

.councilTasks__sub {
  margin: 12px auto 0;
  max-width: 560px;
  color: #505a63;
  font-size: 16px;
  line-height: 1.5;
}

.councilTasks__panel {
  position: relative;
  background: transparent;
}

/* ---- orbital (desktop) ---- */
.councilTasks__orbit {
  display: none;
  position: relative;
  width: 600px;
  height: 600px;
  max-width: 100%;
  margin: 0 auto;
}

.councilTasks__ring {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  border: 1px dashed rgba(25, 28, 31, 0.14);
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.councilTasks__ring--b {
  /* inner decorative ring (does not pass through the nodes) */
  width: 52%;
  height: 52%;
  border-color: rgba(25, 28, 31, 0.1);
  animation: councilSpin 90s linear infinite reverse;
}

@keyframes councilSpin {
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.councilTasks__hub {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 204px;
  height: 204px;
  border-radius: 50%;
  border: 1px solid rgba(25, 28, 31, 0.06);
  background:
    radial-gradient(100% 100% at 50% 22%, #ffffff 0%, #eef1f4 100%);
  box-shadow:
    0 0 0 14px rgba(25, 28, 31, 0.02),
    0 0 0 30px rgba(25, 28, 31, 0.012),
    0 24px 54px rgba(25, 28, 31, 0.12);
  transform: translate(-50%, -50%);
}

/* soft halo + pulsing ring around the hub */
.councilTasks__hub::before,
.councilTasks__hub::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.councilTasks__hub::before {
  inset: -20px;
  border: 1px solid rgba(25, 28, 31, 0.08);
}

.councilTasks__hub::after {
  inset: -20px;
  border: 1px solid rgba(25, 28, 31, 0.12);
  animation: councilPulse 3.4s ease-in-out infinite;
}

@keyframes councilPulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.12);
    opacity: 0;
  }
}

.councilTasks__hubNum {
  font-size: 64px;
  line-height: 1;
  font-weight: 900;
  letter-spacing: -0.02em;
  color: #191c1f;
}

.councilTasks__hubLabel {
  margin-top: 6px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #909aa6;
}

.councilTasks__node {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 128px;
  transform: translate(-50%, -50%);
  opacity: 0;
}

.councilTasks.is-visible .councilTasks__node {
  animation: councilNodeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

@keyframes councilNodeIn {
  from {
    opacity: 0;
    transform: translate(-50%, -40%) scale(0.85);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

.councilTasks__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 1px solid rgba(25, 28, 31, 0.1);
  background: #ffffff;
  color: #191c1f;
  box-shadow: 0 8px 22px rgba(25, 28, 31, 0.07);
  transition:
    background-color 0.28s ease,
    border-color 0.28s ease,
    color 0.28s ease,
    transform 0.28s ease;
}

.councilTasks__icon svg {
  width: 32px;
  height: 32px;
}

.councilTasks__node:hover .councilTasks__icon {
  background: #191c1f;
  border-color: #191c1f;
  color: #ffffff;
  transform: translateY(-3px);
}

.councilTasks__label {
  margin-top: 12px;
  font-size: 13.5px;
  line-height: 1.3;
  font-weight: 500;
  color: #191c1f;
}

/* ---- grid (mobile / tablet) ---- */
.councilTasks__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  padding: 24px;
}

.councilTasks__cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 22px 14px;
  border: 1px solid rgba(25, 28, 31, 0.08);
  border-radius: 18px;
  background: #ffffff;
}

.councilTasks__cell .councilTasks__label {
  margin-top: 0;
  text-align: center;
}

.councilTasks__orbit {
  padding: 12px;
}

@media (min-width: 1024px) {
  .councilTasks__orbit {
    display: block;
    padding: 0;
  }

  .councilTasks__grid {
    display: none;
  }
}

@media (max-width: 420px) {
  .councilTasks__grid {
    grid-template-columns: 1fr;
  }
}
</style>
