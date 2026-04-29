import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import navEnAU from '../locales/en-AU/nav.json'
import commonEnAU from '../locales/en-AU/common.json'
import footerEnAU from '../locales/en-AU/footer.json'
import homeEnAU from '../locales/en-AU/home.json'
import alignnaEnAU from '../locales/en-AU/alignna.json'
import parallaxReserveEnAU from '../locales/en-AU/parallaxReserve.json'
import parallaxCardsEnAU from '../locales/en-AU/parallaxCards.json'
import myWorkEnAU from '../locales/en-AU/myWork.json'
import servicesEnAU from '../locales/en-AU/services.json'
import portfolioEnAU from '../locales/en-AU/portfolio.json'
import testimonialsEnAU from '../locales/en-AU/testimonials.json'
import aboutEnAU from '../locales/en-AU/about.json'
import contactEnAU from '../locales/en-AU/contact.json'
import blogEnAU from '../locales/en-AU/blog.json'
import selectedWorkEnAU from '../locales/en-AU/selectedWork.json'

import navEsMX from '../locales/es-MX/nav.json'
import commonEsMX from '../locales/es-MX/common.json'
import footerEsMX from '../locales/es-MX/footer.json'
import homeEsMX from '../locales/es-MX/home.json'
import alignnaEsMX from '../locales/es-MX/alignna.json'
import parallaxReserveEsMX from '../locales/es-MX/parallaxReserve.json'
import parallaxCardsEsMX from '../locales/es-MX/parallaxCards.json'
import myWorkEsMX from '../locales/es-MX/myWork.json'
import servicesEsMX from '../locales/es-MX/services.json'
import portfolioEsMX from '../locales/es-MX/portfolio.json'
import testimonialsEsMX from '../locales/es-MX/testimonials.json'
import aboutEsMX from '../locales/es-MX/about.json'
import contactEsMX from '../locales/es-MX/contact.json'
import blogEsMX from '../locales/es-MX/blog.json'
import selectedWorkEsMX from '../locales/es-MX/selectedWork.json'

const translationEnAU = {
  ...navEnAU,
  ...commonEnAU,
  ...footerEnAU,
  ...homeEnAU,
  ...alignnaEnAU,
  ...parallaxReserveEnAU,
  ...parallaxCardsEnAU,
  ...myWorkEnAU,
  ...servicesEnAU,
  ...portfolioEnAU,
  ...testimonialsEnAU,
  ...aboutEnAU,
  ...contactEnAU,
  ...blogEnAU,
  ...selectedWorkEnAU,
}

const translationEsMX = {
  ...navEsMX,
  ...commonEsMX,
  ...footerEsMX,
  ...homeEsMX,
  ...alignnaEsMX,
  ...parallaxReserveEsMX,
  ...parallaxCardsEsMX,
  ...myWorkEsMX,
  ...servicesEsMX,
  ...portfolioEsMX,
  ...testimonialsEsMX,
  ...aboutEsMX,
  ...contactEsMX,
  ...blogEsMX,
  ...selectedWorkEsMX,
}

function normalizeDetectedLanguage(lng) {
  if (!lng) return 'en-AU'
  const lower = String(lng).toLowerCase()
  if (lower === 'es-mx' || lower.startsWith('es')) return 'es-MX'
  return 'en-AU'
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      'en-AU': { translation: translationEnAU },
      'es-MX': { translation: translationEsMX },
    },
    fallbackLng: 'en-AU',
    supportedLngs: ['en-AU', 'es-MX'],
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
      convertDetectedLanguage: normalizeDetectedLanguage,
    },
  })

export default i18n
