import "./Cards.css";
import { useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";
import michelleDeskUrl from "../assets/michPageAssets/michPhotos/michelle-desk.png";
import portraitMichelleUrl from "../assets/michPageAssets/michPhotos/hf_20260329_022232_608e361f-7fac-4089-bcf8-923d3e56c916.png";
import lignnaMisionUrl from "../assets/michPageAssets/pageDecoration/lignna-mision.png";
import monoJadeUrl from "../assets/michPageAssets/pageDecoration/mono jade.png";
import alignnaWordmarkUrl from "../assets/michPageAssets/logos-icons/Alignna-BlancoRoto.svg";
import brandMarkUrl from "../assets/michPageAssets/logos-icons/C-MaderaClara.svg";
import caennaWordmarkJadeUrl from "../assets/michPageAssets/logos-icons/Caenna-JadeSuave.png";

const MotionDiv = motion.div;

/** Tonos del verde principal (#97cdb5): de más claro a más cargado. */
const principalShades = ["#e7f3ee", "#d0e8df", "#b9dccf", "#97cdb5"];

const INTRO_TRIPTYCH = [
  { src: michelleDeskUrl, to: "/my-work", labelKey: "triptych1" },
  { src: portraitMichelleUrl, to: "/about", labelKey: "triptych2" },
  { src: lignnaMisionUrl, to: "/alignna", labelKey: "triptych3" },
];

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

const Card = ({
  i,
  title,
  description,
  imageUrl,
  color,
  progress,
  range,
  targetScale,
  variant,
}) => {
  const { t } = useTranslation();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  const isIntro = variant === "intro";
  const isCaennaBrand = variant === "caennaBrand";

  return (
    <div ref={container} className="cardContainer">
      <MotionDiv
        className={`card${isIntro ? " card--intro" : ""}${isCaennaBrand ? " card--caennaBrand" : ""}`}
        style={{
          scale,
          backgroundColor: color,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        {!isCaennaBrand && (
          <img
            src={brandMarkUrl}
            alt=""
            className="cardBrandMark"
            decoding="async"
          />
        )}
        {isIntro ? (
          <>
            <div className="cardIntroHeaderWrap">
              <header className="cardIntroHeader">
                <h2 className="cardIntroTitle">
                  {t("parallaxCards.introTitleBefore")}
                  <strong>{t("parallaxCards.introTitleStrong")}</strong>
                  {t("parallaxCards.introTitleAfter")}
                </h2>
                <p className="cardIntroSub">
                  <img
                    src={alignnaWordmarkUrl}
                    alt=""
                    className="cardIntroAlignna"
                    decoding="async"
                  />
                  <span className="cardIntroSubText">{t("parallaxCards.introSubText")}</span>
                </p>
              </header>
            </div>
            <div className="cardTriptych" role="list">
              {INTRO_TRIPTYCH.map((col) => {
                const label = t(`parallaxCards.${col.labelKey}`);
                return (
                  <Link
                    key={col.to}
                    to={col.to}
                    className="cardTriptych__link"
                    role="listitem"
                    aria-label={label}
                  >
                    <div className="cardTriptych__media">
                      <MotionDiv
                        style={{ scale: imageScale }}
                        className="cardTriptych__motion"
                      >
                        <img src={col.src} alt="" className="cardTriptych__img" />
                      </MotionDiv>
                      <div className="cardTriptych__tint" aria-hidden />
                      <div className="cardTriptych__overlay" aria-hidden />
                      <span className="cardTriptych__brandIcon" aria-hidden />
                      <div className="cardTriptych__labelWrap">
                        <span className="cardTriptych__label">{label}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </>
        ) : isCaennaBrand ? (
          <div className="cardCaennaBrand">
            <MotionDiv style={{ scale: imageScale }} className="cardCaennaBrand__bgMotion">
              <img
                src={imageUrl}
                alt=""
                className="cardCaennaBrand__bg"
                decoding="async"
              />
            </MotionDiv>
            <div className="cardCaennaBrand__overlay" aria-hidden />
            <div className="cardCaennaBrand__content">
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
            </div>
          </div>
        ) : (
          <>
            <h2>{title}</h2>
            <div className="body">
              <div className="description">
                <p>{description}</p>
              </div>
              <div className="imageContainer">
                <MotionDiv style={{ scale: imageScale }} className="inner">
                  <img src={imageUrl} alt={title} />
                </MotionDiv>
              </div>
            </div>
          </>
        )}
      </MotionDiv>
    </div>
  );
};

const ParallaxCards = () => {
  const { t, i18n } = useTranslation();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const projects = useMemo(
    () => [
      {
        variant: "intro",
        color: principalShades[0],
      },
      {
        title: t("parallaxCards.projectTitle"),
        description: t("parallaxCards.projectDescription"),
        imageUrl: monoJadeUrl,
        color: principalShades[1],
        variant: "caennaBrand",
      },
    ],
    [t, i18n.language],
  );

  return (
    <section ref={container} className="seccion">
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={`${i}-${i18n.language}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
};

export default ParallaxCards;
