import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import monoJadeUrl from "../assets/michPageAssets/pageDecoration/mono jade.png";
import monoJade480Avif from "../assets/michPageAssets/pageDecoration/mono jade-480.avif";
import monoJade960Avif from "../assets/michPageAssets/pageDecoration/mono jade-960.avif";
import monoJade480Webp from "../assets/michPageAssets/pageDecoration/mono jade-480.webp";
import monoJade960Webp from "../assets/michPageAssets/pageDecoration/mono jade-960.webp";
import caennaWordmarkJadeUrl from "../assets/michPageAssets/logos-icons/Caenna-JadeSuave.png";
import cBlancoRotoUrl from "../assets/michPageAssets/logos-icons/C-BlancoRoto.svg";
import { GlowPillLink } from "./HeroAlignnaButtons";
import "./Cards.css";

/** Anchos disponibles del LCP (mono jade es 1375px nativo). */
const MONO_JADE_AVIF = `${monoJade480Avif} 480w, ${monoJade960Avif} 960w`;
const MONO_JADE_WEBP = `${monoJade480Webp} 480w, ${monoJade960Webp} 960w`;
const MONO_JADE_SIZES = "(min-width: 1024px) 1024px, 100vw";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden className="cardCaennaBrand__socialIcon">
    <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5.2" fill="none" stroke="currentColor" strokeWidth="1.9" />
    <circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" strokeWidth="1.9" />
    <circle cx="17.2" cy="6.9" r="1.15" fill="currentColor" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden className="cardCaennaBrand__socialIcon">
    <path
      d="M14.3 4.1c.55 1.55 1.9 2.8 3.6 3.25v2.9a8.2 8.2 0 0 1-3.6-1.05v5.15a5.55 5.55 0 1 1-4.6-5.46v3.05a2.55 2.55 0 1 0 1.8 2.41V4.1h2.8z"
      fill="currentColor"
    />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden className="cardCaennaBrand__socialIcon">
    <rect x="3.1" y="5.2" width="17.8" height="13.6" rx="1.9" fill="none" stroke="currentColor" strokeWidth="1.9" />
    <path d="m4.3 7.1 7.7 6.05L19.7 7.1" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Bloque visual de marca Caenna (antes tarjeta parallax): silueta, copy, logo, redes. */
export default function CaennaBrandPanel({ className = "" }) {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const isAlignna = pathname === "/alignna";
  const reserveTo = isAlignna
    ? { pathname: "/alignna", hash: "alignna-waitlist" }
    : { pathname: "/", hash: "waitlist" };

  return (
    <div className={`relative w-full ${className}`}>
      <div className="cardCaennaBrand cardCaennaBrand--siteFooter">
        <div className="cardCaennaBrand__bgMotion">
          {/* LCP del Home: preload del AVIF/WebP en index.html → fetchpriority="high" + loading="eager" */}
          <picture>
            <source type="image/avif" srcSet={MONO_JADE_AVIF} sizes={MONO_JADE_SIZES} />
            <source type="image/webp" srcSet={MONO_JADE_WEBP} sizes={MONO_JADE_SIZES} />
            <img
              src={monoJadeUrl}
              alt=""
              width={1375}
              height={768}
              className="cardCaennaBrand__bg"
              decoding="async"
              loading="eager"
              fetchpriority="high"
            />
          </picture>
        </div>
        <div className="cardCaennaBrand__overlay" aria-hidden />
        <div className="cardCaennaBrand__content">
          <div className="cardCaennaBrand__siteFooterInner">
            <p className="cardCaennaBrand__lead">
              {t("parallaxCards.caennaLeadLine1")}
              <br />
              {t("parallaxCards.caennaLeadLine2Before")}
              <strong>{t("parallaxCards.caennaLeadLine2Strong")}</strong>
            </p>
            <img
              src={caennaWordmarkJadeUrl}
              alt="Caenna"
              className="cardCaennaBrand__logo"
              decoding="async"
            />
            <p className="cardCaennaBrand__tagline">{t("parallaxCards.caennaTagline")}</p>
            <GlowPillLink
              to={reserveTo}
              ariaLabel={t("parallaxReserve.reserveCta")}
              className="mt-[clamp(1rem,2.6vw,1.65rem)] min-h-11 gap-[0.55rem] px-[clamp(1.25rem,3.8vw,1.75rem)] py-[0.6rem] font-['Cormorant_Garamond',Georgia,'Times_New_Roman',serif] text-[clamp(1.05rem,2.1vw,1.35rem)] font-semibold tracking-[0.04em] text-[#2f2e2b] transition-colors duration-500 ease-in-out"
            >
              <span
                className="cardCaennaBrand__reserveIcon relative z-10"
                style={{
                  maskImage: `url("${cBlancoRotoUrl}")`,
                  WebkitMaskImage: `url("${cBlancoRotoUrl}")`,
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                  maskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  WebkitMaskSize: "contain",
                }}
                aria-hidden
              />
              <span className="relative z-10">{t("parallaxReserve.reserveCta")}</span>
            </GlowPillLink>
            <div className="cardCaennaBrand__social" aria-label={t("parallaxCards.caennaSocialAria")}>
              <a
                href="https://www.instagram.com/caenna.co/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label={t("parallaxCards.instagram")}
              >
                <InstagramIcon />
              </a>
              <span aria-hidden>|</span>
              <a
                href="https://www.tiktok.com/@caenna.co"
                target="_blank"
                rel="noreferrer noopener"
                aria-label={t("parallaxCards.tiktok")}
              >
                <TikTokIcon />
              </a>
              <span aria-hidden>|</span>
              <a href="mailto:michelle.castellanos@caenna.com" aria-label={t("parallaxCards.email")}>
                <MailIcon />
              </a>
            </div>
            <p className="cardCaennaBrand__copyright">
              {t("footer.copyright", { year: new Date().getFullYear() })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
