import { useEffect, useRef } from "react";
import { isMotionDisabled } from "../../lib/motion/preferences";

export function useDeliverableMotion() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    const revealed = new WeakSet<Element>();
    let observer: IntersectionObserver | null = null;

    const reset = () => {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
    const start = () => {
      reset();
      if (isMotionDisabled()) return;
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || revealed.has(entry.target)) return;
          revealed.add(entry.target);
          observer?.unobserve(entry.target);
          // Animate on entry, keeping SSR and disabled-motion content visible.
          const animation = entry.target.animate([
            { opacity: 0, transform: "translateY(24px)" },
            { opacity: 1, transform: "translateY(0)" },
          ], { duration: 700, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "backwards" });
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        });
      }, { threshold: 0.08 });
      root.querySelectorAll(".strategy-deliverable").forEach((card) => {
        if (!revealed.has(card)) observer?.observe(card);
      });
    };

    start();
    preference.addEventListener("change", start);
    return () => {
      reset();
      preference.removeEventListener("change", start);
    };
  }, []);

  return rootRef;
}
