import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProject, projects } from "@/lib/projects";
import { BottomNav } from "@/components/site/BottomNav";

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => {
    const project = getProject(params.slug);
    return {
      meta: [
        { title: `${project?.title ?? "Project"} — DEV2SOFT` },
        {
          name: "description",
          content: project?.summary ?? "Case study from DEV2SOFT.",
        },
      ],
    };
  },
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) {
      throw notFound();
    }
    const index = projects.findIndex((p) => p.slug === params.slug);
    const next = projects[(index + 1) % projects.length];
    return { project, next };
  },
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const { project, next } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src="/dev2soft-logo-light.svg" alt="DEV2SOFT logo" className="h-8 w-auto sm:h-9" />
          </Link>
          <Link
            to="/projects"
            className="eyebrow text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            All projects
          </Link>
        </div>
      </header>

      <main className="pb-16 lg:pb-0">
        {/* Hero */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-20">
            <Link
              to="/projects"
              className="eyebrow inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to projects
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="eyebrow border border-primary px-3 py-1 text-xs text-primary">
                {project.tag}
              </span>
              <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
            </div>
            <h1 className="mt-5 text-4xl text-foreground md:text-5xl">{project.title}</h1>
            <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
              {project.summary}
            </p>
            <div className="mt-6 font-mono text-sm text-primary">{project.metric}</div>
          </div>
          <div className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 sm:pb-16">
            <div className="overflow-hidden border border-border">
              <img
                src={project.image}
                alt={project.title}
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Quick facts */}
        <section className="border-b border-border bg-card/40">
          <div className="mx-auto grid max-w-4xl gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-background p-5 sm:p-6">
              <p className="eyebrow text-xs text-muted-foreground">Client</p>
              <p className="mt-2 text-sm text-foreground">{project.client}</p>
            </div>
            <div className="bg-background p-5 sm:p-6">
              <p className="eyebrow text-xs text-muted-foreground">Year</p>
              <p className="mt-2 text-sm text-foreground">{project.year}</p>
            </div>
            <div className="bg-background p-5 sm:p-6">
              <p className="eyebrow text-xs text-muted-foreground">Duration</p>
              <p className="mt-2 text-sm text-foreground">{project.duration}</p>
            </div>
            <div className="bg-background p-5 sm:p-6">
              <p className="eyebrow text-xs text-muted-foreground">Team</p>
              <p className="mt-2 text-sm text-foreground">{project.team}</p>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl text-foreground">
                  The challenge<span className="text-primary">.</span>
                </h2>
                <p className="mt-4 text-sm text-muted-foreground sm:text-base">
                  {project.challenge}
                </p>
              </div>
              <div>
                <h2 className="text-2xl text-foreground">
                  What we built<span className="text-primary">.</span>
                </h2>
                <p className="mt-4 text-sm text-muted-foreground sm:text-base">
                  {project.solution}
                </p>
              </div>
              <div>
                <h2 className="text-2xl text-foreground">
                  Results<span className="text-primary">.</span>
                </h2>
                <ul className="mt-4 space-y-3">
                  {project.results.map((r) => (
                    <li key={r} className="flex gap-3 text-sm text-muted-foreground sm:text-base">
                      <span className="mt-0.5 text-primary">▸</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="space-y-8">
              <div>
                <h3 className="eyebrow text-xs text-muted-foreground">Tech stack</h3>
                <ul className="mt-3 space-y-2">
                  {project.stack.map((s) => (
                    <li
                      key={s}
                      className="border-b border-border py-2 font-mono text-sm text-muted-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="eyebrow text-xs text-muted-foreground">Services used</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.services.map((s) => (
                    <span
                      key={s}
                      className="border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          {project.testimonial && (
            <figure className="mt-12 border-l-2 border-primary pl-6">
              <span className="font-display text-4xl leading-none text-primary">“</span>
              <blockquote className="mt-2 text-base text-foreground sm:text-lg">
                {project.testimonial.quote}
              </blockquote>
              <figcaption className="mt-4">
                <p className="eyebrow text-sm text-foreground">{project.testimonial.name}</p>
                <p className="font-mono text-xs text-muted-foreground">
                  {project.testimonial.role}
                </p>
              </figcaption>
            </figure>
          )}
        </section>

        {/* Next project */}
        <section className="border-t border-border">
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="group mx-auto flex max-w-4xl items-center justify-between px-4 py-10 transition-colors hover:bg-card sm:px-6 sm:py-12"
          >
            <div>
              <p className="eyebrow text-xs text-muted-foreground">Next project</p>
              <p className="mt-2 text-xl text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                {next.title}
              </p>
            </div>
            <ArrowRight className="h-6 w-6 text-primary transition-transform group-hover:translate-x-2" />
          </Link>
        </section>

        {/* CTA */}
        <section className="bg-primary">
          <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-16">
            <h2 className="text-2xl text-primary-foreground sm:text-3xl">
              WANT SOMETHING LIKE THIS?
            </h2>
            <Link
              to="/"
              hash="contact"
              className="eyebrow mt-6 inline-block border-2 border-primary-foreground px-6 py-3 text-sm text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
            >
              Start a project
            </Link>
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
