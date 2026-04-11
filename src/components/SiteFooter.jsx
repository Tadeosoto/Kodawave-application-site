import { Link } from 'react-router-dom'
import { CaennaFooterWordmark } from './CaennaBrand'

const social = [
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'Behance', href: 'https://www.behance.net/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'Twitter', href: 'https://twitter.com/' },
]

const midNav = [
  { to: '/about', label: 'About' },
  { to: { pathname: '/', hash: 'work' }, label: 'Work' },
  { to: '/my-work', label: 'My work' },
  { to: '/contact', label: 'Contact' },
]

const TalkTriangle = () => (
  <svg
    viewBox="0 0 12 12"
    className="mb-0.5 ml-1 inline-block h-2.5 w-2.5 shrink-0 align-baseline text-secundario"
    fill="currentColor"
    aria-hidden
  >
    <path d="M0 12h12V0L0 12z" />
  </svg>
)

const SiteFooter = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 border-t border-secundario/20 bg-terciario text-ink">
      <div className="mx-auto w-full max-w-[1600px] px-6 pb-12 pt-10 md:px-10 md:pb-14 md:pt-12">
        {/* Top: mark + CTA | social */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <CaennaFooterWordmark />
            <Link
              to="/contact"
              className="mt-5 flex flex-wrap items-baseline gap-0 font-display text-[clamp(2.5rem,6vw,3.75rem)] font-semibold leading-none tracking-tight text-ink transition hover:text-secundario"
            >
              <span>Let&apos;s talk</span>
              <TalkTriangle />
            </Link>
          </div>
          <nav
            className="flex flex-col items-start gap-2.5 text-sm font-medium md:items-end md:text-right"
            aria-label="Social"
          >
            {social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-ink transition hover:text-principal"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="my-10 h-px w-full bg-secundario/25 md:my-12" />

        {/* Middle nav */}
        <nav
          className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 text-sm font-semibold uppercase tracking-[0.12em] text-ink sm:gap-x-6"
          aria-label="Footer"
        >
          {midNav.map((item) => (
            <Link key={item.label} to={item.to} className="transition hover:opacity-60">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="my-10 h-px w-full bg-secundario/25 md:my-12" />

        {/* Bottom: legal | contact | privacy */}
        <div className="flex flex-col gap-8 text-xs leading-relaxed text-ink/85 md:flex-row md:items-start md:justify-between md:gap-6">
          <p className="shrink-0 md:max-w-[28%]">
            ©{year} Caenna. All rights reserved.
          </p>
          <div className="flex flex-1 flex-col items-start gap-1 md:items-center md:text-center">
            <p>
              <a href="tel:+10000000000" className="transition hover:opacity-60">
                +0 (000) 000-0000
              </a>
              <span className="mx-2 text-secundario/40" aria-hidden>
                |
              </span>
              <a href="mailto:tadeosoto1993@gmail.com" className="transition hover:opacity-60">
                tadeosoto1993@gmail.com
              </a>
            </p>
            <p className="text-ink/70">Mountain View, CA</p>
          </div>
          <div className="shrink-0 md:max-w-[28%] md:text-right">
            <Link to="/contact" className="transition hover:opacity-60">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
