import { Link } from "react-router-dom";
import { useId } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

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
const CtaArrowIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
  >
    <path
      d="M5 12h14M14 7l5 5-5 5"
      stroke="currentColor"
      strokeWidth="1.55"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HeroAlignnaButtonGlow = ({ to, ariaLabel, logoSrc }) => {
  const { t } = useTranslation();

  return (
    <GlowPillLink
      to={to}
      ariaLabel={ariaLabel}
      pulse
      className="min-h-14 min-w-[min(100%,20rem)] px-6 py-3.5 hover:scale-[1.035] sm:min-w-88 sm:px-8 sm:py-4 md:min-w-96 md:px-11 md:py-4.5 lg:min-w-104 lg:px-14 lg:py-5"
    >
      <span className="relative z-10 flex items-center justify-center gap-3 font-display text-[clamp(1.05rem,2.9vw,1.32rem)] font-semibold tracking-[0.03em] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.12)] transition-colors duration-500 ease-in-out group-hover:text-[#2a4a3d] sm:gap-3.5 sm:text-[clamp(1.1rem,2.5vw,1.38rem)] md:text-[clamp(1.15rem,2.2vw,1.45rem)] lg:gap-4 lg:text-[clamp(1.2rem,1.9vw,1.55rem)]">
        <span className="whitespace-nowrap">{t("home.alignnaCtaAction")}</span>
        <MotionImg
          src={logoSrc}
          alt=""
          className="h-[1.52em] w-auto max-w-[min(48vw,10.5rem)] object-contain object-center opacity-95 transition-[filter,opacity] duration-500 ease-in-out group-hover:brightness-0 group-hover:opacity-100 sm:max-w-48 md:h-[1.62em] md:max-w-52 lg:h-[1.68em] lg:max-w-56"
          decoding="async"
        />
        <CtaArrowIcon className="h-[1.12em] w-[1.12em] shrink-0 sm:h-[1.2em] sm:w-[1.2em] md:h-[1.22em] md:w-[1.22em]" />
      </span>
    </GlowPillLink>
  );
};
