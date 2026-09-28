"use client";

import { useState } from "react";
import {
  FiGlobe,
  FiServer,
} from "react-icons/fi";
import {
  SiDocker,
  SiGit,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import type { IconType } from "react-icons";

interface Technology {
  name: string;
  description: string;
  icon: IconType;
  color?: string;
}

const frontend: Technology[] = [
  {
    name: "Next.js",
    description: "Framework principal utilizado nos meus projetos web.",
    icon: SiNextdotjs,
    color: "#FFFFFF",
  },
  {
    name: "React",
    description: "Biblioteca utilizada para construção de interfaces.",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    description:
      "Utilizado para criar aplicações mais previsíveis e organizadas.",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "JavaScript",
    description: "Base de grande parte das aplicações que desenvolvo.",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "Tailwind CSS",
    description:
      "Utilizado para construir interfaces de forma rápida e consistente.",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
];

const backend: Technology[] = [
  {
    name: "Node.js",
    description:
      "Utilizado no desenvolvimento de aplicações e serviços backend.",
    icon: SiNodedotjs,
    color: "#68A063",
  },
  {
    name: "REST APIs",
    description:
      "Utilizadas para comunicação entre diferentes partes das aplicações.",
    icon: FiGlobe,
    color: "#FFFFFF",
  },
  {
    name: "Server Actions",
    description:
      "Utilizadas para executar operações no servidor em aplicações Next.js.",
    icon: FiServer,
    color: "#FFFFFF",
  },
];

const dataAndTools: Technology[] = [
  {
    name: "PostgreSQL",
    description: "Banco de dados utilizado em aplicações Full Stack.",
    icon: SiPostgresql,
    color: "#336791",
  },
  {
    name: "Supabase",
    description:
      "Utilizado para banco de dados, autenticação e serviços backend.",
    icon: SiSupabase,
    color: "#3ECF8E",
  },
  {
    name: "MySQL",
    description: "Banco de dados relacional utilizado em projetos web.",
    icon: SiMysql,
    color: "#4479A1",
  },
  {
    name: "Git",
    description:
      "Utilizado para versionamento e organização dos projetos.",
    icon: SiGit,
    color: "#F05032",
  },
  {
    name: "Docker",
    description:
      "Utilizado para criação e gerenciamento de ambientes de desenvolvimento.",
    icon: SiDocker,
    color: "#2496ED",
  },
];

export default function Stack() {
  const [activeTechnology, setActiveTechnology] =
    useState<Technology | null>(frontend[0] ?? null);

  const groups = [
    {
      label: "Frontend",
      technologies: frontend,
    },
    {
      label: "Backend",
      technologies: backend,
    },
    {
      label: "Dados & Ferramentas",
      technologies: dataAndTools,
    },
  ];

  return (
    <section
      id="stack"
      className="w-full px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="h-px w-8 bg-accent"
                aria-hidden="true"
              />

              <span className="text-sm uppercase tracking-[0.2em] text-text-secondary">
                Stack
              </span>
            </div>

            <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight text-text-primary sm:text-5xl">
              Ferramentas que uso para construir.
            </h2>

            <p className="mt-6 max-w-md text-base leading-relaxed text-text-secondary sm:text-lg">
              Tecnologias que fazem parte dos projetos que desenvolvo e da
              forma como gosto de trabalhar.
            </p>

            <div className="mt-12 min-h-25">
              {activeTechnology ? (
                <div className="border-l-2 border-accent pl-5">
                  <span className="text-sm uppercase tracking-[0.15em] text-accent">
                    {activeTechnology.name}
                  </span>

                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-text-secondary">
                    {activeTechnology.description}
                  </p>
                </div>
              ) : (
                <p className="text-sm text-text-muted">
                  Passe o cursor sobre uma tecnologia para saber mais.
                </p>
              )}
            </div>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            {groups.map((group) => (
              <div key={group.label}>
                <span className="text-sm uppercase tracking-[0.15em] text-text-muted">
                  {group.label}
                </span>

                <div className="mt-5 space-y-1">
                  {group.technologies.map((technology) => {
                    const Icon = technology.icon;
                    const isActive =
                      activeTechnology?.name === technology.name;

                    return (
                      <button
                        key={technology.name}
                        type="button"
                        onMouseEnter={() =>
                          setActiveTechnology(technology)
                        }
                        onFocus={() =>
                          setActiveTechnology(technology)
                        }
                        className="group flex w-full items-center gap-3 border-b border-border-subtle py-4 text-left transition-colors duration-300"
                      >
                        <Icon
                          size={18}
                          aria-hidden="true"
                          className="shrink-0 text-text-muted transition-all duration-300 group-hover:translate-x-1"
                          style={
                            isActive
                              ? {
                                  color:
                                    technology.color ??
                                    "var(--color-accent)",
                                }
                              : undefined
                          }
                        />

                        <span
                          className={`flex-1 text-lg transition-all duration-300 sm:text-xl ${
                            isActive
                              ? "translate-x-1 font-medium text-accent"
                              : "text-text-secondary group-hover:translate-x-1 group-hover:text-text-primary"
                          }`}
                        >
                          {technology.name}
                        </span>

                        <span
                          className={`text-sm transition-all duration-300 ${
                            isActive
                              ? "translate-x-0 opacity-50"
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
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-border-subtle pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm uppercase tracking-[0.15em] text-text-muted">
              Também já trabalhei com
            </span>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-text-secondary">
              <span className="transition-colors duration-300 hover:text-accent">
                Java
              </span>

              <span className="transition-colors duration-300 hover:text-accent">
                Python
              </span>

              <span className="transition-colors duration-300 hover:text-accent">
                PHP
              </span>

              <span className="transition-colors duration-300 hover:text-accent">
                jQuery
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}