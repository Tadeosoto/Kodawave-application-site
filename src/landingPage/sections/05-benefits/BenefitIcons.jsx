/** Iconos lineales para la sección de beneficios (Presencia / Confianza / Comodidad). */

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.65,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

/** Presencia — figura centrada + aliento (conciencia del cuerpo). */
function PresenceIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className="lpBenefits__svg">
      <circle cx="16" cy="9" r="3.2" {...stroke} />
      <path d="M11 28v-4.5c0-2.5 2.2-4.5 5-4.5s5 2 5 4.5V28" {...stroke} />
      <path d="M8.5 16.5c2.2-2.4 4.8-3.6 7.5-3.6s5.3 1.2 7.5 3.6" {...stroke} />
    </svg>
  );
}

/** Confianza — escudo suave (seguridad silenciosa). */
function ConfidenceIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className="lpBenefits__svg">
      <path
        d="M16 5.5 24 9v7.2c0 5.1-3.4 8.6-8 10.3-4.6-1.7-8-5.2-8-10.3V9l8-3.5Z"
        {...stroke}
      />
      <path d="m12.2 16.2 2.8 2.8 5.2-5.4" {...stroke} />
    </svg>
  );
}

/** Comodidad — hoja / tacto suave (sin presión, en la piel). */
function ComfortIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className="lpBenefits__svg">
      <path
        d="M16 26.5c0-7.5 4.2-12.2 10-14.5-1 8.2-4.8 12.8-10 14.5Z"
        {...stroke}
      />
      <path
        d="M16 26.5c0-7.5-4.2-12.2-10-14.5 1 8.2 4.8 12.8 10 14.5Z"
        {...stroke}
      />
      <path d="M16 26.5V12.8" {...stroke} />
    </svg>
  );
}

const ICONS = [PresenceIcon, ConfidenceIcon, ComfortIcon];

export default function BenefitIcon({ index }) {
  const Icon = ICONS[index] ?? PresenceIcon;
  return (
    <span className="lpBenefits__icon" aria-hidden>
      <Icon />
    </span>
  );
}
