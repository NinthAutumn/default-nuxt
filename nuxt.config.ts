import { Configuration } from '@nuxt/types';
const nuxtConfig: Configuration = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: "",
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: ""
    }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/composition'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxt/http',
    '@nuxtjs/style-resources',

  ],

  /*
   ** Build configuration
   */
  buildModules: ['@nuxt/typescript-build'],
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {

    // }
  }
}

module.exports = nuxtConfig
