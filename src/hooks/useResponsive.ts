import { useState, useEffect } from "react";

interface ResponsiveState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export function useResponsive(): ResponsiveState {
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isMobile: windowWidth <= 767,
    isTablet: windowWidth > 767 && windowWidth <= 1024,
    isDesktop: windowWidth >= 1025,
  };
}
