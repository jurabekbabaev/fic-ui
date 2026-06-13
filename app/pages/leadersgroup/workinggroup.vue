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
import Image10 from '@/assets/images/leaders/sandro.png'
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
interface IType {
  id: number;
  icon: string;
  content: string;
  image: string;
  fullname: string;
  position: string;
  company_image: string;
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
  },
  {
    id: 3,
    icon: "icon-users-dollar",
    content: t("РГ по привлечению талантов и развитию человеческого капитала"),
    image: Image10,
    fullname: t("Сандро Ртвеладзе"),
    position: t(
      "Генеральный директор Ipoteka Bank OTP Group"
    ),
    company_image: Ipoteka,
  },
  {
    id: 4,
    icon: "icon-settings-nout",
    content: t("РГ по цифровизации и ИКТ"),
    image: LeaderImage3,
    fullname: t("Сергей Саликов"),
    position: t("Uzum, генеральный юрисконсульт"),
    company_image: Uzum,
  },
  {
    id: 5,
    icon: "icon-board",
    content: t("РГ по креативным индустриям"),
    image: LeaderImage4,
    fullname: t("Гаянэ Умерова"),
    position: t("ACDF, председатель"),
    company_image: Acdf,
  },
  {
    id: 6,
    icon: "icon-chart-dollar",
    content: t("РГ по инвестиционному климату"),
    image: LeaderImage5,
    fullname: t("Ерлан Досымбеков"),
    position: t("EY, управляющий партнер EY по Кавказу и Центральной Азии"),
    company_image: Ey,
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
      <h1 class="lg:text-[54px] text-[32px] uppercase font-black mt-4">
        {{ t("Основные рабочие группы (РГ)") }}
      </h1>

      <div class="grid lg:grid-cols-3 grid-cols-1 gap-3 mt-8">
        <div
          class="bg-[#F7F7F7] p-4 rounded-xl flex flex-col justify-between lg:min-h-[200px] sm:min-h-[148px]"
          v-for="(item, index) in data"
          :key="index"
        >
          <div>
            <i
              :class="item.icon"
              class="lg:text-5xl text-[44px] text-[#505A63]"
            ></i>
            <h4 class="font-medium lg:text-2xl text-[#191C1F] text-xl mt-2 uppercase">
              {{ item.content }}
            </h4>
          </div>

          <div>
            <div class="lg:flex block gap-3 lg:mt-[50px] mt-[32px] mb-5">
              <div
                class="flex lg:items-center items-start justify-left gap-6 sm:mb-4"
              >
                <div class="diamond-wrapper lg:w-[70px] w-[44px] lg:h-[70px] h-[44px]">
                  <div
                    class="diamond-inner-old bg-white"
                    :style="{ backgroundImage: `url(${item.company_image})` }"
                  ></div>
                </div>
                <div class="diamond-wrapper !relative !-left-6 lg:w-[70px] w-[44px] lg:h-[70px] h-[44px]">
                  <div
                    class="diamond-inner"
                    :style="{
                      backgroundImage: `url(${item.image})`,
                    }"
                  ></div>
                </div>
              </div>

              <div class="mt-10">
                <div
                  class="text-sm font-bold uppercase leading-[120%] text-[#191C1F] mb-1"
                >
                  {{ item.fullname }}
                </div>
                <span class="text-xs text-[#505A63] leading-[140%]">{{ item.position }}</span>
              </div>
            </div>
          </div>

          <div>
            <span
              @click="ViewReadMore(item)"
              class="text-sm font-normal text-[#505A63] flex items-center gap-2.5 hover:decoration-solid hover:decoration-1 cursor-pointer mt-2"
            >
              <span>{{ t("Подробнее") }}</span>
              <i class="icon-move-right"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
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
  transform: rotate(-45deg) scale(1);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
