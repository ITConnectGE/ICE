// https://nuxt.com/docs/api/configuration/nuxt-config
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
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },

  tailwindcss: { cssPath: '~/assets/css/main.css' },

  typescript: { strict: true },
})
