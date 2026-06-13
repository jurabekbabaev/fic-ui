<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';

defineProps<{ to: RouteLocationRaw }>();

const localePath = useLocalePath();
</script>

<template>
    <NuxtLink :to="localePath(to)" active-class="text-primary" v-bind="$attrs">
        <slot />
    </NuxtLink>
</template>
