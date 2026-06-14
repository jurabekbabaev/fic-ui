<script setup lang="ts">
import { nextTick, watch } from "vue";
import { useI18n } from "vue-i18n";
import PageHero from "~/components/shared/PageHero.vue";
import ResultSection from "./result.vue";
const HeroImage = img("plenarysessions/image 4.png");

const { t } = useI18n();

const route = useRoute();

const normalizedTargetMap: Record<string, string> = {
  "plenary-2023": "plenary-2022",
};

const scrollToTarget = async () => {
  if (typeof window === "undefined") return;

  await nextTick();

  const target = route.query.target;
  if (!target || typeof target !== "string") return;

  const normalizedTarget = normalizedTargetMap[target] || target;
  const element = document.getElementById(normalizedTarget);
  if (!element) return;

  setTimeout(() => {
    const offset = 110;
    const top = element.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }, 100);
};

onMounted(() => {
  scrollToTarget();
});

watch(
  () => route.query.target,
  () => {
    scrollToTarget();
  }
);
</script>

<template>
  <client-only>
    <div>
      <PageHero :title="t('Результаты пленарных сессий')" :image="HeroImage" />
      <div class="container">
        <ResultSection />
      </div>
    </div>
  </client-only>
</template>
