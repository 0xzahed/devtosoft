import { useContent } from "@/components/site/ContentProvider";

export function TrustBar() {
  const { content } = useContent();
  const { label, clients } = content.trustBar;

  return (
    <section className="border-b border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="eyebrow text-center text-xs text-muted-foreground">{label}</p>
        <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
          {clients.map((c) => (
            <div key={c.name} className="group flex flex-col items-center gap-1">
              <span className="font-display text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                {c.name}
              </span>
              <span className="font-mono text-[10px] text-muted-foreground">{c.sector}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}