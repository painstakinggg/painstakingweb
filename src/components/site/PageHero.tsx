import type { ReactNode } from "react";

export function PageHero({
  tag,
  title,
  highlight,
  children,
  actions,
}: {
  tag: string;
  title: string;
  highlight?: string;
  children?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="hero-glow" aria-hidden="true" />
      <div className="site-section relative pt-16 pb-14">
        <span className="section-tag animate-fade-up">{tag}</span>
        <h1 className="animate-fade-up mb-4 max-w-3xl text-3xl leading-[1.15] font-bold text-heading sm:text-4xl md:text-5xl">
          {title} {highlight && <span className="text-primary">{highlight}</span>}
        </h1>
        {children && (
          <div className="animate-fade-up-slow max-w-2xl text-lg text-muted-foreground">
            {children}
          </div>
        )}
        {actions && <div className="mt-8 flex flex-wrap gap-4">{actions}</div>}
      </div>
    </section>
  );
}
