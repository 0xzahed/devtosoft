const problems = [
  {
    q: "NEED TO LAUNCH?",
    s: "Turn your idea into a production-ready MVP in weeks, not months.",
    icon: "🚀",
  },
  {
    q: "NEED TO SCALE?",
    s: "Refactor and scale your existing platform without a full rewrite.",
    icon: "📈",
  },
  {
    q: "NEED AI?",
    s: "Add practical AI automation — assistants, RAG, document intelligence.",
    icon: "🧠",
  },
  {
    q: "NEED TO SHIP FASTER?",
    s: "Extend your engineering team with senior specialists who match your pace.",
    icon: "⚡",
  },
  {
    q: "LEGACY SYSTEMS?",
    s: "Modernize without rewriting everything. Incrementally, with zero downtime.",
    icon: "🔧",
  },
];

export function ProblemsWeSolve() {
  return (
    <section id="problems" className="grid-lines border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="text-4xl md:text-5xl">
          YOU HAVE A PRODUCT PROBLEM.
          <br />
          <span className="text-primary">WE HAVE A TEAM FOR IT.</span>
        </h2>
        <p className="mt-6 max-w-xl text-base text-muted-foreground">
          Every client arrives with a different friction point. Here is how we
          attack each one.
        </p>
        <div className="mt-14 grid gap-px border border-border bg-border sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => (
            <div
              key={p.q}
              className="group flex flex-col gap-3 bg-background p-6 sm:p-8 transition-colors hover:bg-card"
            >
              <span className="text-3xl">{p.icon}</span>
              <h3 className="eyebrow text-sm text-primary">{p.q}</h3>
              <p className="text-sm text-muted-foreground">{p.s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
