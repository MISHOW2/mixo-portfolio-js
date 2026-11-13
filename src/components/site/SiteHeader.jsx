import { Link } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
const nav = [
  { to: "/", label: "Work" },
  { to: "/skills", label: "Skills" },
  { to: "/about", label: "About" },
];
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2 font-display text-base font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
            MS
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="ember" size="sm" className="ml-1">
            <Link to="/contact">Contact</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
