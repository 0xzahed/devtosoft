import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/dev2soft-logo.png.asset.json";
import { Marquee } from "@/components/site/Marquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DEV2SOFT — Software Development Company" },
      {
        name: "description",
        content:
          "DEV2SOFT builds web apps, mobile apps, AI automation and cloud systems. Innovate, automate, elevate.",
      },
      { property: "og:title", content: "DEV2SOFT — Software Development Company" },
      {
        property: "og:description",
        content:
          "Custom web, mobile, AI and cloud engineering for teams that need to move fast.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    n: "01",
    title: "WEB PLATFORMS",
    body: "Scalable dashboards, portals and SaaS products built on modern React and edge infrastructure.",
  },
  {
    n: "02",
    title: "MOBILE APPS",
    body: "Cross-platform apps with native feel, offline support and store-ready release pipelines.",
  },
  {
    n: "03",
    title: "AI AUTOMATION",
    body: "Chat assistants, document pipelines and workflow bots that remove repetitive manual work.",
  },
  {
    n: "04",
    title: "CLOUD & DEVOPS",
    body: "CI/CD, containers, monitoring and cost-tuned infrastructure that stays up under load.",
  },
];

const work = [
  { tag: "FINTECH", title: "Payment reconciliation engine", metric: "-72% manual hours" },
  { tag: "LOGISTICS", title: "Fleet tracking dashboard", metric: "4.1k daily users" },
  { tag: "RETAIL", title: "AI product catalog assistant", metric: "+31% conversion" },
];

const steps = [
  { k: "DISCOVER", v: "Scope, audit and a fixed roadmap in the first two weeks." },
  { k: "BUILD", v: "Weekly shipping cycles with a demo environment you can click." },
  { k: "SCALE", v: "Monitoring, hardening and support after launch." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo.url} alt="DEV2SOFT logo" className="h-9 w-auto invert" />
          </a>
          <nav className="hidden gap-8 md:flex">
            {["Services", "Work", "Process"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="eyebrow text-lg text-muted-foreground transition-colors hover:text-primary"
              >
                {l}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="eyebrow bg-primary px-5 py-2 text-lg text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Start a project
          </a>
        </div>
      </header>

      <main id="top">
        <section className="grid-lines relative border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-36">
            <p className="eyebrow text-xl text-primary">
              Innovate, Automate, Elevate <span className="tracking-tight">»»»</span>
            </p>
            <h1 className="mt-6 max-w-4xl text-[clamp(3.5rem,12vw,9rem)] text-foreground">
              WE BUILD THE
              <br />
              SOFTWARE THAT
              <br />
              <span className="text-primary">RUNS YOUR BUSINESS.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground">
              DEV2SOFT is a product engineering studio. We design, build and maintain
              web, mobile and AI systems for companies that need to ship fast without
              breaking things.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="eyebrow bg-primary px-8 py-4 text-xl text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Book a call
              </a>
              <a
                href="#work"
                className="eyebrow border border-border px-8 py-4 text-xl text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                See our work
              </a>
            </div>
          </div>
        </section>

        <Marquee />

        <section id="services" className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-6xl md:text-8xl">
            SERVICES<span className="text-primary">.</span>
          </h2>
          <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2">
            {services.map((s) => (
              <div key={s.n} className="group bg-background p-10 transition-colors hover:bg-card">
                <span className="font-mono text-sm text-primary">{s.n}</span>
                <h3 className="mt-4 text-4xl text-foreground transition-colors group-hover:text-primary">
                  {s.title}
                </h3>
                <p className="mt-4 max-w-sm text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="border-y border-border bg-card/40">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <h2 className="text-6xl md:text-8xl">
              SELECTED WORK<span className="text-primary">.</span>
            </h2>
            <ul className="mt-14">
              {work.map((w) => (
                <li
                  key={w.title}
                  className="group flex flex-wrap items-baseline justify-between gap-4 border-t border-border py-8 last:border-b"
                >
                  <span className="eyebrow w-28 text-base text-primary">{w.tag}</span>
                  <span className="flex-1 text-2xl text-foreground transition-transform group-hover:translate-x-2 md:text-3xl">
                    {w.title}
                  </span>
                  <span className="font-mono text-sm text-muted-foreground">{w.metric}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-6xl md:text-8xl">
            HOW WE WORK<span className="text-primary">.</span>
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.k} className="border-t-2 border-primary pt-6">
                <span className="font-mono text-sm text-muted-foreground">
                  0{i + 1}
                </span>
                <h3 className="mt-2 text-4xl text-foreground">{s.k}</h3>
                <p className="mt-3 text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-primary">
          <div className="mx-auto max-w-6xl px-6 py-24 text-center">
            <h2 className="text-6xl text-primary-foreground md:text-8xl">
              GOT A PROJECT?
            </h2>
            <p className="mx-auto mt-6 max-w-md text-primary-foreground/80">
              Tell us what you want to build. We reply within one working day with a
              scope and a timeline.
            </p>
            <a
              href="mailto:hello@dev2soft.com"
              className="eyebrow mt-10 inline-block border-2 border-primary-foreground px-10 py-4 text-2xl text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
            >
              hello@dev2soft.com
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-10">
          <img src={logo.url} alt="DEV2SOFT" className="h-8 w-auto invert" />
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} DEV2SOFT — Innovate, Automate, Elevate
          </p>
        </div>
      </footer>
    </div>
  );
}
