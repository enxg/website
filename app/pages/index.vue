<script setup lang="ts">
import ClemtaLogo from "~/assets/clemta.jpg";
import YTULogo from "~/assets/ytu.jpg";

import type { NavbarItems } from "~/components/Navbar.vue";
import type { EEItemData } from "~/components/EEItem.vue";
import type { Technology } from "~/components/TechSlider.vue";

const navbarItems: NavbarItems = [
  { title: "About Me", ref: useTemplateRef("about") },
  { title: "Experience & Education", ref: useTemplateRef("experience") },
  //{ title: "Projects", ref: useTemplateRef("projects") },
];

const socials = [
  { title: "GitHub", href: "https://github.com/enxg", icon: "line-md:github" },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/enxg",
    icon: "line-md:linkedin",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/enesgenc.dev",
    icon: "line-md:instagram",
  },
  {
    title: "Discord",
    href: "https://dc.enesgenc.dev",
    icon: "line-md:discord",
  },
  { title: "Email", href: "mailto:hello@enesgenc.dev", icon: "line-md:at" },
];

const experience: EEItemData[] = [
  {
    title: "Backend Developer",
    subtitle: "Clemta · Internship",
    duration: "Aug 2025 - Oct 2025",
    details: ["Delaware, United States · Remote"],
    icon: ClemtaLogo,
  },
];

const education: EEItemData[] = [
  {
    title: "Yildiz Technical University",
    subtitle: "Bachelor of Science - BS, Computer Engineering",
    duration: "Sep 2025 - Present",
    details: ["Istanbul, Turkiye"],
    icon: YTULogo,
  },
];

const technologies: Technology[] = [
  { name: "JavaScript", icon: "simple-icons:javascript", color: "#F7DF1E" },
  { name: "TypeScript", icon: "simple-icons:typescript", color: "#3178C6"},
  { name: "Go", icon: "simple-icons:go", color: "#00ADD8" },
  { name: "Rust", icon: "simple-icons:rust", color: "#CE412B" },
  { name: "Node.js", icon: "simple-icons:nodedotjs", color: "#5FA04E" },
  { name: "Express", icon: "simple-icons:express", color: "#FFFFFF"},
  { name: "NestJS", icon: "simple-icons:nestjs", color: "#E0234E" },
  { name: "Docker", icon: "simple-icons:docker", color: "#2496ED" },
  { name: "Git", icon: "simple-icons:git", color: "#F05032" },
  { name: "GitHub", icon: "simple-icons:github", color: "#FFFFFF" },
  { name: "GitHub Actions", icon: "simple-icons:githubactions", color: "#2088FF" },
  { name: "tRPC", icon: "simple-icons:trpc", color: "#2596BE"},
  { name: "JWT", icon: "logos:jwt-icon", color: "#FFFFFF"},
  { name: "Swagger (OpenAPI)", icon: "simple-icons:swagger", color: "#85EA2D"},
  { name: "Vue.js", icon: "simple-icons:vuedotjs", color: "#4FC08D" },
  { name: "Nuxt", icon: "simple-icons:nuxt", color: "#00DC82" },
  { name: "React", icon: "simple-icons:react", color: "#61DAFB" },
  { name: "Next.js", icon: "simple-icons:nextdotjs", color: "#FFFFFF" },
  { name: "Tailwind CSS", icon: "simple-icons:tailwindcss", color: "#06B6D4" },
  { name: "Expo", icon: "simple-icons:expo", color: "#EDEEF0"},
  { name: "Turborepo", icon: "simple-icons:turborepo", color: "#FF1E56" },
  { name: "Cloudflare", icon: "simple-icons:cloudflare", color: "#F38020" },
  { name: "Cloudflare Pages", icon: "simple-icons:cloudflarepages", color: "#F38020" },
  { name: "Cloudflare Workers", icon: "simple-icons:cloudflareworkers", color: "#F38020" },
  { name: "Algolia", icon: "simple-icons:algolia", color: "#003DFF"},
  { name: "Netlify", icon: "simple-icons:netlify", color: "#00C7B7" },
  { name: "MongoDB", icon: "simple-icons:mongodb", color: "#47A248" },
  { name: "Redis", icon: "simple-icons:redis", color: "#FF4438" },
  { name: "PostgreSQL", icon: "simple-icons:postgresql", color: "#4169E1" },
  { name: "MySQL", icon: "simple-icons:mysql", color: "#007A9E" },
  { name: "SQLite", icon: "simple-icons:sqlite", color: "#389BD8" },
  { name: "Firebase", icon: "simple-icons:firebase", color: "#DD2C00" },
  { name: "Prisma", icon: "simple-icons:prisma", color: "#FFFFFF" },
  { name: "AWS", icon: "simple-icons:amazonwebservices", color: "#FFFFFF" },
  { name: "Google Cloud", icon: "logos:google-cloud", color: "" },
  { name: "Microsoft Azure", icon: "logos:microsoft-azure", color: "" },
  { name: "Oracle Cloud", icon: "simple-icons:oracle", color: "#EA1B22" },
  { name: "Mixpanel", icon: "simple-icons:mixpanel", color: "#7856FF" },
  { name: "Stripe", icon: "simple-icons:stripe", color: "#635BFF" },
]
</script>

<template>
  <div class="container px-4 mx-auto min-h-screen flex flex-col text-gray-100">
    <Navbar :items="navbarItems" />
    <HomeHero :socials ref="about" />
    <HomeExpAndEdu :experience :education ref="experience" />
    <HomeProjects :technologies ref="projects" />
    <Footer />
  </div>
</template>

<style scoped></style>
