import { useEffect, useState } from "react";
import { MoreVertical } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

const INTERNAL_MENU_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const INSTAGRAM_URL =
  "https://www.instagram.com/painstaking.web?igsi=ZnN3d3BlYXc2YmN2";
const WHATSAPP_URL = "https://wa.me/2348107348296";

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

        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-haspopup="menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring data-[state=open]:border-primary data-[state=open]:text-primary"
            >
              <MoreVertical className="size-5" aria-hidden="true" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="bottom"
            align="end"
            sideOffset={8}
            className="w-52 border-border bg-card text-foreground shadow-lg"
          >
            {INTERNAL_MENU_LINKS.map((link) => (
              <DropdownMenuItem key={link.href} asChild>
                <a
                  href={link.href}
                  className="cursor-pointer text-muted-foreground hover:text-primary focus:text-primary-foreground"
                >
                  {link.label}
                </a>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator className="bg-border" />
            <DropdownMenuItem asChild>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-muted-foreground hover:text-primary focus:text-primary-foreground"
              >
                Instagram
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-muted-foreground hover:text-primary focus:text-primary-foreground"
              >
                WhatsApp
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
