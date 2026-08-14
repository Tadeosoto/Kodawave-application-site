import { motion } from "framer-motion";
import WaitlistForm from "../landingPage/components/WaitlistForm";
import heroGif from "../landingPage/assets/hero-cinematic.gif";
import founderImage from "../assets/michPageAssets/michPhotos/michelle-desk.png";
import "./AlignnaV2.css";

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

const heroFormCopy = {
  ...formCopy,
  note: "No payment. No obligation. We’ll send you the Kickstarter link before the public launch.",
};

const image = (id, alt) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=82`;

const steps = [
  {
    number: "01",
    title: "Wear it.",
    body: "A soft, adjustable belt made to disappear under your everyday clothes.",
    image: image("photo-1506629905607-d405b7a2a33d", "Woman wearing casual clothing"),
  },
  {
    number: "02",
    title: "Feel it.",
    body: "A discreet sensor notices when your body drifts before the habit settles in.",
    image: image("photo-1518611012118-696072aa579a", "Mindful movement"),
  },
  {
    number: "03",
    title: "Own it.",
    body: "A quiet vibration brings awareness back to you — no shame, no pulling.",
    image: image("photo-1544161515-4ab6ce6db874", "Gentle body care"),
  },
];

const quotes = [
  ["KK", "“I stopped thinking about posture all day. Alignna catches the moment before I do.”"],
  ["SY", "“It doesn’t correct me. It gives me a second to choose.”"],
  ["EA", "“The vibration is tiny, but the change feels enormous.”"],
];

const compare = [
  {
    name: "Shapewear",
    symbol: "×",
    points: ["Squeezes from the outside", "Stops working when removed", "Makes you depend on pressure"],
  },
  {
    name: "Alignna",
    symbol: "✓",
    featured: true,
    points: ["Builds awareness from within", "Works with or without the belt", "A gentle cue, never a correction"],
  },
  {
    name: "Posture braces",
    symbol: "×",
    points: ["Pulls shoulders back", "Restricts natural movement", "Treats posture as a position"],
  },
];

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
  return (
    <div className="alignnaV2">
      <section className="alignnaV2Hero">
        <div className="alignnaV2Hero__media">
          <img src={heroGif} alt="" aria-hidden />
          <KickstarterBadge />
          <PriceBadge />
        </div>
        <div className="alignnaV2Hero__veil" />
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
                <WaitlistForm copy={heroFormCopy} locale="en-AU" source="alignna-v2-hero" ctaLabel="Secure my spot" variant="overlay" idSuffix="alignna-v2-hero" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="alignnaV2Problem alignnaV2__light">
        <SectionIntro eyebrow="The real problem" title="The photo isn’t the problem. The delay is." body="Your body knows when it has drifted. The problem is that you usually notice it after the moment has already passed." />
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={stagger} className="alignnaV2Problem__timeline">
          <motion.article variants={reveal}><img src={image("photo-1518611012118-696072aa579a", "Movement after the moment")} alt="After the moment" /><p>After the moment</p></motion.article>
          <motion.div variants={reveal} className="alignnaV2Problem__now">Now <i>→</i></motion.div>
          <motion.article variants={reveal}><img src={image("photo-1529693662653-9d480530a697", "Awareness in the moment")} alt="In the moment" /><p>In the moment</p></motion.article>
        </motion.div>
      </section>

      <section className="alignnaV2Steps alignnaV2__light">
        <SectionIntro eyebrow="How Alignna works" title="Wear it. Feel it. Own it." />
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={stagger} className="alignnaV2Steps__grid">
          {steps.map((step) => <motion.article key={step.number} variants={reveal}>
            <img src={step.image} alt="" />
            <p className="alignnaV2Steps__number">Step {step.number}</p>
            <h3>{step.title}</h3><p>{step.body}</p>
          </motion.article>)}
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
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={stagger} className="alignnaV2Launch__card">
          <motion.div variants={reveal}><p className="alignnaV2__eyebrow">We’re launching on</p><strong>Kickstarter</strong><h2>Before Alignna goes public.</h2><p>Join the early list for first access and the launch price.</p></motion.div>
          <motion.div variants={reveal}><WaitlistForm copy={formCopy} locale="en-AU" source="alignna-v2-mid" ctaLabel="Notify me" variant="light" idSuffix="alignna-v2-mid" /></motion.div>
        </motion.div>
      </section>

      <section className="alignnaV2Life alignnaV2__light">
        <div className="alignnaV2Life__image"><img src={image("photo-1496747611176-843222e1e57c", "Woman at work")} alt="Made for real life" /></div>
        <div className="alignnaV2Life__copy">
          <p className="alignnaV2__eyebrow">At work · On the move · Before the moment</p>
          <span className="alignnaV2Life__counter">01 / 03</span>
          <h2>Made for real life.</h2>
          <p>Designed to move with the day you already have — sitting, walking, commuting, and everything in between.</p>
          <div className="alignnaV2Life__thumbs"><span /><span /><span /></div>
        </div>
      </section>

      <section className="alignnaV2Testimonials alignnaV2__light">
        <SectionIntro eyebrow="Early experiences" title="What users are saying." />
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={stagger} className="alignnaV2Testimonials__grid">
          {quotes.map(([initials, quote], index) => <motion.article key={initials} variants={reveal} className={index === 0 ? "is-featured" : ""}><b>{initials}</b><p>{quote}</p></motion.article>)}
        </motion.div>
      </section>

      <section className="alignnaV2Compare alignnaV2__light">
        <SectionIntro eyebrow="Alignna vs. the old way" title="Awareness changes everything." />
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={stagger} className="alignnaV2Compare__grid">
          {compare.map((item) => <motion.article key={item.name} variants={reveal} className={item.featured ? "is-featured" : ""}>
            <div className="alignnaV2Compare__symbol">{item.symbol}</div><h3>{item.name}</h3>
            <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
          </motion.article>)}
        </motion.div>
      </section>

      <section className="alignnaV2Founder alignnaV2__light">
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={stagger} className="alignnaV2Founder__grid">
          <motion.img variants={reveal} src={founderImage} alt="Michelle, Alignna founder" />
          <motion.div variants={reveal}><p className="alignnaV2__eyebrow">The story behind Alignna</p><h2>Freedom, not correction.</h2><blockquote>“I wanted a reminder that belonged to my body — not another thing that forced it into place.”</blockquote><p>Michelle is a mechanical engineer who tested every cue, material, and vibration until Alignna felt natural enough to forget you are wearing it.</p><p className="alignnaV2Founder__pill">25 prototypes later</p></motion.div>
        </motion.div>
      </section>

      <section className="alignnaV2Final">
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={stagger} className="alignnaV2Final__grid">
          <motion.div variants={reveal}><p className="alignnaV2__eyebrow">Launch offer</p><h2>Secure the USD 89 launch offer.</h2><p>Be first in line when Alignna launches on Kickstarter.</p><WaitlistForm copy={formCopy} locale="en-AU" source="alignna-v2-final" ctaLabel="Get the USD 89 offer" variant="dark" idSuffix="alignna-v2-final" /></motion.div>
          <motion.div variants={reveal} className="alignnaV2Final__price"><span>Retail USD 149</span><strong>USD 89</strong><b>−40%</b><img src={image("photo-1523275335684-37898b6baf30", "Alignna product placeholder")} alt="Alignna product placeholder" /></motion.div>
        </motion.div>
      </section>
    </div>
  );
}
