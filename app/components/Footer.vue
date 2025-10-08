<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <div class="grid md:grid-cols-3 grid-cols-1 gap-4 w-full py-10 border-t border-zinc-800">
    <div class="flex flex-col md:items-start items-center justify-center w-full">
      <span class="text-zinc-500 text-sm text-center">
        © {{ currentYear }} Enes Genç. Licensed under the
        <NuxtLink
          to="https://github.com/enxg/website/blob/main/LICENSE"
          rel="nofollow"
          target="_blank"
        >
          MIT License.
        </NuxtLink>
      </span>
    </div>
    <div class="flex flex-col items-center justify-center w-full">
      <span class="text-zinc-500 text-sm">
        Built with Nuxt 4 & Tailwind CSS
      </span>
    </div>
    <div class="flex flex-col md:items-end items-center justify-center w-full">
      <NuxtLink
        to="https://github.com/enxg/website"
        rel="nofollow"
        target="_blank"
        class="text-zinc-500 text-sm flex flex-row items-center gap-1 hover:text-gray-100 duration-150">
        <Icon name="line-md:github" class="w-3.5 h-3.5" />
        View Source on GitHub
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
