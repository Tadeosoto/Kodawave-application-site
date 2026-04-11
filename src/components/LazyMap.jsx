import { useEffect, useRef, useState } from 'react'

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.365661787023!2d-122.08560812376953!3d37.422131072078146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24c2d8f8b1b%3A0x78d8a2b3f2f0f0f1!2sGoogleplex!5e0!3m2!1sen!2sus!4v1700000000000'

const SESSION_KEY = 'contact_map_loaded'

const LazyMap = () => {
  const [src, setSrc] = useState('')
  const containerRef = useRef(null)
  const observerRef = useRef(null)

  useEffect(() => {
    // If already loaded in this SPA session, set immediately (browser cache should make it instant)
    const alreadyLoaded = sessionStorage.getItem(SESSION_KEY) === '1'
    if (alreadyLoaded) {
      // Defer state update to avoid synchronous setState inside effect (eslint rule)
      const id = setTimeout(() => setSrc(MAP_SRC), 0)
      return () => clearTimeout(id)
    }
    // Otherwise, wait until map container is at least 50% visible
    const el = containerRef.current
    if (!el) return
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSrc(MAP_SRC)
          sessionStorage.setItem(SESSION_KEY, '1')
          observerRef.current?.disconnect()
        }
      },
      { threshold: 0.5 },
    )
    observerRef.current.observe(el)
    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div ref={containerRef}>
      {src ? (
        <iframe
          title="Google HQ - 1600 Amphitheatre Parkway, Mountain View, CA 94043"
          className="h-56 w-full rounded-2xl border border-secundario/30"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={src}
          allowFullScreen
        />
      ) : (
        <div className="flex h-56 w-full items-center justify-center rounded-2xl border border-dashed border-secundario/30 bg-terciario/50 text-sm text-neutral-500">
          Loading map…
        </div>
      )}
    </div>
  )
}

export default LazyMap
