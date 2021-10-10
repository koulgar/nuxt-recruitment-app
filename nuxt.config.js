export default {
  env: {
    YANDEX_MAPS_SDK_URL:
      'https://api-maps.yandex.ru/2.1/?apikey=pdct.1.1.20211010T003416Z.0316ab24d72a0c1e.7f653716b03b6b80319b19e476a3fccfb1e320d4&lang=tr_TR',
  },
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
  plugins: ['@/plugins/httpClient', '@/services'],
  components: false,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/svg'],
  modules: ['@nuxtjs/axios', '@nuxtjs/style-resources'],
  styleResources: {
    scss: ['@/assets/scss/abstracts/index.scss'],
  },
  build: {
    babel: {
      plugins: [
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator',
      ],
    },
  },
};
