<script setup lang="ts">
export type EEItemData = {
  title: string;
  subtitle: string;
  duration: string;
  details?: string[];
  icon?: string;
};

defineProps<EEItemData>();
</script>

<template>
  <div class="flex flex-row gap-4">
    <img :src="icon" alt="icon" class="w-14 h-14 rounded" :class="!icon ? 'opacity-0' : ''" />
    <div class="flex flex-col">
      <span class="text-lg font-bold">
        {{ title }}
      </span>
      <span class="text-md">
        {{ subtitle }}
      </span>
      <span class="text-md italic text-gray-300">
        {{ duration }}
      </span>
      <ul class="list-inside">
        <li
          v-for="(detail, index) in details"
          :key="index"
          class="text-gray-300"
        >
          {{ detail }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
