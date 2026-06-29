# ICE — Web Redesign

Production-ready implementation of the **ICE** engineering-company website (lifts, escalators,
HVAC & ventilation — official OTIS distributor in Georgia), built from the Figma design
[ICE Web redesign](https://www.figma.com/design/bYs7yRl3q2s26UCqCd4GaP/ICE-Web-redesign--Copy-?node-id=188-267).

Built with **Nuxt 3 + TypeScript + Tailwind CSS**, with shadcn-style reusable UI components.
Content is in **Georgian (ka)**, taken directly from the Figma file.

---

## Tech stack

| Concern        | Choice                                                        |
| -------------- | ------------------------------------------------------------- |
| Framework      | [Nuxt 3](https://nuxt.com) (Vue 3, SSR)                       |
| Language       | TypeScript (strict)                                           |
| Styling        | Tailwind CSS 3 + design tokens from Figma                     |
| UI primitives  | shadcn-style components (`cva` + `tailwind-merge`)            |
| Fonts          | Noto Sans Georgian + Inter (self-hosted via `@nuxtjs/google-fonts`) |
| Icons          | Inline SVG set (`components/AppIcon.vue`) — zero icon deps    |

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build  -> .output/
npm run preview    # preview the production build
npm run typecheck  # vue-tsc type check
```

## Design tokens (from Figma)

Defined in [`tailwind.config.ts`](./tailwind.config.ts):

- **Primary (navy)** `#041e42` · **Secondary (Otis pink)** `#f65375`
- **Text** `#0d1117` / `#1d3353` · **Neutral surface** `#f1f1f9`
- **Type scale** (DejaVu Sans in Figma → Noto Sans Georgian on web): H1 54px, H2 42px, H3 24px,
  H4 18px, body 16/14/12 — see `theme.extend.fontSize`.
- **Container**: 1200px content width with 120px gutters (`.container-ice`).

## Pages

| Route                       | Source frame (Figma)        |
| --------------------------- | --------------------------- |
| `/`                         | Homepage                    |
| `/about`                    | About us                    |
| `/services`                 | Services (5-step process)   |
| `/projects`                 | Our projects                |
| `/projects/[slug]`          | Project detail              |
| `/products`                 | Our products (categories)   |
| `/products/[category]`      | Product items (listing)     |
| `/products/item/[slug]`     | Product Item (detail)       |
| `/news`                     | News                        |
| `/news/[slug]`              | Article                     |
| `/contacts`                 | Contacts (form + map)       |

Navigation, the slide-in mobile menu and the search overlay are taken from the Figma **Menu** frame.

## Project structure

```
components/
  AppIcon.vue, AppLogo.vue          # global atoms
  ui/        IceButton, Container, SectionHeading, ArrowLink,
             Input, Textarea, StatCounter, Reveal
  layout/    AppHeader, AppFooter, MobileMenu, SearchOverlay, PageHero
  cards/     ProjectCard, ProductCard, NewsCard, ServiceStep,
             TeamCard, FeatureCard, ImageTile
  products/  CategorySidebar
  common/    CtaBand
data/         site, home, about, projects, products, services, news (typed content)
types/        shared TypeScript interfaces
pages/        file-based routing (see table above)
```

## ⚠️ Images / assets — placeholders

> The original Figma photography/icons **could not be exported** because the Figma MCP hit the
> **Starter-plan tool-call limit** during extraction. As agreed, the build ships with **seeded
> placeholder photos** (deterministic [Picsum](https://picsum.photos) images) so layouts, aspect
> ratios and spacing are exact.

**To swap in the real Figma assets:**

1. Export the originals from Figma (`download_assets`) into `public/images/…`.
2. Replace the single helper in [`data/images.ts`](./data/images.ts):

   ```ts
   // before (placeholder)
   export function photo(seed: string, w: number, h: number) {
     return `https://picsum.photos/seed/ice-${seed}/${w}/${h}`
   }
   // after (real assets)
   export function photo(seed: string) {
     return `/images/${seed}.jpg`
   }
   ```

   All cards/sections call `photo(...)`, so updating this one function (and the per-item
   `image` fields in `data/*.ts`) swaps every image at once. Aspect ratios are enforced in
   the components, so replacements stay pixel-consistent.

## Accessibility & quality

- Semantic landmarks (`header`/`main`/`footer`/`nav`/`article`), `lang="ka"`.
- All images have `alt`; icon-only buttons have `aria-label`.
- Keyboard-dismissable overlays (Esc), focus-visible rings, `prefers-reduced-motion` respected.
- Responsive at mobile / tablet / desktop via Tailwind breakpoints (`sm` / `md` / `lg` / `xl`).
