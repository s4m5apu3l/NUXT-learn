// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      title: 'Nuxt test market',
      meta: [
        {name: 'description', content: 'Test nuxt app'},

      ],
      link: [
        {rel: 'stylesheet', href:'https://fonts.googleapis.com/css2?family=Material+Icons'}
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  runtimeConfig:{
    randomKey: process.env.TESTOVUY_API_KEY 
  }
})
