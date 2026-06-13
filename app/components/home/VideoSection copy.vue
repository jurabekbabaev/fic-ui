<template>
  <div class="section">
    <div class="videoSection" :style="bgStyle">
      <div class="mainContainer lg:text-center sm:text-left">
        <h2 class="title-64 lg:text-[64px] text-[32px] text-white mb-5">
          {{ t("Пленарные сессии в объективе") }}
        </h2>
        <WLocaleLink to="/plenarysessions" class="btn btn-white">{{
          t("Посмотреть")
        }}</WLocaleLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import BgImageMobile from "@/assets/images/plenarysessions/plenary-sessions-mobile.png";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import WLocaleLink from "~/components/shared/WLocaleLink.vue";

const isMobile = ref(false);

const desktopImg = "/images/b8732cb4edcb834fefeea52bf165a83da9cffccd (1).png";
const mobileImg = BgImageMobile; // mobile alternative

const bgStyle = computed(() => ({
  backgroundImage: `url('${isMobile.value ? mobileImg : desktopImg}')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  // height: '100vh'
}));

onMounted(() => {
  if (typeof window !== "undefined") {
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

<style></style>
