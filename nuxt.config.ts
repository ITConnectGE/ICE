// https://nuxt.com/docs/api/configuration/nuxt-config
import { news } from './data/news'
import { projects } from './data/projects'
import { productCategories, products } from './data/products'

// Deployment base path ("/" in dev, "/ICE/" on GitHub Pages via NUXT_APP_BASE_URL).
const baseURL = process.env.NUXT_APP_BASE_URL || '/'

// Every route to prerender for the static (GitHub Pages) build. We enumerate
// these explicitly so the build is deterministic and complete, rather than
// leaning only on the link crawler. The list is data-driven, so adding news,
// projects or products automatically extends the build — and it mirrors the
// synthesized product items in pages/products/[category].vue.
const prerenderRoutes = [
  '/about',
  '/services',
  '/contacts',
  '/news',
  '/products',
  '/projects',
  ...news.map((n) => `/news/${n.slug}`),
  ...projects.map((p) => `/projects/${p.slug}`),
  ...productCategories.map((c) => `/products/${c.slug}`),
  ...products.map((p) => `/products/item/${p.slug}`),
  ...productCategories
    .filter((c) => !products.some((p) => p.categorySlug === c.slug))
    .flatMap((c) => Array.from({ length: 6 }, (_, i) => `/products/item/${c.slug}-${i + 1}`)),
]

export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],

  css: ['~/assets/css/main.css'],

  googleFonts: {
    families: {
      // DejaVu Sans is named in the Figma file, but it predates Unicode Mtavruli (2018)
      // and isn't a standard web font, so it can't render uppercase Georgian. Noto Sans
      // Georgian is the production-ready substitute that ships both Mkhedruli + Mtavruli.
      'Noto Sans Georgian': [400, 500, 600, 700, 800],
      Inter: [400, 500, 600, 700],
    },
    // Ensure the Georgian subset (incl. Mtavruli U+1C90–1CBF) is downloaded.
    subsets: ['latin', 'georgian'],
    display: 'swap',
    preconnect: true,
  },

  app: {
    // On GitHub Pages a project repo is served at "/<repo>/", so the CI passes
    // NUXT_APP_BASE_URL=/ICE/. Nuxt prefixes asset URLs with it automatically.
    baseURL,
    head: {
      htmlAttrs: { lang: 'ka' },
      title: 'ICE — საინჟინრო გადაწყვეტილებები',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'ICE — სრული საინჟინრო მომსახურება: ლიფტები, ესკალატორები, გათბობა-კონდიცირება და ვენტილაცია. OTIS-ის ოფიციალური დისტრიბუტორი საქართველოში.',
        },
      ],
      // Base-prefixed so the icon resolves under the GitHub Pages subpath too.
      link: [{ rel: 'icon', type: 'image/svg+xml', href: `${baseURL}favicon.svg` }],
    },
  },

  tailwindcss: { cssPath: '~/assets/css/main.css' },

  // Static generation for GitHub Pages: crawl every in-app link so the dynamic
  // routes (news/projects/product detail pages) get prerendered to HTML, and
  // keep building if one route errors instead of failing the whole deploy.
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', ...prerenderRoutes],
      failOnError: false,
    },
  },

  typescript: { strict: true },
})
