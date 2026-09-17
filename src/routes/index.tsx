import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Gauge,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { SiteSearch } from "@/components/site/SiteSearch";
import { CtaBand } from "@/components/site/CtaBand";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CREATIVE_CAPABILITIES,
  FAQS,
  GROWTH_AREAS,
  PLANS,
  PROCESS,
  PROJECTS,
  SERVICES,
  WHY_US,
} from "@/lib/site-data";
import { btnPrimary, btnSecondary, cardClass } from "@/lib/ui-classes";
import { pageMeta } from "@/lib/seo";

const TITLE = "Painstaking Web Development — Premium Websites Built for Business";
const DESCRIPTION =
  "A digital studio building clean, high-converting, mobile-responsive websites and online stores — plus creative and marketing support that strengthens your wider digital presence.";

export const Route = createFileRoute("/")({
  head: () => pageMeta(TITLE, DESCRIPTION),
  component: Index,
});

const TRUST = [
  {
    icon: Smartphone,
    title: "Mobile-first, always",
    body: "Every layout is designed and tested for phones before desktop.",
  },
  {
    icon: Gauge,
    title: "Performance tuned",
    body: "Lean front-end code, optimised assets and fast first paint.",
  },
  {
    icon: ShieldCheck,
    title: "Checked line by line",
    body: "Links, forms and layouts are verified before anything ships.",
  },
  {
    icon: Sparkles,
    title: "Design with intent",
    body: "Custom interfaces built around your brand, not a template.",
  },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="hero-glow" aria-hidden="true" />
        <div className="site-section relative grid items-center gap-12 pt-14 md:min-h-[78vh] md:grid-cols-2">
          <div>
            <span className="section-tag animate-fade-up">
              Web Development & Digital Growth Studio
            </span>
            <h1 className="animate-fade-up mb-5 text-4xl leading-[1.12] font-bold text-heading sm:text-5xl lg:text-6xl">
              Modern websites.{" "}
              <br />
              <span className="text-primary">Stronger digital presence.</span>
            </h1>
            <p className="animate-fade-up-slow mb-8 max-w-xl text-lg text-muted-foreground">
              {DESCRIPTION}
            </p>
            <div className="animate-fade-up-slow flex flex-wrap gap-4">
              <Link to="/contact" className={btnPrimary}>
                Start a Website Project
              </Link>
              <Link to="/creative-prompts" className={btnSecondary}>
                Explore AI Creative Prompts
              </Link>
            </div>
            <div className="animate-fade-up-slow mt-4 flex flex-wrap gap-4 text-sm">
              <Link to="/services" className="text-primary hover:underline">
                Get creative & marketing support
              </Link>
              <Link to="/portfolio" className="text-primary hover:underline">
                View our work
              </Link>
            </div>

            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6 text-sm">
              <div>
                <dt className="text-muted-foreground">Packages from</dt>
                <dd className="text-lg font-bold text-heading">₦75,000</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Typical delivery</dt>
                <dd className="text-lg font-bold text-heading">1–5 weeks</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Support</dt>
                <dd className="text-lg font-bold text-heading">Direct line</dd>
              </div>
            </dl>
          </div>

          {/* Interactive browser mockup — the URL bar opens site search */}
          <div className="animate-fade-up-slow overflow-hidden rounded-xl border border-border bg-card shadow-mockup transition-transform duration-500 hover:-translate-y-1">
            <div className="flex items-center gap-4 border-b border-border bg-surface px-4 py-3">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-dot-red" />
                <span className="size-2.5 rounded-full bg-dot-yellow" />
                <span className="size-2.5 rounded-full bg-dot-green" />
              </div>
              <SiteSearch variant="bar" />
            </div>
            <div className="overflow-x-auto p-6 font-mono text-xs text-code sm:text-sm">
              <p>{"<!-- Modern Architecture -->"}</p>
              <p>{'<section class="growth">'}</p>
              <p>&nbsp;&nbsp;{"<h1>Engineered for Results</h1>"}</p>
              <p>&nbsp;&nbsp;{"<p>Fast, responsive, secure.</p>"}</p>
              <p>{"</section>"}</p>
            </div>
            <div className="grid gap-3 border-t border-border p-6 sm:grid-cols-3">
              {["Responsive", "SEO-ready", "Conversion-led"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border bg-surface px-3 py-2 text-center text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="site-section">
        <Reveal>
          <span className="section-tag">What We Do</span>
          <h2 className="mb-4 text-3xl font-bold text-heading sm:text-4xl">
            Websites designed around <span className="text-primary">your goals.</span>
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            From a focused business site to a full store or custom application — each
            service is scoped to the outcome you need.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 6).map((service, i) => (
            <Reveal key={service.slug} delay={i * 60} as="article" className={cardClass}>
              <h3 className="mb-2 text-lg font-semibold text-heading">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">{service.summary}</p>
              <Link
                to={service.to as never}
                className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:underline"
              >
                Learn more <ArrowRight className="size-3.5" aria-hidden="true" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why Painstaking */}
      <section className="border-y border-border bg-surface/40">
        <div className="site-section">
          <Reveal>
            <span className="section-tag">Why Painstaking</span>
            <h2 className="mb-4 text-3xl font-bold text-heading sm:text-4xl">
              The details are the <span className="text-primary">difference.</span>
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {WHY_US.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 60}
                className="rounded-xl border border-border bg-card p-7"
              >
                <h3 className="mb-2 text-lg font-semibold text-heading">{item.title}</h3>
                <p className="text-muted-foreground">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="site-section">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="section-tag">Selected Work</span>
            <h2 className="text-3xl font-bold text-heading sm:text-4xl">
              Projects we've <span className="text-primary">built.</span>
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
          >
            Explore the full portfolio <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
        </Reveal>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal
              key={project.title}
              delay={i * 70}
              as="article"
              className="group overflow-hidden rounded-xl border border-border bg-card transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-primary"
            >
              <div className="grid-lines flex h-44 items-center justify-center border-b border-border bg-surface text-sm text-muted-foreground">
                {project.title}
              </div>
              <div className="p-6">
                <span className="text-xs tracking-widest text-primary uppercase">
                  {project.category}
                </span>
                <h3 className="mt-2 mb-2 text-lg font-semibold text-heading">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">{project.body}</p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm text-primary hover:underline"
                >
                  Visit site &rarr;
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process preview */}
      <section className="border-y border-border bg-surface/40">
        <div className="site-section">
          <Reveal>
            <span className="section-tag">How We Work</span>
            <h2 className="mb-4 text-3xl font-bold text-heading sm:text-4xl">
              A calm, structured <span className="text-primary">process.</span>
            </h2>
          </Reveal>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.slice(0, 4).map((step, i) => (
              <Reveal
                key={step.step}
                delay={i * 60}
                as="li"
                className="rounded-xl border border-border bg-card p-6"
              >
                <span className="font-mono text-sm text-primary">{step.step}</span>
                <h3 className="mt-2 mb-1 font-semibold text-heading">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.body}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-8">
            <Link
              to="/process"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              See all seven stages <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="site-section">
        <Reveal>
          <span className="section-tag">Transparent Pricing</span>
          <h2 className="mb-4 text-3xl font-bold text-heading sm:text-4xl">
            Fair plans for <span className="text-primary">growing businesses.</span>
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i * 60}
              className={`relative rounded-xl border bg-card p-7 transition-transform duration-300 hover:-translate-y-1 ${
                plan.featured ? "border-primary shadow-glow" : "border-border"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 right-5 rounded bg-primary px-2 py-1 text-[0.7rem] font-bold text-primary-foreground">
                  MOST POPULAR
                </span>
              )}
              <h3 className="font-semibold text-heading">{plan.name}</h3>
              <div className="my-3 text-3xl font-extrabold text-heading">{plan.price}</div>
              <p className="mb-4 text-sm text-muted-foreground">{plan.tagline}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {plan.features.slice(0, 4).map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <Link to="/pricing" className={btnSecondary}>
            Compare full pricing
          </Link>
        </Reveal>
      </section>

      {/* Trust */}
      <section className="border-y border-border bg-surface/40">
        <div className="site-section">
          <Reveal>
            <span className="section-tag">Our Commitments</span>
            <h2 className="mb-4 text-3xl font-bold text-heading sm:text-4xl">
              What every build <span className="text-primary">guarantees.</span>
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              Standards we hold on every project, whatever the package.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST.map(({ icon: Icon, title, body }, i) => (
              <Reveal
                key={title}
                delay={i * 60}
                className="rounded-xl border border-border bg-card p-6"
              >
                <Icon className="mb-3 size-7 text-primary" strokeWidth={2} />
                <h3 className="mb-1 font-semibold text-heading">{title}</h3>
                <p className="text-sm text-muted-foreground">{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="site-section">
        <Reveal>
          <span className="section-tag">Questions</span>
          <h2 className="mb-6 text-3xl font-bold text-heading sm:text-4xl">
            Answers before you <span className="text-primary">commit.</span>
          </h2>
        </Reveal>
        <Reveal>
          <Accordion type="single" collapsible className="max-w-3xl">
            {FAQS.slice(0, 4).map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="text-left text-heading">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Link
            to="/faq"
            className="mt-6 inline-flex items-center gap-1 text-sm text-primary hover:underline"
          >
            Read all FAQs <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
