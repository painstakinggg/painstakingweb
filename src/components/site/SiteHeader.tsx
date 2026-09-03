import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-100 border-b bg-background/85 backdrop-blur-xl transition-[box-shadow,border-color] duration-200 ${
        scrolled ? "border-primary/30 shadow-header" : "border-border shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-[var(--container-site)] items-center justify-between px-6 py-4">
        <a href="#home" className="leading-tight" onClick={() => setOpen(false)}>
          <span className="block font-extrabold tracking-[0.0625em] text-heading">
            PAINSTAKING
          </span>
          <span className="block text-xs tracking-[0.125em] text-primary">
            WEB DEVELOPMENT
          </span>
        </a>

        <nav className="hidden md:flex md:items-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="ml-6 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background/95 px-6 pb-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-3 text-sm text-muted-foreground transition-colors last:border-b-0 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
