<script setup>
const props = defineProps({
  isHome: {
    type: Boolean,
    default: false,
  },
});
import { useI18n } from "vue-i18n";
import AppHeaderNav from "./AppHeaderNav.vue";
import AppMenu from "./AppMenu.vue";
import LanguageSwitcher from "../widgets/LanguageSwitcher.vue";
import GroupLogo from "@/assets/icons/Group.svg";
import WLocaleLink from "~/components/shared/WLocaleLink.vue";

const { t } = useI18n();

const isTabletOrMobile = ref(false);

onMounted(() => {
  if (process.client) {
    const handleResize = () => {
      isTabletOrMobile.value = window.innerWidth <= 1024;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });
  }
});
</script>

<template>
  <client-only>
    <div
      class="sticky py-2 top-0 left-0 w-full md:right-0 md:left-0 z-[99]"
      :class="(props.isHome && !isTabletOrMobile) ? '' : 'bg-white border-b border-b-gray-200'"
    >
      <div class="mainContainer">
        <div class="w-full flex justify-between items-center">
          <div>
            <WLocaleLink to="/" class="flex items-center gap-3 no-underline">
              <img :src="GroupLogo" class="w-10 h-10 shrink-0" alt="FIC" />
              <span
                class="text-[11px] font-bold leading-tight max-w-[140px] sm:max-w-[220px] uppercase"
                :class="(props.isHome && !isTabletOrMobile) ? 'text-white' : 'text-[#191C1F]'"
                style="font-family: 'Spline Sans', sans-serif; text-wrap: balance;"
              >
                {{ t("org_full_name") }}
              </span>
            </WLocaleLink>
          </div>
          <div class="flex-1 flex justify-center" v-if="!isTabletOrMobile">
            <AppHeaderNav :isHome="props.isHome" />
          </div>
          <div class="flex items-center gap-3.5">
            <LanguageSwitcher />
            <WLocaleLink
              to="/contacts"
              class="btn btn-primary"
              v-if="!isTabletOrMobile"
              >{{ t("Связаться") }}</WLocaleLink
            >
            <AppMenu v-if="isTabletOrMobile" />
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<style></style>
