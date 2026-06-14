<template>
  <div class="w-full bg-white mt-[50px] lg:mt-[100px]">
    <!-- Title -->
    <h1
      class="lg:text-[64px] uppercase text-center text-[32px] font-extrabold mb-12 text-black"
    >
      {{ t('Календарь совета') }}
    </h1>

    <section class="evFlow">
      <!-- coverflow stage -->
      <div class="evFlow__stage">
        <article
          v-for="(event, index) in events"
          :key="index"
          class="evFlow__card"
          :class="{ 'is-active': index === active }"
          :style="cardStyle(index)"
          @click="select(index)"
        >
          <div class="evFlow__cardBody">
            <span class="evFlow__year">{{ event.year }}</span>
            <span class="evFlow__accent" aria-hidden="true"></span>
            <span class="evFlow__month">{{ event.month }}</span>
            <p class="evFlow__event">{{ eventTitle(event) }}</p>
            <div v-if="event.links && event.links.length" class="evFlow__links">
              <a
                v-for="(link, j) in event.links"
                :key="j"
                :href="link.href || '#'"
                class="evFlow__link"
                @click.stop.prevent="handleTimelineLink(link)"
              >
                <span>{{ link.label }}</span>
                <i class="icon-move-right"></i>
              </a>
            </div>
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
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const localePath = useLocalePath();
const router = useRouter();

const eventTitle = (event) =>
  (event.lines || [])
    .map((l) => (l || "").replace(/‎/g, "").trim())
    .filter(Boolean)
    .join(" ");

function handleTimelineLink(link) {
  if (link?.path) {
    router.push(localePath(link.path));
    return;
  }

  if (!link?.target) return;

  router.push(
    localePath({
      path: "/plenarysessions",
      query: { target: link.target },
    })
  );
}

const events = computed(() => [
  {
    year: t("timeline_year_2019"),
    month: t("timeline_month_november"),
    filled: false,
    lines: [t("timeline_established_intermediate")],
    links: [{ label: t("timeline_learn_more"), path: "/reports" }],
  },
  {
    year: t("timeline_year_2022"),
    month: t("timeline_month_november"),
    filled: true,
    lines: [t("timeline_plenary_1_held")],
    links: [{ label: t("timeline_learn_more"), path: "/reports" }],
  },
  {
    year: t("timeline_year_2023"),
    month: t("timeline_month_august"),
    filled: false,
    lines: [t("timeline_intermediate_held")],
    links: [{ label: t("timeline_learn_more"), path: "/reports" }],
  },
  {
    year: t("timeline_year_2024"),
    month: t("timeline_month_may"),
    filled: true,
    lines: [t("timeline_plenary_2_held")],
    links: [{ label: t("timeline_learn_more"), path: "/reports" }],
  },
  {
    year: t("timeline_year_2024"),
    month: t("timeline_month_november"),
    filled: false,
    lines: [t("timeline_intermediate_held")],
    links: [{ label: t("timeline_learn_more"), path: "/reports" }],
  },
  {
    year: t("timeline_year_2025"),
    month: t("timeline_month_june"),
    filled: true,
    lines: [t("timeline_plenary_3_held")],
    links: [{ label: t("timeline_learn_more"), path: "/reports" }],
  },
  {
    year: t("timeline_year_2025"),
    month: t("timeline_month_november"),
    filled: true,
    lines: [t("timeline_association_registered")],
    links: [{ label: t("timeline_learn_more"), path: "/reports" }],
  },
  {
    year: "2026",
    month: t("timeline_month_june"),
    filled: true,
    lines: [t("timeline_plenary_4_held")],
    links: [{ label: t("timeline_learn_more"), path: "/reports" }],
  },
]);

const active = ref(2);
const count = computed(() => events.value.length);

const select = (i) => {
  active.value = i;
};
const prev = () => {
  active.value = (active.value - 1 + count.value) % count.value;
};
const next = () => {
  active.value = (active.value + 1) % count.value;
};

const cardStyle = (i) => {
  const offset = i - active.value;
  const abs = Math.abs(offset);
  const hidden = abs > 2;
  const scale = abs === 0 ? 1 : Math.max(0.78, 1 - abs * 0.1);
  return {
    transform: `translateX(${offset * 72}%) translateZ(${
      -abs * 140
    }px) rotateY(${offset * -5}deg) scale(${scale})`,
    zIndex: String(100 - abs),
    opacity: hidden ? "0" : "1",
    pointerEvents: hidden ? "none" : "auto",
  };
};
</script>

<style scoped>
.evFlow {
  margin-top: 24px;
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
  transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.55s ease,
    box-shadow 0.55s ease, filter 0.55s ease;
}

.evFlow__card.is-active {
  border-color: rgba(25, 28, 31, 0.12);
  box-shadow: 0 45px 90px -30px rgba(25, 28, 31, 0.4);
  cursor: default;
}

/* dim the side cards so the center one stands out */
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
  transition: background-color 0.4s ease, width 0.4s ease;
}

.evFlow__card.is-active .evFlow__accent {
  width: 52px;
  background: #191c1f;
}

.evFlow__month {
  margin-bottom: 8px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #9499a0;
}

.evFlow__year {
  margin-bottom: 14px;
  font-size: 26px;
  font-weight: 700;
  line-height: 1.15;
  color: #191c1f;
}

.evFlow__event {
  margin: 0;
  color: #505a63;
  font-size: 15px;
  line-height: 1.55;
}

.evFlow__links {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.evFlow__link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #191c1f;
  cursor: pointer;
  transition: gap 0.25s ease, opacity 0.25s ease;
}

.evFlow__link i {
  font-size: 13px;
}

.evFlow__link:hover {
  gap: 10px;
  opacity: 0.75;
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
  transition: background-color 0.25s ease, color 0.25s ease,
    border-color 0.25s ease, transform 0.2s ease;
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
