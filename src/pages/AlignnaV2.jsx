import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WaitlistForm from "../landingPage/components/WaitlistForm";
import "./AlignnaV2.css";

const sectionImage = (filename) => `/images-inside-sections/${encodeURIComponent(filename)}`;

const sectionImages = {
  hero: sectionImage("Section 1 Image 1 V05.png"),
  problemAfter: sectionImage("Section 2 Image 1 V03.png"),
  problemInMoment: sectionImage("Section 2 Image 2 V01.png"),
  stepWear: sectionImage("Section 3 Image 1 V02.png"),
  stepFeel: sectionImage("Section 3 Image 2 V01.jpeg"),
  stepOwn: sectionImage("Section 3 Image 3 V01.png"),
  launchBelt: sectionImage("Section 5 Image 1 V01.png"),
  lifeWork: sectionImage("Section 6 Image 1 V01.png"),
  lifeMove: sectionImage("Section 6 Image 2 V03.png"),
  lifeMoment: sectionImage("Section 6 Image 3 V01.png"),
  founder: sectionImage("Section 9 Image 1 V06.png"),
};

const ease = [0.22, 0.61, 0.36, 1];
const viewport = { once: true, amount: 0.18 };
const reveal = {
  hidden: { opacity: 0, y: 28, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.72, ease },
  },
};
const problemViewport = { once: true, amount: 0.35 };
const problemPanelLeft = {
  hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
  visible: { opacity: 1, clipPath: "inset(0 0 0 0)", transition: { duration: 0.85, ease, delay: 0 } },
};
const problemPanelRight = {
  hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
  visible: { opacity: 1, clipPath: "inset(0 0 0 0)", transition: { duration: 0.85, ease, delay: 1.45 } },
};
const problemPanelMobile = (delay) => ({
  hidden: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
  visible: { opacity: 1, clipPath: "inset(0 0 0 0)", transition: { duration: 0.85, ease, delay } },
});
const problemArrowReveal = {
  hidden: { opacity: 0, scaleX: 0, transformOrigin: "left center" },
  visible: { opacity: 1, scaleX: 1, transformOrigin: "left center" },
};
const problemArrowLeft = {
  ...problemArrowReveal,
  visible: { ...problemArrowReveal.visible, transition: { duration: 0.55, ease, delay: 0.45 } },
};
const problemNowReveal = {
  hidden: { opacity: 0, scale: 0.72 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease, delay: 0.85 } },
};
const problemArrowRight = {
  ...problemArrowReveal,
  visible: { ...problemArrowReveal.visible, transition: { duration: 0.55, ease, delay: 1.15 } },
};
const problemArrowDown = {
  hidden: { opacity: 0, scaleY: 0, transformOrigin: "top center" },
  visible: { opacity: 1, scaleY: 1, transformOrigin: "top center", transition: { duration: 0.55, ease, delay: 0.45 } },
};
const problemArrowDown2 = {
  hidden: { opacity: 0, scaleY: 0, transformOrigin: "top center" },
  visible: { opacity: 1, scaleY: 1, transformOrigin: "top center", transition: { duration: 0.55, ease, delay: 1.15 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.06 } },
};

const formCopy = {
  emailPlaceholder: "Email address",
  emailLabel: "Email address",
  errorEmpty: "Please enter your email.",
  errorSend: "Could not send. Please try again.",
  success: "Done. We’ll notify you when launch is ready.",
  successMailto: "Your email client opened to finish signup.",
  submitting: "Securing…",
};

const launchFormCopy = {
  ...formCopy,
  emailPlaceholder: "Your email",
  note: "No payment. No obligation.",
};

const heroFormCopy = {
  ...formCopy,
  note: "No payment. No obligation. We'll send you the Kickstarter link before the public launch.",
};

const image = (id, extra = "") =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1800&q=82${extra.startsWith("&") ? extra : ""}`;

const stepsViewport = { once: true, amount: 0.25 };
const stepColumnDesktop = (index) => ({
  hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0 0 0)",
    transition: {
      duration: 0.65,
      ease,
      delay: index * 0.45,
      staggerChildren: 0.12,
      delayChildren: 0.14,
    },
  },
});
const stepColumnMobile = (index) => ({
  hidden: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0 0 0)",
    transition: {
      duration: 0.65,
      ease,
      delay: index * 0.35,
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
});
const stepFieldReveal = {
  hidden: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0 0 0)",
    transition: { duration: 0.5, ease },
  },
};

const steps = [
  {
    number: 1,
    title: "Wear it",
    body: "Use Alignna at your desk, on the move, before an event, or whenever you want to feel more aware and present.",
    image: sectionImages.stepWear,
  },
  {
    number: 2,
    title: "Feel it",
    body: "When your core lets go, Alignna sends a subtle vibration cue—before a mirror or photograph points it out.",
    image: sectionImages.stepFeel,
  },
  {
    number: 3,
    title: "Own it",
    body: "You make the adjustment. With repetition, you practise an awareness that belongs to you—not the belt.",
    image: sectionImages.stepOwn,
  },
];

const lifeSlides = [
  {
    id: "work",
    label: "At work",
    image: sectionImages.lifeWork,
    alt: "Woman working at a desk with Alignna",
    body: "At your desk. A quiet cue while you sit, type, and stay in the work.",
  },
  {
    id: "move",
    label: "On the move",
    image: sectionImages.lifeMove,
    alt: "Man walking through the city wearing Alignna",
    body: "On the move. Present through the commute, the walk, the in-between.",
  },
  {
    id: "moment",
    label: "Before the moment",
    image: sectionImages.lifeMoment,
    alt: "Woman preparing in the mirror before an event",
    body: "Before the moments that matter. Already aware, already ready.",
  },
];

const quotes = [
  {
    initials: "KK",
    name: "Karen Kelly, 32",
    quote: "I don’t ask people to delete photos of me anymore.",
    featured: true,
  },
  {
    initials: "SY",
    name: "Sofia Yañez, 34",
    quote: "I tried it to look better. It changed how I talk about myself.",
  },
  {
    initials: "EA",
    name: "Emilia Armstrong, 26",
    quote: "I feel so different, but it’s still me, my body, a 1 sec fix that changed my whole stance.",
  },
];

const compare = [
  {
    name: "Shapewear",
    points: [
      "Compresses and reshapes while worn",
      "The garment creates the effect",
      "Can feel tight or restrictive",
      "The effect ends when it comes off",
    ],
  },
  {
    name: "Alignna",
    featured: true,
    points: [
      "Cues awareness in real time",
      "You make the adjustment",
      "No compression or rigid holding",
      "Less reliance is the goal",
    ],
  },
  {
    name: "Posture braces",
    points: [
      "Uses physical support to hold position",
      "The brace provides the support",
      "Can feel bulky under clothing",
      "Support is tied to wearing it",
    ],
  },
];

function useIsMobile(maxWidth = 760) {
  const query = `(max-width: ${maxWidth}px)`;
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches,
  );
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);
  return isMobile;
}

function Check({ children }) {
  return <li><span>✓</span>{children}</li>;
}

function KickstarterBadge() {
  return (
    <div className="alignnaV2Hero__kickstarterBadge" aria-label="Launching on Kickstarter soon">
      <span>Launching<br />on</span>
      <strong>Kickstarter</strong>
      <span>soon</span>
    </div>
  );
}

function PriceBadge() {
  return (
    <div className="alignnaV2Hero__priceBadge" aria-label="First 24 hours, 89 US dollars on Kickstarter">
      <span>First 24 hours</span>
      <strong>USD 89</strong>
      <small>On Kickstarter</small>
    </div>
  );
}

function LifeCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = lifeSlides.length;
  const slide = lifeSlides[index];
  const go = (delta) => setIndex((current) => (current + delta + total) % total);

  useEffect(() => {
    if (paused) return undefined;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [index, paused, total]);

  return (
    <section
      className="alignnaV2Life"
      aria-roledescription="carousel"
      aria-label="Made for real life"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="alignnaV2Life__shell">
        <div className="alignnaV2Life__media">
          <div className="alignnaV2Life__stage">
            <AnimatePresence mode="sync">
              <motion.img
                key={slide.id}
                src={slide.image}
                alt={slide.alt}
                initial={{ opacity: 0, scale: 1.035 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.85, ease }}
              />
            </AnimatePresence>
          </div>
          <div className="alignnaV2Life__nav">
            <button type="button" className="alignnaV2Life__arrow" onClick={() => go(-1)} aria-label="Previous lifestyle">
              ‹
            </button>
            <div className="alignnaV2Life__thumbs" role="tablist" aria-label="Lifestyle scenes">
              {lifeSlides.map((item, itemIndex) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={itemIndex === index}
                  className={`alignnaV2Life__thumb${itemIndex === index ? " is-active" : ""}`}
                  onClick={() => setIndex(itemIndex)}
                >
                  <span className="alignnaV2Life__thumbFrame">
                    <img src={item.image} alt="" />
                  </span>
                  <b>{item.label}</b>
                </button>
              ))}
            </div>
            <button type="button" className="alignnaV2Life__arrow" onClick={() => go(1)} aria-label="Next lifestyle">
              ›
            </button>
          </div>
        </div>
        <div className="alignnaV2Life__copy">
          <div className="alignnaV2Life__progress">
            <span className="alignnaV2Life__counter">{String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
            <div className="alignnaV2Life__bars" aria-hidden>
              {lifeSlides.map((item, itemIndex) => (
                <i key={item.id} className={itemIndex === index ? "is-active" : ""} />
              ))}
            </div>
          </div>
          <p className="alignnaV2__eyebrow">For more confident posture sitting, standing, and moving</p>
          <h2>Made for real life.</h2>
          <AnimatePresence mode="wait">
            <motion.p
              key={slide.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease }}
            >
              {slide.body}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function SectionIntro({ eyebrow, title, body, className = "" }) {
  return (
    <motion.div
      className={`alignnaV2__intro ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={stagger}
    >
      <motion.p variants={reveal} className="alignnaV2__eyebrow">{eyebrow}</motion.p>
      <motion.h2 variants={reveal}>{title}</motion.h2>
      {body ? <motion.p variants={reveal} className="alignnaV2__lead">{body}</motion.p> : null}
    </motion.div>
  );
}

export default function AlignnaV2() {
  const isMobile = useIsMobile();
  const panelLeftVariants = isMobile ? problemPanelMobile(0) : problemPanelLeft;
  const panelRightVariants = isMobile ? problemPanelMobile(1.45) : problemPanelRight;

  return (
    <div className="alignnaV2">
      <section className="alignnaV2Hero">
        <div className="alignnaV2Hero__media">
          <img src={sectionImages.hero} alt="" aria-hidden />
          <KickstarterBadge />
          <PriceBadge />
        </div>
        <div className="alignnaV2Hero__veil" aria-hidden />
        <div className="alignnaV2Hero__inner">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="alignnaV2Hero__copy">
            <motion.div variants={reveal} className="alignnaV2Hero__heading">
              <p className="alignnaV2Hero__wordmark">ALIGNNA</p>
              <p className="alignnaV2__eyebrow">Real-time posture awareness <i /></p>
              <h1>A smart belt to avoid sticking out your belly.</h1>
            </motion.div>
            <motion.div variants={reveal} className="alignnaV2Hero__details">
              <p className="alignnaV2Hero__subtitle">Notice it before the mirror does.</p>
              <p className="alignnaV2Hero__body">
                Alignna gives you a subtle vibration cue when your core lets go, so you can reset in the moment.
              </p>
              <ul className="alignnaV2Hero__checks">
                <Check>No squeezing</Check><Check>No pulling</Check><Check>No dependency</Check>
              </ul>
              <div className="alignnaV2Hero__form">
                <WaitlistForm copy={heroFormCopy} locale="en-AU" source="alignna-v2-hero" ctaLabel="Secure my spot" variant="overlay" idSuffix="alignna-v2-hero" redirectTo="/alignna/thank-you" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="alignnaV2Problem">
        <motion.div
          className="alignnaV2Problem__intro"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
        >
          <motion.p variants={reveal} className="alignnaV2__eyebrow">The real problem</motion.p>
          <motion.h2 variants={reveal}>The photo isn’t the problem. The delay is.</motion.h2>
          <motion.p variants={reveal} className="alignnaV2Problem__lead">
            You straighten the second you see yourself. The posture was available all along—awareness simply arrived late. Alignna moves that moment forward.
          </motion.p>
        </motion.div>
        <motion.div
          className="alignnaV2Problem__split"
          initial="hidden"
          whileInView="visible"
          viewport={problemViewport}
          variants={{ hidden: {}, visible: {} }}
        >
          <motion.article
            className="alignnaV2Problem__panel alignnaV2Problem__panel--left"
            variants={panelLeftVariants}
          >
            <img src={sectionImages.problemAfter} alt="Woman looking away after noticing herself too late" />
            <span className="alignnaV2Problem__tag">After the moment</span>
            <p className="alignnaV2Problem__caption">Why didn’t I notice?</p>
          </motion.article>

          <motion.div
            className="alignnaV2Problem__timeline alignnaV2Problem__timeline--mobile"
            aria-hidden="true"
            variants={{ hidden: {}, visible: {} }}
          >
            <motion.span
              className="alignnaV2Problem__arrow alignnaV2Problem__arrow--down"
              variants={problemArrowDown}
            />
            <motion.span
              className="alignnaV2Problem__now"
              variants={problemNowReveal}
            >
              Now
            </motion.span>
            <motion.span
              className="alignnaV2Problem__arrow alignnaV2Problem__arrow--down"
              variants={problemArrowDown2}
            />
          </motion.div>

          <motion.article
            className="alignnaV2Problem__panel alignnaV2Problem__panel--right"
            variants={panelRightVariants}
          >
            <img src={sectionImages.problemInMoment} alt="Woman standing with upright posture in the moment" />
            <span className="alignnaV2Problem__tag">In the moment</span>
            <p className="alignnaV2Problem__caption alignnaV2Problem__caption--end">Notice sooner. Choose for yourself.</p>
          </motion.article>

          <motion.div
            className="alignnaV2Problem__timeline alignnaV2Problem__timeline--desktop"
            aria-hidden="true"
            variants={{ hidden: {}, visible: {} }}
          >
            <motion.span
              className="alignnaV2Problem__arrow alignnaV2Problem__arrow--left"
              variants={problemArrowLeft}
            />
            <motion.span
              className="alignnaV2Problem__now"
              variants={problemNowReveal}
            >
              Now
            </motion.span>
            <motion.span
              className="alignnaV2Problem__arrow alignnaV2Problem__arrow--right"
              variants={problemArrowRight}
            />
          </motion.div>
        </motion.div>
      </section>

      <section className="alignnaV2Steps alignnaV2__light">
        <motion.div
          className="alignnaV2Steps__intro"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
        >
          <motion.p variants={reveal} className="alignnaV2__eyebrow">How Alignna works</motion.p>
          <motion.h2 variants={reveal}>Wear it. Feel it. Own it.</motion.h2>
        </motion.div>
        <motion.div
          className="alignnaV2Steps__grid"
          initial="hidden"
          whileInView="visible"
          viewport={stepsViewport}
          variants={{ hidden: {}, visible: {} }}
        >
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              className="alignnaV2Steps__step"
              variants={isMobile ? stepColumnMobile(index) : stepColumnDesktop(index)}
            >
              <motion.p className="alignnaV2Steps__number" variants={stepFieldReveal}>
                Step {step.number}
              </motion.p>
              <motion.h3 variants={stepFieldReveal}>{step.title}</motion.h3>
              <motion.div className="alignnaV2Steps__media" variants={stepFieldReveal}>
                <img src={step.image} alt="" />
              </motion.div>
              <motion.p className="alignnaV2Steps__body" variants={stepFieldReveal}>
                {step.body}
              </motion.p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="alignnaV2Inside">
        <SectionIntro eyebrow="Inside Alignna" title="Quiet precision, built for everyday life." />
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={stagger} className="alignnaV2Inside__device">
          <motion.div variants={reveal} className="alignnaV2Inside__annotations alignnaV2Inside__annotations--left">
            <span><b>01</b> Precision motion sensor</span><span><b>02</b> Breathable, invisible fabric</span><span><b>03</b> Universal soft adjustment</span>
          </motion.div>
          <motion.div variants={reveal} className="alignnaV2Inside__render">
            <img src={image("photo-1523275335684-37898b6baf30", "Alignna product placeholder")} alt="Alignna product render placeholder" />
            <i>Alignna<br />smart belt</i>
          </motion.div>
          <motion.div variants={reveal} className="alignnaV2Inside__annotations">
            <span><b>04</b> Silent vibration motor</span><span><b>05</b> Up to 5 days of battery</span><span><b>06</b> Designed for everyday movement</span>
          </motion.div>
        </motion.div>
        <p className="alignnaV2Inside__quote">“The best posture cue is the one that feels like it came from you.” <b>— Physical therapist review</b></p>
      </section>

      <section className="alignnaV2Launch">
        <div className="alignnaV2Launch__shell">
          <div className="alignnaV2Launch__blob" aria-hidden />
          <motion.div
            className="alignnaV2Launch__card"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
          >
            <motion.div className="alignnaV2Launch__content" variants={reveal}>
              <p className="alignnaV2Launch__eyebrow">We&apos;re launching on</p>
              <p className="alignnaV2Launch__kickstarter" aria-label="Kickstarter">Kickstarter</p>
              <h2>Before Alignna goes public.</h2>
              <p className="alignnaV2Launch__lead">
                Leave your email and we&apos;ll send you the campaign link before the public launch.
              </p>
              <WaitlistForm
                copy={launchFormCopy}
                locale="en-AU"
                source="alignna-v2-mid"
                ctaLabel="Notify me"
                variant="light"
                idSuffix="alignna-v2-mid"
                redirectTo="/alignna/thank-you"
              />
            </motion.div>
          </motion.div>
          <div className="alignnaV2Launch__beltWrap" aria-hidden>
            <motion.img
              className="alignnaV2Launch__belt"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={reveal}
              src={sectionImages.launchBelt}
              alt=""
            />
          </div>
        </div>
      </section>

      <LifeCarousel />

      <section className="alignnaV2Testimonials">
        <SectionIntro className="alignnaV2Testimonials__intro" eyebrow="Early experiences" title="What users are saying." />
        <motion.div
          className="alignnaV2Testimonials__board"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
        >
          {quotes.map((item) => (
            <motion.article key={item.initials} variants={reveal} className={item.featured ? "is-featured" : ""}>
              <svg className="alignnaV2Testimonials__mark" viewBox="0 0 48 32" aria-hidden="true">
                <path fill="currentColor" d="M18.2 32H0V17.6C0 7.5 6.2 1.2 16.2 0l2.1 6.8c-5.3 1.2-8 4.4-8 9.6V14h8V32zm29.8 0H29.8V17.6c0-10.1 6.2-16.4 16.2-17.6L48 6.8c-5.3 1.2-8 4.4-8 9.6V14h8V32z" />
              </svg>
              <p>{item.quote}</p>
              <footer>
                <b>{item.initials}</b>
                <span>{item.name}</span>
              </footer>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="alignnaV2Compare">
        <SectionIntro
          className="alignnaV2Compare__intro"
          eyebrow="Alignna vs. the old way"
          title="Support that works with you—not instead of you."
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="alignnaV2Compare__grid"
        >
          {compare.map((item) => (
            <motion.article key={item.name} variants={reveal} className={item.featured ? "is-featured" : ""}>
              {item.featured ? <header>Alignna</header> : <h3>{item.name}</h3>}
              <ul>
                {item.points.map((point) => (
                  <li key={point}>
                    <span className="alignnaV2Compare__mark" aria-hidden>
                      {item.featured ? (
                        <svg viewBox="0 0 16 16">
                          <path d="M3.2 8.3 6.4 11.6 12.8 4.4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 16 16">
                          <path d="M4.2 4.2 11.8 11.8M11.8 4.2 4.2 11.8" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                        </svg>
                      )}
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="alignnaV2Founder">
        <div className="alignnaV2Founder__shell">
          <motion.figure
            className="alignnaV2Founder__media"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={reveal}
          >
            <img src={sectionImages.founder} alt="Michelle Castellanos, Alignna founder, holding the Alignna belt" />
          </motion.figure>
          <div className="alignnaV2Founder__rule" aria-hidden />
          <motion.div
            className="alignnaV2Founder__copy"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
          >
            <span className="alignnaV2Founder__quotes" aria-hidden>“</span>
            <motion.p variants={reveal} className="alignnaV2__eyebrow">Hear from the founder</motion.p>
            <motion.h2 variants={reveal}>I believe caring for your body should feel like freedom—not correction.</motion.h2>
            <motion.div variants={reveal} className="alignnaV2Founder__body">
              <p>I watched person after person catch their reflection and instantly straighten. The posture was already there. What was missing was awareness.</p>
              <p>As a mechanical engineer who cares deeply about movement and wellbeing, I built the discreet reminder I wanted for myself. Twenty-five prototypes later, that idea became Alignna.</p>
            </motion.div>
            <motion.p variants={reveal} className="alignnaV2Founder__byline">
              <strong>Michelle Castellanos</strong>
              <span> • Mechanical engineer and founder of Alignna</span>
            </motion.p>
            <motion.p variants={reveal} className="alignnaV2Founder__pill">
              <span className="alignnaV2Founder__check" aria-hidden>
                <svg viewBox="0 0 16 16">
                  <path d="M3.2 8.3 6.4 11.6 12.8 4.4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              25 prototypes
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="alignnaV2Final">
        <div className="alignnaV2Final__panel">
          <motion.div
            className="alignnaV2Final__copy"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
          >
            <motion.p variants={reveal} className="alignnaV2Final__soon">Coming soon on</motion.p>
            <motion.p variants={reveal} className="alignnaV2Final__kickstarter" aria-label="Kickstarter">Kickstarter</motion.p>
            <motion.h2 variants={reveal}>Secure the USD 89 launch offer.</motion.h2>
            <motion.p variants={reveal} className="alignnaV2Final__lead">
              Join the list now. We&apos;ll send you the Kickstarter link before Alignna goes public.
            </motion.p>
          </motion.div>

          <motion.div
            className="alignnaV2Final__visual"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={reveal}
          >
            <article className="alignnaV2Final__offer">
              <div className="alignnaV2Final__offerRow">
                <div className="alignnaV2Final__retail">
                  <small>Retail</small>
                  <s>USD 149</s>
                </div>
                <span className="alignnaV2Final__arrow" aria-hidden>→</span>
                <div className="alignnaV2Final__pay">
                  <small>You pay</small>
                  <p>
                    <em>USD</em>
                    <strong>89</strong>
                  </p>
                </div>
                <b className="alignnaV2Final__badge">−40%</b>
              </div>
              <p className="alignnaV2Final__offerNote">First 24 hours only · then USD 129 for the rest of the campaign</p>
            </article>
            <img className="alignnaV2Final__belt" src={sectionImages.launchBelt} alt="Alignna belt" />
          </motion.div>

          <motion.div
            className="alignnaV2Final__form"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={reveal}
          >
            <WaitlistForm
              copy={launchFormCopy}
              locale="en-AU"
              source="alignna-v2-final"
              ctaLabel="Get the USD 89 offer"
              variant="light"
              idSuffix="alignna-v2-final"
              redirectTo="/alignna/thank-you"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
