import { createContext, useContext, useMemo, useState } from "react";

const HeroAlignnaDockContext = createContext(null);

export function HeroAlignnaDockProvider({ children }) {
  const [docked, setDocked] = useState(false);
  const value = useMemo(() => ({ docked, setDocked }), [docked]);
  return (
    <HeroAlignnaDockContext.Provider value={value}>
      {children}
    </HeroAlignnaDockContext.Provider>
  );
}

export function useHeroAlignnaDock() {
  const ctx = useContext(HeroAlignnaDockContext);
  return ctx ?? { docked: false, setDocked: () => {} };
}
