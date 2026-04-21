import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Reveal from "../components/Reveal";
import ParallaxReservationSection from "../components/ParallaxReservationSection";
import ParallaxCards from "../components/ParallaxCards";
import heroHandsUrl from "../assets/michPageAssets/pageDecoration/mano-de-dios-chingona.png";
import engineerSectionBgUrl from "../assets/michPageAssets/pageDecoration/background-image1.png";
import fondoEsferasUrl from "../assets/michPageAssets/pageDecoration/fondo-esferas.jpg";
import alignnaBlancoRotoUrl from "../assets/michPageAssets/logos-icons/Alignna-BlancoRoto.svg";

const MotionP = motion.p;
const MotionSpan = motion.span;
const MotionImg = motion.img;

const ease = [0.22, 0.61, 0.36, 1];

const HERO_ROTATE_WORDS = ["conciencia", "ideas", "futuro", "impacto"];

const Bleed = ({ children, className = "" }) => (
  <div className={`relative left-1/2 w-screen -translate-x-1/2 ${className}`}>
    {children}
  </div>
);

const Home = () => {
  const [heroWordIndex, setHeroWordIndex] = useState(0);
  const heroSectionRef = useRef(null);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroSectionRef,
    offset: ["start start", "end start"],
  });

  const heroImageScale = useTransform(heroScroll, [0, 1], [1, 1.14]);
  const heroImageBlur = useTransform(heroScroll, [0, 1], ["blur(0px)", "blur(6px)"]);

  useEffect(() => {
    const id = setInterval(() => {
      setHeroWordIndex((i) => (i + 1) % HERO_ROTATE_WORDS.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="pb-8">
      <Bleed>
        <section
          ref={heroSectionRef}
          className="relative isolate min-h-[min(92vh,960px)] overflow-hidden bg-terciario"
        >
          <MotionImg
            src={heroHandsUrl}
            alt=""
            style={{ scale: heroImageScale, filter: heroImageBlur }}
            className="pointer-events-none absolute inset-0 z-0 h-full min-h-full w-full min-w-full origin-center select-none object-cover object-[center_38%] opacity-[0.98] sm:object-[center_40%]"
            decoding="async"
          />
          <div className="pointer-events-none absolute inset-0 z-1 bg-linear-to-b from-terciario/88 via-terciario/20 to-terciario/92" />

          <div className="relative z-10 mx-auto flex min-h-[min(92vh,960px)] max-w-[1600px] flex-col px-6 pb-16 pt-10 md:px-10 md:pb-20 md:pt-14">
            <MotionP
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease }}
              className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-neutral-500"
            >
              Ingeniería mecánica
            </MotionP>
            <h1 className="mt-10 text-center font-display text-[clamp(1.85rem,5.2vw,3.15rem)] font-medium leading-[1.15] tracking-tight text-ink md:mt-14">
              <span className="block">Tecnología con alma.</span>
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.15 }}
              className="mx-auto mt-8 max-w-lg text-left text-[0.95rem] leading-relaxed text-neutral-600 md:ml-auto md:mr-[4%] md:mt-10 md:max-w-md md:text-base"
            >
              <p>¿Este camino de carga merece existir?</p>
              <p className="mt-2">Cada tolerancia es una promesa.</p>
              <p className="mt-2">
                Menos suposiciones, más{" "}
                <span className="font-semibold text-ink">evidencia</span>.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease, delay: 0.28 }}
              className="mt-auto grid items-end gap-10 pt-14 md:grid-cols-[1fr_auto_1fr] md:pt-20"
            >
              <div className="text-left md:pb-2">
                <p className="font-display text-[clamp(2rem,5vw,3.6rem)] font-medium leading-[1.02] tracking-tight text-ink">
                  Materializando <br />
                  <span className="relative inline-flex min-w-[9ch]">
                    <AnimatePresence mode="wait" initial={false}>
                      <MotionSpan
                        key={HERO_ROTATE_WORDS[heroWordIndex]}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35, ease }}
                        className="font-semibold italic text-ink"
                      >
                        {HERO_ROTATE_WORDS[heroWordIndex]}.
                      </MotionSpan>
                    </AnimatePresence>
                  </span>
                </p>
                <p className="mt-3 text-sm font-semibold italic text-neutral-600 md:text-lg">
                  Nada es casualidad.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <Link
                  to="/alignna"
                  className="rounded-full bg-principal px-16 py-4 shadow-[0_12px_30px_-16px_rgba(42,38,32,0.8)] transition-all duration-300 ease-out hover:scale-105 hover:bg-secundario active:scale-95"
                  aria-label="Ir a Alignna"
                >
                  <img
                    src={alignnaBlancoRotoUrl}
                    alt="Alignna"
                    className="h-7 w-auto sm:h-8 md:h-10 lg:h-14"
                    decoding="async"
                  />
                </Link>
                <p className="text-center text-base text-ink">
                  Es solo el comienzo
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </Bleed>

      <Bleed>
        <section className="relative isolate overflow-hidden bg-[#f2f2f3] pt-24 pb-24 md:pt-30 md:pb-30 lg:pt-34 lg:pb-34">
          <img
            src={fondoEsferasUrl}
            alt=""
            className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-cover object-center opacity-25"
            decoding="async"
          />
          <div className="pointer-events-none absolute inset-0 z-1 bg-linear-to-b from-white/40 via-white/30 to-white/35" />
          <div className="pointer-events-none absolute inset-x-0 top-0 z-2 h-24 bg-linear-to-b from-terciario/70 via-terciario/28 to-transparent md:h-28 lg:h-32" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-2 h-24 bg-linear-to-t from-terciario/28 via-terciario/10 to-transparent md:h-28 lg:h-32" />
          <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="mx-auto max-w-5xl text-ink">
              <Reveal>
                <p className="font-display text-[clamp(2rem,4.6vw,3.3rem)] font-medium leading-[1.2] tracking-tight">
                  Ingeniera.
                </p>
              </Reveal>
              <Reveal delay={0.06}>
                <p className="mt-8 text-[clamp(1.2rem,2.3vw,2.05rem)] leading-tight tracking-tight text-ink/85">
                  Obsesionada con entender <span className="font-semibold text-ink">cómo funcionan</span> las cosas.
                  <br />
                  Pero más aún, con <span className="font-semibold text-ink">cómo se sienten.</span>
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-8 text-[clamp(1.2rem,2.3vw,2.05rem)] leading-tight tracking-tight text-ink/85">
                  Algunos objetos solo existen, otros <span className="font-semibold text-ink">trascienden.</span>
                  <br />
                  De ser materia se convierten en <span className="font-semibold text-ink">experiencia.</span>
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="mt-10 text-[clamp(1.2rem,2.3vw,2.05rem)] leading-tight tracking-tight text-ink/85">
                  La diferencia está en la <span className="font-semibold text-ink">intención.</span>
                </p>
              </Reveal>
              <Reveal delay={0.22}>
                <p className="mt-4 text-[clamp(1.25rem,2.45vw,2.2rem)] font-semibold leading-[1.2] tracking-tight text-ink">
                  De mi mente a tus manos.
                </p>
              </Reveal>
              <Reveal delay={0.28}>
                <p className="mt-14 text-right font-display text-[clamp(1.3rem,2.2vw,2rem)] italic text-ink/80 md:mt-18">
                  -Michelle Castellanos
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      </Bleed>

      <Bleed>
        <section className="relative isolate -mt-6 flex min-h-[70vh] items-center overflow-hidden bg-linear-to-b from-[#f2f2f3] via-white to-terciario/48 py-22 md:-mt-8 md:min-h-[78vh] md:py-30 lg:min-h-[84vh] lg:py-36">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-1 h-28 bg-linear-to-b from-[#f2f2f3] via-white/65 to-transparent md:h-36" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-1 h-24 bg-linear-to-t from-terciario/72 to-transparent md:h-28" />
          <motion.img
            src={engineerSectionBgUrl}
            alt=""
            className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-cover object-[78%_center] md:object-[82%_center] lg:object-right"
            initial={{ opacity: 0, x: 48, scale: 0.96 }}
            whileInView={{ opacity: 0.56, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 1.05, ease }}
            decoding="async"
          />
          <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 text-center md:px-12">
            <motion.h2
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.55 }}
              transition={{ duration: 0.82, ease }}
              className="mx-auto max-w-[13ch] text-balance font-display text-[clamp(2.2rem,5.4vw,4.35rem)] font-medium leading-[1.06] tracking-tight text-ink"
            >
              Diseñamos solo lo que merece existir
            </motion.h2>
            <div className="mx-auto mt-10 max-w-md space-y-5 text-pretty text-[clamp(1.05rem,1.35vw,1.75rem)] leading-[1.28] text-ink/90 md:mt-12">
              <MotionP
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.75 }}
                transition={{ duration: 0.58, ease, delay: 0.08 }}
              >
                ¿Esto realmente mejora la experiencia humana?
              </MotionP>
              <MotionP
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.75 }}
                transition={{ duration: 0.58, ease, delay: 0.18 }}
              >
                Cada detalle importa.
              </MotionP>
              <MotionP
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.75 }}
                transition={{ duration: 0.58, ease, delay: 0.28 }}
                className="pt-2"
              >
                Menos ruido,
              </MotionP>
              <MotionP
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.75 }}
                transition={{ duration: 0.58, ease, delay: 0.38 }}
                className="font-medium"
              >
                Más <span className="font-semibold">intención.</span>
              </MotionP>
            </div>
          </div>
        </section>
      </Bleed>

      <ParallaxReservationSection />

      <ParallaxCards />
    </div>
  );
};

export default Home;
