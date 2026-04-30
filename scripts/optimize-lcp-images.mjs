/**
 * One-off / CI: generates .webp + .avif next to heavy hero/decoration PNGs.
 * Run: node scripts/optimize-lcp-images.mjs
 */
import sharp from 'sharp'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const base = join(__dirname, '../src/assets/michPageAssets/pageDecoration')

const jobs = [
  { file: 'Mano de dios PNG.png', maxWidth: 1920 },
  { file: 'background-image1.png', maxWidth: 1600 },
]

for (const { file, maxWidth } of jobs) {
  const input = join(base, file)
  const baseName = file.replace(/\.(png|jpe?g)$/i, '')
  const img = sharp(input)
  const meta = await img.metadata()
  const targetW = Math.min(meta.width ?? maxWidth, maxWidth)
  const resized = img.resize({
    width: targetW,
    withoutEnlargement: true,
    fit: 'inside',
  })
  const webpPath = join(base, `${baseName}.webp`)
  const avifPath = join(base, `${baseName}.avif`)
  await resized.clone().webp({ quality: 82, effort: 4 }).toFile(webpPath)
  await resized.clone().avif({ quality: 52, effort: 4 }).toFile(avifPath)
  console.log(`${file} → ${baseName}.webp / .avif (${meta.width}×${meta.height} → max width ${targetW})`)
}
