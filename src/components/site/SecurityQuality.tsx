import { useContent } from "@/components/site/ContentProvider";

export function SecurityQuality() {
  const { content } = useContent();
  const { eyebrow, title, accentLine, subtitle, cta, items } = content.security;

  return (
    <section id="security" className="border-b border-border bg-card/20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-sm text-primary">{eyebrow}</p>
            <h2 className="mt-4 text-4xl md:text-5xl">
              {title}
              <br />
              <span className="text-primary">{accentLine}</span>
            </h2>
            <p className="mt-6 max-w-md text-base text-muted-foreground">{subtitle}</p>
          </div>
          <div>
            <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
              {items.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-background px-6 py-4 transition-colors hover:bg-card"
                >
                  <span className="font-display text-lg text-primary">✓</span>
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="eyebrow mt-8 inline-block border border-primary px-6 py-3 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {cta} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}