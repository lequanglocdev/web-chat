import { useState } from "react";
import MainLayout from "./layouts/mainLayout/MainLayout";
import SideBar from "./layouts/sideBar/SideBar";
import { useResponsive } from "./hooks/useResponsive";
import { ThemeProvider } from "./components/ui/theme-provider";

const App = () => {
  const { isMobile, isTablet } = useResponsive();
  const [showMainLayout, setShowMainLayout] = useState<boolean>(false);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {isMobile ? (
        <div
          className={`transition-layout ${
            showMainLayout ? "slideIn" : "slideOut"
          }`}>
          {showMainLayout ? (
            <MainLayout setShowMainLayout={setShowMainLayout} />
          ) : (
            <SideBar setShowMainLayout={setShowMainLayout} />
          )}
        </div>
      ) : (
        <div className="w-full flex justify-center items-center h-screen">
          <div className={isTablet ? "flex-1" : "flex-[2] h-full"}>
            <SideBar setShowMainLayout={setShowMainLayout} />
          </div>
          <div className={isTablet ? "flex-1" : "flex-[8] h-full"}>
            <MainLayout setShowMainLayout={setShowMainLayout} />
          </div>
        </div>
      )}
    </ThemeProvider>
  );
};

export default App;
