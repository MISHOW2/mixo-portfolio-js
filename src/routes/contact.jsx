import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mixo Shibambo" },
      {
        name: "description",
        content: "Get in touch with Mixo Shibambo about developer roles or freelance projects.",
      },
      { property: "og:title", content: "Contact Mixo Shibambo" },
      {
        property: "og:description",
        content: "Open to developer roles and freelance web projects.",
      },
    ],
  }),
  component: ContactPage,
});
const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", value: "Connect with me", href: profile.linkedin, icon: Linkedin },
  { label: "GitHub", value: "Browse my code", href: profile.github, icon: Github },
];
function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-glow" />
      <div className="relative mx-auto max-w-4xl px-5 py-16 sm:py-24">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-3 text-4xl font-bold sm:text-6xl">
          Let's <span className="text-gradient-ember">talk</span>.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground">
          {profile.availability}. The quickest way to reach me is email.
        </p>

        <div className="mt-12 space-y-4">
          {channels.map(({ label, value, href, icon: Icon }, i) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/60 animate-rise"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">{label}</p>
                <p className="font-display text-lg font-medium sm:text-xl">{value}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
