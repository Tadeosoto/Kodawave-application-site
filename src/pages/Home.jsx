import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { portfolioProjects, testimonials } from "../data/content";
import Reveal from "../components/Reveal";
import ParallaxReservationSection from "../components/ParallaxReservationSection";
import ParallaxCards from "../components/ParallaxCards";
import heroHandsUrl from "../assets/michPageAssets/pageDecoration/mano-de-dios-chingona.png";
import engineerSectionBgUrl from "../assets/michPageAssets/pageDecoration/background-image1.png";
import portraitMichelleUrl from "../assets/michPageAssets/michPhotos/hf_20260329_022232_608e361f-7fac-4089-bcf8-923d3e56c916.png";
import alignnaBlancoRotoUrl from "../assets/michPageAssets/logos-icons/Alignna-BlancoRoto.svg";

const MotionP = motion.p;
const MotionSpan = motion.span;
const MotionArticle = motion.article;
const MotionBlockquote = motion.blockquote;

const ease = [0.22, 0.61, 0.36, 1];

const HERO_ROTATE_WORDS = ["conciencia", "ideas", "futuro", "impacto"];

const capabilities = [
  {
    title: "Diseño mecánico",
    body: "Convierto requerimientos en geometría: disposiciones, mecanismos, decisiones de material y planos con tolerancias que sobreviven a manufactura.",
  },
  {
    title: "Pensamiento de sistemas",
    body: "Las interfaces, cargas y modos de falla se nombran desde temprano. Conecto CAD, intención de BOM y criterios de prueba para mantener coherencia técnica.",
  },
  {
    title: "Análisis y validación",
    body: "Cuando la pregunta es rigidez, vida útil o margen, combino cálculos manuales con CAE donde realmente aporta, dejando visibles las suposiciones.",
  },
  {
    title: "Construir y aprender",
    body: "Los prototipos no son teatro. Busco planos construibles, pruebas repetibles y retroalimentación que acelere la siguiente iteración.",
  },
];

const Bleed = ({ children, className = "" }) => (
  <div className={`relative left-1/2 w-screen -translate-x-1/2 ${className}`}>
    {children}
  </div>
);

const Home = () => {
  const [heroWordIndex, setHeroWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setHeroWordIndex((i) => (i + 1) % HERO_ROTATE_WORDS.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="pb-8">
      <Bleed>
        <section className="relative isolate min-h-[min(92vh,960px)] overflow-hidden bg-terciario">
          <img
            src={heroHandsUrl}
            alt=""
            className="pointer-events-none absolute inset-0 z-0 h-full min-h-full w-full min-w-full select-none object-cover object-[center_38%] opacity-[0.98] sm:object-[center_40%]"
            decoding="async"
          />
          <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-terciario/88 via-terciario/20 to-terciario/92" />

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
                  to="/contact"
                  className="rounded-full bg-principal px-16 py-4 shadow-[0_12px_30px_-16px_rgba(42,38,32,0.8)] transition-all duration-300 ease-out hover:scale-105 hover:bg-secundario active:scale-95"
                  aria-label="Ir a contacto"
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
        <section className="bg-terciario py-14 md:py-20 lg:py-24">
          <div className="mx-auto flex max-w-[1600px] flex-col gap-12 px-6 md:gap-14 md:px-10 lg:flex-row lg:items-start lg:gap-10 xl:gap-14">
            <div className="w-full min-w-0 lg:w-[70%] lg:flex-[1_1_70%]">
              <Reveal>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-neutral-500">
                  Lo que hago
                </p>
              </Reveal>
              <Reveal delay={0.06}>
                <p className="mt-6 text-left font-display text-2xl font-normal leading-snug text-ink md:text-3xl">
                  Primero soy ingeniera mecánica: los bocetos se convierten en
                  modelos, los modelos en planos, y los planos en hardware en el
                  que las personas pueden confiar. Trabajo hombro a hombro con
                  equipos que necesitan claridad bajo carga, costo y cronograma,
                  no una presentación más bonita.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-10 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-neutral-500">
                  Áreas de enfoque
                </p>
              </Reveal>
              <div className="mt-8 grid gap-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10 md:gap-x-12 md:gap-y-12">
                {capabilities.map((cap, i) => (
                  <Reveal key={cap.title} delay={0.05 + i * 0.06}>
                    <div>
                      <h3 className="font-display text-xl font-medium text-ink md:text-2xl">
                        {cap.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-neutral-600 md:text-[0.95rem]">
                        {cap.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="w-full shrink-0 lg:w-[30%] lg:flex-[0_0_30%]">
              <Reveal delay={0.08} y={18}>
                <div className="mx-auto aspect-[3/4] max-w-xs overflow-hidden bg-ink/5 sm:max-w-sm lg:mx-0 lg:ml-auto lg:max-w-none">
                  <img
                    src={portraitMichelleUrl}
                    alt="Retrato de Michelle Castellanos"
                    className="h-full w-full object-cover object-[center_22%]"
                    decoding="async"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </Bleed>

      <Bleed>
        <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-linear-to-b from-terciario/55 via-white to-terciario/55 py-20 md:min-h-[78vh] md:py-28 lg:min-h-[84vh] lg:py-36">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-1 h-24 bg-linear-to-b from-terciario/85 to-transparent md:h-28" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-1 h-24 bg-linear-to-t from-terciario/85 to-transparent md:h-28" />
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

      <section className="mx-auto mt-20 max-w-5xl md:mt-28">
        <Reveal className="text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-neutral-500">
            Video
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="relative mt-6 aspect-video overflow-hidden bg-ink md:mt-8">
            <img
              src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              alt=""
              className="h-full w-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <button
              type="button"
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
              aria-label="Reproducir reel"
            >
              <svg
                viewBox="0 0 24 24"
                className="ml-0.5 h-7 w-7"
                fill="currentColor"
                aria-hidden
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </Reveal>
      </section>

      <section
        id="work"
        className="mx-auto mt-24 max-w-6xl scroll-mt-28 md:mt-32"
      >
        <Reveal className="text-center">
          <h2 className="font-display text-4xl font-medium tracking-tight text-ink md:text-5xl">
            Proyectos seleccionados
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-16">
          {portfolioProjects.map((item, index) => (
            <MotionArticle
              key={item.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-32px 0px" }}
              transition={{ duration: 0.58, delay: index * 0.05, ease }}
              className="group"
            >
              <div className="overflow-hidden bg-principal/25">
                <img
                  src={item.img}
                  alt=""
                  className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <p className="mt-4 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-neutral-500">
                {item.tags.join(" · ")}
              </p>
              <h3 className="font-display mt-3 text-2xl font-medium text-ink md:text-[1.75rem]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 md:text-base">
                {item.blurb}
              </p>
            </MotionArticle>
          ))}
        </div>
        <Reveal className="mt-16 text-center">
          <Link
            to="/my-work"
            className="inline-flex items-center gap-2 border-b border-secundario pb-1 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:text-secundario/80"
          >
            Cómo puedo ayudarte
            <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </section>

      <Bleed className="mt-28 bg-principal-suave md:mt-36">
        <div className="mx-auto max-w-6xl px-6 py-20 text-ink md:px-10 md:py-24">
          <Reveal>
            <p className="mx-auto max-w-2xl text-center font-display text-xl font-normal leading-relaxed text-ink/85 md:text-2xl">
              Algunos números de programas recientes: hitos que reflejan rigor,
              iteración y hardware que realmente llegó a producción.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-10 border-t border-secundario/30 pt-14 md:grid-cols-3 md:gap-6">
            {[
              { n: "35+", l: "Revisiones liberadas" },
              { n: "12+", l: "Años en hardware" },
              { n: "70+", l: "Pruebas y prototipos" },
            ].map((s, i) => (
              <Reveal key={s.l} delay={0.08 * i} className="text-center">
                <p className="font-display text-5xl font-medium text-secundario md:text-6xl">
                  {s.n}
                </p>
                <p className="mt-3 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-secundario">
                  {s.l}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Bleed>

      <section className="mx-auto mt-24 max-w-6xl md:mt-32">
        <Reveal className="text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-neutral-500">
            Reseñas
          </p>
        </Reveal>
        <Reveal delay={0.06} className="text-center">
          <p className="mt-4 font-display text-3xl text-ink md:text-4xl">
            5.0 ★
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-neutral-600">
            Palabras de equipos con los que he lanzado hardware, incluyendo
            proveedores, revisiones y presión real de programa.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <MotionBlockquote
              key={t.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-28px 0px" }}
              transition={{ duration: 0.55, delay: i * 0.07, ease }}
              className="border border-secundario/20 bg-white/50 p-8 backdrop-blur-sm"
            >
              <p className="text-sm leading-relaxed text-neutral-700">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-neutral-500">
                <span className="text-ink">— {t.name}</span>
                <span className="mt-1 block font-normal normal-case tracking-normal text-neutral-500">
                  {t.role}
                </span>
              </footer>
            </MotionBlockquote>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
