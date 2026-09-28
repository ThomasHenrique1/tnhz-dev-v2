/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import ProjectListItem from "@/components/projects/ProjectListItem";
import { projects } from "@/data/projects";
import type { Project } from "@/types/project";

const featuredProjects = projects.filter((project) => project.featured);

export default function FeaturedProjects() {
  const [activeId, setActiveId] = useState(featuredProjects[0]?.id ?? null);
  const [displayedId, setDisplayedId] = useState(
    featuredProjects[0]?.id ?? null,
  );
  const [isSwapping, setIsSwapping] = useState(false);

  const swapTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeProject =
    featuredProjects.find((p) => p.id === activeId) ?? featuredProjects[0];

  const displayedProject =
    featuredProjects.find((p) => p.id === displayedId) ?? featuredProjects[0];

  // Sincroniza displayedId com activeId usando timeout controlado
  useEffect(() => {
    if (activeId === null || activeId === displayedId) return;

    setIsSwapping(true);

    // Limpa qualquer timeout pendente (evita corrida em hover rápido)
    if (swapTimeoutRef.current) clearTimeout(swapTimeoutRef.current);

    swapTimeoutRef.current = setTimeout(() => {
      setDisplayedId(activeId);
      setIsSwapping(false);
    }, 200);

    return () => {
      if (swapTimeoutRef.current) clearTimeout(swapTimeoutRef.current);
    };
  }, [activeId, displayedId]);

  if (!activeProject || !displayedProject) return null;

  const glowColor = activeProject.color ?? "var(--color-accent)";

  return (
    <section
      id="projetos"
      className="w-full px-6 py-20 sm:px-10 sm:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 sm:mb-16">
          <div className="flex items-center gap-3">
            <span
              className="h-px w-6 bg-accent sm:w-8"
              aria-hidden="true"
            />

            <span className="text-xs uppercase tracking-[0.16em] text-text-secondary sm:text-sm sm:tracking-[0.2em]">
              Projetos selecionados
            </span>
          </div>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-text-primary sm:text-5xl">
            Coisas que eu construí e que valem a pena olhar de perto.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-12">
          {/* Preview da imagem */}
          <div className="flex min-h-72 items-center justify-center sm:min-h-96 lg:min-h-112">
            <div
              className="relative flex w-full max-w-lg items-center justify-center overflow-hidden rounded-2xl border border-border-subtle transition-shadow duration-500"
              style={{
                boxShadow: `0 0 80px ${glowColor}20`,
              }}
            >
              {/* Overlay colorido sutil */}
              <div
                className="absolute inset-0 opacity-[0.08] transition-colors duration-500"
                style={{ backgroundColor: glowColor }}
                aria-hidden="true"
              />

              <div
                className={`relative z-10 w-full transition-all duration-200 ${
                  isSwapping
                    ? "translate-y-2 opacity-0"
                    : "translate-y-0 opacity-100"
                }`}
              >
                <Image
                  placeholder="empty"
                  loading="eager"
                  src={displayedProject.preview}
                  alt={`Preview do projeto ${displayedProject.title}`}
                  width={800}
                  height={800}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Lista */}
          <div className="flex flex-col">
            {featuredProjects.map((project, index) => (
              <ProjectListItem
                key={project.id}
                index={index}
                project={project}
                isActive={activeId === project.id}
                onHover={() => setActiveId(project.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}