"use client";

import { useState } from "react";

interface Technology {
  name: string;
  description: string;
}

const frontend: Technology[] = [
  {
    name: "Next.js",
    description: "Framework principal utilizado nos meus projetos web.",
  },
  {
    name: "React",
    description: "Biblioteca utilizada para construção de interfaces.",
  },
  {
    name: "TypeScript",
    description: "Utilizado para criar aplicações mais previsíveis e organizadas.",
  },
  {
    name: "JavaScript",
    description: "Base de grande parte das aplicações que desenvolvo.",
  },
  {
    name: "Tailwind CSS",
    description: "Utilizado para construir interfaces de forma rápida e consistente.",
  },
];

const backend: Technology[] = [
  {
    name: "Node.js",
    description: "Utilizado no desenvolvimento de aplicações e serviços backend.",
  },
  {
    name: "REST APIs",
    description: "Utilizadas para comunicação entre diferentes partes das aplicações.",
  },
  {
    name: "Server Actions",
    description: "Utilizadas para executar operações no servidor em aplicações Next.js.",
  },
];

const dataAndTools: Technology[] = [
  {
    name: "PostgreSQL",
    description: "Banco de dados utilizado em aplicações Full Stack.",
  },
  {
    name: "Supabase",
    description: "Utilizado para banco de dados, autenticação e serviços backend.",
  },
  {
    name: "Git",
    description: "Utilizado para versionamento e organização dos projetos.",
  },
  {
    name: "Docker",
    description: "Utilizado para criação e gerenciamento de ambientes de desenvolvimento.",
  },
];

function TechnologyList({
  technologies,
  activeTechnology,
  onSelect,
}: {
  technologies: Technology[];
  activeTechnology: Technology | null;
  onSelect: (technology: Technology) => void;
}) {
  return (
    <div className="space-y-1">
      {technologies.map((technology) => {
        const isActive = activeTechnology?.name === technology.name;

        return (
          <button
            key={technology.name}
            type="button"
            onMouseEnter={() => onSelect(technology)}
            onFocus={() => onSelect(technology)}
            className="group flex w-full items-center justify-between border-b border-black/10 py-4 text-left transition-all duration-300"
          >
            <span
              className={`text-lg transition-all duration-300 sm:text-xl ${
                isActive
                  ? "translate-x-2 font-medium"
                  : "opacity-70 group-hover:translate-x-2 group-hover:opacity-100"
              }`}
            >
              {technology.name}
            </span>

            <span
              className={`text-sm transition-all duration-300 ${
                isActive
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-50"
              }`}
              aria-hidden="true"
            >
              ↗
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default function Stack() {
  const [activeTechnology, setActiveTechnology] =
    useState<Technology | null>(null);

  return (
    <section
      id="stack"
      className="w-full px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <span className="text-sm uppercase tracking-[0.2em]">
              Stack
            </span>

            <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">
              Ferramentas que uso para construir.
            </h2>

            <p className="mt-6 max-w-md text-base leading-relaxed opacity-60 sm:text-lg">
              Tecnologias que fazem parte dos projetos que desenvolvo e da
              forma como gosto de trabalhar.
            </p>

            <div className="mt-12 min-h-25">
              {activeTechnology ? (
                <div className="border-l-2 border-black/20 pl-5">
                  <span className="text-sm uppercase tracking-[0.15em] opacity-40">
                    {activeTechnology.name}
                  </span>

                  <p className="mt-2 max-w-sm text-sm leading-relaxed opacity-60">
                    {activeTechnology.description}
                  </p>
                </div>
              ) : (
                <p className="text-sm opacity-40">
                  Passe o cursor sobre uma tecnologia para saber mais.
                </p>
              )}
            </div>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <span className="text-sm uppercase tracking-[0.15em] opacity-40">
                Frontend
              </span>

              <div className="mt-5">
                <TechnologyList
                  technologies={frontend}
                  activeTechnology={activeTechnology}
                  onSelect={setActiveTechnology}
                />
              </div>
            </div>

            <div>
              <span className="text-sm uppercase tracking-[0.15em] opacity-40">
                Backend
              </span>

              <div className="mt-5">
                <TechnologyList
                  technologies={backend}
                  activeTechnology={activeTechnology}
                  onSelect={setActiveTechnology}
                />
              </div>
            </div>

            <div>
              <span className="text-sm uppercase tracking-[0.15em] opacity-40">
                Dados & Ferramentas
              </span>

              <div className="mt-5">
                <TechnologyList
                  technologies={dataAndTools}
                  activeTechnology={activeTechnology}
                  onSelect={setActiveTechnology}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-black/10 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm uppercase tracking-[0.15em] opacity-40">
              Também já trabalhei com
            </span>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm opacity-60">
              <span>Java</span>
              <span>Python</span>
              <span>PHP</span>
              <span>MySQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}