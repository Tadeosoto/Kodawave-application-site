import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const MotionSpan = motion.span
const MotionDiv = motion.div

/**
 * Maps raw viewport scroll (often caps below 1 before the user “feels done”) to a 0–1 reveal curve.
 * Tune `REVEAL_AT` so the full paragraph reads as solid ink before the track ends.
 */
const REVEAL_AT = 0.58

function RevealWord({ word, index, total, progress }) {
  const opacity = useTransform(progress, (p) => {
    const dim = 0.18
    const t = p * total - index
    if (t <= 0) return dim
    if (t >= 1) return 1
    const s = t * t * (3 - 2 * t)
    return dim + (1 - dim) * s
  })
  return (
    <MotionSpan className="inline text-ink [overflow-wrap:anywhere]" style={{ opacity }}>
      {word}
    </MotionSpan>
  )
}

function WordSpace() {
  return <span aria-hidden> </span>
}

export default function ScrollRevealParagraph({
  eyebrow = 'About',
  text,
  imageSrc,
  imageAlt = '',
  className = '',
}) {
  const containerRef = useRef(null)
  const words = text.trim().split(/\s+/)
  const total = words.length

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  /** Saturates to 1 earlier so the last words fully reveal while the section is still on screen */
  const revealProgress = useTransform(scrollYProgress, (v) => Math.min(1, v / REVEAL_AT))

  const imageOpacity = useTransform(revealProgress, [0, 0.25], [0.88, 1])
  const imageY = useTransform(revealProgress, [0, 1], [6, 0])

  return (
    <div
      ref={containerRef}
      className={`relative w-full scroll-mt-0 min-h-[min(135vh,1020px)] ${className}`}
    >
      <div className="sticky top-0 z-0 flex min-h-0 flex-col justify-center py-10 md:py-14 lg:min-h-[min(88vh,820px)] lg:py-16">
        <div className="isolate mx-auto flex w-full max-w-[1600px] flex-col gap-8 px-6 md:gap-10 md:px-10 lg:flex-row lg:items-start lg:gap-10 xl:gap-14">
          <div className="relative z-10 w-full min-w-0 lg:w-[70%] lg:flex-[1_1_70%] lg:pr-6 lg:pl-[min(5vw,2.5rem)]">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-secundario">{eyebrow}</p>
            <p className="mt-6 w-full min-w-0 max-w-none font-display text-[clamp(1.35rem,2.4vw,1.85rem)] font-normal leading-[1.45] tracking-tight text-ink md:mt-8">
              {words.map((word, i) => (
                <span key={`w-${i}`}>
                  {i > 0 ? <WordSpace /> : null}
                  <RevealWord word={word} index={i} total={total} progress={revealProgress} />
                </span>
              ))}
            </p>
          </div>

          <MotionDiv
            className="relative z-0 w-full shrink-0 lg:w-[30%] lg:flex-[0_0_30%] lg:pl-2"
            style={{ opacity: imageOpacity, y: imageY }}
          >
            <div className="mx-auto max-w-md overflow-hidden rounded-sm bg-ink/5 shadow-[0_24px_60px_-28px_rgba(42,38,32,0.35)] lg:mx-0 lg:ml-auto lg:max-w-none">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="aspect-3/4 w-full object-cover object-center md:aspect-4/5"
                loading="lazy"
                decoding="async"
              />
            </div>
          </MotionDiv>
        </div>
      </div>
    </div>
  )
}
