<script lang="ts" setup>
// const { t } = useI18n();
import AppHeaderNav from './AppHeaderNav.vue'
import AppMenu from './AppMenu.vue'
import WLocaleLink from "~/components/shared/WLocaleLink.vue";
</script>

<template>
  <header class="w-full" id="header">
    <div class="mainContainer">
      <div class="w-full flex justify-between items-center">
        <div>
          <WLocaleLink to="/">
            <img src="/images/logo-black.svg" class="w-[200px]" />
          </WLocaleLink>
        </div>
        <div class="flex items-center gap-10">
          <AppHeaderNav />
          <div>
            <language-switcher />
          </div>
        </div>
        <div class="flex gap-3.5 ">
          <button class="btn btn-primary">
            Связаться
          </button>
          <AppMenu />
        </div>
      </div>
    </div>
  </header>
</template>

<style></style>
