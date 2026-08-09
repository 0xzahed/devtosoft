import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/lib/projects";
import { BottomNav } from "@/components/site/BottomNav";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — DEV2SOFT" },
      {
        name: "description",
        content:
          "Selected work from DEV2SOFT — fintech, logistics, retail, health and education platforms we've built.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src="/dev2soft-logo-light.svg" alt="DEV2SOFT logo" className="h-8 w-auto sm:h-9" />
          </Link>
          <Link
            to="/"
            className="eyebrow text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            ← Back home
          </Link>
        </div>
      </header>

      <main className="pb-16 lg:pb-0">
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <p className="eyebrow text-sm text-primary">SELECTED WORK</p>
            <h1 className="mt-4 text-4xl md:text-5xl">
              PROJECTS WE'VE SHIPPED<span className="text-primary">.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground">
              A look at the platforms, apps and systems we've built across fintech, logistics,
              retail, health and education.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
            {projects.map((p) => (
              <Link
                key={p.slug}
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group flex flex-col bg-background transition-colors hover:bg-card"
              >
                <div className="relative aspect-[16/9] overflow-hidden border-b border-border">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="eyebrow text-sm text-primary">{p.tag}</span>
                    <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
                  </div>
                  <h2 className="mt-4 text-2xl text-foreground transition-colors group-hover:text-primary">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground">{p.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.slice(0, 4).map((s) => (
                      <span
                        key={s}
                        className="border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                    <span className="font-mono text-sm text-primary">{p.metric}</span>
                    <span className="eyebrow text-xs text-muted-foreground transition-transform group-hover:translate-x-1">
                      View case study →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border pb-16 lg:pb-0">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} DEV2SOFT — Innovate, Automate, Elevate
          </p>
        </div>
      </footer>

      <BottomNav />
    </div>
  );
}
