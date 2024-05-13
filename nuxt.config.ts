// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // plugins: ['~/plugins/myScript.js'],
  css: ["~/assets/css/main.css"],
  icon: ["~/icon/css"],

  modules: ["@nuxt/image",'@vee-validate/nuxt'],
});