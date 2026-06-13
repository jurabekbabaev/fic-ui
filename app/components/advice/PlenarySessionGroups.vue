<script lang="ts" setup>
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import Image1 from "@/assets/images/leaders/jurabek.png";
import Image2 from "@/assets/images/leaders/leader6.png";
import Image3 from "@/assets/images/leaders/farrux.png";
import Image4 from "@/assets/images/leaders/aziz.png";
import Image5 from "@/assets/images/leaders/asadbek.png";
import Image6 from "@/assets/images/leaders/leader5.png";
import Image7 from "@/assets/images/leaders/ilhom.png";
import Image8 from "@/assets/images/leaders/marius.png";
import Image9 from "@/assets/images/leaders/kongratbay.png";
import Image10 from "@/assets/images/leaders/sandro.png";
import Image11 from "@/assets/images/leaders/laziz.png";
import Image12 from "@/assets/images/leaders/vera.png";
import Image13 from "@/assets/images/leaders/timur.png";
import Image14 from "@/assets/images/leaders/davron.png";
import Image15 from "@/assets/images/leaders/kazbek.png";
import Image16 from "@/assets/images/leaders/olimjon.jpg";
import Image17 from "@/assets/images/leaders/aziz-a.png";
import Image18 from "@/assets/images/leaders/mukae.png";

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
        position: t("Председатель"),
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
        position: t("Председатель"),
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
        position: t("Председатель"),
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
        position: t("Председатель"),
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
        position: t("Председатель"),
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
        position: t("Председатель"),
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
        position: t("Председатель"),
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
        position: t("Председатель"),
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
        position: t("Председатель"),
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
        position: t("Председатель"),
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
