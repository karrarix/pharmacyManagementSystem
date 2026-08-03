// imports
import tailwindcss from "@tailwindcss/vite";
import "@nuxt/ui";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [ '@nuxt/ui', '@nuxtjs/color-mode', '@nuxtjs/supabase'],
  colorMode: {
    classSuffix: '',
  },
  css: ['~/assets/css/main.css'],
  vite: {
    optimizeDeps: {
      include: ['@supabase/supabase-js', '@vue/devtools-core' , '@vue/devtools-kit', '@nuxt/ui']
    },
    plugins: [
      tailwindcss(),
    ]
  },
  runtimeConfig:{
    public:{
      product_id : 8
    }
  }
})