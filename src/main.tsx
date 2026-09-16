import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "@fontsource/space-grotesk/latin-400.css";
import "@fontsource/space-grotesk/latin-500.css";
import "@fontsource/space-grotesk/latin-700.css";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/dm-sans/latin-600.css";
import App from "./App";

// CSS order is intentional: measured Figma fidelity overrides load after the base styles.
import "./styles.css";
import "./home-fidelity.css";
import "./shared-fidelity.css";
import "./about-fidelity.css";

const root = document.getElementById("root")!;
const app = (
  <React.StrictMode>
    <App initialPath={window.location.pathname} />
  </React.StrictMode>
);

if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
