export function isMotionDisabled() {
  return typeof window === "undefined"
    || window.matchMedia("(prefers-reduced-motion: reduce)").matches
    || document.documentElement.classList.contains("home-motion-static")
    || new URLSearchParams(window.location.search).get("motion") === "off";
}
