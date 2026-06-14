import { DEFAULT_LOCALE, locales } from './app/config'

const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://fic.uniplatforms.uz'

export default defineNuxtConfig({
  site: {
    url: siteUrl
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/ico', href: '/images/fic-logo-black2.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&display=swap' },
      ],
      htmlAttrs: { lang: 'en' }
    },
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,

  nitro: { preset: 'static' },

  runtimeConfig: {
    public: {
      siteUrl,
      NUXT_API_BASE_URL: process.env.NUXT_API_BASE_URL,
      NUXT_API_BASE_URL_ASSETS: process.env.NUXT_API_BASE_URL_ASSETS,
      NUXT_DOCUMENT_UPLOAD_URL: process.env.NUXT_DOCUMENT_UPLOAD_URL,
      // Add more environment variables as needed
    }
  },

  css: [
    '~/assets/css/fonts.css',
    '~/assets/css/main.css',
    '~/assets/styles/style.scss',
    '~/assets/styles/media.scss',
    '~/assets/css/icomoon.css',
    '~/assets/css/tailwind.css'
  ],

  modules: ['@element-plus/nuxt', [
    '@nuxtjs/i18n', {
      strategy: 'prefix',
      detectBrowserLanguage: {
        useCookie: true,
        fallbackLocale: 'ru',
        alwaysRedirect: false,
      },
      locales,
      defaultLocale: DEFAULT_LOCALE,
      lazy: true,
      langDir: 'locales',
      customRoutes: 'config',
      vueI18n: 'app/config/i18n.ts',
      compilation: { strictMessage: false }
    }
  ], '@pinia/nuxt'],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },

  elementPlus: {},
  // seo: {
  //   siteUrl,

  //   sitemap: {
  //     enabled: true,
  //   },

  //   robots: {
  //     enabled: true,
  //   },
  //   ogImage: {
  //     enabled: process.env.CI !== 'true'
  //   }
  // }
})
