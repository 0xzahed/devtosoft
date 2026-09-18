# DevToSoft — Homepage Design Specification (Premium Product-Engineering Edition)

> **Purpose:** Section-by-section specification for the DevToSoft homepage redesign, positioning the company as a **premium product-engineering agency**.

---

## Design System Foundation

| Property | Value |
|---|---|
| **Background** | `oklch(0.13 0 0)` — near-black ink |
| **Foreground** | `oklch(0.985 0 0)` — paper white |
| **Primary (Accent)** | `oklch(0.88 0.21 122)` — lime volt green |
| **Card** | `oklch(0.18 0 0)` — dark elevated surface |
| **Muted** | `oklch(0.72 0 0)` — mid-gray |
| **Border** | `oklch(1 0 0 / 14%)` — subtle white line |
| **Font** | Inter (system-ui fallback) |
| **Utility: `eyebrow`** | `letter-spacing: 0.22em; text-transform: uppercase;` |
| **Utility: `grid-lines`** | Subtle 72px grid background pattern |
| **Utility: `volt-glow`** | Radial gradient blur using primary color |

---

## Complete Section Order

```
NAVBAR (sticky, glass, mini nav links)
│
├── 01. HERO
│       → Headline + CTA + trust markers (NDA, fixed-price, response time)
│
├── 02. TRUST BAR (NEW)
│       → "TRUSTED BY TEAMS BUILDING WHAT'S NEXT"
│       → Client name + sector grid
│
├── 03. MARQUEE
│       → Rotating service keywords (existing)
│
├── 04. METRICS / STATS (existing, enhanced)
│       → 120+ Projects · 50+ Engineers · 14 Countries · 98% Retention · 99.9% Uptime
│
├── 05. PROBLEMS WE SOLVE (NEW)
│       → 5 problem-statement cards with icons
│       → Grid: 3 cols desktop, 2 cols mobile
│
├── 06. SERVICES (existing)
│       → 6 numbered service cards with tags
│       → Grid: 3 cols desktop, 2 cols mobile
│
├── 07. AI SOLUTIONS (NEW)
│       → Volt glow background
│       → 5 AI service categories
│       → CTA link at bottom
│
├── 08. CASE STUDIES / RESULTS (NEW — replaces old grid)
│       → Full problem/solution/results per project
│       → Stack tags, image, metrics
│       → Vertical stacked cards with left-right layout
│
├── 09. WHY DevToSoft (existing)
│       → 4 value propositions with left-border accent
│
├── 10. HOW WE WORK / PROCESS (existing)
│       → 4 steps with top-border accent
│       → Grid: 4 cols desktop
│
├── 11. TECH STACK (existing)
│       → 4 groups (Frontend, Backend, Data, AI, Cloud)
│       → Vertical list format
│
├── 12. SECURITY & QUALITY (NEW)
│       → 2-column layout: text left, checklist right
│       → 10 quality pillars with checkmark
│       → CTA link at bottom
│
├── 13. INDUSTRIES (existing)
│       → Pill/tag grid
│
├── 14. ENGAGEMENT / PRICING (existing)
│       → 3 pricing tiers (Sprint, Product, Retainer)
│       → Featured card highlight
│
├── 15. CLIENT VOICES / TESTIMONIALS (existing)
│       → 3 quote cards
│       → Blockquote + name + role
│
├── 16. FAQ (existing)
│       → Accordion component
│       → 5-10 practical Q&A
│
├── 17. CONTACT / PROJECT ENQUIRY
│       → 2-column: text + ContactForm
│
├── 18. FINAL CTA
│       → Full-width primary background
│       → Email CTA button
│
└── FOOTER
        → 4-column links + copyright
```

---

## Section-by-Section Specification

### Section 01: Hero

| Property | Value |
|---|---|
| **Section class** | `grid-lines relative overflow-hidden border-b border-border` |
| **Layout** | Single column, centered content |
| **Max width** | `max-w-6xl` |
| **Padding** | `py-16 sm:px-6 sm:py-24 md:py-36` |
| **Animation** | `volt-glow` div absolute positioned `-right-40 -top-40`, `blur(30px)`, `h-[36rem] w-[36rem]` |
| **Eyebrow text** | `"Innovate, Automate, Elevate »»»"` — `text-sm text-primary` |
| **H1** | `text-[clamp(2.5rem,6vw,4.5rem)]`, 3 lines, third line `text-primary` |
| **Subtitle** | `max-w-xl text-base text-muted-foreground` |
| **CTA buttons** | Primary filled (`bg-primary px-6 py-3`) + outline (`border border-border px-6 py-3`) |
| **Trust markers** | `font-mono text-xs text-muted-foreground`, 3 items: NDA, Fixed-price, 1-day reply |
| **Spacing after** | Marquee follows directly |

---

### Section 02: Trust Bar (NEW)

| Property | Value |
|---|---|
| **Section class** | `border-b border-border bg-card/30` |
| **Layout** | Centered content |
| **Heading** | `eyebrow text-center text-xs text-muted-foreground` — `"TRUSTED BY TEAMS BUILDING WHAT'S NEXT"` |
| **Client grid** | `grid-cols-2 sm:grid-cols-4 lg:grid-cols-8`, gap-6 vertically, gap-8 horizontally |
| **Client card** | Name (font-display, text-lg, hover:text-primary) + Sector (font-mono, text-[10px], text-muted-foreground) |
| **Animation** | Hover transition on name color |
| **Padding** | `py-10 sm:px-6 sm:py-14` |

---

### Section 03: Metrics / Stats (ENHANCED)

| Property | Value |
|---|---|
| **Section class** | `border-y border-border bg-card/40` |
| **Layout** | `grid-cols-2 sm:grid-cols-4` (was 4, now 5) |
| **Values** | 120+ Projects · 50+ Engineers · 14 Countries · 98% Retention · 99.9% Uptime |
| **Stat card** | `bg-background px-6 py-10 text-center sm:px-8 sm:py-12` |
| **Value** | `font-display text-4xl text-primary md:text-5xl` |
| **Label** | `eyebrow mt-3 text-sm text-muted-foreground` |
| **Divider** | `gap-px bg-border` between grid items |

---

### Section 04: Problems We Solve (NEW)

| Property | Value |
|---|---|
| **Section id** | `problems` |
| **Section class** | `grid-lines border-b border-border` |
| **Layout** | Single column heading, then `grid-cols-2 sm:grid-cols-3` |
| **Heading** | `text-4xl md:text-5xl`, two lines, second line `text-primary` |
| **Subtitle** | `max-w-xl text-base text-muted-foreground` |
| **Card** | `group flex flex-col gap-3 bg-background p-6 sm:p-8 transition-colors hover:bg-card` |
| **Card icon** | `text-3xl` |
| **Card heading** | `eyebrow text-sm text-primary` |
| **Card text** | `text-sm text-muted-foreground` |
| **Border** | `gap-px border border-border bg-border` between cards |

---

### Section 05: Services (existing, unchanged)

| Property | Value |
|---|---|
| **Section id** | `services` |
| **Layout** | `grid-cols-2 lg:grid-cols-3`, `gap-px border border-border bg-border` |
| **Card** | `group bg-background p-6 sm:p-10 transition-colors hover:bg-card` |
| **Number** | `font-mono text-sm text-primary` |
| **Title** | `text-2xl text-foreground transition-colors group-hover:text-primary` |
| **Tags** | `border border-border px-3 py-1 font-mono text-xs text-muted-foreground` |

---

### Section 06: AI Solutions (NEW)

| Property | Value |
|---|---|
| **Section id** | `ai` |
| **Section class** | `border-b border-border` (relative, overflow hidden) |
| **Glow** | `volt-glow` absolute positioned `-right-40 top-0 h-[28rem] w-[28rem]` |
| **Layout** | Inside glow div: relative z-content |
| **Eyebrow** | `text-sm text-primary` — `"AI AUTOMATION"` |
| **Heading** | `text-4xl md:text-5xl`, second line `text-primary` |
| **Subtitle** | `max-w-xl text-base text-muted-foreground` |
| **Cards** | `group bg-background p-6 sm:p-8 transition-colors hover:bg-card`, `grid-cols-2 lg:grid-cols-3` |
| **Card heading** | `eyebrow text-sm text-primary group-hover:text-foreground transition-colors` |
| **Card text** | `text-sm text-muted-foreground` |
| **CTA** | `border border-primary px-6 py-3 text-sm text-primary hover:bg-primary hover:text-primary-foreground` |

---

### Section 07: Case Studies / Results (NEW)

| Property | Value |
|---|---|
| **Section id** | `work` |
| **Section class** | `border-b border-border bg-card/20` |
| **Layout** | Header row (flex, items-end justify-between), then stacked project cards |
| **Card layout** | `grid gap-8 lg:grid-cols-2` — left = problem/solution, right = image/stack/results |
| **Project tag** | `eyebrow border border-primary px-3 py-1 text-xs text-primary` |
| **Project meta** | `font-mono text-xs text-muted-foreground` — `{year} · {duration}` |
| **Project title** | `text-2xl md:text-3xl text-foreground transition-colors group-hover:text-primary` |
| **Problem section** | `eyebrow text-xs text-primary` label + `text-sm text-foreground` body |
| **Solution section** | Same structure |
| **Image** | `aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105`, border overflow |
| **Stack tags** | `border border-border px-2.5 py-1 font-mono text-[10px] text-muted-foreground` |
| **Result label** | `eyebrow text-xs text-primary` |
| **Result items** | `flex items-center gap-2 text-sm text-muted-foreground`, `▸` as primary |
| **Spacing between cards** | `space-y-16` |

---

### Section 08: Why DevToSoft (existing, unchanged)

| Property | Value |
|---|---|
| **Section id** | `why` |
| **Section class** | `grid-lines border-b border-border` |
| **Heading** | `text-4xl md:text-5xl`, `span.text-primary` |
| **Layout** | `grid-cols-2 sm:grid-cols-2`, `gap-8 sm:gap-10` |
| **Card** | `border-l-2 border-primary pl-6` |
| **Card title** | `text-xl text-foreground` |
| **Card text** | `max-w-md text-sm text-muted-foreground` |

---

### Section 09: How We Work / Process (existing, unchanged)

| Property | Value |
|---|---|
| **Section id** | `process` |
| **Layout** | `grid-cols-4`, `gap-8 sm:gap-10` |
| **Card** | `border-t-2 border-primary pt-6` |
| **Step number** | `font-mono text-sm text-muted-foreground` |
| **Title** | `text-2xl text-foreground` |
| **Text** | `text-sm text-muted-foreground` |

---

### Section 10: Tech Stack (existing, unchanged)

| Property | Value |
|---|---|
| **Section id** | `stack` |
| **Layout** | `grid-cols-2 lg:grid-cols-4`, `gap-8 sm:gap-10` |
| **Group heading** | `eyebrow text-sm text-primary` |
| **Item** | `border-b border-border py-2 font-mono text-sm text-muted-foreground hover:text-foreground` |

---

### Section 11: Security & Quality (NEW)

| Property | Value |
|---|---|
| **Section id** | `security` |
| **Section class** | `border-b border-border bg-card/20` |
| **Layout** | `lg:grid-cols-2` — left = text, right = checklist |
| **Eyebrow** | `text-sm text-primary` — `"BUILT FOR PRODUCTION"` |
| **Heading** | `text-4xl md:text-5xl`, two lines, second line `text-primary` |
| **Subtitle** | `max-w-md text-base text-muted-foreground` |
| **Checklist** | `grid-cols-2`, `gap-px border border-border bg-border` |
| **Check item** | `flex items-start gap-3 bg-background px-6 py-4 transition-colors hover:bg-card` |
| **Check mark** | `font-display text-lg text-primary` — `✓` |
| **Check text** | `text-sm text-foreground` |
| **CTA** | Same pattern as AI section CTA |

---

### Section 12: Industries (existing, unchanged)

| Property | Value |
|---|---|
| **Section class** | `border-y border-border` |
| **Heading** | `text-3xl md:text-4xl`, `span.text-primary` |
| **Pills** | `eyebrow border border-border px-4 py-1.5 text-sm text-muted-foreground hover:border-primary hover:text-primary` |

---

### Section 13: Pricing / Engagement (existing, unchanged)

| Property | Value |
|---|---|
| **Section id** | `pricing` |
| **Layout** | `grid-cols-3`, `gap-px bg-border` |
| **Featured card** | `bg-primary text-primary-foreground` |
| **Non-featured** | `bg-background` |
| **CTA pattern** | Border 2, hover fill reverse |

---

### Section 14: Testimonials / Client Voices (existing, unchanged)

| Property | Value |
|---|---|
| **Section id** | `clients` |
| **Layout** | `md:grid-cols-3`, `gap-px bg-border` |
| **Card** | `bg-background p-6 sm:p-10` |
| **Quote mark** | `font-display text-4xl leading-none text-primary` — `"` |
| **Name** | `eyebrow text-sm text-foreground` |
| **Role** | `font-mono text-xs text-muted-foreground` |

---

### Section 15: FAQ (existing, unchanged)

| Property | Value |
|---|---|
| **Section id** | `faq` |
| **Section class** | `border-y border-border bg-card/40` |
| **Max width** | `max-w-4xl` |
| **Accordion** | `border-t border-border`, expand/collapse with `+` rotation |
| **Question** | `text-lg md:text-xl text-foreground` |
| **Answer** | `max-w-2xl text-sm text-muted-foreground` |

---

### Section 16: Contact / Project Enquiry

| Property | Value |
|---|---|
| **Section id** | `contact` |
| **Layout** | `lg:grid-cols-2`, `gap-10 sm:gap-16` |
| **Left column** | Heading `text-4xl md:text-5xl`, subtitle, contact info (email, phone, hours) |
| **Right column** | `<ContactForm />` component |
| **Contact info** | `font-mono text-sm`, links `text-primary hover:underline` |

---

### Section 17: Final CTA

| Property | Value |
|---|---|
| **Section class** | `bg-primary` |
| **Layout** | Centered |
| **Heading** | `text-3xl md:text-4xl text-primary-foreground` |
| **CTA** | `border-2 border-primary-foreground px-8 py-3 text-base text-primary-foreground hover:bg-primary-foreground hover:text-primary` |

---

## Color Usage Map

| Element | Color |
|---|---|
| Body background | `--background` (oklch 0.13) |
| Text primary | `--foreground` (oklch 0.985) |
| Accent/labels | `--primary` (lime volt, oklch 0.88 0.21 122) |
| Card surface | `--card` (oklch 0.18) |
| Muted text | `--muted-foreground` (oklch 0.72) |
| Borders | `--border` (oklch 1 0 0 / 14%) |
| Hover states | `group-hover:text-primary`, `hover:bg-card` |
| CTA primary | `bg-primary text-primary-foreground` |
| CTA outline | `border-border text-foreground hover:border-primary hover:text-primary` |

---

## Animation & Motion Principles

1. **Hero glow** — `volt-glow` with `blur(30px)`, absolutely positioned, `pointer-events-none`
2. **Marquee** — `animate-[marquee_28s_linear_infinite]`, seamless loop
3. **Card hover** — `transition-colors hover:bg-card` (dark card → lighter card)
4. **Text hover** — `group-hover:text-primary` (text turns accent color)
5. **Image hover** — `group-hover:scale-105` with `duration-300` or `duration-500`
6. **Button hover** — `hover:-translate-y-0.5` (subtle lift)
7. **FAQ expand** — `rotate-45` on `+` symbol when open
8. **CTA hover** — `hover:bg-primary hover:text-primary-foreground` (invert fill)

---

## Spacing System

| Scale | Usage |
|---|---|
| `py-8` (2rem) | Section inner padding (small) |
| `py-12` (3rem) | Section inner padding (medium) |
| `py-16` (4rem) | Section inner padding (standard) |
| `py-24` (6rem) | Section inner padding (large, desktop) |
| `py-36` (9rem) | Hero section only |
| `mt-4` / `mt-6` / `mt-8` / `mt-10` / `mt-14` | Vertical rhythm between elements |
| `gap-8` / `gap-10` | Grid gap between columns |
| `gap-px` | Border-grid divider between cards |
| `space-y-16` | Vertical gap between stacked case studies |

---

## Responsive Breakpoints

| Breakpoint | Behavior |
|---|---|
| **sm:** (640px) | 2-column grids start, increased padding |
| **md:** (768px) | 3-4 column grids, larger headings |
| **lg:** (1024px) | Full grid layouts, hide mobile-only elements |
| **xl:** (1280px) | `max-w-6xl` container constraint |

---

## Typography Scale

| Level | Class | Size | Usage |
|---|---|---|---|
| Eyebrow | `.eyebrow` | ~10-12px uppercase | Labels, tags, section prefixes |
| H2 | `text-3xl` | 30px | Medium section headings |
| H2 | `text-4xl` | 36px | Primary section headings |
| H2 | `text-5xl` | 48px | Large section headings |
| H1 | `text-[clamp(2.5rem,6vw,4.5rem)]` | responsive | Hero headline |
| Body | `text-base` | 16px | Subtitles, descriptions |
| Small | `text-sm` | 14px | Card text, captions |
| Tiny | `text-xs` | 12px | Meta info, timestamps |
| Mono | `font-mono` | inherits | Metrics, code, tech tags |

---

## New Components Summary

| Component | File | Purpose |
|---|---|---|
| `TrustBar` | `src/components/site/TrustBar.tsx` | Client logo/name strip |
| `ProblemsWeSolve` | `src/components/site/ProblemsWeSolve.tsx` | Problem-statement cards |
| `AISolutions` | `src/components/site/AISolutions.tsx` | AI product categories |
| `SecurityQuality` | `src/components/site/SecurityQuality.tsx` | Security & quality checklist |
| `CaseStudies` | `src/components/site/CaseStudies.tsx` | Full case study cards with problem/solution/results |
| `clients.ts` | `src/lib/clients.ts` | Client data source |

---

## Sections NOT Added (and Why)

| Section | Reason |
|---|---|
| Team / People | No confirmed real team data available |
| Technology Partners / Certifications | No confirmed partnerships |
| Blog / Engineering Insights | Would need CMS or content pipeline |
| Careers | Would need real job listings |
| Project Estimator | Would need interactive logic beyond mailto |
| Before → After | Folded into CaseStudies section |
| Engineering Principles | Folded into Why DevToSoft section |

---

*Specification version: 1.0 — Generated for DevToSoft premium repositioning.*
