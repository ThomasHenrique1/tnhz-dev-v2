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
  // Fallback: se o projeto não tiver cor definida, usa o accent laranja
  const accentColor = project.color ?? "var(--color-accent)";

  return (
    <Link
      href={`/projects/${project.slug}`}
      onMouseEnter={onHover}
      onFocus={onHover}
      className="group relative block border-b border-border-subtle py-8 transition-colors duration-300"
    >
      {/* Linha superior animada com a cor do projeto */}
      <span
        className="absolute left-0 top-0 h-px transition-all duration-500 ease-out"
        style={{
          width: isActive ? "100%" : "0%",
          backgroundColor: accentColor,
        }}
      />

      <div className="flex items-start justify-between gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            {/* Número do índice */}
            <span
              className={`text-sm font-medium tabular-nums transition-colors duration-300 ${
                isActive ? "" : "text-text-muted"
              }`}
              style={isActive ? { color: accentColor } : undefined}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Título */}
            <h3
              className={`text-3xl font-semibold transition-colors duration-300 sm:text-4xl ${
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

        {/* Seta — agora com React Icons */}
        <FiArrowUpRight
          size={22}
          aria-hidden="true"
          className={`mt-2 shrink-0 transition-all duration-300 ${
            isActive
              ? "translate-x-1 -translate-y-0.5 opacity-100"
              : "translate-x-0 opacity-40 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:opacity-100"
          }`}
          style={isActive ? { color: accentColor } : undefined}
        />
      </div>
    </Link>
  );
}