import michelleDeskPng from "../assets/michPageAssets/michPhotos/michelle-desk.png";
import michelleDesk480Avif from "../assets/michPageAssets/michPhotos/michelle-desk-480.avif";
import michelleDesk960Avif from "../assets/michPageAssets/michPhotos/michelle-desk-960.avif";
import michelleDesk480Webp from "../assets/michPageAssets/michPhotos/michelle-desk-480.webp";
import michelleDesk960Webp from "../assets/michPageAssets/michPhotos/michelle-desk-960.webp";

/**
 * Unsplash CDN — fotos free (no Plus) con tono calm / presencia / corporalidad
 * alineado a Alignna. Historia = foto real de Michelle.
 */
function unsplash(photoId, width, extra = "") {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=80${extra}`;
}

function remoteShot(photoId, { alt, sizes, portraitExtra = "" }) {
  const src480 = unsplash(photoId, 480, portraitExtra);
  const src960 = unsplash(photoId, 960, portraitExtra);
  return {
    src: src960,
    srcSet: `${src480} 480w, ${src960} 960w`,
    alt,
    sizes,
  };
}

export const landingMedia = {
  /** Hero — presencia natural del cuerpo (yoga / mindfulness suave) */
  hero: remoteShot("photo-1544367567-0f2fcb009e0b", {
    alt: {
      es: "Persona en calma, presente en su cuerpo",
      en: "A person at ease, present in their body",
    },
    sizes: "(min-width: 900px) 420px, 85vw",
    portraitExtra: "&h=1280",
  }),

  /** Paso 1 — te lo pones / ropa cómoda invisible */
  howStep1: remoteShot("photo-1496747611176-843222e1e57c", {
    alt: {
      es: "Ropa cómoda del día a día, fácil de llevar",
      en: "Everyday comfortable clothing, easy to wear",
    },
    sizes: "(min-width: 800px) 280px, 70vw",
    portraitExtra: "&h=960",
  }),

  /** Paso 2 — postura / conciencia corporal */
  howStep2: remoteShot("photo-1571019613454-1cb2f99b2d8b", {
    alt: {
      es: "Postura consciente y alineación del cuerpo",
      en: "Mindful posture and body alignment",
    },
    sizes: "(min-width: 800px) 280px, 70vw",
    portraitExtra: "&h=960",
  }),

  /** Paso 3 — aviso suave / tacto amable */
  howStep3: remoteShot("photo-1544161515-4ab6ce6db874", {
    alt: {
      es: "Un recordatorio suave, sin presión",
      en: "A soft reminder, without pressure",
    },
    sizes: "(min-width: 800px) 280px, 70vw",
    portraitExtra: "&h=960",
  }),

  /** Por dentro — objeto discreto / producto preciso */
  inside: remoteShot("photo-1523275335684-37898b6baf30", {
    alt: {
      es: "Precisión discreta en un objeto de uso diario",
      en: "Discreet precision in an everyday object",
    },
    sizes: "(min-width: 900px) 300px, 70vw",
    portraitExtra: "&h=1200",
  }),

  /** Historia — fundadora (asset local) */
  story: {
    src: michelleDeskPng,
    alt: {
      es: "Michelle, ingeniera mecánica, en su espacio de trabajo",
      en: "Michelle, mechanical engineer, at her workspace",
    },
    avifSrcSet: `${michelleDesk480Avif} 480w, ${michelleDesk960Avif} 960w`,
    webpSrcSet: `${michelleDesk480Webp} 480w, ${michelleDesk960Webp} 960w`,
    sizes: "(min-width: 860px) 400px, 90vw",
  },
};

export function mediaAlt(image, lang) {
  if (!image?.alt) return "";
  if (typeof image.alt === "string") return image.alt;
  return lang === "en" ? image.alt.en : image.alt.es;
}
