import { SEO_ROUTES, canonicalForPath, robotsForRoute, socialImageForPath } from "../dist-ssr/entry-server.js";

// Run after a build against a deployment URL; reads HTML without executing JS.
const base = process.argv[2];
if (!base || !/^https?:\/\//.test(base)) {
  throw new Error("Usage: npm run seo:check:http -- https://your-deployment.example");
}
const failures = [];
const escape = (value) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
for (const route of SEO_ROUTES) {
  const response = await fetch(new URL(route.path, base), { signal: AbortSignal.timeout(20000) });
  const html = await response.text();
  const expected = [
    `<title>${escape(route.title)}</title>`,
    `name="description" content="${escape(route.description)}"`,
    `rel="canonical" href="${canonicalForPath(route.path)}"`,
    `property="og:url" content="${canonicalForPath(route.path)}"`,
    `name="robots" content="${robotsForRoute(route)}"`,
    `property="og:image" content="${socialImageForPath(route.path)}"`,
  ];
  if (response.status !== 200) failures.push(`${route.path}: HTTP ${response.status}`);
  for (const tag of expected) {
    if (!html.includes(tag)) failures.push(`${route.path}: missing ${tag}`);
  }
  if (!/<h1[\s>]/i.test(html) || html.includes('<div id="root"></div>'))
    failures.push(`${route.path}: missing server-rendered content`);
  const image = await fetch(new URL(new URL(socialImageForPath(route.path)).pathname, base), { signal: AbortSignal.timeout(20000) });
  if (image.status !== 200 || !image.headers.get("content-type")?.startsWith("image/png"))
    failures.push(`${route.path}: social image unavailable`);
  await image.arrayBuffer();
}
for (const path of ["/seo-check-missing-page", "/services/seo-check-missing-page"]) {
  const response = await fetch(new URL(path, base), { signal: AbortSignal.timeout(20000), redirect: "manual" });
  const html = await response.text();
  if (response.status !== 404) failures.push(`${path}: expected HTTP 404, got ${response.status}`);
  if (!/<meta\s+name="robots"\s+content="noindex\b/i.test(html)) failures.push(`${path}: missing noindex`);
  if (/rel="canonical"/.test(html)) failures.push(`${path}: 404 must not declare a canonical`);
}
if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else console.log(`HTTP SEO check passed for ${SEO_ROUTES.length} pages and two unknown URLs.`);
