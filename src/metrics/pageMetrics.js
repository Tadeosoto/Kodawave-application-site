/** GA4 — solo corre en producción si existe VITE_GA_MEASUREMENT_ID (ej. G-XXXXXXXX). */

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() || '';

let initialized = false;

function canTrack() {
  return (
    typeof window !== 'undefined' &&
    import.meta.env.PROD &&
    MEASUREMENT_ID.length > 0 &&
    typeof window.gtag === 'function'
  );
}

export function initGoogleAnalytics() {
  if (typeof window === 'undefined' || !import.meta.env.PROD || !MEASUREMENT_ID) {
    return;
  }
  if (initialized) return;
  initialized = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', MEASUREMENT_ID, { send_page_view: false });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

export function trackPageView(path) {
  if (!canTrack()) return;
  const pagePath = path || window.location.pathname + window.location.search;
  window.gtag('event', 'page_view', {
    page_path: pagePath,
    page_location: window.location.origin + pagePath,
  });
}

export function isGoogleAnalyticsEnabled() {
  return Boolean(import.meta.env.PROD && MEASUREMENT_ID);
}
