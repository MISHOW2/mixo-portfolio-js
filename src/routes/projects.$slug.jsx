import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProject, projects } from "@/data/portfolio";
export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found — Mixo Shibambo" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — Mixo Shibambo`;
    return {
      meta: [
        { title },
        { name: "description", content: project.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: project.summary },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-5 py-32 text-center">
      <h1 className="text-4xl font-bold">Project not found</h1>
      <Button asChild variant="line" className="mt-8">
        <Link to="/">Back to all work</Link>
      </Button>
    </div>
  ),
  component: ProjectPage,
});
function ProjectPage() {
  const { project } = Route.useLoaderData();
  const screenshots = project.screenshots ?? [project.image];
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length] ?? project;
  return (
    <article className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
      <Link
        to="/"
        hash="work"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" /> All projects
      </Link>

      <header className="mt-8 animate-rise">
        <p className="eyebrow">
          {project.category} · {project.year}
        </p>
        <h1 className="mt-3 text-4xl font-bold sm:text-6xl">{project.title}</h1>
        <p className="mt-4 max-w-2xl text-xl text-muted-foreground">{project.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {project.liveUrl ? (
            <Button asChild variant="ember" size="lg">
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                View live <ExternalLink />
              </a>
            </Button>
          ) : (
            <Button variant="ember" size="lg" disabled>
              Live link coming soon
            </Button>
          )}
          {project.repoUrl ? (
            <Button asChild variant="line" size="lg">
              <a href={project.repoUrl} target="_blank" rel="noreferrer">
                <Github /> Source code
              </a>
            </Button>
          ) : (
            <Button variant="line" size="lg" disabled>
              <Github /> Code on request
            </Button>
          )}
        </div>
      </header>

      <div className="mt-12 grid gap-6">
        {screenshots.map((screenshot, index) => (
          <div
            key={screenshot}
            className="overflow-hidden rounded-2xl border border-border shadow-card"
          >
            <img
              src={screenshot}
              alt={`${project.title} screenshot ${index + 1}`}
              width={1466}
              height={768}
              className="w-full"
            />
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_320px]">
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold">The problem</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{project.problem}</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold">What I built</h2>
            <ul className="mt-5 space-y-3">
              {project.solution.map((s) => (
                <li key={s} className="flex gap-3 text-lg text-muted-foreground">
                  <Check className="mt-1.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="h-fit space-y-8 rounded-2xl border border-border bg-card p-6 lg:sticky lg:top-24">
          <div>
            <h3 className="eyebrow">My role</h3>
            <p className="mt-2 text-card-foreground">{project.role}</p>
          </div>
          <div>
            <h3 className="eyebrow">Tech used</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <Link
        to="/projects/$slug"
        params={{ slug: next.slug }}
        className="group mt-20 flex items-center justify-between rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/60"
      >
        <div>
          <p className="text-sm text-muted-foreground">Next project</p>
          <p className="mt-1 font-display text-2xl font-semibold sm:text-3xl">{next.title}</p>
        </div>
        <ArrowRight className="h-6 w-6 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
      </Link>
    </article>
  );
}
