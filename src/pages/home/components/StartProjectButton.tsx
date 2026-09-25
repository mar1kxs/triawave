import { SITE } from "../../../config/site";
import type { PointerEvent } from "react";
import { isMotionDisabled } from "../../../lib/motion/preferences";
import { AppLink } from "../../../components/ui/AppLink";
import "./StartProjectButton.css";

function followPointer(event: PointerEvent<HTMLSpanElement>) {
  if (isMotionDisabled() || event.pointerType !== "mouse" || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  // Measure the stationary wrapper so the movement never feeds back into itself.
  const target = event.currentTarget;
  const bounds = target.getBoundingClientRect();
  if (!bounds.width || !bounds.height) return;

  const x = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1));
  const y = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1));
  target.style.setProperty("--magnet-x", `${x * 6}px`);
  target.style.setProperty("--magnet-y", `${y * 4}px`);
}

function resetPosition(event: { currentTarget: HTMLSpanElement }) {
  event.currentTarget.style.removeProperty("--magnet-x");
  event.currentTarget.style.removeProperty("--magnet-y");
}

export function StartProjectButton() {
  return (
    <span
      className="start-project-button"
      onPointerMove={followPointer}
      onPointerLeave={resetPosition}
      onPointerCancel={resetPosition}
      onBlur={resetPosition}
    >
      <AppLink href={`mailto:${SITE.email}`} className="button start-project-button__link">Start a project</AppLink>
    </span>
  );
}
