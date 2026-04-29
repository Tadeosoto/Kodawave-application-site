import { useState } from "react";
import { motion } from "framer-motion";
import alignnaWordmarkUrl from "../assets/michPageAssets/logos-icons/Alignna-BlancoRoto.svg";

const MotionFooter = motion.footer;
const MotionH2 = motion.h2;
const MotionDiv = motion.div;
const MotionP = motion.p;
const MotionForm = motion.form;

const footerEase = [0.22, 0.61, 0.36, 1];

const footerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
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
const ENDPOINT = import.meta.env.VITE_NEWSLETTER_ENDPOINT?.trim();

const SiteFooter = ({ compactTop = false }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) {
      setStatus("error");
      setMessage("Escribe un correo válido.");
      return;
    }

    setStatus("loading");
    setMessage("");

    if (ENDPOINT) {
      try {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: trimmed }),
        });
        if (!res.ok) throw new Error("bad_status");
        setStatus("success");
        setMessage("Listo. Te avisamos pronto.");
        setEmail("");
      } catch {
        setStatus("error");
        setMessage("No se pudo enviar. Intenta de nuevo más tarde.");
      }
      return;
    }

    const subject = encodeURIComponent("Newsletter — Alignna");
    const body = encodeURIComponent(
      `Quiero recibir novedades.\n\nCorreo: ${trimmed}`,
    );
    window.location.href = `mailto:${NOTIFY_EMAIL}?subject=${subject}&body=${body}`;
    setStatus("success");
    setMessage("Se abrirá tu correo con el mensaje listo para enviar.");
  };

  return (
    <MotionFooter
      className={`border-t border-neutral-300/40 text-ink ${
        compactTop ? "mt-0 bg-[#eff0ec]" : "mt-20 bg-[#f7f6f2]"
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -10% 0px" }}
      variants={footerContainer}
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center px-6 py-16 text-center md:px-10 md:py-20">
        <MotionH2
          variants={footerItem}
          className="font-display text-[clamp(1.65rem,4.2vw,2.35rem)] font-normal leading-[1.2] tracking-tight text-ink"
        >
          <span className="block">Lo vas a querer puesto</span>
          <span className="mt-1 block font-medium italic text-[#c5a880]">
            antes de que exista.
          </span>
        </MotionH2>

        <MotionDiv
          variants={footerItem}
          className="mt-10 h-px w-full max-w-md bg-linear-to-r from-transparent via-principal/55 to-transparent shadow-[0_0_24px_rgba(151,205,181,0.45)]"
          aria-hidden
        />

        <MotionDiv
          variants={footerItem}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
        >
          <img
            src={alignnaWordmarkUrl}
            alt="Alignna"
            className="h-7 w-auto brightness-0 sm:h-8"
            decoding="async"
          />
          <span className="text-sm font-medium tracking-wide text-neutral-500 md:text-base">
            está en desarrollo
          </span>
        </MotionDiv>

        <MotionP
          variants={footerItem}
          className="mt-3 text-sm text-neutral-600 md:text-base"
        >
          Sé la primera en enterarte cuando este listo
        </MotionP>

        <MotionForm
          variants={footerItem}
          onSubmit={handleSubmit}
          className="mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-0"
          noValidate
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Correo electrónico
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            className="min-h-12 w-full flex-1 rounded-lg border border-neutral-400/60 bg-white px-4 py-3 text-left text-sm text-ink placeholder:text-neutral-400 outline-none transition focus:border-principal focus:ring-2 focus:ring-principal/30 sm:rounded-r-none sm:border-r-0"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="min-h-12 shrink-0 rounded-lg bg-[#769382] px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-sm transition hover:bg-[#6a8774] hover:shadow-md disabled:opacity-60 sm:rounded-l-none sm:px-8"
          >
            {status === "loading" ? "Enviando…" : "Avisar"}
          </button>
        </MotionForm>

        {message ? (
          <MotionP
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.38, ease: footerEase }}
            className={`mt-4 max-w-md text-sm ${
              status === "error" ? "text-red-700/90" : "text-neutral-600"
            }`}
            role={status === "error" ? "alert" : "status"}
          >
            {message}
          </MotionP>
        ) : null}

        <MotionP
          variants={footerItem}
          className="mt-8 max-w-md text-xs leading-relaxed text-neutral-500"
        >
          © {new Date().getFullYear()} Caenna · Alignna
        </MotionP>
      </div>
    </MotionFooter>
  );
};

export default SiteFooter;
