import { useEffect, useState } from "react";
import AboutPage from "../pages/about/AboutPage";
import HomePage from "../pages/home/HomePage";
import { PlaceholderPage } from "../pages/placeholder/PlaceholderPage";
import { normalizePath, screenTitleForPath } from "../config/routes";
import { applySeo } from "./seo";
import { scrollToDestination, startSmoothScroll, targetForHash } from "../lib/motion/smoothScroll";

export default function App({ initialPath }: { initialPath?: string }) {
  const [path, setPath] = useState(() => normalizePath(
    initialPath ?? (typeof window === "undefined" ? "/" : window.location.pathname),
  ));

  useEffect(() => {
    applySeo(path);
  }, [path]);

  useEffect(() => {
    const stop = startSmoothScroll();
    const frame = requestAnimationFrame(() => {
      const target = targetForHash(window.location.hash);
      if (target) scrollToDestination(target, true);
    });
    return () => {
      cancelAnimationFrame(frame);
      stop();
    };
  }, []);

  useEffect(() => {
    const onNavigation = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", onNavigation);
    return () => window.removeEventListener("popstate", onNavigation);
  }, []);

  if (path === "/") return <HomePage />;
  if (path === "/about") return <AboutPage />;
  return <PlaceholderPage title={screenTitleForPath(path)} />;
}
