<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { ref } from "vue";
import LeaderImage1 from "@/assets/images/leaders/leader1.png";
import LeaderImage2 from "@/assets/images/leaders/leader2.png";
import LeaderImage3 from "@/assets/images/leaders/leader3.png";
import LeaderImage4 from "@/assets/images/leaders/leader4.png";
import LeaderImage5 from "@/assets/images/leaders/leader5.png";
import LeaderImage6 from "@/assets/images/leaders/leader6.png";
import WorkingGroup from "./workinggroup.vue";


const leaderList = ref([
  {
    id: 1,
    image: LeaderImage1,
    fullnameKey: "leadersgroup.leaders.tetrashvili.fullname",
    positionKey: "leadersgroup.leaders.tetrashvili.position",
    directionKey: "leadersgroup.leaders.tetrashvili.direction",
  },
  {
    id: 2,
    image: LeaderImage2,
    fullnameKey: "leadersgroup.leaders.rukavishnikov.fullname",
    positionKey: "leadersgroup.leaders.rukavishnikov.position",
    directionKey: "leadersgroup.leaders.rukavishnikov.direction",
  },
  {
    id: 3,
    image: LeaderImage3,
    fullnameKey: "leadersgroup.leaders.salikov.fullname",
    positionKey: "leadersgroup.leaders.salikov.position",
    directionKey: "leadersgroup.leaders.salikov.direction",
  },
  {
    id: 4,
    image: LeaderImage4,
    fullnameKey: "leadersgroup.leaders.umerova.fullname",
    positionKey: "leadersgroup.leaders.umerova.position",
    directionKey: "leadersgroup.leaders.umerova.direction",
  },
  {
    id: 5,
    image: LeaderImage5,
    fullnameKey: "leadersgroup.leaders.dosimbekov.fullname",
    positionKey: "leadersgroup.leaders.dosimbekov.position",
    directionKey: "leadersgroup.leaders.dosimbekov.direction",
  },
  {
    id: 6,
    image: LeaderImage6,
    fullnameKey: "leadersgroup.leaders.zaidi.fullname",
    positionKey: "leadersgroup.leaders.zaidi.position",
    directionKey: "leadersgroup.leaders.zaidi.direction",
  },
]);

const localePath = useLocalePath();
function View(item) {
  const to = localePath({ path: `/leadersgroup/${item.id}`, query: { isuser: 'true' } });
  navigateTo(to);
}
</script>
<template>
  <div>
    <client-only>
    <div class="container">
      <WorkingGroup />
      <!-- <div>
        <div>
          <h1
            class="lg:text-[64px] text-[32px] uppercase font-black mb-12 mt-[100px]"
          >
            {{ t('leadersgroup.pageTitle') }}
          </h1>
        </div>
        <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-x-32 gap-y-14">
          <div v-for="item in leaderList" :key="item.id">
            <div class="flex gap-8 items-center">
              <img :src="item.image" alt="" />
              <div>
                <span
                  class="block lg:text-2xl text-sm text-[#191C1F] font-medium"
                  >{{ t(item.directionKey) }}</span
                >
                <span @click="View(item)" class="cursor-pointer">
                  <h4
                    class="block lg:text-[28px] text-lg text-[#191C1F] font-medium uppercase mt-2.5"
                    >{{ t(item.fullnameKey) }}</h4
                  >
                </span>
                <span
                  class="block lg:text-base text-xs text-[#505A63] font-normal"
                  >{{ t(item.positionKey) }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
    </client-only>
  </div>
</template>

<style></style>
