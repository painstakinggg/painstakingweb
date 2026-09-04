import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CONTACT, FAQS } from "@/lib/site-data";
import { pageMeta } from "@/lib/seo";

const TITLE = "FAQ — Website Projects, Timelines & Costs | Painstaking";
const DESCRIPTION =
  "Answers about starting a project, timelines, package costs, hosting and domains, e-commerce, SEO foundations and what happens after launch.";

export const Route = createFileRoute("/faq")({
  head: () => pageMeta(TITLE, DESCRIPTION),
  component: FaqPage,
});

const CATEGORIES = ["All", ...Array.from(new Set(FAQS.map((f) => f.category)))];

function FaqPage() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQS.filter((faq) => {
      const matchesCategory = category === "All" || faq.category === category;
      const matchesQuery =
        !q || `${faq.question} ${faq.answer}`.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <>
      <PageHero tag="Questions" title="Answers before you" highlight="commit.">
        <p>
          Search the questions we are asked most. If yours is not here, message us
          directly and we will answer plainly.
        </p>
      </PageHero>

      <section className="site-section">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div role="group" aria-label="Filter questions" className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                aria-pressed={category === cat}
                onClick={() => setCategory(cat)}
                className={`rounded-md border px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  category === cat
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="lg:w-80">
            <label htmlFor="faq-search" className="sr-only">
              Search questions
            </label>
            <div className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2.5 focus-within:border-primary">
              <Search className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <input
                id="faq-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search questions…"
                className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground/70"
              />
            </div>
          </div>
        </div>

        <p aria-live="polite" className="mt-3 text-xs text-muted-foreground">
          Showing {results.length} of {FAQS.length} questions
        </p>

        <Reveal className="mt-6">
          {results.length === 0 ? (
            <p className="text-muted-foreground">
              Nothing matched that search.{" "}
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Ask us on WhatsApp
              </a>
              .
            </p>
          ) : (
            <Accordion type="single" collapsible className="max-w-3xl">
              {results.map((faq) => (
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
          )}
        </Reveal>

        <p className="mt-8 text-sm text-muted-foreground">
          Still deciding?{" "}
          <Link to="/pricing" className="text-primary hover:underline">
            Compare pricing
          </Link>{" "}
          or{" "}
          <Link to="/process" className="text-primary hover:underline">
            read our process
          </Link>
          .
        </p>
      </section>

      <CtaBand title="Question we haven't covered?" body="Ask directly — we reply with straight answers, not sales copy." />
    </>
  );
}
