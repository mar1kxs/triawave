import Lenis from "lenis";
import { isMotionDisabled } from "./preferences";

let controller: Lenis | null = null;

/** One window-based controller; native layout, sticky and touch scrolling remain intact. */
export function startSmoothScroll() {
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const staticMode = new URLSearchParams(window.location.search).get("motion") === "off";
  let instance: Lenis | null = null;

  const sync = () => {
    instance?.destroy();
    if (controller === instance) controller = null;
    instance = null;
    document.documentElement.classList.toggle("home-motion-static", staticMode);
    if (isMotionDisabled()) return;

    instance = new Lenis({
      autoRaf: true,
      lerp: 0.11,
      smoothWheel: true,
      syncTouch: false,
      anchors: false,
      prevent: (node) => node.matches("[data-lenis-prevent], .mobile-nav, .mega-menu"),
      virtualScroll: ({ event }) => !event.ctrlKey && !event.shiftKey,
    });
    controller = instance;
  };

  sync();
  preference.addEventListener("change", sync);
  window.addEventListener("popstate", stopScrollMomentum);
  return () => {
    preference.removeEventListener("change", sync);
    window.removeEventListener("popstate", stopScrollMomentum);
    instance?.destroy();
    if (controller === instance) controller = null;
    document.documentElement.classList.remove("home-motion-static");
  };
}

export function stopScrollMomentum() {
  controller?.scrollTo(window.scrollY, { immediate: true });
}

export function scrollToDestination(target: HTMLElement | number, immediate = false) {
  const headerHeight = document.querySelector(".site-header")?.getBoundingClientRect().height ?? 0;
  const offset = typeof target === "number" ? 0 : -headerHeight - 16;
  const jump = immediate || isMotionDisabled();
  if (controller) {
    controller.resize();
    controller.scrollTo(target, { immediate: jump, offset });
  } else {
    const top = typeof target === "number" ? target : window.scrollY + target.getBoundingClientRect().top + offset;
    window.scrollTo({ top, behavior: jump ? "instant" : "smooth" });
  }
}

export function targetForHash(hash: string) {
  if (!hash) return null;
  try {
    return document.getElementById(decodeURIComponent(hash.slice(1)));
  } catch {
    return null;
  }
}
