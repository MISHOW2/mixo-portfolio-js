import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/site/ProjectCard";
import { coreStack, profile, projects } from "@/data/portfolio";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mixo Shibambo — Full-stack Developer Portfolio" },
      {
        name: "description",
        content:
          "Full-stack developer in Pretoria building e-commerce, management systems and web apps with Node.js, Express, MongoDB and React.",
      },
      { property: "og:title", content: "Mixo Shibambo — Full-stack Developer Portfolio" },
      {
        property: "og:description",
        content: "Selected projects: Vintage808, NexDesk, TVET Excellence Awards and a React CRM.",
      },
    ],
  }),
  component: Index,
});
function Index() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid" />
        <div className="pointer-events-none absolute inset-0 bg-glow" />
        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-20 sm:pt-28">
          <div className="flex flex-wrap items-center gap-3 animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse-dot" />
              {profile.availability}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" /> {profile.location}
            </span>
          </div>

          <p className="eyebrow mt-10 animate-rise" style={{ animationDelay: "80ms" }}>
            {profile.name} · {profile.role}
          </p>
          <h1
            className="mt-4 max-w-4xl text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl animate-rise"
            style={{ animationDelay: "140ms" }}
          >
            I build web apps that handle <span className="text-gradient-ember">real money</span>,
            real users and real workflows.
          </h1>
          <p
            className="mt-6 max-w-2xl text-lg text-muted-foreground animate-rise"
            style={{ animationDelay: "200ms" }}
          >
            {profile.intro}
          </p>
          <div
            className="mt-9 flex flex-wrap gap-3 animate-rise"
            style={{ animationDelay: "260ms" }}
          >
            <Button asChild variant="ember" size="xl">
              <a href="#work">
                See my work <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="line" size="xl">
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>

          <ul className="mt-14 flex flex-wrap gap-x-6 gap-y-2 border-t border-border/60 pt-6 font-display text-sm text-muted-foreground">
            {coreStack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Projects</h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Client builds and personal projects. Click any project for the problem, my role and the
            tech.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 sm:p-14">
          <div className="pointer-events-none absolute inset-0 bg-glow" />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Hiring a developer?</h2>
              <p className="mt-2 max-w-lg text-muted-foreground">
                I'm happy to walk you through any of these projects and the code behind them.
              </p>
            </div>
            <Button asChild variant="ember" size="xl">
              <Link to="/contact">
                Contact me <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
