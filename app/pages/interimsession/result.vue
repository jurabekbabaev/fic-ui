<script lang="ts" setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const localePath = useLocalePath();

interface IInterimRow {
  no: string;
  date: string;
  note: string;
  link?: string;
}

// Data from the official interim-sessions register.
const interimRows = ref<IInterimRow[]>([
  {
    no: "ИС-1",
    date: "20 ноября 2019",
    note: "Первое промежуточное заседание после учреждения Совета: определены приоритетные направления, формат взаимодействия с инвесторами и порядок подготовки предложений",
  },
  {
    no: "ИС-2",
    date: "дата уточняется",
    note: "Рассмотрены ход реализации одобренных инициатив и подготовка к очередной пленарной сессии",
  },
  {
    no: "ИС-3",
    date: "29 августа 2023",
    note: "Рассмотрены результаты по приоритетным направлениям и вопросы подготовки к пленарной сессии 2024 года",
  },
  {
    no: "ИС-4",
    date: "8 ноября 2024",
    note: "Обсуждены итоги работы рабочих групп, новые предложения инвесторов и приоритеты на предстоящий период",
  },
  {
    no: "ИС-5",
    date: "19 ноября 2025",
    note: "Протокол № 1 (утв. 23.01.2026). Дорожная карта — 21 инициатива по 8 рабочим группам; учреждены новые группы (циркулярная экономика, ИИ, акселератор креативных индустрий) и альянс RAIC-CAC",
    link: "/interimsession/session-v",
  },
  {
    no: "ИС-6",
    date: "18 мая 2026",
    note: "Впервые под председательством вице-премьера Ж. Ходжаева. Презентовано и принято 116 инициатив",
    link: "/interimsession/session-v",
  },
]);

const openDocument = async (path?: string) => {
  if (!path) return;
  await navigateTo({ path: localePath(path), query: { source: "interim" } });
};
</script>

<template>
  <section class="pb-18 pt-12 lg:pb-24 lg:pt-16">
    <client-only>
      <!-- Interim sessions -->
      <div>
        <h2 class="title-64 mb-8 text-center text-[32px] lg:mb-12 lg:text-[64px]">
          {{ t("За прошедшие годы") }}
        </h2>

        <h3
          class="mb-6 pb-3 text-lg font-black uppercase text-[#1a1a1a] border-b-2 border-[#1a1a1a] lg:text-xl"
        >
          {{ t("Хронология") }}
        </h3>

        <div
          class="w-full overflow-x-auto rounded-2xl border border-[#E5E5E5] shadow-sm"
        >
          <table class="w-full border-collapse">
            <thead>
              <tr class="bg-[#F7F7F7] text-[#1a1a1a] font-bold">
                <th
                  class="text-left text-xs font-semibold uppercase tracking-widest px-6 py-4 w-[80px] lg:w-[100px]"
                >
                  {{ t("interim_table_no") }}
                </th>
                <th
                  class="text-left text-xs font-semibold uppercase tracking-widest px-6 py-4 w-[140px] lg:w-[180px]"
                >
                  {{ t("interim_table_date") }}
                </th>
                <th
                  class="text-left text-xs font-semibold uppercase tracking-widest px-6 py-4"
                >
                  {{ t("interim_table_note") }}
                </th>
                <th
                  class="px-6 py-4 w-[120px] lg:w-[150px]"
                  aria-hidden="true"
                ></th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr
                v-for="row in interimRows"
                :key="row.no"
                class="border-b border-[#E5E5E5] last:border-b-0"
              >
                <td class="px-6 py-5 align-top">
                  <span class="font-bold text-sm lg:text-base text-[#1a1a1a]">
                    {{ row.no }}
                  </span>
                </td>
                <td
                  class="px-6 py-5 align-top text-sm lg:text-base text-[#191C1F] whitespace-nowrap"
                >
                  {{ t(row.date) }}
                </td>
                <td
                  class="px-6 py-5 align-top text-sm lg:text-base text-[#505A63] leading-relaxed"
                >
                  {{ t(row.note) }}
                </td>
                <td class="px-6 py-5 align-top text-right whitespace-nowrap">
                  <button
                    v-if="row.link"
                    type="button"
                    class="btn btn-secondary btn-sm w-fit"
                    @click="openDocument(row.link)"
                  >
                    {{ t("Подробнее") }}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </client-only>
  </section>
</template>
