import { readFile } from "node:fs/promises";
import { join } from "node:path";
import {
  SITE,
  SEO_ROUTES,
  canonicalForPath,
  robotsForRoute,
  seoForPath,
} from "../dist-ssr/entry-server.js";

const projectRoot = new URL("..", import.meta.url).pathname;
const distDir = join(projectRoot, "dist");
const failures = [];
const seenTitles = new Map();
const seenDescriptions = new Map();

const count = (html, pattern) => [...html.matchAll(pattern)].length;
const get = (html, pattern) => html.match(pattern)?.[1]?.trim() ?? "";
const outputPath = (path) => path === "/" ? join(distDir, "index.html") : join(distDir, `${path.slice(1)}.html`);

const checkedRoutes = [...SEO_ROUTES, seoForPath("/404")];
for (const route of checkedRoutes) {
  const path = route.path;
  const html = await readFile(outputPath(path), "utf8");
  const title = get(html, /<title>([\s\S]*?)<\/title>/i);
  const description = get(html, /<meta\s+name="description"\s+content="([^"]*)"/i);
  const canonical = get(html, /<link\s+rel="canonical"\s+href="([^"]*)"/i);
  const robots = get(html, /<meta\s+name="robots"\s+content="([^"]*)"/i);

  if (count(html, /<title>/gi) !== 1) failures.push(`${path}: expected exactly one title`);
  if (!title) failures.push(`${path}: missing title`);
  if (!description) failures.push(`${path}: missing meta description`);
  if (canonical !== canonicalForPath(path)) failures.push(`${path}: incorrect canonical`);
  if (robots !== robotsForRoute(route)) failures.push(`${path}: incorrect robots directive`);
  if (count(html, /<h1(?:\s|>)/gi) !== 1) failures.push(`${path}: expected exactly one H1`);
  if (!html.includes('property="og:title"') || !html.includes('name="twitter:title"')) failures.push(`${path}: missing social metadata`);
  if (!html.includes('<div id="root">') || html.includes('<div id="root"></div>')) failures.push(`${path}: empty rendered app shell`);

  const headingLevels = [...html.matchAll(/<h([1-6])(?:\s|>)/gi)].map((match) => Number(match[1]));
  for (let index = 1; index < headingLevels.length; index += 1) {
    if (headingLevels[index] > headingLevels[index - 1] + 1) {
      failures.push(`${path}: heading level skips from H${headingLevels[index - 1]} to H${headingLevels[index]}`);
    }
  }
  for (const image of html.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\salt=("[^"]*"|'[^']*')/i.test(image[0])) failures.push(`${path}: image missing alt attribute`);
  }

  if (seenTitles.has(title)) failures.push(`${path}: duplicate title with ${seenTitles.get(title)}`);
  else seenTitles.set(title, path);
  if (seenDescriptions.has(description)) failures.push(`${path}: duplicate description with ${seenDescriptions.get(description)}`);
  else seenDescriptions.set(description, path);

  const jsonLd = get(html, /<script id="structured-data" type="application\/ld\+json">([\s\S]*?)<\/script>/i);
  if (route.indexable && !jsonLd) failures.push(`${path}: missing JSON-LD`);
  if (jsonLd) {
    try { JSON.parse(jsonLd); } catch { failures.push(`${path}: invalid JSON-LD`); }
  }

  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    const internalPath = href.split(/[?#]/, 1)[0] || "/";
    if (internalPath.startsWith("/assets/")) continue;
    if (!SEO_ROUTES.some((candidate) => candidate.path === internalPath)) {
      failures.push(`${path}: internal link has no route: ${href}`);
    }
  }
}

const sitemap = await readFile(join(distDir, "sitemap.xml"), "utf8");
for (const route of SEO_ROUTES) {
  const isListed = sitemap.includes(`<loc>${canonicalForPath(route.path)}</loc>`);
  if (isListed !== route.indexable) failures.push(`${route.path}: sitemap indexability mismatch`);
}

const robotsTxt = await readFile(join(distDir, "robots.txt"), "utf8");
if (!robotsTxt.includes("Allow: /") || !robotsTxt.includes(`Sitemap: ${SITE.url}/sitemap.xml`)) {
  failures.push("robots.txt: missing allow or sitemap directive");
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`SEO check passed for ${checkedRoutes.length} routes.`);
