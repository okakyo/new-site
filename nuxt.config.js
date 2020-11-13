import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
    },
    titleTemplate: '%s',
    title: 'Blog Page',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "Okakyo's Portfolio & Blog Site",
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: "Okakyo's Blog",
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://okakyo-new-portfolio.netlify.app',
      },
      { hid: 'og:title', property: 'og:title', content: "Okakyo's Blog" },
      {
        hid: 'og:description',
        property: 'og:description',
        content: "Okakyo's Portfolio & Blog Site",
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://okakyo-new-portfolio.netlify.app/img/article/ogp.png',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@31415O_Kyo' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/composition-api',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration (https://go.nuxtjs.dev/content-config)
  content: {
    markdown: {
      remarkPlugins: ['remark-emoji', '@akebifiky/remark-simple-plantuml'],
      prism: {
        theme: 'prismjs/themes/prism-tomorrow.css',
      },
    },
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        dark: {
          primary: colors.green.accent3,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        light: {
          primary: '#00cba9',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  generate: {
    async routes() {
      const { $content } = require('@nuxt/content')
      // const allArticles = await $content('', { deep: true }).only(['path']).fetch();
      // const articleLength = allArticles.length;

      const files = await $content('', { deep: true }).only(['path']).fetch()
      return files.map((file) =>
        file.path === '/index'
          ? '/'
          : file.path.match('^/blog')
          ? '/blog/article' + file.path.split('/blog')[1]
          : file.path
      )
    },
    fallback: true,
  },
  manifest: {
    name: "OkaKyo's Blog",
    description: "Okakyo's Portfolio & Blog Site",
    lang: 'ja',
    display: 'standalone',
    scope: '/',
    start_url: '/',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
}
