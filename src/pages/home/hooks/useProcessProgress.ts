import { useEffect, useRef, useState } from "react";
import { isMotionDisabled } from "../../../lib/motion/preferences";

/**
 * Tracks actual step positions without a viewport-sized pin or scroll spacer.
 * Mobile and reduced-motion users keep the static, fully readable list.
 */
export function useProcessProgress(stepCount: number) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const motionQuery = window.matchMedia("(min-width: 901px) and (prefers-reduced-motion: no-preference)");
    let frame = 0;

    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      if (!section || !motionQuery.matches || isMotionDisabled()) {
        setActiveStep(0);
        return;
      }

      const steps = section.querySelectorAll<HTMLElement>(".process-step");
      const activationLine = window.innerHeight * 0.55;
      let nextStep = 0;
      steps.forEach((step, index) => {
        if (step.getBoundingClientRect().top <= activationLine) nextStep = index;
      });

      setActiveStep((current) => current === nextStep ? current : nextStep);
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    const observer = new ResizeObserver(scheduleUpdate);
    if (sectionRef.current) observer.observe(sectionRef.current);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    motionQuery.addEventListener("change", scheduleUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      motionQuery.removeEventListener("change", scheduleUpdate);
      observer.disconnect();
    };
  }, [stepCount]);

  return { sectionRef, activeStep };
}
