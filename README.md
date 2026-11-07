# www.decentralization.institute

Website for the Decentralization Institute, built with Next.js (App Router) and
exported as a fully static site.

## Development

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # static export to ./out
pnpm start      # build, then serve ./out
```

No external services are needed to build. Google Analytics is enabled by
setting `NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY` at build time (see
`.env.local.example`); in production this is set in the Cloudflare Pages build
environment. Without it the analytics tag is omitted.

## Layout

- `app/` – one folder per route (`page.tsx` + optional `page.module.css`),
  the root `layout.tsx` (fonts, analytics) and `globals.css` (design tokens and
  base typography).
- `components/` – shared building blocks:
  - `SiteLayout` – header, footer and the optional "Stay up to date" newsletter
    block that wraps every page.
  - `PageHero` – the sand-colored title card + illustration header.
  - `GrayBand` – the light gray band used for notes and the events grid.
  - `EventCard`, `ValueProposition` – content blocks for Events and About.
- `public/images/` – illustrations and photos.

Styles use CSS Modules. The single responsive breakpoint is `max-width: 767px`.
