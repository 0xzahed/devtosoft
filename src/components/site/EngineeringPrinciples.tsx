import { useContent } from "@/components/site/ContentProvider";

export function EngineeringPrinciples() {
  const { content } = useContent();
  const { eyebrow, title, accentLine, subtitle, items } = content.principles;

  return (
    <section id="principles" className="grid-lines border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="eyebrow text-center text-sm text-primary">{eyebrow}</p>
        <h2 className="mt-4 text-center text-4xl md:text-5xl">
          {title}
          <br />
          <span className="text-primary">{accentLine}</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-center text-base text-muted-foreground">
          {subtitle}
        </p>
        <div className="mt-14 grid gap-px border border-border bg-border sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <div
              key={p.n}
              className="group relative flex flex-col gap-3 bg-background p-6 sm:p-8 transition-colors hover:bg-card"
            >
              <span className="font-display text-3xl text-primary opacity-30 transition-opacity group-hover:opacity-60">
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