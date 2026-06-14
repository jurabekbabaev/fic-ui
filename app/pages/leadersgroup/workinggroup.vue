<script lang="ts" setup>
import LeaderImage1 from "@/assets/images/leaders/leader1.png";
import LeaderImage2 from "@/assets/images/leaders/leader2.png";
import LeaderImage3 from "@/assets/images/leaders/leader3.png";
import LeaderImage4 from "@/assets/images/leaders/leader4.png";
import LeaderImage5 from "@/assets/images/leaders/leader5.png";
import LeaderImage6 from "@/assets/images/leaders/leader6.png";
import AcwaPower from "@/assets/images/brands/acwa-power.png";
import TbcBank from "@/assets/images/brands/tbc.png";
import Ipoteka from "@/assets/images/brands/ipoteka.png";
import Uzum from "@/assets/images/brands/uzum.png";
import Acdf from "@/assets/images/brands/acdf-uz.png";
import Ey from "@/assets/images/brands/ey.png";
import Image10 from "@/assets/images/leaders/sandro.png";
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const ANIM_DURATION = 1500;
const statsTargets = [6, 10];
const statsDisplay = ref([0, 0]);
const statsRef = ref<HTMLElement | null>(null);
const observers: IntersectionObserver[] = [];

function easeOutCubic(x: number) {
  return 1 - Math.pow(1 - x, 3);
}

function animateStats() {
  const start = performance.now();
  const step = (now: number) => {
    const progress = Math.min((now - start) / ANIM_DURATION, 1);
    const eased = easeOutCubic(progress);
    statsDisplay.value = statsTargets.map((target) =>
      Math.floor(eased * target)
    );
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

onMounted(async () => {
  await nextTick();
  if (!statsRef.value) return;
  let done = false;
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !done) {
          done = true;
          animateStats();
        }
      });
    },
    { threshold: 0.3 }
  );
  obs.observe(statsRef.value);
  observers.push(obs);
});

onBeforeUnmount(() => observers.forEach((o) => o.disconnect()));
interface IType {
  id: number;
  icon: string;
  content: string;
  image: string;
  fullname: string;
  position: string;
  company_image: string;
  role: string;
}
const data = ref<IType[]>([
  {
    id: 1,
    icon: "icon-reload-zap",
    content: t("РГ по энергетическому сектору"),
    image: LeaderImage6,
    fullname: t("Джон Заиди"),
    position: t("Acwa, глава страны – Узбекистан"),
    company_image: AcwaPower,
    role: t("Руководитель рабочей группы."),
  },
  {
    id: 2,
    icon: "icon-database-dollar",
    content: t("РГ по финансовому сектору и банковской деятельности"),
    image: LeaderImage1,
    fullname: t("Спартак Тетрашвили"),
    position: t(
      "TBC Bank, генеральный. Подбор талантов и управление человеческим капиталом"
    ),
    company_image: TbcBank,
    role: t("Руководитель рабочей группы."),
  },
  {
    id: 3,
    icon: "icon-users-dollar",
    content: t("РГ по привлечению талантов и развитию человеческого капитала"),
    image: Image10,
    fullname: t("Сандро Ртвеладзе"),
    position: t("Генеральный директор Ipoteka Bank OTP Group"),
    company_image: Ipoteka,
    role: t("Руководитель рабочей группы."),
  },
  {
    id: 4,
    icon: "icon-settings-nout",
    content: t("РГ по цифровизации и ИКТ"),
    image: LeaderImage3,
    fullname: t("Сергей Саликов"),
    position: t("Uzum, генеральный юрисконсульт"),
    company_image: Uzum,
    role: t("Руководитель рабочей группы."),
  },
  {
    id: 5,
    icon: "icon-board",
    content: t("РГ по креативным индустриям"),
    image: LeaderImage4,
    fullname: t("Гаянэ Умерова"),
    position: t("ACDF, председатель"),
    company_image: Acdf,
    role: t("Руководитель рабочей группы."),
  },
  {
    id: 6,
    icon: "icon-chart-dollar",
    content: t("РГ по инвестиционному климату"),
    image: LeaderImage5,
    fullname: t("Ерлан Досымбеков"),
    position: t("EY, управляющий партнер EY по Кавказу и Центральной Азии"),
    company_image: Ey,
    role: t("Руководитель рабочей группы."),
  },
]);

const localePath = useLocalePath();
function ViewReadMore(item: IType) {
  const to = localePath({
    path: `/leadersgroup/${item.id}`,
    query: { isuser: "false" },
  });
  navigateTo(to);
}
</script>

<template>
  <div>
    <div class="" id="mwg">
      <h1 class="lg:text-[72px] text-[32px] uppercase font-black">
        {{ t("Рабочие группы") }}
      </h1>
      <div ref="statsRef" class="wg-stat-tabs mt-8">
        <div class="wg-stat-tab wg-stat-tab--active">
          <span class="wg-stat-tab__count">{{ statsDisplay[0] }}</span>
          <span class="wg-stat-tab__label">{{
            t("Рабочие группы Совета")
          }}</span>
        </div>
        <div class="wg-stat-tab">
          <span class="wg-stat-tab__count">{{ statsDisplay[1] }}</span>
          <span class="wg-stat-tab__label">{{
            t("Межведомственные рабочие группы")
          }}</span>
        </div>
      </div>
      <div
        class="flex items-center gap-3 mt-4 px-4 py-3 rounded-xl bg-[#F7F7F7] border border-[#0000000D]"
      >
        <i class="icon-file-text text-[#505A63] text-lg shrink-0 mt-0.5"></i>
        <div class="flex-1 min-w-0">
          <span
            class="block text-xs font-semibold text-[#191C1F] uppercase tracking-wide mb-0.5"
          >
            {{ t("Правовая основа") }}
          </span>
          <span class="text-sm text-[#505A63] font-normal leading-relaxed">
            {{
              t(
                "По Итогам Постановление Президента от 18.07.2025 (вступила в силу 21.07.2025) - ПП-226"
              )
            }}
          </span>
        </div>
        <button
          @click.stop="navigateTo(localePath('/reports'))"
          class="shrink-0 cursor-pointer flex items-center gap-1 text-sm font-medium text-[#191C1F] hover:opacity-70 transition-opacity whitespace-nowrap"
        >
          {{ t("Подробнее") }}
          <i class="icon-move-right text-base"></i>
        </button>
      </div>

      <h1 class="lg:text-[48px] text-[32px] uppercase font-black mt-10">
        {{ t("Рабочие группы (РГ)") }}
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
        <div
          v-for="(item, index) in data"
          :key="index"
          @click="ViewReadMore(item)"
          class="group bg-[#F7F7F7] hover:bg-[#EFEFEF] transition-colors duration-200 rounded-2xl p-6 lg:p-7 flex flex-col cursor-pointer"
        >
          <!-- Top: icon + title -->
          <div class="flex items-center gap-3 flex-1">
            <i
              :class="item.icon"
              class="text-2xl text-[#505A63] mt-0.5 shrink-0"
            ></i>
            <h4
              class="text-sm font-semibold text-[#191C1F] uppercase leading-snug"
            >
              {{ item.content }}
            </h4>
          </div>

          <!-- Divider -->
          <div class="border-t border-[#0000000D] mt-6 mb-5"></div>

          <!-- Bottom: avatars + name/position + arrow -->
          <div class="flex items-center justify-between gap-3">
            <div class="flex items-center gap-3">
              <!-- Avatars -->
              <div class="flex items-center">
                <div class="diamond-wrapper w-[44px] h-[44px]">
                  <div
                    class="diamond-inner-old bg-white"
                    :style="{ backgroundImage: `url(${item.company_image})` }"
                  ></div>
                </div>
                <div class="diamond-wrapper w-[44px] h-[44px] -ml-4">
                  <div
                    class="diamond-inner"
                    :style="{ backgroundImage: `url(${item.image})` }"
                  ></div>
                </div>
              </div>
              <!-- Name + position -->
              <div class="min-w-0">
                <div
                  class="text-[11px] text-[#000000] font-normal leading-tight mb-0.5"
                >
                  {{ item.role }}
                </div>
                <div
                  class="text-xs font-bold uppercase leading-tight text-[#191C1F] truncate"
                >
                  {{ item.fullname }}
                </div>

                <div
                  class="text-[11px] text-[#505A63] leading-snug mt-0.5 line-clamp-2"
                >
                  {{ item.position }}
                </div>
              </div>
            </div>
            <!-- Arrow -->
            <i
              class="icon-move-right text-lg text-[#505A63] shrink-0 group-hover:translate-x-1 transition-transform duration-200"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.wg-stat-tabs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

@media (max-width: 480px) {
  .wg-stat-tabs {
    grid-template-columns: 1fr;
  }
}

.wg-stat-tab {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding: 24px 28px;
  border-radius: 20px;
  border: 1.5px solid rgba(25, 28, 31, 0.1);
  background: #fff;
  text-align: left;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.wg-stat-tab:hover {
  border-color: rgba(25, 28, 31, 0.25);
  box-shadow: 0 8px 24px rgba(25, 28, 31, 0.07);
  transform: translateY(-2px);
}

.wg-stat-tab--active {
  transform: translateY(-2px);
}

.wg-stat-tab__count {
  font-size: clamp(36px, 5vw, 52px);
  font-weight: 700;
  line-height: 1;
  color: #191c1f;
}

.wg-stat-tab__label {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  color: #505a63;
}

.diamond {
  width: 70px;
  height: 70px;
  transform: rotate(45deg);
  border-radius: 18px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}

.diamond-wrapper {
  width: 70px;
  height: 70px;
  transform: rotate(45deg);
  border-radius: 18px;
  overflow: hidden;
  /* box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15); */
  background: white;
  border: 1.23px solid #0000001a;
}

.diamond-inner {
  width: 100%;
  height: 100%;
  transform: rotate(-45deg) scale(1.4);
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
}

.diamond-inner-old {
  width: 100%;
  height: 100%;
  transform: rotate(-45deg) scale(1.4);
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
