<script setup>
const opened = ref(false);
const toggle = () => {
  opened.value = !opened.value;
};
const icoSrc = ref("/images/icons/nav.svg");

const isMobile = ref(false);

const handleMenuSelect = () => {
  opened.value = false;
};
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import WLocaleLink from "~/components/shared/WLocaleLink.vue";
import { mainMenuSections } from "~/constants/mainMenu";

const menuColumns = [mainMenuSections.slice(0, 3), mainMenuSections.slice(3)];

const mobileMenuSections = mainMenuSections;

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

<template>
  <div id="appMenu">
    <button class="btn btn-primary navBtn" @click="toggle">
      <img :src="icoSrc" alt="" />
    </button>
    <div v-if="opened" class="appMenuMask" @click="toggle"></div>
    <div v-if="opened" class="appMenuDialog">
      <div class="appMenuDialogClose">
        <button class="btn btn-primary navBtn" @click="toggle">
          <i class="icon-x-white"></i>
        </button>
      </div>

      <!-- iPad: two-column nav -->
      <div class="appMenuNavs flex gap-8 xl:gap-20" v-if="!isMobile">
        <div v-for="(column, columnIndex) in menuColumns" :key="columnIndex">
          <div
            v-for="section in column"
            :key="section.title"
            class="appMenuNav"
          >
            <div class="appMenuNavH">
              <span class="text-[20px] xl:text-[32px] font-bold">{{ t(section.title) }}</span>
            </div>
            <div class="appMenuNavL">
              <ul>
                <li v-for="item in section.items" :key="item.label">
                  <WLocaleLink :to="item.to" @click="handleMenuSelect">{{
                    t(item.label)
                  }}</WLocaleLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile: accordion nav -->
      <div v-if="isMobile" class="mt-4">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @select="handleMenuSelect"
        >
          <el-sub-menu
            v-for="(section, sectionIndex) in mobileMenuSections"
            :key="section.title"
            :index="String(sectionIndex + 1)"
          >
            <template #title>
              <span class="text-xl text-[#191C1F] font-normal">{{
                t(section.title)
              }}</span>
            </template>
            <el-menu-item
              v-for="(item, itemIndex) in section.items"
              :key="item.label"
              :index="`${sectionIndex + 1}-${itemIndex + 1}`"
            >
              <WLocaleLink
                :to="item.to"
                class="text-sm text-[#191C1F80] font-normal"
              >
                {{ t(item.label) }}
              </WLocaleLink>
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(.el-menu) {
  border-right: none;
}
:deep(.el-sub-menu) {
  margin: 10px 0;
}
:deep(.el-sub-menu__title) {
  padding-left: 0 !important;
}
:deep(.el-menu-item) {
  padding-left: 0 !important;
  height: auto;
  line-height: 1.5;
  padding-top: 6px;
  padding-bottom: 6px;
}
</style>
