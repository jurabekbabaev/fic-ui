<script setup lang="ts">
import PlenarySessionDetailPage from "@/components/plenarysessions/PlenarySessionDetailPage.vue";
import { getPlenarySessionDetail } from "@/constants/plenarySessionDetails";

const session = getPlenarySessionDetail("2022");
</script>

<template>
  <div class="mt-8">
    <PlenarySessionDetailPage :session="session" />
  </div>
</template>
