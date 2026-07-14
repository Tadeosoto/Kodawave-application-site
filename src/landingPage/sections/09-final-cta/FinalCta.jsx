import { motion } from "framer-motion";
import WaitlistForm from "../../components/WaitlistForm";
import {
  fadeUp,
  fadeUpSoft,
  staggerContainer,
  viewportOnce,
} from "../../motion";
import "./FinalCta.css";

const MotionDiv = motion.div;
const MotionP = motion.p;
const MotionH2 = motion.h2;

export default function FinalCta({ content, form, locale }) {
  const { finalCta } = content;
  return (
    <section className="lpFinal" aria-labelledby="lp-final-title">
      <MotionDiv
        className="lpNarrow"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <MotionH2
          id="lp-final-title"
          className="lpHeading lpHeading--light"
          variants={fadeUp}
        >
          {finalCta.headline}
        </MotionH2>
        <MotionP className="lpBody lpBody--center lpBody--light" variants={fadeUpSoft}>
          {finalCta.body}
        </MotionP>
        <MotionDiv className="lpFinal__form" variants={fadeUp}>
          <WaitlistForm
            copy={form}
            locale={locale}
            source="landing-final-cta"
            ctaLabel={finalCta.cta}
            variant="pill"
            idSuffix="final"
          />
        </MotionDiv>
      </MotionDiv>
    </section>
  );
}
