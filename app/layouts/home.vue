<template>
   <div id="mainWrap" class="homePage">
      <AppHomeEvent v-if="!isMobile" />
      <AppHeader :isHome="isHome" />
      <div id="content">
         <slot />
      </div>
      <AppFooter />
   </div> 
</template>

<script lang="ts" setup>
import AppHomeEvent from '@/components/layout/AppHomeEvent.vue';
import AppHeader from '@/components/layout/AppHeader.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
const isHome = ref(true);
const isMobile = ref(false);
onMounted(() => {
  if (process.client) {
    const handleResize = () => {
      isMobile.value = window.innerWidth <= 768;
    };
    
    const handleScroll = () => {
      if(100 < window.scrollY){
        isHome.value = false
      }else{
        isHome.value = true
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    });
  }
});

</script>

<style>

</style>