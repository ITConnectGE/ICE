/**
 * Resolve a public-folder asset path against the deployment base URL.
 *
 * On GitHub Pages the site is served from a subpath ("/ICE/"), but Nuxt only
 * auto-prefixes its own build assets and router links — not raw "/images/..."
 * strings in <img src>. Run those through asset() so they resolve correctly
 * both in dev (base "/") and on Pages (base "/ICE/").
 *
 * External URLs (http(s), data:, //) and already-relative paths are returned
 * untouched, so it's safe to wrap every image source unconditionally.
 */
export function asset(path?: string | null): string {
  if (!path) return ''
  if (!path.startsWith('/')) return path
  const base = useRuntimeConfig().app.baseURL || '/'
  return (base.endsWith('/') ? base.slice(0, -1) : base) + path
}
