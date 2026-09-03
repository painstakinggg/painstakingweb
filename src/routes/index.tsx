import { createFileRoute } from "@tanstack/react-router";
import { Home, ShoppingBag, Zap, Check } from "lucide-react";

import { SiteHeader } from "@/components/site/SiteHeader";
import { ContactForm } from "@/components/site/ContactForm";

const TITLE = "Painstaking Web Development — Modern Websites Built for Business";
const DESCRIPTION =
  "We create clean, high-converting, mobile-responsive websites designed to establish authority and drive sales for your business.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SERVICES = [
  {
    icon: Home,
    title: "Business Websites",
    body: "Professional business sites structured to turn visitors into leads and build long-term trust.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Stores",
    body: "Fast storefront experiences tailored for smooth product browsing, cart flows, and checkouts.",
  },
  {
    icon: Zap,
    title: "Landing Pages",
    body: "High-converting single-page sites dedicated to specific products, campaigns, or offer launches.",
  },
];

const PROJECTS = [
  {
    preview: "Ember & Olive Preview",
    title: "Ember & Olive",
    body: "Modern restaurant website with reservation capabilities.",
    href: "https://painstakinggg.github.io/ember-olive-restaurant/",
  },
  {
    preview: "Urban Thread Preview",
    title: "Urban Thread",
    body: "Clean e-commerce fashion storefront interface.",
    href: "https://painstakinggg.github.io/urban-thread-store/",
  },
  {
    preview: "Havenstone Preview",
    title: "Havenstone Properties",
    body: "Real estate showcase platform with property filters.",
    href: "https://painstakinggg.github.io/havenstone-properties/",
  },
];

const PLANS = [
  {
    name: "Starter",
    price: "₦75,000",
    featured: false,
    features: [
      "Up to 4 Pages",
      "Mobile Responsive",
      "WhatsApp Integration",
      "Basic SEO Setup",
    ],
  },
  {
    name: "Business",
    price: "₦150,000",
    featured: true,
    features: [
      "Up to 8 Pages",
      "Custom UI/UX Design",
      "Contact Form & Maps",
      "Speed Optimization",
    ],
  },
  {
    name: "Professional",
    price: "₦250,000",
    featured: false,
    features: [
      "Custom Web Application",
      "E-Commerce Integration",
      "Advanced Animations",
      "Priority Support",
    ],
  },
];

const btnPrimary =
  "inline-flex items-center justify-center rounded-md bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-primary-hover";
const btnSecondary =
  "inline-flex items-center justify-center rounded-md border border-border px-7 py-3.5 font-semibold transition-colors hover:border-primary";

function Index() {
  return (
    <>
      <SiteHeader />

      <main className="pt-20">
        {/* Hero */}
        <section id="home" className="site-section">
          <div className="grid items-center gap-12 md:min-h-[80vh] md:grid-cols-2">
            <div>
              <span className="section-tag">Web Development Agency</span>
              <h1 className="mb-5 text-4xl leading-[1.15] font-bold text-heading sm:text-5xl">
                Modern websites.
                <br />
                <span className="text-primary">Built for business.</span>
              </h1>
              <p className="mb-8 text-lg text-muted-foreground">{DESCRIPTION}</p>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className={btnPrimary}>
                  View Our Work
                </a>
                <a href="#contact" className={btnSecondary}>
                  Start a Project
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-mockup">
              <div className="flex items-center gap-4 border-b border-border bg-surface px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-dot-red" />
                  <span className="size-2.5 rounded-full bg-dot-yellow" />
                  <span className="size-2.5 rounded-full bg-dot-green" />
                </div>
                <div className="w-full truncate rounded bg-background px-3 py-1 text-xs text-muted-foreground">
                  https://yourbusiness.com
                </div>
              </div>
              <div className="overflow-x-auto p-6 font-mono text-xs text-code sm:text-sm">
                <p>{"<!-- Modern Architecture -->"}</p>
                <p>{'<section class="growth">'}</p>
                <p>&nbsp;&nbsp;{"<h1>Engineered for Results</h1>"}</p>
                <p>&nbsp;&nbsp;{"<p>Fast, responsive, secure.</p>"}</p>
                <p>{"</section>"}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="site-section">
          <span className="section-tag">What We Do</span>
          <h2 className="mb-4 text-3xl font-bold text-heading sm:text-4xl">
            Websites designed around <span className="text-primary">your goals.</span>
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="rounded-lg border border-border bg-card p-7 transition-[transform,border-color] duration-200 hover:-translate-y-1 hover:border-primary"
              >
                <Icon className="mb-4 size-8 text-primary" strokeWidth={2} />
                <h3 className="mb-2 text-lg font-semibold text-heading">{title}</h3>
                <p className="text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="site-section">
          <span className="section-tag">Selected Work</span>
          <h2 className="mb-4 text-3xl font-bold text-heading sm:text-4xl">
            Projects we've <span className="text-primary">built.</span>
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-lg border border-border bg-card"
              >
                <div className="flex h-45 items-center justify-center border-b border-border bg-surface text-sm text-muted-foreground">
                  {project.preview}
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-heading">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">{project.body}</p>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm text-primary hover:underline"
                  >
                    Visit Site &rarr;
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="site-section">
          <span className="section-tag">About Us</span>
          <h2 className="mb-4 text-3xl font-bold text-heading sm:text-4xl">
            A web development studio built on <span className="text-primary">detail.</span>
          </h2>
          <p className="max-w-3xl text-lg text-muted-foreground">
            Painstaking Web Development is a web development agency creating clean,
            high-converting, mobile-responsive websites. Every project is structured
            around your goals — establishing authority, driving sales, and giving your
            business a fast, responsive and secure online presence.
          </p>
        </section>

        {/* Pricing */}
        <section id="pricing" className="site-section">
          <span className="section-tag">Transparent Pricing</span>
          <h2 className="mb-4 text-3xl font-bold text-heading sm:text-4xl">
            Fair plans for <span className="text-primary">growing businesses.</span>
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-lg border bg-card p-8 ${
                  plan.featured ? "border-primary" : "border-border"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 right-5 rounded bg-primary px-2 py-1 text-[0.7rem] font-bold text-primary-foreground">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="text-lg font-semibold text-heading">{plan.name}</h3>
                <div className="my-4 text-4xl font-extrabold text-heading">
                  {plan.price}
                </div>
                <ul className="mb-8 text-[0.95rem] text-muted-foreground">
                  {plan.features.map((feature) => (
                    <li key={feature} className="mb-2 flex items-center gap-2">
                      <Check className="size-4 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`${plan.featured ? btnPrimary : btnSecondary} w-full`}
                >
                  Select Plan
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="site-section">
          <span className="section-tag">Let's Talk</span>
          <h2 className="mb-4 text-3xl font-bold text-heading sm:text-4xl">
            Ready to build your <span className="text-primary">online presence?</span>
          </h2>
          <div className="mt-8 grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-muted-foreground">
                Have a project in mind? Fill out the form or reach out directly to start
                discussing your project scope and timelines.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/2348107348296"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp with Painstaking Web Development"
                  className={btnPrimary}
                >
                  Chat on WhatsApp
                </a>
                <a
                  href="mailto:iagboola10@gmail.com"
                  aria-label="Send an email to Painstaking Web Development"
                  className={btnSecondary}
                >
                  Send Email
                </a>
              </div>
              <div className="mt-6 space-y-1 text-sm text-muted-foreground">
                <p>
                  <strong className="text-heading">WhatsApp:</strong>{" "}
                  <a
                    href="https://wa.me/2348107348296"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    +234 810 734 8296
                  </a>
                </p>
                <p>
                  <strong className="text-heading">Email:</strong>{" "}
                  <a
                    href="mailto:iagboola10@gmail.com"
                    className="text-primary hover:underline"
                  >
                    iagboola10@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-6 py-8 text-center text-sm text-muted-foreground">
        <p>&copy; 2026 Painstaking Web Development. All rights reserved.</p>
      </footer>
    </>
  );
}
