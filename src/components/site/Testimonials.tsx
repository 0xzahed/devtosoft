import { useContent } from "@/components/site/ContentProvider";

export function Testimonials() {
  const { content } = useContent();
  const { title, items } = content.testimonials;

  return (
    <section id="clients" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <h2 className="text-4xl md:text-5xl">
        {title}
        <span className="text-primary">.</span>
      </h2>
      <div className="mt-10 grid gap-px bg-border sm:mt-14 md:grid-cols-3">
        {items.map((t) => (
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