// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["./layers/base", "./layers/about"],

  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  colorMode: {
    preference: "light",
  },

  modules: ["@nuxt/ui", '@nuxt/eslint'],
  css: ['~/assets/css/main.css']
});
