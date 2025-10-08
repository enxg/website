// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@vueuse/nuxt",
  ],
  fonts: {
    families: [
      { name: "Inter", provider: "google" },
      { name: "Lexend", provider: "google" }
    ]
  },
  app: {
    head: {
      title: "Enes Genç",
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        { name: "darkreader-lock" }
      ],
    },
  },
})