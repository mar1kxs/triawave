import { useEffect, useRef, useState } from "react";
import { isMotionDisabled } from "../../../lib/motion/preferences";

/**
 * Tracks active steps with scroll geometry on desktop and an observer on
 * mobile, avoiding a per-scroll handler on smaller devices.
 */
export function useProcessProgress(stepCount: number) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: no-preference)");
    const desktopQuery = window.matchMedia("(min-width: 901px)");
    let frame = 0;
    let resizeObserver: ResizeObserver | null = null;
    let stepObserver: IntersectionObserver | null = null;
    let listening = false;
    const section = sectionRef.current;

    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      if (!section || !motionQuery.matches || isMotionDisabled() || !desktopQuery.matches) return;

      const steps = section.querySelectorAll<HTMLElement>(".process-step");
      const intro = section.querySelector<HTMLElement>(".process-intro");
      const activationLine = Math.max(55, Math.min(
        window.innerHeight * 0.55,
        window.innerHeight - (intro?.offsetHeight ?? 0) - 32,
      ));
      let nextStep = 0;
      steps.forEach((step, index) => {
        if (index >= stepCount) return;
        if (step.getBoundingClientRect().top <= activationLine) nextStep = index;
      });

      setActiveStep((current) => current === nextStep ? current : nextStep);
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    const stopTracking = (reset = true) => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      resizeObserver?.disconnect();
      resizeObserver = null;
      stepObserver?.disconnect();
      stepObserver = null;
      listening = false;
      if (reset) setActiveStep(0);
    };

    const syncTracking = () => {
      if (!motionQuery.matches || isMotionDisabled()) {
        stopTracking();
        return;
      }
      if (listening || !section) return;
      listening = true;
      if (desktopQuery.matches) {
        resizeObserver = new ResizeObserver(scheduleUpdate);
        resizeObserver.observe(section);
        window.addEventListener("scroll", scheduleUpdate, { passive: true });
        window.addEventListener("resize", scheduleUpdate);
        scheduleUpdate();
      } else {
        const steps = Array.from(section.querySelectorAll<HTMLElement>(".process-step")).slice(0, stepCount);
        stepObserver = new IntersectionObserver((entries) => {
          if (!entries.some((entry) => entry.isIntersecting)) return;
          const activationLine = window.innerHeight * 0.5;
          let nextStep = 0;
          steps.forEach((step, index) => {
            if (step.getBoundingClientRect().top <= activationLine) nextStep = index;
          });
          setActiveStep((current) => current === nextStep ? current : nextStep);
        }, { rootMargin: "-49% 0px -49% 0px", threshold: 0 });
        steps.forEach((step) => stepObserver?.observe(step));
      }
    };
    const syncBreakpoint = () => {
      stopTracking();
      syncTracking();
    };

    syncTracking();
    motionQuery.addEventListener("change", syncTracking);
    desktopQuery.addEventListener("change", syncBreakpoint);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      stopTracking(false);
      motionQuery.removeEventListener("change", syncTracking);
      desktopQuery.removeEventListener("change", syncBreakpoint);
    };
  }, [stepCount]);

  return { sectionRef, activeStep };
}
