<script setup>
import { nextTick, watch } from "vue";
import PageHero from "~/components/shared/PageHero3.vue";
import MainGroup from "./maingroup.vue";
import InterWorkingGroup from "./interworkinggroup.vue";
import LeadersGroup from '../leadersgroup/index.vue'
import PlenarySessionGroups from "@/components/advice/PlenarySessionGroups.vue";

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
  <div>
    <client-only>
      <PageHero title="Сильные рядом, которые идут с нами вперёд" />
      <div class="container">
        <LeadersGroup />
        <PlenarySessionGroups section-id="advice-plenary-working-groups" />
        <InterWorkingGroup />
      </div>
    </client-only>
  </div>
</template>

<style scoped></style>
