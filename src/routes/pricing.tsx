import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS, PLANS } from "@/lib/site-data";
import { btnPrimary, btnSecondary } from "@/lib/ui-classes";
import { pageMeta } from "@/lib/seo";

const TITLE = "Pricing — Website Packages | Painstaking Web Development";
const DESCRIPTION =
  "Starter ₦75,000, Professional ₦150,000 and Premium ₦250,000 website packages, plus custom quotes. See included pages, features, revisions and delivery times.";

export const Route = createFileRoute("/pricing")({
  head: () => pageMeta(TITLE, DESCRIPTION),
  component: Pricing,
});

const NOTES = [
  "Prices are for the build itself. Hosting, domain and third-party service fees are paid to those providers — we assist with setup.",
  "Content (text, images, product details) is supplied by you; we advise on what is needed and how to structure it.",
  "Additional pages, features or revision rounds beyond a package are quoted before any extra work begins.",
];

const pricingFaqs = FAQS.filter((f) => f.category === "Pricing");

function Pricing() {
  return (
    <>
      <PageHero
        tag="Transparent Pricing"
        title="Fair plans for"
        highlight="growing businesses."
        actions={
          <>
            <Link to="/contact" className={btnPrimary}>
              Request a quote
            </Link>
            <Link to="/services" className={btnSecondary}>
              Compare services
            </Link>
          </>
        }
      >
        <p>
          Package pricing from the current Painstaking price list. Anything outside a
          package is scoped and quoted after a discovery conversation.
        </p>
      </PageHero>

      <section className="site-section">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i * 60}
              className={`relative flex flex-col rounded-xl border bg-card p-7 transition-transform duration-300 hover:-translate-y-1 ${
                plan.featured ? "border-primary shadow-glow" : "border-border"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 right-5 rounded bg-primary px-2 py-1 text-[0.7rem] font-bold text-primary-foreground">
                  MOST POPULAR
                </span>
              )}
              <h2 className="text-lg font-semibold text-heading">{plan.name}</h2>
              <div className="mt-3 text-3xl font-extrabold text-heading">{plan.price}</div>
              {plan.priceNote && (
                <p className="mt-1 text-xs text-muted-foreground">{plan.priceNote}</p>
              )}
              <p className="mt-3 text-sm text-muted-foreground">{plan.tagline}</p>
              <ul className="mt-5 mb-6 space-y-2 text-sm text-muted-foreground">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-auto mb-5 text-xs text-primary">{plan.delivery}</p>
              <Link
                to="/contact"
                className={`${plan.featured ? btnPrimary : btnSecondary} w-full !px-4 !py-3 text-sm`}
              >
                {plan.price === "Request a quote" ? "Request a quote" : "Select plan"}
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface/40">
        <div className="site-section">
          <Reveal>
            <span className="section-tag">Good To Know</span>
            <h2 className="mb-4 text-2xl font-bold text-heading sm:text-3xl">
              What the prices include.
            </h2>
          </Reveal>
          <ul className="mt-6 grid gap-4 lg:grid-cols-3">
            {NOTES.map((note, i) => (
              <Reveal
                key={note}
                delay={i * 60}
                as="li"
                className="rounded-xl border border-border bg-card p-6 text-sm text-muted-foreground"
              >
                {note}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="site-section">
        <Reveal>
          <span className="section-tag">Pricing Questions</span>
          <h2 className="mb-6 text-2xl font-bold text-heading sm:text-3xl">
            Common cost questions.
          </h2>
          <Accordion type="single" collapsible className="max-w-3xl">
            {pricingFaqs.map((faq) => (
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
          <Link to="/faq" className="mt-6 inline-block text-sm text-primary hover:underline">
            See all FAQs &rarr;
          </Link>
        </Reveal>
      </section>

      <CtaBand title="Need a plan tailored to your business?" />
    </>
  );
}
