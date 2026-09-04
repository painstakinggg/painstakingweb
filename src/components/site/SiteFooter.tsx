import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle } from "lucide-react";

import { Logo } from "@/components/site/Logo";
import { CONTACT, NAV_ITEMS, SERVICES } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-border bg-surface/40">
      <div className="mx-auto grid max-w-[var(--container-site)] gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo size="sm" />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            A web development studio building clean, high-converting,
            mobile-responsive websites for businesses.
          </p>
        </div>

        <nav aria-label="Footer pages">
          <h2 className="mb-3 text-sm font-semibold text-heading">Pages</h2>
          <ul className="space-y-2 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-3 text-sm font-semibold text-heading">Services</h2>
          <ul className="space-y-2 text-sm">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link
                  to={service.to}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold text-heading">Contact</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                {CONTACT.whatsappNumberDisplay}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.emailUrl}
                className="flex items-center gap-2 break-all text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <Instagram className="size-4" aria-hidden="true" />
                @painstaking.web
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-6 py-6 text-center text-xs text-muted-foreground">
        <p>&copy; 2026 Painstaking Web Development. All rights reserved.</p>
      </div>
    </footer>
  );
}
