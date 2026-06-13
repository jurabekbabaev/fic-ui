<template>
   <div id="mainWrap">
      <AppHeader />
      <div id="content">
         <slot />
      </div>
      <AppFooter />
   </div> 
</template>

<script lang="ts" setup>
import AppHeader from '@/components/layout/AppHeader.vue';
import AppFooter from '@/components/layout/AppFooter.vue';

</script>

<style>

</style>