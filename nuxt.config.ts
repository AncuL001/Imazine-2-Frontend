// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    download: true,
    families: {
      Lato: [200, 300, 400, 500, 600, 700, 800,900],
    }
  },
  css: [
    '@/assets/style.scss',
    'bootstrap/dist/css/bootstrap.min.css'
  ],
})
