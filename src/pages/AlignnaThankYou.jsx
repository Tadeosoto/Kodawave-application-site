import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./AlignnaThankYou.css";

const sectionImage = (filename) => `/images-inside-sections/${encodeURIComponent(filename)}`;

const images = {
  belt: sectionImage("Section 5 Image 1 V01.png"),
  collage: sectionImage("Alignna_Facebook_Collage_Transparent.png"),
};

const FACEBOOK_URL = "https://www.facebook.com/alignna";

export default function AlignnaThankYou() {
  useEffect(() => {
    document.title = "Thank you — Alignna";
    const html = document.documentElement;
    const prev = {
      htmlOverflow: html.style.overflow,
      bodyOverflow: document.body.style.overflow,
      bodyBg: document.body.style.background,
    };
    html.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.background = "#f5f3ed";
    return () => {
      html.style.overflow = prev.htmlOverflow;
      document.body.style.overflow = prev.bodyOverflow;
      document.body.style.background = prev.bodyBg;
    };
  }, []);

  return (
    <div className="alignnaThanks">
      <header className="alignnaThanks__top">
        <Link className="alignnaThanks__wordmark" to="/alignna-v2">
          Alignna
        </Link>
      </header>

      <section className="alignnaThanks__hero">
        <div className="alignnaThanks__copy">
          <p className="alignnaThanks__eyebrow">You’re on the list</p>
          <h1>Thank you. You’ll be among the first to know.</h1>
          <p className="alignnaThanks__lead">
            You’re now on the Alignna launch list. We’ll send you the Kickstarter link before the public launch, giving you the best chance to secure the <strong>USD 89 first-24-hours offer</strong>.
          </p>
          <p className="alignnaThanks__note">
            <span className="alignnaThanks__icon" aria-hidden>
              <svg viewBox="0 0 24 24">
                <path
                  d="M7 11V8a5 5 0 0 1 10 0v3M6.5 11h11A1.5 1.5 0 0 1 19 12.5v7A1.5 1.5 0 0 1 17.5 21h-11A1.5 1.5 0 0 1 5 19.5v-7A1.5 1.5 0 0 1 6.5 11Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            No payment has been taken. Just keep an eye on your inbox.
          </p>
        </div>
        <div className="alignnaThanks__media">
          <div className="alignnaThanks__beltWrap">
            <img className="alignnaThanks__belt" src={images.belt} alt="Alignna belt" />
          </div>
          <span className="alignnaThanks__halo" aria-hidden>
            <svg viewBox="0 0 16 16">
              <path
                d="M3.2 8.3 6.4 11.6 12.8 4.4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </section>

      <section className="alignnaThanks__wait">
        <div className="alignnaThanks__waitInner">
          <div className="alignnaThanks__copy">
            <p className="alignnaThanks__eyebrow">While you wait</p>
            <h2>You’re here early. Come along for the journey.</h2>
            <p className="alignnaThanks__lead">
              Alignna is still making its way from prototype to launch. We’re testing, refining, and documenting every step.
            </p>
            <p className="alignnaThanks__lead">
              Follow along on Facebook for prototypes, testing, and behind-the-scenes moments as we get ready.
            </p>
            <a className="alignnaThanks__fb" href={FACEBOOK_URL} target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden>
                <path
                  fill="currentColor"
                  d="M14.5 8.5h2.2V5.2h-2.2c-2.6 0-4.3 1.6-4.3 4.4v1.9H8.2v3.3h2V22h3.5v-7.2h2.4l.5-3.3h-2.9V9.9c0-1 .5-1.4 1.3-1.4Z"
                />
              </svg>
              Follow Alignna on Facebook
            </a>
            <p className="alignnaThanks__note">
              <span className="alignnaThanks__icon" aria-hidden>
                <svg viewBox="0 0 24 24">
                  <path
                    d="M12 20s-7.2-4.4-9.2-8.4C1.4 8.8 3 5.5 6.4 5.2 8.4 5 10 6.2 12 8.4 14 6.2 15.6 5 17.6 5.2c3.4.3 5 3.6 3.6 6.4C19.2 15.6 12 20 12 20Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              We’d love to have you there.
            </p>
          </div>
          <div className="alignnaThanks__collageWrap">
            <img
              className="alignnaThanks__collage"
              src={images.collage}
              alt="Alignna on Facebook, with prototype and testing photos"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
