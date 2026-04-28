import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Alignna.css";
import alignnaBlancoRotoUrl from "../assets/michPageAssets/logos-icons/Alignna-BlancoRoto.svg";
import bolaRosaUrl from "../assets/michPageAssets/pageDecoration/bola rosa(1).png";
import manosLatidoSombraUrl from "../assets/michPageAssets/pageDecoration/manos-latido-sombra.png";

const MotionP = motion.p;
const MotionSection = motion.section;
const MotionDiv = motion.div;
const revealEase = [0.22, 0.61, 0.36, 1];

const Alignna = () => {
  return (
    <div className="alignnaPage">
      <section className="alignnaHero">
        <div className="alignnaPage__bg" aria-hidden />

        <main className="alignnaPage__center">
          <img src={alignnaBlancoRotoUrl} alt="Alignna" className="alignnaPage__alignnaLogo" decoding="async" />
          <p className="alignnaPage__tagline">
            Tu eres el <strong>escultor</strong> y la <strong>escultura</strong>.
          </p>
        </main>
      </section>

      <section className="alignnaBridgeSection" aria-label="Mensaje introductorio Alignna">
        <MotionP
          className="alignnaBridgeSection__copy"
          initial={{ opacity: 0, y: 24, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.78, ease: revealEase }}
        >
          Conciencia corporal,
          <br />
          sin interrumpir tu día a día.
        </MotionP>
      </section>

      <MotionSection
        className="alignnaBreakSection"
        aria-label="Momento de romper paradigmas"
        initial={{ opacity: 0, y: 34, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.24 }}
        transition={{ duration: 0.84, ease: revealEase }}
      >
        <MotionDiv
          className="alignnaBreakSection__inner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.34 }}
          variants={{
            hidden: {},
            visible: { transition: { delayChildren: 0.1, staggerChildren: 0.12 } },
          }}
        >
          <MotionDiv
            className="alignnaBreakSection__visual"
            variants={{
              hidden: { opacity: 0.86, scale: 0.985 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.86, ease: revealEase } },
            }}
          >
            <img
              src={bolaRosaUrl}
              alt=""
              className="alignnaBreakSection__bgImage"
              decoding="async"
            />
            <div className="alignnaBreakSection__visualOverlay" aria-hidden />
            <MotionP
              className="alignnaBreakSection__quote"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.62, ease: revealEase } },
              }}
            >
              “Es momento de romper paradigmas.”
            </MotionP>
          </MotionDiv>
          <MotionDiv
            className="alignnaBreakSection__text"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.52, ease: revealEase } },
            }}
          >
            <MotionP
              className="alignnaBreakSection__headline"
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.58, ease: revealEase } },
              }}
            >
              Algo no estaba bien.
            </MotionP>
            <MotionP
              className="alignnaBreakSection__copy"
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.58, ease: revealEase, delay: 0.06 } },
              }}
            >
              Por años usamos lo mismo.
              <br />
              Con queja, pero sin <strong>cuestionarlo.</strong>
            </MotionP>
          </MotionDiv>
        </MotionDiv>
      </MotionSection>

      <MotionSection
        className="alignnaPulseSection"
        aria-label="Manifiesto Alignna"
        initial={{ opacity: 0, y: 42, filter: "blur(9px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.92, ease: revealEase }}
      >
        <MotionP
          className="alignnaPulseSection__intro"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: revealEase, delay: 0.05 }}
        >
          Nada es casualidad.
        </MotionP>

        <MotionDiv
          className="alignnaPulseCard"
          initial={{ opacity: 0, y: 18, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.82, ease: revealEase, delay: 0.08 }}
        >
          <div className="alignnaPulseCard__bgWrap" aria-hidden>
            <img
              src={manosLatidoSombraUrl}
              alt=""
              className="alignnaPulseCard__bgImage"
              decoding="async"
            />
          </div>
          <div className="alignnaPulseCard__overlay" aria-hidden />

          <p className="alignnaPulseCard__question">¿Y si el molde eres tu?</p>
          <p className="alignnaPulseCard__centerCopy">
            Cada línea.
            <br />
            Cada forma.
            <br />
            Cada decisión.
            <br />
            Tiene una razón.
          </p>
          <p className="alignnaPulseCard__bottomCopy">
            Cuando lo uses, lo vas a <strong>entender.</strong>
          </p>
        </MotionDiv>

        <MotionP
          className="alignnaPulseSection__outro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.72, ease: revealEase, delay: 0.12 }}
        >
          Te sientes <strong>diferente,</strong>
          <br />
          te sientes <strong>tu.</strong>
        </MotionP>
      </MotionSection>
    </div>
  );
};

export default Alignna;
