<script setup lang="ts">
// import WLocaleLink from '../shared/WLocaleLink.vue';

import type { ButtonProps } from "./types";
import { Radius } from "./types";

const props = withDefaults(defineProps<ButtonProps & { icon?: string }>(), {
  size: "md",
  type: "button",
  radiusType: Radius.round,
});

const btnDisabled = computed(() => props.disabled || props.loading);

const btnSize = computed(() => {
  switch (props.size) {
    case "xs":
      return "text-xs font-medium";

    case "sm":
      return "text-sm font-medium";

    case "md":
      return "text-sm font-medium rounded-md";

    case "lg":
      return "text-base font-medium rounded-lg";

    case "xl":
      return "text-base font-medium rounded-lg";

    default:
      return "";
  }
});

const btnVariant = computed(() => {
  switch (props.variant) {
    case "primary":
      return "bg-primary text-white focus-visible:ring-primary/30 text-white hover:bg-primary-600 primary-button cursor-pointer";

    case "red":
      return "bg-red-500 text-white hover:bg-red-500/85 focus-visible:ring-red-500/30 text-white hover:bg-primary-600 red-button";

    case "yellow":
      return "bg-yellow text-dark hover:bg-yellow/85 focus-visible:ring-yellow/30 text-white yellow-button";

    case "gray":
      return "bg-gray-200 text-gray-800 hover:bg-gray-300";

    case "light":
      return "bg-white text-gray-800 hover:bg-gray-100 focus dark:text-gray-400 dark:bg-dark-2 dark:hover:bg-dark-700";

    default:
      return "default-button";
  }
});

const btnRadiustype = computed(() => {
  switch (props.radiusType) {
    case Radius.round:
      return "rounded-full px-2";

    case Radius.circle:
      return "rounded-[50%] py-1";

    default:
      return "";
  }
});
</script>

<template>
  <component
    :is="to ? 'WLocaleLink' : 'button'"
    :to="to"
    :type="to ? undefined : type"
    :disabled="to ? undefined : btnDisabled"
    class="select-none transition-colors ease-in-out focus:outline-none focus-visible:ring"
    :class="[
      btnSize,
      btnVariant,
      !custom && 'inline-flex items-center whitespace-nowrap',
      !left && 'justify-center text-center',
      btnDisabled && 'pointer-events-none opacity-80 cursor-not-allowed',
      btnRadiustype,
    ]"
  >
    <BaseSpinner v-if="loading" :size="size" :variant="variant" />
    <template v-else>
      <Icon v-if="icon" :name="icon" class="mr-2" />
      <slot />
    </template>
  </component>
</template>
<style>
.primary-button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  background: #191c1f;
  color: #fff;
  transition: all 0.3s ease-in-out;
}

.primary-button:hover {
  background: #2a2e31;
}
</style>
