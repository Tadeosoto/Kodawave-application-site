import { motion } from "framer-motion";
import BenefitIcon from "./BenefitIcons";
import {
  fadeUp,
  fadeUpSoft,
  staggerContainer,
  staggerFast,
  viewportOnce,
} from "../../motion";
import "./Benefits.css";

const MotionDiv = motion.div;
const MotionP = motion.p;
const MotionH2 = motion.h2;
const MotionArticle = motion.article;

export default function Benefits({ content }) {
  const { benefits } = content;
  return (
    <section className="lpBenefits" aria-labelledby="lp-benefits-title">
      <MotionDiv
        className="lpNarrow"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <MotionP className="lpEyebrow lpEyebrow--accent" variants={fadeUpSoft}>
          {benefits.label}
        </MotionP>
        <MotionH2
          id="lp-benefits-title"
          className="lpHeading"
          variants={fadeUp}
        >
          {benefits.headline}
        </MotionH2>
      </MotionDiv>
      <MotionDiv
        className="lpBenefits__grid"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerFast}
      >
        {benefits.items.map((item, index) => (
          <MotionArticle
            key={item.title}
            className="lpBenefits__item"
            variants={fadeUp}
          >
            <BenefitIcon index={index} />
            <h3 className="lpBenefits__title">{item.title}</h3>
            <p className="lpBody">{item.body}</p>
          </MotionArticle>
        ))}
      </MotionDiv>
    </section>
  );
}
