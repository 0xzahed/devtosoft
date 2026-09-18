import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ContentProvider, useContent } from "@/components/site/ContentProvider";
import type { SiteContent } from "@/lib/content";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin | DevToSoft" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

type Path = (string | number)[];

function getAt<T>(obj: unknown, path: Path): T {
  return path.reduce<unknown>((acc, key) => (acc as Record<string, unknown>)?.[key], obj) as T;
}

function setAt(obj: SiteContent, path: Path, value: unknown): SiteContent {
  const clone = structuredClone(obj);
  let cur = clone as Record<string, unknown>;
  for (let i = 0; i < path.length - 1; i++) {
    cur = cur[path[i]!] as Record<string, unknown>;
  }
  cur[path[path.length - 1]!] = value;
  return clone;
}

function pushTo(obj: SiteContent, path: Path, value: unknown): SiteContent {
  const arr = getAt<unknown[]>(obj, path) ?? [];
  return setAt(obj, path, [...arr, value]);
}

function removeAt(obj: SiteContent, path: Path, index: number): SiteContent {
  const arr = getAt<unknown[]>(obj, path) ?? [];
  return setAt(obj, path, arr.filter((_, i) => i !== index));
}

const inputCls =
  "w-full border border-border bg-card px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

function Label({ children }: { children: ReactNode }) {
  return <label className="eyebrow block text-[10px] text-muted-foreground">{children}</label>;
}

function Text({ path, row, col }: { path: Path; row?: "full"; col?: boolean }) {
  const { content, update } = useContent();
  const value = getAt<string>(content, path);
  return (
    <div className={col ? "min-w-0" : row === "full" ? "sm:col-span-full" : ""}>
      <Label>{String(path[path.length - 1])}</Label>
      <input
        className={`${inputCls} mt-1`}
        value={value ?? ""}
        onChange={(e) => update((d) => setAt(d, path, e.target.value))}
      />
    </div>
  );
}

function TextArea({ path }: { path: Path }) {
  const { content, update } = useContent();
  const value = getAt<string>(content, path);
  return (
    <div className="sm:col-span-full">
      <Label>{String(path[path.length - 1])}</Label>
      <textarea
        className={`${inputCls} mt-1 min-h-20`}
        value={value ?? ""}
        onChange={(e) => update((d) => setAt(d, path, e.target.value))}
      />
    </div>
  );
}

function ListEditor({ path, separator = "|" }: { path: Path; separator?: string }) {
  const { content, update } = useContent();
  const items = getAt<string[]>(content, path) ?? [];
  return (
    <div className="sm:col-span-full">
      <Label>{String(path[path.length - 1])} (separate with “{separator}”)</Label>
      <input
        className={`${inputCls} mt-1`}
        defaultValue={items.join(` ${separator} `)}
        onChange={(e) =>
          update((d) =>
            setAt(
              d,
              path,
              e.target.value
                .split(separator)
                .map((x) => x.trim())
                .filter(Boolean),
            ),
          )
        }
      />
    </div>
  );
}

function SimpleItems({ path }: { path: Path }) {
  const { content, update } = useContent();
  const items = getAt<string[]>(content, path) ?? [];
  return (
    <div className="sm:col-span-full">
      <Label>{String(path[path.length - 1])}</Label>
      <div className="mt-1 space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex gap-2">
            <input
              className={inputCls}
              value={item}
              onChange={(e) =>
                update((d) => {
                  const arr = getAt<string[]>(d, path);
                  return setAt(d, path, arr.map((x, j) => (j === i ? e.target.value : x)));
                })
              }
            />
            <button
              type="button"
              onClick={() => update((d) => removeAt(d, path, i))}
              className="shrink-0 border border-border px-3 text-muted-foreground transition-colors hover:border-destructive hover:text-destructive"
            >
              ×
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => update((d) => pushTo(d, path, ""))}
          className="eyebrow border border-primary px-3 py-1.5 text-[10px] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          + Add
        </button>
      </div>
    </div>
  );
}

function SectionCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="grid gap-4 rounded border border-border bg-background p-5 sm:grid-cols-2">
      <h3 className="eyebrow text-sm text-primary sm:col-span-full">{title}</h3>
      {children}
    </div>
  );
}

const tabs = [
  { id: "global", label: "Global" },
  { id: "navbar", label: "Navbar" },
  { id: "hero", label: "Hero" },
  { id: "services", label: "Services" },
  { id: "stats", label: "Stats" },
  { id: "trust", label: "Trust Bar" },
  { id: "problems", label: "Problems" },
  { id: "ai", label: "AI" },
  { id: "steps", label: "Process" },
  { id: "why", label: "Why Us" },
  { id: "principles", label: "Principles" },
  { id: "security", label: "Security" },
  { id: "industries", label: "Industries" },
  { id: "pricing", label: "Pricing" },
  { id: "testimonials", label: "Testimonials" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
  { id: "cta", label: "Final CTA" },
] as const;

type TabId = (typeof tabs)[number]["id"];

function AdminEditor() {
  const { content, update, reset, setContent } = useContent();
  const [tab, setTab] = useState<TabId>("global");
  const [savedAt, setSavedAt] = useState<string | null>(null);

  const p = (...path: Path): Path => path;

  const handleSave = () => {
    setContent(content);
    setSavedAt(new Date().toLocaleTimeString());
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div>
            <p className="eyebrow text-sm text-primary">DevToSoft Admin</p>
            <p className="font-mono text-xs text-muted-foreground">
              {savedAt ? `Last saved ${savedAt}` : "Edits auto-save to localStorage"}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="eyebrow border border-border px-4 py-2 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              ← View site
            </Link>
            <button
              type="button"
              onClick={handleSave}
              className="eyebrow bg-primary px-4 py-2 text-xs text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Save now
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[210px_1fr]">
        <aside className="lg:sticky lg:top-20 lg:self-start">
          <p className="eyebrow text-[10px] text-muted-foreground">Sections</p>
          <nav className="mt-3 flex gap-1 overflow-x-auto lg:flex-col lg:overflow-visible">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={`whitespace-nowrap border px-3 py-2 text-left text-xs transition-colors ${
                  tab === t.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {t.label}
              </button>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => {
              reset();
              setSavedAt(null);
            }}
            className="eyebrow mt-4 w-full border border-destructive px-3 py-2 text-xs text-destructive transition-colors hover:bg-destructive hover:text-destructive-foreground"
          >
            Reset to defaults
          </button>
        </aside>

        <main className="min-w-0 space-y-6">
          {tab === "global" && (
            <>
              <SectionCard title="Global">
                <Text path={p("global", "siteName")} />
                <Text path={p("global", "logo")} />
                <TextArea path={p("global", "tagline")} />
                <Text path={p("global", "contactEmail")} />
                <Text path={p("global", "contactPhone")} />
                <Text path={p("global", "hours")} />
                <Text path={p("global", "address")} />
                <Text path={p("global", "copyright")} row="full" />
              </SectionCard>
            </>
          )}

          {tab === "navbar" && (
            <>
              <SectionCard title="Navbar CTA">
                <Text path={p("navbar", "ctaLabel")} />
              </SectionCard>
              <SectionCard title="Navbar Links">
                {content.navbar.links.map((link, i) => (
                  <div key={i} className="grid gap-2 sm:grid-cols-2 sm:col-span-full">
                    <input
                      className={inputCls}
                      placeholder="Label"
                      value={link.label}
                      onChange={(e) =>
                        update((d) => {
                          const arr = getAt<{ label: string; href: string }[]>(d, ["navbar", "links"]);
                          return setAt(d, ["navbar", "links", i, "label"], e.target.value);
                        })
                      }
                    />
                    <div className="flex gap-2">
                      <input
                        className={inputCls}
                        placeholder="#section"
                        value={link.href}
                        onChange={(e) =>
                          update((d) => {
                            const arr = getAt<{ label: string; href: string }[]>(d, ["navbar", "links"]);
                            return setAt(d, ["navbar", "links", i, "href"], e.target.value);
                          })
                        }
                      />
                      <button
                        type="button"
                        onClick={() => update((d) => removeAt(d, ["navbar", "links"], i))}
                        className="shrink-0 border border-border px-3 text-muted-foreground transition-colors hover:border-destructive hover:text-destructive"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => update((d) => pushTo(d, ["navbar", "links"], { label: "New", href: "#" }))}
                  className="eyebrow border border-primary px-3 py-1.5 text-[10px] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  + Add link
                </button>
              </SectionCard>
            </>
          )}

          {tab === "hero" && (
            <>
              <SectionCard title="Hero">
                <Text path={p("hero", "eyebrow")} />
              </SectionCard>
              <SectionCard title="Headline Lines">
                {content.hero.headline.map((line, i) => (
                  <div key={i} className="flex gap-2 sm:col-span-full">
                    <input
                      className={inputCls}
                      value={line}
                      onChange={(e) =>
                        update((d) => {
                          const arr = getAt<string[]>(d, ["hero", "headline"]);
                          return setAt(d, ["hero", "headline"], arr.map((x, j) => (j === i ? e.target.value : x)));
                        })
                      }
                    />
                    <button
                      type="button"
                      onClick={() => update((d) => removeAt(d, ["hero", "headline"], i))}
                      className="shrink-0 border border-border px-3 text-muted-foreground hover:border-destructive hover:text-destructive"
                    >
                      ×
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => update((d) => pushTo(d, ["hero", "headline"], "NEW LINE"))}
                  className="eyebrow border border-primary px-3 py-1.5 text-[10px] text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  + Add line
                </button>
                <Text path={p("hero", "accentLine")} />
                <TextArea path={p("hero", "subtitle")} />
                <Text path={p("hero", "primaryCta")} />
                <Text path={p("hero", "secondaryCta")} />
              </SectionCard>
              <SectionCard title="Trust Points">
                <SimpleItems path={p("hero", "trustPoints")} />
              </SectionCard>
            </>
          )}

          {tab === "services" && (
            <>
              <SectionCard title="Services Header">
                <Text path={p("services", "title")} />
                <TextArea path={p("services", "subtitle")} />
              </SectionCard>
              {content.services.items.map((s, idx) => (
                <SectionCard key={idx} title={`Service ${idx + 1}`}>
                  <Text path={p("services", "items", idx, "n")} />
                  <Text path={p("services", "items", idx, "title")} />
                  <TextArea path={p("services", "items", idx, "body")} />
                  <ListEditor path={p("services", "items", idx, "tags")} />
                  <div className="sm:col-span-full">
                    <button
                      type="button"
                      onClick={() => update((d) => removeAt(d, ["services", "items"], idx))}
                      className="eyebrow border border-destructive px-3 py-1.5 text-[10px] text-destructive transition-colors hover:bg-destructive hover:text-destructive-foreground"
                    >
                      Delete service
                    </button>
                  </div>
                </SectionCard>
              ))}
              <button
                type="button"
                onClick={() =>
                  update((d) =>
                    pushTo(d, ["services", "items"], { n: "0" + (content.services.items.length + 1), title: "NEW SERVICE", body: "", tags: ["Tag"] }),
                  )
                }
                className="eyebrow border border-primary px-4 py-2 text-xs text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                + Add service
              </button>
            </>
          )}

          {tab === "stats" && (
            <>
              {content.stats.map((s, idx) => (
                <SectionCard key={idx} title={`Stat ${idx + 1}`}>
                  <Text path={p("stats", idx, "v")} />
                  <Text path={p("stats", idx, "k")} />
                  <div className="sm:col-span-full">
                    <button
                      type="button"
                      onClick={() => update((d) => removeAt(d, ["stats"], idx))}
                      className="eyebrow border border-destructive px-3 py-1.5 text-[10px] text-destructive hover:bg-destructive hover:text-destructive-foreground"
                    >
                      Remove
                    </button>
                  </div>
                </SectionCard>
              ))}
              <button
                type="button"
                onClick={() => update((d) => pushTo(d, ["stats"], { v: "10+", k: "New stat" }))}
                className="eyebrow border border-primary px-4 py-2 text-xs text-primary hover:bg-primary hover:text-primary-foreground"
              >
                + Add stat
              </button>
            </>
          )}

          {tab === "trust" && (
            <>
              <SectionCard title="Trust Bar">
                <Text path={p("trustBar", "label")} row="full" />
              </SectionCard>
              {content.trustBar.clients.map((c, idx) => (
                <SectionCard key={idx} title={`Client ${idx + 1}`}>
                  <Text path={p("trustBar", "clients", idx, "name")} />
                  <Text path={p("trustBar", "clients", idx, "sector")} />
                  <div className="sm:col-span-full">
                    <button
                      type="button"
                      onClick={() => update((d) => removeAt(d, ["trustBar", "clients"], idx))}
                      className="eyebrow border border-destructive px-3 py-1.5 text-[10px] text-destructive hover:bg-destructive hover:text-destructive-foreground"
                    >
                      Remove
                    </button>
                  </div>
                </SectionCard>
              ))}
              <button
                type="button"
                onClick={() => update((d) => pushTo(d, ["trustBar", "clients"], { name: "Client", sector: "Sector" }))}
                className="eyebrow border border-primary px-4 py-2 text-xs text-primary hover:bg-primary hover:text-primary-foreground"
              >
                + Add client
              </button>
            </>
          )}

          {tab === "problems" && (
            <>
              <SectionCard title="Problems Header">
                <Text path={p("problems", "title")} />
                <Text path={p("problems", "accentLine")} />
                <TextArea path={p("problems", "subtitle")} />
              </SectionCard>
              {content.problems.items.map((item, idx) => (
                <SectionCard key={idx} title={`Problem ${idx + 1}`}>
                  <Text path={p("problems", "items", idx, "q")} />
                  <Text path={p("problems", "items", idx, "icon")} />
                  <TextArea path={p("problems", "items", idx, "s")} />
                  <div className="sm:col-span-full">
                    <button
                      type="button"
                      onClick={() => update((d) => removeAt(d, ["problems", "items"], idx))}
                      className="eyebrow border border-destructive px-3 py-1.5 text-[10px] text-destructive hover:bg-destructive hover:text-destructive-foreground"
                    >
                      Remove
                    </button>
                  </div>
                </SectionCard>
              ))}
              <button
                type="button"
                onClick={() => update((d) => pushTo(d, ["problems", "items"], { q: "NEED HELP?", s: "Description", icon: "💡" }))}
                className="eyebrow border border-primary px-4 py-2 text-xs text-primary hover:bg-primary hover:text-primary-foreground"
              >
                + Add problem
              </button>
            </>
          )}

          {tab === "ai" && (
            <>
              <SectionCard title="AI Header">
                <Text path={p("ai", "eyebrow")} />
                <Text path={p("ai", "title")} />
                <Text path={p("ai", "accentLine")} />
                <TextArea path={p("ai", "subtitle")} />
                <Text path={p("ai", "cta")} />
              </SectionCard>
              {content.ai.items.map((item, idx) => (
                <SectionCard key={idx} title={`AI Solution ${idx + 1}`}>
                  <Text path={p("ai", "items", idx, "t")} />
                  <TextArea path={p("ai", "items", idx, "d")} />
                  <div className="sm:col-span-full">
                    <button
                      type="button"
                      onClick={() => update((d) => removeAt(d, ["ai", "items"], idx))}
                      className="eyebrow border border-destructive px-3 py-1.5 text-[10px] text-destructive hover:bg-destructive hover:text-destructive-foreground"
                    >
                      Remove
                    </button>
                  </div>
                </SectionCard>
              ))}
              <button
                type="button"
                onClick={() => update((d) => pushTo(d, ["ai", "items"], { t: "NEW AI SERVICE", d: "Description" }))}
                className="eyebrow border border-primary px-4 py-2 text-xs text-primary hover:bg-primary hover:text-primary-foreground"
              >
                + Add AI solution
              </button>
            </>
          )}

          {tab === "steps" && (
            <>
              <SectionCard title="Process Header">
                <Text path={p("steps", "title")} />
                <TextArea path={p("steps", "subtitle")} />
              </SectionCard>
              {content.steps.items.map((s, idx) => (
                <SectionCard key={idx} title={`Step ${idx + 1}`}>
                  <Text path={p("steps", "items", idx, "k")} />
                  <TextArea path={p("steps", "items", idx, "v")} />
                  <div className="sm:col-span-full">
                    <button
                      type="button"
                      onClick={() => update((d) => removeAt(d, ["steps", "items"], idx))}
                      className="eyebrow border border-destructive px-3 py-1.5 text-[10px] text-destructive hover:bg-destructive hover:text-destructive-foreground"
                    >
                      Remove
                    </button>
                  </div>
                </SectionCard>
              ))}
              <button
                type="button"
                onClick={() => update((d) => pushTo(d, ["steps", "items"], { k: "NEW STEP", v: "Description" }))}
                className="eyebrow border border-primary px-4 py-2 text-xs text-primary hover:bg-primary hover:text-primary-foreground"
              >
                + Add step
              </button>
            </>
          )}

          {tab === "why" && (
            <>
              <SectionCard title="Why Header">
                <Text path={p("why", "eyebrow")} />
                <Text path={p("why", "title")} />
              </SectionCard>
              {content.why.items.map((w, idx) => (
                <SectionCard key={idx} title={`Why Point ${idx + 1}`}>
                  <Text path={p("why", "items", idx, "t")} />
                  <Text path={p("why", "items", idx, "icon")} />
                  <TextArea path={p("why", "items", idx, "b")} />
                  <div className="sm:col-span-full">
                    <button
                      type="button"
                      onClick={() => update((d) => removeAt(d, ["why", "items"], idx))}
                      className="eyebrow border border-destructive px-3 py-1.5 text-[10px] text-destructive hover:bg-destructive hover:text-destructive-foreground"
                    >
                      Remove
                    </button>
                  </div>
                </SectionCard>
              ))}
              <button
                type="button"
                onClick={() => update((d) => pushTo(d, ["why", "items"], { t: "NEW POINT", b: "Description", icon: "✓" }))}
                className="eyebrow border border-primary px-4 py-2 text-xs text-primary hover:bg-primary hover:text-primary-foreground"
              >
                + Add point
              </button>
            </>
          )}

          {tab === "principles" && (
            <>
              <SectionCard title="Principles Header">
                <Text path={p("principles", "eyebrow")} />
                <Text path={p("principles", "title")} />
                <Text path={p("principles", "accentLine")} />
                <TextArea path={p("principles", "subtitle")} />
              </SectionCard>
              {content.principles.items.map((item, idx) => (
                <SectionCard key={idx} title={`Principle ${idx + 1}`}>
                  <Text path={p("principles", "items", idx, "n")} />
                  <Text path={p("principles", "items", idx, "t")} />
                  <TextArea path={p("principles", "items", idx, "d")} />
                  <div className="sm:col-span-full">
                    <button
                      type="button"
                      onClick={() => update((d) => removeAt(d, ["principles", "items"], idx))}
                      className="eyebrow border border-destructive px-3 py-1.5 text-[10px] text-destructive hover:bg-destructive hover:text-destructive-foreground"
                    >
                      Remove
                    </button>
                  </div>
                </SectionCard>
              ))}
              <button
                type="button"
                onClick={() => update((d) => pushTo(d, ["principles", "items"], { n: "06", t: "NEW PRINCIPLE", d: "Description" }))}
                className="eyebrow border border-primary px-4 py-2 text-xs text-primary hover:bg-primary hover:text-primary-foreground"
              >
                + Add principle
              </button>
            </>
          )}

          {tab === "security" && (
            <>
              <SectionCard title="Security Header">
                <Text path={p("security", "eyebrow")} />
                <Text path={p("security", "title")} />
                <Text path={p("security", "accentLine")} />
                <TextArea path={p("security", "subtitle")} />
                <Text path={p("security", "cta")} />
              </SectionCard>
              <SectionCard title="Security Items">
                <SimpleItems path={p("security", "items")} />
              </SectionCard>
            </>
          )}

          {tab === "industries" && (
            <>
              <SectionCard title="Industries Header">
                <Text path={p("industries", "eyebrow")} />
                <Text path={p("industries", "name")} />
              </SectionCard>
              <SectionCard title="Industry Names">
                <SimpleItems path={p("industries", "items")} />
              </SectionCard>
            </>
          )}

          {tab === "pricing" && (
            <>
              <SectionCard title="Pricing Header">
                <Text path={p("pricing", "title")} />
                <TextArea path={p("pricing", "subtitle")} />
                <Text path={p("pricing", "cta")} />
              </SectionCard>
              {content.pricing.plans.map((plan, idx) => (
                <SectionCard key={idx} title={`Plan: ${plan.name}`}>
                  <Text path={p("pricing", "plans", idx, "name")} />
                  <Text path={p("pricing", "plans", idx, "price")} />
                  <Text path={p("pricing", "plans", idx, "unit")} />
                  <TextArea path={p("pricing", "plans", idx, "desc")} />
                  <div className="sm:col-span-full flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={plan.featured}
                      onChange={(e) => update((d) => setAt(d, ["pricing", "plans", idx, "featured"], e.target.checked))}
                      className="h-4 w-4 accent-primary"
                    />
                    <span className="text-sm text-muted-foreground">Featured plan</span>
                  </div>
                  <ListEditor path={p("pricing", "plans", idx, "features")} separator=";" />
                  <div className="sm:col-span-full">
                    <button
                      type="button"
                      onClick={() => update((d) => removeAt(d, ["pricing", "plans"], idx))}
                      className="eyebrow border border-destructive px-3 py-1.5 text-[10px] text-destructive hover:bg-destructive hover:text-destructive-foreground"
                    >
                      Delete plan
                    </button>
                  </div>
                </SectionCard>
              ))}
              <button
                type="button"
                onClick={() =>
                  update((d) =>
                    pushTo(d, ["pricing", "plans"], {
                      name: "NEW PLAN",
                      price: "$0",
                      unit: "/ month",
                      desc: "",
                      features: ["Feature 1"],
                      featured: false,
                    }),
                  )
                }
                className="eyebrow border border-primary px-4 py-2 text-xs text-primary hover:bg-primary hover:text-primary-foreground"
              >
                + Add plan
              </button>
            </>
          )}

          {tab === "testimonials" && (
            <>
              <SectionCard title="Testimonials Header">
                <Text path={p("testimonials", "title")} />
              </SectionCard>
              {content.testimonials.items.map((t, idx) => (
                <SectionCard key={idx} title={`Testimonial ${idx + 1}`}>
                  <TextArea path={p("testimonials", "items", idx, "q")} />
                  <Text path={p("testimonials", "items", idx, "n")} />
                  <Text path={p("testimonials", "items", idx, "r")} />
                  <div className="sm:col-span-full">
                    <button
                      type="button"
                      onClick={() => update((d) => removeAt(d, ["testimonials", "items"], idx))}
                      className="eyebrow border border-destructive px-3 py-1.5 text-[10px] text-destructive hover:bg-destructive hover:text-destructive-foreground"
                    >
                      Remove
                    </button>
                  </div>
                </SectionCard>
              ))}
              <button
                type="button"
                onClick={() => update((d) => pushTo(d, ["testimonials", "items"], { q: "Quote", n: "Name", r: "Role" }))}
                className="eyebrow border border-primary px-4 py-2 text-xs text-primary hover:bg-primary hover:text-primary-foreground"
              >
                + Add testimonial
              </button>
            </>
          )}

          {tab === "faq" && (
            <>
              <SectionCard title="FAQ Header">
                <Text path={p("faq", "title")} />
              </SectionCard>
              {content.faq.items.map((f, idx) => (
                <SectionCard key={idx} title={`Question ${idx + 1}`}>
                  <TextArea path={p("faq", "items", idx, "q")} />
                  <TextArea path={p("faq", "items", idx, "a")} />
                  <div className="sm:col-span-full">
                    <button
                      type="button"
                      onClick={() => update((d) => removeAt(d, ["faq", "items"], idx))}
                      className="eyebrow border border-destructive px-3 py-1.5 text-[10px] text-destructive hover:bg-destructive hover:text-destructive-foreground"
                    >
                      Remove
                    </button>
                  </div>
                </SectionCard>
              ))}
              <button
                type="button"
                onClick={() => update((d) => pushTo(d, ["faq", "items"], { q: "Question?", a: "Answer." }))}
                className="eyebrow border border-primary px-4 py-2 text-xs text-primary hover:bg-primary hover:text-primary-foreground"
              >
                + Add question
              </button>
            </>
          )}

          {tab === "contact" && (
            <>
              <SectionCard title="Contact Header">
                <Text path={p("contact", "title")} row="full" />
                <Text path={p("contact", "accentLine")} row="full" />
                <TextArea path={p("contact", "subtitle")} />
              </SectionCard>
              <SectionCard title="Form Options">
                <SimpleItems path={p("contact", "formDefaults", "budgets")} />
                <SimpleItems path={p("contact", "formDefaults", "needs")} />
              </SectionCard>
            </>
          )}

          {tab === "cta" && (
            <>
              <SectionCard title="Final CTA">
                <TextArea path={p("finalCta", "title")} />
                <Text path={p("finalCta", "cta")} row="full" />
              </SectionCard>
            </>
          )}
        </main>
      </div>
    </div>
  );
}

function AdminPage() {
  return (
    <ContentProvider>
      <AdminEditor />
    </ContentProvider>
  );
}