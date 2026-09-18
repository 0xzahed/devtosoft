export function TrustBar() {
  return (
    <section className="border-b border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="eyebrow text-center text-xs text-muted-foreground">
          TRUSTED BY TEAMS BUILDING WHAT'S NEXT
        </p>
        <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
          {[
            { name: "NorthPay", s: "Fintech" },
            { name: "Lumo", s: "Retail" },
            { name: "FleetIQ", s: "Logistics" },
            { name: "MediCore", s: "Health" },
            { name: "LearnLoop", s: "Education" },
            { name: "VantageAI", s: "AI" },
            { name: "BuildSpace", s: "SaaS" },
            { name: "NovaPay", s: "Fintech" },
          ].map((c) => (
            <div key={c.name} className="group flex flex-col items-center gap-1">
              <span className="font-display text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                {c.name}
              </span>
              <span className="font-mono text-[10px] text-muted-foreground">
                {c.s}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
