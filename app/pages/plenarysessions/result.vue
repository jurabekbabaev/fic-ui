<script lang="ts" setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { plenarySessionCards } from "@/constants/plenarySessionDetails";

const { t } = useI18n();
const localePath = useLocalePath();

interface IResult {
  icon: string;
  count: string;
  counttext: string;
  content: string;
}

const data = ref(plenarySessionCards);

const resultList = ref<IResult[]>([
  {
    icon: "icon-user-briefcase",
    count: "6",
    counttext: t("рабочих групп"),
    content: t("в 2022 году"),
  },
  {
    icon: "icon-user-briefcase",
    count: "1",
    counttext: t("рабочих групп"),
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
  <section class="pb-18 pt-12 lg:pb-24 lg:pt-16">
    <client-only>
      <div>
        <h2
          class="title-64 mb-8 text-center text-[32px] lg:mb-12 lg:text-[64px]"
        >
          {{ t("За прошедшие годы") }}
        </h2>

        <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="item in data"
            :key="item.year"
            :id="item.targetId"
            class="flex flex-col rounded-[24px] border border-[#00000014] bg-white p-4 shadow-[0_18px_48px_rgba(25,28,31,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(25,28,31,0.12)]"
          >
            <img
              :src="item.image"
              :alt="item.fullname"
              class="h-[200px] w-full rounded-2xl object-cover object-center lg:h-[280px]"
            />

            <div class="mt-4 flex flex-1 flex-col justify-between gap-4">
              <span
                class="block text-base font-medium tracking-[-0.02em] text-[#191C1F] lg:text-lg"
              >
                {{ t(item.fullname) }}
              </span>

              <button
                type="button"
                class="btn btn-secondary btn-sm"
                @click="openSessionDetail(item.link)"
              >
                {{ t(item.position) }}
              </button>
            </div>
          </article>
        </div>
      </div>
      <div class="mt-16 lg:mt-24">
        <h2
          class="title-64 mb-8 text-center text-[32px] lg:mb-12 lg:text-[64px]"
        >
          {{ t("Пленарные сессии в цифрах") }}
        </h2>

        <div class="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(item, index) in resultList"
            :key="index"
            class="card-item p-5 lg:p-7"
          >
            <i
              :class="item.icon"
              class="text-[44px] text-[#505A63] lg:text-5xl"
            ></i>
            <div class="mt-3 flex items-baseline gap-1">
              <h3 class="text-[32px] font-black leading-none lg:text-[44px]">
                {{ item.count }}
              </h3>
              <h4 class="text-2xl font-black">
                {{ item.counttext }}
              </h4>
            </div>
            <h5 class="mt-2 text-base font-normal text-[#505A63] lg:text-lg">
              {{ item.content }}
            </h5>
          </div>
        </div>
      </div>
    </client-only>
  </section>
</template>
