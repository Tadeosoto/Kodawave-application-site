import { motion } from "framer-motion";
import MediaPlaceholder from "../../components/MediaPlaceholder";
import { landingMedia, mediaAlt } from "../../landingMedia";
import {
  fadeUp,
  fadeUpSoft,
  staggerContainer,
  staggerFast,
  viewportOnce,
} from "../../motion";
import "./HowItWorks.css";

const MotionDiv = motion.div;
const MotionP = motion.p;
const MotionH2 = motion.h2;
const MotionArticle = motion.article;

const STEP_IMAGES = [
  landingMedia.howStep1,
  landingMedia.howStep2,
  landingMedia.howStep3,
];

export default function HowItWorks({ content }) {
  const { howItWorks } = content;
  const lang = content.locale?.startsWith("es") ? "es" : "en";

  return (
    <section className="lpHow" aria-labelledby="lp-how-title">
      <MotionDiv
        className="lpNarrow"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <MotionP className="lpEyebrow lpEyebrow--accent" variants={fadeUpSoft}>
          {howItWorks.label}
        </MotionP>
        <MotionH2 id="lp-how-title" className="lpHeading" variants={fadeUp}>
          {howItWorks.headline}
        </MotionH2>
      </MotionDiv>
      <MotionDiv
        className="lpHow__grid"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerFast}
      >
        {howItWorks.steps.map((step, index) => {
          const asset = STEP_IMAGES[index];
          const image = asset
            ? { ...asset, alt: mediaAlt(asset, lang) }
            : null;
          return (
            <MotionArticle
              key={step.step}
              className="lpHow__step"
              variants={fadeUp}
            >
              <MediaPlaceholder
                label={step.media}
                ratio="square"
                image={image}
              />
              <p className="lpHow__stepLabel">{step.step}</p>
              <h3 className="lpHow__stepTitle">{step.title}</h3>
              <p className="lpBody">{step.body}</p>
            </MotionArticle>
          );
        })}
      </MotionDiv>
    </section>
  );
}
