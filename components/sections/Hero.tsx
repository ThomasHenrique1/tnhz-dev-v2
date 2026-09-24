import { FiArrowDown } from "react-icons/fi";

import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-5rem)] w-full items-center overflow-hidden px-6 py-20 sm:px-10 lg:px-16"
    >
      {/* Glow laranja sutil ao fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[18%] top-[28%] h-96 w-96 rounded-full bg-accent/10 blur-[120px]"
      />

      {/* Pequeno detalhe vertical da identidade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[10%] top-1/2 hidden h-32 w-px -translate-y-1/2 bg-linear-to-b from-transparent via-accent/30 to-transparent lg:block"
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-center">
        <div className="max-w-4xl">
          {/* Rótulo */}
          <div className="flex items-center gap-3">
            <span
              className="h-px w-8 bg-accent"
              aria-hidden="true"
            />

            <p className="text-sm uppercase tracking-[0.2em] text-text-secondary">
              {profile.role}
            </p>
          </div>

          {/* Nome principal */}
          <h1 className="mt-6 text-6xl font-semibold leading-[0.9] tracking-tight text-text-primary sm:text-7xl lg:text-8xl">
            {profile.name}
            <span
              className="ml-2 inline-block text-accent"
              aria-hidden="true"
            >
              .
            </span>
          </h1>
        </div>

        {/* Indicador de scroll */}
        <a
          href="#projetos"
          className="group mt-20 flex w-fit items-center gap-3 text-xs uppercase tracking-[0.2em] text-text-muted transition-colors duration-300 hover:text-accent sm:mt-24"
        >
          <span>Explorar projetos</span>

          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border-subtle transition-all duration-300 group-hover:border-accent group-hover:translate-y-1">
            <FiArrowDown size={14} aria-hidden="true" />
          </span>
        </a>
      </div>
    </section>
  );
}