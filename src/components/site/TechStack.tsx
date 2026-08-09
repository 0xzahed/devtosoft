const groups = [
  { k: "FRONTEND", items: ["React", "Next.js", "TypeScript", "Tailwind", "React Native"] },
  { k: "BACKEND", items: ["Node.js", "Python", "Go", "PostgreSQL", "Redis"] },
  { k: "AI", items: ["OpenAI", "LangChain", "Vector DB", "Whisper", "RAG"] },
  { k: "CLOUD", items: ["AWS", "Cloudflare", "Docker", "Kubernetes", "Terraform"] },
];

export function TechStack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <h2 className="text-4xl md:text-5xl">
        TECH STACK<span className="text-primary">.</span>
      </h2>
      <p className="mt-6 max-w-xl text-base text-muted-foreground">
        Boring, proven tools where it matters. New tools only where they earn their place.
      </p>
      <div className="mt-10 grid gap-8 sm:mt-14 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
        {groups.map((g) => (
          <div key={g.k}>
            <h3 className="eyebrow text-sm text-primary">{g.k}</h3>
            <ul className="mt-4 space-y-2">
              {g.items.map((i) => (
                <li
                  key={i}
                  className="border-b border-border py-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
