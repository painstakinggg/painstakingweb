import { useEffect, useRef, type ReactNode } from "react";

/**
 * Scroll-reveal wrapper.
 *
 * IMPORTANT: the server-rendered markup is always visible. The hiding class
 * (`reveal`) is only added by the client once JS is confirmed running, so a
 * browser that fails to hydrate (older Samsung Internet / WebView builds)
 * still shows the full page instead of an empty screen.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li";
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const show = () => {
      node.classList.add("reveal-in");
    };

    if (typeof IntersectionObserver === "undefined") {
      show();
      return;
    }

    // hide first, then reveal on scroll into view
    node.classList.add("reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show();
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    observer.observe(node);

    // safety net: never leave content hidden
    const timer = window.setTimeout(show, 3000);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      style={{ transitionDelay: `${delay}ms` }}
      className={className}
    >
      {children}
    </Tag>
  );
}
