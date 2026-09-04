import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { PROJECTS } from "@/lib/site-data";
import { btnPrimary, btnSecondary } from "@/lib/ui-classes";
import { pageMeta } from "@/lib/seo";

const TITLE = "E-Commerce Website Development — Painstaking Web Development";
const DESCRIPTION =
  "Fast, mobile-friendly online stores with product catalogues, cart and checkout flows, payment integration support and an order-ready structure.";

export const Route = createFileRoute("/e-commerce")({
  head: () => pageMeta(TITLE, DESCRIPTION),
  component: ECommerce,
});

const CAPABILITIES = [
  {
    title: "Product catalogue setup",
    body: "Clear category structure, product pages and imagery guidance that makes browsing effortless.",
  },
  {
    title: "Cart & checkout flows",
    body: "Short, predictable paths from product to purchase, designed to reduce abandonment.",
  },
  {
    title: "Payment integration support",
    body: "We help connect the payment provider that suits your business and your customers.",
  },
  {
    title: "Order-ready structure",
    body: "Store pages and flows organised so fulfilment and stock updates stay manageable.",
  },
  {
    title: "Mobile-first shopping",
    body: "Most shoppers arrive on a phone, so the phone layout is designed first.",
  },
  {
    title: "Search & filtering UI",
    body: "Interactive product filtering so customers find the right item quickly.",
  },
];

const CHECKLIST = [
  "Product list, images, prices and variants",
  "Delivery areas, shipping rules and fees",
  "Preferred payment provider (or ask us to advise)",
  "Return, refund and contact policies",
];

function ECommerce() {
  const store = PROJECTS.find((p) => p.category === "E-Commerce");

  return (
    <>
      <PageHero
        tag="Service"
        title="E-commerce stores that"
        highlight="sell."
        actions={
          <>
            <Link to="/contact" className={btnPrimary}>
              Plan my store
            </Link>
            <Link to="/portfolio" className={btnSecondary}>
              See store work
            </Link>
          </>
        }
      >
        <p>
          Fast storefront experiences tailored for smooth product browsing, cart flows and
          checkouts — built to be managed without a developer on standby.
        </p>
      </PageHero>

      <section className="site-section">
        <Reveal>
          <span className="section-tag">Capabilities</span>
          <h2 className="mb-4 text-2xl font-bold text-heading sm:text-3xl">
            Everything a working store needs.
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 50}
              className="rounded-xl border border-border bg-card p-7 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-primary"
            >
              <h3 className="mb-2 font-semibold text-heading">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface/40">
        <div className="site-section grid gap-10 lg:grid-cols-2">
          <Reveal>
            <span className="section-tag">Preparation</span>
            <h2 className="mb-4 text-2xl font-bold text-heading sm:text-3xl">
              What to have ready.
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          {store && (
            <Reveal delay={80} className="rounded-xl border border-border bg-card p-7">
              <span className="text-xs tracking-widest text-primary uppercase">
                Store example
              </span>
              <h2 className="mt-2 mb-2 text-lg font-semibold text-heading">
                {store.title}
              </h2>
              <p className="text-sm text-muted-foreground">{store.body}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {store.highlights.map((h) => (
                  <li
                    key={h}
                    className="rounded-md border border-border bg-surface px-3 py-1 text-xs text-muted-foreground"
                  >
                    {h}
                  </li>
                ))}
              </ul>
              <a
                href={store.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-sm text-primary hover:underline"
              >
                Visit the live store &rarr;
              </a>
            </Reveal>
          )}
        </div>
      </section>

      <CtaBand
        title="Let's scope your online store."
        body="Share your products and delivery setup — we will map the store structure and quote clearly."
      />
    </>
  );
}
