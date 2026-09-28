import { FiArrowDown } from "react-icons/fi";

import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-5rem)] w-full items-center overflow-hidden px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
    >
      {/* Glow laranja sutil ao fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[5%] top-[30%] h-64 w-64 rounded-full bg-accent/10 blur-[90px] sm:left-[10%] sm:h-80 sm:w-80 sm:blur-[110px] lg:left-[18%] lg:top-[28%] lg:h-96 lg:w-96 lg:blur-[120px]"
      />

      {/* Pequeno detalhe vertical da identidade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-1/2 hidden h-28 w-px -translate-y-1/2 bg-linear-to-b from-transparent via-accent/30 to-transparent sm:block lg:right-[10%] lg:h-32"
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-center">
        <div className="max-w-4xl">
          {/* Rótulo */}
          <div className="flex items-center gap-3">
            <span
              className="h-px w-6 bg-accent sm:w-8"
              aria-hidden="true"
            />

            <p className="text-xs uppercase tracking-[0.16em] text-text-secondary sm:text-sm sm:tracking-[0.2em]">
              {profile.role}
            </p>
          </div>

          {/* Nome principal */}
          <h1 className="mt-5 text-5xl font-semibold leading-[0.92] tracking-tight text-text-primary sm:mt-6 sm:text-7xl lg:text-8xl">
            {profile.name}
            <span
              className="ml-1 inline-block text-accent sm:ml-2"
              aria-hidden="true"
            >
              .
            </span>
          </h1>
        </div>

        {/* Indicador de scroll */}
        <a
          href="#projetos"
          className="group mt-14 flex w-fit items-center gap-3 text-[0.7rem] uppercase tracking-[0.16em] text-text-muted transition-colors duration-300 hover:text-accent sm:mt-20 sm:text-xs sm:tracking-[0.2em] lg:mt-24"
        >
          <span>Explorar projetos</span>

          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border-subtle transition-all duration-300 group-hover:translate-y-1 group-hover:border-accent">
            <FiArrowDown size={14} aria-hidden="true" />
          </span>
        </a>
      </div>
    </section>
  );
}