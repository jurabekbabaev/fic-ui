<script lang="ts" setup>
import WLocaleLink from "@/components/shared/WLocaleLink.vue";
import LeadersGroup from '../leadersgroup/index.vue'
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
<template>
  <div>
    <client-only>
      <div class="mb-12">
        <div>
          <leaders-group ></leaders-group>
        </div>
      </div>
    </client-only>
  </div>
</template>

<style></style>
