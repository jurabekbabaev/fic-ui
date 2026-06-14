<template>
  <div class="min-h-screen">
    <div class="container">
      <!-- Header -->
      <div class="mb-8 mt-[100px]">
        <h1 class="lg:text-[64px] text-[32px] font-black text-[#191C1F] mb-4">
          {{ t("ALMANAC") }}
        </h1>
        <p class="text-[#191C1F] lg:text-[32px] text-xl">
          {{
            t(
              "Открытый каталог инициатив членов совета по развитию креативной экономики и поддержке малого и среднего бизнеса"
            )
          }}
        </p>
      </div>

      <!-- Filter Buttons -->
      <div class="flex bg-gray-100 rounded-full p-1 lg:w-fit w-full mt-[50px]">
        <button
          @click="activeTab = 'directions'"
          :class="[
            'px-6 py-4 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer',
            activeTab === 'directions'
              ? 'bg-[#191C1F] text-white'
              : 'bg-transparent text-[#505A63] hover:text-gray-800',
          ]"
        >
          <span class="lg:block hidden">
            {{ t("По направлениям креативной экономики") }}</span
          >
          <span class="lg:hidden block"> {{ t("По направлениям") }}</span>
        </button>
        <button
          @click="activeTab = 'members'"
          :class="[
            'px-6 py-4 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer',
            activeTab === 'members'
              ? 'bg-[#191C1F] text-white shadow-sm'
              : 'bg-transparent text-gray-600 hover:text-gray-800',
          ]"
        >
          {{ t("По членам совета") }}
        </button>
      </div>

      <!-- Tab 1: Table by directions -->
      <div v-if="activeTab === 'directions'" class="mt-[50px]">
        <!-- Desktop/Table view -->
        <div class="hidden lg:block">
          <div class="overflow-x-auto">
            <!-- Header -->
            <div
              class="min-w-[900px] flex gap-2 text-[#000000] px-4 py-3 text-sm border-b-1 border-gray-200"
            >
              <div
                class="text-sm font-bold text-center flex items-center w-[400px]"
              >
                {{ t("Члены FIC") }}
              </div>
              <div class="text-left w-[136px]">
                <img :src="IconFamily" alt="logo" class="w-auto" />
                <span class="text-sm font-bold block mt-1">Семья</span>
              </div>
              <div class="text-left w-[136px]">
                <img :src="IconPopcorn" alt="logo" class="w-auto" />
                <span class="text-sm font-bold block mt-1">Развлечения</span>
              </div>
              <div class="text-left w-[136px]">
                <img :src="IconVideo" alt="logo" class="w-auto" />
                <span class="text-sm font-bold block mt-1">Кино</span>
              </div>
              <div class="text-left w-[136px]">
                <img :src="IconAgro" alt="logo" class="w-auto" />
                <span class="text-sm font-bold block mt-1"
                  >Сельское хозяйство</span
                >
              </div>
              <div class="text-left w-[136px]">
                <img :src="IconBike" alt="logo" class="w-auto" />
                <span class="text-sm font-bold block mt-1">Спорт</span>
              </div>
              <div class="text-left w-[136px]">
                <img :src="IconTexnology" alt="logo" class="w-auto" />
                <span class="text-sm font-bold block mt-1">Технологии</span>
              </div>
              <div class="text-left w-[136px]">
                <img :src="IconRest" alt="logo" class="w-auto" />
                <span class="text-sm font-bold block mt-1">Отдых</span>
              </div>
            </div>
            <!-- Body -->
            <div class="min-w-[900px] rounded-b-xl px-2 py-2">
              <div
                v-for="row in tableRows"
                :key="row.idx"
                class="border-b-1 border-gray-200 flex items-center gap-3 py-3"
              >
                <div class="flex items-center gap-3 w-[400px] h-[72px]">
                  <div class="h-full flex items-center">
                    <img
                      :src="row.logo"
                      alt="logo"
                      class="h-full w-[154px] object-scale-down"
                    />
                  </div>
                </div>
                <div
                  v-for="(flag, j) in row.initiatives"
                  :key="j"
                  class="flex items-center justify-left w-[136px]"
                >
                  <img
                    :src="flag ? IconCheck : IconMinus"
                    alt=""
                    class="w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile/Card view -->
        <div class="grid grid-cols-2 gap-4 lg:hidden">
          <div
            v-for="row in tableRows"
            :key="'m-' + row.idx"
            class="bg-[#F7F7F7] rounded-xl p-4"
          >
            <div class="flex items-center justify-center mb-3">
              <img :src="row.logo" alt="logo" class="max-h-9 w-auto" />
            </div>

            <div class="grid grid-cols-4 gap-3 mt-2">
              <div
                v-for="(flag, j) in filteredInitiatives(row.initiatives)"
                :key="'mi-' + j"
                class="flex items-center justify-center"
              >
                <i
                  v-if="flag"
                  :class="initiativeIcons[j] + ' text-[22px] text-[#505A63]'"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center mt-6">
          <button class="btn btn-secondary">{{ t("Все члены FIC") }}</button>
        </div>
      </div>

      <!-- Tab 2: Stats Grid (current content) -->
      <div
        v-else
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-[50px]"
      >
        <div class="bg-[#F7F7F7] rounded-xl px-4 pt-4 pb-10">
          <img :src="IconBike" alt="logo" class="w-auto" />

          <div class="lg:text-[44px] text-[32px] mt-3 font-black uppercase">
            67
          </div>
          <div class="lg:text-lg font-normal text-[#505A63]">
            {{ t("Инициатив по развитию спорта") }}1
          </div>
        </div>

        <div class="bg-[#F7F7F7] rounded-xl px-4 pt-4 pb-10">
          <img :src="IconFamily" alt="logo" class="w-auto" />

          <div class="lg:text-[44px] text-[32px] mt-3 font-black uppercase">
            54
          </div>
          <div class="lg:text-lg font-normal text-[#505A63]">
            {{ t("Инициативы по поддержке семьи") }}2
          </div>
        </div>

        <div class="bg-[#F7F7F7] rounded-xl px-4 pt-4 pb-10">
          <img :src="IconVideo" alt="logo" class="w-auto" />

          <div class="lg:text-[44px] text-[32px] mt-3 font-black uppercase">
            32
          </div>
          <div class="lg:text-lg font-normal text-[#505A63]">
            {{ t("Инициатив в киноиндустрии") }}3
          </div>
        </div>

        <div class="bg-[#F7F7F7] rounded-xl px-4 pt-4 pb-10">
          <img :src="IconPopcorn" alt="logo" class="w-auto" />

          <div class="lg:text-[44px] text-[32px] mt-3 font-black uppercase">
            18
          </div>
          <div class="lg:text-lg font-normal text-[#505A63]">
            {{ t("Инициатив в сфере развлечений") }}4
          </div>
        </div>

        <div class="bg-[#F7F7F7] rounded-xl px-4 pt-4 pb-10">
          <img :src="IconAgro" alt="logo" class="w-auto" />
          <div class="lg:text-[44px] text-[32px] mt-3 font-black uppercase">
            45
          </div>
          <div class="lg:text-lg font-normal text-[#505A63]">
            {{ t("Инициатив в сельском хозяйстве") }}5
          </div>
        </div>

        <div class="bg-[#F7F7F7] rounded-xl px-4 pt-4 pb-10">
          <img :src="IconTexnology" alt="logo" class="w-auto" />
          <div class="lg:text-[44px] text-[32px] mt-3 font-black uppercase">
            23
          </div>
          <div class="lg:text-lg font-normal text-[#505A63]">
            {{ t("Инициативы в сфере технологий") }}6
          </div>
        </div>

        <div class="bg-[#F7F7F7] rounded-xl px-4 pt-4 pb-10">
          <img :src="IconRest" alt="logo" class="w-auto" />
          <div class="lg:text-[44px] text-[32px] mt-3 font-black uppercase">
            76
          </div>
          <div class="lg:text-lg font-normal text-[#505A63]">
            {{ t("Инициатив по организации отдыха") }}7
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const Cola = img("brands/cola.png");
const Ifc = img("brands/ifc2.png");
const EBank = img("brands/e-bank.png");
const AdBank = img("brands/ad-bank.png");
const TbcBank = img("brands/tbc-bank.png");
const IpakBank = img("brands/ipakyoli-bank.png");
const JpMorgan = img("brands/j.p-morgan.png");
const Visa = img("brands/visa.png");
const HalykBank = img("brands/halyk-bank.png");
const Claas = img("brands/claas.png");
import IconFamily from "@/assets/icons/icon-family.svg";
import IconPopcorn from "@/assets/icons/icon-popcorn.svg";
import IconVideo from "@/assets/icons/icon-video.svg";
import IconAgro from "@/assets/icons/icon-agroculture.svg";
import IconBike from "@/assets/icons/icon-bike.svg";
import IconTexnology from "@/assets/icons/icon-texnology.svg";
import IconRest from "@/assets/icons/icon-rest.svg";
import IconCheck from "@/assets/icons/icon-check.svg";
import IconMinus from "@/assets/icons/icon-minus.svg";

const activeTab = ref("directions");

const initiativeIcons = [
  "icon-users-to-grow",
  "icon-video-camera",
  "icon-bike",
  "icon-popcorn",
  "icon-glasses",
  "icon-wheat",
  "icon-holiday-tie",
];

const tableRows = ref([
  {
    idx: 1,
    logo: Cola,
    initiatives: [true, true, false, false, false, false, false],
  },
  {
    idx: 2,
    logo: Ifc,
    initiatives: [true, true, true, true, true, true, false],
  },
  {
    idx: 3,
    logo: EBank,
    initiatives: [true, false, false, true, true, true, false],
  },
  {
    idx: 4,
    logo: AdBank,
    initiatives: [true, true, true, true, true, true, false],
  },
  {
    idx: 5,
    logo: TbcBank,
    initiatives: [true, true, false, true, true, true, false],
  },
  {
    idx: 6,
    logo: IpakBank,
    initiatives: [false, true, true, true, true, true, false],
  },
  {
    idx: 7,
    logo: JpMorgan,
    initiatives: [true, true, true, true, true, true, false],
  },
  {
    idx: 8,
    logo: Visa,
    initiatives: [true, true, true, true, true, true, true],
  },
  {
    idx: 9,
    logo: HalykBank,
    initiatives: [false, true, false, false, true, true, false],
  },
  {
    idx: 10,
    logo: Claas,
    initiatives: [true, true, true, true, true, true, false],
  },
]);

const filteredInitiatives = (initiatives) => {
  // true bo'lgan joylarni o'z indexi bilan qaytarish:
  return initiatives
    .map((v, i) => (v ? i : null))
    .filter((i) => i !== null)
    .map((i) => true); // faqat true bo'lganlarni qaytarish
};
</script>
