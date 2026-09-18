import { useContent } from "@/components/site/ContentProvider";

export function AISolutions() {
  const { content } = useContent();
  const { eyebrow, title, accentLine, subtitle, cta, items } = content.ai;

  return (
    <section id="ai" className="border-b border-border">
      <div className="relative overflow-hidden">
        <div className="volt-glow pointer-events-none absolute -right-40 top-0 h-[28rem] w-[28rem] rounded-full" />
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="relative">
            <p className="eyebrow text-sm text-primary">{eyebrow}</p>
            <h2 className="mt-4 text-4xl md:text-5xl">
              {title}
              <br />
              <span className="text-primary">{accentLine}</span>
            </h2>
            <p className="mt-6 max-w-xl text-base text-muted-foreground">{subtitle}</p>
            <div className="mt-12 grid gap-px border border-border bg-border sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((s) => (
                <div
                  key={s.t}
                  className="group bg-background p-6 sm:p-8 transition-colors hover:bg-card"
                >
                  <h3 className="eyebrow text-sm text-primary transition-colors group-hover:text-foreground">
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
              {cta} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}