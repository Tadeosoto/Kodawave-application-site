import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const CornerAccent = () => (
  <svg
    className="pointer-events-none absolute right-5 top-5 h-10 w-10 text-white/75"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path d="M40 0v14M40 0H26" stroke="currentColor" strokeWidth="1.25" />
  </svg>
)

const GAP_PX = 24

/**
 * Horizontal carousel: native overflow scroll + snap (touch-friendly) and mouse drag.
 */
export default function SelectedWorkCarousel({ items, bleed = true }) {
  const [index, setIndex] = useState(0)
  const [slideStep, setSlideStep] = useState(0)
  const [dragging, setDragging] = useState(false)
  const scrollRef = useRef(null)
  const firstSlideRef = useRef(null)
  const indexRef = useRef(0)
  const ignoreScroll = useRef(false)
  const programmaticTimerRef = useRef(null)
  const dragRef = useRef({ active: false, originX: 0, originScroll: 0, pointerId: null })
  const maxIndex = Math.max(0, items.length - 1)

  useEffect(() => {
    indexRef.current = index
  }, [index])

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex))
  }, [maxIndex])

  const measure = useCallback(() => {
    const el = firstSlideRef.current
    if (!el) return
    setSlideStep(el.offsetWidth + GAP_PX)
  }, [])

  useLayoutEffect(() => {
    measure()
    const ro = new ResizeObserver(() => measure())
    if (firstSlideRef.current) ro.observe(firstSlideRef.current)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [measure, items.length])

  const scrollToIndex = useCallback(
    (targetIndex, behavior = 'smooth') => {
      const el = scrollRef.current
      if (!el || slideStep <= 0) return
      const clamped = Math.max(0, Math.min(maxIndex, targetIndex))
      ignoreScroll.current = true
      if (programmaticTimerRef.current) clearTimeout(programmaticTimerRef.current)
      el.scrollTo({ left: clamped * slideStep, behavior })
      setIndex(clamped)
      programmaticTimerRef.current = setTimeout(() => {
        ignoreScroll.current = false
      }, 520)
    },
    [slideStep, maxIndex]
  )

  useLayoutEffect(() => {
    const el = scrollRef.current
    if (!el || slideStep <= 0) return
    el.scrollLeft = indexRef.current * slideStep
  }, [slideStep])

  useEffect(() => {
    const id = setInterval(() => {
      const i = indexRef.current
      const next = i >= maxIndex ? 0 : i + 1
      scrollToIndex(next)
    }, 6500)
    return () => clearInterval(id)
  }, [maxIndex, scrollToIndex])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') scrollToIndex(indexRef.current - 1)
      if (e.key === 'ArrowRight') scrollToIndex(indexRef.current + 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [scrollToIndex])

  const handleScroll = useCallback(() => {
    if (ignoreScroll.current) return
    const el = scrollRef.current
    if (!el || slideStep <= 0) return
    const i = Math.round(el.scrollLeft / slideStep)
    const clamped = Math.max(0, Math.min(maxIndex, i))
    setIndex(clamped)
  }, [slideStep, maxIndex])

  const onPointerDown = (e) => {
    if (e.pointerType === 'touch') return
    const el = scrollRef.current
    if (!el) return
    dragRef.current = {
      active: true,
      originX: e.clientX,
      originScroll: el.scrollLeft,
      pointerId: e.pointerId,
    }
    setDragging(true)
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e) => {
    const d = dragRef.current
    if (!d.active || e.pointerId !== d.pointerId) return
    const el = scrollRef.current
    if (!el) return
    el.scrollLeft = d.originScroll - (e.clientX - d.originX)
  }

  const endDrag = (e) => {
    const d = dragRef.current
    if (!d.active) return
    dragRef.current = { active: false, originX: 0, originScroll: 0, pointerId: null }
    setDragging(false)
    try {
      if (e?.currentTarget && e.pointerId != null) e.currentTarget.releasePointerCapture(e.pointerId)
    } catch {
      /* ignore */
    }
  }

  const go = (dir) => {
    scrollToIndex(indexRef.current + dir)
  }

  const inner = (
    <section className="bg-[#0d0c0b] py-14 text-white md:py-20" aria-label="Selected work">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <h2 className="font-display text-3xl font-medium tracking-tight md:text-[2.35rem]">Selected work</h2>

        <div className="relative mt-10 md:mt-12">
          <button
            type="button"
            onClick={() => go(-1)}
            className="absolute left-0 top-1/2 z-10 hidden -translate-x-2 -translate-y-1/2 rounded-full border border-white/15 bg-black/30 p-2.5 text-white/90 backdrop-blur-sm transition hover:bg-black/50 md:flex"
            aria-label="Previous project"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="absolute right-0 top-1/2 z-10 hidden translate-x-2 -translate-y-1/2 rounded-full border border-white/15 bg-black/30 p-2.5 text-white/90 backdrop-blur-sm transition hover:bg-black/50 md:flex"
            aria-label="Next project"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

          <div className="overflow-hidden md:mx-12">
            <div
              ref={scrollRef}
              role="region"
              aria-roledescription="carousel"
              aria-label="Project slides"
              className={`carousel-x-scroll flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch] ${
                dragging ? 'cursor-grabbing' : 'cursor-grab'
              }`}
              style={{ touchAction: 'pan-x' }}
              onScroll={handleScroll}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
            >
              {items.map((item, i) => (
                <article
                  key={item.title}
                  ref={i === 0 ? firstSlideRef : undefined}
                  className="group relative aspect-[4/3] w-[min(88vw,520px)] shrink-0 snap-start overflow-hidden rounded-[2px] bg-neutral-900 select-none md:w-[min(42vw,520px)]"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${items.length}`}
                >
                  <img
                    src={item.img}
                    alt=""
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover transition duration-[1.1s] ease-out group-hover:scale-[1.04]"
                    draggable={false}
                    loading={i < 2 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/45" />
                  <CornerAccent />
                  <p className="absolute left-5 right-16 top-5 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/88">
                    {item.tags.join(' · ')}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-white md:text-[1.85rem]">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-white/82 md:text-[0.95rem]">{item.blurb}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-2 md:mt-12">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              className={`h-2 rounded-full transition-all duration-500 ease-out ${
                i === index ? 'w-9 bg-white' : 'w-2 bg-white/35 hover:bg-white/55'
              }`}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-display text-sm italic text-white/55">— Our portfolio of success</p>
          <Link
            to="/contact"
            className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-principal transition hover:text-principal/85"
          >
            Let&apos;s talk
          </Link>
        </div>
      </div>
    </section>
  )

  if (!bleed) return inner

  return <div className="relative left-1/2 w-screen -translate-x-1/2">{inner}</div>
}
