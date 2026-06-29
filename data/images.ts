/**
 * Image source helper.
 *
 * The Figma assets could not be exported via MCP (Starter plan = 6 calls/month, exhausted).
 * Until the real assets are in place we serve deterministic Picsum placeholders so every
 * layout, aspect ratio and spacing stays exact.
 *
 * TO USE THE REAL FIGMA IMAGES:
 *   1. Export them from Figma (File → Export, or select a layer → Export panel).
 *   2. Drop the files into  public/images/  named  <seed>.jpg  (e.g. hero-factory.jpg).
 *   3. Flip USE_LOCAL to true below.  Every <img> swaps at once — no other change needed.
 */
const USE_LOCAL = false

export function photo(seed: string, w: number, h: number): string {
  if (USE_LOCAL) return `/images/${seed}.jpg`
  return `https://picsum.photos/seed/ice-${seed}/${w}/${h}`
}
