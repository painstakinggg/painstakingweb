import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { CONTACT, WHY_US } from "@/lib/site-data";
import { btnPrimary, btnSecondary } from "@/lib/ui-classes";
import { pageMeta } from "@/lib/seo";

const TITLE = "About — Painstaking Web Development";
const DESCRIPTION =
  "Painstaking Web Development is a web development studio building clean, high-converting, mobile-responsive websites structured around your business goals.";

export const Route = createFileRoute("/about")({
  head: () => pageMeta(TITLE, DESCRIPTION),
  component: About,
});

const PRINCIPLES = [
  {
    title: "Clarity over decoration",
    body: "A visitor should understand what you do, who it is for and what to do next within seconds.",
  },
  {
    title: "Structure before styling",
    body: "We plan pages and content first, so the design solves a real problem instead of filling space.",
  },
  {
    title: "Nothing ships unchecked",
    body: "Links, forms, spacing and responsive behaviour are reviewed before launch, every time.",
  },
];

function About() {
  return (
    <>
      <PageHero
        tag="About Us"
        title="A web development studio built on"
        highlight="detail."
        actions={
          <>
            <Link to="/contact" className={btnPrimary}>
              Work with us
            </Link>
            <Link to="/portfolio" className={btnSecondary}>
              See our work
            </Link>
          </>
        }
      >
        <p>
          Painstaking Web Development is a web development agency creating clean,
          high-converting, mobile-responsive websites. Every project is structured around
          your goals — establishing authority, driving sales, and giving your business a
          fast, responsive and secure online presence.
        </p>
      </PageHero>

      <section className="site-section grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <span className="section-tag">Our Approach</span>
          <h2 className="mb-4 text-2xl font-bold text-heading sm:text-3xl">
            Careful work, plainly explained.
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              The name is the brief. Painstaking means every detail gets attention: the
              hierarchy of a heading, the tap target of a button, the way a layout behaves
              on a mid-range Android phone.
            </p>
            <p>
              We work directly with business owners, so there is no layer between the
              person planning your site and the person building it. You get honest scoping,
              clear timelines and a direct line for questions.
            </p>
            <p>
              Whether the project is a four-page business site or a custom application,
              the standard is the same: fast, responsive, secure and built to convert.
            </p>
          </div>
        </Reveal>

        <Reveal
          delay={80}
          className="rounded-xl border border-border bg-card p-7 lg:sticky lg:top-28"
        >
          <h2 className="mb-4 text-lg font-semibold text-heading">Talk to us directly</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <span className="text-muted-foreground">WhatsApp: </span>
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {CONTACT.whatsappNumberDisplay}
              </a>
            </li>
            <li>
              <span className="text-muted-foreground">Email: </span>
              <a href={CONTACT.emailUrl} className="break-all text-primary hover:underline">
                {CONTACT.email}
              </a>
            </li>
            <li>
              <span className="text-muted-foreground">Instagram: </span>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                @painstaking.web
              </a>
            </li>
          </ul>
        </Reveal>
      </section>

      <section className="border-y border-border bg-surface/40">
        <div className="site-section">
          <Reveal>
            <span className="section-tag">Principles</span>
            <h2 className="mb-4 text-2xl font-bold text-heading sm:text-3xl">
              How we make decisions.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {PRINCIPLES.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 60}
                className="rounded-xl border border-border bg-card p-7"
              >
                <h3 className="mb-2 font-semibold text-heading">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <Reveal>
          <span className="section-tag">Why Painstaking</span>
          <h2 className="mb-4 text-2xl font-bold text-heading sm:text-3xl">
            What you can expect.
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {WHY_US.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 60}
              className="rounded-xl border border-border bg-card p-7"
            >
              <h3 className="mb-2 font-semibold text-heading">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand title="Let's talk about your project." />
    </>
  );
}
