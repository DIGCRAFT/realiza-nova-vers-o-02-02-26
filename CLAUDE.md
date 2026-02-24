# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing pages for **Realiza Projetos em Alumínio**, a premium aluminum window/door company. The site is focused on conversion optimization with interactive product color selection, quote forms, and multiple landing page variants.

## Commands

```bash
pnpm dev          # Start dev server on port 3000 (falls back if busy)
pnpm build        # Build frontend (Vite) + compile server (esbuild)
pnpm start        # Run production server (NODE_ENV=production)
pnpm check        # TypeScript type check (no emit)
pnpm format       # Format all files with Prettier
```

No test runner is configured beyond vitest being installed — there are no test files currently in the project.

## Architecture

This is a **monorepo-style** project with three top-level directories:

- `client/` — React 19 frontend (Vite root)
- `server/` — Express.js static file server (no API, just serves `dist/public`)
- `shared/` — Code shared between client and server (currently just session constants)

### Path Aliases

Configured in both `vite.config.ts` and `tsconfig.json`:
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets/*` → `attached_assets/*`

### Routing (Wouter)

The app uses [Wouter](https://github.com/molefrog/wouter) (with a custom patch at `patches/wouter@3.7.1.patch`) for client-side routing. Two categories of routes exist in `client/src/App.tsx`:

1. **Standalone routes** (no Layout wrapper) — conversion-focused pages:
   - `/landing` → `LandingPage.tsx` (LP-Alumínio)
   - `/lp-4us` → `LandingPage4Us.tsx` (LP-Perfetta)
   - `/orcamento` → `OrcamentoInterativo.tsx`
   - `/obrigado` → `ThankYou.tsx`

2. **Layout-wrapped routes** — standard site pages:
   - `/` → `Home.tsx`
   - `/sobre`, `/projetos`, `/contato`, `/guia-esquadrias`, `/guia-perffeta`

### Product Domain (`client/src/types/products.ts` + `client/src/lib/colors.ts`)

Product lines are defined in `PRODUCT_LINES` (a `Record<string, ProductLineConfig>`) in `colors.ts`:
- **suprema**, **gold**, **perfetta**, **acm**, **aluminio** — each with wood/solid color arrays
- The `ProductLine` type in `types/products.ts` also includes `portas` and `brise` (not yet in colors config)
- Each line optionally has `hasBonus`, `bonusTitle`, `bonusDescription` for the `ExclusiveBonus` component

### UI Components

The `client/src/components/ui/` directory contains shadcn/ui components built on Radix UI primitives. Do not edit these manually — use the shadcn CLI or add components following their patterns.

Custom business components:
- `ColorSelector.tsx` — interactive color picker integrated into landing pages
- `ColorVisualizer.tsx` — real-time color preview
- `ExclusiveBonus.tsx` — lead capture bonus section
- `ExitIntentPopup.tsx` — exit intent detection
- `WhatsAppButton.tsx` — floating WhatsApp CTA

### Styling

Tailwind CSS v4 (via `@tailwindcss/vite` plugin). Prettier config enforces double quotes, 2-space indentation, trailing commas (ES5 style), LF line endings.

### Build Output

- Frontend: `dist/public/` (Vite build)
- Server: `dist/index.js` (esbuild ESM bundle, external packages)
- Production: Express serves `dist/public/` and falls back to `index.html` for all routes (SPA mode)
