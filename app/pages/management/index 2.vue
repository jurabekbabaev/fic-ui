<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import Management1 from "@/assets/images/management/image11.png";
import Management2 from "@/assets/images/management/image12.png";
import User1 from "@/assets/images/management/mng1.png";
import User2 from "@/assets/images/management/mng2.png";
import User3 from "@/assets/images/management/mng3.png";
import User4 from "@/assets/images/management/mng4.png";
import User5 from "@/assets/images/management/mng5.png";
import User6 from "@/assets/images/management/mng6.png";
import User7 from "@/assets/images/management/mng7.png";
import WLocaleLink from "~/components/shared/WLocaleLink.vue";

useHead({
  title: `${t("management.council.title")} | ${t("management.meta.titleSuffix")}`,
});

const data = ref([
  {
    id: 1,
    image: Management2,
    fullname: "management.council.members.mirziyoyev.fullname",
    position: "management.council.members.mirziyoyev.position",
  },
  {
    id: 2,
    image: Management1,
    fullname: "management.council.members.renaudBasso.fullname",
    position: "management.council.members.renaudBasso.position",
  },
]);

const comitetdata = ref([
  {
    id: 1,
    image: User1,
    fullname: "management.committee.members.kudratov.fullname",
    position: "management.committee.members.kudratov.position",
  },
  {
    id: 2,
    image: User5,
    fullname: "management.committee.members.aranitasiAlt.fullname",
    position: "management.committee.members.aranitasiAlt.position",
  },
  {
    id: 3,
    image: User2,
    fullname: "management.committee.members.gafurov.fullname",
    position: "management.committee.members.gafurov.position",
  },
  {
    id: 4,
    image: User7,
    fullname: "management.committee.members.masatoKanda.fullname",
    position: "management.committee.members.masatoKanda.position",
  },
  {
    id: 5,
    image: User4,
    fullname: "management.committee.members.mccain.fullname",
    position: "management.committee.members.mccain.position",
  },
]);

const secretariatdata = ref([
  {
    id: 1,
    image: User3,
    fullname: "management.association.members.mullajonov.fullname",
    position: "management.association.members.mullajonov.position",
  },
  {
    id: 2,
    image: User6,
    fullname: "management.association.members.abidova.fullname",
    position: "management.association.members.abidova.position",
  },
  {
    id: 3,
    image: User2,
    fullname: "management.association.members.gafurov.fullname",
    position: "management.association.members.gafurov.position",
  },
]);
</script>
<template>
  <div>
    <client-only>
      <div class="container">
        <div
          class="rounded-[32px] border-1 border-[#0000001A] mt-[80px] mb-[50px]"
        >
          <!-- council section -->
          <div>
            <h1
              class="lg:text-[64px] text-[32px] uppercase font-black text-center mt-[80px] mb-14"
            >
              {{ t("management.council.title") }}
            </h1>
            <div
              class="bg-[#0000000D] border-1 mb-[80px] border-[#0000001A] rounded-[32px] lg:w-[1014px] w-full m-auto relative flex justify-center mt-[241px]"
            >
              <div
                class="grid grid-cols-2 lg:w-[734px] w-full m-auto gap-5 absolute top-[-217px] p-3"
              >
                <div
                  class="border-1 border-[#0000001A] p-4 rounded-2xl bg-white"
                  v-for="(item, i) in data"
                  :key="i"
                >
                  <img
                    :src="item.image"
                    alt=""
                    class="bg-[#8389A4] rounded-2xl w-full object-cover lg:h-[324px] h-[140px] object-top"
                  />
                  <span
                    class="block lg:text-lg text-base font-medium tracking-[-2%] text-[#000000] mt-3"
                    >{{ t(item.fullname) }}</span
                  >
                  <div
                    class="flex justify-center items-center p-2 rounded-sm bg-[#0000001A] h-[34px] mt-3"
                    style="width: fit-content"
                  >
                    <span
                      class="text-[#000000] lg:text-sm text-xs font-normal"
                      >{{ t(item.position) }}</span
                    >
                  </div>
                </div>
              </div>

              <!--  -->
              <div class="lg:mt-[220px] mt-[100px] w-full px-3">
                <h1
                  class="lg:text-[44px] text-[24px] uppercase font-black text-center mt-[80px] mb-14"
                >
                  {{ t("management.council.sectionTitle") }}
                </h1>
                <div
                  class="grid lg:grid-cols-2 grid-cols-1 lg:w-[734px] w-full m-auto gap-5 mt-6 lg:!mb-[140px] !mb-[60px]"
                >
                  <div
                    class="bg-white rounded-xl p-4 lg:h-[232px] h-auto flex flex-col justify-between"
                  >
                    <div>
                      <div
                        class="lg:text-[28px] text-lg font-extrabold uppercase text-[#191C1F]"
                      >
                        {{ t("management.council.foreignSide.title") }}
                      </div>
                      <span
                        class="block lg:text-lg text-base font-medium tracking-[-2%] text-[#8E8E93] mt-4"
                        >{{ t("management.council.foreignSide.founders") }}</span
                      >
                      <span
                        class="block lg:text-lg text-base font-medium tracking-[-2%] text-[#8E8E93]"
                        >{{ t("management.council.foreignSide.fullMembers") }}</span
                      >
                      <span
                        class="block lg:text-lg text-base font-medium tracking-[-2%] text-[#8E8E93]"
                        >{{ t("management.council.foreignSide.observers") }}</span
                      >
                    </div>
                    <div>
                      <WLocaleLink
                        to="/becomemember"
                        class="flex gap-1 text-sm font-normal items-center lg:justify-items-start justify-end sm:text-right"
                      >
                        <span>{{ t("management.council.foreignSide.learnMore") }}</span>
                        <i class="icon-move-right"></i>
                      </WLocaleLink>
                    </div>
                  </div>
                  <div
                    class="bg-white rounded-xl p-4 lg:h-[232px] h-auto flex flex-col justify-between"
                  >
                    <div>
                      <div
                        class="lg:text-[28px] text-lg font-extrabold uppercase text-[#191C1F]"
                      >
                        {{ t("management.council.uzbekSide.title") }}
                      </div>
                      <span
                        class="block lg:text-lg text-base font-medium tracking-[-2%] text-[#8E8E93] mt-4"
                        >{{ t("management.council.uzbekSide.participants") }}</span
                      >
                    </div>
                    <div>
                      <WLocaleLink
                        to="/uzbekside"
                        class="flex gap-1 text-sm font-normal items-center lg:justify-items-start justify-end sm:text-right"
                      >
                        <span>{{ t("management.council.uzbekSide.learnMore") }}</span>
                        <i class="icon-move-right"></i>
                      </WLocaleLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- executive committee -->
          <div
            class="bg-[#0000000D] border-1 border-[#0000001A] rounded-[32px] lg:w-[1300px] w-full m-auto my-[80px] lg:px-[60px] py-[60px] px-3"
          >
            <h1
              class="lg:text-[44px] text-[24px] uppercase font-black text-center mb-14"
            >
              {{ t("management.committee.title") }}
            </h1>
            <div class="flex flex-wrap justify-center gap-5">
              <div
                class="bg-white rounded-xl border-1 border-[#0000001A] h-[108px] p-4 flex gap-4 items-start lg:w-[32%] w-full"
                v-for="item in comitetdata"
                :key="item.id"
              >
                <img
                  :src="item.image"
                  alt=""
                  class="w-[76px] h-[76px] rounded-xl object-cover"
                />
                <div>
                  <p
                    class="lg:text-lg text-base font-bold text-[#191C1F] leading-[110%]"
                  >
                    {{ t(item.fullname) }}
                  </p>
                  <span
                    class="block lg:text-sm text-xs font-normal leading-[120%] text-[#505A63] mt-1"
                    >{{ t(item.position) }}</span
                  >
                </div>
              </div>
            </div>
            <div class="flex w-full justify-center mt-6">
              <WLocaleLink to="/foreigninvestors" class="btn btn-secondary"
                >{{ t("management.committee.learnMore") }}</WLocaleLink
              >
            </div>
          </div>

          <!-- association / secretariat -->
          <div
            class="bg-[#0000000D] border-1 border-[#0000001A] rounded-[32px] lg:w-[940px] w-full m-auto my-[80px] lg:px-[60px] py-[60px] px-3"
          >
            <h1
              class="lg:text-[44px] text-[24px] uppercase font-black text-center mb-14"
            >
              {{ t("management.association.title") }}
            </h1>
            <div class="flex flex-wrap-reverse justify-center gap-5 w-full">
              <div
                class="bg-white rounded-xl border-1 border-[#0000001A] h-[108px] p-4 flex gap-4 items-start lg:w-[48%] w-full"
                v-for="item in secretariatdata"
                :key="item.id"
              >
                <img
                  :src="item.image"
                  alt=""
                  class="w-[76px] h-[76px] rounded-xl object-cover"
                />
                <div>
                  <p
                    class="lg:text-lg text-base font-bold text-[#191C1F] leading-[110%]"
                  >
                    {{ t(item.fullname) }}
                  </p>
                  <span
                    class="block lg:text-sm text-xs font-normal leading-[120%] text-[#505A63] mt-1"
                    >{{ t(item.position) }}</span
                  >
                </div>
              </div>
            </div>
            <div class="flex w-full justify-center mt-6">
              <WLocaleLink to="/secretariat" class="btn btn-secondary"
                >{{ t("management.association.learnMore") }}</WLocaleLink
              >
            </div>
          </div>

          <!-- working groups -->
          <div
            class="bg-[#0000000D] border-1 border-[#0000001A] rounded-[32px] lg:w-[940px] w-full m-auto my-[80px] lg:px-[60px] py-[60px] px-3"
          >
            <h1
              class="lg:text-[44px] text-[24px] uppercase font-black text-center mb-14"
            >
              {{ t("management.workingGroups.title") }}
            </h1>
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
              <div
                class="bg-white rounded-2xl p-4 flex flex-col justify-between"
              >
                <div>
                  <p
                    class="lg:text-[28px] text-lg uppercase font-extrabold text-[#191C1F] pb-4"
                  >
                    {{ t("management.workingGroups.mainTitle") }}
                  </p>
                  <span class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block">{{ t("management.workingGroups.main.energy") }}</span>
                  <span class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block">{{ t("management.workingGroups.main.finance") }}</span>
                  <span class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block">{{ t("management.workingGroups.main.talent") }}</span>
                  <span class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block">{{ t("management.workingGroups.main.digital") }}</span>
                  <span class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block">{{ t("management.workingGroups.main.creative") }}</span>
                  <span class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block">{{ t("management.workingGroups.main.climate") }}</span>
                </div>
                <WLocaleLink
                  to="/advice"
                  class="flex items-center gap-1 text-sm font-normal text-[#191C1F] mt-4"
                >
                  <span>{{ t("management.workingGroups.learnMore") }}</span>
                  <i class="icon-move-right"></i>
                </WLocaleLink>
              </div>
              <div
                class="bg-white rounded-2xl p-4 flex flex-col justify-between"
              >
                <div>
                  <p
                    class="lg:text-[28px] text-lg uppercase font-extrabold text-[#191C1F] pb-4"
                  >
                    {{ t("management.workingGroups.interagencyTitle") }}
                  </p>
                  <span class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block">{{ t("management.workingGroups.interagency.energyIwg") }}</span>
                  <span class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block">{{ t("management.workingGroups.interagency.land") }}</span>
                  <span class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block">{{ t("management.workingGroups.interagency.tax") }}</span>
                  <span class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block">{{ t("management.workingGroups.interagency.governance") }}</span>
                  <span class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block">{{ t("management.workingGroups.interagency.personnel") }}</span>
                  <span class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block">{{ t("management.workingGroups.interagency.rbc") }}</span>
                  <span class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block">{{ t("management.workingGroups.interagency.pledge") }}</span>
                  <span class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block">{{ t("management.workingGroups.interagency.aif") }}</span>
                </div>
                <WLocaleLink
                  to="/advice/1"
                  class="flex items-center gap-1 text-sm font-normal text-[#191C1F] mt-4"
                >
                  <span>{{ t("management.workingGroups.learnMore") }}</span>
                  <i class="icon-move-right"></i>
                </WLocaleLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<style></style>
