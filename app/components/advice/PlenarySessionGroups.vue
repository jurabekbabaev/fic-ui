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
  positionKey: string;
  fullnameKey: string;
  directionKey: string;
}

interface IType {
  id: number;
  icon: string;
  titleKey: string;
  users: IUser[];
}

const data = ref<IType[]>([
  {
    id: 1,
    icon: "icon-reload-zap",
    titleKey: "advice.plenaryGroups.groups.g1.title",
    users: [
      {
        image: Image1,
        positionKey: "advice.plenaryGroups.chairLabel",
        fullnameKey: "advice.plenaryGroups.groups.g1.chair.fullname",
        directionKey: "advice.plenaryGroups.groups.g1.chair.position",
      },
      {
        image: Image2,
        positionKey: "advice.plenaryGroups.coChairLabel",
        fullnameKey: "advice.plenaryGroups.groups.g1.cochair.fullname",
        directionKey: "advice.plenaryGroups.groups.g1.cochair.position",
      },
    ],
  },
  {
    id: 2,
    icon: "icon-book-info",
    titleKey: "advice.plenaryGroups.groups.g2.title",
    users: [
      {
        image: Image3,
        positionKey: "advice.plenaryGroups.chairLabel",
        fullnameKey: "advice.plenaryGroups.groups.g2.chair.fullname",
        directionKey: "advice.plenaryGroups.groups.g2.chair.position",
      },
      {
        image: Image4,
        positionKey: "advice.plenaryGroups.coChairLabel",
        fullnameKey: "advice.plenaryGroups.groups.g2.cochair.fullname",
        directionKey: "advice.plenaryGroups.groups.g2.cochair.position",
      },
    ],
  },
  {
    id: 3,
    icon: "icon-settings-nout",
    titleKey: "advice.plenaryGroups.groups.g3.title",
    users: [
      {
        image: Image5,
        positionKey: "advice.plenaryGroups.chairLabel",
        fullnameKey: "advice.plenaryGroups.groups.g3.chair.fullname",
        directionKey: "advice.plenaryGroups.groups.g3.chair.position",
      },
      {
        image: Image6,
        positionKey: "advice.plenaryGroups.coChairLabel",
        fullnameKey: "advice.plenaryGroups.groups.g3.cochair.fullname",
        directionKey: "advice.plenaryGroups.groups.g3.cochair.position",
      },
    ],
  },
  {
    id: 4,
    icon: "icon-users-message",
    titleKey: "advice.plenaryGroups.groups.g4.title",
    users: [
      {
        image: Image7,
        positionKey: "advice.plenaryGroups.chairLabel",
        fullnameKey: "advice.plenaryGroups.groups.g4.chair.fullname",
        directionKey: "advice.plenaryGroups.groups.g4.chair.position",
      },
      {
        image: Image8,
        positionKey: "advice.plenaryGroups.coChairLabel",
        fullnameKey: "advice.plenaryGroups.groups.g4.cochair.fullname",
        directionKey: "advice.plenaryGroups.groups.g4.cochair.position",
      },
    ],
  },
  {
    id: 5,
    icon: "icon-user-briefcase",
    titleKey: "advice.plenaryGroups.groups.g5.title",
    users: [
      {
        image: Image9,
        positionKey: "advice.plenaryGroups.chairLabel",
        fullnameKey: "advice.plenaryGroups.groups.g5.chair.fullname",
        directionKey: "advice.plenaryGroups.groups.g5.chair.position",
      },
      {
        image: Image10,
        positionKey: "advice.plenaryGroups.coChairLabel",
        fullnameKey: "advice.plenaryGroups.groups.g5.cochair.fullname",
        directionKey: "advice.plenaryGroups.groups.g5.cochair.position",
      },
    ],
  },
  {
    id: 6,
    icon: "icon-chart-line",
    titleKey: "advice.plenaryGroups.groups.g6.title",
    users: [
      {
        image: Image11,
        positionKey: "advice.plenaryGroups.chairLabel",
        fullnameKey: "advice.plenaryGroups.groups.g6.chair.fullname",
        directionKey: "advice.plenaryGroups.groups.g6.chair.position",
      },
      {
        image: Image12,
        positionKey: "advice.plenaryGroups.coChairLabel",
        fullnameKey: "advice.plenaryGroups.groups.g6.cochair.fullname",
        directionKey: "advice.plenaryGroups.groups.g6.cochair.position",
      },
    ],
  },
  {
    id: 7,
    icon: "icon-database-dollar",
    titleKey: "advice.plenaryGroups.groups.g7.title",
    users: [
      {
        image: Image13,
        positionKey: "advice.plenaryGroups.chairLabel",
        fullnameKey: "advice.plenaryGroups.groups.g7.chair.fullname",
        directionKey: "advice.plenaryGroups.groups.g7.chair.position",
      },
      {
        image: Image14,
        positionKey: "advice.plenaryGroups.coChairLabel",
        fullnameKey: "advice.plenaryGroups.groups.g7.cochair.fullname",
        directionKey: "advice.plenaryGroups.groups.g7.cochair.position",
      },
    ],
  },
  {
    id: 8,
    icon: "icon-chart-dollar",
    titleKey: "advice.plenaryGroups.groups.g8.title",
    users: [
      {
        image: Image11,
        positionKey: "advice.plenaryGroups.chairLabel",
        fullnameKey: "advice.plenaryGroups.groups.g8.chair.fullname",
        directionKey: "advice.plenaryGroups.groups.g8.chair.position",
      },
      {
        image: Image15,
        positionKey: "advice.plenaryGroups.coChairLabel",
        fullnameKey: "advice.plenaryGroups.groups.g8.cochair.fullname",
        directionKey: "advice.plenaryGroups.groups.g8.cochair.position",
      },
    ],
  },
  {
    id: 9,
    icon: "icon-database-dollar",
    titleKey: "advice.plenaryGroups.groups.g9.title",
    users: [
      {
        image: Image17,
        positionKey: "advice.plenaryGroups.chairLabel",
        fullnameKey: "advice.plenaryGroups.groups.g9.chair.fullname",
        directionKey: "advice.plenaryGroups.groups.g9.chair.position",
      },
      {
        image: Image18,
        positionKey: "advice.plenaryGroups.coChairLabel",
        fullnameKey: "advice.plenaryGroups.groups.g9.cochair.fullname",
        directionKey: "advice.plenaryGroups.groups.g9.cochair.position",
      },
    ],
  },
  {
    id: 10,
    icon: "icon-chart-dollar",
    titleKey: "advice.plenaryGroups.groups.g10.title",
    users: [
      {
        image: Image16,
        positionKey: "advice.plenaryGroups.chairLabel",
        fullnameKey: "advice.plenaryGroups.groups.g10.chair.fullname",
        directionKey: "advice.plenaryGroups.groups.g10.chair.position",
      },
      {
        image: Image6,
        positionKey: "advice.plenaryGroups.coChairLabel",
        fullnameKey: "advice.plenaryGroups.groups.g10.cochair.fullname",
        directionKey: "advice.plenaryGroups.groups.g10.cochair.position",
      },
    ],
  },
]);

const blockOrder = [8, 7, 6, 5, 4, 3, 2, 1, 9, 10];
const orderedData = computed(() =>
  blockOrder
    .map((id) => data.value.find((item) => item.id === id))
    .filter((item): item is IType => Boolean(item)),
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
        {{ t("advice.plenaryGroups.sectionTitle") }}
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
              {{ t(item.titleKey) }}
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
                    {{ t(child.positionKey) }}
                  </div>
                  <div
                    class="text-[14px] font-bold uppercase leading-tight text-[#191C1F] truncate"
                  >
                    {{ t(child.fullnameKey) }}
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
