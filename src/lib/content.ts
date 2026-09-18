const STORAGE_KEY = "devtosoft_content_v1";

export type NavItem = { label: string; href: string };
export type Service = { n: string; title: string; body: string; tags: string[] };
export type Stat = { v: string; k: string };
export type Step = { k: string; v: string };
export type Testimonial = { q: string; n: string; r: string };
export type Faq = { q: string; a: string };
export type Plan = {
  name: string;
  price: string;
  unit: string;
  desc: string;
  features: string[];
  featured: boolean;
};
export type Problem = {
  q: string;
  s: string;
  icon: string;
};
export type WhyPoint = {
  t: string;
  b: string;
  icon: string;
};

export type SiteContent = {
  global: {
    siteName: string;
    logo: string;
    tagline: string;
    contactEmail: string;
    contactPhone: string;
    hours: string;
    address: string;
    copyright: string;
  };
  navbar: {
    links: NavItem[];
    ctaLabel: string;
  };
  hero: {
    eyebrow: string;
    headline: string[];
    accentLine: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    trustPoints: string[];
  };
  services: {
    title: string;
    subtitle: string;
    items: Service[];
  };
  stats: Stat[];
  trustBar: {
    label: string;
    clients: { name: string; sector: string }[];
  };
  problems: {
    title: string;
    accentLine: string;
    subtitle: string;
    items: Problem[];
  };
  ai: {
    eyebrow: string;
    title: string;
    accentLine: string;
    subtitle: string;
    cta: string;
    items: { t: string; d: string }[];
  };
  steps: {
    title: string;
    subtitle: string;
    items: Step[];
  };
  why: {
    eyebrow: string;
    title: string;
    items: WhyPoint[];
  };
  principles: {
    eyebrow: string;
    title: string;
    accentLine: string;
    subtitle: string;
    items: { n: string; t: string; d: string }[];
  };
  security: {
    eyebrow: string;
    title: string;
    accentLine: string;
    subtitle: string;
    cta: string;
    items: string[];
  };
  industries: {
    eyebrow: string;
    name: string;
    items: string[];
  };
  pricing: {
    title: string;
    subtitle: string;
    cta: string;
    plans: Plan[];
  };
  testimonials: {
    title: string;
    items: Testimonial[];
  };
  faq: {
    title: string;
    items: Faq[];
  };
  contact: {
    title: string;
    accentLine: string;
    subtitle: string;
    formDefaults: {
      budgets: string[];
      needs: string[];
    };
  };
  finalCta: {
    title: string;
    cta: string;
  };
};

const l = (label: string, href: string): NavItem => ({ label, href });

export const defaultContent: SiteContent = {
  global: {
    siteName: "DevToSoft",
    logo: "/logo.png",
    tagline: "Product engineering studio. Innovate, automate, elevate.",
    contactEmail: "hello@dev2soft.com",
    contactPhone: "+880 1744-546898",
    hours: "Sun–Thu, 10:00–19:00 (GMT+6)",
    address: "Dhaka, Bangladesh",
    copyright: "© DevToSoft | Innovate, Automate, Elevate",
  },
  navbar: {
    links: [
      l("Services", "#services"),
      l("AI", "#ai"),
      l("Work", "#work"),
      l("Why", "#why"),
      l("Process", "#process"),
      l("Stack", "#stack"),
      l("Security", "#security"),
      l("Pricing", "#pricing"),
      l("FAQ", "#faq"),
    ],
    ctaLabel: "Start a project",
  },
  hero: {
    eyebrow: "Innovate, Automate, Elevate",
    headline: ["WE BUILD THE", "SOFTWARE THAT", "RUNS YOUR BUSINESS."],
    accentLine: "RUNS YOUR BUSINESS.",
    subtitle:
      "DevToSoft is a product engineering studio. We design, build and maintain web, mobile and AI systems for companies that need to ship fast without breaking things.",
    primaryCta: "Book a call",
    secondaryCta: "See our work",
    trustPoints: ["NDA on request", "Fixed-price options", "Reply within 1 working day"],
  },
  services: {
    title: "SERVICES",
    subtitle: "Six ways we plug in. Pick one or combine them into a full product team.",
    items: [
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
    ],
  },
  stats: [
    { v: "120+", k: "Projects shipped" },
    { v: "50+", k: "Engineers & specialists" },
    { v: "14", k: "Countries served" },
    { v: "98%", k: "Client retention" },
    { v: "99.9%", k: "Production uptime" },
  ],
  trustBar: {
    label: "TRUSTED BY TEAMS BUILDING WHAT'S NEXT",
    clients: [
      { name: "NorthPay", sector: "Fintech" },
      { name: "Lumo", sector: "Retail" },
      { name: "FleetIQ", sector: "Logistics" },
      { name: "MediCore", sector: "Health" },
      { name: "LearnLoop", sector: "Education" },
      { name: "VantageAI", sector: "AI" },
      { name: "BuildSpace", sector: "SaaS" },
      { name: "NovaPay", sector: "Fintech" },
    ],
  },
  problems: {
    title: "YOU HAVE A PRODUCT PROBLEM.",
    accentLine: "WE HAVE A TEAM FOR IT.",
    subtitle: "Every client arrives with a different friction point. Here is how we attack each one.",
    items: [
      { q: "NEED TO LAUNCH?", s: "Turn your idea into a production-ready MVP in weeks, not months.", icon: "🚀" },
      { q: "NEED TO SCALE?", s: "Refactor and scale your existing platform without a full rewrite.", icon: "📈" },
      { q: "NEED AI?", s: "Add practical AI automation — assistants, RAG, document intelligence.", icon: "🧠" },
      { q: "NEED TO SHIP FASTER?", s: "Extend your engineering team with senior specialists who match your pace.", icon: "⚡" },
      { q: "LEGACY SYSTEMS?", s: "Modernize without rewriting everything. Incrementally, with zero downtime.", icon: "🔧" },
    ],
  },
  ai: {
    eyebrow: "AI AUTOMATION",
    title: "AI THAT DOES MORE THAN",
    accentLine: "CHAT.",
    subtitle:
      "We build AI products that work inside your workflow, not beside it. Every system ships with guardrails, audit trails and your data staying where it belongs.",
    cta: "Explore AI solutions",
    items: [
      { t: "AI ASSISTANTS", d: "Internal knowledge and customer support agents that understand your product." },
      { t: "DOCUMENT INTELLIGENCE", d: "OCR, extraction and automated processing for invoices, forms and reports." },
      { t: "RAG SYSTEMS", d: "Search and answer over private company data with sourced citations." },
      { t: "WORKFLOW AGENTS", d: "Automate repetitive business operations end to end." },
      { t: "AI INTEGRATIONS", d: "Connect AI capabilities to your existing software and APIs." },
    ],
  },
  steps: {
    title: "HOW WE WORK",
    subtitle: "A proven cycle we repeat on every engagement.",
    items: [
      { k: "DISCOVER", v: "Scope, audit and a fixed roadmap in the first two weeks." },
      { k: "DESIGN", v: "Clickable prototypes and a design system before a line of product code." },
      { k: "BUILD", v: "Weekly shipping cycles with a demo environment you can click." },
      { k: "SCALE", v: "Monitoring, hardening and support after launch." },
    ],
  },
  why: {
    eyebrow: "WHY DevToSoft",
    title: "WHY WE EXIST.",
    items: [
      {
        t: "SENIOR ONLY",
        b: "No juniors billed as experts. Every person on your project has shipped production systems.",
        icon: "✓",
      },
      {
        t: "FIXED CYCLES",
        b: "Two-week cycles with a demo at the end. You always know what you paid for.",
        icon: "⏱",
      },
      {
        t: "OWNERSHIP",
        b: "Your repo, your cloud, your data. We leave documentation, not dependency.",
        icon: "🔒",
      },
      {
        t: "TIMEZONE OVERLAP",
        b: "At least four hours of daily overlap with your team, wherever you are.",
        icon: "🌍",
      },
    ],
  },
  principles: {
    eyebrow: "HOW WE BUILD",
    title: "ENGINEERING",
    accentLine: "PRINCIPLES",
    subtitle: "Five rules that guide everything we ship.",
    items: [
      { n: "01", t: "UNDERSTAND BEFORE BUILDING", d: "We investigate the problem before writing a single line of code." },
      { n: "02", t: "DESIGN FOR PRODUCTION", d: "Architecture considers scale, security, and maintenance from day one." },
      { n: "03", t: "SHIP CONTINUOUSLY", d: "Small releases instead of one giant launch. Demo every two weeks." },
      { n: "04", t: "MEASURE WHAT MATTERS", d: "Performance and business metrics guide every iteration." },
      { n: "05", t: "LEAVE YOU INDEPENDENT", d: "Documentation, source code, and infrastructure stay yours." },
    ],
  },
  security: {
    eyebrow: "BUILT FOR PRODUCTION",
    title: "SECURITY AND QUALITY",
    accentLine: "ARE NOT AFTERTHOUGHTS.",
    subtitle:
      "Every product we ship follows a security-first pipeline — from day one architecture to continuous monitoring after launch.",
    cta: "See how we approach security",
    items: [
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
    ],
  },
  industries: {
    eyebrow: "INDUSTRIES WE SERVE",
    name: "BUILT FOR EVERYWHERE.",
    items: ["Fintech", "Logistics", "Retail", "Healthcare", "Education", "Real estate", "Manufacturing", "Media"],
  },
  pricing: {
    title: "ENGAGEMENT",
    subtitle: "Pick how you want to work with us. No lock-in, cancel between cycles.",
    cta: "Get started",
    plans: [
      {
        name: "SPRINT",
        price: "$2,900",
        unit: "/ 2 weeks",
        desc: "A focused build for one clear outcome.",
        features: ["1 senior engineer", "Weekly demo", "Fixed scope", "Source handover"],
        featured: false,
      },
      {
        name: "PRODUCT",
        price: "$7,500",
        unit: "/ month",
        desc: "A full squad shipping your roadmap.",
        features: [
          "2–3 engineers + designer",
          "Discovery & roadmap",
          "CI/CD + monitoring",
          "Slack channel, same-day replies",
          "Unlimited revisions in cycle",
        ],
        featured: true,
      },
      {
        name: "RETAINER",
        price: "Custom",
        unit: "",
        desc: "Long-term ownership, support and scaling.",
        features: ["SLA support", "Security hardening", "Cost optimisation", "Dedicated tech lead"],
        featured: false,
      },
    ],
  },
  testimonials: {
    title: "CLIENT VOICES",
    items: [
      {
        q: "They replaced a six-month internal backlog in seven weeks. The demo cadence kept everyone honest.",
        n: "Rakib Hasan",
        r: "CTO, NorthPay",
      },
      {
        q: "The AI catalog assistant paid for itself in the first quarter. Clean code, clean handover.",
        n: "Marta Silva",
        r: "Head of Product, Lumo Retail",
      },
      {
        q: "Best engineering partner we've had. They push back when an idea is wrong, and that's rare.",
        n: "Daniel Okoye",
        r: "Founder, FleetIQ",
      },
    ],
  },
  faq: {
    title: "FAQ",
    items: [
      { q: "How fast can you start?", a: "Usually within one week. Discovery can begin in 48 hours for urgent projects." },
      { q: "Do we own the code?", a: "Yes. Everything lives in your repository from day one, under your license." },
      { q: "Can you work with our existing team?", a: "Often we do. We plug into your board, your reviews and your release process." },
      { q: "What about maintenance after launch?", a: "We offer a support retainer with monitoring, patching and an agreed response SLA." },
      { q: "How do you handle NDAs and security?", a: "NDA before the first call if you want. We follow least-privilege access and audited secrets." },
      { q: "How much does a typical project cost?", a: "Sprints start at $2,900, product squads from $7,500/month. Retainers are scoped to your needs." },
      { q: "Who owns the source code?", a: "You do, from day one. Everything lives in your repository under your license." },
    ],
  },
  contact: {
    title: "GOT A PROJECT?",
    accentLine: ".",
    subtitle: "Tell us what you want to build. We reply within one working day with a scope and a timeline.",
    formDefaults: {
      budgets: ["< $5k", "$5k – $20k", "$20k – $50k", "$50k+"],
      needs: ["Web platform", "Mobile app", "AI automation", "Cloud & DevOps", "Not sure yet"],
    },
  },
  finalCta: {
    title: "LET'S BUILD SOMETHING THAT LASTS.",
    cta: "hello@dev2soft.com",
  },
};

export function loadContent(): SiteContent {
  if (typeof window === "undefined") return defaultContent;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultContent;
    const parsed = JSON.parse(raw) as SiteContent;
    return { ...defaultContent, ...parsed };
  } catch {
    return defaultContent;
  }
}

export function saveContent(content: SiteContent) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
}

export function resetContent() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
}