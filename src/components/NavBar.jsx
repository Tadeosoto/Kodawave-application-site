import {
  startTransition,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion as motionFn } from "framer-motion";
import {
  ALIGNNA_STICKY_LAYOUT_ID,
  alignnaStickySpring,
} from "./alignnaStickyLayout";
import { CaennaHeaderLogo } from "./CaennaBrand";
import LanguageSelect from "./LanguageSelect";
import { HeroAlignnaButtonGlow } from "./HeroAlignnaButtons";
import { useHeroAlignnaDock } from "../context/HeroAlignnaDockContext";
import alignnaBlancoRotoUrl from "../assets/michPageAssets/logos-icons/Alignna-BlancoRoto.svg";

const MotionDiv = motionFn.div;

const linkIcons = {
  "/": (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M3 10.5L12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
    </svg>
  ),
  "/my-work": (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  ),
  "/about": (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="8" r="3" />
      <path d="M5 21c1.5-3.5 4-5 7-5s5.5 1.5 7 5" />
    </svg>
  ),
  "/blog": (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M6 4h12v16H6z" />
      <path d="M9 8h6M9 12h6M9 16h4" />
    </svg>
  ),
  "/contact": (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 6h16v12H4z" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  ),
};

const NavBar = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const { docked, setDocked } = useHeroAlignnaDock();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  /** Borde inferior del header en px (para anclar el CTA Alignna centrado). */
  const [headerBottomPx, setHeaderBottomPx] = useState(80);
  /** Sticky CTA: tamaño hero desde lg; más compacto en móvil/tablet (alinea con `lg` de Tailwind). */
  const [isLgUp, setIsLgUp] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 1024px)").matches
      : false,
  );
  const isHome = location.pathname === "/";
  const showDockedAlignna = isHome && docked && !isMenuOpen;

  const links = useMemo(() => [{ to: "/", label: "Caenna" }], []);
  const drawerLinks = useMemo(() => [...links], [links]);

  useEffect(() => {
    startTransition(() => setIsMenuOpen(false));
  }, [location.pathname]);

  useEffect(() => {
    if (!isHome) setDocked(false);
  }, [isHome, setDocked]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => setIsLgUp(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useLayoutEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  useLayoutEffect(() => {
    const el = document.getElementById("site-header");
    if (!el) return;
    const update = () =>
      setHeaderBottomPx(Math.ceil(el.getBoundingClientRect().height));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <header
        id="site-header"
        className="fixed inset-x-0 top-0 z-50 border-b border-secundario/20 bg-terciario/90 backdrop-blur-xl"
      >
        <div className="mx-auto grid max-w-[1600px] grid-cols-[1fr_auto] items-center gap-x-3 px-6 py-5 md:gap-x-4 md:px-10">
          <div className="min-w-0 justify-self-start">
            <CaennaHeaderLogo />
          </div>
          <div className="flex items-center justify-end gap-2 justify-self-end sm:gap-3">
            <LanguageSelect />
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="inline-flex items-center justify-center border border-secundario/30 p-2.5 text-ink"
              aria-expanded={isMenuOpen}
              aria-label={t("nav.toggleMenu")}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                {isMenuOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>
      {showDockedAlignna ? (
        <MotionDiv
          layoutId={ALIGNNA_STICKY_LAYOUT_ID}
          className="pointer-events-none fixed left-1/2 z-55 -translate-x-1/2 px-3 sm:px-4"
          style={{ top: headerBottomPx - 32, left: "50vw" }}
          transition={alignnaStickySpring}
        >
          <div className="pointer-events-auto flex justify-center -translate-y-1/2">
            <HeroAlignnaButtonGlow
              to="/alignna"
              ariaLabel={t("nav.goToAlignna")}
              logoSrc={alignnaBlancoRotoUrl}
              variant={isLgUp ? "hero" : "nav"}
            />
          </div>
        </MotionDiv>
      ) : null}
      <div
        className={`fixed inset-0 z-60 bg-ink/35 transition-opacity duration-200 ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />
      <div
        className="fixed inset-0 z-70 pointer-events-none"
        aria-hidden={!isMenuOpen}
      >
        <aside
          className={`pointer-events-auto ml-auto h-full w-[min(85vw,20rem)] border-l border-secundario/20 bg-terciario p-6 shadow-2xl transition-transform duration-200 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-label={t("nav.mobileNav")}
        >
          <div className="mb-8 flex items-center justify-between gap-3">
            <div className="origin-left scale-115">
              <CaennaHeaderLogo />
            </div>
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="border border-secundario/25 p-2 text-ink"
              aria-label={t("nav.closeMenu")}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          <nav className="flex w-full flex-col gap-1">
            {drawerLinks.map((link) => (
              <NavLink
                key={`drawer-${link.to}`}
                to={link.to}
                className={`block w-full rounded-lg px-4 py-3.5 text-left text-base font-semibold ${
                  location.pathname === link.to
                    ? "bg-principal/40 text-ink text"
                    : "text-neutral-700 hover:bg-principal/25"
                }`}
              >
                <span className="flex items-center gap-3.5">
                  {linkIcons[link.to]}
                  <span>{link.label}</span>
                </span>
              </NavLink>
            ))}
          </nav>
          <NavLink
            to="/alignna"
            aria-label={t("nav.goToAlignna")}
            className={`mt-1 ml-6 block w-[calc(100%-1.5rem)] rounded-lg px-4 py-3 transition-colors ${
              location.pathname === "/alignna"
                ? "bg-principal/38 text-ink"
                : "text-neutral-700/95 hover:bg-principal/22"
            }`}
          >
            <span className="flex min-h-6 items-center gap-3">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 shrink-0 opacity-70"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                aria-hidden
              >
                <path d="M7 5v8a2 2 0 002 2h8" />
                <path d="M13 11h4v4" />
              </svg>
              <img
                src={alignnaBlancoRotoUrl}
                alt="Alignna"
                className="h-5.5 w-auto opacity-85 brightness-0"
                decoding="async"
              />
            </span>
          </NavLink>
        </aside>
      </div>
    </>
  );
};

export default NavBar;
