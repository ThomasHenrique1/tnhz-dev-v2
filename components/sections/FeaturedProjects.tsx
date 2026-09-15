/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import ProjectListItem from "@/components/projects/ProjectListItem";
import { projects } from "@/data/projects";
import type { Project } from "@/types/project";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured);

  const [activeProject, setActiveProject] = useState<Project | null>(
    featuredProjects[0] ?? null,
  );

  const [displayedProject, setDisplayedProject] = useState<Project | null>(
    featuredProjects[0] ?? null,
  );

  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(true);

  useEffect(() => {
    if (!activeProject) {
      return;
    }

    if (displayedProject?.id === activeProject.id) {
      return;
    }

    setIsImageVisible(false);

    const timeout = setTimeout(() => {
      setDisplayedProject(activeProject);
      setIsPreviewVisible(true);
      setIsImageVisible(true);
    }, 200);

    return () => clearTimeout(timeout);
  }, [activeProject, displayedProject]);

  if (!activeProject || !displayedProject) {
    return null;
  }

  const displayedImage = isPreviewVisible
    ? displayedProject.preview
    : displayedProject.logo;

  const imageAlt = isPreviewVisible
    ? `Preview do projeto ${displayedProject.title}`
    : `Logo do projeto ${displayedProject.title}`;

  return (
    <section
      id="projetos"
      className="w-full px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <span className="text-sm uppercase tracking-[0.2em]">
            Projetos selecionados
          </span>

          <h2 className="mt-4 max-w-3xl text-4xl font-semibold sm:text-5xl">
            Alguns projetos que representam o que eu construo.
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
          <div className="flex min-h-100 items-center justify-center">
            <div
              className="relative flex w-full max-w-lg items-center justify-center overflow-hidden rounded-2xl transition-all duration-500"
              style={{
                boxShadow: `0 0 80px ${activeProject.color}20`,
              }}
            >
              <div
                className="absolute inset-0 opacity-10 transition-colors duration-500"
                style={{
                  backgroundColor: activeProject.color,
                }}
              />

              <div
                className={`relative z-10 w-full transition-all duration-200 ${
                  isImageVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-2 opacity-0"
                }`}
              >
                <Image
                  placeholder="empty"
                  loading="eager"
                  src={displayedImage}
                  alt={imageAlt}
                  width={800}
                  height={800}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            {featuredProjects.map((project, index) => (
              <ProjectListItem
                key={project.id}
                index={index}
                project={project}
                isActive={activeProject.id === project.id}
                onHover={() => {
                  setActiveProject(project);
                  setIsPreviewVisible(true);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}