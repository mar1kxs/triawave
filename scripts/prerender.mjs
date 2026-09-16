import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import {
  SITE,
  SEO_ROUTES,
  canonicalForPath,
  render,
  robotsForRoute,
  seoForPath,
  structuredDataForPath,
} from "../dist-ssr/entry-server.js";

const projectRoot = new URL("..", import.meta.url).pathname;
const distDir = join(projectRoot, "dist");
const template = await readFile(join(distDir, "index.html"), "utf8");

const escapeHtml = (value) => value
  .replaceAll("&", "&amp;")
  .replaceAll('"', "&quot;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;");

function headForPath(path) {
  const route = seoForPath(path);
  const canonical = canonicalForPath(path);
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  const structuredData = structuredDataForPath(path);
  const jsonLd = structuredData
    ? `\n    <script id="structured-data" type="application/ld+json">${JSON.stringify(structuredData).replaceAll("<", "\\u003c")}</script>`
    : "";

  return `<!-- seo:start -->
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="${robotsForRoute(route)}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${escapeHtml(SITE.name)}" />
    <meta property="og:locale" content="${escapeHtml(SITE.locale)}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${canonical}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />${jsonLd}
    <!-- seo:end -->`;
}

function outputPath(path) {
  return path === "/" ? join(distDir, "index.html") : join(distDir, `${path.slice(1)}.html`);
}

async function writeRoute(path) {
  const appHtml = render(path);
  const html = template
    .replace(/<!-- seo:start -->[\s\S]*?<!-- seo:end -->/, headForPath(path))
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  const destination = outputPath(path);
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, html);
}

for (const route of SEO_ROUTES) {
  await writeRoute(route.path);
}
await writeRoute("/404");

const indexableRoutes = SEO_ROUTES.filter((route) => route.indexable);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexableRoutes.map((route) => `  <url><loc>${canonicalForPath(route.path)}</loc></url>`).join("\n")}
</urlset>
`;
const robots = `User-agent: *
Allow: /

Sitemap: ${SITE.url}/sitemap.xml
`;

await writeFile(join(distDir, "sitemap.xml"), sitemap);
await writeFile(join(distDir, "robots.txt"), robots);

console.log(`Prerendered ${SEO_ROUTES.length + 1} HTML documents.`);
