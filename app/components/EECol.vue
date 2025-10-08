<script setup lang="ts">
import type { EEItemData } from "~/components/EEItem.vue";

defineProps<{
  title: string;
  items: EEItemData[];
}>();
</script>

<template>
  <div class="flex flex-col">
    <span class="lexend text-5xl">
      {{ title }}
    </span>
    <div class="flex flex-col space-y-8 mt-8">
      <EEItem
        v-for="(item, index) in items"
        :key="index"
        :title="item.title"
        :subtitle="item.subtitle"
        :duration="item.duration"
        :details="item.details"
        :icon="item.icon"
      />
    </div>
  </div>
</template>

<style scoped></style>
