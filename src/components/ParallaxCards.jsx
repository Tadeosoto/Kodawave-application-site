import "./Cards.css";
import { useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";
import michelleDeskUrl from "../assets/michPageAssets/michPhotos/michelle-desk.png";
import michelleDesk480Avif from "../assets/michPageAssets/michPhotos/michelle-desk-480.avif";
import michelleDesk960Avif from "../assets/michPageAssets/michPhotos/michelle-desk-960.avif";
import michelleDesk480Webp from "../assets/michPageAssets/michPhotos/michelle-desk-480.webp";
import michelleDesk960Webp from "../assets/michPageAssets/michPhotos/michelle-desk-960.webp";
import portraitMichelleUrl from "../assets/michPageAssets/michPhotos/hf_20260329_022232_608e361f-7fac-4089-bcf8-923d3e56c916.png";
import portraitMichelle480Avif from "../assets/michPageAssets/michPhotos/hf_20260329_022232_608e361f-7fac-4089-bcf8-923d3e56c916-480.avif";
import portraitMichelle960Avif from "../assets/michPageAssets/michPhotos/hf_20260329_022232_608e361f-7fac-4089-bcf8-923d3e56c916-960.avif";
import portraitMichelle1600Avif from "../assets/michPageAssets/michPhotos/hf_20260329_022232_608e361f-7fac-4089-bcf8-923d3e56c916-1600.avif";
import portraitMichelle480Webp from "../assets/michPageAssets/michPhotos/hf_20260329_022232_608e361f-7fac-4089-bcf8-923d3e56c916-480.webp";
import portraitMichelle960Webp from "../assets/michPageAssets/michPhotos/hf_20260329_022232_608e361f-7fac-4089-bcf8-923d3e56c916-960.webp";
import portraitMichelle1600Webp from "../assets/michPageAssets/michPhotos/hf_20260329_022232_608e361f-7fac-4089-bcf8-923d3e56c916-1600.webp";
import lignnaMisionUrl from "../assets/michPageAssets/pageDecoration/lignna-mision.png";
import lignnaMision480Avif from "../assets/michPageAssets/pageDecoration/lignna-mision-480.avif";
import lignnaMision960Avif from "../assets/michPageAssets/pageDecoration/lignna-mision-960.avif";
import lignnaMision480Webp from "../assets/michPageAssets/pageDecoration/lignna-mision-480.webp";
import lignnaMision960Webp from "../assets/michPageAssets/pageDecoration/lignna-mision-960.webp";
import alignnaWordmarkUrl from "../assets/michPageAssets/logos-icons/Alignna-BlancoRoto.svg";
import brandMarkUrl from "../assets/michPageAssets/logos-icons/C-MaderaClara.svg";
import FooterNewsletterPanel from "./FooterNewsletterPanel";

const MotionDiv = motion.div;

/** Tonos del verde principal (#97cdb5): de más claro a más cargado. */
const principalShades = ["#e7f3ee", "#d0e8df", "#b9dccf", "#97cdb5"];

/** Tarjeta waitlist: mismo crema que el bloque newsletter (footer), no el verde mint. */
const WAITLIST_CARD_BG = "#f7f6f2";

/**
 * Sources responsive del tríptico (3 columnas → ~33vw en desktop, full en móvil).
 * `width`/`height` en `<img>` solo fija el aspect-ratio (object-fit:cover lo recorta).
 */
const TRIPTYCH_SIZES = "(min-width: 1024px) 540px, (min-width: 768px) 33vw, 100vw";

const INTRO_TRIPTYCH = [
  {
    to: "/#",
    labelKey: "triptych1",
    fallback: michelleDeskUrl,
    width: 1024,
    height: 1536,
    avif: `${michelleDesk480Avif} 480w, ${michelleDesk960Avif} 960w`,
    webp: `${michelleDesk480Webp} 480w, ${michelleDesk960Webp} 960w`,
  },
  {
    to: "#",
    labelKey: "triptych2",
    fallback: portraitMichelleUrl,
    width: 1728,
    height: 2140,
    avif: `${portraitMichelle480Avif} 480w, ${portraitMichelle960Avif} 960w, ${portraitMichelle1600Avif} 1600w`,
    webp: `${portraitMichelle480Webp} 480w, ${portraitMichelle960Webp} 960w, ${portraitMichelle1600Webp} 1600w`,
  },
  {
    to: "/alignna",
    labelKey: "triptych3",
    fallback: lignnaMisionUrl,
    width: 1224,
    height: 864,
    avif: `${lignnaMision480Avif} 480w, ${lignnaMision960Avif} 960w`,
    webp: `${lignnaMision480Webp} 480w, ${lignnaMision960Webp} 960w`,
  },
];

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
  const isWaitlist = variant === "waitlist";

  return (
    <div
      ref={container}
      className="cardContainer"
      {...(isWaitlist ? { id: "waitlist" } : {})}
    >
      <MotionDiv
        className={`card${isIntro ? " card--intro" : ""}${isWaitlist ? " card--waitlist" : ""}`}
        style={{
          scale,
          backgroundColor: color,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        {isIntro && (
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
                  <Link
                    to="/alignna"
                    className="cardIntroAlignnaLink"
                    aria-label={t("nav.goToAlignna")}
                  >
                    <img
                      src={alignnaWordmarkUrl}
                      alt=""
                      className="cardIntroAlignna"
                      decoding="async"
                    />
                  </Link>
                  <span className="cardIntroSubText">
                    {t("parallaxCards.introSubText")}
                  </span>
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
                        <picture>
                          <source
                            type="image/avif"
                            srcSet={col.avif}
                            sizes={TRIPTYCH_SIZES}
                          />
                          <source
                            type="image/webp"
                            srcSet={col.webp}
                            sizes={TRIPTYCH_SIZES}
                          />
                          <img
                            src={col.fallback}
                            alt=""
                            width={col.width}
                            height={col.height}
                            decoding="async"
                            loading="lazy"
                            className={`cardTriptych__img${
                              col.labelKey === "triptych3"
                                ? " cardTriptych__img--mission"
                                : ""
                            }`}
                          />
                        </picture>
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
        ) : isWaitlist ? (
          <FooterNewsletterPanel embedded />
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
        imageUrl: null,
        color: WAITLIST_CARD_BG,
        variant: "waitlist",
      },
    ],
    [t, i18n.language],
  );

  return (
    <section ref={container} className="seccion seccion--parallaxCards">
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
