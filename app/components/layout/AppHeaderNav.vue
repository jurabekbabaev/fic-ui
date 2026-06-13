<script setup>
const props = defineProps({
  isHome: {
    type: Boolean,
    default: false
  }
})
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import WLocaleLink from "~/components/shared/WLocaleLink.vue";
import { mainMenuSections } from "~/constants/mainMenu";

const route = useRoute();
const { t } = useI18n();
</script>

<template>
  <nav class="headerNav font-medium">
    <ul
      class="headerNavList flex items-center text-[15px]"
      :class="props.isHome ? 'text-white' : 'text-[#191C1F]'"
    >
      <li
        v-for="section in mainMenuSections"
        :key="section.title"
        class="headerNavItem"
      >
        <WLocaleLink :to="section.items[0].to" class="headerNavLink">
          {{ t(section.title) }}
        </WLocaleLink>
        <div class="headerNavDropdown">
          <ul>
            <li v-for="item in section.items" :key="item.label">
              <WLocaleLink :to="item.to" class="headerNavDropdownLink">
                {{ t(item.label) }}
              </WLocaleLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.headerNavList {
  gap: clamp(14px, 1.8vw, 28px);
}

.headerNavItem {
  position: relative;
  padding: 18px 0;
}

.headerNavLink {
  position: relative;
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  line-height: 1;
  transition: color 0.25s ease;
}

.headerNavLink::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -9px;
  height: 2px;
  border-radius: 999px;
  background: currentColor;
  opacity: 0;
  transform: scaleX(0.55);
  transform-origin: center;
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.headerNavItem:hover .headerNavLink::after,
.headerNavItem:focus-within .headerNavLink::after {
  opacity: 1;
  transform: scaleX(1);
}

.headerNavDropdown {
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  z-index: 120;
  min-width: 240px;
  padding: 10px;
  border: 1px solid rgba(25, 28, 31, 0.06);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.86);
  backdrop-filter: blur(22px) saturate(180%);
  -webkit-backdrop-filter: blur(22px) saturate(180%);
  box-shadow: 0 24px 60px -14px rgba(25, 28, 31, 0.22),
    0 8px 20px -10px rgba(25, 28, 31, 0.14);
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, 12px) scale(0.97);
  transform-origin: top center;
  transition: opacity 0.24s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.24s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.24s ease;
  visibility: hidden;
}

@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
  .headerNavDropdown {
    background: #ffffff;
  }
}

.headerNavDropdown::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: -14px;
  height: 14px;
}

.headerNavItem:hover .headerNavDropdown,
.headerNavItem:focus-within .headerNavDropdown {
  opacity: 1;
  pointer-events: auto;
  transform: translate(-50%, 0) scale(1);
  visibility: visible;
}

.headerNavDropdownLink {
  position: relative;
  display: block;
  border-radius: 12px;
  padding: 11px 14px;
  color: rgba(25, 28, 31, 0.62);
  font-size: 14.5px;
  font-weight: 500;
  line-height: 1.25;
  white-space: nowrap;
  transition: background-color 0.2s ease, color 0.2s ease, padding-left 0.2s ease;
}

.headerNavDropdownLink:hover,
.headerNavDropdownLink:focus-visible {
  background: rgba(25, 28, 31, 0.05);
  color: #191c1f;
  padding-left: 18px;
}
</style>
