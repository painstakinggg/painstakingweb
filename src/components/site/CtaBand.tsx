import { Link } from "@tanstack/react-router";

import { Reveal } from "@/components/site/Reveal";
import { CONTACT } from "@/lib/site-data";
import { btnPrimary, btnSecondary } from "@/lib/ui-classes";

export function CtaBand({
  title = "Ready to build something worth being proud of?",
  body = "Tell us about your business and goals — we will reply with a clear plan, scope and timeline.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="site-section">
      <Reveal className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 text-center sm:p-14">
        <div className="hero-glow" aria-hidden="true" />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-2xl font-bold text-heading sm:text-3xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className={btnPrimary}>
              Start a Project
            </Link>
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={btnSecondary}
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
