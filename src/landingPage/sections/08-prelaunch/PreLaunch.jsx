import { motion } from "framer-motion";
import {
  fadeUp,
  fadeUpSoft,
  staggerContainer,
  staggerFast,
  viewportOnce,
} from "../../motion";
import "./PreLaunch.css";

const MotionDiv = motion.div;
const MotionP = motion.p;
const MotionH2 = motion.h2;
const MotionArticle = motion.article;

export default function PreLaunch({ content }) {
  const { prelaunch } = content;
  return (
    <section className="lpPre" aria-labelledby="lp-pre-title">
      <MotionDiv
        className="lpNarrow"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <MotionP className="lpEyebrow lpEyebrow--accent" variants={fadeUpSoft}>
          {prelaunch.label}
        </MotionP>
        <MotionH2 id="lp-pre-title" className="lpHeading" variants={fadeUp}>
          {prelaunch.headline}
        </MotionH2>
        <MotionP className="lpBody lpBody--center" variants={fadeUpSoft}>
          {prelaunch.body}
        </MotionP>
      </MotionDiv>
      <MotionDiv
        className="lpPre__cards"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerFast}
      >
        {prelaunch.cards.map((card) => (
          <MotionArticle
            key={card.title}
            className="lpPre__card"
            variants={fadeUp}
          >
            <h3 className="lpPre__cardTitle">{card.title}</h3>
            <p className="lpBody">{card.body}</p>
          </MotionArticle>
        ))}
      </MotionDiv>
    </section>
  );
}
