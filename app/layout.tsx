import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Next.js 15 Starter",
    template: "%s | Next.js 15 Starter",
  },
  description:
    "A modern, full-stack Next.js 15 application with TypeScript, authentication, real-time capabilities, and more.",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "TailwindCSS",
    "Prisma",
    "NextAuth",
    "Pusher",
    "Cloudinary",
  ],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Next.js 15 Starter",
    description: "A modern, full-stack Next.js 15 application with TypeScript",
    siteName: "Next.js 15 Starter",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js 15 Starter",
    description: "A modern, full-stack Next.js 15 application with TypeScript",
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
