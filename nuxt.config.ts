// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  colorMode: {
    preference: "light",
  },

  css: ["@fortawesome/fontawesome-svg-core/styles.css"],

  modules: ["@nuxt/ui", '@nuxt/eslint'],
});
