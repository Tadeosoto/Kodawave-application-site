import { motion } from "framer-motion";
import MediaPlaceholder from "../../components/MediaPlaceholder";
import WaitlistForm from "../../components/WaitlistForm";
import { landingMedia, mediaAlt } from "../../landingMedia";
import {
  fadeUp,
  fadeUpSoft,
  scaleIn,
  staggerContainer,
} from "../../motion";
import "./Hero.css";

const MotionDiv = motion.div;
const MotionP = motion.p;
const MotionH1 = motion.h1;

/** Hero A — layout proposed by client (split copy + media). */
export default function HeroClassic({ content, form, locale }) {
  const { hero } = content;
  const lang = locale.startsWith("es") ? "es" : "en";
  const heroImage = {
    ...landingMedia.hero,
    alt: mediaAlt(landingMedia.hero, lang),
    priority: true,
  };

  return (
    <section className="lpHero lpHero--classic" aria-labelledby="lp-hero-title">
      <div className="lpHero__grid">
        <MotionDiv
          className="lpHero__copy"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <MotionP className="lpEyebrow" variants={fadeUpSoft}>
            {hero.eyebrow}
          </MotionP>
          <MotionH1
            id="lp-hero-title"
            className="lpHero__title"
            variants={fadeUp}
          >
            {hero.headline}
          </MotionH1>
          <MotionP className="lpBody" variants={fadeUpSoft}>
            {hero.body}
          </MotionP>
          <MotionDiv variants={fadeUp}>
            <WaitlistForm
              copy={form}
              locale={locale}
              source="landing-hero"
              ctaLabel={hero.cta}
              variant="light"
              idSuffix="hero-classic"
            />
          </MotionDiv>
        </MotionDiv>
        <MotionDiv
          className="lpHero__media"
          initial="hidden"
          animate="visible"
          variants={scaleIn}
        >
          <MediaPlaceholder
            label={hero.mediaLabel}
            ratio="portrait"
            image={heroImage}
          />
        </MotionDiv>
      </div>
    </section>
  );
}
