import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import monoJadeUrl from "../assets/michPageAssets/pageDecoration/mono jade.png";
import caennaWordmarkJadeUrl from "../assets/michPageAssets/logos-icons/Caenna-JadeSuave.png";
import cBlancoRotoUrl from "../assets/michPageAssets/logos-icons/C-BlancoRoto.svg";
import "./Cards.css";

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
          <img src={monoJadeUrl} alt="" className="cardCaennaBrand__bg" decoding="async" />
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
            <Link to={reserveTo} className="cardCaennaBrand__reserve group">
              <span
                className="cardCaennaBrand__reserveIcon"
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
              {t("parallaxReserve.reserveCta")}
            </Link>
            <div className="cardCaennaBrand__social" aria-label={t("parallaxCards.caennaSocialAria")}>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener" aria-label={t("parallaxCards.instagram")}>
                <InstagramIcon />
              </a>
              <span aria-hidden>|</span>
              <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer noopener" aria-label={t("parallaxCards.tiktok")}>
                <TikTokIcon />
              </a>
              <span aria-hidden>|</span>
              <a href="mailto:tadeosoto1993@gmail.com" aria-label={t("parallaxCards.email")}>
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
