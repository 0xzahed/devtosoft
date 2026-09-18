const pillars = [
  "Secure authentication",
  "Role-based access control",
  "API security & rate limiting",
  "Automated testing (unit, e2e, load)",
  "Code reviews & static analysis",
  "CI/CD with zero-downtime deploys",
  "Monitoring & alerting",
  "Automated backups & disaster recovery",
  "Performance optimization",
  "Infrastructure hardening",
];

export function SecurityQuality() {
  return (
    <section id="security" className="border-b border-border bg-card/20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-sm text-primary">BUILT FOR PRODUCTION</p>
            <h2 className="mt-4 text-4xl md:text-5xl">
              SECURITY AND QUALITY
              <br />
              ARE NOT AFTERTHOUGHTS.
            </h2>
            <p className="mt-6 max-w-md text-base text-muted-foreground">
              Every product we ship follows a security-first pipeline — from day
              one architecture to continuous monitoring after launch.
            </p>
          </div>
          <div>
            <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
              {pillars.map((p, i) => (
                <div
                  key={p}
                  className="flex items-start gap-3 bg-background px-6 py-4 transition-colors hover:bg-card"
                >
                  <span className="font-display text-lg text-primary">✓</span>
                  <span className="text-sm text-foreground">{p}</span>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="eyebrow mt-8 inline-block border border-primary px-6 py-3 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              See how we approach security →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
