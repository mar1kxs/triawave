import { renderToString } from "react-dom/server";
import App from "./app/App";

export { SEO_ROUTES, canonicalForPath, robotsForRoute, seoForPath, structuredDataForPath } from "./app/seo";
export { SITE } from "./config/site";

export function render(path: string) {
  return renderToString(<App initialPath={path} />);
}
