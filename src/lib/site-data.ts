/**
 * Central content source for the Painstaking Web Development site.
 * Factual content (contact details, project links, prices) is preserved
 * from the existing site. Placeholder values are explicitly marked.
 */

export const CONTACT = {
  whatsappNumberDisplay: "+234 810 734 8296",
  whatsappUrl: "https://wa.me/2348107348296",
  email: "iagboola10@gmail.com",
  emailUrl: "mailto:iagboola10@gmail.com",
  instagramUrl: "https://www.instagram.com/painstaking.web?igsi=ZnN3d3BlYXc2YmN2",
};

export type NavItem = { to: string; label: string };

export const NAV_ITEMS: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/web-design-development", label: "Web Design & Development" },
  { to: "/e-commerce", label: "E-Commerce" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/pricing", label: "Pricing" },
  { to: "/process", label: "Our Process" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

/** Compact set used in the desktop bar; the rest live in the menu. */
export const PRIMARY_NAV: NavItem[] = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/pricing", label: "Pricing" },
  { to: "/process", label: "Process" },
  { to: "/faq", label: "FAQ" },
];

export type Service = {
  slug: string;
  to: string;
  title: string;
  summary: string;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "web-design-development",
    to: "/web-design-development",
    title: "Web Design & Development",
    summary:
      "Professional business sites structured to turn visitors into leads and build long-term trust.",
    points: [
      "Custom UI/UX design",
      "Mobile-responsive build",
      "Contact forms & maps",
      "Speed optimisation",
    ],
  },
  {
    slug: "e-commerce",
    to: "/e-commerce",
    title: "E-Commerce Stores",
    summary:
      "Fast storefront experiences tailored for smooth product browsing, cart flows, and checkouts.",
    points: [
      "Product catalogue setup",
      "Cart & checkout flows",
      "Payment integration support",
      "Order-ready structure",
    ],
  },
  {
    slug: "landing-pages",
    to: "/services",
    title: "Landing Pages",
    summary:
      "High-converting single-page sites dedicated to specific products, campaigns, or offer launches.",
    points: [
      "Single-goal page structure",
      "Campaign-ready sections",
      "WhatsApp & social integration",
      "Conversion-focused copy layout",
    ],
  },
  {
    slug: "seo-performance",
    to: "/services",
    title: "SEO Foundations & Performance",
    summary:
      "Technical SEO basics, clean metadata and performance tuning so your site is findable and fast.",
    points: [
      "Titles, descriptions & Open Graph",
      "Semantic, accessible markup",
      "Core performance tuning",
      "Analytics setup assistance",
    ],
  },
  {
    slug: "maintenance",
    to: "/services",
    title: "Maintenance & Support",
    summary:
      "Ongoing updates, content changes and technical support after your site goes live.",
    points: [
      "Content & section updates",
      "Fixes and improvements",
      "Hosting & domain assistance",
      "Direct WhatsApp support line",
    ],
  },
  {
    slug: "web-apps",
    to: "/services",
    title: "Custom Web Applications",
    summary:
      "Tailored web applications and advanced interactions when a standard website is not enough.",
    points: [
      "Bespoke feature builds",
      "Advanced animations",
      "Integrations with your tools",
      "Priority support",
    ],
  },
];

export type Project = {
  title: string;
  category: "Restaurant" | "E-Commerce" | "Real Estate";
  body: string;
  href: string;
  highlights: string[];
};

export const PROJECTS: Project[] = [
  {
    title: "Ember & Olive",
    category: "Restaurant",
    body: "Modern restaurant website with reservation capabilities.",
    href: "https://painstakinggg.github.io/ember-olive-restaurant/",
    highlights: ["Reservations", "Menu layout", "Mobile-first"],
  },
  {
    title: "Urban Thread",
    category: "E-Commerce",
    body: "Clean e-commerce fashion storefront interface.",
    href: "https://painstakinggg.github.io/urban-thread-store/",
    highlights: ["Product grid", "Cart flow", "Storefront UI"],
  },
  {
    title: "Havenstone Properties",
    category: "Real Estate",
    body: "Real estate showcase platform with property filters.",
    href: "https://painstakinggg.github.io/havenstone-properties/",
    highlights: ["Property filters", "Listing pages", "Search UI"],
  },
];

export const PROJECT_CATEGORIES = [
  "All",
  ...Array.from(new Set(PROJECTS.map((p) => p.category))),
] as const;

export type Plan = {
  name: string;
  price: string;
  priceNote?: string;
  tagline: string;
  featured: boolean;
  features: string[];
  delivery: string;
};

export const PLANS: Plan[] = [
  {
    name: "Starter",
    price: "₦75,000",
    tagline: "A clean, credible presence for a small business getting online.",
    featured: false,
    delivery: "Typical delivery: 1–2 weeks",
    features: [
      "Up to 4 pages",
      "Mobile responsive design",
      "WhatsApp integration",
      "Basic SEO setup",
      "Contact form",
      "1 round of revisions",
      "Hosting & domain guidance",
    ],
  },
  {
    name: "Professional",
    price: "₦150,000",
    tagline: "The most popular option for growing businesses that need more depth.",
    featured: true,
    delivery: "Typical delivery: 2–3 weeks",
    features: [
      "Up to 8 pages",
      "Custom UI/UX design",
      "Contact form & maps",
      "Speed optimisation",
      "WhatsApp & social integration",
      "SEO foundations & analytics setup",
      "2 rounds of revisions",
      "Hosting & domain assistance",
    ],
  },
  {
    name: "Premium",
    price: "₦250,000",
    tagline: "For custom applications, stores and richer interactive experiences.",
    featured: false,
    delivery: "Typical delivery: 3–5 weeks",
    features: [
      "Custom web application",
      "E-commerce integration",
      "Advanced animations",
      "Full SEO foundations & analytics",
      "3 rounds of revisions",
      "Hosting & domain assistance",
      "Priority support",
    ],
  },
  {
    name: "Custom / Enterprise",
    price: "Request a quote",
    priceNote: "Scoped after a discovery call",
    tagline: "Multi-phase builds, integrations and ongoing maintenance retainers.",
    featured: false,
    delivery: "Timeline agreed during discovery",
    features: [
      "Unlimited pages & modules",
      "Bespoke integrations",
      "Ongoing maintenance & support plan",
      "Content & training handover",
      "Revisions agreed in scope",
      "Dedicated project communication",
    ],
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  body: string;
  deliverables: string[];
};

export const PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    body: "We start with your business, your customers and the outcome the site needs to produce.",
    deliverables: ["Goals & audience notes", "Scope outline", "Reference review"],
  },
  {
    step: "02",
    title: "Planning",
    body: "Pages, structure and content requirements are mapped before any design work begins.",
    deliverables: ["Sitemap", "Page-by-page structure", "Content checklist"],
  },
  {
    step: "03",
    title: "Design",
    body: "Interfaces are designed around clarity and conversion, tailored to your brand.",
    deliverables: ["Key page designs", "Responsive layouts", "Design review round"],
  },
  {
    step: "04",
    title: "Development",
    body: "Clean, semantic, fast front-end build with the integrations your business relies on.",
    deliverables: ["Responsive build", "Forms & integrations", "Staging preview"],
  },
  {
    step: "05",
    title: "Testing",
    body: "Every page, link, form and layout is checked on mobile and desktop before launch.",
    deliverables: ["Cross-device checks", "Link & form testing", "Performance pass"],
  },
  {
    step: "06",
    title: "Launch",
    body: "We deploy carefully, connect your domain and confirm everything works in production.",
    deliverables: ["Domain & hosting setup", "Analytics live", "Launch checklist"],
  },
  {
    step: "07",
    title: "Support",
    body: "After launch we stay reachable for updates, improvements and technical questions.",
    deliverables: ["Update requests", "Fixes & improvements", "Direct WhatsApp line"],
  },
];

export type Faq = { question: string; answer: string; category: string };

export const FAQS: Faq[] = [
  {
    category: "Getting started",
    question: "How do I start a project with Painstaking Web Development?",
    answer:
      "Send your project details through the enquiry form on the Contact page, or message us directly on WhatsApp. We reply with next steps and any questions needed to scope the work.",
  },
  {
    category: "Getting started",
    question: "What do you need from me before work begins?",
    answer:
      "Your business details, the pages you want, any logo or brand assets you already have, and the content (text and images) you would like to use. If content is not ready, we will structure the pages and tell you exactly what to supply.",
  },
  {
    category: "Timelines",
    question: "How long does a website take?",
    answer:
      "Timelines depend on scope. Starter sites are typically delivered in 1–2 weeks, Professional in 2–3 weeks and Premium builds in 3–5 weeks, provided content and feedback arrive on schedule.",
  },
  {
    category: "Pricing",
    question: "What do your packages cost?",
    answer:
      "Starter is ₦75,000, Professional is ₦150,000 and Premium is ₦250,000. Custom and enterprise-style work is quoted after a discovery conversation.",
  },
  {
    category: "Pricing",
    question: "Are hosting and domain costs included?",
    answer:
      "Hosting and domain fees are charged by third-party providers. We assist with selecting, configuring and connecting them so you keep ownership of your accounts.",
  },
  {
    category: "Scope",
    question: "Will my site work on phones?",
    answer:
      "Yes. Every build is mobile-responsive and tested on mobile and desktop layouts before launch.",
  },
  {
    category: "Scope",
    question: "Can you build an online store?",
    answer:
      "Yes. We build storefront experiences with product browsing, cart flows and checkout structure, and can support payment integration.",
  },
  {
    category: "Scope",
    question: "Do you handle SEO?",
    answer:
      "We implement SEO foundations: clean semantic markup, page titles and descriptions, social sharing metadata, sensible structure and performance tuning. Ongoing content marketing is separate.",
  },
  {
    category: "After launch",
    question: "What happens after the site goes live?",
    answer:
      "Your package includes its stated revision rounds, and we remain available for updates and technical support. Ongoing maintenance can be arranged as part of a custom plan.",
  },
  {
    category: "After launch",
    question: "Can you update or redesign an existing website?",
    answer:
      "Yes. Share the current site and what you want improved, and we will advise whether an upgrade or a rebuild is the better route.",
  },
];

export const WHY_US = [
  {
    title: "Detail as a standard",
    body: "Painstaking is the name for a reason: spacing, typography, links and layouts are checked line by line.",
  },
  {
    title: "Built for outcomes",
    body: "Every page is structured around a goal — enquiries, sales or authority — not decoration.",
  },
  {
    title: "Fast, responsive, secure",
    body: "Clean front-end code, tuned performance and layouts that hold up on any screen size.",
  },
  {
    title: "Direct communication",
    body: "You speak to the person building your site, with a direct WhatsApp line throughout.",
  },
];
