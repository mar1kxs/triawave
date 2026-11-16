import { readdir, readFile, mkdir, writeFile } from "node:fs/promises";
import { join, extname } from "node:path";
import { createHash } from "node:crypto";
import sharp from "sharp";
import { optimize } from "svgo";

const output = "public/optimized";
await mkdir(output, { recursive: true });
const manifest = {};
let originalBytes = 0, optimizedBytes = 0;
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.name === "optimized") continue;
    const path = join(dir, entry.name);
    if (entry.isDirectory()) { await walk(path); continue; }
    if (!/\.(png|jpe?g|webp|svg)$/i.test(path)) continue;
    const input = await readFile(path);
    const url = "/" + path.replaceAll("\\", "/").replace(/^public\//, "");
    const hash = createHash("sha256").update(input).update("webp-q84-v1").digest("hex").slice(0, 16);
    if (extname(path) === ".svg") {
      const result = optimize(input.toString(), { multipass: true,
        plugins: [{ name: "preset-default", params: { overrides: { cleanupIds: false } } }] });
      if (Buffer.byteLength(result.data) >= input.length) continue;
      const name = hash + ".svg";
      await writeFile(join(output, name), result.data);
      manifest[url] = { src: "/optimized/" + name };
      originalBytes += input.length;
      optimizedBytes += Buffer.byteLength(result.data);
      continue;
    }
    const metadata = await sharp(input).metadata();
    if ((metadata.pages ?? 1) > 1) continue;
    const maxWidth = Math.min(metadata.width, 1600);
    const widths = [...new Set([480, 800, 1200, maxWidth].filter(w => w <= maxWidth))].sort((a,b) => a-b);
    const variants = [];
    let largestSize = 0;
    for (const width of widths) {
      const name = hash + "-" + width + ".webp";
      const buffer = await sharp(input).rotate().resize({ width, withoutEnlargement: true })
        .webp({ quality: 84, effort: 6 }).toBuffer();
      await writeFile(join(output, name), buffer);
      variants.push("/optimized/" + name + " " + width + "w");
      largestSize = buffer.length;
    }
    const { dominant } = await sharp(input).stats();
    manifest[url] = {
      src: "/optimized/" + hash + "-" + maxWidth + ".webp",
      srcSet: variants.join(", "),
      width: metadata.width, height: metadata.height,
      color: "rgb(" + dominant.r + ", " + dominant.g + ", " + dominant.b + ")"
    };
    originalBytes += input.length; optimizedBytes += largestSize;
  }
}
await walk("public");
await mkdir("src/generated", { recursive: true });
await writeFile("src/generated/images.json", JSON.stringify(manifest, null, 2) + "\n");
console.log(JSON.stringify({ images: Object.keys(manifest).length, originalBytes, optimizedBytes,
  reduction: Math.round((1-optimizedBytes/originalBytes)*100) + "%" }));
