import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
} from "react-icons/fi";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiSupabase,
  SiGit,
  SiDocker,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiPrisma,
  SiVercel,
  SiHtml5,
  SiSass,
  SiFigma,
  SiFramer,
  SiPython,
  SiPhp,
  SiMysql,
  SiJsonwebtokens,
  SiZod,
  SiStripe,
  SiFirebase,
} from "react-icons/si";
import { TbApi, TbServer } from "react-icons/tb";
import type { IconType } from "react-icons";

import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const technologyIcons: Record<string, IconType> = {
  "Next.js": SiNextdotjs,
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  HTML5: SiHtml5,
  Sass: SiSass,
  Figma: SiFigma,
  "Framer Motion": SiFramer,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  "REST APIs": TbApi,
  "Server Actions": TbServer,
  JWT: SiJsonwebtokens,
  Zod: SiZod,
  PostgreSQL: SiPostgresql,
  Supabase: SiSupabase,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  Prisma: SiPrisma,
  Git: SiGit,
  Docker: SiDocker,
  Vercel: SiVercel,
  Firebase: SiFirebase,
  Stripe: SiStripe,
  Python: SiPython,
  PHP: SiPhp,
  MySQL: SiMysql,
};

const technologyColors: Record<string, string> = {
  "Next.js": "#FFFFFF",
  React: "#61DAFB",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  "Tailwind CSS": "#06B6D4",
  HTML5: "#E34F26",
  Sass: "#CC6699",
  Figma: "#F24E1E",
  "Framer Motion": "#FFFFFF",
  "Node.js": "#68A063",
  Express: "#FFFFFF",
  "REST APIs": "#FFFFFF",
  "Server Actions": "#FFFFFF",
  JWT: "#FFFFFF",
  Zod: "#3E67B1",
  PostgreSQL: "#336791",
  Supabase: "#3ECF8E",
  MongoDB: "#47A248",
  Redis: "#DC382D",
  Prisma: "#FFFFFF",
  Git: "#F05032",
  Docker: "#2496ED",
  Vercel: "#FFFFFF",
  Firebase: "#FFCA28",
  Stripe: "#635BFF",
  Python: "#3776AB",
  PHP: "#777BB4",
  MySQL: "#4479A1",
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  // Cor do projeto com fallback para o accent do site
  const projectColor = project.color ?? "var(--color-accent)";

  return (
    <main className="w-full px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <Link
          href="/#projetos"
          className="group inline-flex items-center gap-2 text-sm text-text-secondary transition-colors duration-300"
          style={{ ["--hover-color" as string]: projectColor }}
        >
          <FiArrowLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-1 group-hover:text-(--hover-color)"
            aria-hidden="true"
          />

          <span className="transition-colors duration-300 group-hover:text-(--hover-color)">
            Voltar para projetos
          </span>
        </Link>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
          {/* Coluna esquerda */}
          <div>
            {/* Rótulo com traço — na cor do projeto */}
            <div className="flex items-center gap-3">
              <span
                className="h-px w-6 sm:w-8"
                style={{ backgroundColor: projectColor }}
                aria-hidden="true"
              />

              <span
                className="text-xs uppercase tracking-[0.16em] sm:text-sm sm:tracking-[0.2em]"
                style={{ color: projectColor }}
              >
                Projeto
              </span>
            </div>

            {/* Título */}
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-6xl">
              {project.title}
            </h1>

            {/* Descrição */}
            <p className="mt-5 max-w-xl text-base leading-relaxed text-text-secondary sm:mt-6 sm:text-lg">
              {project.description}
            </p>

            {/* Stack — pills com ícone na cor da tecnologia */}
            <div className="mt-8 flex flex-wrap gap-2 sm:mt-10">
              {project.technologies.map((technology) => {
                const Icon = technologyIcons[technology];
                const technologyColor = technologyColors[technology];

                return (
                  <span
                    key={technology}
                    className="group inline-flex items-center gap-2 rounded-full border border-border-subtle px-3 py-1.5 text-sm text-text-secondary transition-all duration-300"
                    style={{ ["--hover-color" as string]: projectColor }}
                  >
                    {Icon && (
                      <Icon
                        size={14}
                        className="shrink-0 transition-colors duration-300 group-hover:text-(--hover-color)"
                        style={
                          technologyColor
                            ? { color: technologyColor }
                            : undefined
                        }
                        aria-hidden="true"
                      />
                    )}

                    <span className="transition-colors duration-300 group-hover:text-(--hover-color)">
                      {technology}
                    </span>
                  </span>
                );
              })}
            </div>

            {/* CTAs — primário na cor do projeto */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition-all duration-300"
                  style={{
                    backgroundColor: projectColor,
                    boxShadow: `0 0 24px ${projectColor}40`,
                  }}
                >
                  <FiExternalLink size={16} aria-hidden="true" />
                  Ver projeto

                  <FiArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-border-subtle px-5 py-2.5 text-sm font-medium text-text-secondary transition-colors duration-300"
                  style={{ ["--hover-color" as string]: projectColor }}
                >
                  <FiGithub
                    size={16}
                    className="transition-colors duration-300 group-hover:text-(--hover-color)"
                    aria-hidden="true"
                  />

                  <span className="transition-colors duration-300 group-hover:text-(--hover-color)">
                    Código
                  </span>

                  <FiArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              )}
            </div>
          </div>

          {/* Preview com glow da cor do projeto */}
          <div
            className="relative mt-2 overflow-hidden rounded-2xl border border-border-subtle sm:mt-4 lg:mt-0"
            style={{
              boxShadow: `0 0 100px ${projectColor}20`,
            }}
          >
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundColor: projectColor,
              }}
              aria-hidden="true"
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