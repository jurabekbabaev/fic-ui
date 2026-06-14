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
    fullname: "management.committee.members.aranitasi.fullname",
    position: "management.committee.members.aranitasi.position",
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
    fullname: "management.committee.members.laoAraya.fullname",
    position: "management.committee.members.laoAraya.position",
  },
  {
    id: 5,
    image: User4,
    fullname: "management.committee.members.mccain.fullname",
    position: "management.committee.members.mccain.position",
  },
]);

</script>
<template>
  <div>
    <client-only>
      <div class="container">
        <div
          class="rounded-[32px] border-[#0000001A] mb-[50px]"
        >
          <!-- council section -->
          <div>
            <h1
              class="lg:text-[64px] text-[32px] uppercase font-black text-center mt-[100px] mb-8"
            >
              {{ t("management.council.title") }}
            </h1>
            <p
              class="text-base lg:text-lg text-[#505A63] font-normal leading-[170%] text-center lg:max-w-[860px] w-full mx-auto mb-14"
            >
              {{ t("management.hero.description") }}
            </p>
            <div
              class="bg-white mb-[80px] border-[#0000001A] rounded-[32px] w-full max-w-[1014px] m-auto relative flex justify-center mt-[241px]"
            >
              <div
                class="grid grid-cols-1 sm:grid-cols-2 w-full max-w-[734px] m-auto gap-5 absolute top-[-217px] p-3"
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
              <div class="lg:mt-[220px] mt-[100px] w-full px-3 bg-white rounded-b-[32px]"></div>

            </div>
          </div>

          <!-- executive committee -->
          <div
            class="bg-[#0000000D] border-1 border-[#0000001A] rounded-[32px] w-full max-w-[1300px] m-auto my-[80px] lg:px-[60px] py-[60px] px-3"
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

        </div>
      </div>
    </client-only>
  </div>
</template>

<style></style>
