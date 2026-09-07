import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import { CONTACT, PROCESS } from "@/lib/site-data";

import { pageMeta } from "@/lib/seo";

const TITLE = "Contact — Start a Project | Painstaking Web Development";
const DESCRIPTION =
  "Send a structured project enquiry, or reach Painstaking Web Development directly on WhatsApp at +234 810 734 8296 or by email at iagboola10@gmail.com.";

export const Route = createFileRoute("/contact")({
  head: () => pageMeta(TITLE, DESCRIPTION),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        tag="Let's Talk"
        title="Ready to build your"
        highlight="online presence?"
      >
        <p>
          Share your project details below and we will reply with next steps, scope
          suggestions and a clear timeline.
        </p>
      </PageHero>

      <section className="site-section grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <h2 className="mb-4 text-2xl font-bold text-heading sm:text-3xl">
            Direct contact
          </h2>
          <p className="text-muted-foreground">
            Prefer to talk first? Reach us on any of these channels — WhatsApp is usually
            fastest.
          </p>

          <ul className="mt-6 space-y-3">
            <li>
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary"
              >
                <MessageCircle className="size-5 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  <span className="block font-semibold text-heading">WhatsApp</span>
                  <span className="text-sm text-muted-foreground">
                    {CONTACT.whatsappNumberDisplay}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={CONTACT.emailUrl}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary"
              >
                <Mail className="size-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block font-semibold text-heading">Email</span>
                  <span className="block truncate text-sm text-muted-foreground">
                    {CONTACT.email}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary"
              >
                <Instagram className="size-5 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  <span className="block font-semibold text-heading">Instagram</span>
                  <span className="text-sm text-muted-foreground">@painstaking.web</span>
                </span>
              </a>
            </li>
          </ul>

          <div className="mt-8 rounded-xl border border-border bg-surface/60 p-6">
            <h3 className="mb-3 font-semibold text-heading">What happens next</h3>
            <ol className="space-y-2 text-sm text-muted-foreground">
              {PROCESS.slice(0, 3).map((step) => (
                <li key={step.step} className="flex gap-3">
                  <span className="font-mono text-primary">{step.step}</span>
                  <span>
                    <strong className="text-heading">{step.title}:</strong> {step.body}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
