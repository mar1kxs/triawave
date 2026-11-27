import { readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

// Static fallback frame extracted from the supplied Triawave tumble animation.
const artwork = await readFile(new URL("../public/favicon-source.png", import.meta.url));
const pngs = new Map();
for (const size of [16, 32, 48, 64, 192, 512]) {
  const png = await sharp(artwork).resize(size, size).png().toBuffer();
  pngs.set(size, png);
  await writeFile(new URL(`../public/favicon-${size}.png`, import.meta.url), png);
}
await writeFile(new URL("../public/apple-touch-icon.png", import.meta.url),
  await sharp(artwork).resize(180, 180).png().toBuffer());

// ICO directory with embedded PNG images for native browser fallback.
const sizes = [16, 32, 48];
const header = Buffer.alloc(6 + 16 * sizes.length);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
for (const [index, size] of sizes.entries()) {
  const entry = 6 + index * 16;
  const png = pngs.get(size);
  header[entry] = size;
  header[entry + 1] = size;
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(png.length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += png.length;
}
await writeFile(new URL("../public/favicon.ico", import.meta.url),
  Buffer.concat([header, ...sizes.map((size) => pngs.get(size))]));
console.log("Generated Triawave browser and home-screen icons.");
