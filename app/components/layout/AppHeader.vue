<script setup>
// const { t } = useI18n();
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
import LogoWhite from "/images/logo-white.svg";
import LogoBlack from "/images/ba12d8ddde154e568c101e56e4a917883a60b20a.png";
import { useRoute } from "vue-router";
import WLocaleLink from "~/components/shared/WLocaleLink.vue";

const route = useRoute();
const { t } = useI18n();

const isMobile = ref(false);

onMounted(() => {
  if (process.client) {
    const handleResize = () => {
      isMobile.value = window.innerWidth <= 768;
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
      :class="props.isHome ? '' : 'bg-white border-b border-b-gray-200'"
    >
      <div class="mainContainer">
        <div class="w-full flex justify-between items-center">
          <div>
            <WLocaleLink to="/">
              <img :src="LogoWhite" v-if="props.isHome" class="w-[200px]" />
              <img :src="LogoBlack" v-else class="w-[200px]" />
            </WLocaleLink>
          </div>
          <div class="flex-1 flex justify-center" v-if="!isMobile">
            <AppHeaderNav :isHome="props.isHome" />
          </div>
          <div class="flex items-center gap-3.5">
            <LanguageSwitcher v-if="!isMobile" />
            <WLocaleLink
              to="/contacts"
              class="btn btn-primary"
              v-if="!isMobile"
              >{{ t("Связаться") }}</WLocaleLink
            >
            <AppMenu v-if="isMobile" />
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<style></style>
