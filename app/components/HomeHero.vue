<script setup lang="ts">
defineProps<{
  socials: Array<{
    title: string;
    href: string;
    icon: string;
  }>;
}>();
</script>

<template>
  <div
    class="flex flex-col min-h-screen md:h-screen md:mt-0 mt-16 max-h-screen w-full items-center justify-center"
  >
    <div class="flex md:flex-row flex-col items-center gap-16 w-full h-1/2">
      <div class="flex flex-col h-full justify-center">
        <img
          src="~/assets/profile.jpg"
          alt=""
          class="w-64 md:w-96 aspect-square object-cover rounded-full"
        />
      </div>
      <div class="flex flex-col gap-8">
        <div class="flex flex-col font-bold">
          <span class="text-xl">Hi, I am</span>
          <span class="text-8xl lexend">enes genç</span>
        </div>
        <div class="flex flex-col text-lg">
          <p>
            I'm a self-taught software developer with a strong passion for
            building web applications.
          </p>
          <div class="flex flex-col mt-4 text-gray-300">
            <span
              >Computer Engineering Student @ Yildiz Technical University</span
            >
          </div>
        </div>
        <div class="flex flex-row gap-4">
          <NuxtLink
            v-for="sc in socials"
            :key="sc.title"
            :to="sc.href"
            target="_blank"
            class="flex items-center justify-center p-2 border-gray-100 border-2 rounded-lg duration-200 group hover:bg-gray-100"
          >
            <Icon :name="sc.icon" class="w-6 h-6 group-hover:text-zinc-950" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
