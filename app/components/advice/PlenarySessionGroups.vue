<script lang="ts" setup>
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
const Image1 = img("leaders/jurabek.png");
const Image2 = img("leaders/leader6.png");
const Image3 = img("leaders/farrux.png");
const Image4 = img("leaders/aziz.png");
const Image5 = img("leaders/asadbek.png");
const Image6 = img("leaders/leader5.png");
const Image7 = img("leaders/ilhom.png");
const Image8 = img("leaders/marius.png");
const Image9 = img("leaders/kongratbay.png");
const Image10 = img("leaders/sandro.png");
const Image11 = img("leaders/laziz.png");
const Image12 = img("leaders/vera.png");
const Image13 = img("leaders/timur.png");
const Image14 = img("leaders/davron.png");
const Image15 = img("leaders/kazbek.png");
const Image16 = img("leaders/olimjon.jpg");
const Image17 = img("leaders/aziz-a.png");
const Image18 = img("leaders/mukae.png");

const props = defineProps<{
  sectionId?: string;
}>();

const { t } = useI18n();
const localePath = useLocalePath();

interface IUser {
  image: string;
  position: string;
  fullname: string;
  direction: string;
}

interface IType {
  id: number;
  icon: string;
  content: string;
  users: IUser[];
}

const data = ref<IType[]>([
  {
    id: 1,
    icon: "icon-reload-zap",
    content: t("МРГ по вопросам энергетики"),
    users: [
      {
        image: Image1,
        position: t("Председатель рабочей группы."),
        fullname: t("Мирзамахмудов Джурабек"),
        direction: t("Министр энергетики Республики Узбекистан"),
      },
      {
        image: Image2,
        position: t("Сопредседатель"),
        fullname: t("Джон Заиди"),
        direction: t("Генеральный директор Acwa в Узбекистане"),
      },
    ],
  },
  {
    id: 2,
    icon: "icon-book-info",
    content: t(
      "МРГ по совершенствованию процедур выделения земельных участков"
    ),
    users: [
      {
        image: Image3,
        position: t("Председатель рабочей группы."),
        fullname: t("Фаррух пулатов"),
        direction: t("Директор Кадастрового Агентства"),
      },
      {
        image: Image4,
        position: t("Сопредседатель"),
        fullname: t("Азизбек Ахмаджонов"),
        direction: t("Управляющий партнёр Kosta Legal"),
      },
    ],
  },
  {
    id: 3,
    icon: "icon-settings-nout",
    content: t("МРГ по совершенствованию налогового администрирования"),
    users: [
      {
        image: Image5,
        position: t("Председатель рабочей группы."),
        fullname: t("Ахадбек хайдаров"),
        direction: t("Заместитель Министра Экономики и Финансов"),
      },
      {
        image: Image6,
        position: t("Сопредседатель"),
        fullname: t("Ерлан Досымбеков"),
        direction: t(
          "EY, управляющий партнер EY по Кавказу и Центральной Азии"
        ),
      },
    ],
  },
  {
    id: 4,
    icon: "icon-users-message",
    content: t(
      "МРГ по улучшению корпоративного управления в местных компаниях"
    ),
    users: [
      {
        image: Image7,
        position: t("Председатель рабочей группы."),
        fullname: t("Илхом норкулов"),
        direction: t("заместитель министра экономики и финансов"),
      },
      {
        image: Image8,
        position: t("Сопредседатель"),
        fullname: t("Мариус дан"),
        direction: t(
          "генеральный директор Franklin Templeton по Центральной Азии"
        ),
      },
    ],
  },
  {
    id: 5,
    icon: "icon-user-briefcase",
    content: t(
      "МРГ по подготовке профессиональных кадров для иностранных компаний"
    ),
    users: [
      {
        image: Image9,
        position: t("Председатель рабочей группы."),
        fullname: t("Конгратбай Шарипов"),
        direction: t("министр высшего образования, науки и инноваций"),
      },
      {
        image: Image10,
        position: t("Сопредседатель"),
        fullname: t("Сандро Ртвеладзе"),
        direction: t("Генеральный директор Ipoteka Bank OTP Group"),
      },
    ],
  },
  {
    id: 6,
    icon: "icon-chart-line",
    content: t("МРГ по внедрению принципов ответственного ведения бизнеса"),
    users: [
      {
        image: Image11,
        position: t("Председатель рабочей группы."),
        fullname: t("Лазиз кудратов"),
        direction: t("Министр Инвестиций, Промышленности и Торговли"),
      },
      {
        image: Image12,
        position: t("Сопредседатель"),
        fullname: t("Вера белл"),
        direction: t("Управляющий партнёр Crowe Uzbekistan"),
      },
    ],
  },
  {
    id: 7,
    icon: "icon-database-dollar",
    content: t("МРГ по совершенствованию залогового законодательства"),
    users: [
      {
        image: Image13,
        position: t("Председатель рабочей группы."),
        fullname: t("Тимур ишметов"),
        direction: t("Председатель Центрального банка"),
      },
      {
        image: Image14,
        position: t("Сопредседатель"),
        fullname: t("Даврон Якубов"),
        direction: t("Управляющий партнёр BDO Uzbekistan"),
      },
    ],
  },
  {
    id: 8,
    icon: "icon-chart-dollar",
    content: t(
      "МРГ по разработке законопроекта Об альтернативных инвестиционных фондах"
    ),
    users: [
      {
        image: Image11,
        position: t("Председатель рабочей группы."),
        fullname: t("Лазиз кудратов"),
        direction: t("Министр Инвестиций, Промышленности и Торговли"),
      },
      {
        image: Image15,
        position: t("Сопредседатель"),
        fullname: t("Казбек бассиев"),
        direction: t(
          "Старший вице-президент Vision Invest и глава представительства в Узбекистане"
        ),
      },
    ],
  },
  {
    id: 9,
    icon: "icon-database-dollar",
    content: t("МРГ по циркулярной экономике"),
    users: [
      {
        image: Image17,
        position: t("Председатель рабочей группы."),
        fullname: t("Азиз Абдухакимов"),
        direction: t(
          "Председатель Национального комитета по экологии и изменению климата"
        ),
      },
      {
        image: Image18,
        position: t("Сопредседатель"),
        fullname: t("Казумаса Мукае"),
        direction: t("Главный менеджер Coca-Cola Узбекистан"),
      },
    ],
  },
  {
    id: 10,
    icon: "icon-chart-dollar",
    content: t("МРГ по развитию искусственного интеллекта"),
    users: [
      {
        image: Image16,
        position: t("Председатель рабочей группы."),
        fullname: t("Олимжон Умаров"),
        direction: t("Заместитель министра цифровых технологий"),
      },
      {
        image: Image6,
        position: t("Сопредседатель"),
        fullname: t("Ерлан Досымбеков"),
        direction: t(
          "Управляющий партнер ЕС для ЕС, Кавказа и Центральной Азии"
        ),
      },
    ],
  },
]);

const blockOrder = [8, 7, 6, 5, 4, 3, 2, 1, 9, 10];
const orderedData = computed(() =>
  blockOrder
    .map((id) => data.value.find((item) => item.id === id))
    .filter((item): item is IType => Boolean(item))
);

function readMore(item: IType) {
  const to = localePath({
    path: `/advice/show/${item.id}`,
  });
  navigateTo(to);
}
</script>

<template>
  <div :id="sectionId">
    <client-only>
      <h1 class="lg:text-[48px] text-[32px] uppercase font-black mb-12 mt-24">
        {{ t("межведомственные рабочие группы (МРГ)") }}
      </h1>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-8">
        <div
          v-for="(item, index) in orderedData"
          :key="index"
          @click="readMore(item)"
          class="group bg-[#F7F7F7] hover:bg-[#EFEFEF] transition-colors duration-200 rounded-2xl p-6 lg:p-7 flex flex-col cursor-pointer"
        >
          <!-- Top: icon + title -->
          <div class="flex items-center gap-3 flex-1">
            <i
              :class="item.icon"
              class="text-2xl text-[#505A63] mt-0.5 shrink-0"
            ></i>
            <h4
              class="text-sm font-semibold text-[#191C1F] uppercase leading-snug"
            >
              {{ item.content }}
            </h4>
          </div>

          <!-- Divider -->
          <div class="border-t border-[#0000000D] mt-6 mb-5"></div>

          <!-- Bottom: 2 users + arrow -->
          <div class="flex items-end justify-between gap-3">
            <div class="flex flex-col gap-3 min-w-0">
              <div
                v-for="(child, i) in item.users"
                :key="i"
                class="flex items-center gap-3"
              >
                <div class="diamond-wrapper w-[95px] h-[95px] shrink-0">
                  <div
                    class="diamond-inner-advice bg-white"
                    :style="{ backgroundImage: `url(${child.image})` }"
                  ></div>
                </div>
                <div class="min-w-0">
                  <div class="text-[12px] text-[#505A63] leading-tight">
                    {{ child.position }}
                  </div>
                  <div
                    class="text-[14px] font-bold uppercase leading-tight text-[#191C1F] truncate"
                  >
                    {{ child.fullname }}
                  </div>
                </div>
              </div>
            </div>
            <!-- Arrow -->
            <i
              class="icon-move-right text-lg text-[#505A63] shrink-0 group-hover:translate-x-1 transition-transform duration-200"
            ></i>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<style scoped>
.diamond-wrapper {
  width: 75px;
  height: 75px;
  transform: rotate(45deg);
  border-radius: 22px;
  overflow: hidden;
  background: white;
  border: 1.23px solid #0000001a;
}

.diamond-inner-advice {
  width: 100%;
  height: 100%;
  transform: rotate(-45deg) scale(1.2);
  background-size: cover;
  background-position: center;
}
</style>
