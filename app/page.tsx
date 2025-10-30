import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Database,
  Lock,
  Zap,
  Cloud,
  FileText,
  BarChart3,
  Shield,
  Palette,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Database,
      title: "Prisma ORM",
      description: "Type-safe database access with PostgreSQL",
    },
    {
      icon: Lock,
      title: "NextAuth.js",
      description: "Secure authentication with multiple providers",
    },
    {
      icon: Zap,
      title: "Pusher",
      description: "Real-time updates and notifications",
    },
    {
      icon: Cloud,
      title: "Cloudinary",
      description: "Cloud-based image and file storage",
    },
    {
      icon: FileText,
      title: "PDF Generation",
      description: "Create and download PDF documents",
    },
    {
      icon: BarChart3,
      title: "Recharts",
      description: "Beautiful and responsive data visualizations",
    },
    {
      icon: Shield,
      title: "Zod Validation",
      description: "Type-safe form validation and schemas",
    },
    {
      icon: Palette,
      title: "Shadcn UI",
      description: "Customizable UI components with Tailwind",
    },
  ];

  return (
    <div className="from-background to-muted min-h-screen bg-gradient-to-b">
      <div className="container mx-auto px-4 py-16">
        <header className="mb-16 text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tight">
            Next.js 15 Starter
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
            A modern, full-stack Next.js application with TypeScript,
            authentication, real-time capabilities, and more.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" className="gap-2">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Documentation
            </Button>
          </div>
        </header>

        <section className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Built with Modern Technologies
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <Icon className="text-primary mb-2 h-8 w-8" />
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="bg-card rounded-lg p-8 text-center shadow-sm">
          <h2 className="mb-4 text-2xl font-bold">Ready to Deploy</h2>
          <p className="text-muted-foreground mx-auto mb-6 max-w-xl">
            This project is optimized for deployment on Vercel. Configure your
            environment variables and deploy with a single click.
          </p>
          <Button variant="secondary" size="lg">
            Deploy to Vercel
          </Button>
        </section>
      </div>

      <footer className="text-muted-foreground mt-16 border-t py-8 text-center text-sm">
        <p>
          Built with Next.js 15, TypeScript, and TailwindCSS. Styled with Shadcn
          UI.
        </p>
      </footer>
    </div>
  );
}
