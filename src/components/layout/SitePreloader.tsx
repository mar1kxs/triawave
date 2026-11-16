import { useEffect, useState } from "react";
import "../../styles/site-preloader.css";

const SEEN_KEY = "twpSeen-v3";

export function SitePreloader() {
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const [hold, setHold] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const always = (window as Window & { TW_PRELOADER_ALWAYS?: boolean }).TW_PRELOADER_ALWAYS;

    try {
      if (window.sessionStorage.getItem(SEEN_KEY) && !always) {
        setVisible(false);
        return;
      }
    } catch {
      // Play the preloader when session storage is unavailable.
    }

    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    root.classList.add("twp-lock");

    let loaded = document.readyState === "complete";
    let fired = false;
    let waitingForLoad = false;
    const startedAt = Date.now();
    let doneTimer = 0;
    let maxWaitTimer = 0;

    const removeLock = () => {
      root.classList.remove("twp-lock");
      root.style.overflow = previousOverflow;
    };

    function openPreloader() {
      if (fired) return;
      fired = true;
      waitingForLoad = false;
      setHold(false);
      setOpen(true);
      window.removeEventListener("load", onLoad);
      removeLock();
      try {
        window.sessionStorage.setItem(SEEN_KEY, "1");
      } catch {
        // The preloader still completes when session storage is unavailable.
      }
      doneTimer = window.setTimeout(() => setDone(true), 1050);
    }

    const onLoad = () => {
      loaded = true;
      if (waitingForLoad) openPreloader();
    };

    window.addEventListener("load", onLoad, { once: true });

    const landedTimer = window.setTimeout(() => {
      if (loaded) {
        openPreloader();
        return;
      }
      setHold(true);
      waitingForLoad = true;
      maxWaitTimer = window.setTimeout(openPreloader, Math.max(0, 6000 - (Date.now() - startedAt)));
    }, 1550);

    return () => {
      window.clearTimeout(landedTimer);
      window.clearTimeout(maxWaitTimer);
      window.clearTimeout(doneTimer);
      window.removeEventListener("load", onLoad);
      removeLock();
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`twp${open ? " open" : ""}${hold ? " hold" : ""}${done ? " done" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(500 500) scale(.32) translate(-176.5 -177.5)">
          <g className="twp-faces">
            <g className="twp-c twp-c1">
              <path d="M61.28 132.918L124.248 96.006L187.217 132.918L124.248 169.831Z" fill="#C93678" />
              <path d="M61.28 132.92L124.248 169.832V243.657L61.28 206.745Z" fill="#D98BAE" />
              <path d="M124.246 169.832L187.214 132.92V206.745L124.246 243.657Z" fill="#A82962" />
            </g>
            <g className="twp-c twp-c2">
              <path d="M155.733 171.069L202.33 143.754L248.926 171.069L202.33 198.384Z" fill="#D98BAE" />
              <path d="M155.733 171.068L202.33 198.384V253.014L155.733 225.699Z" fill="#E5B0C7" />
              <path d="M202.331 198.384L248.927 171.068V225.699L202.331 253.014Z" fill="#C93678" />
            </g>
            <g className="twp-c twp-c3">
              <path d="M224.124 199.622L258.127 179.689L292.13 199.622L258.127 219.555Z" fill="#E5B0C7" />
              <path d="M224.124 199.621L258.127 219.554V259.419L224.124 239.486Z" fill="#D98BAE" />
              <path d="M258.128 219.554L292.131 199.621V239.486L258.128 259.419Z" fill="#C93678" />
            </g>
          </g>
          <g className="twp-k1"><path className="twp-ln twp-hex" pathLength="1" d="M124.25 96.01L187.22 132.92V206.75L124.25 243.66L61.28 206.75V132.92Z" /><path className="twp-ln twp-y" pathLength="1" d="M61.28 132.92L124.25 169.83L187.22 132.92M124.25 169.83V243.66" /></g>
          <g className="twp-k2"><path className="twp-ln twp-hex" pathLength="1" d="M202.33 143.75L248.93 171.07V225.7L202.33 253.01L155.73 225.7V171.07Z" /><path className="twp-ln twp-y" pathLength="1" d="M155.73 171.07L202.33 198.38L248.93 171.07M202.33 198.38V253.01" /></g>
          <g className="twp-k3"><path className="twp-ln twp-hex" pathLength="1" d="M258.13 179.69L292.13 199.62V239.49L258.13 259.42L224.12 239.49V199.62Z" /><path className="twp-ln twp-y" pathLength="1" d="M224.12 199.62L258.13 219.55L292.13 199.62M258.13 219.55V259.42" /></g>
        </g>
      </svg>
      <div className="twp-bg" />
    </div>
  );
}
