<script lang="ts" setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
interface IType {
  id: number;
  sessionid: string;
  yearKey: string;
  sessionTitleKey: string;
  bgcolor: string;
  txtcolor: string;
  groups: string[];
  isView: boolean
};

const data = ref<IType[]>([
  {
    id: 1,
    yearKey: "11 июня - 2025 год",
    sessionTitleKey: "Пленарная сессия",
    sessionid: "III",
    bgcolor: "bg-[#2D4CC5]",
    txtcolor: "text-white",
    isView: true,
    groups: [
      t("МРГ по разработке законопроекта Об альтернативных инвестиционных фондах"),
      t("МРГ по совершенствованию залогового законодательства"),
      t("МРГ по внедрению принципов ответственного ведения бизнеса"),
      t("МРГ по подготовке профессиональных кадров для иностранных компаний"),
      t("МРГ по улучшению корпоративного управления в местных компаниях"),
      t("МРГ по совершенствованию налогового администрирования"),
      t("МРГ по совершенствованию процедур выделения земельных участков"),
      t("МРГ по вопросам энергетики"),
      t("МРГ по циркулярной экономике"),
      t("МРГ по развитию искусственного интеллекта"),
    ],
  },
  {
    id: 2,
    yearKey: "3 мая - 2024 год",
    sessionTitleKey: "Пленарное заседание",
    sessionid: "II",
    bgcolor: "bg-[#D5DAEB]",
    txtcolor: "text-[#040C2A]",
    isView: false,
    groups: [
      t("Цифровизации ИКТ"),
      t("Финансовый сектор и банковское дело"),
      t("Зеленая экономика и энергетика"),
      t("Инвестирование через границы"),
      t("Приватизации и ГЧП"),
      t("Альтернативные инвестиционные фонды"),
      t("Развития рынка и капитала"),
      t("Введение бизнеса"),
    ],
  },
  {
    id: 3,
    yearKey: "16 ноября - 2022 год",
    sessionTitleKey: "Пленарная сессия",
    sessionid: "I",
    bgcolor: "bg-[#D5DAEB]",
    txtcolor: "text-[#040C2A]",
    isView: false,
    groups: [
      t("Цифровизации ИКТ"),
      t("Финансовый сектор и банковское дело"),
      t("Зеленая экономика и энергетика"),
      t("Инвестирование через границы"),
      t("Приоритетные отрасли"),
      t("Приватизации и ГЧП"),
      t("Залоговое законодательство"),
    ],
  },
]);

const localePath = useLocalePath();
function ViewReadMore(item: IType) {
  const sectionMap: Record<number, string> = {
    1: "plenary-2025",
    2: "plenary-2024",
    3: "plenary-2022",
  };
  const to = localePath({
    path: `/plenarysessions`,
    query: { target: sectionMap[item.id] || "plenary-2025" },
  });
  navigateTo(to);
}
</script>
<template>
  <section>
    <client-only>
      <div class="mb-12" id="rops">
        <h2 class="lg:text-[54px] text-[32px] uppercase font-black mb-12 mt-24" section-id="rops">
          {{ t("Межведомственные рабочие группы, созданные по итогам пленарных заседаний") }}
        </h2>
        <div>
          <div class="grid lg:grid-cols-3 sm:grid-cols-1 gap-5">
            <div
              class="bg-[#F7F7F7] flex flex-col h-full rounded-xl overflow-hidden"
              v-for="(item, index) in data"
              :key="index"
            >
              <div
                class="w-full uppercase h-[240px] flex justify-center items-center rounded-tl-xl rounded-tr-xl"
                :class="[item.bgcolor, item.txtcolor]"
              >
                <div>
                  <div class="font-black text-[100px] w-full text-center h-[125px]">
                    {{ item.sessionid }}
                  </div>
                  <p class="text-sm font-medium">{{ t(item.sessionTitleKey) }}</p>
                </div>
              </div>
              <div class="p-5 flex flex-col flex-1">
                <span class="uppercase font-normal text-sm text-[#191C1F]">{{
                  t(item.yearKey)
                }}</span>
                <ul class="list-disc p-5 text-[#505A63] font-normal text-base flex-1">
                  <li v-for="(list, i) in item.groups" :key="i">{{ list }}</li>
                </ul>
                <span
                  @click="ViewReadMore(item)"
                  class="text-sm font-normal text-[#191C1F] flex justify-end items-center gap-2.5 hover:decoration-solid hover:decoration-1 cursor-pointer mt-auto pt-4"
                >
                  <span>{{ t("Посмотреть") }}</span>
                  <i class="icon-move-right"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </section>
</template>

<style></style>
