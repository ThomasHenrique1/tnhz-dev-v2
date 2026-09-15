import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="w-full px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/#projetos"
          className="inline-flex items-center gap-2 text-sm opacity-50 transition-opacity duration-300 hover:opacity-100"
        >
          <span aria-hidden="true">←</span>
          Voltar para projetos
        </Link>

        <div className="mt-16 grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <span
              className="text-sm uppercase tracking-[0.2em]"
              style={{ color: project.color }}
            >
              Projeto
            </span>

            <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed opacity-60 sm:text-lg">
              {project.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="border border-black/10 px-3 py-2 text-sm opacity-70"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-6">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-sm font-medium"
                >
                  GitHub
                  <span
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-sm font-medium"
                >
                  Ver projeto
                  <span
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              )}
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-2xl"
            style={{
              boxShadow: `0 0 100px ${project.color}20`,
            }}
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundColor: project.color,
              }}
            />

            <div className="relative">
              <Image
                src={project.preview}
                alt={`Preview do projeto ${project.title}`}
                width={1200}
                height={900}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}