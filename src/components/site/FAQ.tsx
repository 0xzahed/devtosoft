import { useState } from "react";
import { useContent } from "@/components/site/ContentProvider";

export function FAQ() {
  const { content } = useContent();
  const { title, items: faqs } = content.faq;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="text-4xl md:text-5xl">
          {title}
          <span className="text-primary">.</span>
        </h2>
        <div className="mt-14">
          {faqs.map((f, i) => (
            <div key={f.q} className="border-t border-border last:border-b">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="text-lg text-foreground md:text-xl">{f.q}</span>
                <span
                  className={`font-display text-2xl text-primary transition-transform ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && <p className="max-w-2xl pb-6 text-sm text-muted-foreground">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}