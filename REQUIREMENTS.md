# REQUIREMENTS

Repository audit for the current `traids_future` codebase only. No installation or code changes were performed to produce this document.

## Project Overview

- Framework: Next.js App Router
- Language: TypeScript
- Package manager: `pnpm`
- Styling: Tailwind CSS v4 via `@import "tailwindcss";`
- Motion: Framer Motion
- Forms: React Hook Form + Zod
- Notifications: Sonner

## Detected Tooling

- Package manager: `pnpm`
  - Evidence: `pnpm-lock.yaml` exists, `pnpm-workspace.yaml` exists, and no `package-lock.json` or `yarn.lock` is present.
- Node.js requirement: `>=20.9.0`
  - Evidence: installed `next@16.2.9` declares `engines.node` as `>=20.9.0`.
- TypeScript config: [`tsconfig.json`](./tsconfig.json)
- Next config: [`next.config.ts`](./next.config.ts)
- ESLint config: [`eslint.config.mjs`](./eslint.config.mjs)
- PostCSS config: [`postcss.config.mjs`](./postcss.config.mjs)
- Prettier config: not present in the repository
- Tailwind config: not present as a standalone file; Tailwind v4 is loaded from CSS in [`src/app/globals.css`](./src/app/globals.css)

## Environment Variables

No environment variables are currently required by the codebase.

- No `.env.example` file is present.
- No `.env` file is present.
- No `process.env` references were found in `src/`.

## External Services / APIs

The app does not require any runtime API keys or backend services.

External network resources used by the current code:

- `images.unsplash.com` for remote images
  - Configured in [`next.config.ts`](./next.config.ts)
- Google Fonts via `next/font/google`
  - Fonts used: `Inter` and `Outfit` in [`src/app/layout.tsx`](./src/app/layout.tsx)
- Outbound social links are hardcoded for LinkedIn and Twitter, but they are not API integrations

## Dependency Inventory

The lists below include only packages that are actually referenced by the current source tree.

### Runtime Dependencies

- `next@16.2.9`
  - App router, routing, image optimization, fonts, server/client rendering
- `react@19.2.4`
  - UI runtime
- `react-dom@19.2.4`
  - DOM rendering
- `framer-motion@12.40.0`
  - Scroll reveals, section transitions, page transitions, image settle animations
- `sonner@2.0.7`
  - Toast notifications
- `react-hook-form@7.80.0`
  - Contact form state management
- `@hookform/resolvers@5.4.0`
  - Zod resolver for React Hook Form
- `zod@4.4.3`
  - Form validation schema
- `lucide-react@1.21.0`
  - Icon set
- `class-variance-authority@0.7.1`
  - Variant-based component class composition
- `clsx@2.1.1`
  - Conditional class name composition
- `tailwind-merge@3.6.0`
  - Tailwind class deduplication/merge helper

### Development Dependencies

- `@tailwindcss/postcss@4.3.1`
  - PostCSS integration for Tailwind CSS v4
- `@types/node@20.19.43`
  - Node.js type definitions
- `@types/react@19.2.17`
  - React type definitions
- `@types/react-dom@19.2.3`
  - React DOM type definitions
- `eslint@9.39.4`
  - Lint runner
- `eslint-config-next@16.2.9`
  - Next.js ESLint rules
- `tailwindcss@4.3.1`
  - Tailwind CSS build system
- `typescript@5.9.3`
  - Type checker / compiler

### Build Tools

- `next@16.2.9`
  - Build/runtime framework
- `typescript@5.9.3`
  - Type checking
- `eslint@9.39.4`
  - Code quality checks
- `eslint-config-next@16.2.9`
  - Next-specific lint rules
- `tailwindcss@4.3.1`
  - CSS utility build pipeline
- `@tailwindcss/postcss@4.3.1`
  - Tailwind PostCSS plugin

### UI / Animation Libraries

- `framer-motion@12.40.0`
- `sonner@2.0.7`

### Styling Libraries

- `tailwindcss@4.3.1`
- `class-variance-authority@0.7.1`
- `clsx@2.1.1`
- `tailwind-merge@3.6.0`

### Icons

- `lucide-react@1.21.0`

### Fonts

- `next/font/google` is used in source
- Fonts loaded:
  - `Inter`
  - `Outfit`

### Utilities

- `react-hook-form@7.80.0`
- `@hookform/resolvers@5.4.0`
- `zod@4.4.3`

## Packages Present But Not Referenced By Current Source

These packages are listed in `package.json` but are not currently imported anywhere in `src/`:

- `cmdk@1.1.1`
- `date-fns@4.4.0`
- `embla-carousel-react@8.6.0`
- `nanoid@5.1.15`

## Prerequisites

- Node.js `>=20.9.0`
- `pnpm`
- A network connection for:
  - installing dependencies
  - loading remote Unsplash images
  - downloading Google fonts through `next/font/google`

## Setup Commands

### Clone

```bash
git clone <REPO_URL> traids_future
cd traids_future
```

### Install Dependencies

```bash
pnpm install
```

### Configure Environment Variables

```bash
# No environment variables are required for the current repository.
```

### Run Development Server

```bash
pnpm dev
```

### Build

```bash
pnpm build
```

### Start Production

```bash
pnpm start
```

### Run Lint

```bash
pnpm lint
```

### Type Check

```bash
pnpm exec tsc --noEmit
```

### Tests

```bash
# No test script is defined in package.json.
```

## Troubleshooting

### Missing dependencies

- Run `pnpm install` from the repository root.
- If the install cache or build artifacts look corrupted, remove `.next/` and reinstall:

```bash
Remove-Item -Recurse -Force .next
pnpm install
```

### Wrong Node.js version

- The installed Next.js version requires Node `>=20.9.0`.
- If `pnpm dev` or `pnpm build` fails early, confirm your runtime:

```bash
node -v
```

### Missing environment variables

- No environment variables are required today.
- If future changes add them, create `.env.local` and document them in `.env.example`.

### Port conflicts

- The dev server defaults to port `3000`.
- If that port is in use, stop the conflicting process or run Next on another port:

```bash
pnpm dev -- --port 3001
```

### Remote image or font loading issues

- Remote images come from `images.unsplash.com`.
- Fonts are loaded through Google font support in Next.js.
- If those fail, confirm outbound network access.

### pnpm build warnings around native packages

- This workspace already allows builds for `sharp` and `unrs-resolver` in [`pnpm-workspace.yaml`](./pnpm-workspace.yaml).
- If pnpm reports native build issues, reinstall dependencies after confirming Node is correct.

## Project Dependency Summary

- Total runtime packages: 12
- Total dev packages: 8
- Framework version: Next.js `16.2.9`
- Package manager: `pnpm`
- Node.js requirement: `>=20.9.0`
