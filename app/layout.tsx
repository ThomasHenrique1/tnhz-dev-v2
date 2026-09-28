import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://thomashenrique.dev"; // ← troque pela URL real quando tiver

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Thomas Henrique | Desenvolvedor Full Stack",
    template: "%s | Thomas Henrique",
  },

  description:
    "Portfólio de Thomas Henrique, Desenvolvedor Full Stack. Conheça meus projetos, tecnologias e experiências no desenvolvimento de aplicações web.",

  keywords: [
    "Thomas Henrique",
    "Desenvolvedor Full Stack",
    "Full Stack Developer",
    "Desenvolvedor Web",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
  ],

  authors: [{ name: "Thomas Henrique", url: siteUrl }],
  creator: "Thomas Henrique",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Thomas Henrique",
    title: "Thomas Henrique | Desenvolvedor Full Stack",
    description:
      "Portfólio de Thomas Henrique, Desenvolvedor Full Stack. Conheça meus projetos, tecnologias e experiências.",
    images: [
      {
        url: "/og-image.png", // ← crie essa imagem (1200x630) depois
        width: 1200,
        height: 630,
        alt: "Thomas Henrique — Desenvolvedor Full Stack",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Thomas Henrique | Desenvolvedor Full Stack",
    description:
      "Portfólio de Thomas Henrique, Desenvolvedor Full Stack.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="bg-bg-primary">
      <body
        className={`${inter.variable} flex min-h-screen flex-col bg-bg-primary text-text-primary antialiased`}
      >
        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}