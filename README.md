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

No environment variables or external services are needed to build. The Google
Analytics measurement ID defaults to the one in `lib/config.ts` and can be
overridden with `NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY` (see `.env.local.example`).

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
