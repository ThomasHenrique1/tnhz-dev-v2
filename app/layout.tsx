import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Thomas Henrique | Desenvolvedor Full Stack",
    template: "%s | Thomas Henrique",
  },

  description:
    "Portfolio de Thomas Henrique, Desenvolvedor Full Stack. Conheca meus projetos, tecnologias e experiencias no desenvolvimento de aplicacoes web.",

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

  authors: [
    {
      name: "Thomas Henrique",
    },
  ],

  creator: "Thomas Henrique",

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
    <html lang="pt-BR">
      <body className={inter.variable}>
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}