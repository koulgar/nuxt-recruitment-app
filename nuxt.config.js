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
  serverMiddleware: [{ path: '/api', handler: '@/api' }],
  css: ['destyle.css', '@/assets/css/roboto.css'],
  styleResources: { scss: ['@/assets/scss/main.scss'] },
  plugins: ['@/plugins/serviceContainer/index.js'],
  components: true,
  buildModules: ['@nuxtjs/eslint-module'],
  modules: ['@nuxtjs/axios', '@nuxtjs/style-resources'],
  build: {},
};
