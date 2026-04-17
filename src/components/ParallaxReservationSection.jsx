import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

const MotionP = motion.p;
const MotionDiv = motion.div;
const MotionSpan = motion.span;

const ParallaxReservationSection = () => {
  const parallaxSectionRef = useRef(null);

  const { scrollYProgress: parallaxProgress } = useScroll({
    target: parallaxSectionRef,
    offset: ["start start", "end end"],
  });

  const lineOneOpacity = useTransform(
    parallaxProgress,
    [0, 0.08, 0.25, 0.36],
    [0, 1, 1, 0],
  );
  const lineOneY = useTransform(
    parallaxProgress,
    [0, 0.25, 0.36],
    [24, 0, -24],
  );
  const lineOneScale = useTransform(parallaxProgress, [0.25, 0.36], [1, 0.92]);
  const lineOneBlur = useTransform(
    parallaxProgress,
    [0, 0.08, 0.25, 0.36],
    ["blur(6px)", "blur(0px)", "blur(0px)", "blur(8px)"],
  );

  const lineTwoOpacity = useTransform(
    parallaxProgress,
    [0.26, 0.36, 0.52, 0.64],
    [0, 1, 1, 0],
  );
  const lineTwoY = useTransform(
    parallaxProgress,
    [0.26, 0.52, 0.64],
    [24, 0, -24],
  );
  const lineTwoScale = useTransform(parallaxProgress, [0.52, 0.64], [1, 0.92]);
  const lineTwoBlur = useTransform(
    parallaxProgress,
    [0.26, 0.36, 0.52, 0.64],
    ["blur(6px)", "blur(0px)", "blur(0px)", "blur(8px)"],
  );

  const splitOpacity = useTransform(
    parallaxProgress,
    [0.52, 0.64, 0.8, 0.9],
    [0, 1, 1, 0],
  );
  const splitLeftX = useTransform(parallaxProgress, [0.52, 0.66], [-160, 0]);
  const splitRightX = useTransform(parallaxProgress, [0.52, 0.66], [160, 0]);
  const splitY = useTransform(parallaxProgress, [0.52, 0.8, 0.9], [24, 0, -24]);
  const splitScale = useTransform(parallaxProgress, [0.8, 0.9], [1, 0.93]);
  const splitBlur = useTransform(
    parallaxProgress,
    [0.52, 0.64, 0.8, 0.9],
    ["blur(6px)", "blur(0px)", "blur(0px)", "blur(8px)"],
  );

  const reserveOpacity = useTransform(
    parallaxProgress,
    [0.8, 0.9, 1],
    [0, 1, 1],
  );
  const reserveY = useTransform(parallaxProgress, [0.8, 0.9], [24, 0]);
  const reserveScale = useTransform(parallaxProgress, [0.8, 0.9], [0.95, 1]);
  const reserveBlur = useTransform(
    parallaxProgress,
    [0.8, 0.9],
    ["blur(6px)", "blur(0px)"],
  );

  return (
    <section
      ref={parallaxSectionRef}
      className="relative h-[320vh] bg-[principal] md:h-[360vh]"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-radial-[80%_80%_at_50%_50%] from- via-[principal-suave] to-[principal]" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <MotionP
            style={{
              opacity: lineOneOpacity,
              y: lineOneY,
              scale: lineOneScale,
              filter: lineOneBlur,
            }}
            className="w-full max-w-6xl text-center font-display text-[clamp(2.8rem,11vw,11rem)] leading-[0.92] tracking-tight text-black font-bold"
          >
            No es para todos.
          </MotionP>
        </div>
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <MotionP
            style={{
              opacity: lineTwoOpacity,
              y: lineTwoY,
              scale: lineTwoScale,
              filter: lineTwoBlur,
            }}
            className="w-full max-w-6xl text-center font-display text-[clamp(2rem,7.4vw,6rem)] leading-[0.98] tracking-tight text-black font-bold"
          >
            Pero si estás aquí,{" "}
            <span className="text-principal">siéntelo.</span>
          </MotionP>
        </div>
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <MotionDiv
            style={{
              opacity: splitOpacity,
              y: splitY,
              scale: splitScale,
              filter: splitBlur,
            }}
            className="flex w-full max-w-6xl flex-col items-center gap-3 text-center font-display text-[clamp(1.8rem,6vw,5.6rem)] leading-[0.96] tracking-tight text-black font-bold md:gap-2"
          >
            <MotionSpan style={{ x: splitLeftX }} className="block">
              Las primeras órdenes se llevan
            </MotionSpan>
            <MotionSpan style={{ x: splitRightX }} className="block">
              una travel bag edición limitada
            </MotionSpan>
          </MotionDiv>
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
          <MotionDiv
            style={{
              opacity: reserveOpacity,
              y: reserveY,
              scale: reserveScale,
              filter: reserveBlur,
            }}
            className="flex w-full max-w-3xl flex-col items-center text-center"
          >
            <p className="mb-10 max-w-2xl text-balance font-display text-[clamp(1.2rem,2.8vw,2.3rem)] leading-[1.24] text-white/82"></p>
            <Link
              to="/contact"
              className="rounded-full h-30 w-80 bg-principal px-18 py-4 text-lg font-semibold text-ink shadow-[0_12px_30px_-16px_rgba(0,0,0,0.9)] transition-all duration-300 ease-out hover:scale-105 hover:bg-secundario hover:text-white flex items-center justify-center lg:text-6xl"
            >
              Reservar
            </Link>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default ParallaxReservationSection;
