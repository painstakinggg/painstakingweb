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
  "Starter website packages from ₦150,000, Business packages at ₦250,000 and Premium / Professional builds from ₦500,000+, plus custom quotes. Domains, hosting, third-party APIs and provider charges are billed separately.";

export const Route = createFileRoute("/pricing")({
  head: () => pageMeta(TITLE, DESCRIPTION),
  component: Pricing,
});

const EXTERNAL_COSTS = [
  {
    title: "Domain registration & renewal",
    body: "Your website address and its yearly renewal are paid separately to the domain registrar.",
  },
  {
    title: "Hosting & infrastructure",
    body: "Hosting plans, server resources, storage, bandwidth or other infrastructure charges are separate wherever they apply.",
  },
  {
    title: "Third-party APIs & services",
    body: "API subscriptions, usage-based charges, credits and external platform fees are not included in the website development price.",
  },
  {
    title: "Payment processing",
    body: "Transaction and processing fees charged by payment providers such as Paystack are paid separately to the provider.",
  },
  {
    title: "Premium tools & licences",
    body: "Paid plugins, themes, software licences and other optional third-party tools are billed separately.",
  },
];

const NOTES = [
  "Package prices cover the agreed website design and development work only. External services and provider charges are separate payments.",
  "Where possible, you pay the relevant provider directly and retain ownership of your accounts. We can help with selection, setup, configuration and integration.",
  "Content (text, images, product details) is supplied by you; we advise on what is needed and how to structure it.",
  "Additional pages, features or revision rounds beyond a package are quoted and approved before any extra work begins.",
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
          Choose a package based on the size and complexity of your project. Anything
          outside a package is scoped and quoted after a discovery conversation.
          Package prices cover our development work; domain, hosting, API and other
          third-party costs are separate.
        </p>
      </PageHero>

      <section className="site-section">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i * 60}
              className={`motion-card relative flex flex-col rounded-xl border bg-card p-7 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-glow ${
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
            <span className="section-tag">Separate Provider Costs</span>
            <h2 className="mb-4 text-2xl font-bold text-heading sm:text-3xl">
              What is paid separately?
            </h2>
            <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
              These costs are not part of the website package price. They depend on
              the providers and services selected for your project, and may be
              recurring or usage-based.
            </p>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {EXTERNAL_COSTS.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 50}
                className="motion-card rounded-xl border border-border bg-card p-6"
              >
                <h3 className="mb-2 text-base font-semibold text-heading">{item.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{item.body}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 rounded-lg border border-border bg-card p-4 text-sm leading-6 text-muted-foreground">
            <strong className="text-heading">How payment works:</strong> Wherever
            possible, clients pay the relevant third-party provider directly and
            retain ownership of their accounts. Painstaking Web can assist with
            choosing, setting up and integrating these services. Any service
            management or setup fee will be discussed and approved separately.
          </p>
        </div>
      </section>

      <section className="site-section">
        <div>
          <Reveal>
            <span className="section-tag">Good To Know</span>
            <h2 className="mb-4 text-2xl font-bold text-heading sm:text-3xl">
              What the package price covers.
            </h2>
          </Reveal>
          <ul className="mt-6 grid gap-4 lg:grid-cols-2">
            {NOTES.map((note, i) => (
              <Reveal
                key={note}
                delay={i * 60}
                as="li"
                className="motion-card rounded-xl border border-border bg-card p-6 text-sm text-muted-foreground"
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
