import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import type { Project } from "@/types/project";

interface ProjectListItemProps {
  project: Project;
  index: number;
  isActive: boolean;
  onHover: () => void;
}

export default function ProjectListItem({
  project,
  index,
  isActive,
  onHover,
}: ProjectListItemProps) {
  const accentColor = project.color ?? "var(--color-accent)";

  return (
    <Link
      href={`/projects/${project.slug}`}
      onMouseEnter={onHover}
      onFocus={onHover}
      className={`group relative block border-b border-border-subtle py-6 transition-colors duration-300 sm:py-8 ${
        isActive ? "" : ""
      }`}
    >
      {/* Linha superior animada (GPU-friendly) */}
      <span
        className={`absolute left-0 top-0 h-0.5 w-full origin-left transition-transform duration-300 ease-out ${
          isActive ? "scale-x-100" : "scale-x-0"
        }`}
        style={{ backgroundColor: accentColor }}
        aria-hidden="true"
      />

      <div className="flex items-start justify-between gap-4 sm:gap-6">
        <div className="min-w-0 space-y-3">
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Número do índice — usa secondary no inativo pra não sumir */}
            <span
              className={`shrink-0 text-sm font-medium tabular-nums transition-colors duration-300 ${
                isActive ? "" : "text-text-secondary"
              }`}
              style={isActive ? { color: accentColor } : undefined}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Título */}
            <h3
              className={`min-w-0 text-2xl font-semibold leading-tight transition-colors duration-300 sm:text-4xl ${
                isActive ? "" : "text-text-primary"
              }`}
              style={isActive ? { color: accentColor } : undefined}
            >
              {project.title}
            </h3>
          </div>

          {/* Descrição */}
          <p
            className={`max-w-md text-sm leading-relaxed transition-colors duration-300 sm:text-base ${
              isActive ? "text-text-secondary" : "text-text-muted"
            }`}
          >
            {project.shortDescription}
          </p>
        </div>

        {/* Seta dentro de um círculo — alvo visual claro */}
        <div
          className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:mt-2 sm:h-10 sm:w-10 ${
            isActive
              ? "border-transparent"
              : "border-border-subtle group-hover:border-accent"
          }`}
          style={
            isActive
              ? { backgroundColor: `${accentColor}1A` }
              : undefined
          }
          aria-hidden="true"
        >
          <FiArrowUpRight
            size={17}
            className={`transition-all duration-300 sm:size-4.5 ${
              isActive
                ? "translate-x-0.5 -translate-y-0.5"
                : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            }`}
            style={isActive ? { color: accentColor } : undefined}
          />
        </div>
      </div>
    </Link>
  );
}