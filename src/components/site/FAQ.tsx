import { useState } from "react";

const faqs = [
  {
    q: "How fast can you start?",
    a: "Usually within one week. Discovery can begin in 48 hours for urgent projects.",
  },
  {
    q: "Do we own the code?",
    a: "Yes. Everything lives in your repository from day one, under your license.",
  },
  {
    q: "Can you work with our existing team?",
    a: "Often we do. We plug into your board, your reviews and your release process.",
  },
  {
    q: "What about maintenance after launch?",
    a: "We offer a support retainer with monitoring, patching and an agreed response SLA.",
  },
  {
    q: "How do you handle NDAs and security?",
    a: "NDA before the first call if you want. We follow least-privilege access and audited secrets.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="text-4xl md:text-5xl">
          FAQ<span className="text-primary">.</span>
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
