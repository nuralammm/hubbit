# Next.js 15 App Router Starter (TypeScript)

A pre-configured starter using Next.js 15 App Router with TailwindCSS, shadcn/ui, Prisma, NextAuth v5, Recharts, Pusher, Cloudinary SDK, PDF generation, and useful utilities (Zod, class-variance-authority, Lucide icons, date-fns).

Primary brand color is based on #1E9C89.

## What's included

- Next.js 15 App Router + TypeScript
- TailwindCSS with CSS variables theme, brand color, and shadcn/ui base components (Button, Input, Label, Card)
- Shadcn-inspired design tokens and utilities (cn, cva)
- Prisma ORM with a schema ready for NextAuth adapter
- NextAuth v5 (Auth.js) with GitHub provider scaffold and Prisma adapter
- Recharts with a sample responsive chart
- Pusher server and client helpers
- Cloudinary v2 SDK configured helper
- PDF generation utility using `pdf-lib`
- Useful utilities: Zod, class-variance-authority, lucide-react, date-fns
- Linting (eslint-config-next) and formatting (Prettier)

## Getting started

1. Install dependencies

```bash
pnpm install # or npm install / yarn
```

2. Copy environment variables

```bash
cp .env.example .env.local
```

Fill in values for:
- Database: `DATABASE_URL`
- Auth: `AUTH_SECRET` (or `NEXTAUTH_SECRET`), and `AUTH_URL` (or `NEXTAUTH_URL`)
- OAuth Provider (example GitHub): `GITHUB_ID`, `GITHUB_SECRET`
- Pusher: `PUSHER_APP_ID`, `PUSHER_KEY`, `PUSHER_SECRET`, `PUSHER_CLUSTER` and client `NEXT_PUBLIC_PUSHER_*`
- Cloudinary: `CLOUDINARY_*`

3. Initialize Prisma

```bash
npm run prisma:generate
npm run prisma:migrate -- --name init
```

4. Start the dev server

```bash
npm run dev
```

Open http://localhost:3000

## Project structure

- `app/` – App Router routes, API routes, and root layout
- `components/` – UI components (shadcn/ui-inspired)
- `lib/` – Prisma client, NextAuth config, utilities, and 3rd-party SDK helpers
- `prisma/` – Prisma schema
- `types/` – Types and module augmentations

## Theming

Tailwind is configured with CSS variables and a color system based on shadcn/ui. The primary color is aligned with `#1E9C89` and available as `text-primary`, `bg-primary`, etc.

Global styles: `app/globals.css`
Tailwind config: `tailwind.config.ts`

## Authentication

NextAuth v5 is set up under `app/api/auth/[...nextauth]/route.ts` with a Prisma adapter and GitHub provider scaffold. Update `.env.local` with your provider secrets. Session strategy uses JWT by default and can be switched to database if desired.

## Realtime (Pusher)

Use `lib/pusher.ts` for server and client usage. Ensure env vars are set for both server and client.

## Cloudinary

Use the configured `cloudinary` export from `lib/cloudinary.ts` to upload or transform media.

## PDF generation

Use `generateHelloPdf(name)` from `lib/pdf.ts` to generate a simple PDF (returns a Uint8Array). Adjust as needed for your workflows.

## Scripts

- `dev` – Next.js dev server
- `build` – Build for production
- `start` – Start production server
- `lint` – Lint project with ESLint
- `format` – Prettier write
- `typecheck` – TypeScript check without emit
- `prisma:*` – Prisma helpers

## Vercel deployment

- Import the project into Vercel
- Set the following environment variables in your Vercel project settings:
  - `DATABASE_URL`
  - `AUTH_SECRET` (or `NEXTAUTH_SECRET`)
  - `AUTH_URL` (or rely on Vercel `VERCEL_URL`) / `NEXTAUTH_URL`
  - `GITHUB_ID`, `GITHUB_SECRET` (or your chosen OAuth provider)
  - `PUSHER_APP_ID`, `PUSHER_KEY`, `PUSHER_SECRET`, `PUSHER_CLUSTER`
  - `NEXT_PUBLIC_PUSHER_KEY`, `NEXT_PUBLIC_PUSHER_CLUSTER`
  - `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`
- Ensure your database is accessible from Vercel
- After setting env vars, trigger a deployment

Prisma on Vercel:
- Use a managed Postgres provider
- Run `prisma generate` locally before deploying, or set up a build step (already included) that installs dependencies and builds.

## Notes

- This starter uses the App Router exclusively (`app/` directory)
- Tailwind content paths scoped to `app/`, `components/`, and `lib/`
- Fonts are loaded using `next/font` (Inter) and wired to Tailwind's `font-sans`
- Brand color and theme are configured via CSS variables in `globals.css`
