import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { PROJECTS, PROJECT_CATEGORIES } from "@/lib/site-data";
import { pageMeta } from "@/lib/seo";

const TITLE = "Portfolio — Websites Built by Painstaking Web Development";
const DESCRIPTION =
  "Browse and filter projects built by Painstaking Web Development, including restaurant, e-commerce and real estate websites with live links.";

export const Route = createFileRoute("/portfolio")({
  head: () => pageMeta(TITLE, DESCRIPTION),
  component: Portfolio,
});

function Portfolio() {
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECTS.filter((project) => {
      const matchesCategory = category === "All" || project.category === category;
      const matchesQuery =
        !q ||
        `${project.title} ${project.body} ${project.category} ${project.highlights.join(" ")}`
          .toLowerCase()
          .includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <>
      <PageHero tag="Selected Work" title="Projects we've" highlight="built.">
        <p>
          A growing set of live builds. Filter by category or search to find work close to
          your own project.
        </p>
      </PageHero>

      <section className="site-section">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div
            role="group"
            aria-label="Filter projects by category"
            className="flex flex-wrap gap-2"
          >
            {PROJECT_CATEGORIES.map((cat) => (
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
            <label htmlFor="portfolio-search" className="sr-only">
              Search projects
            </label>
            <div className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2.5 focus-within:border-primary">
              <Search className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <input
                id="portfolio-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects…"
                className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground/70"
              />
            </div>
          </div>
        </div>

        <p aria-live="polite" className="mt-3 text-xs text-muted-foreground">
          Showing {results.length} of {PROJECTS.length} projects
        </p>

        {results.length === 0 ? (
          <p className="mt-10 text-muted-foreground">
            No projects match that filter yet.
          </p>
        ) : (
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((project, i) => (
              <Reveal
                key={project.title}
                delay={i * 60}
                as="article"
                className="overflow-hidden rounded-xl border border-border bg-card transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-glow"
              >
                <div className="grid-lines flex h-48 items-center justify-center border-b border-border bg-surface px-4 text-center text-sm text-muted-foreground">
                  {project.title} preview
                </div>
                <div className="p-6">
                  <span className="text-xs tracking-widest text-primary uppercase">
                    {project.category}
                  </span>
                  <h2 className="mt-2 mb-2 text-lg font-semibold text-heading">
                    {project.title}
                  </h2>
                  <p className="text-sm text-muted-foreground">{project.body}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm text-primary hover:underline"
                  >
                    Visit site &rarr;
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </section>

      <CtaBand
        title="Want your project in this list?"
        body="Tell us what you are building and we will map the scope with you."
      />
    </>
  );
}
