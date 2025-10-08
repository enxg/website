<script setup lang="ts">
import type { Technology } from "~/components/TechSlider.vue";

defineProps<{
  technologies: Technology[];
}>();
</script>

<template>
  <div class="flex flex-col gap-8 w-full py-20">
<!--
    <div class="flex flex-col gap-4">
      <span class="lexend text-5xl">my projects</span>
      <Project />
    </div>
-->
    <div class="flex flex-col gap-4 w-full">
      <span class="lexend text-5xl mb-4">technologies i use</span>
      <TechSlider :technologies :rtl="false" />
      <TechSlider :technologies :rtl="true" />
    </div>
  </div>
</template>

<style scoped></style>
