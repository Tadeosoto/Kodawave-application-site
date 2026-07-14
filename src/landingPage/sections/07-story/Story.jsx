import { motion } from "framer-motion";
import MediaPlaceholder from "../../components/MediaPlaceholder";
import { landingMedia, mediaAlt } from "../../landingMedia";
import {
  fadeUp,
  fadeUpSoft,
  scaleIn,
  staggerContainer,
  viewportOnce,
} from "../../motion";
import "./Story.css";

const MotionDiv = motion.div;
const MotionP = motion.p;
const MotionH2 = motion.h2;

export default function Story({ content }) {
  const { story } = content;
  const lang = content.locale?.startsWith("es") ? "es" : "en";
  const storyImage = {
    ...landingMedia.story,
    alt: mediaAlt(landingMedia.story, lang),
  };

  return (
    <section className="lpStory" aria-labelledby="lp-story-title">
      <div className="lpStory__grid">
        <MotionDiv
          className="lpStory__media"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={scaleIn}
        >
          <MediaPlaceholder
            label={story.mediaLabel}
            ratio="portrait"
            image={storyImage}
          />
        </MotionDiv>
        <MotionDiv
          className="lpStory__copy"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <MotionP className="lpEyebrow lpEyebrow--accent" variants={fadeUpSoft}>
            {story.label}
          </MotionP>
          <MotionH2
            id="lp-story-title"
            className="lpHeading lpHeading--left"
            variants={fadeUp}
          >
            {story.headline}
          </MotionH2>
          {story.paragraphs.map((paragraph) => (
            <MotionP
              key={paragraph.slice(0, 24)}
              className="lpBody lpBody--left"
              variants={fadeUpSoft}
            >
              {paragraph}
            </MotionP>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
}
