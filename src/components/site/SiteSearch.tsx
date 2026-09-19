import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search, ArrowUpRight } from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  CONTACT,
  CREATIVE_PROMPTS,
  FAQS,
  NAV_ITEMS,
  PROJECTS,
  SERVICES,
} from "@/lib/site-data";

type Entry = {
  group: string;
  label: string;
  hint?: string;
  to?: string;
  href?: string;
  keywords: string;
};

function buildIndex(): Entry[] {
  return [
    ...NAV_ITEMS.map((n) => ({
      group: "Pages",
      label: n.label,
      hint: n.to,
      to: n.to,
      keywords: `${n.label} ${n.to} page`,
    })),
    ...SERVICES.map((s) => ({
      group: "Services",
      label: s.title,
      hint: s.summary,
      to: s.to,
      keywords: `${s.title} ${s.summary} ${s.points.join(" ")}`,
    })),
    ...PROJECTS.map((p) => ({
      group: "Portfolio",
      label: p.title,
      hint: `${p.category} — ${p.body}`,
      to: "/portfolio",
      keywords: `${p.title} ${p.category} ${p.body}`,
    })),
    ...CREATIVE_PROMPTS.map((p) => ({
      group: "AI Creative Prompts",
      label: p.title,
      hint: `${p.category} — ${p.description}`,
      to: "/creative-prompts",
      keywords: `${p.title} ${p.category} ${p.description} ${p.keywords.join(" ")} prompt ai creative marketing`,
    })),
    ...FAQS.map((f) => ({
      group: "FAQ",
      label: f.question,
      hint: f.category,
      to: "/faq",
      keywords: `${f.question} ${f.answer} ${f.category}`,
    })),
    {
      group: "Contact",
      label: "Chat on WhatsApp",
      hint: CONTACT.whatsappNumberDisplay,
      href: CONTACT.whatsappUrl,
      keywords: "whatsapp chat message phone contact",
    },
    {
      group: "Contact",
      label: "Send an email",
      hint: CONTACT.email,
      href: CONTACT.emailUrl,
      keywords: "email mail contact enquiry",
    },
    {
      group: "Contact",
      label: "Instagram",
      hint: "@painstaking.web",
      href: CONTACT.instagramUrl,
      keywords: "instagram social profile",
    },
    {
      group: "Contact",
      label: "Snapchat",
      hint: `@${CONTACT.snapchatHandle}`,
      href: CONTACT.snapchatUrl,
      keywords: "snapchat social profile",
    },
  ];
}

export function SiteSearch({
  variant = "button",
  className = "",
}: {
  variant?: "button" | "bar";
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const index = useMemo(buildIndex, []);
  const groups = useMemo(
    () => Array.from(new Set(index.map((e) => e.group))),
    [index],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const select = (entry: Entry) => {
    setOpen(false);
    if (entry.href) {
      window.open(entry.href, "_blank", "noopener,noreferrer");
      return;
    }
    if (entry.to) navigate({ to: entry.to as never });
  };

  return (
    <>
      {variant === "bar" ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Search this site"
          className={`flex w-full items-center gap-2 truncate rounded bg-background px-3 py-1.5 text-left text-xs text-muted-foreground transition-colors hover:text-primary ${className}`}
        >
          <Search className="size-3.5 shrink-0" aria-hidden="true" />
          <span className="truncate">Search this site — pages, services, work…</span>
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Search this site"
          className={`inline-flex h-10 items-center gap-2 rounded-md border border-border bg-card px-3 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${className}`}
        >
          <Search className="size-4" aria-hidden="true" />
          <span className="hidden lg:inline">Search</span>
          <kbd className="hidden rounded border border-border px-1.5 py-0.5 text-[0.65rem] lg:inline">
            ⌘K
          </kbd>
        </button>
      )}

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search pages, services, work, prompts and FAQs…" />
        <CommandList>
          <CommandEmpty>No matches found.</CommandEmpty>
          {groups.map((group) => (
            <CommandGroup key={group} heading={group}>
              {index
                .filter((e) => e.group === group)
                .map((entry) => (
                  <CommandItem
                    key={`${group}-${entry.label}`}
                    value={entry.keywords}
                    onSelect={() => select(entry)}
                    className="cursor-pointer"
                  >
                    <span className="flex min-w-0 flex-1 flex-col">
                      <span className="truncate text-foreground">{entry.label}</span>
                      {entry.hint && (
                        <span className="truncate text-xs text-muted-foreground">
                          {entry.hint}
                        </span>
                      )}
                    </span>
                    {entry.href && (
                      <ArrowUpRight
                        className="size-3.5 text-muted-foreground"
                        aria-hidden="true"
                      />
                    )}
                  </CommandItem>
                ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
