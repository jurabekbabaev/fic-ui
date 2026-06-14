<script setup lang="ts">
import type {
  PlenarySessionDetail,
  PlenarySessionLocale,
} from "@/constants/plenarySessionDetails";
import { useI18n } from "vue-i18n";
import PlenarySessionCollage from "@/components/plenarysessions/PlenarySessionCollage.vue";

const props = defineProps<{
  session: PlenarySessionDetail;
}>();

const { locale, t } = useI18n();

const currentLocale = computed<PlenarySessionLocale>(() => {
  return ["uz", "ru", "en"].includes(locale.value)
    ? (locale.value as PlenarySessionLocale)
    : "ru";
});

const localizedText = computed(() => {
  return props.session.localizedText?.[currentLocale.value] ?? {
    summary: props.session.summary,
    content: props.session.content,
  };
});

const localizedMeta = computed(() => {
  return props.session.localizedMeta?.[currentLocale.value] ?? {
    cardTitle: props.session.cardTitle,
    eyebrow: props.session.eyebrow,
    title: props.session.title,
  };
});

const localizedRoadmap = computed(() => {
  return props.session.roadmap?.[currentLocale.value] ?? props.session.roadmap?.ru;
});

useHead(() => ({
  title: `${localizedMeta.value.title} | FIC`,
}));
</script>

<template>
  <section class="container pb-18 pt-8 lg:pb-24 lg:pt-14">
    <div class="mx-auto max-w-[1200px]">
      <PlenarySessionCollage
        :images="session.collageImages"
        :eyebrow="localizedMeta.eyebrow"
        :title="localizedMeta.title"
      />

      <div class="mx-auto mt-10 max-w-[880px] lg:mt-14">
        <p v-if="session.sessionNote" class="text-sm leading-6 text-[#505A63]">
          {{ t(session.sessionNote) }}
        </p>

        <p class="mt-6 text-base leading-7 text-[#505A63] lg:text-lg lg:leading-8">
          {{ localizedText.summary }}
        </p>

        <div class="mt-8 space-y-5 text-base leading-8 text-[#505A63] lg:mt-10 lg:space-y-6 lg:text-lg">
          <p v-for="(paragraph, index) in localizedText.content" :key="`${session.year}-paragraph-${index}`">
            {{ paragraph }}
          </p>
        </div>

        <div v-if="localizedRoadmap" class="mt-14 lg:mt-20">
          <h1
            class="text-2xl font-black uppercase leading-tight text-[#191C1F] lg:text-[34px] lg:leading-[1.15]"
          >
            {{ localizedRoadmap.title }}
          </h1>

          <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-10">
            <div
              v-for="(stat, index) in localizedRoadmap.stats"
              :key="`${session.year}-stat-${index}`"
              class="flex min-h-[120px] flex-col justify-between rounded-2xl px-5 py-5 lg:px-6 lg:py-6"
              :class="index === 1 ? 'bg-[#191C1F]' : 'bg-[#F7F7F7]'"
            >
              <p
                class="stat-label text-xs leading-5 lg:text-sm"
                :class="index === 1 ? 'text-white' : 'text-[#505A63]'"
              >
                {{ stat.label }}
              </p>
              <div
                class="mt-4 text-2xl font-black leading-none lg:text-3xl"
                :class="index === 1 ? 'text-white' : 'text-[#191C1F]'"
              >
                {{ stat.value }}
              </div>
            </div>
          </div>

          <div class="mt-8 overflow-hidden rounded-2xl border border-[#E5E5E5] lg:mt-10">
            <table class="w-full border-collapse">
              <tbody>
                <tr
                  v-for="(initiative, index) in localizedRoadmap.initiatives"
                  :key="`${session.year}-initiative-${index}`"
                  class="border-b border-[#E5E5E5] transition-colors last:border-b-0 hover:bg-[#F7F7F7]"
                >
                  <td
                    class="w-10 px-4 py-4 align-top text-lg leading-relaxed text-[#191C1F] lg:px-5"
                  >
                    •
                  </td>
                  <td
                    class="px-4 py-4 align-top text-sm leading-relaxed text-[#191C1F] lg:px-5 lg:text-base"
                  >
                    {{ initiative }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            v-if="localizedRoadmap.columns.length"
            class="mt-8 grid grid-cols-1 gap-4 lg:mt-10 lg:gap-6"
          >
            <div
              v-for="(column, index) in localizedRoadmap.columns"
              :key="`${session.year}-column-${index}`"
              class="rounded-2xl bg-[#F7F7F7] p-6 lg:p-8"
            >
              <p
                class="text-xs font-bold uppercase tracking-widest text-[#191C1F] lg:text-sm"
              >
                {{ column.title }}
              </p>
              <ul class="mt-5 space-y-4">
                <li
                  v-for="(item, itemIndex) in column.items"
                  :key="`${session.year}-column-${index}-item-${itemIndex}`"
                  class="flex gap-3 text-sm leading-relaxed text-[#505A63] lg:text-base"
                >
                  <span class="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#191C1F]"></span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          class="mt-10 flex flex-col gap-3 border-t border-[#191C1F14] pt-8 sm:flex-row sm:flex-wrap lg:mt-12"
        >
          <a
            :href="session.externalLink.href"
            target="_blank"
            rel="noreferrer"
            class="btn btn-secondary"
          >
            {{ t(session.externalLink.label) }}
          </a>
          <a
            v-if="session.externalLink2"
            :href="session.externalLink2.href"
            target="_blank"
            rel="noreferrer"
            class="btn btn-secondary"
          >
            {{ t(session.externalLink2.label) }}
          </a>
          <a
            :href="session.downloadFile.href"
            :download="session.downloadFile.fileName || true"
            class="btn btn-outline-secondary"
          >
            {{ session.downloadFile.label }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stat-label::first-letter {
  text-transform: uppercase;
}
</style>
