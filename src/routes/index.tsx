import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/lib/projects";
import { Marquee } from "@/components/site/Marquee";
import { Stats } from "@/components/site/Stats";
import { WhyUs } from "@/components/site/WhyUs";
import { TechStack } from "@/components/site/TechStack";
import { Pricing } from "@/components/site/Pricing";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { ContactForm } from "@/components/site/ContactForm";
import { BottomNav } from "@/components/site/BottomNav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DevToSoft" },
      {
        name: "description",
        content:
          "DevToSoft builds web apps, mobile apps, AI automation and cloud systems. Innovate, automate, elevate.",
      },
      { property: "og:title", content: "DevToSoft | Software Development Company" },
      {
        property: "og:description",
        content: "Custom web, mobile, AI and cloud engineering for teams that need to move fast.",
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
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <a href="#top" className="flex items-center gap-3">
            <img src="/logo.png" alt="DevToSoft logo" className="h-8 w-auto sm:h-9" />
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
          </div>
        </div>
      </header>

      <main id="top" className="pb-16 lg:pb-0">
        <section className="grid-lines relative overflow-hidden border-b border-border">
          <div className="volt-glow pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full" />
          <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 md:py-36">
            <p className="eyebrow text-sm text-primary">
              Innovate, Automate, Elevate <span className="tracking-tight">»»»</span>
            </p>
            <h1 className="mt-6 max-w-4xl text-[clamp(2.5rem,6vw,4.5rem)] text-foreground">
              WE BUILD THE
              <br />
              SOFTWARE THAT
              <br />
              <span className="text-primary">RUNS YOUR BUSINESS.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base text-muted-foreground">
              DevToSoft is a product engineering studio. We design, build and maintain web, mobile
              and AI systems for companies that need to ship fast without breaking things.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="eyebrow bg-primary px-6 py-3 text-base text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Book a call
              </a>
              <a
                href="#work"
                className="eyebrow border border-border px-6 py-3 text-base text-foreground transition-colors hover:border-primary hover:text-primary"
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

        <section id="services" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <h2 className="text-4xl md:text-5xl">
            SERVICES<span className="text-primary">.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base text-muted-foreground">
            Six ways we plug in. Pick one or combine them into a full product team.
          </p>
          <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.n}
                className="group bg-background p-6 sm:p-10 transition-colors hover:bg-card"
              >
                <span className="font-mono text-sm text-primary">{s.n}</span>
                <h3 className="mt-4 text-2xl text-foreground transition-colors group-hover:text-primary">
                  {s.title}
                </h3>
                <p className="mt-4 max-w-sm text-sm text-muted-foreground">{s.body}</p>
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
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-4xl md:text-5xl">
                SELECTED WORK<span className="text-primary">.</span>
              </h2>
              <Link
                to="/projects"
                className="eyebrow hidden shrink-0 text-sm text-muted-foreground transition-colors hover:text-primary sm:block"
              >
                View all →
              </Link>
            </div>
            <div className="mt-10 grid gap-px border border-border bg-border sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((w) => (
                <Link
                  key={w.slug}
                  to="/projects/$slug"
                  params={{ slug: w.slug }}
                  className="group flex flex-col bg-background transition-colors hover:bg-card"
                >
                  <div className="relative aspect-[16/9] overflow-hidden border-b border-border">
                    <img
                      src={w.image}
                      alt={w.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-center justify-between">
                      <span className="eyebrow text-xs text-primary">{w.tag}</span>
                      <span className="font-mono text-xs text-muted-foreground">{w.year}</span>
                    </div>
                    <h3 className="mt-3 text-lg text-foreground transition-colors group-hover:text-primary sm:text-xl">
                      {w.title}
                    </h3>
                    <div className="mt-auto flex items-center justify-between pt-4">
                      <span className="font-mono text-xs text-primary">{w.metric}</span>
                      <span className="eyebrow text-xs text-muted-foreground transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <Link
              to="/projects"
              className="eyebrow mt-8 inline-block text-sm text-muted-foreground transition-colors hover:text-primary sm:hidden"
            >
              View all projects →
            </Link>
          </div>
        </section>

        <WhyUs />

        <section id="process" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <h2 className="text-4xl md:text-5xl">
            HOW WE WORK<span className="text-primary">.</span>
          </h2>
          <div className="mt-10 grid gap-8 sm:mt-14 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.k} className="border-t-2 border-primary pt-6">
                <span className="font-mono text-sm text-muted-foreground">0{i + 1}</span>
                <h3 className="mt-2 text-2xl text-foreground">{s.k}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </section>

        <TechStack />

        <section className="border-y border-border">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
            <h2 className="text-3xl md:text-4xl">
              INDUSTRIES WE SERVE<span className="text-primary">.</span>
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {industries.map((i) => (
                <span
                  key={i}
                  className="eyebrow border border-border px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
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

        <section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid gap-10 sm:gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl md:text-5xl">
                GOT A PROJECT?
                <span className="text-primary">.</span>
              </h2>
              <p className="mt-6 max-w-md text-base text-muted-foreground">
                Tell us what you want to build. We reply within one working day with a scope and a
                timeline.
              </p>
              <div className="mt-10 space-y-4 font-mono text-sm">
                <p className="text-muted-foreground">
                  EMAIL:{" "}
                  <a href="mailto:hello@dev2soft.com" className="text-primary hover:underline">
                    hello@dev2soft.com
                  </a>
                </p>
                <p className="text-muted-foreground">
                  PHONE:{" "}
                  <a href="tel:+8801000000000" className="text-primary hover:underline">
                    +880 1000-000000
                  </a>
                </p>
                <p className="text-muted-foreground">HOURS: Sun–Thu, 10:00–19:00 (GMT+6)</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>

        <section className="bg-primary">
          <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:px-6 sm:py-16">
            <h2 className="text-3xl text-primary-foreground md:text-4xl">
              LET'S BUILD SOMETHING THAT LASTS.
            </h2>
            <a
              href="mailto:hello@dev2soft.com"
              className="eyebrow mt-8 inline-block border-2 border-primary-foreground px-8 py-3 text-base text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
            >
              hello@dev2soft.com
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border pb-16 lg:pb-0">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:py-16">
          <div>
            <img src="/logo.png" alt="DevToSoft" className="h-8 w-auto" />
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
            © {new Date().getFullYear()} DevToSoft | Innovate, Automate, Elevate
          </p>
        </div>
      </footer>
      <BottomNav />
    </div>
  );
}
