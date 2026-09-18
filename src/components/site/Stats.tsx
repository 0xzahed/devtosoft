import { useContent } from "@/components/site/ContentProvider";

export function Stats() {
  const { content } = useContent();
  const stats = content.stats;

  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-px bg-border px-0 sm:grid-cols-3 lg:grid-cols-5">
        {stats.map((s) => (
          <div key={s.k} className="bg-background px-6 py-10 text-center sm:px-8 sm:py-12">
            <p className="font-display text-4xl text-primary md:text-5xl">{s.v}</p>
            <p className="eyebrow mt-3 text-sm text-muted-foreground">{s.k}</p>
          </div>
        ))}
      </div>
    </section>
  );
}