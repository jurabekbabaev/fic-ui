<template>
  <div>
    <client-only>
      <div class="container">
        <h1
          class="lg:text-[64px] text-[32px] uppercase font-black lg:text-center sm:text-left mt-[100px]"
        >
          {{ t("календарный план") }}
        </h1>

        <section class="evFlow">
          <!-- coverflow stage -->
          <div class="evFlow__stage">
            <article
              v-for="(item, index) in data"
              :key="item.id"
              class="evFlow__card"
              :class="{ 'is-active': index === active }"
              :style="cardStyle(index)"
              @click="select(index)"
            >
              <div class="evFlow__cardBody">
                <span class="evFlow__accent" aria-hidden="true"></span>
                <span class="evFlow__date">{{ item.date }}</span>
                <p class="evFlow__event">{{ item.content }}</p>
              </div>
            </article>
          </div>

          <!-- nav buttons -->
          <div class="evFlow__nav">
            <button
              type="button"
              class="evFlow__navBtn"
              @click="prev"
              aria-label="prev"
            >
              <i class="icon-move-right" style="transform: rotate(180deg)"></i>
            </button>
            <button
              type="button"
              class="evFlow__navBtn"
              @click="next"
              aria-label="next"
            >
              <i class="icon-move-right"></i>
            </button>
          </div>
        </section>

        <div class="text-center mt-[40px]">
          <WLocaleLink to="/calendarplan" class="btn btn-primary">
            {{ t("Все мероприятия") }}
          </WLocaleLink>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import WLocaleLink from "~/components/shared/WLocaleLink.vue";
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

const active = ref(2);

const select = (i: number) => {
  active.value = i;
};
const prev = () => {
  active.value = (active.value - 1 + data.value.length) % data.value.length;
};
const next = () => {
  active.value = (active.value + 1) % data.value.length;
};

const cardStyle = (i: number) => {
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

<style scoped>
.evFlow {
  margin-top: 40px;
  text-align: center;
}

/* ---- coverflow stage ---- */
.evFlow__stage {
  position: relative;
  height: 380px;
  margin-bottom: 36px;
  perspective: 1800px;
  transform-style: preserve-3d;
}

.evFlow__card {
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

.evFlow__card.is-active {
  border-color: rgba(25, 28, 31, 0.12);
  box-shadow: 0 45px 90px -30px rgba(25, 28, 31, 0.4);
  cursor: default;
}

.evFlow__card:not(.is-active) {
  filter: brightness(0.96) saturate(0.95);
}

.evFlow__cardBody {
  display: flex;
  flex-direction: column;
}

.evFlow__accent {
  width: 36px;
  height: 4px;
  margin-bottom: 22px;
  border-radius: 999px;
  background: rgba(25, 28, 31, 0.16);
  transition:
    background-color 0.4s ease,
    width 0.4s ease;
}

.evFlow__card.is-active .evFlow__accent {
  width: 52px;
  background: #191c1f;
}

.evFlow__date {
  margin-bottom: 14px;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.2;
  color: #191c1f;
}

.evFlow__event {
  margin: 0;
  color: #505a63;
  font-size: 15px;
  line-height: 1.55;
}

/* ---- nav buttons ---- */
.evFlow__nav {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.evFlow__navBtn {
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

.evFlow__navBtn:hover {
  background: #191c1f;
  border-color: #191c1f;
  color: #fff;
}

.evFlow__navBtn:active {
  transform: scale(0.94);
}

.evFlow__navBtn i {
  display: inline-flex;
}

@media (max-width: 768px) {
  .evFlow__stage {
    height: 340px;
  }

  .evFlow__card {
    width: 260px;
    height: 320px;
    margin: -160px 0 0 -130px;
    padding: 24px;
  }
}
</style>
