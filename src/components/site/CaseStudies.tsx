import { Link } from "@tanstack/react-router";
import { projects } from "@/lib/projects";

export function CaseStudies() {
  return (
    <section id="work" className="border-b border-border bg-card/20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-sm text-primary">SELECTED WORK</p>
            <h2 className="mt-4 text-4xl md:text-5xl">
              CASE STUDIES &amp;
              <br />
              <span className="text-primary">RESULTS.</span>
            </h2>
          </div>
          <Link
            to="/projects"
            className="eyebrow hidden text-sm text-muted-foreground transition-colors hover:text-primary sm:block"
          >
            View all →
          </Link>
        </div>
        <p className="mt-6 max-w-xl text-base text-muted-foreground">
          Every project is broken down by the problem, the build, and the
          measurable outcome — not just screenshots.
        </p>
        <div className="mt-14 space-y-16">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group block"
            >
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="eyebrow border border-primary px-3 py-1 text-xs text-primary">
                      {p.tag}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {p.year} · {p.duration}
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl text-foreground transition-colors group-hover:text-primary md:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {p.client} · {p.team}
                  </p>
                  <div className="mt-6 space-y-4">
                    <div>
                      <p className="eyebrow text-xs text-primary">THE PROBLEM</p>
                      <p className="mt-1 text-sm text-foreground">
                        {p.challenge}
                      </p>
                    </div>
                    <div>
                      <p className="eyebrow text-xs text-primary">
                        THE SOLUTION
                      </p>
                      <p className="mt-1 text-sm text-foreground">
                        {p.solution}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-4">
                  <div>
                    <div className="overflow-hidden rounded-lg border border-border">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="border border-border px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="eyebrow text-xs text-primary">THE RESULT</p>
                    <ul className="mt-2 space-y-1.5">
                      {p.results.slice(0, 3).map((r) => (
                        <li
                          key={r}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="shrink-0 text-primary">▸</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link
          to="/projects"
          className="eyebrow mt-12 inline-block text-sm text-muted-foreground transition-colors hover:text-primary sm:hidden"
        >
          View all projects →
        </Link>
      </div>
    </section>
  );
}
