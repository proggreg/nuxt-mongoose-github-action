// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'vuetify-nuxt-module',
    '@pinia/nuxt',
    '@nuxt/devtools',
    '@vueuse/nuxt',
    'nuxt-mongoose',
    'nuxt-bugsnag',
    '@sidebase/nuxt-auth',
    '@nuxtjs/color-mode'
  ],
  devtools: { enabled: false }
})
