import { useEffect, useState } from "react";
import { createContext } from "react";

export const MobileContext = createContext(null);

export const MobileContextProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 720);

  const handleResize = () => {
    if (window.innerWidth > 720) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <MobileContext.Provider value={isMobile}>{children}</MobileContext.Provider>
  );
};
