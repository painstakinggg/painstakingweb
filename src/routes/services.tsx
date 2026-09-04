import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Search } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { SERVICES } from "@/lib/site-data";
import { btnPrimary, btnSecondary, cardClass } from "@/lib/ui-classes";
import { pageMeta } from "@/lib/seo";

const TITLE = "Services — Web Design, E-Commerce & Support | Painstaking";
const DESCRIPTION =
  "Explore Painstaking Web Development services: business websites, e-commerce stores, landing pages, SEO foundations, maintenance and custom web applications.";

export const Route = createFileRoute("/services")({
  head: () => pageMeta(TITLE, DESCRIPTION),
  component: Services,
});

function Services() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SERVICES;
    return SERVICES.filter((s) =>
      `${s.title} ${s.summary} ${s.points.join(" ")}`.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <>
      <PageHero
        tag="Services"
        title="Everything we build, in"
        highlight="one directory."
        actions={
          <>
            <Link to="/pricing" className={btnPrimary}>
              View pricing
            </Link>
            <Link to="/contact" className={btnSecondary}>
              Start a project
            </Link>
          </>
        }
      >
        <p>
          Each service is scoped around a business outcome. Filter the directory below to
          find the work that matches your goal.
        </p>
      </PageHero>

      <section className="site-section">
        <div className="mb-8 max-w-xl">
          <label htmlFor="service-search" className="mb-2 block text-sm text-muted-foreground">
            Filter services
          </label>
          <div className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2.5 focus-within:border-primary">
            <Search className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            <input
              id="service-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try “store”, “SEO”, “landing page”…"
              className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground/70"
            />
          </div>
          <p aria-live="polite" className="mt-2 text-xs text-muted-foreground">
            {results.length} of {SERVICES.length} services shown
          </p>
        </div>

        {results.length === 0 ? (
          <p className="text-muted-foreground">
            No services match that search.{" "}
            <Link to="/contact" className="text-primary hover:underline">
              Tell us what you need
            </Link>{" "}
            and we will scope it.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((service, i) => (
              <Reveal key={service.slug} delay={i * 50} as="article" className={cardClass}>
                <h2 className="mb-2 text-lg font-semibold text-heading">
                  {service.title}
                </h2>
                <p className="text-sm text-muted-foreground">{service.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
                {service.to !== "/services" && (
                  <Link
                    to={service.to}
                    className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    Explore this service{" "}
                    <ArrowRight className="size-3.5" aria-hidden="true" />
                  </Link>
                )}
              </Reveal>
            ))}
          </div>
        )}
      </section>

      <CtaBand
        title="Not sure which service fits?"
        body="Describe your business and goal — we will recommend the right scope, honestly."
      />
    </>
  );
}
