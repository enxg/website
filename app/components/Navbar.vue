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
    class="hidden md:flex flex-row fixed border-[#757575] z-10 items-center justify-center px-8 py-3 top-6 left-1/2 -translate-x-1/2 rounded-full text-gray-100 duration-150"
    :class="y > 50 && 'turbulence border bg-white/15'"
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
    <svg class="filter_svg">
      <filter id="turbulence" color-interpolation-filters="linearRGB" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse">
        <feTurbulence type="turbulence" baseFrequency="0.015 0.015" numOctaves="1" seed="2" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence"></feTurbulence>
        <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="20" xChannelSelector="R" yChannelSelector="B" x="0%" y="0%" width="100%" height="100%" result="displacementMap"></feDisplacementMap>
      </filter>
    </svg>
  </div>
</template>

<style scoped>
  .turbulence {
    backdrop-filter: url("#turbulence") blur(5px) contrast(1.2) brightness(0.1);
    -webkit-backdrop-filter: blur(5px) contrast(1.2);
  }

  @-moz-document url-prefix() {
    .turbulence {
      backdrop-filter: blur(5px) contrast(1.2);
    }
  }

  .filter_svg {
    position: absolute;
    width: 0;
    height: 0;
  }
</style>
