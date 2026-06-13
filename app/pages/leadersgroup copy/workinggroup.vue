<script lang="ts" setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
interface IType {
  id: number;
  icon: string;
  content: string;
}
const data = ref<IType[]>([
  {
    id: 1,
    icon: "icon-reload-zap",
    content: t("Энергетический сектор"),
  },
  {
    id: 2,
    icon: "icon-database-dollar",
    content: t("Финансовый сектор и банковское дело"),
  },
  {
    id: 3,
    icon: "icon-users-dollar",
    content: t("Привлечение талантов и развитие человеческого капитала"),
  },
  {
    id: 4,
    icon: "icon-settings-nout",
    content: t("Цифровизация и ИКТ"),
  },
  {
    id: 5,
    icon: "icon-board",
    content: t("Креативные индустрии"),
  },
  {
    id: 6,
    icon: "icon-chart-dollar",
    content: t("Инвестиционный климат"),
  },
]);

const localePath = useLocalePath();
function ViewReadMore(item: IType) {
  const to = localePath({ path: `/leadersgroup/${item.id}`, query: { isuser: 'false' } });
  navigateTo(to);
}
</script>

<template>
  <div>
    <div class="mt-24">
      <h1 class="lg:text-[64px] text-[32px] uppercase font-black">
        {{ t('Рабочие группы Совета') }}
      </h1>
      <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-8">
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
            <h4 class="font-medium lg:text-2xl text-[#191C1F] text-xl mt-2">
              {{ item.content }}
            </h4>
          </div>
          <div>
            <span
              @click="ViewReadMore(item)"
              class="text-sm font-normal text-[#505A63] flex items-center gap-2.5 hover:decoration-solid hover:decoration-1 cursor-pointer mt-2"
            >
              <span>{{ t('Подробнее') }}</span>
              <i class="icon-move-right"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
