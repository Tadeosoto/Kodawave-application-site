import { useRef, useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import cBlancoRotoUrl from "../assets/michPageAssets/logos-icons/C-BlancoRoto.svg";

const MotionP = motion.p;
const MotionDiv = motion.div;
const MotionSpan = motion.span;

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
  const parallaxSectionRef = useRef(null);
  const splitSlidePx = useSplitSlidePx();
  const narrowMobile = useNarrowMobile();

  const { scrollYProgress: parallaxProgress } = useScroll({
    target: parallaxSectionRef,
    offset: ["start start", "end end"],
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
        rvo: [0.9, 0.965, 1],
        rvy: [0.9, 0.965],
        rvs: [0.9, 0.965],
        rvb: [0.9, 0.965],
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
      rvo: [0.87, 0.95, 1],
      rvy: [0.87, 0.95],
      rvs: [0.87, 0.95],
      rvb: [0.87, 0.95],
    };
  }, [narrowMobile]);

  const lineOneOpacity = useTransform(parallaxProgress, k.l1o, [0, 1, 1, 0]);
  const lineOneY = useTransform(parallaxProgress, k.l1y, [24, 0, -24]);
  const lineOneScale = useTransform(parallaxProgress, k.l1s, [1, 0.92]);
  const lineOneBlur = useTransform(parallaxProgress, k.l1b, [
    "blur(6px)",
    "blur(0px)",
    "blur(0px)",
    "blur(8px)",
  ]);

  const lineTwoOpacity = useTransform(parallaxProgress, k.l2o, [0, 1, 1, 0]);
  const lineTwoY = useTransform(parallaxProgress, k.l2y, [24, 0, -24]);
  const lineTwoScale = useTransform(parallaxProgress, k.l2s, [1, 0.92]);
  const lineTwoBlur = useTransform(parallaxProgress, k.l2b, [
    "blur(6px)",
    "blur(0px)",
    "blur(0px)",
    "blur(8px)",
  ]);

  const splitOpacity = useTransform(parallaxProgress, k.spo, [0, 1, 1, 0]);
  const splitLeftX = useTransform(parallaxProgress, k.spl, [-splitSlidePx, 0]);
  const splitRightX = useTransform(parallaxProgress, k.spl, [splitSlidePx, 0]);
  const splitY = useTransform(parallaxProgress, k.spy, [24, 0, -24]);
  const splitScale = useTransform(parallaxProgress, k.sps, [1, 0.93]);
  const splitBlur = useTransform(parallaxProgress, k.spb, [
    "blur(6px)",
    "blur(0px)",
    "blur(0px)",
    "blur(8px)",
  ]);

  const reserveOpacity = useTransform(parallaxProgress, k.rvo, [0, 1, 1]);
  const reserveY = useTransform(parallaxProgress, k.rvy, [24, 0]);
  const reserveScale = useTransform(parallaxProgress, k.rvs, [0.95, 1]);
  const reserveBlur = useTransform(parallaxProgress, k.rvb, [
    "blur(6px)",
    "blur(0px)",
  ]);

  return (
    <section
      ref={parallaxSectionRef}
      className="relative max-md:h-[min(640vh,9000px)] md:h-[360vh]"
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
            className="w-full max-w-6xl text-center font-display text-[clamp(1.85rem,9vw,11rem)] leading-[0.92] tracking-tight text-black font-bold md:text-[clamp(2.8rem,11vw,11rem)]"
          >
            No es para todos.
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
            className="w-full max-w-6xl text-center font-display text-[clamp(1.45rem,5.5vw,6rem)] leading-[0.98] tracking-tight text-black font-bold md:text-[clamp(2rem,7.4vw,6rem)]"
          >
            Pero si estás aquí,{" "}
            <span className="text-principal">siéntelo.</span>
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
            className="flex w-full max-w-6xl flex-col items-center gap-2 text-center font-display text-[clamp(1.15rem,4.8vw,5.6rem)] leading-[0.96] tracking-tight text-black font-bold max-md:px-1 md:gap-2 md:text-[clamp(1.8rem,6vw,5.6rem)]"
          >
            <MotionSpan
              style={{ x: splitLeftX }}
              className="block max-w-[min(100%,22rem)] md:max-w-none"
            >
              hay algo especial esperando
            </MotionSpan>
            <MotionSpan
              style={{ x: splitRightX }}
              className="block max-w-[min(100%,22rem)] md:max-w-none"
            >
              para quienes llegan primero
            </MotionSpan>
          </MotionDiv>
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center px-4 max-md:py-8 sm:px-6">
          <MotionDiv
            style={{
              opacity: reserveOpacity,
              y: reserveY,
              scale: reserveScale,
              filter: reserveBlur,
            }}
            className="flex w-full max-w-3xl flex-col items-center text-center"
          >
            <Link
              to="/contact"
              className="group flex h-auto min-h-14 w-full max-w-[min(100%,18rem)] items-center justify-center gap-2.5 rounded-full bg-principal px-8 py-3.5 text-lg font-semibold text-ink shadow-[0_12px_30px_-16px_rgba(0,0,0,0.9)] transition-all duration-300 ease-out hover:scale-105 hover:bg-secundario hover:text-white max-md:mx-auto max-md:max-w-[min(100%,20rem)] sm:min-h-18 sm:max-w-xs md:h-30 md:w-80 md:max-w-none md:gap-3 md:px-18 md:py-4 lg:text-6xl"
            >
              <span
                className="inline-block size-[1.1em] shrink-0 bg-current opacity-95 transition-[transform,opacity] duration-300 ease-out group-hover:scale-110 group-hover:opacity-100"
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
              Reservar
            </Link>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default ParallaxReservationSection;
