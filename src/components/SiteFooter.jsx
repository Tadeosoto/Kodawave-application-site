import { motion } from "framer-motion";
import CaennaBrandPanel from "./CaennaBrandPanel";

const MotionFooter = motion.footer;

const footerEase = [0.22, 0.61, 0.36, 1];

const footerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

const footerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: footerEase },
  },
};

const SiteFooter = ({ compactTop = false, tightAfterContent = false }) => {
  return (
    <MotionFooter
      className={`border-t border-neutral-300/40 text-ink ${
        compactTop ? "mt-0 bg-[#eff0ec]" : tightAfterContent ? "mt-4 bg-[#f7f6f2]" : "mt-20 bg-[#f7f6f2]"
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -8% 0px" }}
      variants={footerContainer}
    >
      <motion.div variants={footerItem} className="w-full">
        <CaennaBrandPanel />
      </motion.div>
    </MotionFooter>
  );
};

export default SiteFooter;
