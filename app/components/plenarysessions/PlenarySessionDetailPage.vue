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
        <WLocaleLink
          to="/plenarysessions"
          class="inline-flex items-center rounded-md border border-[#191C1F14] bg-white px-4 py-2 text-sm font-medium text-[#191C1F] transition hover:border-[#191C1F33] hover:bg-[#191C1F08]"
        >
          {{ t("Все пленарные сессии") }}
        </WLocaleLink>

        <p class="mt-6 text-base leading-7 text-[#505A63] lg:text-lg lg:leading-8">
          {{ localizedText.summary }}
        </p>

        <div class="mt-8 space-y-5 text-base leading-8 text-[#505A63] lg:mt-10 lg:space-y-6 lg:text-lg">
          <p v-for="(paragraph, index) in localizedText.content" :key="`${session.year}-paragraph-${index}`">
            {{ paragraph }}
          </p>
        </div>

        <div
          class="mt-10 flex flex-col gap-3 border-t border-[#191C1F14] pt-8 sm:flex-row sm:flex-wrap lg:mt-12"
        >
          <a
            :href="session.externalLink.href"
            target="_blank"
            rel="noreferrer"
            class="btn btn-primary"
          >
            {{ t(session.externalLink.label) }}
          </a>
          <a
            :href="session.downloadFile.href"
            :download="session.downloadFile.fileName || true"
            class="btn btn-secondary"
          >
            {{ session.downloadFile.label }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
