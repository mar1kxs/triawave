import { readdir, readFile, writeFile, mkdir, copyFile } from "node:fs/promises";
import sharp from "sharp";
const backup = "output/original-project-pngs";
await mkdir(backup, { recursive: true });
let before = 0, after = 0, count = 0;
for (const name of await readdir("public/projects")) {
  if (!name.endsWith(".png")) continue;
  const path = "public/projects/" + name;
  
  try { await copyFile(path, backup + "/" + name, 1); }
  catch (error) { if (error.code !== "EEXIST") throw error; }
  const input = await readFile(backup + "/" + name);
  const result = await sharp(input).resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
    .png({ palette: true, quality: 95, effort: 10, compressionLevel: 9, dither: 1 }).toBuffer();
  before += input.length;
  if (result.length < input.length) { for (let attempt = 0; ; attempt++) { try { await writeFile(path, result); break; } catch (error) { if (attempt === 4) throw error; await new Promise(resolve => setTimeout(resolve, 500)); } } after += result.length; }
  else { after += input.length; }
  count++;
}
console.log(JSON.stringify({count, before, after, saved: Math.round((1-after/before)*100)+"%"}));
