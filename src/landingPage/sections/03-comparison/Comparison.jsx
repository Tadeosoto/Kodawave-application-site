import { motion } from "framer-motion";
import {
  fadeUp,
  fadeUpSoft,
  staggerContainer,
  staggerFast,
  viewportOnce,
} from "../../motion";
import "./Comparison.css";

const MotionDiv = motion.div;
const MotionP = motion.p;
const MotionH2 = motion.h2;
const MotionArticle = motion.article;

export default function Comparison({ content }) {
  const { comparison } = content;
  return (
    <section className="lpComparison" aria-labelledby="lp-comparison-title">
      <MotionDiv
        className="lpNarrow"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <MotionP className="lpEyebrow lpEyebrow--accent" variants={fadeUpSoft}>
          {comparison.label}
        </MotionP>
        <MotionH2
          id="lp-comparison-title"
          className="lpHeading"
          variants={fadeUp}
        >
          {comparison.headline}
        </MotionH2>
      </MotionDiv>
      <MotionDiv
        className="lpComparison__cards"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerFast}
      >
        <MotionArticle className="lpComparison__card" variants={fadeUp}>
          <h3 className="lpComparison__cardTitle">{comparison.left.title}</h3>
          <p className="lpBody">{comparison.left.body}</p>
        </MotionArticle>
        <MotionArticle className="lpComparison__card" variants={fadeUp}>
          <h3 className="lpComparison__cardTitle">{comparison.right.title}</h3>
          <p className="lpBody">{comparison.right.body}</p>
        </MotionArticle>
      </MotionDiv>
    </section>
  );
}
