import { useState } from "react";

type Errors = { name?: string; email?: string; message?: string };

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const fieldClass =
  "rounded-md border bg-card px-3 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-1 focus:outline-primary";

export function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    package: "business",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (key: keyof typeof values) => (value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
    setSent(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter your email address.";
    else if (!isValidEmail(values.email.trim()))
      next.email = "Please enter a valid email address.";
    if (!values.message.trim())
      next.message = "Please provide brief details about your project.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setValues({ name: "", email: "", package: "business", message: "" });
    }, 1200);
  };

  const borderFor = (key: keyof Errors) =>
    errors[key] ? "border-destructive" : "border-border";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm text-muted-foreground">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="John Doe"
          value={values.name}
          onChange={(e) => update("name")(e.target.value)}
          className={`${fieldClass} ${borderFor("name")}`}
        />
        {errors.name && <span className="text-xs text-destructive">{errors.name}</span>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm text-muted-foreground">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          placeholder="john@example.com"
          value={values.email}
          onChange={(e) => update("email")(e.target.value)}
          className={`${fieldClass} ${borderFor("email")}`}
        />
        {errors.email && <span className="text-xs text-destructive">{errors.email}</span>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="package" className="text-sm text-muted-foreground">
          Interested Package
        </label>
        <select
          id="package"
          value={values.package}
          onChange={(e) => update("package")(e.target.value)}
          className={`${fieldClass} border-border`}
        >
          <option value="starter">Starter (₦75,000)</option>
          <option value="business">Business (₦150,000)</option>
          <option value="professional">Professional (₦250,000)</option>
          <option value="custom">Custom Requirement</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm text-muted-foreground">
          Project Details
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell us about your business and goals..."
          value={values.message}
          onChange={(e) => update("message")(e.target.value)}
          className={`${fieldClass} ${borderFor("message")}`}
        />
        {errors.message && (
          <span className="text-xs text-destructive">{errors.message}</span>
        )}
      </div>

      <button
        type="submit"
        disabled={sending}
        className="cursor-pointer rounded-md bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-primary-hover disabled:opacity-70"
      >
        {sending ? "Sending..." : "Send Message"}
      </button>

      {sent && (
        <p role="status" className="text-sm text-dot-green">
          Thank you! Your inquiry has been received. We will get back to you within 24
          hours.
        </p>
      )}
    </form>
  );
}
