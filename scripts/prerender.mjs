import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

import {
  SITE,
  SEO_ROUTES,
  canonicalForPath,
  render,
  robotsForRoute,
  seoForPath,
  socialImageForPath,
  structuredDataForPath,
} from "../dist-ssr/entry-server.js";

const projectRoot = fileURLToPath(new URL("..", import.meta.url));
const distDir = join(projectRoot, "dist");

const template = await readFile(join(distDir, "index.html"), "utf8");

const escapeHtml = (value) =>
  value
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
    ? `\n    <script id="structured-data" type="application/ld+json">${JSON.stringify(
        structuredData,
      ).replaceAll("<", "\\u003c")}</script>`
    : "";

  return `<!-- seo:start -->
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="${robotsForRoute(route)}" />
    ${route.path === "/404" ? "" : `<link rel="canonical" href="${canonical}" />`}
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${escapeHtml(SITE.name)}" />
    <meta property="og:locale" content="${escapeHtml(SITE.locale)}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${socialImageForPath(path)}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:alt" content="${title}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="${socialImageForPath(path)}" />
    <meta name="twitter:image:alt" content="${title}" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />${jsonLd}
    <!-- seo:end -->`;
}

function outputPath(path) {
  return path === "/"
    ? join(distDir, "index.html")
    : join(distDir, `${path.slice(1)}.html`);
}

async function writeRoute(path) {
  const appHtml = render(path);

  const html = template
    .replace(/<!-- seo:start -->[\s\S]*?<!-- seo:end -->/, headForPath(path))
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  const destination = outputPath(path);

  await mkdir(dirname(destination), {
    recursive: true,
  });

  await writeFile(destination, html);
  await writeSocialImage(path);
}

async function writeSocialImage(path) {
  const title = seoForPath(path).title.replace(/ \| Triawave$/, "");
  const lines = [""];
  for (const word of title.split(" ")) {
    const index = lines.length - 1;
    if ((lines[index] + " " + word).trim().length > 31) lines.push(word);
    else lines[index] = (lines[index] + " " + word).trim();
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
    <rect width="1200" height="630" fill="#0B090D"/>
    <rect x="64" y="190" width="72" height="6" rx="3" fill="#EF4B9A"/>
    <text x="64" y="128" font-family="Arial, sans-serif" font-size="40" fill="#F2B4D1">TRIAWAVE</text>
    <text font-family="Arial, sans-serif" font-size="58" font-weight="bold" fill="#FFFFFF">
      ${lines.map((line, index) => `<tspan x="64" y="${290 + index * 76}">${escapeHtml(line)}</tspan>`).join("")}
    </text>
    <text x="64" y="560" font-family="Arial, sans-serif" font-size="26" fill="#D98BAE">triawave.com</text>
  </svg>`;
  const icon = await sharp(join(projectRoot, "public/favicon.svg")).resize(112, 112).png().toBuffer();
  const imagePath = join(distDir, new URL(socialImageForPath(path)).pathname);
  await mkdir(dirname(imagePath), { recursive: true });
  await sharp(Buffer.from(svg)).composite([{ input: icon, left: 1024, top: 64 }]).png().toFile(imagePath);
}

for (const route of SEO_ROUTES) {
  await writeRoute(route.path);
}

await writeRoute("/404");

const indexableRoutes = SEO_ROUTES.filter((route) => route.indexable);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexableRoutes
  .map((route) => `  <url><loc>${canonicalForPath(route.path)}</loc></url>`)
  .join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE.url}/sitemap.xml
`;

// Keep Vite's public fallback files identical to the production output.
for (const directory of [distDir, join(projectRoot, "public")]) {
  await writeFile(join(directory, "sitemap.xml"), sitemap);
  await writeFile(join(directory, "robots.txt"), robots);
}

console.log(`Prerendered ${SEO_ROUTES.length + 1} HTML documents.`);
