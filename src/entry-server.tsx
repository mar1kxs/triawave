import { renderToString } from "react-dom/server";
import App from "./App";

export { SEO_ROUTES, canonicalForPath, robotsForRoute, seoForPath, structuredDataForPath } from "./seo";
export { SITE } from "./config/site";

export function render(path: string) {
  return renderToString(<App initialPath={path} />);
}
