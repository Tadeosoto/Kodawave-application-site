import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import NavBar from './NavBar'
import SiteFooter from './SiteFooter'

const SiteLayout = () => {
  const location = useLocation()
  const { i18n } = useTranslation()
  const MotionDiv = motion.div
  const isAlignnaRoute = location.pathname === '/alignna'
  const isHomeRoute = location.pathname === '/'

  useEffect(() => {
    const hash = (location.hash || '').replace(/^#/, '')
    if (hash) {
      let cancelled = false
      const tryScroll = (attempt = 0) => {
        if (cancelled) return
        const el = document.getElementById(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
        if (attempt < 36) {
          setTimeout(() => tryScroll(attempt + 1), 80)
        }
      }
      requestAnimationFrame(() => tryScroll())
      return () => {
        cancelled = true
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname, location.hash])

  useEffect(() => {
    const lang = i18n.resolvedLanguage || i18n.language || 'en-AU'
    document.documentElement.lang = lang
  }, [i18n.language, i18n.resolvedLanguage])

  return (
    <div className="relative min-h-screen">
      <NavBar />
      <main
        className={
          isAlignnaRoute
            ? 'w-full max-w-none p-0'
            : 'mx-auto w-full max-w-[1600px] px-6 pb-6 pt-4 md:px-10 md:pt-6'
        }
      >
        <AnimatePresence mode="wait">
          <MotionDiv
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <Outlet />
          </MotionDiv>
        </AnimatePresence>
      </main>
      <SiteFooter
        compactTop={isAlignnaRoute}
        tightAfterContent={isHomeRoute && !isAlignnaRoute}
      />
    </div>
  )
}

export default SiteLayout
