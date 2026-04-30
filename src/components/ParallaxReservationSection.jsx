import { useRef, useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";

const MotionP = motion.p;
const MotionDiv = motion.div;
const MotionSpan = motion.span;

/**
 * Equivalente visual a `["start start", "end end"]`, pero sin coincidir con el
 * preset interno "All" de Framer. Si coincide, Chrome usa View Timeline
 * acelerado y el `scrollYProgress` puede desincronizarse respecto al cálculo
 * por JS (Firefox suele ir por ahí) → textos superpuestos al entrar a la sección.
 */
const PARALLAX_SCROLL_OFFSET = [
  [0, 0],
  [1, 0.9995],
];

function useSplitSlidePx() {
  const [px, setPx] = useState(160);

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w >= 1024) setPx(160);
      else if (w >= 768) setPx(100);
      else setPx(Math.min(52, Math.round(w * 0.13)));
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  return px;
}

/** Keyframes más espaciados en 0–1 para que en móvil no se “salten” fases con scroll rápido. */
function useNarrowMobile() {
  const [narrow, setNarrow] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 768,
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const fn = () => setNarrow(mq.matches);
    fn();
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  return narrow;
}

const ParallaxReservationSection = () => {
  const { t } = useTranslation();
  const parallaxSectionRef = useRef(null);
  const splitSlidePx = useSplitSlidePx();
  const narrowMobile = useNarrowMobile();

  const { scrollYProgress: parallaxProgress } = useScroll({
    target: parallaxSectionRef,
    offset: PARALLAX_SCROLL_OFFSET,
  });

  const k = useMemo(() => {
    if (!narrowMobile) {
      return {
        l1o: [0, 0.08, 0.25, 0.36],
        l1y: [0, 0.25, 0.36],
        l1s: [0.25, 0.36],
        l1b: [0, 0.08, 0.25, 0.36],
        l2o: [0.26, 0.36, 0.52, 0.64],
        l2y: [0.26, 0.52, 0.64],
        l2s: [0.52, 0.64],
        l2b: [0.26, 0.36, 0.52, 0.64],
        spo: [0.52, 0.64, 0.8, 0.9],
        spl: [0.52, 0.66],
        spy: [0.52, 0.8, 0.9],
        sps: [0.8, 0.9],
        spb: [0.52, 0.64, 0.8, 0.9],
      };
    }
    return {
      l1o: [0, 0.1, 0.28, 0.4],
      l1y: [0, 0.28, 0.4],
      l1s: [0.28, 0.4],
      l1b: [0, 0.1, 0.28, 0.4],
      l2o: [0.26, 0.4, 0.54, 0.66],
      l2y: [0.26, 0.54, 0.66],
      l2s: [0.54, 0.66],
      l2b: [0.26, 0.4, 0.54, 0.66],
      spo: [0.5, 0.64, 0.76, 0.86],
      spl: [0.5, 0.66],
      spy: [0.5, 0.76, 0.86],
      sps: [0.76, 0.86],
      spb: [0.5, 0.64, 0.76, 0.86],
    };
  }, [narrowMobile]);

  /** Al ceder paso al siguiente bloque: sube más y se encoge un poco (ilusión de “bajar” la mirada). */
  const textEnterY = narrowMobile ? 20 : 28;
  const textExitY = narrowMobile ? -78 : -132;
  const textExitScale = narrowMobile ? 0.9 : 0.86;
  const splitExitScale = narrowMobile ? 0.91 : 0.87;

  const lineOneOpacity = useTransform(parallaxProgress, k.l1o, [0, 1, 1, 0]);
  const lineOneY = useTransform(parallaxProgress, k.l1y, [
    textEnterY,
    0,
    textExitY,
  ]);
  const lineOneScale = useTransform(parallaxProgress, k.l1s, [1, textExitScale]);
  const lineOneBlur = useTransform(parallaxProgress, k.l1b, [
    "blur(6px)",
    "blur(0px)",
    "blur(0px)",
    "blur(10px)",
  ]);

  const lineTwoOpacity = useTransform(parallaxProgress, k.l2o, [0, 1, 1, 0]);
  const lineTwoY = useTransform(parallaxProgress, k.l2y, [
    textEnterY,
    0,
    textExitY,
  ]);
  const lineTwoScale = useTransform(parallaxProgress, k.l2s, [1, textExitScale]);
  const lineTwoBlur = useTransform(parallaxProgress, k.l2b, [
    "blur(6px)",
    "blur(0px)",
    "blur(0px)",
    "blur(10px)",
  ]);

  const splitOpacity = useTransform(parallaxProgress, k.spo, [0, 1, 1, 0]);
  const splitLeftX = useTransform(parallaxProgress, k.spl, [-splitSlidePx, 0]);
  const splitRightX = useTransform(parallaxProgress, k.spl, [splitSlidePx, 0]);
  const splitY = useTransform(parallaxProgress, k.spy, [
    textEnterY,
    0,
    textExitY,
  ]);
  const splitScale = useTransform(parallaxProgress, k.sps, [1, splitExitScale]);
  const splitBlur = useTransform(parallaxProgress, k.spb, [
    "blur(6px)",
    "blur(0px)",
    "blur(0px)",
    "blur(10px)",
  ]);

  return (
    <section
      ref={parallaxSectionRef}
      className="relative max-md:h-[min(340vh,4800px)] md:h-[265vh]"
    >
      <div className="sticky top-0 flex h-dvh min-h-0 items-center justify-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-radial-[80%_80%_at_50%_50%]" />
        <div className="absolute inset-0 flex items-center justify-center px-4 max-md:py-8 sm:px-6">
          <MotionP
            style={{
              opacity: lineOneOpacity,
              y: lineOneY,
              scale: lineOneScale,
              filter: lineOneBlur,
            }}
            className="w-full max-w-6xl text-center font-display text-[clamp(2.15rem,11vw,11rem)] leading-[0.92] tracking-tight text-black font-bold md:text-[clamp(2.8rem,11vw,11rem)]"
          >
            {t("parallaxReserve.line1")}
          </MotionP>
        </div>
        <div className="absolute inset-0 flex items-center justify-center px-4 max-md:py-8 sm:px-6">
          <MotionP
            style={{
              opacity: lineTwoOpacity,
              y: lineTwoY,
              scale: lineTwoScale,
              filter: lineTwoBlur,
            }}
            className="w-full max-w-6xl text-center font-display text-[clamp(1.72rem,6.8vw,6rem)] leading-[0.98] tracking-tight text-black font-bold md:text-[clamp(2rem,7.4vw,6rem)]"
          >
            {t("parallaxReserve.line2Before")}
            <span className="text-principal">{t("parallaxReserve.line2Accent")}</span>
          </MotionP>
        </div>
        <div className="absolute inset-0 flex items-center justify-center px-4 max-md:py-8 sm:px-6">
          <MotionDiv
            style={{
              opacity: splitOpacity,
              y: splitY,
              scale: splitScale,
              filter: splitBlur,
            }}
            className="flex w-full max-w-6xl flex-col items-center gap-2 text-center font-display text-[clamp(1.38rem,6.2vw,5.6rem)] leading-[0.96] tracking-tight text-black font-bold max-md:px-1 md:gap-2 md:text-[clamp(1.8rem,6vw,5.6rem)]"
          >
            <MotionSpan
              style={{ x: splitLeftX }}
              className="block max-w-[min(100%,22rem)] md:max-w-none"
            >
              {t("parallaxReserve.split1")}
            </MotionSpan>
            <MotionSpan
              style={{ x: splitRightX }}
              className="block max-w-[min(100%,22rem)] md:max-w-none"
            >
              {t("parallaxReserve.split2")}
            </MotionSpan>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default ParallaxReservationSection;
