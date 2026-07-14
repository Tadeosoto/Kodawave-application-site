import { motion } from "framer-motion";
import {
  fadeUp,
  fadeUpSoft,
  staggerContainer,
  viewportOnce,
} from "../../motion";
import "./Problem.css";

const MotionDiv = motion.div;
const MotionP = motion.p;
const MotionH2 = motion.h2;

export default function Problem({ content }) {
  const { problem } = content;
  return (
    <section className="lpProblem" aria-labelledby="lp-problem-title">
      <MotionDiv
        className="lpNarrow"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <MotionP className="lpEyebrow lpEyebrow--accent" variants={fadeUpSoft}>
          {problem.label}
        </MotionP>
        <MotionH2
          id="lp-problem-title"
          className="lpHeading"
          variants={fadeUp}
        >
          {problem.headline}
        </MotionH2>
        <MotionP className="lpBody lpBody--center" variants={fadeUpSoft}>
          {problem.body}
        </MotionP>
        <MotionP className="lpProblem__closing" variants={fadeUp}>
          {problem.closing}
        </MotionP>
      </MotionDiv>
    </section>
  );
}
