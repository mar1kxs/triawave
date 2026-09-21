export function isMotionDisabled() {
  return typeof window === "undefined"
    || window.matchMedia("(prefers-reduced-motion: reduce)").matches
    || new URLSearchParams(window.location.search).get("motion") === "off";
}
