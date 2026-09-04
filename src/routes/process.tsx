import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { PROCESS } from "@/lib/site-data";
import { btnPrimary, btnSecondary } from "@/lib/ui-classes";
import { pageMeta } from "@/lib/seo";

const TITLE = "Our Process — Discovery to Launch | Painstaking Web Development";
const DESCRIPTION =
  "Seven clear stages: discovery, planning, design, development, testing, launch and support — with the deliverables you receive at each step.";

export const Route = createFileRoute("/process")({
  head: () => pageMeta(TITLE, DESCRIPTION),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <>
      <PageHero
        tag="How We Work"
        title="A calm, structured"
        highlight="process."
        actions={
          <>
            <Link to="/contact" className={btnPrimary}>
              Book a discovery chat
            </Link>
            <Link to="/pricing" className={btnSecondary}>
              View pricing
            </Link>
          </>
        }
      >
        <p>
          Seven stages, each with clear deliverables, so you always know what is happening
          and what comes next.
        </p>
      </PageHero>

      <section className="site-section">
        <ol className="relative space-y-6 border-l border-border pl-6 sm:pl-10">
          {PROCESS.map((step, i) => (
            <Reveal
              key={step.step}
              delay={i * 50}
              as="li"
              className="relative rounded-xl border border-border bg-card p-7 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-primary"
            >
              <span
                aria-hidden="true"
                className="absolute top-9 -left-[1.9rem] size-3 rounded-full bg-primary sm:-left-[2.9rem]"
              />
              <span className="font-mono text-sm text-primary">{step.step}</span>
              <h2 className="mt-1 mb-2 text-xl font-semibold text-heading">{step.title}</h2>
              <p className="text-muted-foreground">{step.body}</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-3">
                {step.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </section>

      <CtaBand title="Start at stage one." body="A short discovery conversation is all it takes to begin." />
    </>
  );
}
