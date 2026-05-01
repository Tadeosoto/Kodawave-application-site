import { Link } from "react-router-dom";
import { useId } from "react";
import { motion } from "framer-motion";
const MotionLink = motion(Link);
const MotionImg = motion.img;

const pulseAnimation = {
  animate: { scale: [1, 1.014, 1.03, 1.042, 1.03, 1.014, 1] },
  transition: {
    duration: 2.8,
    ease: "easeInOut",
    times: [0, 0.16, 0.34, 0.5, 0.66, 0.84, 1],
    repeat: Infinity,
    repeatDelay: 1.15,
  },
};

export const GlowPillLink = ({
  to,
  ariaLabel,
  children,
  className = "",
  pulse = false,
  invertOnHover = true,
}) => {
  const filterId = useId().replace(/:/g, "");
  const motionProps = pulse ? pulseAnimation : {};

  const blurFillClass = invertOnHover
    ? "fill-[#84bca5]/74 transition-all duration-500 ease-in-out group-hover:fill-white/88"
    : "fill-[#84bca5]/74 transition-all duration-500 ease-in-out group-hover:fill-[#84bca5]/78";
  const topFillClass = invertOnHover
    ? "fill-[#84bca5]/20 transition-all duration-500 ease-in-out group-hover:fill-white/35"
    : "fill-[#84bca5]/20 transition-all duration-500 ease-in-out group-hover:fill-[#84bca5]/24";

  return (
    <MotionLink
      to={to}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full px-14 py-3.5 transition-all duration-300 ease-out hover:scale-[1.045] active:scale-[0.98] ${className}`}
      aria-label={ariaLabel}
      style={{ willChange: "transform" }}
      {...motionProps}
    >
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <filter id={filterId} x="-10%" y="-20%" width="120%" height="140%">
            <feGaussianBlur stdDeviation="3.6" />
          </filter>
        </defs>
        <rect
          x="1.5"
          y="1.5"
          width="97"
          height="97"
          rx="49"
          ry="49"
          filter={`url(#${filterId})`}
          className={blurFillClass}
        />
        <rect
          x="1.5"
          y="1.5"
          width="97"
          height="97"
          rx="49"
          ry="49"
          className={topFillClass}
        />
      </svg>
      {children}
    </MotionLink>
  );
};

export const HeroAlignnaButtonLegacy = ({ to, ariaLabel, logoSrc }) => (
  <MotionLink
    to={to}
    className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-transparent px-14 py-3.5 transition-all duration-300 ease-out hover:scale-[1.045] active:scale-[0.98]"
    aria-label={ariaLabel}
    style={{ willChange: "transform" }}
    {...pulseAnimation}
  >
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      <rect
        x="1.5"
        y="1.5"
        width="97"
        height="97"
        rx="49"
        ry="49"
        className="fill-none stroke-black/85 stroke-[1.6] transition-opacity duration-250 ease-out group-hover:opacity-0"
      />
    </svg>
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      <rect
        x="1.5"
        y="1.5"
        width="97"
        height="97"
        rx="49"
        ry="49"
        className="fill-[#84bca5] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
      />
      <rect
        x="1.5"
        y="1.5"
        width="97"
        height="97"
        rx="49"
        ry="49"
        pathLength="1"
        className="fill-none stroke-[#ffffff] stroke-2 [stroke-dasharray:1] [stroke-dashoffset:1] opacity-0 transition-[stroke-dashoffset,opacity] duration-500 ease-out group-hover:[stroke-dashoffset:0] group-hover:opacity-100"
      />
    </svg>
    <MotionImg
      src={logoSrc}
      alt="Alignna"
      className="relative z-10 h-8 w-auto brightness-0 transition-[filter] duration-500 ease-out group-hover:brightness-100 sm:h-9 md:h-11 lg:h-15"
      decoding="async"
    />
  </MotionLink>
);

/** Flecha fina tipo editorial (hereda `currentColor` del CTA). */
const CtaArrowIcon = ({ className = "", strokeWidth: sw = 1.55 }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
  >
    <path
      d="M5 12h14M14 7l5 5-5 5"
      stroke="currentColor"
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HeroAlignnaButtonGlow = ({ to, ariaLabel, logoSrc }) => (
  <GlowPillLink
    to={to}
    ariaLabel={ariaLabel}
    pulse
    className="min-h-14 min-w-[min(100%,17rem)] px-6 py-3.5 hover:scale-[1.035] sm:min-w-80 sm:px-8 sm:py-4 md:min-w-88 md:px-10 md:py-4.5 lg:min-w-96 lg:px-11 lg:py-5"
  >
    <span className="relative z-10 flex items-center justify-center gap-3 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.12)] transition-colors duration-500 ease-in-out group-hover:text-[#2a4a3d] sm:gap-3.5 md:gap-4">
      <MotionImg
        src={logoSrc}
        alt=""
        className="h-[clamp(2.15rem,6.2vw,2.95rem)] w-auto max-w-[min(58vw,13rem)] object-contain object-center opacity-95 transition-[filter,opacity] duration-500 ease-in-out group-hover:brightness-0 group-hover:opacity-100 sm:max-w-60 md:h-[clamp(2.4rem,5.2vw,3.25rem)] md:max-w-64 lg:h-[clamp(2.65rem,4.2vw,3.65rem)] lg:max-w-72"
        decoding="async"
      />
      <CtaArrowIcon
        className="h-[1.38em] w-[1.38em] shrink-0 sm:h-[1.48em] sm:w-[1.48em] md:h-[1.58em] md:w-[1.58em] lg:h-[1.68em] lg:w-[1.68em]"
        strokeWidth={1.72}
      />
    </span>
  </GlowPillLink>
);
