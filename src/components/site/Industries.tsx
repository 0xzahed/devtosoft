import { useContent } from "@/components/site/ContentProvider";

export function Industries() {
  const { content } = useContent();
  const { eyebrow, name, items } = content.industries;

  const duplicated = [...items, ...items, ...items];

  return (
    <section id="industries" className="grid-lines border-b border-border">
      <div className="relative">
        <div className="volt-glow pointer-events-none absolute -right-40 top-0 h-[24rem] w-[24rem] rounded-full" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="eyebrow text-center text-sm text-primary">{eyebrow}</p>
          <h2 className="mt-4 text-center text-4xl md:text-5xl">
            BUILT FOR
            <br />
            <span className="text-primary">{name}</span>
          </h2>

          <div className="relative mt-14 sm:mt-16">
            <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="flex w-max animate-[marquee_20s_linear_infinite] gap-6">
                {duplicated.map((industry, i) => (
                  <span
                    key={`${industry}-${i}`}
                    className="group flex shrink-0 items-center gap-2 border border-border bg-card px-5 py-3 font-display text-sm text-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded bg-primary/10 text-xs font-bold text-primary">
                      {industry.slice(0, 2).toUpperCase()}
                    </span>
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mt-6 overflow-hidden">
            <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="flex w-max animate-[marquee_28s_linear_infinite_reverse] gap-6">
                {duplicated.map((industry, i) => (
                  <span
                    key={`${industry}-${i}`}
                    className="group flex shrink-0 items-center gap-2 border border-primary/20 bg-primary/5 px-5 py-3 font-display text-sm text-primary/80 transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded bg-primary/10 text-xs font-bold text-primary">
                      {industry.slice(0, 2).toUpperCase()}
                    </span>
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}