import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavBar from './NavBar'
import SiteFooter from './SiteFooter'

const SiteLayout = () => {
  const location = useLocation()
  const MotionDiv = motion.div
  const isAlignnaRoute = location.pathname === '/alignna'
  const isHomeRoute = location.pathname === '/'

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

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
