import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
export function ProjectCard({ project, index }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 animate-rise"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          width={1280}
          height={800}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 font-display text-xs text-muted-foreground backdrop-blur">
          0{index + 1}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              {project.category}
            </p>
            <h3 className="mt-1 text-2xl font-semibold">{project.title}</h3>
          </div>
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
        </div>
        <p className="text-muted-foreground">{project.summary}</p>
        <ul className="mt-auto flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
