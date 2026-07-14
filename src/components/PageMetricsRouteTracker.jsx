import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Registra pageviews en cada ruta (SPA). No renderiza nada.
 * Carga dinámica: si un bloqueador de ads tumba el módulo, la app sigue.
 */
export default function PageMetricsRouteTracker() {
  const location = useLocation();

  useEffect(() => {
    let cancelled = false;
    import('../metrics/pageMetrics')
      .then((m) => {
        if (!cancelled) m.initGoogleAnalytics();
      })
      .catch(() => {
        /* blocked by extension / network — ignore */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    const path = location.pathname + location.search;
    import('../metrics/pageMetrics')
      .then((m) => {
        if (!cancelled) m.trackPageView(path);
      })
      .catch(() => {
        /* ignore */
      });
    return () => {
      cancelled = true;
    };
  }, [location.pathname, location.search]);

  return null;
}
