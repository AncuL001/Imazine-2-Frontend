// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/google-fonts',
  ],
  plugins: [
    '@/plugins/bootstrap.client.ts'
  ],
  googleFonts: {
    download: true,
    families: {
      Lato: [200, 300, 400, 500, 600, 700, 800,900],
    }
  },
  css: [
    '@/assets/style.scss',
  ],
})
