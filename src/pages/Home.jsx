import { Suspense, lazy, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import heroHandsPng from "../assets/michPageAssets/pageDecoration/Mano de dios PNG.png";
import heroHandsWebp from "../assets/michPageAssets/pageDecoration/Mano de dios PNG.webp";
import heroHandsAvif from "../assets/michPageAssets/pageDecoration/Mano de dios PNG.avif";
import engineerSectionPng from "../assets/michPageAssets/pageDecoration/background-image1.png";
import engineerSectionWebp from "../assets/michPageAssets/pageDecoration/background-image1.webp";
import engineerSectionAvif from "../assets/michPageAssets/pageDecoration/background-image1.avif";
import fondoEsferasUrl from "../assets/michPageAssets/pageDecoration/fondo-esferas.jpg";
import alignnaBlancoRotoUrl from "../assets/michPageAssets/logos-icons/Alignna-BlancoRoto.svg";
import ParallaxReservationSection from "../components/ParallaxReservationSection";
import { HeroAlignnaButtonGlow } from "../components/HeroAlignnaButtons";

const ParallaxCards = lazy(() => import("../components/ParallaxCards"));

const MotionP = motion.p;
const MotionSpan = motion.span;
const MotionH1 = motion.h1;

const ease = [0.22, 0.61, 0.36, 1];

const clamp01 = (value) => Math.max(0, Math.min(1, value));

const RevealToken = ({ word, strong, index, total, progress }) => {
  const opacity = useTransform(progress, (p) => {
    const dim = 0.2;
    const t = p * total - index;
    if (t <= 0) return dim;
    if (t >= 1) return 1;
    const s = t * t * (3 - 2 * t);
    return dim + (1 - dim) * s;
  });

  return (
    <MotionSpan
      className={`inline wrap-anywhere ${strong ? "font-semibold text-ink" : ""}`}
      style={{ opacity }}
    >
      {word}
    </MotionSpan>
  );
};

const ScrollRevealLine = ({ progress, parts }) => {
  const tokens = parts.flatMap((part) =>
    part.text
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .map((word) => ({ word, strong: Boolean(part.strong) })),
  );
  const total = tokens.length || 1;

  return tokens.map((token, i) => {
    return (
      <span key={`${token.word}-${i}`}>
        {i > 0 ? <span aria-hidden> </span> : null}
        <RevealToken
          word={token.word}
          strong={token.strong}
          index={i}
          total={total}
          progress={progress}
        />
      </span>
    );
  });
};

const Bleed = ({ children, className = "" }) => (
  <div className={`relative left-1/2 w-screen -translate-x-1/2 ${className}`}>
    {children}
  </div>
);

const Home = () => {
  const { t } = useTranslation();
  const [heroWordIndex, setHeroWordIndex] = useState(0);
  const heroSectionRef = useRef(null);
  const engineerSectionRef = useRef(null);

  const heroRotateWords = useMemo(
    () => t("home.heroRotateWords", { returnObjects: true }),
    [t],
  );
  const words = Array.isArray(heroRotateWords) ? heroRotateWords : [];

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroSectionRef,
    offset: ["start start", "end start"],
  });

  const heroImageScale = useTransform(heroScroll, [0, 1], [1, 1.14]);
  /** Palidez fija + blur al scroll (un solo `filter` para que no pise clases CSS). */
  const heroImageFilter = useTransform(
    heroScroll,
    [0, 1],
    [
      "brightness(1.03) saturate(0.66) contrast(0.82) blur(0.6px)",
      "brightness(1.03) saturate(0.66) contrast(0.82) blur(8px)",
    ],
  );
  const { scrollYProgress: engineerScroll } = useScroll({
    target: engineerSectionRef,
    offset: ["start 82%", "start 18%"],
  });
  const engineerLine1Progress = useTransform(engineerScroll, (v) =>
    clamp01((v - 0.08) / 0.2),
  );
  const engineerLine2Progress = useTransform(engineerScroll, (v) =>
    clamp01((v - 0.2) / 0.2),
  );
  const engineerLine3Progress = useTransform(engineerScroll, (v) =>
    clamp01((v - 0.32) / 0.2),
  );
  const engineerLine4Progress = useTransform(engineerScroll, (v) =>
    clamp01((v - 0.44) / 0.2),
  );
  const engineerLine5Progress = useTransform(engineerScroll, (v) =>
    clamp01((v - 0.56) / 0.18),
  );
  const engineerLine6Progress = useTransform(engineerScroll, (v) =>
    clamp01((v - 0.68) / 0.18),
  );

  useEffect(() => {
    if (!words.length) return;
    const id = setInterval(() => {
      setHeroWordIndex((i) => (i + 1) % words.length);
    }, 2600);
    return () => clearInterval(id);
  }, [words.length]);

  const wordIndex = words.length ? heroWordIndex % words.length : 0;
  const activeHeroWord = words[wordIndex] ?? "";

  return (
    <div className="pb-0">
      <Bleed>
        <section
          ref={heroSectionRef}
          className="relative isolate min-h-[min(92vh,960px)] overflow-hidden bg-terciario"
        >
          <motion.div
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, ease, delay: 0.1 }}
          >
            <motion.div
              className="pointer-events-none absolute inset-0 h-full min-h-full w-full min-w-full origin-center"
              style={{ scale: heroImageScale, filter: heroImageFilter }}
            >
              <picture className="block h-full w-full">
                <source srcSet={heroHandsAvif} type="image/avif" />
                <source srcSet={heroHandsWebp} type="image/webp" />
                <img
                  src={heroHandsPng}
                  alt=""
                  width={1536}
                  height={1024}
                  fetchPriority="high"
                  decoding="async"
                  className="pointer-events-none h-full w-full select-none object-cover object-[center_38%] sm:object-[center_40%]"
                />
              </picture>
            </motion.div>
          </motion.div>
          <div className="pointer-events-none absolute inset-0 z-1 bg-linear-to-b from-terciario/88 via-terciario/20 to-terciario/92" />

          <div className="relative z-10 mx-auto flex min-h-[min(92vh,960px)] max-w-[1600px] flex-col px-6 pb-16 pt-10 md:px-10 md:pb-20 md:pt-14">
            <MotionH1
              initial={{ opacity: 0, y: -26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, ease, delay: 0.08 }}
              className="mt-10 text-center font-display text-[clamp(1.85rem,5.2vw,3.15rem)] font-medium leading-[1.15] tracking-tight text-ink md:mt-14"
            >
              <span className="block">{t("home.heroTitle")}</span>
            </MotionH1>
            <motion.div
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease, delay: 0.18 }}
              className="mx-auto mt-8 max-w-lg text-left text-[0.95rem] leading-relaxed text-neutral-600 md:ml-auto md:mr-[4%] md:mt-10 md:max-w-md md:text-base"
            />
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease, delay: 0.32 }}
              className="mt-auto grid items-end gap-10 pt-14 md:grid-cols-[1fr_auto_1fr] md:pt-20"
            >
              <div className="text-left md:pb-2">
                <p className="font-display text-[clamp(2rem,5vw,3.6rem)] font-medium leading-[1.02] tracking-tight text-ink">
                  {t("home.heroMaterialising")} <br />
                  <span className="relative inline-flex min-w-[9ch]">
                    <AnimatePresence mode="wait" initial={false}>
                      <MotionSpan
                        key={activeHeroWord}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35, ease }}
                        className="font-semibold italic text-ink"
                      >
                        {activeHeroWord}.
                      </MotionSpan>
                    </AnimatePresence>
                  </span>
                </p>
                <p className="mt-3 text-sm font-semibold italic text-neutral-600 md:text-lg">
                  {t("home.heroTagline")}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <HeroAlignnaButtonGlow
                  to="/alignna"
                  ariaLabel={t("nav.goToAlignna")}
                  logoSrc={alignnaBlancoRotoUrl}
                />
                <p className="text-center text-base text-ink">
                  {t("home.alignnaCtaCaption")}
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </Bleed>

      <Bleed>
        <section className="relative isolate -mt-6 flex min-h-[70vh] items-center overflow-hidden bg-linear-to-b from-terciario/55 via-white to-terciario/48 py-22 md:-mt-8 md:min-h-[78vh] md:py-30 lg:min-h-[84vh] lg:py-36">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-1 h-28 bg-linear-to-b from-terciario/85 via-white/50 to-transparent md:h-36" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-1 h-24 bg-linear-to-t from-terciario/72 to-transparent md:h-28" />
          <div className="pointer-events-none absolute inset-0 z-1 bg-white/48 md:bg-transparent" />
          <motion.div
            className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            initial={{ opacity: 0, x: 48, scale: 0.96 }}
            whileInView={{ opacity: 0.56, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 1.05, ease }}
          >
            <picture className="block h-full w-full">
              <source srcSet={engineerSectionAvif} type="image/avif" />
              <source srcSet={engineerSectionWebp} type="image/webp" />
              <img
                src={engineerSectionPng}
                alt=""
                width={1024}
                height={540}
                loading="lazy"
                decoding="async"
                className="pointer-events-none h-full w-full select-none object-cover object-[78%_center] max-md:brightness-[1.28] max-md:saturate-[0.58] max-md:contrast-[0.72] max-md:grayscale-[0.12] md:object-[82%_center] lg:object-right"
              />
            </picture>
          </motion.div>
          <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 text-center md:px-12">
            <motion.h2
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.55 }}
              transition={{ duration: 0.82, ease }}
              className="mx-auto max-w-[13ch] text-balance font-display text-[clamp(2.2rem,5.4vw,4.35rem)] font-medium leading-[1.06] tracking-tight text-ink max-md:text-[clamp(2.5rem,11vw,3.2rem)]"
            >
              {t("home.manifestoTitle")}
            </motion.h2>
            <div className="mx-auto mt-10 max-w-md space-y-5 text-pretty text-[clamp(1.05rem,1.35vw,1.75rem)] leading-[1.28] text-ink/90 max-md:text-[clamp(1.28rem,5.8vw,1.65rem)] max-md:leading-[1.34] md:mt-12">
              <MotionP
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.75 }}
                transition={{ duration: 0.58, ease, delay: 0.08 }}
              >
                {t("home.manifestoQ")}
              </MotionP>
              <MotionP
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.75 }}
                transition={{ duration: 0.58, ease, delay: 0.18 }}
              >
                {t("home.manifestoDetail")}
              </MotionP>
              <MotionP
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.75 }}
                transition={{ duration: 0.58, ease, delay: 0.28 }}
                className="pt-2"
              >
                {t("home.manifestoLessNoise")}
              </MotionP>
              <MotionP
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.75 }}
                transition={{ duration: 0.58, ease, delay: 0.38 }}
                className="font-medium"
              >
                {t("home.manifestoMorePrefix")}
                <span className="font-semibold">{t("home.manifestoIntentWord")}</span>
              </MotionP>
            </div>
          </div>
        </section>
      </Bleed>

      <Bleed>
        <section
          ref={engineerSectionRef}
          className="relative isolate overflow-hidden bg-[#f2f2f3] pt-24 pb-24 md:pt-30 md:pb-30 lg:pt-34 lg:pb-34"
        >
          <img
            src={fondoEsferasUrl}
            alt=""
            width={900}
            height={675}
            loading="lazy"
            decoding="async"
            className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-cover object-center opacity-25"
          />
          <div className="pointer-events-none absolute inset-0 z-1 bg-linear-to-b from-white/40 via-white/30 to-white/35" />
          <div className="pointer-events-none absolute inset-x-0 top-0 z-2 h-24 bg-linear-to-b from-white/80 via-white/35 to-transparent md:h-28 lg:h-32" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-2 h-24 bg-linear-to-t from-terciario/28 via-terciario/10 to-transparent md:h-28 lg:h-32" />
          <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="mx-auto max-w-5xl text-ink">
              <p className="font-display text-[clamp(2rem,4.6vw,3.3rem)] font-medium leading-[1.2] tracking-tight">
                <ScrollRevealLine
                  progress={engineerLine1Progress}
                  parts={[{ text: t("home.engineerLine1") }]}
                />
              </p>
              <p className="mt-8 text-[clamp(1.2rem,2.3vw,2.05rem)] leading-tight tracking-tight text-ink/85">
                <ScrollRevealLine
                  progress={engineerLine2Progress}
                  parts={[
                    { text: t("home.engineerParts2a") },
                    { text: t("home.engineerParts2b"), strong: true },
                  ]}
                />
                <br />
                <ScrollRevealLine
                  progress={engineerLine3Progress}
                  parts={[
                    { text: t("home.engineerParts3a") },
                    { text: t("home.engineerParts3b"), strong: true },
                  ]}
                />
              </p>
              <p className="mt-8 text-[clamp(1.2rem,2.3vw,2.05rem)] leading-tight tracking-tight text-ink/85">
                <ScrollRevealLine
                  progress={engineerLine4Progress}
                  parts={[
                    { text: t("home.engineerParts4a") },
                    { text: t("home.engineerParts4b"), strong: true },
                  ]}
                />
                <br />
                <ScrollRevealLine
                  progress={engineerLine5Progress}
                  parts={[
                    { text: t("home.engineerParts5a") },
                    { text: t("home.engineerParts5b"), strong: true },
                  ]}
                />
              </p>
              <p className="mt-10 text-[clamp(1.2rem,2.3vw,2.05rem)] leading-tight tracking-tight text-ink/85">
                <ScrollRevealLine
                  progress={engineerLine6Progress}
                  parts={[
                    { text: t("home.engineerParts6a") },
                    { text: t("home.engineerParts6b"), strong: true },
                  ]}
                />
              </p>
              <p className="mt-4 text-[clamp(1.25rem,2.45vw,2.2rem)] font-semibold leading-[1.2] tracking-tight text-ink">
                <ScrollRevealLine
                  progress={engineerLine6Progress}
                  parts={[{ text: t("home.engineerClosing"), strong: true }]}
                />
              </p>
              <p className="mt-14 text-right font-display text-[clamp(1.3rem,2.2vw,2rem)] italic text-ink/80 md:mt-18">
                <ScrollRevealLine
                  progress={engineerLine6Progress}
                  parts={[{ text: t("home.engineerSignature") }]}
                />
              </p>
            </div>
          </div>
        </section>
      </Bleed>

      <Suspense
        fallback={
          <div
            className="relative min-h-[200vh] w-screen max-w-[100vw] ml-[calc(50%-50vw)] box-border bg-terciario"
            aria-hidden
          />
        }
      >
        <ParallaxCards />
      </Suspense>

      <div className="relative z-20 -mt-[38vh] md:-mt-[30vh]">
        <ParallaxReservationSection />
      </div>
    </div>
  );
};

export default Home;
