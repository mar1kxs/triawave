import { useEffect, useRef } from "react";
import { isMotionDisabled } from "../../lib/motion/preferences";

export function useDeliverableMotion() {
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const cards = Array.from(root.querySelectorAll<HTMLElement>(".strategy-deliverable"));
    const cubes = cards.map((card) => Array.from(card.querySelectorAll<HTMLElement>(".strategy-cube-anchor")));
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let needsMeasure = true;
    let enabled = false;
    let starts: number[] = [];
    let heights: number[] = [];
    let artStarts: number[] = [];
    let artHeights: number[] = [];
    let pinTop = 0;
    let step = 0;
    const clear = () => {
      delete root.dataset.stack;
      cards.forEach((card) => {
        card.style.removeProperty("--stack-top");
        card.style.removeProperty("--stack-scale");
      });
      cubes.flat().forEach((cube) => {
        ["--cube-open", "--cube-frame"].forEach((property) => cube.style.removeProperty(property));
      });
    };
    const measure = () => {
      clear();
      enabled = !isMotionDisabled();
      if (!enabled) return;
      step = window.innerWidth <= 700 ? 8 : 14;
      heights = cards.map((card) => card.getBoundingClientRect().height);
      starts = cards.map((card) => card.getBoundingClientRect().top + window.scrollY);
      const artRects = cards.map((card) => card.querySelector(".strategy-card-art")!.getBoundingClientRect());
      artStarts = artRects.map((rect) => rect.top + window.scrollY);
      artHeights = artRects.map((rect) => rect.height);
      const headerHeight = document.querySelector(".site-header")?.getBoundingClientRect().height ?? 0;
      // Tall cards scroll fully into view before pinning, including on short phones.
      pinTop = Math.min(headerHeight + 24, window.innerHeight - Math.max(...heights) - step * (cards.length - 1) - 24);
      cards.forEach((card, index) => card.style.setProperty("--stack-top", `${pinTop + index * step}px`));
      root.dataset.stack = "true";
    };
    const render = () => {
      frame = 0;
      if (needsMeasure) { measure(); needsMeasure = false; }
      if (!enabled) return;
      cards.forEach((card, index) => {
        const next = starts[index + 1];
        const distance = next === undefined ? Infinity : next - window.scrollY - (pinTop + (index + 1) * step);
        const progress = Math.min(1, Math.max(0, 1 - distance / heights[index]));
        const eased = progress * progress * (3 - 2 * progress);
        card.style.setProperty("--stack-scale", `${1 - eased * 0.045}`);
        // Exploded-view assembly: the three faces reveal an inner frame, then reunite.
        const travel = Math.min(1, Math.max(0, (window.scrollY + window.innerHeight * 0.85 - artStarts[index]) / (window.innerHeight * 0.7 + artHeights[index] * 0.35)));
        cubes[index].forEach((cube, cubeIndex) => {
          const order = index % 2 ? 2 - cubeIndex : cubeIndex;
          const phase = Math.min(1, Math.max(0, (travel - order * 0.18) / 0.58));
          const pulse = Math.sin(phase * Math.PI) ** 2;
          cube.style.setProperty("--cube-open", `${pulse * 22}px`);
          cube.style.setProperty("--cube-frame", `${pulse * 0.4}`);
        });
      });
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(render); };
    const resize = () => { needsMeasure = true; schedule(); };
    const observer = new ResizeObserver(resize);
    cards.forEach((card) => observer.observe(card));
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", resize);
    preference.addEventListener("change", resize);
    schedule();
    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", resize);
      preference.removeEventListener("change", resize);
      clear();
    };
  }, []);
  return rootRef;
}
