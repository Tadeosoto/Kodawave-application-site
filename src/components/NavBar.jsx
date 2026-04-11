import { startTransition, useEffect, useLayoutEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { CaennaHeaderLogo } from './CaennaBrand'

const links = [
  { to: '/', label: 'Home' },
  { to: '/my-work', label: 'My work' },
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
  '/my-work': (
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

  useEffect(() => {
    startTransition(() => setIsMobileMenuOpen(false))
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

  const navLinkClass = ({ isActive }) =>
    `border-b-2 pb-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] transition-colors ${
      isActive
        ? 'border-secundario text-ink'
        : 'border-transparent text-neutral-500 hover:text-ink/80'
    }`

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-secundario/20 bg-terciario/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
          <CaennaHeaderLogo />
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={navLinkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <NavLink
            to="/contact"
            className="hidden border border-principal bg-principal px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-ink transition hover:border-secundario hover:bg-secundario hover:text-terciario md:inline-flex"
          >
            Start a project
          </NavLink>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center border border-secundario/30 p-2.5 text-ink md:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
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
        className={`fixed inset-0 z-[60] bg-ink/35 transition-opacity duration-200 md:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />
      <div className="fixed inset-0 z-[70] pointer-events-none md:hidden" aria-hidden={!isMobileMenuOpen}>
        <aside
          className={`pointer-events-auto ml-auto h-full w-[min(85vw,20rem)] border-l border-secundario/20 bg-terciario p-6 shadow-2xl transition-transform duration-200 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          aria-label="Mobile navigation"
        >
          <div className="mb-8 flex items-center justify-between gap-3">
            <CaennaHeaderLogo />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="border border-secundario/25 p-2 text-ink"
              aria-label="Close menu"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          <nav className="flex w-full flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={`mobile-${link.to}`}
                to={link.to}
                className={`rounded-lg px-4 py-3 text-left text-sm font-semibold ${
                  location.pathname === link.to
                    ? 'bg-principal/40 text-ink'
                    : 'text-neutral-700 hover:bg-principal/25'
                }`}
              >
                <span className="flex items-center gap-3">
                  {linkIcons[link.to]}
                  <span>{link.label}</span>
                </span>
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="mt-4 border border-principal bg-principal px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink transition hover:border-secundario hover:bg-secundario hover:text-terciario"
            >
              Start a project
            </NavLink>
          </nav>
        </aside>
      </div>
    </>
  )
}

export default NavBar
