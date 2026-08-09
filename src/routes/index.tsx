import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/dev2soft-logo-light.png.asset.json";
import { Marquee } from "@/components/site/Marquee";
import { Stats } from "@/components/site/Stats";
import { WhyUs } from "@/components/site/WhyUs";
import { TechStack } from "@/components/site/TechStack";
import { Pricing } from "@/components/site/Pricing";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { ContactForm } from "@/components/site/ContactForm";

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
    tags: ["SaaS", "Dashboards", "Portals"],
  },
  {
    n: "02",
    title: "MOBILE APPS",
    body: "Cross-platform apps with native feel, offline support and store-ready release pipelines.",
    tags: ["iOS", "Android", "Offline-first"],
  },
  {
    n: "03",
    title: "AI AUTOMATION",
    body: "Chat assistants, document pipelines and workflow bots that remove repetitive manual work.",
    tags: ["RAG", "Agents", "OCR"],
  },
  {
    n: "04",
    title: "CLOUD & DEVOPS",
    body: "CI/CD, containers, monitoring and cost-tuned infrastructure that stays up under load.",
    tags: ["AWS", "Docker", "Observability"],
  },
  {
    n: "05",
    title: "UI/UX DESIGN",
    body: "Product design systems, prototypes and interfaces tested with real users before we build.",
    tags: ["Design systems", "Prototypes"],
  },
  {
    n: "06",
    title: "MVP FOR STARTUPS",
    body: "From idea to a launchable product in weeks, with analytics and payments wired in.",
    tags: ["Launch", "Payments", "Analytics"],
  },
];

const work = [
  { tag: "FINTECH", title: "Payment reconciliation engine", metric: "-72% manual hours" },
  { tag: "LOGISTICS", title: "Fleet tracking dashboard", metric: "4.1k daily users" },
  { tag: "RETAIL", title: "AI product catalog assistant", metric: "+31% conversion" },
  { tag: "HEALTH", title: "Clinic booking & records app", metric: "22k appointments/mo" },
  { tag: "EDUCATION", title: "Live class platform", metric: "99.95% uptime" },
];

const steps = [
  { k: "DISCOVER", v: "Scope, audit and a fixed roadmap in the first two weeks." },
  { k: "DESIGN", v: "Clickable prototypes and a design system before a line of product code." },
  { k: "BUILD", v: "Weekly shipping cycles with a demo environment you can click." },
  { k: "SCALE", v: "Monitoring, hardening and support after launch." },
];

const industries = [
  "Fintech",
  "Logistics",
  "Healthcare",
  "E-commerce",
  "Education",
  "Real estate",
  "Manufacturing",
  "Media",
];

const navLinks = ["Services", "Work", "Process", "Stack", "Pricing", "FAQ"];

function Index() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo.url} alt="DEV2SOFT logo" className="h-9 w-auto" />
          </a>
          <nav className="hidden gap-7 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="eyebrow text-lg text-muted-foreground transition-colors hover:text-primary"
              >
                {l}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="eyebrow hidden bg-primary px-5 py-2 text-lg text-primary-foreground transition-transform hover:-translate-y-0.5 sm:block"
            >
              Start a project
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMenu(!menu)}
              className="eyebrow border border-border px-4 py-2 text-lg text-foreground lg:hidden"
            >
              {menu ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        {menu && (
          <nav className="border-t border-border lg:hidden">
            <div className="mx-auto flex max-w-6xl flex-col px-6 py-4">
              {[...navLinks, "Contact"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setMenu(false)}
                  className="eyebrow border-b border-border py-3 text-xl text-foreground last:border-b-0"
                >
                  {l}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="grid-lines relative overflow-hidden border-b border-border">
          <div className="volt-glow pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full" />
          <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-36">
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
            <div className="mt-14 flex flex-wrap gap-x-10 gap-y-3 font-mono text-xs text-muted-foreground">
              <span>▸ NDA on request</span>
              <span>▸ Fixed-price options</span>
              <span>▸ Reply within 1 working day</span>
            </div>
          </div>
        </section>

        <Marquee />
        <Stats />

        <section id="services" className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-6xl md:text-8xl">
            SERVICES<span className="text-primary">.</span>
          </h2>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Six ways we plug in — pick one or combine them into a full product team.
          </p>
          <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.n} className="group bg-background p-10 transition-colors hover:bg-card">
                <span className="font-mono text-sm text-primary">{s.n}</span>
                <h3 className="mt-4 text-4xl text-foreground transition-colors group-hover:text-primary">
                  {s.title}
                </h3>
                <p className="mt-4 max-w-sm text-muted-foreground">{s.body}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
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

        <WhyUs />

        <section id="process" className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-6xl md:text-8xl">
            HOW WE WORK<span className="text-primary">.</span>
          </h2>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.k} className="border-t-2 border-primary pt-6">
                <span className="font-mono text-sm text-muted-foreground">0{i + 1}</span>
                <h3 className="mt-2 text-4xl text-foreground">{s.k}</h3>
                <p className="mt-3 text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </section>

        <TechStack />

        <section className="border-y border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="text-4xl md:text-5xl">
              INDUSTRIES WE SERVE<span className="text-primary">.</span>
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {industries.map((i) => (
                <span
                  key={i}
                  className="eyebrow border border-border px-5 py-2 text-base text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        </section>

        <Pricing />
        <Testimonials />
        <FAQ />

        <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-6xl md:text-8xl">
                GOT A PROJECT?
                <span className="text-primary">.</span>
              </h2>
              <p className="mt-6 max-w-md text-muted-foreground">
                Tell us what you want to build. We reply within one working day with a
                scope and a timeline.
              </p>
              <div className="mt-10 space-y-4 font-mono text-sm">
                <p className="text-muted-foreground">
                  EMAIL —{" "}
                  <a href="mailto:hello@dev2soft.com" className="text-primary hover:underline">
                    hello@dev2soft.com
                  </a>
                </p>
                <p className="text-muted-foreground">
                  PHONE —{" "}
                  <a href="tel:+8801000000000" className="text-primary hover:underline">
                    +880 1000-000000
                  </a>
                </p>
                <p className="text-muted-foreground">HOURS — Sun–Thu, 10:00–19:00 (GMT+6)</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>

        <section className="bg-primary">
          <div className="mx-auto max-w-6xl px-6 py-16 text-center">
            <h2 className="text-5xl text-primary-foreground md:text-7xl">
              LET'S BUILD SOMETHING THAT LASTS.
            </h2>
            <a
              href="mailto:hello@dev2soft.com"
              className="eyebrow mt-8 inline-block border-2 border-primary-foreground px-10 py-4 text-2xl text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
            >
              hello@dev2soft.com
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={logo.url} alt="DEV2SOFT" className="h-8 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Product engineering studio. Innovate, automate, elevate.
            </p>
          </div>
          <div>
            <h3 className="eyebrow text-base text-primary">Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {services.slice(0, 4).map((s) => (
                <li key={s.n}>
                  <a href="#services" className="hover:text-foreground">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="eyebrow text-base text-primary">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {["Work", "Process", "Pricing", "FAQ"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-foreground">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="eyebrow text-base text-primary">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:hello@dev2soft.com" className="hover:text-foreground">
                  hello@dev2soft.com
                </a>
              </li>
              <li>
                <a href="tel:+8801000000000" className="hover:text-foreground">
                  +880 1000-000000
                </a>
              </li>
              <li>Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <p className="mx-auto max-w-6xl px-6 py-6 font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} DEV2SOFT — Innovate, Automate, Elevate
          </p>
        </div>
      </footer>
    </div>
  );
}
