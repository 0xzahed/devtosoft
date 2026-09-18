const principles = [
  {
    n: "01",
    t: "UNDERSTAND BEFORE BUILDING",
    d: "We investigate the problem before writing a single line of code.",
  },
  {
    n: "02",
    t: "DESIGN FOR PRODUCTION",
    d: "Architecture considers scale, security, and maintenance from day one.",
  },
  {
    n: "03",
    t: "SHIP CONTINUOUSLY",
    d: "Small releases instead of one giant launch. Demo every two weeks.",
  },
  {
    n: "04",
    t: "MEASURE WHAT MATTERS",
    d: "Performance and business metrics guide every iteration.",
  },
  {
    n: "05",
    t: "LEAVE YOU INDEPENDENT",
    d: "Documentation, source code, and infrastructure stay yours.",
  },
];

export function EngineeringPrinciples() {
  return (
    <section id="principles" className="grid-lines border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="eyebrow text-center text-sm text-primary">
          HOW WE BUILD
        </p>
        <h2 className="mt-4 text-center text-4xl md:text-5xl">
          ENGINEERING
          <br />
          <span className="text-primary">PRINCIPLES</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-center text-base text-muted-foreground">
          Five rules that guide everything we ship.
        </p>
        <div className="mt-14 grid gap-px border border-border bg-border sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <div
              key={p.n}
              className="group relative flex flex-col gap-3 bg-background p-6 sm:p-8 transition-colors hover:bg-card"
            >
              <span className="font-display text-3xl text-primary opacity-30 group-hover:opacity-60 transition-opacity">
                {p.n}
              </span>
              <h3 className="eyebrow text-xs text-primary">{p.t}</h3>
              <p className="text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
