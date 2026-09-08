import Link from "next/link";

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
  return (
    <Link
      href={`/projects/${project.slug}`}
      onMouseEnter={onHover}
      onFocus={onHover}
      className="group relative border-b border-black/10 py-8 transition-all duration-300"
      style={{
        opacity: isActive ? 1 : 0.45,
      }}
    >
      <span
        className="absolute left-0 top-0 h-0.5 transition-all duration-300"
        style={{
          width: isActive ? "100%" : "0%",
          backgroundColor: project.color,
        }}
      />

      <div className="flex items-start justify-between gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span
              className="text-sm font-medium tabular-nums transition-colors duration-300"
              style={{
                color: isActive ? project.color : "inherit",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3
              className="text-3xl font-semibold transition-colors duration-300 sm:text-4xl"
              style={{
                color: isActive ? project.color : "inherit",
              }}
            >
              {project.title}
            </h3>
          </div>

          <p className="max-w-md text-sm leading-relaxed opacity-70 sm:text-base">
            {project.shortDescription}
          </p>
        </div>

        <span
          className={`mt-2 text-xl transition-all duration-300 ${
            isActive
              ? "translate-x-1 opacity-100"
              : "translate-x-0 opacity-50 group-hover:translate-x-1 group-hover:opacity-100"
          }`}
          aria-hidden="true"
          style={{
            color: isActive ? project.color : "inherit",
          }}
        >
          ↗
        </span>
      </div>
    </Link>
  );
}