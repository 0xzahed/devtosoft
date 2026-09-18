const quotes = [
  {
    q: "They replaced a six-month internal backlog in seven weeks. The demo cadence kept everyone honest.",
    n: "Rakib Hasan",
    r: "CTO, NorthPay",
  },
  {
    q: "The AI catalog assistant paid for itself in the first quarter. Clean code, clean handover.",
    n: "Marta Silva",
    r: "Head of Product, Lumo Retail",
  },
  {
    q: "Best engineering partner we've had. They push back when an idea is wrong, and that's rare.",
    n: "Daniel Okoye",
    r: "Founder, FleetIQ",
  },
];

export function Testimonials() {
  return (
    <section id="clients" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <h2 className="text-4xl md:text-5xl">
        CLIENT VOICES<span className="text-primary">.</span>
      </h2>
      <div className="mt-10 grid gap-px bg-border sm:mt-14 md:grid-cols-3">
        {quotes.map((t) => (
          <figure key={t.n} className="bg-background p-6 sm:p-10">
            <span className="font-display text-4xl leading-none text-primary">“</span>
            <blockquote className="mt-2 text-base text-foreground">{t.q}</blockquote>
            <figcaption className="mt-8">
              <p className="eyebrow text-sm text-foreground">{t.n}</p>
              <p className="font-mono text-xs text-muted-foreground">{t.r}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
