<script lang="ts" setup>
import LeaderImage1 from "@/assets/images/leaders/leader1.png";
import LeaderImage3 from "@/assets/images/leaders/leader3.png";
import LeaderImage4 from "@/assets/images/leaders/leader4.png";
import LeaderImage5 from "@/assets/images/leaders/leader5.png";
import LeaderImage6 from "@/assets/images/leaders/leader6.png";
import AcwaPower from "@/assets/images/brands/acwa-power.png";
import TbcBank from "@/assets/images/brands/tbc.png";
import Ipoteka from "@/assets/images/brands/ipoteka.png";
import Uzum from "@/assets/images/brands/uzum.png";
import Acdf from "@/assets/images/brands/acdf-uz.png";
import Ey from "@/assets/images/brands/ey.png";
import Image10 from "@/assets/images/leaders/sandro.png";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
interface IType {
  id: number;
  icon: string;
  contentKey: string;
  image: string;
  fullnameKey: string;
  positionKey: string;
  company_image: string;
}
const data = ref<IType[]>([
  {
    id: 1,
    icon: "icon-reload-zap",
    contentKey: "leadersgroup.groups.energy.content",
    image: LeaderImage6,
    fullnameKey: "leadersgroup.groups.energy.fullname",
    positionKey: "leadersgroup.groups.energy.position",
    company_image: AcwaPower,
  },
  {
    id: 2,
    icon: "icon-database-dollar",
    contentKey: "leadersgroup.groups.finance.content",
    image: LeaderImage1,
    fullnameKey: "leadersgroup.groups.finance.fullname",
    positionKey: "leadersgroup.groups.finance.position",
    company_image: TbcBank,
  },
  {
    id: 3,
    icon: "icon-users-dollar",
    contentKey: "leadersgroup.groups.talent.content",
    image: Image10,
    fullnameKey: "leadersgroup.groups.talent.fullname",
    positionKey: "leadersgroup.groups.talent.position",
    company_image: Ipoteka,
  },
  {
    id: 4,
    icon: "icon-settings-nout",
    contentKey: "leadersgroup.groups.digital.content",
    image: LeaderImage3,
    fullnameKey: "leadersgroup.groups.digital.fullname",
    positionKey: "leadersgroup.groups.digital.position",
    company_image: Uzum,
  },
  {
    id: 5,
    icon: "icon-board",
    contentKey: "leadersgroup.groups.creative.content",
    image: LeaderImage4,
    fullnameKey: "leadersgroup.groups.creative.fullname",
    positionKey: "leadersgroup.groups.creative.position",
    company_image: Acdf,
  },
  {
    id: 6,
    icon: "icon-chart-dollar",
    contentKey: "leadersgroup.groups.investment.content",
    image: LeaderImage5,
    fullnameKey: "leadersgroup.groups.investment.fullname",
    positionKey: "leadersgroup.groups.investment.position",
    company_image: Ey,
  },
]);

const localePath = useLocalePath();
function ViewReadMore(item: IType) {
  const to = localePath({
    path: `/leadersgroup/${item.id}`,
    query: { isuser: "false" },
  });
  navigateTo(to);
}
</script>

<template>
  <div>
    <div class="" id="mwg">
      <h1 class="lg:text-[72px] text-[32px] uppercase font-black">
        {{ t("leadersgroup.workingGroups.title") }}
      </h1>
      <h1 class="lg:text-[48px] text-[32px] uppercase font-black mt-4">
        {{ t("leadersgroup.workingGroups.subtitle") }}
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
        <div
          v-for="(item, index) in data"
          :key="index"
          @click="ViewReadMore(item)"
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
              {{ t(item.contentKey) }}
            </h4>
          </div>

          <!-- Divider -->
          <div class="border-t border-[#0000000D] mt-6 mb-5"></div>

          <!-- Bottom: avatars + name/position + arrow -->
          <div class="flex items-center justify-between gap-3">
            <div class="flex items-center gap-3">
              <!-- Avatars -->
              <div class="flex items-center">
                <div class="diamond-wrapper w-[44px] h-[44px]">
                  <div
                    class="diamond-inner-old bg-white"
                    :style="{ backgroundImage: `url(${item.company_image})` }"
                  ></div>
                </div>
                <div class="diamond-wrapper w-[44px] h-[44px] -ml-4">
                  <div
                    class="diamond-inner"
                    :style="{ backgroundImage: `url(${item.image})` }"
                  ></div>
                </div>
              </div>
              <!-- Name + position -->
              <div class="min-w-0">
                <div
                  class="text-[11px] text-[#000000] font-normal leading-tight mb-0.5"
                >
                  {{ t("leadersgroup.role") }}
                </div>
                <div
                  class="text-xs font-bold uppercase leading-tight text-[#191C1F] truncate"
                >
                  {{ t(item.fullnameKey) }}
                </div>

                <div
                  class="text-[11px] text-[#505A63] leading-snug mt-0.5 line-clamp-2"
                >
                  {{ t(item.positionKey) }}
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
    </div>
  </div>
</template>
<style>
.diamond {
  width: 70px;
  height: 70px;
  transform: rotate(45deg);
  border-radius: 18px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}

.diamond-wrapper {
  width: 70px;
  height: 70px;
  transform: rotate(45deg);
  border-radius: 18px;
  overflow: hidden;
  /* box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15); */
  background: white;
  border: 1.23px solid #0000001a;
}

.diamond-inner {
  width: 100%;
  height: 100%;
  transform: rotate(-45deg) scale(1.4);
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
}

.diamond-inner-old {
  width: 100%;
  height: 100%;
  transform: rotate(-45deg) scale(1);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
