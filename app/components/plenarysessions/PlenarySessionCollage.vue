<script setup lang="ts">
import type { PlenarySessionImage } from "@/constants/plenarySessionDetails";

defineProps<{
  images: PlenarySessionImage[];
  eyebrow: string;
  title: string;
}>();

const collageClasses = [
  "min-h-[160px] sm:min-h-[220px] lg:col-span-4 lg:min-h-[250px]",
  "min-h-[160px] sm:min-h-[220px] lg:col-span-4 lg:min-h-[250px]",
  "min-h-[160px] sm:min-h-[220px] lg:col-span-4 lg:min-h-[250px]",
  "col-span-2 min-h-[190px] sm:min-h-[260px] lg:col-span-6 lg:min-h-[300px]",
  "col-span-2 min-h-[190px] sm:min-h-[260px] lg:col-span-6 lg:min-h-[300px]",
  "min-h-[160px] sm:min-h-[220px] lg:col-span-4 lg:min-h-[250px]",
  "min-h-[160px] sm:min-h-[220px] lg:col-span-4 lg:min-h-[250px]",
  "min-h-[160px] sm:min-h-[220px] lg:col-span-4 lg:min-h-[250px]",
];
</script>

<template>
  <div>
    <div class="mb-5 flex flex-col gap-3 px-1 lg:mb-7 lg:flex-row lg:items-end lg:justify-between">
      <div class="max-w-[720px]">
        <span class="inline-flex rounded-md bg-[#191C1F0A] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#505A63]">
          {{ eyebrow }}
        </span>
        <h1 class="mt-3 text-[24px] font-black leading-[1.04] text-[#191C1F] lg:text-[44px]">
          {{ title }}
        </h1>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-3 lg:grid-cols-12 lg:gap-5">
      <div
        v-for="(image, index) in images"
        :key="`${title}-${index}`"
        class="group relative overflow-hidden rounded-[22px]"
        :class="collageClasses[index] || collageClasses[collageClasses.length - 1]"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          class="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>
