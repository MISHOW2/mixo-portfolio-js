import { profile } from "@/data/portfolio";
export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <div className="flex gap-5">
          <a href={`mailto:${profile.email}`} className="hover:text-primary">
            Email
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-primary">
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
