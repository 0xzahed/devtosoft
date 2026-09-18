import { useMemo } from "react";
import { useState } from "react";
import { projects } from "@/lib/projects";

type Tool = { name: string; logo: string };

const devicon = (slug: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}.svg`;

const iconify = (name: string) => `https://api.iconify.design/${name}.svg`;

const rings: {
  id: string;
  label: string;
  radius: number;
  duration: number;
  reverse: boolean;
  tools: Tool[];
}[] = [
  {
    id: "frontend",
    label: "FRONTEND",
    radius: 46,
    duration: 62,
    reverse: false,
    tools: [
      { name: "React", logo: devicon("react/react-original") },
      { name: "Next.js", logo: devicon("nextjs/nextjs-original") },
      { name: "TypeScript", logo: devicon("typescript/typescript-original") },
      { name: "Tailwind", logo: devicon("tailwindcss/tailwindcss-original") },
      { name: "Vite", logo: devicon("vite/vite-original") },
      { name: "Redux", logo: devicon("redux/redux-original") },
    ],
  },
  {
    id: "backend",
    label: "BACKEND",
    radius: 36,
    duration: 48,
    reverse: true,
    tools: [
      { name: "Node.js", logo: devicon("nodejs/nodejs-original") },
      { name: "Python", logo: devicon("python/python-original") },
      { name: "Go", logo: devicon("go/go-original") },
      { name: "FastAPI", logo: devicon("fastapi/fastapi-original") },
      { name: "NestJS", logo: devicon("nestjs/nestjs-original") },
      { name: "Express", logo: devicon("express/express-original") },
      { name: "PostgreSQL", logo: devicon("postgresql/postgresql-original") },
      { name: "Redis", logo: devicon("redis/redis-original") },
    ],
  },
  {
    id: "cloud",
    label: "SERVER / CLOUD",
    radius: 26,
    duration: 36,
    reverse: false,
    tools: [
      { name: "AWS", logo: devicon("amazonwebservices/amazonwebservices-original-wordmark") },
      { name: "Docker", logo: devicon("docker/docker-original") },
      { name: "Kubernetes", logo: devicon("kubernetes/kubernetes-plain-wordmark") },
      { name: "Terraform", logo: devicon("terraform/terraform-original") },
      { name: "Cloudflare", logo: devicon("cloudflare/cloudflare-original") },
      { name: "Kafka", logo: devicon("apachekafka/apachekafka-original") },
    ],
  },
  {
    id: "ai",
    label: "AI / ML",
    radius: 15,
    duration: 26,
    reverse: true,
    tools: [
      { name: "OpenAI", logo: iconify("logos:openai") },
      { name: "LangChain", logo: "https://cdn.simpleicons.org/langchain/white" },
      { name: "Pinecone", logo: iconify("logos:pinecone") },
      { name: "PyTorch", logo: devicon("pytorch/pytorch-original") },
      { name: "TensorFlow", logo: devicon("tensorflow/tensorflow-original") },
    ],
  },
];

function LogoIcon({ logo, name }: { logo: string; name: string }) {
  const [broken, setBroken] = useState(false);
  if (broken) {
    return (
      <span className="flex h-5 w-5 items-center justify-center rounded bg-primary/15 text-[9px] font-bold text-primary">
        {name.slice(0, 2).toUpperCase()}
      </span>
    );
  }
  return (
    <img
      src={logo}
      alt={name}
      loading="lazy"
      onError={() => setBroken(true)}
      className="h-5 w-5 object-contain"
    />
  );
}

function usePositions(count: number, radius: number) {
  return useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const angle = (360 / count) * i;
      const rad = (Math.PI / 180) * angle;
      return {
        left: 50 + radius * Math.cos(rad),
        top: 50 + radius * Math.sin(rad),
      };
    });
  }, [count, radius]);
}

function Ring({
  ring,
  ringIndex,
}: {
  ring: (typeof rings)[number];
  ringIndex: number;
}) {
  const positions = usePositions(ring.tools.length, ring.radius);
  return (
    <>
      <div
        className="absolute rounded-full border border-dashed border-border"
        style={{ inset: `${50 - ring.radius}%`, zIndex: ringIndex }}
      />
      <div
        className="absolute inset-0"
        style={{
          animation: `orbit ${ring.duration}s linear infinite`,
          animationDirection: ring.reverse ? "reverse" : "normal",
          zIndex: ringIndex,
        }}
      >
        {ring.tools.map((tool, i) => (
          <div
            key={`${ring.id}-${tool.name}`}
            className="absolute"
            style={{
              left: `${positions[i]!.left}%`,
              top: `${positions[i]!.top}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              style={{
                animation: `orbit ${ring.duration}s linear infinite`,
                animationDirection: ring.reverse ? "normal" : "reverse",
              }}
            >
              <div className="flex items-center gap-2 border border-border bg-card px-3 py-1.5 font-mono text-xs shadow-[0_0_24px_rgba(0,0,0,0.4)] transition-colors hover:border-primary">
                <LogoIcon logo={tool.logo} name={tool.name} />
                <span className="text-foreground">{tool.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function Orbit() {
  return (
    <div className="relative aspect-square w-full max-w-[34rem]">
      <div className="absolute inset-0 z-0 rounded-full border border-border" />

      {rings.map((ring, i) => (
        <Ring key={ring.id} ring={ring} ringIndex={i + 1} />
      ))}

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="volt-glow relative flex h-32 w-32 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-center sm:h-36 sm:w-36">
          <div>
            <p className="font-display text-3xl text-primary sm:text-4xl">24+</p>
            <p className="eyebrow mt-1 text-[10px] text-primary/80">TOOLS WE TRUST</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TechStack() {
  return (
    <section id="stack" className="grid-lines border-b border-border">
      <div className="relative overflow-hidden">
        <div className="volt-glow pointer-events-none absolute -right-40 top-0 h-[28rem] w-[28rem] rounded-full" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-end gap-4">
                <h2 className="text-4xl md:text-5xl">
                  TECH STACK<span className="text-primary">.</span>
                </h2>
                <span className="eyebrow mb-1 text-xs text-muted-foreground">tools we trust</span>
              </div>
              <p className="mt-6 max-w-md text-base text-muted-foreground">
                Boring, proven tools where it matters. New tools only where they earn their eta
                lagbena.
              </p>
              <p className="mt-6 max-w-md text-sm text-muted-foreground">
                We don't chase hype. We pick the stack that ships fastest, scales hardest and
                survives the team growing from 2 to 200.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {rings.map((r) => (
                  <span
                    key={r.id}
                    className="border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {r.label}
                  </span>
                ))}
              </div>
            </div>
            <Orbit />
          </div>

          <div className="mt-20">
            <p className="eyebrow text-center text-xs text-muted-foreground">
              BUILT FOR REAL CLIENTS
            </p>
            <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {projects.map((p) => (
                <div
                  key={p.slug}
                  className="group relative flex flex-col overflow-hidden bg-background transition-colors hover:bg-card"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-card">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="eyebrow text-[10px] text-primary">{p.tag}</span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-foreground">{p.client}</p>
                      <span className="font-mono text-xs text-primary">{p.metric}</span>
                    </div>
                    <p className="mt-1 font-mono text-[10px] text-muted-foreground">
                      {p.duration} · {p.team}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.stack.slice(0, 4).map((s) => (
                        <span
                          key={s}
                          className="border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 border-t border-border pt-12">
            <p className="eyebrow text-center text-xs text-muted-foreground">ALSO TRUSTED BY</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              {[
                { name: "NorthPay", color: "text-primary" },
                { name: "Lumo", color: "text-foreground" },
                { name: "FleetIQ", color: "text-primary" },
                { name: "MediCore", color: "text-foreground" },
                { name: "LearnLoop", color: "text-primary" },
                { name: "VantageAI", color: "text-foreground" },
                { name: "BuildSpace", color: "text-primary" },
                { name: "NovaPay", color: "text-foreground" },
              ].map((c) => (
                <span
                  key={c.name}
                  className={`font-display text-xl font-semibold transition-colors ${c.color} opacity-60 hover:opacity-100`}
                >
                  {c.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}