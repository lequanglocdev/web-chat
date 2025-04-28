import { IoSunnyOutline } from "react-icons/io5";
import { BsMoonStars } from "react-icons/bs";
import { useTheme } from "./theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === "light";
  const toggleTheme = () => {
    setTheme(isDarkMode ? "dark" : "light");
  };

  return (
    <div
      className="w-[60px] h-[28px] flex justify-around items-center bg-gray-400 rounded-3xl cursor-pointer"
      onClick={toggleTheme}>
      <div
        className={`transition-all duration-300 ease-in-out p-1 rounded-full ${
          isDarkMode ? "text-white bg-amber-500" : "text-black bg-transparent"
        }`}>
        <IoSunnyOutline />
      </div>

      <div
        className={`transition-all duration-300 ease-in-out p-1 rounded-full ${
          isDarkMode ? "text-white bg-transparent" : "text-white bg-black"
        }`}>
        <BsMoonStars />
      </div>
    </div>
  );
}
