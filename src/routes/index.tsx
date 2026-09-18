import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/lib/projects";
import { Marquee } from "@/components/site/Marquee";
import { Stats } from "@/components/site/Stats";
import { TrustBar } from "@/components/site/TrustBar";
import { ProblemsWeSolve } from "@/components/site/ProblemsWeSolve";
import { WhyUs } from "@/components/site/WhyUs";
import { TechStack } from "@/components/site/TechStack";
import { Pricing } from "@/components/site/Pricing";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { ContactForm } from "@/components/site/ContactForm";
import { BottomNav } from "@/components/site/BottomNav";
import { AISolutions } from "@/components/site/AISolutions";
import { SecurityQuality } from "@/components/site/SecurityQuality";
import { CaseStudies } from "@/components/site/CaseStudies";
import { EngineeringPrinciples } from "@/components/site/EngineeringPrinciples";
import { Industries } from "@/components/site/Industries";
import { useContent } from "@/components/site/ContentProvider";

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

function Index() {
  const { content } = useContent();
  const { global, navbar, hero, services, steps, contact, finalCta } = content;

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 sm:px-6 sm:py-3">
          <a href="#top" className="flex shrink-0 items-center gap-3">
            <img src={global.logo} alt={`${global.siteName} logo`} className="h-8 w-auto sm:h-9" />
          </a>
          <nav className="hidden min-w-0 flex-wrap items-center justify-center gap-x-5 gap-y-1 lg:flex">
            {navbar.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="eyebrow whitespace-nowrap text-xs text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-3">
            <a
              href="#contact"
              className="eyebrow hidden bg-primary px-5 py-2 text-lg text-primary-foreground transition-transform hover:-translate-y-0.5 sm:block"
            >
              {navbar.ctaLabel}
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="pb-16 lg:pb-0">
        <section className="grid-lines relative overflow-hidden border-b border-border">
          <div className="volt-glow pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full" />
          <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 md:py-36">
            <p className="eyebrow text-sm text-primary">
              {hero.eyebrow} <span className="tracking-tight">»»»</span>
            </p>
            <h1 className="mt-6 max-w-4xl text-[clamp(2.5rem,6vw,4.5rem)] text-foreground">
              {hero.headline.map((line, i) => (
                <span
                  key={i}
                  className={i === hero.headline.length - 1 ? "text-primary" : ""}
                >
                  {line}
                  <br />
                </span>
              ))}
            </h1>
            <p className="mt-8 max-w-xl text-base text-muted-foreground">{hero.subtitle}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="eyebrow bg-primary px-6 py-3 text-base text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                {hero.primaryCta}
              </a>
              <a
                href="#work"
                className="eyebrow border border-border px-6 py-3 text-base text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {hero.secondaryCta}
              </a>
            </div>
            <div className="mt-14 flex flex-wrap gap-x-10 gap-y-3 font-mono text-xs text-muted-foreground">
              {hero.trustPoints.map((t) => (
                <span key={t}>▸ {t}</span>
              ))}
            </div>
          </div>
        </section>

        <TrustBar />
        <Marquee />
        <Stats />

        <ProblemsWeSolve />

        <section id="services" className="grid-lines relative overflow-hidden border-b border-border">
          <div className="volt-glow pointer-events-none absolute -bottom-20 left-1/2 h-[20rem] w-[20rem] -translate-x-1/2 rounded-full" />
          <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <h2 className="text-4xl md:text-5xl">
              {services.title}
              <span className="text-primary">.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base text-muted-foreground">{services.subtitle}</p>
            <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
              {services.items.map((s) => (
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
            <div className="mt-16 overflow-hidden border-t border-border pt-8">
              <div className="flex w-max animate-[marquee_25s_linear_infinite]">
                {[0, 1].map((dup) => (
                  <div key={dup} className="flex shrink-0 gap-12">
                    {services.items.flatMap((s) => s.tags).map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {tag} <span className="opacity-30">///</span>
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <AISolutions />

        <CaseStudies />

        <WhyUs />
        <EngineeringPrinciples />

        <section id="process" className="grid-lines relative overflow-hidden border-b border-border">
          <div className="volt-glow pointer-events-none absolute -right-40 top-0 h-[24rem] w-[24rem] rounded-full" />
          <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <h2 className="text-4xl md:text-5xl">
              {steps.title}
              <span className="text-primary">.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base text-muted-foreground">{steps.subtitle}</p>
            <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 sm:mt-14 lg:grid-cols-4">
              {steps.items.map((s, i) => (
                <div
                  key={s.k}
                  className="group flex flex-col gap-3 bg-background p-6 transition-colors hover:bg-card sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-primary">0{i + 1}</span>
                    <span className="font-display text-xl text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      →
                    </span>
                  </div>
                  <div className="border-t-2 border-primary pt-4">
                    <h3 className="eyebrow text-sm text-foreground transition-colors group-hover:text-primary">
                      {s.k}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground">{s.v}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TechStack />

        <SecurityQuality />

        <Industries />

        <Pricing />
        <Testimonials />
        <FAQ />

        <section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid gap-10 sm:gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl md:text-5xl">
                {contact.title}
                <span className="text-primary">{contact.accentLine}</span>
              </h2>
              <p className="mt-6 max-w-md text-base text-muted-foreground">{contact.subtitle}</p>
              <div className="mt-10 space-y-4 font-mono text-sm">
                <p className="text-muted-foreground">
                  EMAIL:{" "}
                  <a
                    href={`mailto:${global.contactEmail}`}
                    className="text-primary hover:underline"
                  >
                    {global.contactEmail}
                  </a>
                </p>
                <p className="text-muted-foreground">
                  PHONE:{" "}
                  <a href={`tel:${global.contactPhone.replace(/\s/g, "")}`} className="text-primary hover:underline">
                    {global.contactPhone}
                  </a>
                </p>
                <p className="text-muted-foreground">HOURS: {global.hours}</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>

        <section className="bg-primary">
          <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:px-6 sm:py-16">
            <h2 className="text-3xl text-primary-foreground md:text-4xl">{finalCta.title}</h2>
            <a
              href={`mailto:${finalCta.cta}`}
              className="eyebrow mt-8 inline-block border-2 border-primary-foreground px-8 py-3 text-base text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
            >
              {finalCta.cta}
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border pb-16 lg:pb-0">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:py-16">
          <div>
            <img src={global.logo} alt={global.siteName} className="h-8 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">{global.tagline}</p>
          </div>
          <div>
            <h3 className="eyebrow text-base text-primary">Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {services.items.slice(0, 4).map((s) => (
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
              {[
                { label: "Work", href: "#work" },
                { label: "Why", href: "#why" },
                { label: "Process", href: "#process" },
                { label: "Pricing", href: "#pricing" },
                { label: "FAQ", href: "#faq" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-foreground">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="eyebrow text-base text-primary">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${global.contactEmail}`} className="hover:text-foreground">
                  {global.contactEmail}
                </a>
              </li>
              <li>
                <a href={`tel:${global.contactPhone.replace(/\s/g, "")}`} className="hover:text-foreground">
                  {global.contactPhone}
                </a>
              </li>
              <li>{global.address}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <p className="mx-auto max-w-6xl px-6 py-6 font-mono text-xs text-muted-foreground">
            {global.copyright.replace("{year}", String(new Date().getFullYear()))}
          </p>
        </div>
      </footer>
      <BottomNav />
    </div>
  );
}