export type Project = {
  slug: string;
  tag: string;
  title: string;
  metric: string;
  image: string;
  client: string;
  year: string;
  duration: string;
  team: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  stack: string[];
  services: string[];
  testimonial?: { quote: string; name: string; role: string };
};

export const projects: Project[] = [
  {
    slug: "payment-reconciliation-engine",
    tag: "FINTECH",
    title: "Payment reconciliation engine",
    metric: "-72% manual hours",
    image: "/projects/payment-reconciliation-engine.svg",
    client: "NorthPay",
    year: "2024",
    duration: "7 weeks",
    team: "2 engineers + 1 designer",
    summary:
      "An automated reconciliation platform that matches thousands of daily transactions across payment providers, banks and ledgers — flagging only the exceptions for human review.",
    challenge:
      "NorthPay's finance team spent 30+ hours every week manually matching settlements from four payment providers against bank statements and internal ledgers. Mismatches were caught late, reconciliation reports were built by hand, and month-end close took five days.",
    solution:
      "We built a streaming reconciliation engine that ingests provider settlement files and bank feeds in real time, normalises them into a single ledger format, and runs deterministic + fuzzy matching rules. A dashboard shows unmatched transactions with context so operators can resolve them in a few clicks. Month-end reports are now generated automatically.",
    results: [
      "Manual reconciliation hours cut by 72% in the first month",
      "Month-end close reduced from 5 days to under 8 hours",
      "Exception queue now handles < 2% of total transaction volume",
      "Zero data migration downtime — cutover ran in parallel for 2 weeks",
    ],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS SQS"],
    services: ["Web Platform", "Cloud & DevOps"],
    testimonial: {
      quote:
        "They replaced a six-month internal backlog in seven weeks. The demo cadence kept everyone honest.",
      name: "Rakib Hasan",
      role: "CTO, NorthPay",
    },
  },
  {
    slug: "fleet-tracking-dashboard",
    tag: "LOGISTICS",
    title: "Fleet tracking dashboard",
    metric: "4.1k daily users",
    image: "/projects/fleet-tracking-dashboard.svg",
    client: "FleetIQ",
    year: "2024",
    duration: "12 weeks",
    team: "3 engineers + 1 designer",
    summary:
      "A real-time fleet operations dashboard tracking 1,800+ vehicles across 14 cities, with live geofencing, route replay and driver behaviour scoring.",
    challenge:
      "FleetIQ had GPS data flowing from hardware units but no way to make it actionable. Dispatchers used a legacy desktop tool that crashed under load, alerts were buried in email, and there was no historical view to investigate incidents or coach drivers.",
    solution:
      "We designed and built a web-based operations centre with a live map, geofence editor, and an event timeline per vehicle. A rules engine triggers alerts for speeding, idle time and geofence breaches, routed to Slack and the dispatcher view. Route replay lets managers scrub through any trip to coach drivers or investigate complaints.",
    results: [
      "4,100+ daily active users across dispatch and operations teams",
      "Average alert response time dropped from 11 minutes to 90 seconds",
      "Driver coaching sessions backed by replay data cut speeding events by 38%",
      "System handles 12k events/min with sub-second map updates",
    ],
    stack: ["React", "TypeScript", "Go", "PostgreSQL", "Mapbox", "Kafka", "Kubernetes"],
    services: ["Web Platform", "Cloud & DevOps", "UI/UX Design"],
    testimonial: {
      quote:
        "Best engineering partner we've had. They push back when an idea is wrong — that's rare.",
      name: "Daniel Okoye",
      role: "Founder, FleetIQ",
    },
  },
  {
    slug: "ai-product-catalog-assistant",
    tag: "RETAIL",
    title: "AI product catalog assistant",
    metric: "+31% conversion",
    image: "/projects/ai-product-catalog-assistant.svg",
    client: "Lumo Retail",
    year: "2025",
    duration: "9 weeks",
    team: "2 engineers + 1 ML specialist",
    summary:
      "A conversational shopping assistant that helps customers find products across a 240k-item catalog using natural language, with RAG over product specs, reviews and inventory.",
    challenge:
      "Lumo's search relied on keyword matching, which failed when shoppers described what they wanted in their own words. Bounce rates on search were high, and merchandisers spent hours curating collections that went stale within days.",
    solution:
      "We built a RAG-powered assistant that understands intent, filters by attributes shoppers care about (fit, material, price, sustainability), and cites the product data behind every recommendation. A merchandiser console lets the team tune the assistant's tone and pin seasonal priorities without touching code.",
    results: [
      "+31% conversion for shoppers who used the assistant",
      "Search-to-purchase time cut from 9 minutes to under 3",
      "Merchandiser collection work reduced by ~60% via auto-generated shortlists",
      "Assistant answers cite sources, cutting 'is this accurate?' support tickets",
    ],
    stack: ["React", "TypeScript", "Python", "OpenAI", "LangChain", "Pinecone", "FastAPI"],
    services: ["AI Automation", "Web Platform"],
    testimonial: {
      quote:
        "The AI catalog assistant paid for itself in the first quarter. Clean code, clean handover.",
      name: "Marta Silva",
      role: "Head of Product, Lumo Retail",
    },
  },
  {
    slug: "clinic-booking-records-app",
    tag: "HEALTH",
    title: "Clinic booking & records app",
    metric: "22k appointments/mo",
    image: "/projects/clinic-booking-records-app.svg",
    client: "MediCore",
    year: "2023",
    duration: "16 weeks",
    team: "3 engineers + 1 designer + 1 QA",
    summary:
      "A cross-platform patient app for booking appointments, accessing records and receiving lab results — paired with a clinic-side management portal for scheduling and charting.",
    challenge:
      "MediCore's 40 clinics ran on paper diaries and a fragmented desktop scheduler. Patients booked by phone, waited on hold, and had no way to see results online. Clinics had no shared view of patient history across locations.",
    solution:
      "We shipped a React Native patient app with offline-first appointment booking, secure lab result delivery, and a unified record view. On the clinic side, a web portal handles scheduling, charting and multi-location patient lookup. A role-based access model keeps PHI safe and auditable.",
    results: [
      "22,000+ appointments booked per month through the app",
      "Phone booking load reduced by 54% across pilot clinics",
      "Patient record lookup now cross-location in < 2 seconds",
      "HIPAA-aligned access audit log passed external review on first pass",
    ],
    stack: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS", "Docker"],
    services: ["Mobile App", "Web Platform", "Cloud & DevOps"],
  },
  {
    slug: "live-class-platform",
    tag: "EDUCATION",
    title: "Live class platform",
    metric: "99.95% uptime",
    image: "/projects/live-class-platform.svg",
    client: "LearnLoop",
    year: "2024",
    duration: "14 weeks",
    team: "4 engineers + 1 designer",
    summary:
      "A low-latency live classroom platform with interactive whiteboards, breakout rooms, attendance analytics and a teacher dashboard — built to scale to 50k concurrent learners.",
    challenge:
      "LearnLoop's existing video provider was expensive and dropped frames at scale. Teachers had no tools for engagement tracking, breakout rooms were manual, and attendance reporting was a spreadsheet exercise.",
    solution:
      "We built a custom classroom layer on top of WebRTC with a collaborative whiteboard, real-time polls, and auto-assigned breakout rooms. A teacher dashboard shows engagement signals (camera on, poll responses, raise hand) per student. Attendance and engagement export to the school's LMS.",
    results: [
      "99.95% uptime across the academic year, including exam season peaks",
      "50k concurrent learners supported with < 400ms median latency",
      "Teacher prep time per class down ~30% via reusable room templates",
      "Infra cost per concurrent learner cut by 41% vs the previous provider",
    ],
    stack: ["React", "TypeScript", "Go", "WebRTC", "Redis", "PostgreSQL", "Kubernetes", "AWS"],
    services: ["Web Platform", "Cloud & DevOps", "UI/UX Design"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
