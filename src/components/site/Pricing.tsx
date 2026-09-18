import { useContent } from "@/components/site/ContentProvider";

export function Pricing() {
  const { content } = useContent();
  const { title, subtitle, cta, plans } = content.pricing;

  return (
    <section id="pricing" className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="text-4xl md:text-5xl">
          {title}
          <span className="text-primary">.</span>
        </h2>
        <p className="mt-6 max-w-xl text-base text-muted-foreground">{subtitle}</p>
        <div className="mt-10 grid gap-px bg-border sm:mt-14 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col p-6 sm:p-10 ${
                p.featured ? "bg-primary text-primary-foreground" : "bg-background"
              }`}
            >
              <h3
                className={`text-2xl ${p.featured ? "text-primary-foreground" : "text-foreground"}`}
              >
                {p.name}
              </h3>
              <p
                className={`mt-4 font-display text-3xl ${
                  p.featured ? "text-primary-foreground" : "text-primary"
                }`}
              >
                {p.price}
                <span className="font-mono text-xs opacity-70"> {p.unit}</span>
              </p>
              <p
                className={`mt-4 text-sm ${
                  p.featured ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}
              >
                {p.desc}
              </p>
              <ul className="mt-8 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className={`flex gap-3 text-sm ${
                      p.featured ? "text-primary-foreground/90" : "text-muted-foreground"
                    }`}
                  >
                    <span className={p.featured ? "" : "text-primary"}>▸</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`eyebrow mt-10 border-2 px-6 py-3 text-center text-sm transition-colors ${
                  p.featured
                    ? "border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                    : "border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}