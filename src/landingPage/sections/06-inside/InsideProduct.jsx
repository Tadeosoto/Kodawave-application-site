import { motion } from "framer-motion";
import MediaPlaceholder from "../../components/MediaPlaceholder";
import WaitlistForm from "../../components/WaitlistForm";
import { landingMedia, mediaAlt } from "../../landingMedia";
import {
  fadeUp,
  fadeUpSoft,
  scaleIn,
  staggerContainer,
  staggerFast,
  viewportOnce,
} from "../../motion";
import "./InsideProduct.css";

const MotionDiv = motion.div;
const MotionP = motion.p;
const MotionH2 = motion.h2;
const MotionLi = motion.li;
const MotionUl = motion.ul;

export default function InsideProduct({ content, form, locale }) {
  const { inside } = content;
  const lang = locale.startsWith("es") ? "es" : "en";
  const insideImage = {
    ...landingMedia.inside,
    alt: mediaAlt(landingMedia.inside, lang),
  };

  return (
    <section className="lpInside" aria-labelledby="lp-inside-title">
      <MotionDiv
        className="lpNarrow"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <MotionP className="lpEyebrow lpEyebrow--light" variants={fadeUpSoft}>
          {inside.label}
        </MotionP>
        <MotionH2
          id="lp-inside-title"
          className="lpHeading lpHeading--light"
          variants={fadeUp}
        >
          {inside.headline}
        </MotionH2>
      </MotionDiv>

      <MotionDiv
        className="lpInside__diagram"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerFast}
      >
        <MotionUl
          className="lpInside__features lpInside__features--left"
          variants={staggerFast}
        >
          {inside.featuresLeft.map((feature) => (
            <MotionLi key={feature} variants={fadeUpSoft}>
              {feature}
            </MotionLi>
          ))}
        </MotionUl>
        <MotionDiv className="lpInside__media" variants={scaleIn}>
          <MediaPlaceholder
            label={inside.mediaLabel}
            ratio="portrait"
            image={insideImage}
          />
        </MotionDiv>
        <MotionUl
          className="lpInside__features lpInside__features--right"
          variants={staggerFast}
        >
          {inside.featuresRight.map((feature) => (
            <MotionLi key={feature} variants={fadeUpSoft}>
              {feature}
            </MotionLi>
          ))}
        </MotionUl>
      </MotionDiv>

      <MotionDiv
        className="lpInside__form"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
      >
        <WaitlistForm
          copy={form}
          locale={locale}
          source="landing-inside"
          ctaLabel={inside.cta}
          variant="dark"
          idSuffix="inside"
        />
      </MotionDiv>
    </section>
  );
}
