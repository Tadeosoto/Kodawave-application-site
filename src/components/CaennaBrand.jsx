import { NavLink, useLocation } from 'react-router-dom'
import logoJadeSuave from '../assets/michPageAssets/logos-icons/Caenna-JadeSuave.png'
import logoGrisCarbon from '../assets/michPageAssets/logos-icons/Caenna-Griscarbon.png'

export function useIsHome() {
  const { pathname } = useLocation()
  return pathname === '/'
}

/** Full wordmark: Jade Suave on Home, Gris carbón on all other routes. */
export function CaennaHeaderLogo({ className = '' }) {
  const isHome = useIsHome()
  return (
    <NavLink
      to="/"
      className={`flex shrink-0 items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-principal/40 focus-visible:ring-offset-2 focus-visible:ring-offset-terciario ${className}`}
    >
      <img
        src={isHome ? logoJadeSuave : logoGrisCarbon}
        alt="Caenna"
        className="h-[1.65rem] w-auto md:h-8"
        width={160}
        height={40}
        decoding="async"
      />
    </NavLink>
  )
}

/** Footer wordmark — always Jade Suave (header keeps Home / inner-page logos). */
export function CaennaFooterWordmark({ className = '' }) {
  return (
    <img
      src={logoJadeSuave}
      alt="Caenna"
      className={`h-6 w-auto opacity-[0.97] md:h-7 ${className}`}
      width={140}
      height={36}
      loading="lazy"
      decoding="async"
    />
  )
}
