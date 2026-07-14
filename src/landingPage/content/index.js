import es from "./es";
import en from "./en";

export function getLandingContent(lang) {
  return lang === "en" ? en : es;
}

export { es, en };
