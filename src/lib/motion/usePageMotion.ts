import { useEffect } from "react";
import { isMotionDisabled } from "./preferences";

/** Reveal page content once, with the same timing and easing as Home. */
export function usePageMotion(path: string) {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("main:not(.home-page)");
    if (!root) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    const revealed = new Set<Element>();
    let observer: IntersectionObserver | null = null;
    const selector = "h1, h2, p, .eyebrow, .section-head, .inner-section-label, .reveal, .inner-cubes, .work-page-placeholder, .strategy-deliverable, .strategy-project-strip > div, .strategy-step-grid > article, .strategy-faq details, .strategy-signature, .strategy-useful, .strategy-breadcrumb, .strategy-hero-meta, .inner-cta-copy, .button";
    // Animate a card as one unit instead of animating it and its text together.
    const targets = Array.from(root.querySelectorAll<HTMLElement>(selector)).filter(
      (element) => !element.parentElement?.closest(selector),
    );

    const reset = () => {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
    const start = () => {
      reset();
      if (isMotionDisabled()) return;
      observer = new IntersectionObserver((entries) => {
        let stagger = 0;
        entries.forEach((entry) => {
          if (!entry.isIntersecting || revealed.has(entry.target)) return;
          const element = entry.target as HTMLElement;
          revealed.add(element);
          observer?.unobserve(element);
          // Do not animate a control while the user is interacting with it.
          if (element.contains(document.activeElement)) return;
          const animation = element.animate([
            { opacity: 0, transform: "translateY(18px)" },
            { opacity: 1, transform: "translateY(0)" },
          ], {
            duration: element.matches("h1, h2") ? 950 : 800,
            delay: Math.min(stagger++ * 70, 210),
            easing: "cubic-bezier(0.25, 0.8, 0.3, 1)",
            fill: "backwards",
          });
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        });
      }, { threshold: 0.08 });
      targets.forEach((element) => {
        if (!revealed.has(element)) observer?.observe(element);
      });
    };

    start();
    preference.addEventListener("change", start);
    return () => {
      reset();
      preference.removeEventListener("change", start);
    };
  }, [path]);
}
