const points = [
  {
    t: "SENIOR ONLY",
    b: "No juniors billed as experts. Every person on your project has shipped production systems.",
  },
  {
    t: "FIXED CYCLES",
    b: "Two-week cycles with a demo at the end. You always know what you paid for.",
  },
  {
    t: "OWNERSHIP",
    b: "Your repo, your cloud, your data. We leave documentation, not dependency.",
  },
  {
    t: "TIMEZONE OVERLAP",
    b: "At least four hours of daily overlap with your team, wherever you are.",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="grid-lines border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="text-4xl md:text-5xl">
          WHY DevToSoft<span className="text-primary">.</span>
        </h2>
        <div className="mt-10 grid gap-8 sm:mt-14 sm:grid-cols-2 sm:gap-10">
          {points.map((p) => (
            <div key={p.t} className="border-l-2 border-primary pl-6">
              <h3 className="text-xl text-foreground">{p.t}</h3>
              <p className="mt-3 max-w-md text-sm text-muted-foreground">{p.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
