"use client";

import Link from "next/link";
import { useState } from "react";

import { navigation } from "@/data/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-6 sm:px-10 lg:px-16">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between border-b border-black/10">
        <Link
          href="#home"
          aria-label="Thomas Henrique - Inicio"
          className="text-lg font-semibold tracking-tight transition-opacity duration-300 hover:opacity-60"
          onClick={() => setMenuOpen(false)}
        >
          TNHZ
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-2 text-sm opacity-50 transition-opacity duration-300 hover:opacity-100"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((previous) => !previous)}
          className="text-sm opacity-60 transition-opacity duration-300 hover:opacity-100 md:hidden"
        >
          {menuOpen ? "Fechar" : "Menu"}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-b border-black/10 py-6 md:hidden">
          <div className="flex flex-col">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-black/10 py-4 text-lg opacity-60 transition-opacity duration-300 hover:opacity-100 last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}