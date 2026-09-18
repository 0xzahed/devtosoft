const items = [
  "WEB APPS",
  "MOBILE APPS",
  "AI AUTOMATION",
  "CLOUD & DEVOPS",
  "UI/UX DESIGN",
  "API INTEGRATION",
];

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-border bg-primary py-3">
      <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-10">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 gap-10">
            {items.map((item) => (
              <span key={item} className="eyebrow text-base text-primary-foreground">
                {item} <span className="opacity-40">///</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
