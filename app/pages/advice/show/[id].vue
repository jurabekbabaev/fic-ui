<script lang="ts" setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import { getLeaderList } from "../../../../data/leaderList";
import type { ILeaderGroup } from "../../../../types/leaders";

const leaderList = ref<ILeaderGroup[]>(getLeaderList(t));

const route = useRoute();
const leaderId = computed(() => parseInt(route.params.id as string));
const isuser = computed(
  () => route.query.isuser === "true" || route.query.isuser === (true as any)
);

const currentLeader = computed(() => {
  return leaderList.value.find((leader) =>
    isuser.value
      ? leader.id === leaderId.value
      : leader.directionid === leaderId.value
  );
});

function goBack() {
  const localePath = useLocalePath();
  const to = localePath("/advice");
  navigateTo(to);
}
</script>

<template>
  <div>
    <client-only>
      <div class="container">
        <div class="mt-10 mb-12">
          <button
            @click="goBack"
            class="flex items-center gap-2 text-[#505A63] hover:text-[#191C1F] transition-colors mb-8 cursor-pointer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {{ t("Назад к списку лидеров") }}
          </button>
        </div>

        <div v-if="currentLeader" class="">
          <div
            class="bg-[#191C1F1A] rounded-sm p-2 flex justify-center items-center"
            style="width: fit-content"
          >
            <span class="text-sm font-normal text-[#191C1F]">{{
              t("Состав межведомственной рабочей группы")
            }}</span>
          </div>
          <h1
            class="mt-4 lg:text-[64px] text-[32px] text-[#191C1F] font-extrabold uppercase"
          >
            {{ currentLeader.direction }}
          </h1>
          <p class="lg:text-base text-sm text-[#505A63] mt-4">
            {{ currentLeader.directiondesc }}
          </p>
          <div class="flex flex-col lg:flex-row gap-5 items-start mt-[30px]">
            <div class="w-full lg:w-1/2 flex">
              <div class="leader-image-frame shrink-0">
                <img
                  :src="currentLeader.image"
                  :alt="currentLeader.fullname"
                  class="leader-image"
                />
              </div>
              <div class="ml-5">
                <div>
                  <p class="text-sm text-[#000000] mb-0.5 font-normal">
                    {{ currentLeader.team_position }}
                  </p>
                </div>
                <h1
                  class="lg:text-[32px] text-2xl font-extrabold text-[#191C1F] mb-1 uppercase"
                >
                  {{ currentLeader.fullname }}
                </h1>
                <p class="text-xs font-normal text-[#505A63]">
                  {{ currentLeader.position }}
                </p>
              </div>
            </div>

            <div class="lg:w-1/2 sm:w-full">
              <div class="mt-1">
                <div>
                  <p class="lg:text-base text-sm text-[#505A63]">
                    {{ currentLeader.text }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col lg:flex-row gap-5 items-start mt-[30px]">
            <div class="w-full lg:w-1/2 flex">
              <div class="leader-image-frame shrink-0">
                <img
                  :src="currentLeader.partner_image"
                  :alt="currentLeader.fullname"
                  class="leader-image"
                />
              </div>
              <div class="ml-5">
                <div>
                  <p class="text-sm text-[#000000] mb-0.5 font-normal">
                    {{ currentLeader.partner_team_position }}
                  </p>
                </div>
                <h1
                  class="lg:text-[32px] text-2xl font-extrabold text-[#191C1F] mb-1 uppercase"
                >
                  {{ currentLeader.partner_name }}
                </h1>
                <p class="text-xs font-normal text-[#505A63]">
                  {{ currentLeader.partner_position }}
                </p>
              </div>
            </div>

            <div class="lg:w-1/2 sm:w-full">
              <div class="mt-1">
                <div>
                  <p class="lg:text-base text-sm text-[#505A63]">
                    {{ currentLeader.partner_text }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="text-center mt-[100px]">
          <h2 class="text-2xl font-bold text-[#191C1F] mb-4">
            {{ t("Лидер не найден") }}
          </h2>
          <p class="text-[#505A63] mb-8">
            {{ t("Запрашиваемый лидер не существует") }}
          </p>
          <button
            @click="goBack"
            class="bg-[#191C1F] text-white px-6 py-3 rounded-lg hover:bg-[#2a2f33] transition-colors"
          >
            {{ t("Вернуться к списку") }}
          </button>
        </div>
        <!-- Назначенные руководители -->
        <div>
          <h1
            class="text-left lg:text-[64px] text-[32px] text-[#191C1F] uppercase font-extrabold mb-12 mt-[100px]"
          >
            {{ t("Со стороны государства") }}
          </h1>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div
              class="min-h-[201px] border-1 border-[#00000066] rounded-xl p-4 text-center"
              v-for="(user, i) in currentLeader?.users"
              :key="i"
            >
              <img :src="user.image" alt="" class="user-image" />
              <p class="mt-2 text-[20px] font-bold leading-[120%]">
                {{ user.fullname }}
              </p>
              <span
                class="mt-0.5 text-sm text-[#505A63] leading-[140%] font-normal"
                >{{ user.position }}</span
              >
            </div>
          </div>
        </div>

        <!--  -->
        <div>
          <h1
            class="text-left lg:text-[64px] text-[32px] text-[#191C1F] uppercase font-extrabold mb-12 mt-[100px]"
          >
            {{ t("со стороны совета") }}
          </h1>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div
              v-for="(item, index) in currentLeader?.brands"
              :key="index"
              class="border border-solid border-gray-500 rounded-xl bg-white flex items-center justify-center h-[162px]"
            >
              <img :src="item" alt="" />
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<style scoped>
.leader-image-frame {
  width: 324px;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 32px;
}

.leader-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.user-image {
  width: 93px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  overflow: hidden;
  border-radius: 24px;
  display: block;
  margin: 0 auto;
}

@media (max-width: 1023px) {
  .leader-image-frame {
    width: 180px;
  }
}

@media (max-width: 639px) {
  .leader-image-frame {
    width: 120px;
  }
}
</style>
