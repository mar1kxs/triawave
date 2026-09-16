import { useEffect, useState } from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import { MinimalHeader } from "./components";
import { normalizePath, screenTitleForPath } from "./config/routes";
import { applySeo } from "./seo";

function PlaceholderPage({ title }: { title: string }) {
  return (
    <>
      <MinimalHeader />
      <main className="placeholder-page">
        <h1>{title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
      </main>
    </>
  );
}

export default function App({ initialPath }: { initialPath?: string }) {
  const [path, setPath] = useState(() => normalizePath(
    initialPath ?? (typeof window === "undefined" ? "/" : window.location.pathname),
  ));

  useEffect(() => {
    applySeo(path);
  }, [path]);

  useEffect(() => {
    const onNavigation = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", onNavigation);
    return () => window.removeEventListener("popstate", onNavigation);
  }, []);

  if (path === "/") return <HomePage />;
  if (path === "/about") return <AboutPage />;
  return <PlaceholderPage title={screenTitleForPath(path)} />;
}
