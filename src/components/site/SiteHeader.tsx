import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { MoreVertical, Instagram, MessageCircle } from "lucide-react";

import { Logo } from "@/components/site/Logo";
import { SiteSearch } from "@/components/site/SiteSearch";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CONTACT, NAV_ITEMS, PRIMARY_NAV } from "@/lib/site-data";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-100 border-b bg-background/85 backdrop-blur-xl transition-[box-shadow,border-color] duration-300 ${
        scrolled ? "border-primary/30 shadow-header" : "border-border shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-[var(--container-site)] items-center justify-between gap-4 px-5 py-3.5 sm:px-6">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {PRIMARY_NAV.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="rounded-md px-3 py-2 text-sm transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <SiteSearch />

          <Link
            to="/contact"
            className="hidden h-10 items-center rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover sm:inline-flex"
          >
            Start a Project
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                className="inline-flex size-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring data-[state=open]:border-primary data-[state=open]:text-primary"
              >
                <MoreVertical className="size-5" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[19rem] overflow-y-auto bg-card">
              <SheetHeader className="text-left">
                <SheetTitle className="text-heading">Menu</SheetTitle>
                <SheetDescription>Explore every page of the studio.</SheetDescription>
              </SheetHeader>

              <nav aria-label="All pages" className="mt-6 flex flex-col">
                {NAV_ITEMS.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: link.to === "/" }}
                    activeProps={{ className: "border-primary text-primary" }}
                    inactiveProps={{ className: "border-transparent text-foreground" }}
                    className="border-l-2 px-3 py-2.5 text-sm transition-[color,border-color,padding] hover:border-primary hover:pl-4 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-6 space-y-2 border-t border-border pt-6">
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Instagram className="size-4" aria-hidden="true" /> Instagram
                </a>
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp
                </a>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 flex items-center justify-center rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
                >
                  Start a Project
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
