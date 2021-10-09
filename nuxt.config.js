export default {
  head: {
    title: 'recruitmentApp',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  pageTransition: {
    name: 'p-page-transition',
    mode: 'out-in',
    appear: true,
  },
  serverMiddleware: [{ path: '/api', handler: '@/api' }],
  css: ['destyle.css', '@/assets/scss/base/index.scss'],
  plugins: ['@/plugins/serviceContainer/index.js'],
  components: false,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/svg'],
  modules: ['@nuxtjs/axios', '@nuxtjs/style-resources'],
  styleResources: {
    scss: ['@/assets/scss/abstracts/index.scss'],
  },
  build: {},
};
