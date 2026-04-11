import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { portfolioProjects, testimonials } from "../data/content";
import Reveal from "../components/Reveal";
import heroHandsUrl from "../assets/michPageAssets/pageDecoration/mano-de-dios-chingona.png";
import engineerSectionBgUrl from "../assets/michPageAssets/pageDecoration/background-image1.png";
import portraitMichelleUrl from "../assets/michPageAssets/michPhotos/hf_20260329_022232_608e361f-7fac-4089-bcf8-923d3e56c916.png";

const MotionP = motion.p;
const MotionSpan = motion.span;
const MotionArticle = motion.article;
const MotionBlockquote = motion.blockquote;

const ease = [0.22, 0.61, 0.36, 1];

const HERO_ROTATE_WORDS = ["perform", "endure", "carry", "matter"];

const capabilities = [
  {
    title: "Mechanical design",
    body: "I turn requirements into geometry—➤ layouts, ➤ mechanisms, ➤ material calls, and ➤ drawings with tolerances that survive manufacturing.",
  },
  {
    title: "Systems thinking",
    body: "Interfaces, loads, and failure modes get named early. I connect ➤ CAD, ➤ BOM intent, and ➤ test criteria so the story of the part stays coherent.",
  },
  {
    title: "Analysis & proof",
    body: "When the question is stiffness, life, or margin, I pair ➤ hand checks with ➤ CAE where it earns its keep—and I leave assumptions visible.",
  },
  {
    title: "Build & learn",
    body: "Prototypes are not theatre. I aim for ➤ prints you can build, ➤ tests you can repeat, and ➤ feedback that feeds the next revision fast.",
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
              Mechanical engineering
            </MotionP>
            <h1 className="mt-10 text-center font-display text-[clamp(1.85rem,5.2vw,3.15rem)] font-medium leading-[1.15] tracking-tight text-ink md:mt-14">
              <span className="block">I engineer only what deserves to</span>
              <span className="mt-2 flex min-h-[1.4em] items-center justify-center md:mt-3">
                <span className="relative inline-flex min-w-[12ch] justify-center">
                  <AnimatePresence mode="wait" initial={false}>
                    <MotionSpan
                      key={HERO_ROTATE_WORDS[heroWordIndex]}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.35, ease }}
                      className="font-bold italic text-ink"
                    >
                      {HERO_ROTATE_WORDS[heroWordIndex]}
                    </MotionSpan>
                  </AnimatePresence>
                </span>
              </span>
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.15 }}
              className="mx-auto mt-8 max-w-lg text-left text-[0.95rem] leading-relaxed text-neutral-600 md:ml-auto md:mr-[4%] md:mt-10 md:max-w-md md:text-base"
            >
              <p>Does this load path deserve to exist?</p>
              <p className="mt-2">Every tolerance is a promise.</p>
              <p className="mt-2">
                Less guesswork, more{" "}
                <span className="font-semibold text-ink">evidence</span>.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease, delay: 0.28 }}
              className="mt-auto flex flex-wrap items-center justify-center gap-4 pt-14 md:pt-20"
            >
              <Link
                to="/contact"
                className="border border-principal bg-principal px-8 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink transition hover:border-secundario hover:bg-secundario hover:text-terciario"
              >
                Get in touch
              </Link>
              <Link
                to={{ pathname: "/", hash: "work" }}
                className="border border-principal/70 bg-white/85 px-8 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink backdrop-blur-sm transition hover:border-principal hover:bg-principal/25"
              >
                View work
              </Link>
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
                  What I do
                </p>
              </Reveal>
              <Reveal delay={0.06}>
                <p className="mt-6 text-left font-display text-2xl font-normal leading-snug text-ink md:text-3xl">
                  I am a mechanical engineer first: sketches become models, models
                  become drawings, and drawings become hardware people can trust.
                  I work shoulder-to-shoulder with teams who need clarity under
                  load, cost, and schedule—not a prettier slide deck.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-10 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-neutral-500">
                  Focus areas
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
                    alt="Michelle Castellanos"
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
        <section className="relative isolate bg-white py-16 md:py-24 lg:py-28">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(260px,46%)] lg:gap-12 xl:gap-16">
              <div>
                <Reveal>
                  <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                    Mechanical engineer.
                  </h2>
                </Reveal>
                <div className="mt-8 max-w-xl space-y-4 text-[0.95rem] leading-relaxed text-neutral-700 md:text-base">
                  {[
                    <>
                      I need to see{" "}
                      <strong className="font-semibold text-ink">
                        the load path
                      </strong>
                      —not just the outer shape.
                    </>,
                    <>
                      A part has to{" "}
                      <strong className="font-semibold text-ink">
                        survive reality
                      </strong>
                      : vibration, misuse, and the shop floor.
                    </>,
                    <>
                      Some drawings merely describe; others{" "}
                      <strong className="font-semibold text-ink">
                        release
                      </strong>{" "}
                      with confidence.
                    </>,
                    <>
                      Good engineering is{" "}
                      <strong className="font-semibold text-ink">
                        constraints made visible
                      </strong>
                      —material, process, and margin named out loud.
                    </>,
                    <>
                      The gap is rarely inspiration; it is{" "}
                      <strong className="font-semibold text-ink">
                        follow-through
                      </strong>
                      in every revision.
                    </>,
                  ].map((line, i) => (
                    <Reveal key={i} delay={0.05 * i}>
                      <p>{line}</p>
                    </Reveal>
                  ))}
                  <Reveal delay={0.35}>
                    <p className="pt-2 font-medium text-ink">
                      From sketch to stack-up—then to the people who build it.
                    </p>
                  </Reveal>
                </div>
              </div>
              <div className="flex min-w-0 flex-col items-center lg:items-end">
                <Reveal>
                  <img
                    src={engineerSectionBgUrl}
                    alt=""
                    className="h-auto w-full max-w-md object-contain object-center lg:max-w-none lg:object-right"
                    decoding="async"
                  />
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-8 w-full text-center font-display text-sm italic text-neutral-500 lg:text-right">
                    — Michelle Castellanos
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </Bleed>

      <section className="mx-auto mt-20 max-w-5xl md:mt-28">
        <Reveal className="text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-neutral-500">
            Reel
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
              aria-label="Play reel"
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
            Selected projects
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
            How I can help
            <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </section>

      <Bleed className="mt-28 bg-principal-suave md:mt-36">
        <div className="mx-auto max-w-6xl px-6 py-20 text-ink md:px-10 md:py-24">
          <Reveal>
            <p className="mx-auto max-w-2xl text-center font-display text-xl font-normal leading-relaxed text-ink/85 md:text-2xl">
              A few numbers from recent programs—milestones that reflect rigor,
              iteration, and hardware that actually shipped.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-10 border-t border-secundario/30 pt-14 md:grid-cols-3 md:gap-6">
            {[
              { n: "35+", l: "Released revisions" },
              { n: "12+", l: "Years in hardware" },
              { n: "70+", l: "Tests & prototypes" },
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
            Reviews
          </p>
        </Reveal>
        <Reveal delay={0.06} className="text-center">
          <p className="mt-4 font-display text-3xl text-ink md:text-4xl">
            5.0 ★
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-neutral-600">
            Words from teams who have shipped hardware with me—reviews, vendors,
            and program pressure included.
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
