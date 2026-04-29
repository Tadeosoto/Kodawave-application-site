import { useCallback, useEffect, useId, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

const SCROLL_REVEAL_AT = 200

/** Floating control inspired by circular “back to top” patterns (e.g. Framer sites): fixed corner, text on a path, infinite rotation. */
export default function BackToTop() {
  const { t } = useTranslation()
  const rawId = useId()
  const pathId = `back-to-top-path-${rawId.replace(/:/g, '')}`
  const [visible, setVisible] = useState(false)

  const onScroll = useCallback(() => {
    setVisible(window.scrollY > SCROLL_REVEAL_AT)
  }, [])

  useEffect(() => {
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  const phrase = t('nav.backToTop')
  const ringText = useMemo(
    () => ` · ${phrase} · ${phrase} · ${phrase} · ${phrase} · `,
    [phrase],
  )

  const handleClick = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <a
      href="#top"
      onClick={handleClick}
      aria-label={phrase}
      className={`fixed bottom-6 right-10 z-40 transition-[opacity,transform] duration-300 ease-out md:bottom-10 md:right-16 ${
        visible ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
      }`}
    >
      <div className="relative h-[6.5rem] w-[6.5rem] rounded-full bg-white/30 shadow-[0_10px_36px_-14px_rgba(42,38,32,0.38)] ring-1 ring-ink/10 backdrop-blur-md md:h-[7.5rem] md:w-[7.5rem]">
        <svg
          className="back-to-top-ring-spin text-ink absolute inset-0 h-full w-full overflow-visible p-[3px]"
          viewBox="0 0 100 100"
          aria-hidden
        >
          <path
            id={pathId}
            d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
            fill="none"
            stroke="none"
          />
          <text
            className="fill-ink font-semibold uppercase tracking-[0.28em] [font-size:9.5px] md:[font-size:10.5px]"
            style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
          >
            <textPath href={`#${pathId}`} startOffset="0%">
              {ringText}
            </textPath>
          </text>
        </svg>
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-8 w-8 text-principal md:h-9 md:w-9"
            aria-hidden
          >
            <path
              fillRule="evenodd"
              d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </a>
  )
}
