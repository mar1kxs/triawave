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
        section?.style.removeProperty("--process-intro-top");
        setActiveStep(0);
        return;
      }

      const steps = section.querySelectorAll<HTMLElement>(".process-step");
      const intro = section.querySelector<HTMLElement>(".process-intro");
      const activationLine = Math.max(55, Math.min(
        window.innerHeight * 0.55,
        window.innerHeight - (intro?.offsetHeight ?? 0) - 32,
      ));
      // Delay the intro's sticky position until the second step reaches the activation line.
      const secondStepOffset = steps.length > 1
        ? steps[1].offsetTop - steps[0].offsetTop
        : 0;
      section.style.setProperty("--process-intro-top", `${activationLine - secondStepOffset}px`);
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
    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
      const intro = section.querySelector<HTMLElement>(".process-intro");
      if (intro) observer.observe(intro);
      section.querySelectorAll<HTMLElement>(".process-step").forEach((step) => observer.observe(step));
    }
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    motionQuery.addEventListener("change", scheduleUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      motionQuery.removeEventListener("change", scheduleUpdate);
      observer.disconnect();
      section?.style.removeProperty("--process-intro-top");
    };
  }, [stepCount]);

  return { sectionRef, activeStep };
}
