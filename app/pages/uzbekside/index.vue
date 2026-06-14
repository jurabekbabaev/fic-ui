<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import { getLocalizedField } from "~/composables/helpers";
import { useUzbekExpertsStore } from "@/stores/uzbekExperts";
const store = useUzbekExpertsStore();
const models = computed(() => {
  return store.list;
});
const getModels = () => {
  store.getList();
};
onMounted(() => {
  getModels();
});
</script>
<template>
  <div>
    <client-only>
      <div class="container">
        <h1 class="lg:text-[64px] text-[32px] uppercase font-black mb-10 mt-12">
          {{ t("Узбекская сторона") }}
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-[50px]">
          <div
            class="flex flex-col lg:flex-row items-start lg:items-center gap-6"
            v-for="(item, i) in models"
            :key="i"
          >
            <img
              :src="item.image_path"
              :alt="item.fullname"
              class="w-full lg:w-[260px] h-auto lg:h-[320px] rounded-xl object-cover"
            />
            <div class="block lg:mb-0 mb-12">
              <span class="block text-lg font-medium text-[#505A63] mt-3">{{
                getLocalizedField(item, "position")
              }}</span>
              <div
                class="lg:text-[32px] text-2xl font-medium text-[#191C1F] uppercase"
              >
                {{ getLocalizedField(item, "full_name") }}
              </div>
              <span
                class="block lg:text-base text-sm font-normal text-[#505A63] mt-6"
                >{{ getLocalizedField(item, "about") }}</span
              >
            </div>
          </div>
        </div>
        <div class="uzb-members-footer-copy">
          <div class="uzb-members-footer-text !mb-0">
            {{ t("uzb.footer.government_composition") }}
          </div>

          <div class="uzb-members-footer-text">
            {{ t("uzb.footer.presidential_decree") }}
          </div>
          <a
            href="https://lex.uz/ru/docs/7637571"
            class="uzb-members-footer-link"
            target="_blank"
          >
            {{ t("Узнать больше") }}
          </a>
        </div>
      </div>
    </client-only>
  </div>
</template>

<style>
.uzb-members-footer-copy {
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  margin-top: 50px;
}

.uzb-members-footer-text {
  max-width: 760px;
  font-size: 16px;
  line-height: 1.45;
  margin-bottom: 16px;
}

.uzb-members-footer-link {
  text-transform: uppercase;
  font-weight: 400;
  font-size: 14px;
  color: #191c1f;
  opacity: 0.6;
}
</style>
