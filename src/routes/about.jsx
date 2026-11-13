import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mixo Shibambo, Full-stack Developer" },
      {
        name: "description",
        content:
          "Mixo Shibambo is a full-stack developer in Pretoria who also works in IT support at a TVET college campus.",
      },
      { property: "og:title", content: "About Mixo Shibambo" },
      {
        property: "og:description",
        content:
          "Full-stack developer and IT support professional based in Pretoria, South Africa.",
      },
    ],
  }),
  component: AboutPage,
});
const facts = [
  { label: "Based in", value: profile.location },
  { label: "Focus", value: "Node.js · Express · MongoDB · React" },
  { label: "Day job", value: "IT support, TVET college campus" },
  { label: "Freelance", value: "E-commerce, management systems, web apps" },
];
function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
        <div className="animate-rise">
          <p className="eyebrow">About</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-6xl">Hi, I'm {profile.firstName}.</h1>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a full-stack developer based in Pretoria. Most of my work lives on the backend:
              designing REST APIs with Node.js and Express, structuring code into clear layers, and
              getting the hard parts right — authentication, permissions and payments.
            </p>
            <p>
              I take on freelance projects for clients who need something that actually works in the
              real world: online stores that take payments through PayFast, systems that replace
              spreadsheets and paper, and web apps people use on the day.
            </p>
            <p>
              Alongside development I work in IT support at a TVET college campus. Fixing problems
              for real users every day has taught me to build software that is simple, reliable and
              easy to support.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="ember" size="lg">
              <Link to="/contact">
                Work with me <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="line" size="lg">
              <Link to="/skills">See my skills</Link>
            </Button>
          </div>
        </div>

        <dl
          className="h-fit divide-y divide-border rounded-2xl border border-border bg-card animate-rise"
          style={{ animationDelay: "120ms" }}
        >
          {facts.map((f) => (
            <div key={f.label} className="p-6">
              <dt className="eyebrow">{f.label}</dt>
              <dd className="mt-2 text-card-foreground">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <section id="cv" className="mx-auto mt-20 max-w-6xl px-5 pb-20">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="eyebrow">Curriculum vitae</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">My CV</h2>
            <p className="mt-2 text-muted-foreground">
              View my experience, projects, education and certifications.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="ember">
              <a href={profile.cv} target="_blank" rel="noreferrer">
                Open full CV <ExternalLink />
              </a>
            </Button>
            <Button asChild variant="line">
              <a href={profile.cv} download>
                Download PDF <Download />
              </a>
            </Button>
          </div>
        </div>
        <iframe
          src={profile.cv}
          title="Mixo Shibambo's CV"
          className="mt-8 h-[75vh] min-h-[480px] w-full rounded-2xl border border-border bg-card"
        />
      </section>
    </div>
  );
}
