<template>
   <div id="adminWrap">
      <AdminSidebar />
      <div id="adminContent">
         <NuxtPage />
      </div>
   </div> 
</template>

<script lang="ts" setup>
import AdminSidebar from '@/components/layout/AdminSidebar.vue';
</script>

<style scoped>
#adminWrap{
  background: #F7F5F4;
  height: 100vh;
  padding: 20px 20px 50px 260px;
  overflow: auto;
}
</style>