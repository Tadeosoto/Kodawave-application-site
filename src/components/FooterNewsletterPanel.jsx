import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import alignnaWordmarkUrl from "../assets/michPageAssets/logos-icons/Alignna-BlancoRoto.svg";

const MotionH2 = motion.h2;
const MotionDiv = motion.div;
const MotionP = motion.p;
const MotionForm = motion.form;

const footerEase = [0.22, 0.61, 0.36, 1];

const footerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

const footerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: footerEase },
  },
};

const NOTIFY_EMAIL =
  import.meta.env.VITE_NEWSLETTER_NOTIFY_EMAIL ?? "tadeosoto1993@gmail.com";
const ENDPOINT =
  import.meta.env.VITE_NEWSLETTER_ENDPOINT?.trim() || "/api/subscribe";

/**
 * Lista de correo / waitlist Alignna (antes en SiteFooter).
 * @param {{ embedded?: boolean }} props — `embedded`: dentro de tarjeta parallax.
 */
export default function FooterNewsletterPanel({ embedded = false }) {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const isAlignnaRoute = pathname === "/alignna";

  const inputId = embedded ? "newsletter-email-embedded" : "newsletter-email";

  const handleSubmit = async (event) => {
    event.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) {
      setStatus("error");
      setMessage(t("footer.errorEmpty"));
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Accept-Language": i18n.resolvedLanguage || i18n.language,
        },
        body: JSON.stringify({
          email: trimmed,
          source: "site-footer",
          locale: i18n.resolvedLanguage || i18n.language,
        }),
      });

      await res.json().catch(() => ({}));
      if (!res.ok) {
        if (res.status === 400) throw new Error(t("footer.errorEmpty"));
        throw new Error(t("footer.errorSend"));
      }

      setStatus("success");
      setMessage(t("footer.successDefault"));
      setEmail("");
    } catch (error) {
      if (!import.meta.env.VITE_NEWSLETTER_ENDPOINT) {
        const subject = encodeURIComponent(t("footer.newsletterSubject"));
        const body = encodeURIComponent(
          t("footer.newsletterBody", { email: trimmed }),
        );
        window.location.href = `mailto:${NOTIFY_EMAIL}?subject=${subject}&body=${body}`;
        setStatus("success");
        setMessage(t("footer.successMailto"));
        return;
      }
      setStatus("error");
      setMessage(error?.message || t("footer.errorSend"));
    }
  };

  const h2Class = embedded
    ? "font-display text-[clamp(1.95rem,5.4vw,2.75rem)] font-normal leading-[1.18] tracking-tight text-ink sm:text-[clamp(2.05rem,5vw,2.9rem)] md:text-[clamp(2.2rem,4.6vw,3.05rem)] lg:text-[clamp(2.35rem,3.9vw,3.35rem)]"
    : "font-display text-[clamp(2rem,5.2vw,2.8rem)] font-normal leading-[1.18] tracking-tight text-ink sm:text-[clamp(2.1rem,4.8vw,2.95rem)] md:text-[clamp(2.25rem,4.2vw,3.15rem)] lg:text-[clamp(2.4rem,3.5vw,3.4rem)]";

  const dividerClass = embedded ? "mt-16 md:mt-14 lg:mt-16" : "mt-12 md:mt-14";
  const blockClass = embedded ? "mt-16 md:mt-14 lg:mt-16" : "mt-12 md:mt-14";
  const innerWidth = embedded ? "w-full" : "max-w-md sm:max-w-lg";

  const inputClassName =
    "min-h-12 min-w-0 w-full flex-1 rounded-lg border border-neutral-400/60 bg-white px-4 py-3.5 text-left text-[1.05rem] text-ink placeholder:text-neutral-400 outline-none transition focus:border-principal focus:ring-2 focus:ring-principal/30 sm:min-h-13 sm:rounded-r-none sm:border-r-0 sm:text-lg md:min-h-14 md:px-5 md:text-xl";

  const formClassName = embedded
    ? `mx-auto flex w-full max-w-sm flex-col gap-3.5 sm:max-w-md sm:flex-row sm:items-stretch sm:gap-0 md:max-w-lg ${blockClass}`
    : `flex w-full ${innerWidth} flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-0 ${blockClass}`;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={
        embedded
          ? { once: true, amount: 0.2 }
          : { once: true, amount: 0.18, margin: "0px 0px -10% 0px" }
      }
      variants={footerContainer}
      className={
        embedded
          ? "mx-auto flex h-full min-h-0 w-full max-w-md flex-col items-stretch justify-center overflow-y-auto bg-transparent px-4 pt-8 pb-10 text-center sm:max-w-lg sm:px-6 sm:pt-10 sm:pb-12 md:max-w-xl md:px-8 md:pt-12 md:pb-14 lg:pt-14"
          : "mx-auto flex max-w-2xl flex-col items-center px-6 pt-20 pb-14 text-center sm:pt-24 md:px-10 md:pt-28 md:pb-20 lg:pt-32"
      }
    >
      <MotionH2 variants={footerItem} className={h2Class}>
        <span className="block">{t("footer.headline1")}</span>
        <span className="mt-1.5 block font-medium italic text-[#c5a880] sm:mt-2">
          {t("footer.headline2")}
        </span>
      </MotionH2>

      <MotionDiv
        variants={footerItem}
        className={`h-px w-full ${innerWidth} bg-linear-to-r from-transparent via-principal/55 to-transparent shadow-[0_0_24px_rgba(151,205,181,0.45)] ${dividerClass}`}
        aria-hidden
      />

      <MotionDiv
        variants={footerItem}
        className={`flex flex-wrap items-center justify-center gap-x-3.5 gap-y-2 sm:gap-x-4 ${blockClass}`}
      >
        <Link
          to="/alignna"
          className="inline-flex shrink-0 rounded-sm outline-none ring-offset-2 ring-offset-transparent transition-opacity hover:opacity-85 focus-visible:ring-2 focus-visible:ring-principal/50"
          aria-label={t("nav.goToAlignna")}
        >
          <img
            src={alignnaWordmarkUrl}
            alt=""
            className="h-8 w-auto brightness-0 sm:h-9 md:h-10"
            decoding="async"
          />
        </Link>
        <span
          className={`font-medium tracking-wide text-neutral-500 ${embedded ? "text-[1.15rem] sm:text-xl md:text-[1.35rem]" : "text-[1.15rem] sm:text-xl md:text-[1.85rem]"}`}
        >
          {t("footer.inDevelopment")}
        </span>
      </MotionDiv>

      <MotionP
        variants={footerItem}
        className={`mt-4 text-neutral-600 sm:mt-5 ${embedded ? "text-[1.12rem] sm:text-[1.2rem] md:text-[1.35rem]" : "text-[1.12rem] sm:text-xl md:text-[1.65rem]"}`}
      >
        {isAlignnaRoute ? (
          <>
            {t("footer.earlyAccessAlignnaLine1")}
            <br />
            {t("footer.earlyAccessAlignnaLine2")}
          </>
        ) : (
          t("footer.earlyAccessHome")
        )}
      </MotionP>

      <MotionForm
        variants={footerItem}
        onSubmit={handleSubmit}
        className={formClassName}
        noValidate
      >
        <label htmlFor={inputId} className="sr-only">
          {t("footer.emailLabel")}
        </label>
        <input
          id={inputId}
          name="email"
          type="email"
          autoComplete="email"
          placeholder={t("footer.placeholder")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className={inputClassName}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="min-h-12 shrink-0 rounded-lg bg-[#769382] px-7 py-3.5 text-[1.05rem] font-semibold tracking-wide text-white shadow-sm transition hover:bg-[#6a8774] hover:shadow-md disabled:opacity-60 sm:min-h-13 sm:rounded-l-none sm:px-9 sm:text-lg md:min-h-14 md:px-10 md:text-2xl"
        >
          {status === "loading" ? t("footer.submitting") : t("footer.submit")}
        </button>
      </MotionForm>

      {message ? (
        <MotionP
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.38, ease: footerEase }}
          className={
            status === "error"
              ? `mt-4 w-full ${innerWidth} text-base font-medium leading-snug text-red-700/90 sm:mt-5 sm:text-lg md:text-xl`
              : `mt-5 w-full ${innerWidth} text-center font-display text-[clamp(1.15rem,3.8vw,1.55rem)] font-medium leading-snug tracking-tight sm:mt-6 sm:text-[clamp(1.22rem,3.2vw,1.65rem)] md:text-2xl md:leading-snug lg:mt-7 lg:text-[clamp(1.45rem,2.4vw,1.85rem)] ${embedded ? "text-neutral-800" : "text-neutral-700"}`
          }
          role={status === "error" ? "alert" : "status"}
        >
          {message}
        </MotionP>
      ) : null}
    </motion.div>
  );
}
