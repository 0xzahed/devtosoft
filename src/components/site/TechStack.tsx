import { projects } from "@/lib/projects";

const categories = [
  {
    k: "FRONTEND",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "React Native", "Shadcn"],
  },
  {
    k: "BACKEND",
    items: ["Node.js", "Python", "Go", "PostgreSQL", "Redis", "FastAPI"],
  },
  {
    k: "AI / ML",
    items: ["OpenAI", "LangChain", "Vector DB", "Whisper", "RAG", "Pinecone"],
  },
  {
    k: "CLOUD & INFRA",
    items: ["AWS", "Cloudflare", "Docker", "Kubernetes", "Terraform", "Kafka"],
  },
];

const techMarquee = [
  ...categories.flatMap((g) => g.items),
  ...categories.flatMap((g) => g.items),
];

export function TechStack() {
  return (
    <section id="stack" className="grid-lines border-b border-border">
      <div className="relative overflow-hidden">
        <div className="volt-glow pointer-events-none absolute -right-40 top-0 h-[28rem] w-[28rem] rounded-full" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="flex items-end gap-4">
            <h2 className="text-4xl md:text-5xl">
              TECH STACK<span className="text-primary">.</span>
            </h2>
            <span className="eyebrow mb-1 text-xs text-muted-foreground">
              tools we trust
            </span>
          </div>
          <p className="mt-6 max-w-xl text-base text-muted-foreground">
            Boring, proven tools where it matters. New tools only where they
            earn their eta lagbena.
          </p>

          <div className="relative mt-14">
            <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="flex w-max animate-[marquee_30s_linear_infinite]">
                {techMarquee.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 px-6 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary opacity-60" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16">
            <p className="eyebrow text-center text-xs text-muted-foreground">
              BUILT FOR REAL CLIENTS
            </p>
            <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {projects.map((p) => (
                <div
                  key={p.slug}
                  className="group relative flex flex-col overflow-hidden bg-background transition-colors hover:bg-card"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-card">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="eyebrow text-[10px] text-primary">
                        {p.tag}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-foreground">
                        {p.client}
                      </p>
                      <span className="font-mono text-xs text-primary">
                        {p.metric}
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-[10px] text-muted-foreground">
                      {p.duration} · {p.team}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.stack.slice(0, 4).map((s) => (
                        <span
                          key={s}
                          className="border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 border-t border-border pt-12">
            <p className="eyebrow text-center text-xs text-muted-foreground">
              ALSO TRUSTED BY
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              {[
                { name: "NorthPay", color: "text-primary" },
                { name: "Lumo", color: "text-foreground" },
                { name: "FleetIQ", color: "text-primary" },
                { name: "MediCore", color: "text-foreground" },
                { name: "LearnLoop", color: "text-primary" },
                { name: "VantageAI", color: "text-foreground" },
                { name: "BuildSpace", color: "text-primary" },
                { name: "NovaPay", color: "text-foreground" },
              ].map((c) => (
                <span
                  key={c.name}
                  className={`font-display text-xl font-semibold transition-colors ${c.color} opacity-60 hover:opacity-100`}
                >
                  {c.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
