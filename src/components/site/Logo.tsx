import { Link } from "@tanstack/react-router";

import logoMark from "@/assets/logo-mark.png";

export function Logo({
  onNavigate,
  size = "md",
}: {
  onNavigate?: () => void;
  size?: "sm" | "md";
}) {
  return (
    <Link
      to="/"
      onClick={onNavigate}
      aria-label="Painstaking Web Development — home"
      className="group flex items-center gap-3"
    >
      <span
        className={`grid shrink-0 place-items-center rounded-lg border border-border bg-card transition-[border-color,box-shadow] duration-300 group-hover:border-primary group-hover:shadow-glow ${
          size === "sm" ? "size-9" : "size-10"
        }`}
      >
        <img
          src={logoMark}
          alt=""
          width={1024}
          height={1024}
          className={size === "sm" ? "size-5" : "size-6"}
        />
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-extrabold tracking-[0.0625em] text-heading sm:text-base">
          PAINSTAKING
        </span>
        <span className="block text-[0.6rem] tracking-[0.18em] text-primary sm:text-[0.65rem]">
          WEB DEVELOPMENT
        </span>
      </span>
    </Link>
  );
}
