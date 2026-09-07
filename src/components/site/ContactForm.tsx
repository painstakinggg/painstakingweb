import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

import { CONTACT, PLANS, SERVICES } from "@/lib/site-data";
import { btnPrimary } from "@/lib/ui-classes";

const inputClass =
  "w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";
const labelClass = "mb-1.5 block text-sm text-muted-foreground";

export function ContactForm() {
  const [sent, setSent] = useState(false);
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
  ) => setValues((v) => ({ ...v, [key]: e.target.value }));

  const whatsappHandoff = `${CONTACT.whatsappUrl}?text=${encodeURIComponent(
    `Hi Painstaking Web Development, I'd like to start a project.\n\nName: ${values.name}\nBusiness: ${values.business}\nService: ${values.service}\nPackage: ${values.budget}\nTimeline: ${values.timeline}\n\n${values.details}`,
  )}`;

  if (sent) {
    return (
      <div className="rounded-xl border border-primary/50 bg-card p-8 text-center">
        <CheckCircle2 className="mx-auto mb-4 size-10 text-primary" aria-hidden="true" />
        <h2 className="text-xl font-semibold text-heading">Enquiry ready to send</h2>
        <p className="mx-auto mt-3 max-w-sm text-sm text-muted-foreground">
          Your details are summarised below. Send them straight to us on WhatsApp or by
          email and we will reply with next steps.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={whatsappHandoff}
            target="_blank"
            rel="noopener noreferrer"
            className={btnPrimary}
          >
            Send on WhatsApp
          </a>
          <a
            href={`${CONTACT.emailUrl}?subject=${encodeURIComponent(
              `Project enquiry — ${values.business || values.name}`,
            )}&body=${encodeURIComponent(
              `Name: ${values.name}\nBusiness: ${values.business}\nEmail: ${values.email}\nWhatsApp: ${values.whatsapp}\nService: ${values.service}\nPackage: ${values.budget}\nTimeline: ${values.timeline}\n\n${values.details}`,
            )}`}
            className="inline-flex items-center justify-center rounded-md border border-border px-7 py-3.5 font-semibold transition-colors hover:border-primary"
          >
            Send by email
          </a>
        </div>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm text-primary hover:underline"
        >
          Edit my details
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-xl border border-border bg-card p-7"
    >
      <h2 className="mb-1 text-xl font-semibold text-heading">Project enquiry</h2>
      <p className="mb-6 text-sm text-muted-foreground">
        The more detail you share, the more useful our first reply will be.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="cf-name">
            Your name *
          </label>
          <input id="cf-name" required value={values.name} onChange={set("name")} className={inputClass} placeholder="Full name" />
        </div>
        <div>
          <label className={labelClass} htmlFor="cf-business">
            Business name
          </label>
          <input id="cf-business" value={values.business} onChange={set("business")} className={inputClass} placeholder="Business or brand" />
        </div>
        <div>
          <label className={labelClass} htmlFor="cf-email">
            Email *
          </label>
          <input id="cf-email" type="email" required value={values.email} onChange={set("email")} className={inputClass} placeholder="you@example.com" />
        </div>
        <div>
          <label className={labelClass} htmlFor="cf-whatsapp">
            WhatsApp number
          </label>
          <input id="cf-whatsapp" type="tel" value={values.whatsapp} onChange={set("whatsapp")} className={inputClass} placeholder="+234…" />
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
          <input id="cf-timeline" value={values.timeline} onChange={set("timeline")} className={inputClass} placeholder="e.g. launch within 3 weeks" />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="cf-details">
            Project details *
          </label>
          <textarea id="cf-details" required rows={5} value={values.details} onChange={set("details")} className={inputClass} placeholder="What does your business do, and what should the website achieve?" />
        </div>
      </div>

      <button type="submit" className={`${btnPrimary} mt-6 w-full`}>
        Review & send enquiry
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        This form prepares your enquiry in the browser — no data is stored. You send it
        via WhatsApp or email on the next step.
      </p>
    </form>
  );
}
