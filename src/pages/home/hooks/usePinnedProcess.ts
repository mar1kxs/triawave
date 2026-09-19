import { useEffect, useRef, useState } from "react";

/**
 * Maps desktop scroll progress to the active process step. Mobile and
 * reduced-motion users keep the static, fully readable list.
 */
export function usePinnedProcess(stepCount: number) {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const motionQuery = window.matchMedia("(min-width: 901px) and (prefers-reduced-motion: no-preference)");
    let frame = 0;

    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      const pin = pinRef.current;

      if (!section || !pin || !motionQuery.matches) {
        document.documentElement.classList.remove("process-header-fixed");
        setActiveStep(0);
        return;
      }

      const sectionTop = window.scrollY + section.getBoundingClientRect().top;
      const scrollDistance = Math.max(1, section.offsetHeight - pin.offsetHeight);
      const progress = Math.min(1, Math.max(0, (window.scrollY - sectionTop) / scrollDistance));
      const nextStep = Math.min(stepCount - 1, Math.floor(progress * stepCount));

      setActiveStep((current) => current === nextStep ? current : nextStep);
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    motionQuery.addEventListener("change", scheduleUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      motionQuery.removeEventListener("change", scheduleUpdate);
      document.documentElement.classList.remove("process-header-fixed");
    };
  }, [stepCount]);

  return { sectionRef, pinRef, activeStep };
}
