const points = [
  {
    t: "SENIOR ONLY",
    b: "No juniors billed as experts. Every person on your project has shipped production systems.",
    icon: "✓",
  },
  {
    t: "FIXED CYCLES",
    b: "Two-week cycles with a demo at the end. You always know what you paid for.",
    icon: "⏱",
  },
  {
    t: "OWNERSHIP",
    b: "Your repo, your cloud, your data. We leave documentation, not dependency.",
    icon: "🔒",
  },
  {
    t: "TIMEZONE OVERLAP",
    b: "At least four hours of daily overlap with your team, wherever you are.",
    icon: "🌍",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="grid-lines border-b border-border">
      <div className="relative">
        <div className="volt-glow pointer-events-none absolute -left-40 top-0 h-[24rem] w-[24rem] rounded-full" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="eyebrow text-center text-sm text-primary">
            WHY DevToSoft
          </p>
          <h2 className="mt-4 text-center text-4xl md:text-5xl">
            WHY WE<span className="text-primary"> EXIST.</span>
          </h2>
          <div className="mt-14 grid gap-8 sm:mt-16 sm:grid-cols-2 sm:gap-10">
            {points.map((p, i) => (
              <div
                key={p.t}
                className="group relative flex items-start gap-4 border-l-2 border-primary pl-6 transition-colors hover:bg-card hover:pl-8"
              >
                <span className="font-display text-2xl text-primary opacity-40 group-hover:opacity-80 transition-opacity">
                  {p.icon}
                </span>
                <div>
                  <h3 className="eyebrow text-xs text-primary">{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
