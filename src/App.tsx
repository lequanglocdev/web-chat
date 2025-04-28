import { useState } from "react";
import MainLayout from "./layouts/mainLayout/MainLayout";
import SideBar from "./layouts/sideBar/SideBar";
import { useResponsive } from "./hooks/useResponsive";
import { ThemeProvider } from "./components/ui/theme-provider";
import icons from "./lib/icon";

const App = () => {
  const { isMobile, isTablet } = useResponsive();
  const [showMainLayout, setShowMainLayout] = useState<boolean>(false);
  const toggleLayout = () => setShowMainLayout((prev) => !prev);

  const { MdOutlineKeyboardArrowRight } = icons;

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {isMobile ? (
        <div className="w-full h-screen">
          <div className="w-[40px] h-[40px] absolute top-7 l-6 flex justify-center items-center mr-10 cursor-pointer hover:bg-[#1f2937] rounded-[6px] ">
            <MdOutlineKeyboardArrowRight size={20} onClick={toggleLayout} />
          </div>
          <div
            className={`transition-layout ${
              showMainLayout ? "slideIn" : "slideOut"
            }`}>
            {showMainLayout ? <MainLayout /> : <SideBar />}
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-center items-center h-screen">
          <div className={isTablet ? "flex-1" : "flex-[2] h-full"}>
            <SideBar />
          </div>
          <div className={isTablet ? "flex-1" : "flex-[8] h-full"}>
            <MainLayout />
          </div>
        </div>
      )}
    </ThemeProvider>
  );
};

export default App;
