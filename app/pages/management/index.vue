<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const Management1 = img("management/image11.png");
const Management2 = img("management/image12.png");
const User1 = img("management/mng1.png");
const User2 = img("management/mng2.png");
const User3 = img("management/mng3.png");
const User4 = img("management/mng4.png");
const User5 = img("management/mng5.png");
const User6 = img("management/mng6.png");
const User7 = img("management/mng7.png");
import WLocaleLink from "~/components/shared/WLocaleLink.vue";

const data = ref([
  {
    id: 1,
    image: Management2,
    fullname: t("Шавкат Миромонович Мирзиёев"),
    position: t("Председатель совета"),
  },
  {
    id: 2,
    image: Management1,
    fullname: t("Одиль Рено-Бассо"),
    position: t("Сопредседатель совета"),
  },
]);

const comitetdata = ref([
  {
    id: 1,
    image: User1,
    fullname: t("Лазиз Кудратов"),
    position: t("Глава представительства МИИТ"),
  },
  {
    id: 2,
    image: User5,
    fullname: t("Анди Аранитаси"),
    position: t("Глава ЕБРР в Узбекистане"),
  },
  {
    id: 3,
    image: User2,
    fullname: t("Азиз Гафуров"),
    position: t("Глава ассоциации СИИ"),
  },
  {
    id: 4,
    image: User7,
    fullname: t("Канокпан Лао-Арая"),
    position: t("Президент Совета управляющих ADB"),
  },
  {
    id: 5,
    image: User4,
    fullname: t("Нил Маккейн"),
    position: t("Директор офиса по Узбекистану и Туркменистану IFC"),
  },
]);

</script>
<template>
  <div>
    <client-only>
      <div class="container">
        <div
          class="rounded-[32px] border-[#0000001A] mb-[50px]"
        >
          <!-- руководство сии -->
          <div>
            <h1
              class="lg:text-[64px] text-[32px] uppercase font-black text-center mt-[100px] mb-8"
            >
              {{ t("руководство сии") }}
            </h1>
            <p
              class="text-base lg:text-lg text-[#505A63] font-normal leading-[170%] text-center lg:max-w-[860px] w-full mx-auto mb-14"
            >
              {{ t("Деятельность Совета строится на модели совместного председательства, отражающей партнёрский характер диалога между государством и международными инвесторами. Совет возглавляет Президент Республики Узбекистан; сопредседателем выступает Президент Европейского банка реконструкции и развития. Оперативное руководство осуществляет Исполнительный комитет, в состав которого входят представители трёх международных финансовых институтов-учредителей — ЕБРР, АБР и МФК — наряду с профильным министром и Главой Ассоциации.") }}
            </p>
            <div
              class="bg-white mb-[80px] border-[#0000001A] rounded-[32px] w-full max-w-[1014px] m-auto relative flex justify-center mt-[241px]"
            >
              <div
                class="grid grid-cols-1 sm:grid-cols-2 w-full max-w-[734px] m-auto gap-5 absolute top-[-217px] p-3"
              >
                <div
                  class="border-1 border-[#0000001A] p-4 rounded-2xl bg-white"
                  v-for="(item, i) in data"
                  :key="i"
                >
                  <img
                    :src="item.image"
                    alt=""
                    class="bg-[#8389A4] rounded-2xl w-full object-cover lg:h-[324px] h-[140px] object-top"
                  />
                  <span
                    class="block lg:text-lg text-base font-medium tracking-[-2%] text-[#000000] mt-3"
                    >{{ item.fullname }}</span
                  >
                  <div
                    class="flex justify-center items-center p-2 rounded-sm bg-[#0000001A] h-[34px] mt-3"
                    style="width: fit-content"
                  >
                    <span
                      class="text-[#000000] lg:text-sm text-xs font-normal"
                      >{{ item.position }}</span
                    >
                  </div>
                </div>
              </div>

              <!--  -->
              <div class="lg:mt-[220px] mt-[100px] w-full px-3 bg-white rounded-b-[32px]"></div>
              
            </div>
          </div>

          <!-- Исполнительный комитет -->
          <div
            class="bg-[#0000000D] border-1 border-[#0000001A] rounded-[32px] w-full max-w-[1300px] m-auto my-[80px] lg:px-[60px] py-[60px] px-3"
          >
            <h1
              class="lg:text-[44px] text-[24px] uppercase font-black text-center mb-14"
            >
              {{ t("Исполнительный комитет") }}
            </h1>
            <div class="flex flex-wrap justify-center gap-5">
              <div
                class="bg-white rounded-xl border-1 border-[#0000001A] h-[108px] p-4 flex gap-4 items-start lg:w-[32%] w-full"
                v-for="item in comitetdata"
                :key="item.id"
              >
                <img
                  :src="item.image"
                  alt=""
                  class="w-[76px] h-[76px] rounded-xl object-cover"
                />
                <div>
                  <p
                    class="lg:text-lg text-base font-bold text-[#191C1F] leading-[110%]"
                  >
                    {{ item.fullname }}
                  </p>
                  <span
                    class="block lg:text-sm text-xs font-normal leading-[120%] text-[#505A63] mt-1"
                    >{{ item.position }}</span
                  >
                </div>
              </div>
            </div>
            <div class="flex w-full justify-center mt-6">
              <WLocaleLink to="/foreigninvestors" class="btn btn-secondary"
                >{{ t("Подробнее") }}</WLocaleLink
              >
            </div>
          </div>

        </div>
        <!-- <div class="flex flex-col items-center">
            <img :src="Management1" alt="">
            <img :src="Management2" class="mt-9">
            <img :src="Management3" alt="" class="mt-9">
        </div> -->
      </div>
    </client-only>
  </div>
</template>

<style></style>
