import { useEffect } from "react";
import { getLandingContent } from "./content";
import Hero from "./sections/01-hero/Hero";
import Problem from "./sections/02-problem/Problem";
import Comparison from "./sections/03-comparison/Comparison";
import HowItWorks from "./sections/04-how-it-works/HowItWorks";
import Benefits from "./sections/05-benefits/Benefits";
import InsideProduct from "./sections/06-inside/InsideProduct";
import Story from "./sections/07-story/Story";
import PreLaunch from "./sections/08-prelaunch/PreLaunch";
import FinalCta from "./sections/09-final-cta/FinalCta";
import "./landingPage.css";

/**
 * Shared Alignna waitlist landing shell.
 * @param {{ lang: 'es' | 'en' }} props
 */
export default function LandingPageShell({ lang }) {
  const content = getLandingContent(lang);
  const { form, locale } = content;

  useEffect(() => {
    const previousLang = document.documentElement.lang;
    document.documentElement.lang = locale.startsWith("es") ? "es" : "en";
    document.title =
      lang === "en"
        ? "Alignna — Early Access"
        : "Alignna — Acceso anticipado";
    return () => {
      document.documentElement.lang = previousLang;
    };
  }, [lang, locale]);

  return (
    <div className="lpPage">
      <Hero content={content} form={form} locale={locale} />
      <Problem content={content} />
      <Comparison content={content} />
      <HowItWorks content={content} />
      <Benefits content={content} />
      <InsideProduct content={content} form={form} locale={locale} />
      <Story content={content} />
      <PreLaunch content={content} />
      <FinalCta content={content} form={form} locale={locale} />
    </div>
  );
}
