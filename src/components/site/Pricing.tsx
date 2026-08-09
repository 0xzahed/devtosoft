const plans = [
  {
    name: "SPRINT",
    price: "$2,900",
    unit: "/ 2 weeks",
    desc: "A focused build for one clear outcome.",
    features: ["1 senior engineer", "Weekly demo", "Fixed scope", "Source handover"],
    featured: false,
  },
  {
    name: "PRODUCT",
    price: "$7,500",
    unit: "/ month",
    desc: "A full squad shipping your roadmap.",
    features: [
      "2–3 engineers + designer",
      "Discovery & roadmap",
      "CI/CD + monitoring",
      "Slack channel, same-day replies",
      "Unlimited revisions in cycle",
    ],
    featured: true,
  },
  {
    name: "RETAINER",
    price: "Custom",
    unit: "",
    desc: "Long-term ownership, support and scaling.",
    features: ["SLA support", "Security hardening", "Cost optimisation", "Dedicated tech lead"],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-6xl md:text-8xl">
          ENGAGEMENT<span className="text-primary">.</span>
        </h2>
        <p className="mt-6 max-w-xl text-muted-foreground">
          Pick how you want to work with us. No lock-in, cancel between cycles.
        </p>
        <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col p-10 ${
                p.featured ? "bg-primary text-primary-foreground" : "bg-background"
              }`}
            >
              <h3
                className={`text-4xl ${p.featured ? "text-primary-foreground" : "text-foreground"}`}
              >
                {p.name}
              </h3>
              <p
                className={`mt-4 font-display text-5xl ${
                  p.featured ? "text-primary-foreground" : "text-primary"
                }`}
              >
                {p.price}
                <span className="font-mono text-sm opacity-70"> {p.unit}</span>
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
                className={`eyebrow mt-10 border-2 px-6 py-3 text-center text-lg transition-colors ${
                  p.featured
                    ? "border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                    : "border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
