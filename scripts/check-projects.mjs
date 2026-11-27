import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import sharp from "sharp";
import ts from "typescript";

// Load the same dependency-free TypeScript collection without another data copy.
const source = await readFile(new URL("../src/data/projects.ts", import.meta.url), "utf8");
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
});
const { PROJECTS, projectsFor, homeProjects, homeProjectImage } = await import(
  `data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`
);
const manifest = JSON.parse(await readFile(new URL("../src/generated/images.json", import.meta.url), "utf8"));
const ids = new Set();
const slugs = new Set();
const paths = new Set();
const contexts = new Set();
for (const project of PROJECTS) {
  assert(!ids.has(project.id), `Duplicate project ID: ${project.id}`);
  assert(!slugs.has(project.slug), `Duplicate project slug: ${project.slug}`);
  ids.add(project.id);
  slugs.add(project.slug);
  assert(project.title && project.alt && project.category, `${project.id}: missing metadata`);
  for (const [format, image] of Object.entries(project.images)) {
    assert(image.src.startsWith("/projects/"), `${project.id}: unexpected image location`);
    paths.add(image.src);
    const metadata = await sharp(await readFile(new URL(`../public${image.src}`, import.meta.url))).metadata();
    assert.equal(metadata.width, image.width, `${image.src}: incorrect width`);
    assert.equal(metadata.height, image.height, `${image.src}: incorrect height`);
    if (format.startsWith("square")) {
      assert(Math.abs(image.width - image.height) <= 1, `${image.src}: square artwork required`);
    } else {
      assert(image.width > image.height, `${image.src}: landscape artwork required`);
    }
    const optimized = manifest[image.src];
    if (optimized) {
      const urls = [optimized.src, ...(optimized.srcSet?.split(",").map(entry => entry.trim().split(/\s+/)[0]) ?? [])];
      for (const url of urls) await access(new URL(`../public${url}`, import.meta.url));
    }
  }
  for (const context of Object.keys(project.placements)) contexts.add(context);
  // Missing wide artwork must never silently select a square image.
  assert.equal(homeProjectImage({ ...project, images: { square: project.images.square } }), undefined);
}
for (const context of contexts) {
  const selected = projectsFor(context);
  const orders = selected.map(project => project.placements[context].order);
  assert.equal(new Set(orders).size, orders.length, `${context}: duplicate ordering`);
  assert.deepEqual(orders, [...orders].sort((a, b) => a - b));
  assert(selected.every(project => PROJECTS.includes(project)), `${context}: copied project objects`);
}
const featured = homeProjects();
assert.equal(new Set(featured.map(project => project.home.order)).size, featured.length, "Duplicate home ordering");
assert(featured.every(project => PROJECTS.includes(project) && project.description));
console.log(`Project checks passed: ${PROJECTS.length} projects, ${paths.size} source images, ${contexts.size + 1} page selections.`);
