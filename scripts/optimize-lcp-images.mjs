/**
 * One-off / CI: genera variantes WebP + AVIF responsive (480/960/1600) junto al PNG
 * original, además de los hero/background heredados (mantiene .webp/.avif al mismo
 * tamaño base para no romper imports existentes).
 *
 * Run: node scripts/optimize-lcp-images.mjs
 */
import sharp from "sharp";
import { dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const assetsBase = join(__dirname, "../src/assets/michPageAssets");

/** Bases que solo necesitan WebP/AVIF al tamaño máximo (compatibilidad con código existente). */
const heroJobs = [
  { rel: "pageDecoration/Mano de dios PNG.png", maxWidth: 1920 },
  { rel: "pageDecoration/background-image1.png", maxWidth: 1600 },
];

/** Bases que necesitan variantes responsive 480/960/1600 + base sin sufijo (max 1600). */
const responsiveJobs = [
  {
    rel: "michPhotos/hf_20260329_022232_608e361f-7fac-4089-bcf8-923d3e56c916.png",
  },
  { rel: "michPhotos/michelle-desk.png" },
  { rel: "pageDecoration/lignna-mision.png" },
  { rel: "pageDecoration/mono jade.png" },
  { rel: "pageDecoration/bola rosa(1).png" },
  { rel: "pageDecoration/manos-latido-sombra.png" },
];

const RESPONSIVE_WIDTHS = [480, 960, 1600];

function stripExt(file) {
  return file.replace(new RegExp(`${extname(file)}$`, "i"), "");
}

async function emitVariant(srcImg, width, basePath) {
  const resized = srcImg.clone().resize({
    width,
    withoutEnlargement: true,
    fit: "inside",
  });
  const webpPath = `${basePath}-${width}.webp`;
  const avifPath = `${basePath}-${width}.avif`;
  await resized.clone().webp({ quality: 80, effort: 4 }).toFile(webpPath);
  await resized.clone().avif({ quality: 50, effort: 4 }).toFile(avifPath);
  return { webpPath, avifPath };
}

async function emitHeroSizes(srcPath, maxWidth) {
  const img = sharp(srcPath);
  const meta = await img.metadata();
  const targetW = Math.min(meta.width ?? maxWidth, maxWidth);
  const baseName = stripExt(srcPath);
  const resized = img.resize({
    width: targetW,
    withoutEnlargement: true,
    fit: "inside",
  });
  await resized
    .clone()
    .webp({ quality: 82, effort: 4 })
    .toFile(`${baseName}.webp`);
  await resized
    .clone()
    .avif({ quality: 52, effort: 4 })
    .toFile(`${baseName}.avif`);
  console.log(
    `[hero] ${srcPath.replace(assetsBase, "")} → .webp/.avif (${meta.width}×${meta.height} → max ${targetW})`,
  );
}

async function emitResponsiveSet(srcPath) {
  const img = sharp(srcPath);
  const meta = await img.metadata();
  const baseName = stripExt(srcPath);
  for (const width of RESPONSIVE_WIDTHS) {
    if (meta.width && width > meta.width && width !== RESPONSIVE_WIDTHS[0]) {
      // Si la imagen es más pequeña que el ancho objetivo (excepto el menor), saltamos.
      continue;
    }
    await emitVariant(img, width, baseName);
  }
  console.log(
    `[responsive] ${srcPath.replace(assetsBase, "")} → -480/-960/-1600 .webp/.avif (${meta.width}×${meta.height})`,
  );
}

for (const { rel, maxWidth } of heroJobs) {
  await emitHeroSizes(join(assetsBase, rel), maxWidth);
}

for (const { rel } of responsiveJobs) {
  await emitResponsiveSet(join(assetsBase, rel));
}
