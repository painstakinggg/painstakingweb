import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Copy, Search, Sparkles } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import {
  CREATIVE_CAPABILITIES,
  CREATIVE_PROMPTS,
  DIGITAL_RESOURCES,
  PROMPT_CATEGORIES,
} from "@/lib/site-data";
import { btnPrimary, btnSecondary, cardClass } from "@/lib/ui-classes";
import { pageMeta } from "@/lib/seo";

const TITLE = "AI Creative Prompts — Marketing & Content Library | Painstaking";
const DESCRIPTION =
  "A free library of AI creative prompts for website advertising, social content, business marketing, product promotion, campaign ideas and ad scripts.";

export const Route = createFileRoute("/creative-prompts")({
  head: () => pageMeta(TITLE, DESCRIPTION),
  component: CreativePrompts,
});

async function copyText(text: string) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* fall through to the legacy path */
  }
  try {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(area);
    return ok;
  } catch {
    return false;
  }
}

function CreativePrompts() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CREATIVE_PROMPTS.filter((p) => {
      const inCategory = category === "All" || p.category === category;
      if (!inCategory) return false;
      if (!q) return true;
      return `${p.title} ${p.description} ${p.prompt} ${p.category} ${p.keywords.join(" ")}`
        .toLowerCase()
        .includes(q);
    });
  }, [query, category]);

  const onCopy = async (id: string, text: string) => {
    const ok = await copyText(text);
    if (ok) {
      setCopiedId(id);
      window.setTimeout(() => setCopiedId((c) => (c === id ? null : c)), 2000);
    }
  };

  return (
    <>
      <PageHero
        tag="AI Creative Prompts"
        title="Creative prompts for"
        highlight="business growth."
        actions={
          <>
            <Link to="/contact" className={btnPrimary}>
              Get creative support
            </Link>
            <Link to="/services" className={btnSecondary}>
              Explore services
            </Link>
          </>
        }
      >
        <p>
          A practical, free library of AI prompts for advertising, social content,
          marketing messaging and promotional campaigns. Copy a prompt, fill in the
          bracketed details, and adapt the result to your business.
        </p>
      </PageHero>

      <section className="site-section">
        <Reveal className="mb-8 grid gap-4">
          <div className="max-w-xl">
            <label htmlFor="prompt-search" className="mb-2 block text-sm text-muted-foreground">
              Search prompts
            </label>
            <div className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2.5 focus-within:border-primary">
              <Search className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <input
                id="prompt-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Try “captions”, “launch”, “video hooks”…"
                className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground/70"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Prompt categories">
            {PROMPT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                aria-pressed={category === cat}
                onClick={() => setCategory(cat)}
                className={`rounded-md border px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  category === cat
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <p aria-live="polite" className="text-xs text-muted-foreground">
            {results.length} of {CREATIVE_PROMPTS.length} prompts shown
          </p>
        </Reveal>

        {results.length === 0 ? (
          <p className="text-muted-foreground">
            No prompts match that search.{" "}
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
              className="text-primary hover:underline"
            >
              Clear filters
            </button>{" "}
            or{" "}
            <Link to="/contact" className="text-primary hover:underline">
              ask us for a custom prompt
            </Link>
            .
          </p>
        ) : (
          <div className="grid gap-6 lg:grid-cols-2">
            {results.map((prompt, i) => (
              <Reveal key={prompt.id} delay={i * 40} as="article" className={cardClass}>
                <span className="text-xs tracking-widest text-primary uppercase">
                  {prompt.category}
                </span>
                <h2 className="mt-2 mb-2 text-lg font-semibold text-heading">
                  {prompt.title}
                </h2>
                <p className="text-sm text-muted-foreground">{prompt.description}</p>
                <p className="mt-4 rounded-md border border-border bg-surface/60 p-4 text-sm break-words text-foreground">
                  {prompt.prompt}
                </p>
                <button
                  type="button"
                  onClick={() => onCopy(prompt.id, prompt.prompt)}
                  aria-label={`Copy prompt: ${prompt.title}`}
                  className="mt-4 inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {copiedId === prompt.id ? (
                    <>
                      <Check className="size-4 text-primary" aria-hidden="true" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="size-4" aria-hidden="true" /> Copy prompt
                    </>
                  )}
                </button>
                <span aria-live="polite" className="sr-only">
                  {copiedId === prompt.id ? "Prompt copied to clipboard" : ""}
                </span>
              </Reveal>
            ))}
          </div>
        )}
      </section>

      <section className="border-y border-border bg-surface/40">
        <div className="site-section">
          <Reveal>
            <span className="section-tag">Creative Support</span>
            <h2 className="mb-4 text-3xl font-bold text-heading sm:text-4xl">
              Prefer it <span className="text-primary">done with you?</span>
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              Beyond the library, we help businesses shape advertisement concepts,
              captions, scripts and promotional direction alongside their website.
            </p>
          </Reveal>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CREATIVE_CAPABILITIES.map((item, i) => (
              <Reveal
                key={item}
                delay={i * 50}
                as="li"
                className="flex items-start gap-2 rounded-xl border border-border bg-card p-5 text-sm text-muted-foreground"
              >
                <Sparkles className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                {item}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="site-section">
        <Reveal>
          <span className="section-tag">Digital Resources</span>
          <h2 className="mb-4 text-3xl font-bold text-heading sm:text-4xl">
            Coming <span className="text-primary">soon.</span>
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Additional free and practical resources we are preparing. Nothing is on sale
            yet — tell us which would help most.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DIGITAL_RESOURCES.map((resource, i) => (
            <Reveal
              key={resource.title}
              delay={i * 60}
              className="rounded-xl border border-dashed border-border bg-card p-7"
            >
              <span className="text-xs tracking-widest text-muted-foreground uppercase">
                Coming soon
              </span>
              <h3 className="mt-2 mb-2 text-lg font-semibold text-heading">
                {resource.title}
              </h3>
              <p className="text-sm text-muted-foreground">{resource.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Need creative and marketing support?"
        body="Tell us what you are promoting and we will help shape the message, the content and the website behind it."
      />
    </>
  );
}
