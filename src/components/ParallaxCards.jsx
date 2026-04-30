import "./Cards.css";
import { useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";
import michelleDeskUrl from "../assets/michPageAssets/michPhotos/michelle-desk.png";
import portraitMichelleUrl from "../assets/michPageAssets/michPhotos/hf_20260329_022232_608e361f-7fac-4089-bcf8-923d3e56c916.png";
import lignnaMisionUrl from "../assets/michPageAssets/pageDecoration/lignna-mision.png";
import alignnaWordmarkUrl from "../assets/michPageAssets/logos-icons/Alignna-BlancoRoto.svg";
import brandMarkUrl from "../assets/michPageAssets/logos-icons/C-MaderaClara.svg";
import FooterNewsletterPanel from "./FooterNewsletterPanel";

const MotionDiv = motion.div;

/** Tonos del verde principal (#97cdb5): de más claro a más cargado. */
const principalShades = ["#e7f3ee", "#d0e8df", "#b9dccf", "#97cdb5"];

/** Tarjeta waitlist: mismo crema que el bloque newsletter (footer), no el verde mint. */
const WAITLIST_CARD_BG = "#f7f6f2";

const INTRO_TRIPTYCH = [
  { src: michelleDeskUrl, to: "/#", labelKey: "triptych1" },
  { src: portraitMichelleUrl, to: "#", labelKey: "triptych2" },
  { src: lignnaMisionUrl, to: "/alignna", labelKey: "triptych3" },
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
                  <img
                    src={alignnaWordmarkUrl}
                    alt=""
                    className="cardIntroAlignna"
                    decoding="async"
                  />
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
                        <img
                          src={col.src}
                          alt=""
                          className="cardTriptych__img"
                        />
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
