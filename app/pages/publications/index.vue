<script setup>
import { useI18n } from "vue-i18n";
import Image1 from '@/assets/images/publications/pbg1.png'
import Image2 from '@/assets/images/publications/pbg2.png'
import Image3 from '@/assets/images/publications/pbg3.png'
import Image4 from '@/assets/images/publications/pbg4.png'
import Image5 from '@/assets/images/publications/pbg5.png'
import Image6 from '@/assets/images/publications/pbg6.png'
import Image7 from '@/assets/images/publications/pbg7.png'
import Image8 from '@/assets/images/publications/pbg8.png'
import Image9 from '@/assets/images/publications/pbg9.png'
const { t } = useI18n();
const models = ref([
  Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9
]);
</script>
<template>
  <div>
    <div class="container">
      <h1
        class="lg:text-[64px] text-[32px] uppercase font-black text-center mt-[100px] mb-[40px]"
      >
        {{ t("Публикации") }}
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[60px]">
        <div class="h-[200px] sm:h-[260px] rounded-xl" v-for="(item, i) in models" :key="i">
          <img :src="item" alt="" class="w-full h-full object-cover rounded-xl object-top hover:scale-105 transition-all duration-300 cursor-pointer" />
        </div>
      </div>
    </div>
  </div>
</template>
