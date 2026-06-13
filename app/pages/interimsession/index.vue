<script setup>
import { nextTick } from "vue";
import PageHero from "~/components/shared/PageHero.vue";
import ResultSection from "./result.vue";
import HeroImage from "@/assets/images/plenarysessions/image 4.png";

const route = useRoute();

const scrollToTarget = async () => {
  if (typeof window === "undefined") return;

  await nextTick();

  const target = route.query.target;
  if (!target || typeof target !== "string") return;

  const element = document.getElementById(target);
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
      <PageHero title="Результаты промежуточной сессии" :image="HeroImage" />
      <div class="container">
        <ResultSection />
      </div>
    </div>
  </client-only>
</template>
