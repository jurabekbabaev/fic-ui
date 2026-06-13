<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
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
</script>
<template>
  <div>
    <client-only>
      <div class="container">
        <h1
          class="lg:text-[64px] text-[32px] uppercase font-black lg:text-center sm:text-left mt-[100px] mb-14"
        >
          {{ t("История СИИ") }}
        </h1>
        <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-20">
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
        <LocaleInvestors class="mb-14" />
        <div
          class="flex flex-col gap-3 border-[#191C1F14] pt-4 sm:flex-row sm:flex-wrap"
        >
          <a
            href="https://lex.uz/docs/4593913"
            target="_blank"
            rel="noreferrer"
            class="btn btn-primary"
          >
            {{ t("Подробно") }}
          </a>
        </div>
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
</style>
