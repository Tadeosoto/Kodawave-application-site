import { motion } from "framer-motion";
import WaitlistForm from "../../components/WaitlistForm";
import heroCinematicGif from "../../assets/hero-cinematic.gif";
import { fadeUp, fadeUpSoft, staggerContainer } from "../../motion";
import "./Hero.css";

const MotionDiv = motion.div;
const MotionP = motion.p;
const MotionH1 = motion.h1;

/**
 * Hero B — propuesta: GIF full-bleed + copy/CTA overlay (layout tipo mock terapia).
 */
export default function HeroCinematic({ content, form, locale }) {
  const { hero } = content;
  const isEs = locale.startsWith("es");
  const scrollHint = isEs ? "Desplázate para descubrir" : "Scroll to discover";

  const words = hero.headline.trim().split(/\s+/);
  const lastWord = words.pop();
  const lead = words.join(" ");

  return (
    <section
      className="lpHero lpHero--cinematic"
      aria-labelledby="lp-hero-title-cinematic"
    >
      <div className="lpHeroCinematic__media" aria-hidden>
        <img
          className="lpHeroCinematic__gif"
          src={heroCinematicGif}
          alt=""
          decoding="async"
          fetchPriority="high"
        />
        <div className="lpHeroCinematic__veil" />
      </div>

      <div className="lpHeroCinematic__inner">
        <MotionDiv
          className="lpHeroCinematic__stack"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Móvil: eyebrow + título arriba; body + form abajo */}
          <div className="lpHeroCinematic__topline">
            <MotionP className="lpHeroCinematic__eyebrow" variants={fadeUpSoft}>
              {hero.eyebrow}
            </MotionP>
            <MotionH1
              id="lp-hero-title-cinematic"
              className="lpHeroCinematic__title"
              variants={fadeUp}
            >
              {lead ? `${lead} ` : null}
              <em>{lastWord}</em>
            </MotionH1>
          </div>

          <div className="lpHeroCinematic__copy">
            <MotionP className="lpHeroCinematic__body" variants={fadeUpSoft}>
              {hero.body}
            </MotionP>
            <MotionDiv className="lpHeroCinematic__form" variants={fadeUp}>
              <WaitlistForm
                copy={form}
                locale={locale}
                source="landing-hero-cinematic"
                ctaLabel={hero.cta}
                variant="overlay"
                idSuffix="hero-cinematic"
              />
            </MotionDiv>
          </div>
        </MotionDiv>

        <p className="lpHeroCinematic__scroll">
          <span>{scrollHint}</span>
          <span className="lpHeroCinematic__chevron" aria-hidden>
            ↓
          </span>
        </p>
      </div>
    </section>
  );
}
