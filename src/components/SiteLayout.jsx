import { AnimatePresence, motion } from 'motion/react'
import { Outlet, useLocation } from 'react-router-dom'
import NavBar from './NavBar'
import SiteFooter from './SiteFooter'

const SiteLayout = () => {
  const location = useLocation()
  const MotionDiv = motion.div

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="mx-auto max-w-6xl px-6 py-10">
        <AnimatePresence mode="wait">
          <MotionDiv
            key={location.pathname}
            initial={{ opacity: 0, filter: 'blur(6px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(4px)' }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <Outlet />
          </MotionDiv>
        </AnimatePresence>
      </main>
      <SiteFooter />
    </div>
  )
}

export default SiteLayout
