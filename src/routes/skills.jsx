import { createFileRoute } from "@tanstack/react-router";
import { skillGroups } from "@/data/portfolio";
export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Tech Stack — Mixo Shibambo" },
      {
        name: "description",
        content:
          "Backend-focused full-stack skills: Node.js, Express, REST APIs, JWT auth, role-based access, PayFast payments, MongoDB and React.",
      },
      { property: "og:title", content: "Skills & Tech Stack — Mixo Shibambo" },
      {
        property: "og:description",
        content: "Node.js, Express, MongoDB, React, JWT auth and PayFast payment integrations.",
      },
    ],
  }),
  component: SkillsPage,
});
function SkillsPage() {
  const [backend, ...rest] = skillGroups;
  if (!backend) return null;
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <p className="eyebrow">Skills</p>
      <h1 className="mt-3 max-w-3xl text-4xl font-bold sm:text-6xl">
        Backend first, <span className="text-gradient-ember">full-stack</span> when it counts.
      </h1>

      <section className="relative mt-14 overflow-hidden rounded-3xl border border-primary/40 bg-card p-8 sm:p-12 animate-rise">
        <div className="pointer-events-none absolute inset-0 bg-glow" />
        <div className="relative grid gap-10 lg:grid-cols-[280px_1fr]">
          <div>
            <h2 className="text-3xl font-bold">{backend.title}</h2>
            <p className="mt-2 text-muted-foreground">{backend.blurb}</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {backend.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-border bg-background/60 p-4"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {rest.map((group, i) => (
          <section
            key={group.title}
            className="rounded-2xl border border-border bg-card p-7 animate-rise"
            style={{ animationDelay: `${(i + 1) * 90}ms` }}
          >
            <h2 className="text-2xl font-semibold">{group.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{group.blurb}</p>
            <ul className="mt-5 space-y-2.5">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
