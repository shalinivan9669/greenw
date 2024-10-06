 
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  
  app: {
 
    buildAssetsDir: '/_nuxt/', 
  },
  
  modules: ['@nuxtjs/tailwindcss'],
})
