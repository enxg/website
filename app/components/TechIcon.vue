<script setup lang="ts">

defineProps<{
  icon: string;
  color: string;
}>();
</script>

<template>
  <div class="w-16 h-16 bg-zinc-900/50 rounded flex items-center justify-center">
    <Icon :name="icon" :style="{ color: color }" class="w-8 h-8" />
  </div>
</template>

<style scoped></style>
