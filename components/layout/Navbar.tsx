"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { navigation } from "@/data/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-subtle bg-bg-primary/80 px-6 backdrop-blur-md sm:px-10 lg:px-16">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between">
        {/* Logo + ponto accent */}
        <Link
          href="#home"
          aria-label="Thomas Henrique - Inicio"
          className="group flex items-center gap-2 transition-opacity duration-300 hover:opacity-90"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/favicon.png"
            alt="TNHZ-DEV"
            width={120}
            height={60}
            className="h-auto w-20 object-contain sm:w-24"
            priority
          />
          
        </Link>

        {/* Links desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item, index) => {
            const isLast = index === navigation.length - 1;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative py-2 text-sm font-medium transition-colors duration-300 ${
                  isLast
                    ? "text-accent hover:text-accent-hover"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ${
                    isLast ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Botão mobile */}
        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((previous) => !previous)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border-subtle text-text-secondary transition-colors duration-300 hover:border-accent hover:text-accent md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 block h-px w-full bg-current transition-all duration-300 ${
                menuOpen ? "top-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-px w-full -translate-y-1/2 bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-full bg-current transition-all duration-300 ${
                menuOpen ? "top-1/2 -rotate-45" : "top-full"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden border-t border-border-subtle transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col py-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 border-b border-border-subtle py-4 text-lg text-text-secondary transition-colors duration-300 last:border-b-0 hover:text-accent"
            >
              {/* Marcador laranja no mobile */}
              <span className="h-px w-4 bg-accent" />
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}