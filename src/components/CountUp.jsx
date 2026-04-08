import { useEffect, useRef, useState } from 'react'

const formatCurrency = (value) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(
    value,
  )

const CountUp = ({ to, step = 100, startOnce = true }) => {
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)
  const observerRef = useRef(null)
  const timerRef = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting && (!started || !startOnce)) {
          setStarted(true)
        }
      },
      { threshold: 0.5 },
    )
    observerRef.current.observe(el)
    return () => {
      observerRef.current?.disconnect()
    }
  }, [started, startOnce])

  useEffect(() => {
    if (!started) return
    // Clear existing timer before starting a new one
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setDisplay((prev) => {
        const next = prev + step
        if (next >= to) {
          clearInterval(timerRef.current)
          return to
        }
        return next
      })
    }, 30)
    return () => clearInterval(timerRef.current)
  }, [started, step, to])

  return (
    <span ref={ref} aria-label={formatCurrency(to)}>
      {formatCurrency(display)}
    </span>
  )
}

export default CountUp
