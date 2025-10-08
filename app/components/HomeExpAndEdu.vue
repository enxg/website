<script setup lang="ts">
import type { EEItemData } from "~/components/EEItem.vue";

defineProps<{
  experience: EEItemData[];
  education: EEItemData[];
}>();
</script>

<template>
  <div class="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-16 w-full py-20">
    <EECol title="experience" :items="experience" />
    <EECol title="education" :items="education" />
  </div>
</template>

<style scoped></style>
