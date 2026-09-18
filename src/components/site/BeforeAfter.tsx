const items = [
  {
    before: "Slow manual processes",
    after: "Automated workflows",
    icon: "⚡",
  },
  {
    before: "Fragmented systems",
    after: "Unified platform",
    icon: "🔗",
  },
  {
    before: "Unclear infrastructure",
    after: "Observable infrastructure",
    icon: "📊",
  },
  {
    before: "Growing technical debt",
    after: "Scalable architecture",
    icon: "🏗️",
  },
];

export function BeforeAfter() {
  return (
    <section id="transformation" className="grid-lines border-b border-border">
      <div className="relative">
        <div className="volt-glow pointer-events-none absolute -right-40 top-0 h-[28rem] w-[28rem] rounded-full" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="eyebrow text-center text-sm text-primary">
            FROM BOTTLENECK TO BREAKTHROUGH
          </p>
          <h2 className="mt-4 text-center text-4xl md:text-5xl">
            BEFORE → AFTER
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-center text-base text-muted-foreground">
              Every project starts with friction. We eliminate it.
            </p>
          <div className="mt-14 space-y-4">
            {items.map((item) => (
              <div
                key={item.before}
                className="group relative grid gap-4 sm:grid-cols-2"
              >
                <div className="flex items-center gap-4 rounded border border-border bg-card/50 p-4 transition-colors group-hover:bg-card">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="eyebrow text-[10px] text-muted-foreground">
                      BEFORE
                    </p>
                    <p className="text-sm text-foreground">{item.before}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <span className="font-display text-2xl text-primary">→</span>
                </div>
                <div className="flex items-center gap-4 rounded border border-primary/30 bg-primary/5 p-4 transition-colors group-hover:bg-primary/10">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="eyebrow text-[10px] text-primary">AFTER</p>
                    <p className="text-sm text-foreground">{item.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
