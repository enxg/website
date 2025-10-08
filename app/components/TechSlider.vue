<script setup lang="ts">
export type Technology = {
  name: string;
  icon: string;
  color: string;
};

const props = defineProps<{
  technologies: Technology[];
  rtl: boolean;
}>();

const iconCount = props.technologies.length;
const iconSizePx = 64;
const spacingPx = 16;

const trackWidth = computed(() => {
  const singleTrackWidth = (iconCount * iconSizePx) + (iconCount * spacingPx);
  return `${singleTrackWidth * 2}px`;
});
</script>

<template>
  <div
    class="overflow-hidden"
  >
    <div class="flex flex-row gap-4 slider" :class="rtl ? 'right-to-left' : 'left-to-right'" :style="{ width: trackWidth }">
      <TechIcon v-for="tech in technologies" :title="tech.name" :key="'r1a-' + tech.name" :icon="tech.icon" :color="tech.color" />
      <TechIcon v-for="tech in technologies" :title="tech.name" :key="'r1b-' + tech.name" :icon="tech.icon" :color="tech.color" />
    </div>
  </div>
</template>

<style scoped>
.left-to-right {
  animation: scroll-right 40s linear infinite;
}

@keyframes scroll-right {
  from { transform: translateX(0); }
  to { transform: translateX(calc(-50% - 10px)); }
}

.right-to-left {
  animation: scroll-left 40s linear infinite;
  animation-delay: -20s;
}

@keyframes scroll-left {
  from { transform: translateX(calc(-50% - 10px)); }
  to { transform: translateX(0); }
}

.slider:hover {
  animation-play-state: paused;
}
</style>
