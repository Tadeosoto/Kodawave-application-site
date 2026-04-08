import { Link } from 'react-router-dom'

const pageLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

const SiteFooter = () => {
  return (
    <footer className="mx-auto mt-12 w-full max-w-6xl px-6 pb-14 mb-6">
      <div className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-sm">
        <div className="flex flex-row items-start justify-between gap-8 bg-gradient-to-br from-amber-50/60 via-white to-violet-50/60 px-8 py-10">
          <div className="max-w-xl flex-1 pr-6">
            <p className="text-2xl font-black text-slate-900">Kodawave</p>
            <p className="mt-4 max-w-md text-slate-600">
              Building simple, beautiful and functional digital experiences focused on
              growth and clarity.
            </p>
          </div>

          <div className="w-44 shrink-0">
            <p className="text-sm font-semibold text-slate-500">Pages</p>
            <nav className="mt-4 flex flex-col gap-3">
              {pageLinks.map((item) => (
                <Link key={item.to} to={item.to} className="text-slate-700 transition hover:text-slate-900">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="w-56 shrink-0">
            <p className="text-sm font-semibold text-slate-500">Contact</p>
            <div className="mt-4 flex flex-col gap-3 text-slate-700">
              <a href="mailto:tadeosoto1993@gmail.com" className="transition hover:text-slate-900">
                tadeosoto1993@gmail.com
              </a>
              <p>+0 (000) 000-0000</p>
              <p>Mountain View, CA</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-slate-200/70 bg-slate-50/70 px-8 py-7 text-sm text-slate-600 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Kodawave. All rights reserved.</p>
          <p>Built with React + Vite + Tailwind</p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
