<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { ref } from "vue";
const data = ref([
  {
    id: 5,
    content: t("Секретариат Совета иностранных инвесторов при Президенте Республики Узбекистан - 2022"),
    file: "/documents/AR_2023_finalized.pdf",
  },
  {
    id: 6,
    content: t("Секретариат Совета иностранных инвесторов при Президенте Республики Узбекистан - 2024"),
    file: "/documents/Final - FIC-Annual_Report-2024.pdf",
  },
  {
    id: 7,
    content: t("Секретариат Совета иностранных инвесторов при Президенте Республики Узбекистан - 2025"),
    file: "/documents/FIC-Annual_Report_web-updated.pdf",
  },
]);
</script>
<template>
  <div>
    <client-only>
      <div class="container">
        <div class="w-full lg:text-center sm:text-left">
          <h1 class="lg:text-[64px] text-[32px] uppercase font-black mt-24">
            {{ t('отчеты') }}
          </h1>
          <div class="w-full flex justify-center sm:mb-2.5">
            <span
              class="lg:text-lg text-sm font-normal text-[#505A63] lg:pb-24 sm:pb-12 lg:w-[700px] sm:block mb-2.5"
              >{{ t('В этом разделе вы можете ознакомиться с годовыми отчётами рабочих') }}
              {{ t('групп, протоколами промежуточных встреч и другими аналитическими') }}
              {{ t('материалами.') }}
            </span>
          </div>
        </div>
        <div class="grid lg:grid-cols-3 grid-cols-1 gap-5 w-full">
          <div
            class="bg-[#F7F7F7] rounded-xl p-5"
            v-for="(item, i) in data"
            :key="i"
          >
            <div class="w-full flex justify-between items-center gap-8 cursor-pointer">
              <div class="lg:text-[16px] text-xl font-medium text-[#191C1F]">
                {{ item.content }}
              </div>
              <i class="icon-chevron-right"></i>
            </div>
            <a
              :href="item.file || '#'"
              :download="!!item.file"
              class="text-[#4D71DE] text-base font-normal mt-4 block"
              >{{ t('Скачать') }}</a
            >
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>
