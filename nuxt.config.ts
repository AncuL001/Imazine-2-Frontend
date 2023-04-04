// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Lato: true,
    }
  },
  css: [
    'bootstrap/dist/css/bootstrap.min.css'
  ],
})
