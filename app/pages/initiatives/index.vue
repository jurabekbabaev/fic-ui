<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";

const search = ref("");
const yearId = ref();
const workinggroupid = ref();
const directionid = ref();
const yearList = ref([
  { id: 0, name: t("Все годы") },
  { id: 1, name: 2020 },
  { id: 2, name: 2021 },
  { id: 3, name: 2022 },
  { id: 4, name: 2023 },
  { id: 5, name: 2024 },
  { id: 6, name: 2025 },
]);
const workingGroupList = ref([
  { id: 0, name: t("Все рабочие группы") },
  { id: 1, name: t("Рабочие группы 1") },
  { id: 2, name: t("Рабочие группы 2") },
]);
const directionList = ref([
  { id: 0, name: t("Все направления") },
  { id: 1, name: t("Направления 1") },
  { id: 2, name: t("Направления 2") },
]);

const data = ref([
  {
    content: t("Разработка Закона «Об альтернативных инвестиционных фондах»"),
    users: [t("ДПМ – Дж. Ходжаев"), t("МИИТ – Л. Кудратов")],
  },
  {
    content: t("Улучшение работы реестра залогов"),
    users: [t("CB – Т. Ишметов")],
  },
  {
    content: t(
      "Введение современных форм залога (залоговые счета, абсолютные права, доли участия в юридических лицах)"
    ),
    users: [t("MIIT – Л. Кудратов")],
  },
  {
    content: t(
      "Внедрение Руководящих принципов ОЭСР по ответственному ведению бизнеса с назначением Министерства инвестиций, промышленности и торговли уполномоченным органом"
    ),
    users: [t("MHES – К. Шарипов"), t("MLSP – Б. Захидов")],
  },
  {
    content: t(
      "Реализация программы «Молодые профессионалы – Инвестиционный кадровый резерв» при Совете "
    ),
    users: [t("MEF – И. Норкулов"), t("NAPP – В. Пак")],
  },
  {
    content: t(
      "Дальнейшее совершенствование системы корпоративного управления"
    ),
    users: [t("MEF – А. Хайдаров"), t("TC – Ш. Кудбиев")],
  },
  {
    content: t(
      "Пересмотр механизмов налогообложения дивидендов, полученных предприятиями с иностранным капиталом и распределяемых учредителям"
    ),
    users: [t("ДПМ – Дж. Ходжаев"), t("МИИТ – Л. Кудратов")],
  },
  {
    content: t(
      "Введение механизма перехода от стимулов, основанных на доходах, к стимулам, основанным на расходах, для инвесторов"
    ),
    users: [t("ДПМ – Дж. Ходжаев"), t("МИИТ – Л. Кудратов")],
  },
  {
    content: t(
      "Пересмотр требования об обязательном согласовании в Кабинете Министров прекращения проектов государственно-частного партнёрства с объемом инвестиций свыше 10 млн долларов США"
    ),
    users: [t("ДПМ – Дж. Ходжаев"), t("МИИТ – Л. Кудратов")],
  },
  {
    content: t(
      "Дальнейшее совершенствование процедуры выделения земель для инвесторов"
    ),
    users: [t("MEF – И. Норкулов"), t("CA – Ф. Пулатов")],
  },
  {
    content: t(
      "Введение механизма долгосрочного и гарантированного электроснабжения для стратегических потребителей"
    ),
    users: [t("ME – Ж. Мирзамахмудов")],
  },
  {
    content: t(
      "Регулирование подключения крупных потребителей к электрическим распределительным сетям"
    ),
    users: [t("ME – Ж. Мирзамахмудов")],
  },
  {
    content: t(
      "Предоставление частному сектору возможности управления электрическими распределительными сетями на условиях концессии"
    ),
    users: [t("ME – Ж. Мирзамахмудов")],
  },
  {
    content: t("Расширение сотрудничества с японскими компаниями"),
    users: [t("MIIT – Л. Кудратов"), t("MFA – Б. Саидов")],
  },
  {
    content: t(
      "Разработка и реализация программы по гармонизации технических стандартов Узбекистана, требований к лицензированию и тестированию оборудования в соответствии с международными нормами"
    ),
    users: [t("ДПМ – Дж. Ходжаев"), t("ATR – А. Джуманазаров")],
  },
  {
    content: t(
      "Содействие занятости через внедрение цифровой платформы (агрегатора) с участием частного сектора"
    ),
    users: [
      t("DPM/MEF – Ж. Кучкаров"),
      t("MDT – Ш. Шермаров"),
      t("MLSP – Б. Захидов"),
    ],
  },
  {
    content: t(
      "Пересмотр экспортных пошлин на отдельные товары (пряжа, минеральные удобрения)"
    ),
    users: [
      t("МИИТ – Л. Кудратов"),
      t("MEF – И. Норкулов"),
      t("Uzkimyosanoat – О. Темиров"),
    ],
  },
  {
    content: t(
      "Разработка концепции сбора и переработки отходов в сотрудничестве с Европейским банком реконструкции и развития"
    ),
    users: [
      t("MEEPCC – А. Абдукаххимов"),
      t("МИИТ – Л. Кудратов"),
      t("MIIT – Л. Кудратов"),
    ],
  },
  {
    content: t("Создание межведомственных рабочих групп при Совете"),
    users: [t("DPM – Дж. Ходжаев"), t("DPM/MEF – Ж. Кучкаров")],
  },
  {
    content: t(
      "Внедрение информационной системы «Платформа единого инвестиционного окна»"
    ),
    users: [t("DPM – Дж. Ходжаев")],
  },
]);
</script>
<template>
  <div>
    <client-only>
      <div class="container">
        <h1 class="lg:text-[64px] text-[32px] uppercase font-black mt-24">
          {{ t("Инициативы по улучшению инвестиционного климата") }}
        </h1>
        <span
          class="block lg:text-lg text-sm font-normal text-[#505A63] lg:pb-24 sm:pb-12 lg:w-[638px] w-full"
          >{{
            t(
              "Каждая инициатива направлена на реформы в налогообложении, энергетике, инвестициях, трудоустройстве и корпоративном управлении"
            )
          }}</span
        >

        <div>
          <el-input
            class="w-full mb-6 lg:mt-0 mt-6"
            v-model="search"
            size="large"
            :placeholder="t('Найти инициативу')"
            :prefix-icon="Search"
            clearable
          />
        </div>
        <div class="lg:flex hidden gap-10 justify-center">
          <div class="lg:w-2/4 w-full mt-3">
            <div class="flex gap-2 mb-6 items-center">
              <el-select
                v-model="yearId"
                label-key="name"
                value-key="id"
                class="lg:w-full w-1/2"
                size="large"
                :placeholder="t('Все годы')"
              >
                <el-option
                  v-for="item in yearList"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                />
              </el-select>
              <el-select
                v-model="workinggroupid"
                label-key="name"
                value-key="id"
                class="lg:w-full w-1/2"
                size="large"
                :placeholder="t('Рабочие группы')"
              >
                <el-option
                  v-for="item in workingGroupList"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                />
              </el-select>
              <el-select
                v-model="directionid"
                label-key="name"
                value-key="id"
                class="lg:w-full w-1/2"
                size="large"
                :placeholder="t('Направления')"
              >
                <el-option
                  v-for="item in directionList"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                />
              </el-select>
            </div>
          </div>
        </div>
        <div class="w-full text-center">
            <p class="lg:text-xl text-base font-normal mb-6">Количество инициатив: <b class="font-semibold">24</b></p>
        </div>
        <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-5">
          <div
            v-for="(item, index) in data"
            :key="index"
            class="bg-[#F7F7F7] rounded-xl p-4 pb-8"
          >
            <span class="lg:text-xl text-base font-normal text-[#000]">{{
              item.content
            }}</span>
            <div class="flex gap-3 flex-wrap mt-5">
              <div
                v-for="(n, i) in item.users"
                :key="i"
                class="bg-[#99ACB5] rounded-[30px] px-4 py-1 text-white lg:text-base text-sm"
              >
                {{ n }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-input__wrapper) {
  border-radius: 32px !important;
  min-height: 46px;
  .el-input__prefix {
    color: #000 !important;
    .el-icon {
      font-size: 16px !important;
    }
  }
}

:deep(.el-select__wrapper) {
  border-radius: 100px;
  padding: 16px 30px;
  min-height: 46px;
  background-color: #ebebf0;
}

:deep(.el-select__placeholder.is-transparent) {
  color: #505a63;
}

:deep(.el-select__caret) {
  color: #505a63;
}
</style>
