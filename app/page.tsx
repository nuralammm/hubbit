import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SampleChart } from "@/components/charts/sample-chart";
import { Github } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden">
        <div className="container py-24 md:py-32">
          <div className="flex flex-col items-center text-center gap-6">
            <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
              Next.js 15 App Router • Tailwind • Shadcn UI
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Ready to build with the teal brand you love
            </h1>
            <p className="max-w-2xl text-muted-foreground">
              This starter comes with authentication, database, UI components, charts, realtime, media,
              and PDF utilities pre-wired. Customize and ship fast.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/api/auth/signin">Sign in</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="https://github.com" target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  Star the template
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-2 font-semibold">Recharts Example</h3>
            <p className="mb-4 text-sm text-muted-foreground">A simple area chart with your brand.</p>
            <SampleChart />
          </div>

          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-2 font-semibold">Utility-first theme</h3>
            <p className="text-sm text-muted-foreground">
              Colors, radiuses, and fonts are configured with CSS variables and Tailwind extend.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-2 font-semibold">What’s inside</h3>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>NextAuth v5 with Prisma</li>
              <li>Pusher client/server helpers</li>
              <li>Cloudinary SDK config</li>
              <li>PDF generation utility</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
