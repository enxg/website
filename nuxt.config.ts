// https://nuxt.com/docs/api/configuration/nuxt-config
import { definePerson } from "nuxt-schema-org/schema";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: true,
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@vueuse/nuxt",
    "@nuxtjs/seo",
  ],
  fonts: {
    families: [
      { name: "Inter", provider: "google" },
      { name: "Lexend", provider: "google" },
    ],
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      meta: [{ name: "darkreader-lock" }],
    },
  },
  site: {
    url: "https://enesgenc.dev",
    name: "Enes Genç",
    description: "Self-taught software developer with a strong passion for building web applications.",
    defaultLocale: "en",
  },
  ogImage: {
    fonts: ["Lexend"],
  },
  schemaOrg: {
    identity: definePerson({
      name: "Enes Genç",
      image: "/profile.jpg",
      description: "Web Developer",
      url: "enesgenc.dev",
      sameAs: ["https://linkedin.com/in/enxg", "https://github.com/enxg"],
    }),
  },
});
