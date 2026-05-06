import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { Suspense, useEffect, useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { HeroAlignnaDockProvider } from '../context/HeroAlignnaDockContext'
import { prefetchOtherRoutesIdle } from '../utils/routePrefetch'
import NavBar from './NavBar'
import SiteFooter from './SiteFooter'

function OutletFallback() {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  return (
    <div
      role="status"
      aria-label={t('common.loading')}
      className={
        isHome
          ? 'min-h-[min(92vh,960px)] w-full bg-terciario motion-safe:animate-pulse'
          : 'min-h-[28vh] w-full rounded-xl bg-terciario/35 motion-safe:animate-pulse'
      }
    />
  )
}

const SiteLayout = () => {
  const location = useLocation()
  const { i18n } = useTranslation()
  const MotionDiv = motion.div
  const isAlignnaRoute = location.pathname === '/alignna'
  const isHomeRoute = location.pathname === '/'

  useLayoutEffect(() => {
    const hash = (location.hash || '').replace(/^#/, '')
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }, [location.pathname, location.hash])

  useEffect(() => {
    const hash = (location.hash || '').replace(/^#/, '')
    if (!hash) return
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
  }, [location.pathname, location.hash])

  useEffect(() => {
    const lang = i18n.resolvedLanguage || i18n.language || 'en-AU'
    document.documentElement.lang = lang
  }, [i18n.language, i18n.resolvedLanguage])

  useEffect(() => {
    prefetchOtherRoutesIdle(location.pathname)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- one-shot idle warmup on mount
  }, [])

  return (
    <HeroAlignnaDockProvider>
      <LayoutGroup id="alignna-dock-layout">
        <div className="relative min-h-screen">
          <NavBar />
          <main
            className={
              isAlignnaRoute
                ? 'w-full max-w-none p-0'
                : 'mx-auto w-full max-w-[1600px] px-6 pb-6 pt-4 md:px-10 md:pt-6'
            }
          >
            <AnimatePresence>
              <MotionDiv
                key={location.pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                <Suspense fallback={<OutletFallback />}>
                  <Outlet />
                </Suspense>
              </MotionDiv>
            </AnimatePresence>
          </main>
          <SiteFooter
            compactTop={isAlignnaRoute}
            tightAfterContent={isHomeRoute && !isAlignnaRoute}
          />
        </div>
      </LayoutGroup>
    </HeroAlignnaDockProvider>
  )
}

export default SiteLayout
