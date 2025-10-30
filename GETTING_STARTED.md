# Getting Started Guide

## Quick Start

### 1. Clone and Install

```bash
git clone <repository-url>
cd <project-name>
npm install
```

### 2. Environment Setup

Copy the example environment file and fill in your credentials:

```bash
cp .env.example .env
```

Edit `.env` and add:

- **DATABASE_URL**: Your PostgreSQL connection string
- **NEXTAUTH_SECRET**: Run `openssl rand -base64 32` to generate
- **NEXTAUTH_URL**: `http://localhost:3000` for development
- **Pusher credentials**: Get from [pusher.com](https://pusher.com)
- **Cloudinary credentials**: Get from [cloudinary.com](https://cloudinary.com)

### 3. Database Setup

```bash
# Generate Prisma Client
npm run db:generate

# Push schema to database (for development)
npm run db:push

# OR create a migration (for production)
npm run db:migrate
```

### 4. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Project Overview

### Key Technologies

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **TailwindCSS v4** - Utility-first CSS framework
- **Shadcn UI** - Re-usable component library
- **Prisma** - Type-safe database ORM
- **NextAuth.js v5** - Authentication solution
- **Pusher** - Real-time WebSocket service
- **Cloudinary** - Image and file storage
- **Recharts** - Chart library
- **Zod** - Schema validation

### Directory Structure

```
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   ├── auth/[...nextauth]/   # NextAuth endpoints
│   │   └── health/               # Health check endpoint
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   ├── loading.tsx               # Loading UI
│   ├── error.tsx                 # Error boundary
│   └── not-found.tsx             # 404 page
├── components/                   # React components
│   ├── providers/                # Context providers
│   └── ui/                       # Shadcn UI components
├── hooks/                        # Custom React hooks
│   └── use-current-user.ts       # Auth hook
├── lib/                          # Utility libraries
│   ├── auth/                     # NextAuth configuration
│   ├── db/                       # Database client
│   ├── utils/                    # Helper functions
│   └── validations/              # Zod schemas
├── prisma/                       # Database schema
│   └── schema.prisma             # Prisma schema with NextAuth models
├── types/                        # TypeScript types
└── proxy.ts                      # Route protection (middleware)
```

## Common Tasks

### Adding a New Page

1. Create a new folder in `app/` (e.g., `app/about/`)
2. Add a `page.tsx` file with your component
3. Optionally add `layout.tsx`, `loading.tsx`, `error.tsx`

Example:

```typescript
// app/about/page.tsx
export default function AboutPage() {
  return <div>About Page</div>;
}
```

### Adding a New API Route

1. Create a folder in `app/api/` (e.g., `app/api/users/`)
2. Add a `route.ts` file with HTTP handlers

Example:

```typescript
// app/api/users/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ users: [] });
}
```

### Adding Shadcn UI Components

```bash
npx shadcn@latest add <component-name>
```

Examples:

```bash
npx shadcn@latest add button
npx shadcn@latest add form
npx shadcn@latest add dialog
```

### Working with the Database

#### Update Schema

1. Edit `prisma/schema.prisma`
2. Run `npm run db:migrate` to create migration
3. Run `npm run db:generate` to update Prisma Client

#### Query Data

```typescript
import { prisma } from "@/lib/db/prisma";

// Find all users
const users = await prisma.user.findMany();

// Create a user
const user = await prisma.user.create({
  data: { email: "user@example.com", name: "John Doe" },
});
```

### Form Validation with Zod

```typescript
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormData = z.infer<typeof schema>;
```

### Using Real-time with Pusher

```typescript
import { pusherServer, pusherClient } from "@/lib/utils/pusher";

// Server-side: Trigger event
await pusherServer.trigger("channel", "event", { data: "value" });

// Client-side: Subscribe to channel
const channel = pusherClient.subscribe("channel");
channel.bind("event", (data) => {
  console.log(data);
});
```

### Uploading to Cloudinary

```typescript
import { uploadImage } from "@/lib/utils/cloudinary";

const result = await uploadImage(base64Image);
console.log(result.secure_url);
```

### Generating PDFs

```typescript
import { createPDFDocument } from "@/lib/utils/pdf";
import { pdf } from "@react-pdf/renderer";

const doc = createPDFDocument({
  title: "My Document",
  content: "Hello World",
});

const blob = await pdf(doc).toBlob();
```

## Authentication

### Protecting Routes

Routes starting with `/dashboard` are automatically protected by proxy (middleware).
The route protection logic is defined in `proxy.ts` at the root of the project.

### Getting Current User

```typescript
"use client";
import { useCurrentUser } from "@/hooks/use-current-user";

export function MyComponent() {
  const { user, isLoading, isAuthenticated } = useCurrentUser();

  if (isLoading) return <div>Loading...</div>;
  if (!isAuthenticated) return <div>Not logged in</div>;

  return <div>Hello {user.name}</div>;
}
```

### Server-side Auth

```typescript
import { auth } from "@/lib/auth/auth";

export default async function Page() {
  const session = await auth();

  if (!session) {
    return <div>Not authenticated</div>;
  }

  return <div>Hello {session.user.name}</div>;
}
```

## Deployment

### Deploying to Vercel

1. Push code to GitHub/GitLab/Bitbucket
2. Import project to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

- Update `NEXTAUTH_URL` to your production domain
- Generate new `NEXTAUTH_SECRET` for production
- Use production database URL
- Update Pusher and Cloudinary credentials if needed

### Database Migrations

```bash
npx prisma migrate deploy
```

## Troubleshooting

### Prisma Client Issues

```bash
rm -rf node_modules/.prisma
npm run db:generate
```

### Type Errors

```bash
npm run type-check
```

### Format Code

```bash
npm run format
```

### Clear Next.js Cache

```bash
rm -rf .next
npm run dev
```

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [NextAuth.js Docs](https://next-auth.js.org)
- [Shadcn UI Docs](https://ui.shadcn.com)
- [TailwindCSS Docs](https://tailwindcss.com/docs)

## Support

For issues or questions, please refer to the documentation or create an issue in the repository.
