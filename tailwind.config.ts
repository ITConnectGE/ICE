import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './data/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', lg: '120px' },
      screens: { '2xl': '1440px' },
    },
    extend: {
      colors: {
        // ---- Brand: Primary (navy) — from Figma variable "Primary color" #041e42
        primary: {
          DEFAULT: '#041e42',
          50: '#f3f6fb',
          100: '#e4ebf4',
          200: '#c2d2e6',
          300: '#90aece',
          400: '#5680b0',
          500: '#2f5d96',
          600: '#1f4577',
          700: '#163559',
          800: '#0c2447',
          900: '#041e42',
          950: '#02132b',
        },
        // ---- Brand: Secondary (Otis pink) — from Figma variable "Secondary Color" #f65375
        secondary: {
          DEFAULT: '#f65375',
          50: '#fff1f4',
          100: '#ffe0e7',
          200: '#fcc6d3',
          300: '#fa9db1',
          400: '#f65375',
          500: '#ee2f59',
          600: '#da1747',
          700: '#b80f3b',
          800: '#991036',
          900: '#831232',
        },
        ink: '#0d1117', // Figma "Text Color"
        'ink-soft': '#1d3353', // Figma Text/900
        muted: '#5b6472',
        'surface-muted': '#f1f1f9', // Figma Neutral/400
        line: '#e6e8ee',
      },
      fontFamily: {
        sans: ['"Noto Sans Georgian"', '"DejaVu Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Noto Sans Georgian"', '"DejaVu Sans"', 'Inter', 'sans-serif'],
      },
      fontSize: {
        // Figma type scale (DejaVu Sans)
        'display': ['54px', { lineHeight: '1.12', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h1': ['54px', { lineHeight: '1.18', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h2': ['42px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '1.35', fontWeight: '500' }],
        'h4': ['18px', { lineHeight: '1.5', fontWeight: '700' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
        'body': ['16px', { lineHeight: '1.7' }],
        'body-sm': ['14px', { lineHeight: '1.6' }],
        'caption': ['12px', { lineHeight: '1.5' }],
      },
      maxWidth: {
        content: '1440px',
      },
      borderRadius: {
        card: '10px',
      },
      boxShadow: {
        card: '0 18px 50px -24px rgba(4, 30, 66, 0.25)',
        'card-hover': '0 26px 60px -22px rgba(4, 30, 66, 0.38)',
        btn: '0 14px 30px -12px rgba(246, 83, 117, 0.55)',
      },
      backgroundImage: {
        'pink-gradient': 'linear-gradient(180deg, #f9698a 0%, #f65375 55%, #ef3961 100%)',
        'navy-overlay':
          'linear-gradient(90deg, rgba(4,30,66,0.92) 0%, rgba(4,30,66,0.72) 45%, rgba(4,30,66,0.18) 100%)',
        'navy-overlay-soft':
          'linear-gradient(90deg, rgba(4,30,66,0.88) 0%, rgba(4,30,66,0.55) 60%, rgba(4,30,66,0.2) 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'slide-in-right': 'slide-in-right 0.35s ease-out both',
      },
    },
  },
  plugins: [animate],
}
