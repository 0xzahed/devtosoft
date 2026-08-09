const stats = [
  { v: "120+", k: "Projects shipped" },
  { v: "9 yrs", k: "Average team experience" },
  { v: "14", k: "Countries served" },
  { v: "98%", k: "Client retention" },
];

export function Stats() {
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-px bg-border px-0 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.k} className="bg-background px-8 py-12 text-center">
            <p className="font-display text-6xl text-primary md:text-7xl">{s.v}</p>
            <p className="eyebrow mt-3 text-sm text-muted-foreground">{s.k}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
