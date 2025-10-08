<script setup lang="ts">
import { useScroll } from "@vueuse/core";

export type NavbarItems = Array<{
  title: string;
  ref: any;
}>;

defineProps<{
  items: NavbarItems;
}>();

function scrollToSection(ref: Ref) {
  if (ref.value) {
    ref.value.$el.scrollIntoView({ behavior: "smooth" });
  }
}

const { y } = useWindowScroll();

</script>

<template>
  <div
    class="hidden md:flex flex-row fixed z-10 items-center justify-center px-8 py-3 top-6 left-1/2 -translate-x-1/2 rounded-full text-gray-100 duration-150"
    :class="y > 50 && 'bg-white/15'"
  >
    <nav class="font-semibold lexend">
      <ul class="flex flex-row gap-8">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="hover:underline underline-offset-4"
        >
          <button @click="() => scrollToSection(item.ref)">
            {{ item.title.toLowerCase() }}
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped></style>
