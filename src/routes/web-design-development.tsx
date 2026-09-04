import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { PROCESS } from "@/lib/site-data";
import { btnPrimary, btnSecondary } from "@/lib/ui-classes";
import { pageMeta } from "@/lib/seo";

const TITLE = "Web Design & Development — Painstaking Web Development";
const DESCRIPTION =
  "Custom-designed, mobile-responsive business websites and landing pages built with clean front-end code, forms, integrations and SEO foundations.";

export const Route = createFileRoute("/web-design-development")({
  head: () => pageMeta(TITLE, DESCRIPTION),
  component: WebDesign,
});

const INCLUDED = [
  {
    title: "Custom UI/UX design",
    body: "Layouts designed around your brand and your visitor's next action — never a stock template.",
  },
  {
    title: "Mobile-responsive build",
    body: "Designed mobile-first, then scaled up, with tap targets and typography checked on real viewports.",
  },
  {
    title: "Forms & integrations",
    body: "Enquiry forms, maps, WhatsApp and social links wired to the tools you already use.",
  },
  {
    title: "SEO foundations",
    body: "Semantic markup, page titles and descriptions, social sharing metadata and clean URLs.",
  },
  {
    title: "Performance tuning",
    body: "Optimised assets, lean code and fast first paint so visitors do not wait.",
  },
  {
    title: "Analytics & handover",
    body: "Analytics setup assistance plus guidance on hosting, domains and future updates.",
  },
];

const IDEAL_FOR = [
  "Businesses with no website, or an outdated one",
  "Service businesses that need enquiries, not just presence",
  "Single-product or campaign landing pages",
  "Brands that want a custom interface rather than a template",
];

function WebDesign() {
  return (
    <>
      <PageHero
        tag="Service"
        title="Web design &"
        highlight="development."
        actions={
          <>
            <Link to="/contact" className={btnPrimary}>
              Start a project
            </Link>
            <Link to="/pricing" className={btnSecondary}>
              See package pricing
            </Link>
          </>
        }
      >
        <p>
          Professional business sites structured to turn visitors into leads and build
          long-term trust — designed, built and tested end to end.
        </p>
      </PageHero>

      <section className="site-section">
        <Reveal>
          <span className="section-tag">What's Included</span>
          <h2 className="mb-4 text-2xl font-bold text-heading sm:text-3xl">
            Every build covers the essentials.
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INCLUDED.map((item, i) => (
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
            <span className="section-tag">Ideal For</span>
            <h2 className="mb-4 text-2xl font-bold text-heading sm:text-3xl">
              Who this service suits.
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              {IDEAL_FOR.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80} className="rounded-xl border border-border bg-card p-7">
            <h2 className="mb-4 text-lg font-semibold text-heading">
              How a build progresses
            </h2>
            <ol className="space-y-4">
              {PROCESS.slice(0, 6).map((step) => (
                <li key={step.step} className="flex gap-3">
                  <span className="font-mono text-sm text-primary">{step.step}</span>
                  <div>
                    <p className="font-medium text-heading">{step.title}</p>
                    <p className="text-sm text-muted-foreground">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link
              to="/process"
              className="mt-5 inline-block text-sm text-primary hover:underline"
            >
              Read the full process &rarr;
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Ready for a site that earns its keep?" />
    </>
  );
}
