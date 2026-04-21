import "./Cards.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import michelleDeskUrl from "../assets/michPageAssets/michPhotos/michelle-desk.png";
import portraitMichelleUrl from "../assets/michPageAssets/michPhotos/hf_20260329_022232_608e361f-7fac-4089-bcf8-923d3e56c916.png";
import lignnaMisionUrl from "../assets/michPageAssets/pageDecoration/lignna-mision.png";
import alignnaWordmarkUrl from "../assets/michPageAssets/logos-icons/Alignna-BlancoRoto.svg";
import brandMarkUrl from "../assets/michPageAssets/logos-icons/C-BlancoRoto.svg";

const MotionDiv = motion.div;

/** Tonos del verde principal (#97cdb5): de más claro a más cargado. */
const principalShades = ["#e7f3ee", "#d0e8df", "#b9dccf", "#97cdb5"];

const introTriptych = [
  {
    src: michelleDeskUrl,
    label: "El proceso",
    to: "/my-work",
  },
  {
    src: portraitMichelleUrl,
    label: "La mente detrás",
    to: "/about",
  },
  {
    src: lignnaMisionUrl,
    label: "La misión",
    to: "/contact",
  },
];

const projects = [
  {
    variant: "intro",
    color: principalShades[0],
  },
  {
    title: "Mapeo de áreas",
    description:
      "Realizamos mapeo con antena RTK para obtener datos precisos del terreno, acompañado de la planeación de rutas de vuelo optimizadas. Además, cuantificamos y analizamos los requerimientos específicos del cultivo,estimación de maleza por m2, proporcionando información clave para maximizar la productividad de tus tierras.",
    imageUrl: michelleDeskUrl,
    color: principalShades[1],
  },
  {
    title: "Control de plagas",
    description:
      " Aplicamos tratamientos dirigidos utilizando drones, asegurando una distribución uniforme de pesticidas y reduciendo el impacto ambiental al evitar el uso excesivo de químicos.",
    imageUrl: michelleDeskUrl,
    color: principalShades[2],
  },
  {
    title: "Monitoreo y Diagnóstico de Cultivos",
    description:
      " Evaluamos de manera integral la salud y el estado de tus cultivos a través del análisis de niveles de nutrientes, detección de estrés hídrico, identificación de erosión del suelo y monitoreo del estado general de las plantas. Utilizamos tecnología avanzada para ofrecer soluciones precisas que optimicen el rendimiento y la sostenibilidad de tus tierras.",
    imageUrl: michelleDeskUrl,
    color: principalShades[3],
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
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  const isIntro = variant === "intro";

  return (
    <div ref={container} className="cardContainer">
      <MotionDiv
        className={`card${isIntro ? " card--intro" : ""}`}
        style={{
          scale,
          backgroundColor: color,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        <img
          src={brandMarkUrl}
          alt=""
          className="cardBrandMark"
          decoding="async"
        />
        {isIntro ? (
          <>
            <div className="cardIntroHeaderWrap">
              <header className="cardIntroHeader">
                <h2 className="cardIntroTitle">
                  Esto <strong>apenas</strong> comienza
                </h2>
                <p className="cardIntroSub">
                  <img
                    src={alignnaWordmarkUrl}
                    alt=""
                    className="cardIntroAlignna"
                    decoding="async"
                  />
                  <span className="cardIntroSubText"> es el primer paso.</span>
                </p>
              </header>
            </div>
            <div className="cardTriptych" role="list">
              {introTriptych.map((col) => (
                <Link
                  key={col.label}
                  to={col.to}
                  className="cardTriptych__link"
                  role="listitem"
                  aria-label={col.label}
                >
                  <div className="cardTriptych__media">
                    <MotionDiv
                      style={{ scale: imageScale }}
                      className="cardTriptych__motion"
                    >
                      <img src={col.src} alt="" className="cardTriptych__img" />
                    </MotionDiv>
                    <div className="cardTriptych__overlay" aria-hidden />
                    <div className="cardTriptych__labelWrap">
                      <span className="cardTriptych__label">{col.label}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
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
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <section ref={container} className="seccion">
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={i}
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
