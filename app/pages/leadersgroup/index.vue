<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { ref } from "vue";
const LeaderImage1 = img("leaders/leader1.png");
const LeaderImage2 = img("leaders/leader2.png");
const LeaderImage3 = img("leaders/leader3.png");
const LeaderImage4 = img("leaders/leader4.png");
const LeaderImage5 = img("leaders/leader5.png");
const LeaderImage6 = img("leaders/leader6.png");
import WorkingGroup from "./workinggroup.vue";


const leaderList = ref([
  {
    id: 1,
    image: LeaderImage1,
    fullname: t("Спартак Тетрашвили"),
    position: t("TBC Bank, генеральный. Подбор талантов и управление человеческим капиталом"),
    direction: t("Финансовый сектор и банковское дело"),
  },
  {
    id: 2,
    image: LeaderImage2,
    fullname: t("Александр Рукавишников"),
    position: t("Ipoteka Bank OTP Group, Директор дирекции маркетинга и коммуникаций"),
    direction: t("Привлечение талантов и развитие человеческого капитала"),
  },
  {
    id: 3,
    image: LeaderImage3,
    fullname: t("Сергей Саликов"),
    position: t("Uzum, генеральный юрисконсульт"),
    direction: t("Цифровизация и ИКТ"),
  },
  {
    id: 4,
    image: LeaderImage4,
    fullname: t("Гаянэ Умерова"),
    position: t("ACDF, председатель"),
    direction: t("Креативные индустрии"),
  },
  {
    id: 5,
    image: LeaderImage5,
    fullname: t("Ерлан Досымбеков"),
    position: t("EY, управляющий партнер EY по Кавказу и Центральной Азии"),
    direction: t("Инвестиционный климат"),
  },
  {
    id: 6,
    image: LeaderImage6,
    fullname: t("Джон Заиди"),
    position: t("Acwa, глава страны – Узбекистан"),
    direction: t("Энергетический сектор"),
  },
]);

const localePath = useLocalePath();
function View(item) {
  const to = localePath({ path: `/leadersgroup/${item.id}`, query: { isuser: 'true' } });
  navigateTo(to);
}
</script>
<template>
  <div>
    <client-only>
    <div class="container">
      <WorkingGroup />
      <!-- <div>
        <div>
          <h1
            class="lg:text-[64px] text-[32px] uppercase font-black mb-12 mt-[100px]"
          >
            {{ t('лидеры основных рабочих групп') }}
          </h1>
        </div>
        <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-x-32 gap-y-14">
          <div v-for="item in leaderList" :key="item.id">
            <div class="flex gap-8 items-center">
              <img :src="item.image" alt="" />
              <div>
                <span
                  class="block lg:text-2xl text-sm text-[#191C1F] font-medium"
                  >{{ item.direction }}</span
                >
                <span @click="View(item)" class="cursor-pointer">
                  <h4
                    class="block lg:text-[28px] text-lg text-[#191C1F] font-medium uppercase mt-2.5"
                    >{{ item.fullname }}</h4
                  >
                </span>
                <span
                  class="block lg:text-base text-xs text-[#505A63] font-normal"
                  >{{ item.position }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
    </client-only>
  </div>
</template>

<style></style>
