<script setup lang="ts">
import PlenarySessionDetailPage from "@/components/plenarysessions/PlenarySessionDetailPage.vue";
import { getPlenarySessionDetail } from "@/constants/plenarySessionDetails";

const session = getPlenarySessionDetail("2022");
</script>

<template>
  <PlenarySessionDetailPage :session="session" />
</template>
