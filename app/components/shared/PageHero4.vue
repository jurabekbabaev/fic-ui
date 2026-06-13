<script setup>
import { useI18n } from 'vue-i18n'
import HeroImage from '@/assets/images/plenarysessions/plenary2025/ATM_9764.JPG'

defineProps({
  title: { type: String, required: true },
})

const { t } = useI18n()
</script>

<template>
  <section class="pageHero">
    <img :src="HeroImage" alt="" class="pageHero__img" />
    <div class="pageHero__overlay"></div>
    <div class="container pageHero__inner">
      <h1 class="pageHero__title">{{ t(title) }}</h1>
    </div>
  </section>
</template>

<style scoped>
.pageHero {
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 460px;
  margin-bottom: 64px;
  overflow: hidden;
}

.pageHero__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.pageHero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(15, 23, 18, 0.12) 0%,
    rgba(15, 23, 18, 0.62) 100%
  );
}

.pageHero__inner {
  position: relative;
  width: 100%;
  padding-bottom: 52px;
}

.pageHero__title {
  max-width: 900px;
  color: #ffffff;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 1.02;
  font-size: clamp(32px, 5.5vw, 64px);
}

@media (max-width: 768px) {
  .pageHero {
    height: 320px;
    margin-bottom: 40px;
  }

  .pageHero__inner {
    padding-bottom: 32px;
  }
}
</style>
