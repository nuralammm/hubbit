# Next.js 15 App Router Project

A modern, full-stack Next.js 15 application with TypeScript, featuring authentication, real-time capabilities, file uploads, and PDF generation.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS v4 + Shadcn UI
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** NextAuth.js v5
- **Real-time:** Pusher
- **File Storage:** Cloudinary
- **Charts:** Recharts
- **PDF Generation:** @react-pdf/renderer
- **Form Validation:** Zod
- **Icons:** Lucide React
- **Date Handling:** date-fns

## Features

- ✅ Server-side rendering with App Router
- ✅ Type-safe database with Prisma
- ✅ Secure authentication with NextAuth
- ✅ Real-time updates with Pusher
- ✅ Cloud image storage with Cloudinary
- ✅ PDF document generation
- ✅ Form validation with Zod
- ✅ Beautiful UI components with Shadcn UI
- ✅ Custom teal color palette (#1E9C89)
- ✅ Dark mode support

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database
- Pusher account
- Cloudinary account

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <project-name>
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

Edit `.env` and fill in your credentials:

- `DATABASE_URL`: Your PostgreSQL connection string
- `NEXTAUTH_SECRET`: Generate with `openssl rand -base64 32`
- `NEXTAUTH_URL`: Your app URL (http://localhost:3000 for development)
- Pusher credentials from your Pusher dashboard
- Cloudinary credentials from your Cloudinary dashboard

4. Set up the database:

```bash
npm run db:push
```

5. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking
- `npm run db:generate` - Generate Prisma Client
- `npm run db:push` - Push schema changes to database
- `npm run db:migrate` - Create and run migrations
- `npm run db:studio` - Open Prisma Studio

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   └── auth/          # NextAuth routes
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   └── ui/                # Shadcn UI components
├── lib/                   # Utility functions
│   ├── auth/              # Authentication setup
│   ├── db/                # Database client
│   └── utils/             # Utilities (Pusher, Cloudinary, PDF)
├── prisma/                # Database schema
│   └── schema.prisma      # Prisma schema
├── types/                 # TypeScript type definitions
└── public/                # Static assets
```

## Environment Variables

See `.env.example` for all required environment variables.

### Required Variables:

- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_URL` - Application URL
- `NEXTAUTH_SECRET` - Secret for NextAuth
- `PUSHER_APP_ID`, `PUSHER_KEY`, `PUSHER_SECRET`, `PUSHER_CLUSTER` - Pusher credentials
- `NEXT_PUBLIC_PUSHER_KEY`, `NEXT_PUBLIC_PUSHER_CLUSTER` - Public Pusher credentials
- `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` - Cloudinary credentials
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` - Public Cloudinary cloud name

### Optional Variables:

- OAuth provider credentials (Google, GitHub, etc.)
- Email provider credentials (for magic links)

## Deployment on Vercel

This project is optimized for deployment on Vercel:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Import your project to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your repository

3. Configure environment variables:
   - Add all variables from `.env.example` in the Vercel dashboard
   - Update `NEXTAUTH_URL` to your Vercel domain
   - Generate a new `NEXTAUTH_SECRET` for production

4. Set up database:
   - Use Vercel Postgres, Supabase, or your preferred PostgreSQL provider
   - Update `DATABASE_URL` in Vercel environment variables
   - Run migrations:
     ```bash
     npx prisma migrate deploy
     ```

5. Deploy:
   - Vercel will automatically deploy on every push to your main branch
   - Configure deployment branches in Vercel settings

### Vercel Prerequisites

- ✅ PostgreSQL database (Vercel Postgres, Supabase, Railway, etc.)
- ✅ All environment variables configured
- ✅ Database migrations run
- ✅ Pusher and Cloudinary accounts set up
- ✅ OAuth providers configured (if using)

### Post-Deployment

1. Test authentication flows
2. Verify database connections
3. Check real-time features (Pusher)
4. Test file uploads (Cloudinary)
5. Verify PDF generation
6. Set up monitoring and error tracking

## Customization

### Color Palette

The app uses a custom teal color palette (#1E9C89). To customize:

- Edit CSS variables in `app/globals.css`
- Update the `--primary` color values

### Adding Components

```bash
npx shadcn@latest add <component-name>
```

### Database Schema

1. Edit `prisma/schema.prisma`
2. Run `npm run db:migrate` to create a migration
3. Run `npm run db:generate` to update the Prisma Client

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [NextAuth.js Documentation](https://next-auth.js.org)
- [Shadcn UI Documentation](https://ui.shadcn.com)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Pusher Documentation](https://pusher.com/docs)
- [Cloudinary Documentation](https://cloudinary.com/documentation)

## License

MIT
