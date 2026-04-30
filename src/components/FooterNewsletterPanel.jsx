import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

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
        },
        body: JSON.stringify({
          email: trimmed,
          source: "site-footer",
        }),
      });

      const payload = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(payload?.message || "bad_status");

      setStatus("success");
      setMessage(payload?.message || t("footer.successDefault"));
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
    ? "font-display text-[clamp(1.45rem,3.8vw,2.2rem)] font-normal leading-[1.2] tracking-tight text-ink md:text-[clamp(1.65rem,4.2vw,2.35rem)]"
    : "font-display text-[clamp(1.65rem,4.2vw,2.35rem)] font-normal leading-[1.2] tracking-tight text-ink";

  const dividerClass = embedded ? "mt-8 md:mt-10" : "mt-10";
  const blockClass = embedded ? "mt-8 md:mt-10" : "mt-10";
  const innerWidth = embedded ? "w-full" : "max-w-md";

  const inputClassName =
    "min-h-12 min-w-0 w-full flex-1 rounded-lg border border-neutral-400/60 bg-white px-4 py-3 text-left text-base text-ink placeholder:text-neutral-400 outline-none transition focus:border-principal focus:ring-2 focus:ring-principal/30 sm:rounded-r-none sm:border-r-0 md:text-xl";

  const formClassName = embedded
    ? `mx-auto flex w-full max-w-xs flex-col gap-3 sm:max-w-sm sm:flex-row sm:items-stretch sm:gap-0 md:max-w-md ${blockClass}`
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
          ? "mx-auto flex h-full min-h-0 w-full max-w-md flex-col items-stretch justify-center overflow-y-auto bg-transparent px-4 py-8 text-center sm:max-w-lg sm:px-6 sm:py-10 md:max-w-xl md:px-8 md:py-12"
          : "mx-auto flex max-w-2xl flex-col items-center px-6 py-16 text-center md:px-10 md:py-20"
      }
    >
      <MotionH2 variants={footerItem} className={h2Class}>
        <span className="block">{t("footer.headline1")}</span>
        <span className="mt-1 block font-medium italic text-[#c5a880]">
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
        className={`flex flex-wrap items-center justify-center gap-x-3 gap-y-2 ${blockClass}`}
      >
        <img
          src={alignnaWordmarkUrl}
          alt="Alignna"
          className="h-7 w-auto brightness-0 sm:h-8"
          decoding="async"
        />
        <span
          className={`font-medium tracking-wide text-neutral-500 ${embedded ? "text-base md:text-lg" : "text-lg md:text-2xl"}`}
        >
          {t("footer.inDevelopment")}
        </span>
      </MotionDiv>

      <MotionP
        variants={footerItem}
        className={`mt-3 text-neutral-600 ${embedded ? "text-base md:text-lg" : "text-lg md:text-xl"}`}
      >
        {t("footer.earlyAccess")}
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
          className="min-h-12 shrink-0 rounded-lg bg-[#769382] px-6 py-3 text-base font-semibold tracking-wide text-white shadow-sm transition hover:bg-[#6a8774] hover:shadow-md disabled:opacity-60 sm:rounded-l-none sm:px-8 md:text-2xl"
        >
          {status === "loading" ? t("footer.submitting") : t("footer.submit")}
        </button>
      </MotionForm>

      {message ? (
        <MotionP
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.38, ease: footerEase }}
          className={`mt-4 w-full ${innerWidth} text-sm ${status === "error" ? "text-red-700/90" : embedded ? "text-neutral-700" : "text-neutral-600"}`}
          role={status === "error" ? "alert" : "status"}
        >
          {message}
        </MotionP>
      ) : null}
    </motion.div>
  );
}
