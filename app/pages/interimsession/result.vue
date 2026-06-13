<script lang="ts" setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { plenarySessionCards } from "@/constants/plenarySessionDetails";

import interimImage4 from "@/assets/images/plenarysessions/ps_4.png";
import interimImage5 from "@/assets/images/plenarysessions/ps_5.png";

const { t } = useI18n();

interface IResult {
  icon: string;
  count: string;
  counttext: string;
  content: string;
}

const interimSessionTitles = [
  "Первое промежуточное заседание Совета иностранных инвесторов, 16 апреля 2019 г.",
  "Второе промежуточное заседание Совета иностранных инвесторов, 20 ноября 2019 г.",
  "Первое промежуточное заседание Совета иностранных инвесторов, 29 августа 2023 г.",
];

const data = ref(
  plenarySessionCards.map((item, index) => ({
    ...item,
    fullname: interimSessionTitles[index],
  }))
);

const additionalBlocks = ref([
  {
    id: "interim-2024",
    image: interimImage4,
    fullname: "Второе промежуточное заседание Совета иностранных инвесторов, 10 октября 2024 г.",
    position: "Подробно",
  },
  {
    id: "interim-2025",
    image: interimImage5,
    fullname: "Третье промежуточное заседание Совета иностранных инвесторов, 19 ноября 2025 г.",
    position: "Подробно",
  },
]);

const resultList = ref<IResult[]>([
  {
    icon: "icon-user-briefcase",
    count: "6",
    counttext: t("рабочих групп"),
    content: t("в 2022 году"),
  },
  {
    icon: "icon-user-briefcase",
    count: "1 ",
    counttext: t("рабочая группа"),
    content: t("в 2024 году"),
  },
  {
    icon: "icon-user-briefcase",
    count: "8",
    counttext: t("рабочих групп"),
    content: t("в 2025 году"),
  },
]);

const openSessionDetail = async (path: string) => {
  const localizedPath = localePath(path);
  await navigateTo(localizedPath);
};
</script>

<template>
  <section>
    <client-only>
      
      <div>
        <h1 class="mb-65 mt-0 text-center text-[28px] font-black uppercase lg:text-[64px]">
          {{ t("За прошедшие годы") }}
        </h1>

        <div
          class="m-auto mb-0 mt-[240px] flex w-full justify-center rounded-[32px] bg-[#0000000D] lg:w-[1014px] relative"
        >
          <div
            class="absolute top-[-217px] z-10 grid w-full grid-cols-1 gap-5 p-3 lg:w-[1390px] lg:grid-cols-3"
          >
            <article
              v-for="item in data"
              :key="item.year"
              :id="item.targetId"
              class="relative rounded-[24px] border border-[#00000014] bg-white p-4 shadow-[0_18px_48px_rgba(25,28,31,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(25,28,31,0.12)]"
            >
              <img
                :src="item.image"
                :alt="item.fullname"
                class="h-[140px] w-full rounded-2xl object-cover object-center lg:h-[324px]"
              />

              <div class="mt-4 flex min-h-[132px] flex-col justify-between gap-4">
                <span class="block text-base font-medium tracking-[-0.02em] text-[#000000] lg:text-lg">
                  {{ t(item.fullname) }}
                </span>

                <button
                  type="button"
                  class="relative z-20 inline-flex w-fit cursor-pointer items-center rounded-md bg-[#191C1F0F] px-4 py-2 text-sm font-medium text-[#191C1F] transition hover:bg-[#191C1F] hover:text-white"
                  @click="openSessionDetail(item.link)"
                >
                  {{ t(item.position) }}
                </button>
              </div>
            </article>
          </div>
        </div>

        <!-- 2 additional blocks below, aligned under the left 2 columns -->
        <div
          class="m-auto mt-[320px] grid w-full grid-cols-1 gap-5 p-3 lg:w-[1390px] lg:grid-cols-3"
        >
          <article
            v-for="item in additionalBlocks"
            :key="item.id"
            :id="item.id"
            class="relative rounded-[24px] border border-[#00000014] bg-white p-4 shadow-[0_18px_48px_rgba(25,28,31,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(25,28,31,0.12)]"
          >
            <img
              :src="item.image"
              :alt="item.fullname"
              class="h-[140px] w-full rounded-2xl object-cover object-center lg:h-[324px]"
            />

            <div class="mt-4 flex min-h-[132px] flex-col justify-between gap-4">
              <span class="block text-base font-medium tracking-[-0.02em] text-[#000000] lg:text-lg">
                {{ t(item.fullname) }}
              </span>

              <button
                type="button"
                class="relative z-20 inline-flex w-fit cursor-pointer items-center rounded-md bg-[#191C1F0F] px-4 py-2 text-sm font-medium text-[#191C1F] transition hover:bg-[#191C1F] hover:text-white"
              >
                {{ t(item.position) }}
              </button>
            </div>
          </article>
        </div>
      </div>

      <div class="mt-16">
        <h1 class="lg:text-[64px] text-[32px] uppercase font-black">
          {{t('Промежуточная сессия в цифрах')}}
        </h1>
        <div class="grid lg:grid-cols-3 sm:grid-cols-1 gap-10 mt-8">
          <div
            class="bg-[#F7F7F7] p-4 rounded-xl"
            v-for="(item, index) in resultList"
            :key="index"
          >
            <i
              :class="item.icon"
              class="lg:text-5xl text-[44px] text-[#505A63]"
            ></i>
            <div class="flex items-baseline gap-1">
              <h3 class="font-black lg:text-[44px] text-[32px]">
                {{ item.count }}
              </h3>
              <h4 class="lg:text-2xl font-black">{{ item.counttext }}</h4>
            </div>
            <h5 class="font-normal lg:text-lg text-[#505A63] text-base">{{
              item.content
            }}</h5>
          </div>
        </div>
      </div>
    </client-only>
  </section>
</template>

<style></style>

