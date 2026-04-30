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

export const HeroAlignnaButtonGlow = ({ to, ariaLabel, logoSrc }) => (
  <GlowPillLink
    to={to}
    aria-label={ariaLabel}
    pulse
  >
    <MotionImg
      src={logoSrc}
      alt="Alignna"
      className="relative z-10 h-8 w-auto opacity-100 drop-shadow-[0_1px_1px_rgba(0,0,0,0.14)] transition-[filter,opacity] duration-500 ease-in-out group-hover:filter-[brightness(0)_saturate(100%)_invert(69%)_sepia(16%)_saturate(590%)_hue-rotate(98deg)_brightness(92%)_contrast(90%)] sm:h-9 md:h-11 lg:h-15"
      decoding="async"
    />
  </GlowPillLink>
);
