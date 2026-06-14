<script setup>
import { useI18n } from "vue-i18n";
import { ref, computed } from "vue";
import PageHero from "~/components/shared/PageHero.vue";
const { t } = useI18n();

const tabs = [
  { key: "annual", label: "Годовые отчёты" },
  { key: "workgroup", label: "Протоколы рабочих групп" },
  { key: "decrees", label: "Постановления Президента" },
  { key: "council", label: "Протоколы Совета" },
  { key: "founding", label: "Учредительные документы" },
];
const activeTab = ref("annual");

// Все разделы используют единую структуру карточки.
// file — ссылка на скачивание, url — ссылка «Подробнее».
const sections = {
  // Годовые отчёты Секретариата — 2023, 2024, 2025
  annual: [
    {
      titleKey: "Годовой отчёт Секретариата",
      suffix: "2023",
      file: "",
      url: "",
    },
    {
      titleKey: "Годовой отчёт Секретариата",
      suffix: "2024",
      file: "",
      url: "",
    },
    {
      titleKey: "Годовой отчёт Секретариата",
      suffix: "2025",
      file: "",
      url: "",
    },
  ],
  // Протоколы заседаний рабочих групп (50+)
  workgroup: Array.from({ length: 6 }, () => ({
    titleKey: "Протокол заседания рабочей группы",
    meta: "",
    file: "",
    url: "",
  })),
  // Постановления Президента (lex.uz)
  decrees: [
    {
      titleKey: "Постановление Президента Республики Узбекистан",
      suffix: "ПП-4519",
      meta: "13.11.2019 · lex.uz",
      file: "",
      url: "",
    },
    {
      titleKey: "Постановление Президента Республики Узбекистан",
      suffix: "ПП-179",
      meta: "lex.uz",
      file: "",
      url: "",
    },
    {
      titleKey: "Постановление Президента Республики Узбекистан",
      suffix: "ПП-226",
      meta: "18.07.2025 · lex.uz",
      file: "",
      url: "",
    },
  ],
  // Протоколы Совета, подписанные вице-премьером
  council: Array.from({ length: 3 }, () => ({
    titleKey: "Протокол заседания Совета",
    tagKey: "Подписан вице-премьером",
    file: "",
    url: "",
  })),
  // Учредительные документы
  founding: [
    { titleKey: "Устав", meta: "RU / EN", file: "", url: "" },
    {
      titleKey: "Свидетельство о регистрации",
      meta: "RU / EN",
      file: "",
      url: "",
    },
  ],
};

const currentItems = computed(() => sections[activeTab.value] || []);

// Inline icons
const fileIcon =
  '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>';
const downloadIcon =
  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>';
const arrowIcon =
  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
</script>

<template>
  <div>
    <client-only>
      <page-hero :title="t('Документы')" />
      <div class="container">
        <!-- Hero -->
        <div class="w-full text-center mt-18">
          <h1 class="lg:text-[36px] text-[24px] normal-case first-letter:uppercase font-black">
            {{
              t(
                "Единый источник официальных документов Совета: годовые отчёты, протоколы заседаний, постановления Президента и учредительные материалы."
              )
            }}
          </h1>
          <p
            class="lg:text-base text-sm font-normal text-[#505A63] mt-4 max-w-[760px] mx-auto"
          >
            {{
              t(
                "Аналитические доклады и материалы по лидерству мнений размещены в разделе «Публикации»."
              )
            }}
          </p>
        </div>

        <!-- Tabs -->
        <div class="mt-12 flex justify-center">
          <div class="docs-tabs flex gap-2 overflow-x-auto max-w-full pb-1">
            <button
              v-for="tab in tabs"
              :key="tab.key"
              type="button"
              class="docs-tab whitespace-nowrap rounded-full px-5 py-3 text-sm font-medium transition-all"
              :class="
                activeTab === tab.key
                  ? 'bg-[#191C1F] text-white'
                  : 'bg-[#F7F7F7] text-[#505A63] hover:bg-[#ECECEC]'
              "
              @click="activeTab = tab.key"
            >
              {{ t(tab.label) }}
            </button>
          </div>
        </div>

        <!-- Documents — единый дизайн для всех разделов -->
        <div class="mt-10 lg:mb-24 mb-16 flex flex-col gap-4">
          <div
            v-for="(item, i) in currentItems"
            :key="activeTab + '-' + i"
            class="doc-card bg-[#F7F7F7] rounded-2xl p-5 flex md:flex-row flex-col md:items-center gap-4"
          >
            <div
              class="doc-icon shrink-0 rounded-xl bg-white text-[#4D71DE] flex items-center justify-center"
            >
              <span v-html="fileIcon" />
            </div>

            <div class="flex-1 min-w-0">
              <div class="text-[16px] font-medium text-[#191C1F]">
                {{ t(item.titleKey)
                }}<template v-if="item.suffix"> — {{ item.suffix }}</template>
              </div>
              <div
                v-if="item.tagKey || item.meta"
                class="mt-2 flex items-center gap-2 flex-wrap"
              >
                <span
                  v-if="item.tagKey"
                  class="rounded-full px-2.5 py-1 text-xs text-[#4D71DE] bg-[#4D71DE]/10"
                >
                  {{ t(item.tagKey) }}
                </span>
                <span v-if="item.meta" class="text-sm text-[#9AA4AE]">{{
                  item.meta
                }}</span>
              </div>
            </div>

            <div class="flex sm:flex-row flex-col gap-3 shrink-0">
              <a
                :href="item.file || '#'"
                :download="item.file ? true : null"
                class="dl-btn dl-btn--primary sm:w-auto w-full justify-center"
              >
                <span v-html="downloadIcon" class="dl-icon" />
                {{ t("Скачать") }}
              </a>
              <!-- <a
                :href="item.url || '#'"
                class="dl-btn dl-btn--ghost sm:w-auto w-full justify-center"
              >
                {{ t("Batafsil") }}
                <span v-html="arrowIcon" class="dl-icon" />
              </a> -->
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<style scoped>
.doc-icon {
  width: 56px;
  height: 56px;
}

.dl-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 500;
  padding: 11px 22px;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.2s;
}
.dl-icon {
  display: inline-flex;
}
.dl-btn--primary {
  background: rgba(77, 113, 222, 0.1);
  color: #4d71de;
}
.dl-btn--primary:hover {
  background: #4d71de;
  color: #fff;
}
.dl-btn--ghost {
  background: rgba(25, 28, 31, 0.06);
  color: #191c1f;
}
.dl-btn--ghost:hover {
  background: #191c1f;
  color: #fff;
}

.docs-tabs::-webkit-scrollbar {
  height: 0;
}
</style>
