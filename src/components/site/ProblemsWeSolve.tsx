import { useContent } from "@/components/site/ContentProvider";

export function ProblemsWeSolve() {
  const { content } = useContent();
  const { title, accentLine, subtitle, items } = content.problems;

  return (
    <section id="problems" className="grid-lines border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="text-4xl md:text-5xl">
          {title}
          <br />
          <span className="text-primary">{accentLine}</span>
        </h2>
        <p className="mt-6 max-w-xl text-base text-muted-foreground">{subtitle}</p>
        <div className="mt-14 grid gap-px border border-border bg-border sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <div
              key={p.q}
              className="group flex flex-col gap-3 bg-background p-6 sm:p-8 transition-colors hover:bg-card"
            >
              <span className="text-3xl">{p.icon}</span>
              <h3 className="eyebrow text-sm text-primary">{p.q}</h3>
              <p className="text-sm text-muted-foreground">{p.s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}