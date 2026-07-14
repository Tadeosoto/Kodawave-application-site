import { useState } from "react";
import HeroClassic from "./HeroClassic";
import HeroCinematic from "./HeroCinematic";
import "./Hero.css";

/**
 * Shell con toggle TEMPORAL (solo demo con cliente) entre:
 * - classic: layout actual (propuesta de Michelle)
 * - cinematic: GIF full-bleed + overlay (propuesta de diseño)
 */
export default function Hero({ content, form, locale }) {
  const [variant, setVariant] = useState("classic");
  const isCinematic = variant === "cinematic";
  const toggleLabel = isCinematic ? "Cambiar a Hero v1" : "Cambiar a Hero v2";

  return (
    <div className={`lpHeroShell${isCinematic ? " lpHeroShell--v2" : ""}`}>
      <button
        type="button"
        className="lpHeroDemoToggle"
        onClick={() =>
          setVariant((v) => (v === "classic" ? "cinematic" : "classic"))
        }
      >
        {toggleLabel}
      </button>

      {isCinematic ? (
        <HeroCinematic content={content} form={form} locale={locale} />
      ) : (
        <HeroClassic content={content} form={form} locale={locale} />
      )}
    </div>
  );
}
