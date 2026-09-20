import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, Mail, MessageCircle } from "lucide-react";

import { CONTACT, PLANS, SERVICES } from "@/lib/site-data";
import { btnPrimary, btnSecondary } from "@/lib/ui-classes";

const inputClass =
  "w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";
const labelClass = "mb-1.5 block text-sm text-muted-foreground";

const MAX_NAME = 120;
const MAX_BUSINESS = 120;
const MAX_EMAIL = 254;
const MAX_WHATSAPP = 40;
const MAX_TIMELINE = 120;
const MAX_DETAILS = 2000;

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [values, setValues] = useState({
    name: "",
    business: "",
    email: "",
    whatsapp: "",
    service: SERVICES[0]?.title ?? "",
    budget: PLANS[0]?.name ?? "",
    timeline: "",
    details: "",
  });

  const set = (key: keyof typeof values) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const raw = e.target.value;
    const limits: Record<keyof typeof values, number> = {
      name: MAX_NAME,
      business: MAX_BUSINESS,
      email: MAX_EMAIL,
      whatsapp: MAX_WHATSAPP,
      service: Number.MAX_SAFE_INTEGER,
      budget: Number.MAX_SAFE_INTEGER,
      timeline: MAX_TIMELINE,
      details: MAX_DETAILS,
    };
    setValues((v) => ({ ...v, [key]: raw.slice(0, limits[key]) }));
  };

  const whatsappHandoff = useMemo(
    () =>
      `${CONTACT.whatsappUrl}?text=${encodeURIComponent(
        `Hi Painstaking Web Development, I'd like to start a project.\n\nName: ${values.name.trim()}\nBusiness: ${values.business.trim() || "—"}\nEmail: ${values.email.trim()}\nWhatsApp: ${values.whatsapp.trim() || "—"}\nService: ${values.service}\nPackage: ${values.budget}\nTimeline: ${values.timeline.trim() || "—"}\n\n${values.details.trim()}`,
      )}`,
    [values],
  );

  const emailHandoff = useMemo(
    () =>
      `${CONTACT.emailUrl}?subject=${encodeURIComponent(
        `Project enquiry — ${values.business.trim() || values.name.trim()}`,
      )}&body=${encodeURIComponent(
        `Name: ${values.name.trim()}\nBusiness: ${values.business.trim() || "—"}\nEmail: ${values.email.trim()}\nWhatsApp: ${values.whatsapp.trim() || "—"}\nService: ${values.service}\nPackage: ${values.budget}\nTimeline: ${values.timeline.trim() || "—"}\n\n${values.details.trim()}`,
      )}`,
    [values],
  );

  useEffect(() => {
    if (status !== "success") return;
    const win = window.open(whatsappHandoff, "_blank", "noopener,noreferrer");
    if (!win) {
      window.location.href = whatsappHandoff;
    }
  }, [status, whatsappHandoff]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = values.name.trim();
    const email = values.email.trim();
    const details = values.details.trim();

    if (!name || !email || !details) {
      setStatus("error");
      setErrorMessage("Please fill in your name, email and project details.");
      return;
    }

    if (!isValidEmail(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("success");
  };

  const reset = () => {
    setStatus("idle");
    setErrorMessage("");
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border border-primary/50 bg-card p-8 text-center">
        <CheckCircle2 className="mx-auto mb-4 size-10 text-primary" aria-hidden="true" />
        <h2 className="text-xl font-semibold text-heading">Enquiry sent</h2>
        <p className="mx-auto mt-3 max-w-sm text-sm text-muted-foreground">
          A WhatsApp chat has been opened with your enquiry details. Tap send in WhatsApp
          to deliver it, and we will reply with next steps.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={whatsappHandoff}
            target="_blank"
            rel="noopener noreferrer"
            className={btnPrimary}
          >
            <MessageCircle className="mr-2 size-4" aria-hidden="true" />
            Open WhatsApp again
          </a>
          <a
            href={emailHandoff}
            className={btnSecondary}
          >
            <Mail className="mr-2 size-4" aria-hidden="true" />
            Send by email instead
          </a>
        </div>
        <button
          type="button"
          onClick={reset}
          className="mt-6 text-sm text-primary hover:underline"
        >
          Edit my details
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-border bg-card p-7"
      aria-describedby="form-status"
      noValidate
    >
      <h2 className="mb-1 text-xl font-semibold text-heading">Project enquiry</h2>
      <p className="mb-6 text-sm text-muted-foreground">
        The more detail you share, the more useful our first reply will be.
      </p>

      {status === "error" && (
        <div
          id="form-status"
          role="alert"
          className="mb-5 rounded-md border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive"
        >
          {errorMessage}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="cf-name">
            Your name *
          </label>
          <input id="cf-name" required value={values.name} onChange={set("name")} className={inputClass} placeholder="Full name" maxLength={MAX_NAME} />
        </div>
        <div>
          <label className={labelClass} htmlFor="cf-business">
            Business name
          </label>
          <input id="cf-business" value={values.business} onChange={set("business")} className={inputClass} placeholder="Business or brand" maxLength={MAX_BUSINESS} />
        </div>
        <div>
          <label className={labelClass} htmlFor="cf-email">
            Email *
          </label>
          <input id="cf-email" type="email" required value={values.email} onChange={set("email")} className={inputClass} placeholder="you@example.com" maxLength={MAX_EMAIL} />
        </div>
        <div>
          <label className={labelClass} htmlFor="cf-whatsapp">
            WhatsApp number
          </label>
          <input id="cf-whatsapp" type="tel" value={values.whatsapp} onChange={set("whatsapp")} className={inputClass} placeholder="+234…" maxLength={MAX_WHATSAPP} />
        </div>
        <div>
          <label className={labelClass} htmlFor="cf-service">
            Service needed
          </label>
          <select id="cf-service" value={values.service} onChange={set("service")} className={inputClass}>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="cf-budget">
            Package of interest
          </label>
          <select id="cf-budget" value={values.budget} onChange={set("budget")} className={inputClass}>
            {PLANS.map((p) => (
              <option key={p.name} value={p.name}>
                {p.name} — {p.price}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="cf-timeline">
            Ideal timeline
          </label>
          <input id="cf-timeline" value={values.timeline} onChange={set("timeline")} className={inputClass} placeholder="e.g. launch within 3 weeks" maxLength={MAX_TIMELINE} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="cf-details">
            Project details *
          </label>
          <textarea id="cf-details" required rows={5} value={values.details} onChange={set("details")} className={inputClass} placeholder="What does your business do, and what should the website achieve?" maxLength={MAX_DETAILS} />
        </div>
      </div>

      <button
        type="submit"
        className={`${btnPrimary} mt-6 w-full`}
      >
        Send enquiry on WhatsApp
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        Submissions open a WhatsApp chat pre-filled with your enquiry. No data is stored
        on our servers. You can also email us directly at{" "}
        <a href={CONTACT.emailUrl} className="text-primary hover:underline">
          {CONTACT.email}
        </a>
        .
      </p>
    </form>
  );
}
