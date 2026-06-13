import { DEFAULT_LOCALE, localeCodes } from '../config'

export default defineNuxtRouteMiddleware((to) => {
  const path = to.path || '/'

  // Nuxt ichki yo'llari va asset'larini locale'ga majburan redirect qilmaymiz,
  // aks holda dev rejimda HMR/devtools doimiy reload bo'lib qolishi mumkin.
  if (
    path.startsWith('/_nuxt') ||
    path.startsWith('/__nuxt') ||
    path.startsWith('/__nuxt_devtools__') ||
    path.startsWith('/_ipx') ||
    path.startsWith('/favicon') ||
    path.startsWith('/robots.txt') ||
    path.startsWith('/sitemap')
  ) {
    return
  }

  const segments = path.split('/')
  const maybeLocale = segments[1] || ''

  // Agar allaqachon locale bo'lsa (shu jumladan default 'ru') – hech narsa qilmaymiz
  if ((localeCodes as readonly string[]).includes(maybeLocale)) {
    return
  }

  // Agar umuman locale bo‘lmasa → default locale ni qo‘shib yuboramiz
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return navigateTo(
    { path: `/${DEFAULT_LOCALE}${normalizedPath}`, query: to.query, hash: to.hash },
    { redirectCode: 301 }
  )
})
