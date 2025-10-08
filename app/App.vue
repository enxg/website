<script setup lang="ts">
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html {
  @apply scroll-smooth;
}

body {
  @apply bg-zinc-950;

  background-image: url("~/assets/topography.svg");
  background-repeat: repeat;

  font-family: Inter, sans-serif;
}


.lexend {
  font-family: "Lexend", sans-serif;
}
</style>
