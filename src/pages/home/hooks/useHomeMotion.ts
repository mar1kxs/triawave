import { useEffect, useRef } from "react";
import { isMotionDisabled } from "../../../lib/motion/preferences";

export function useHomeMotion() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    let observer: IntersectionObserver | null = null;
    document.documentElement.classList.add("home-motion-page");

    const reset = () => {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
    const start = () => {
      reset();
      if (isMotionDisabled()) return;

      const play = (element: HTMLElement, delay = 0) => {
        const line = element.classList.contains("motion-line-inner");
        const animation = element.animate([
          { opacity: 0, transform: line ? "translateY(105%) rotate(1deg)" : "translateY(18px)" },
          { opacity: 1, transform: "translateY(0) rotate(0deg)" },
        ], { duration: line ? 950 : 800, delay, easing: "cubic-bezier(0.25, 0.8, 0.3, 1)", fill: "backwards" });
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      };

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          if (element.matches("h1, h2")) {
            element.querySelectorAll<HTMLElement>(".motion-line-inner").forEach((line, index) => play(line, index * 80));
          } else {
            // Heading-bearing Reveal wrappers animate their lines, not the whole mask twice.
            play(element);
          }
          observer?.unobserve(element);
        });
      }, { threshold: 0.08 });

      root.querySelectorAll<HTMLElement>("h1, h2, .reveal, .cta-card").forEach((element) => {
        if (element.classList.contains("reveal") && element.querySelector("h1, h2")) return;
        observer?.observe(element);
      });
    };

    start();
    preference.addEventListener("change", start);
    return () => {
      reset();
      preference.removeEventListener("change", start);
      document.documentElement.classList.remove("home-motion-page");
    };
  }, []);

  return rootRef;
}
