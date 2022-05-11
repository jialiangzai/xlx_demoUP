export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  // test admin123
  head: {
    title: 'NUXT',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/static/css/global.css',
    'video.js/dist/video-js.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/element',
    '~/plugins/axios',
    '~/api/courseManage',
    '~/api/picture',
    '~/api/webConfig',
    '~/api/agreement',
    '~/api/courseTag',
    '~/api/shopcar',
    '~/api/token',
    '~/api/auth',
    '~/api/sms',
    '~/api/courseCategory',
    '~/api/history',
    '~/api/favorite',
    '~/api/payment'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/router',
    '@nuxtjs/proxy',
    'cookie-universal-nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    proxy: true,
    baseURL: '/',
  },
  proxy: {
    '/api': {
      target: 'http://testapi.xuexiluxian.cn'
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  router:{
    middleware:['auth']
  }
}
