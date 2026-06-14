<script lang="ts" setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

interface ISession {
  id: number;
  sessionid: string;
  sessionKey: string;
  yearKey: string;
  titleKey: string;
  bgcolor: string;
  txtcolor: string;
  groupKeys: string[];
  isView: boolean;
}

const data = ref<ISession[]>([
  {
    id: 1,
    sessionid: "III",
    sessionKey: "s3",
    yearKey: "advice.interworkingGroups.sessions.s3.year",
    titleKey: "advice.interworkingGroups.sessions.s3.title",
    bgcolor: "bg-[#2D4CC5]",
    txtcolor: "text-white",
    isView: true,
    groupKeys: [
      "advice.interworkingGroups.groups.s3.g1",
      "advice.interworkingGroups.groups.s3.g2",
      "advice.interworkingGroups.groups.s3.g3",
      "advice.interworkingGroups.groups.s3.g4",
      "advice.interworkingGroups.groups.s3.g5",
      "advice.interworkingGroups.groups.s3.g6",
      "advice.interworkingGroups.groups.s3.g7",
      "advice.interworkingGroups.groups.s3.g8",
      "advice.interworkingGroups.groups.s3.g9",
      "advice.interworkingGroups.groups.s3.g10",
    ],
  },
  {
    id: 2,
    sessionid: "II",
    sessionKey: "s2",
    yearKey: "advice.interworkingGroups.sessions.s2.year",
    titleKey: "advice.interworkingGroups.sessions.s2.title",
    bgcolor: "bg-[#D5DAEB]",
    txtcolor: "text-[#040C2A]",
    isView: false,
    groupKeys: [
      "advice.interworkingGroups.groups.s2.g1",
      "advice.interworkingGroups.groups.s2.g2",
      "advice.interworkingGroups.groups.s2.g3",
      "advice.interworkingGroups.groups.s2.g4",
      "advice.interworkingGroups.groups.s2.g5",
      "advice.interworkingGroups.groups.s2.g6",
      "advice.interworkingGroups.groups.s2.g7",
      "advice.interworkingGroups.groups.s2.g8",
    ],
  },
  {
    id: 3,
    sessionid: "I",
    sessionKey: "s1",
    yearKey: "advice.interworkingGroups.sessions.s1.year",
    titleKey: "advice.interworkingGroups.sessions.s1.title",
    bgcolor: "bg-[#D5DAEB]",
    txtcolor: "text-[#040C2A]",
    isView: false,
    groupKeys: [
      "advice.interworkingGroups.groups.s1.g1",
      "advice.interworkingGroups.groups.s1.g2",
      "advice.interworkingGroups.groups.s1.g3",
      "advice.interworkingGroups.groups.s1.g4",
      "advice.interworkingGroups.groups.s1.g5",
      "advice.interworkingGroups.groups.s1.g6",
      "advice.interworkingGroups.groups.s1.g7",
    ],
  },
]);

const localePath = useLocalePath();
function ViewReadMore(item: ISession) {
  const sectionMap: Record<number, string> = {
    1: "plenary-2025",
    2: "plenary-2024",
    3: "plenary-2022",
  };
  const to = localePath({
    path: `/plenarysessions`,
    query: { target: sectionMap[item.id] || "plenary-2025" },
  });
  navigateTo(to);
}
</script>
<template>
  <section>
    <client-only>
      <div class="mb-12" id="rops">
        <h2 class="lg:text-[54px] text-[32px] uppercase font-black mb-12 mt-24" section-id="rops">
          {{ t("advice.interworkingGroups.sectionTitle") }}
        </h2>
        <div class="flex flex-col gap-5">
          <div
            class="bg-[#F7F7F7] flex flex-col sm:flex-row rounded-xl overflow-hidden"
            v-for="(item, index) in [...data].reverse()"
            :key="index"
          >
            <!-- Left: session badge -->
            <div
              class="w-full sm:w-[220px] shrink-0 flex flex-col justify-center items-center py-8 px-6 uppercase"
              :class="[item.bgcolor, item.txtcolor]"
            >
              <div class="font-black text-[40px] sm:text-[60px] lg:text-[80px] leading-none text-center">
                {{ item.sessionid }}
              </div>
              <p class="text-sm font-medium mt-2 text-center">{{ t(item.titleKey) }}</p>
              <p class="text-xs font-normal mt-1 text-center opacity-80">{{ t(item.yearKey) }}</p>
            </div>

            <!-- Right: content -->
            <div class="flex-1 p-5 flex flex-col">
              <ul class="list-disc pl-5 text-[#505A63] font-normal text-base flex-1">
                <li v-for="(groupKey, i) in item.groupKeys" :key="i" class="mb-1">{{ t(groupKey) }}</li>
              </ul>
              <span
                @click="ViewReadMore(item)"
                class="text-sm font-normal text-[#191C1F] flex justify-end items-center gap-2.5 hover:underline cursor-pointer mt-4 pt-4 border-t border-[#0000001A]"
              >
                <span>{{ t("advice.interworkingGroups.viewMore") }}</span>
                <i class="icon-move-right"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </section>
</template>

<style></style>
