const aiServices = [
  {
    t: "AI ASSISTANTS",
    d: "Internal knowledge and customer support agents that understand your product.",
  },
  {
    t: "DOCUMENT INTELLIGENCE",
    d: "OCR, extraction and automated processing for invoices, forms and reports.",
  },
  {
    t: "RAG SYSTEMS",
    d: "Search and answer over private company data with sourced citations.",
  },
  {
    t: "WORKFLOW AGENTS",
    d: "Automate repetitive business operations end to end.",
  },
  {
    t: "AI INTEGRATIONS",
    d: "Connect AI capabilities to your existing software and APIs.",
  },
];

export function AISolutions() {
  return (
    <section id="ai" className="border-b border-border">
      <div className="relative overflow-hidden">
        <div className="volt-glow pointer-events-none absolute -right-40 top-0 h-[28rem] w-[28rem] rounded-full" />
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="relative">
            <p className="eyebrow text-sm text-primary">AI AUTOMATION</p>
            <h2 className="mt-4 text-4xl md:text-5xl">
              AI THAT DOES MORE THAN
              <br />
              <span className="text-primary">CHAT.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base text-muted-foreground">
              We build AI products that work inside your workflow, not beside it.
              Every system ships with guardrails, audit trails and your data
              staying where it belongs.
            </p>
            <div className="mt-12 grid gap-px border border-border bg-border sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
              {aiServices.map((s) => (
                <div
                  key={s.t}
                  className="group bg-background p-6 sm:p-8 transition-colors hover:bg-card"
                >
                  <h3 className="eyebrow text-sm text-primary group-hover:text-foreground transition-colors">
                    {s.t}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="eyebrow mt-10 inline-block border border-primary px-6 py-3 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Explore AI solutions →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
