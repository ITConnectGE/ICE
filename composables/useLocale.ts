export type Locale = 'ka' | 'en'

/** A translatable string: either a plain string (same in both languages) or { ka, en }. */
export type I18nText = string | { ka: string; en: string }

/**
 * Global locale state, persisted to a cookie and shared across SSR + client.
 * `t()` resolves an I18nText for the active locale and tolerates plain strings,
 * so content can be translated incrementally without breaking anything.
 */
export function useLocale() {
  const cookie = useCookie<Locale>('ice-locale', {
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  })
  const locale = useState<Locale>('locale', () => (cookie.value === 'en' ? 'en' : 'ka'))

  function setLocale(value: Locale) {
    locale.value = value
    cookie.value = value
    if (import.meta.client) document.documentElement.setAttribute('lang', value)
  }

  function t(value: I18nText): string {
    if (value == null) return ''
    return typeof value === 'string' ? value : (value[locale.value] ?? value.ka ?? '')
  }

  return { locale, setLocale, t }
}
