/** Mismos imports dinámicos que en App.jsx — Vite deduplica el chunk. */

const routeLoaders = {
  "/": () => import("../pages/Home"),
  "/my-work": () => import("../pages/MyWork"),
  "/about": () => import("../pages/About"),
  "/blog": () => import("../pages/Blog"),
  "/contact": () => import("../pages/Contact"),
  "/alignna": () => import("../pages/Alignna"),
};

const inFlight = new Set();

function normalizePath(pathname) {
  if (!pathname) return "";
  const base = pathname.split(/[?#]/)[0];
  if (base === "/services") return "/my-work";
  return base;
}

export function prefetchRoutePath(pathname) {
  const path = normalizePath(pathname);
  const load = routeLoaders[path];
  if (!load || inFlight.has(path)) return;
  inFlight.add(path);
  void load().finally(() => {
    inFlight.delete(path);
  });
}

/** Precarga el resto de páginas cuando el hilo está libre (no bloquea la pintura). */
export function prefetchOtherRoutesIdle(currentPathname) {
  const skip = normalizePath(currentPathname);
  const run = () => {
    for (const path of Object.keys(routeLoaders)) {
      if (path !== skip) prefetchRoutePath(path);
    }
  };
  if (typeof requestIdleCallback === "function") {
    requestIdleCallback(run, { timeout: 3200 });
  } else {
    setTimeout(run, 200);
  }
}
