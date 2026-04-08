import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

const linkIcons = {
  '/': (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 10.5L12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
    </svg>
  ),
  '/services': (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  ),
  '/about': (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="3" />
      <path d="M5 21c1.5-3.5 4-5 7-5s5.5 1.5 7 5" />
    </svg>
  ),
  '/blog': (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 4h12v16H6z" />
      <path d="M9 8h6M9 12h6M9 16h4" />
    </svg>
  ),
  '/contact': (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 6h16v12H4z" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  ),
}

const NavBar = () => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navRef = useRef(null)
  const linkElsRef = useRef({})
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })

  const updateIndicator = () => {
    const navEl = navRef.current
    if (!navEl) return

    const activeEl = linkElsRef.current[location.pathname]
    if (!activeEl) {
      setIndicator({ left: 0, width: 0 })
      return
    }

    setIndicator({
      left: activeEl.offsetLeft,
      width: activeEl.offsetWidth,
    })
  }

  useLayoutEffect(() => {
    updateIndicator()
    window.addEventListener('resize', updateIndicator)
    return () => window.removeEventListener('resize', updateIndicator)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  useLayoutEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  useLayoutEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (!isMobileMenuOpen) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isMobileMenuOpen])

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <NavLink to="/" className="text-xl font-black tracking-tight text-slate-900">
            Kodawave
          </NavLink>
          <nav ref={navRef} className="relative hidden items-center gap-2 md:flex">
            {/* Active pill background: moves between items using pure CSS transitions (lighter than motion). */}
            <div
              aria-hidden="true"
              className="absolute top-0 bottom-0 z-0 rounded-full bg-slate-900 transition-[width,left] duration-200 ease-out"
              style={{ left: indicator.left, width: indicator.width }}
            />
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                ref={(el) => {
                  if (el) linkElsRef.current[link.to] = el
                }}
                className={`relative z-10 rounded-full px-4 py-2 text-sm font-medium transition ${
                  location.pathname === link.to
                    ? 'text-white'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <NavLink
            to="/contact"
            className="hidden rounded-full bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-600 md:inline-flex"
          >
            Free Consultation
          </NavLink>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 p-2 text-slate-700 md:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              {isMobileMenuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </header>
      <div
        className={`fixed inset-0 z-[60] bg-slate-900/45 transition-opacity duration-200 md:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />
      <div className="fixed inset-0 z-[70] pointer-events-none md:hidden" aria-hidden={!isMobileMenuOpen}>
        <aside
          className={`pointer-events-auto ml-auto h-full w-[min(85vw,20rem)] border-l border-slate-200 bg-white p-6 shadow-2xl transition-transform duration-200 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          aria-label="Mobile navigation"
        >
          <div className="mb-6 flex items-center justify-between">
            <span className="mx-auto text-lg font-black text-slate-900">Menu</span>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100"
              aria-label="Close menu"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          <nav className="mx-auto flex w-full max-w-[17rem] flex-col gap-2">
            {links.map((link) => (
              <NavLink
                key={`mobile-${link.to}`}
                to={link.to}
                className={`rounded-xl px-4 py-3 text-left text-base font-semibold ${
                  location.pathname === link.to
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span className="flex items-center justify-start gap-2">
                  {linkIcons[link.to]}
                  <span>{link.label}</span>
                </span>
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="mt-3 rounded-xl bg-indigo-500 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Free Consultation
            </NavLink>
          </nav>
        </aside>
      </div>
    </>
  )
}

export default NavBar