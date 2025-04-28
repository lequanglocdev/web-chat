import icons from "@/lib/icon";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { useResponsive } from "@/hooks/useResponsive";

interface SideBarHeaderProps {
  setShowMainLayout: (show: boolean) => void;
}

const SideBarHeader = ({ setShowMainLayout }: SideBarHeaderProps) => {
  const { LuUsers, FiUserPlus, CiSettings, MdOutlineKeyboardArrowRight } =
    icons;
  const { isMobile } = useResponsive();
  return (
    <div className="border-b-[1px]">
      {isMobile ? (
        <div className="p-3 flex justify-between items-center">
          <div className="flex justify-center items-center">
            <div
              className="w-[40px] h-[40px] flex justify-center items-center cursor-pointer hover:bg-[#1f2937] rounded-[6px] "
              onClick={() => setShowMainLayout(true)}>
              <MdOutlineKeyboardArrowRight size={20} />
            </div>
            <h5 className="text-xl font-bold ">Tin nhắn</h5>
          </div>
          <div className="flex justify-center items-center gap-2 cursor-pointer  ">
            <div className="w-[40px] h-[40px] flex justify-center items-center cursor-pointer hover:text-[#636e72] dark:hover:bg-[#1f2937] rounded-[6px]">
              <LuUsers />
            </div>
            <div className="w-[40px] h-[40px] flex justify-center items-center cursor-pointer hover:text-[#636e72] dark:hover:bg-[#1f2937] rounded-[6px]">
              <FiUserPlus />
            </div>
            <div className="w-[40px] h-[40px] flex justify-center items-center cursor-pointer hover:text-[#636e72] dark:hover:bg-[#1f2937] rounded-[6px]">
              <CiSettings size={18} />
            </div>
            <ModeToggle />
          </div>
        </div>
      ) : (
        <div className="px-2 py-[14px] flex justify-between items-center">
          <h5 className="text-lg font-bold">Tin nhắn</h5>
          <div className="w-[40px] h-[40px] flex justify-center items-center cursor-pointer hover:text-[#636e72] dark:hover:bg-[#1f2937] rounded-[6px]">
            <LuUsers />
          </div>
          <div className="w-[40px] h-[40px] flex justify-center items-center cursor-pointer hover:text-[#636e72] dark:hover:bg-[#1f2937] rounded-[6px]">
            <FiUserPlus />
          </div>
          <div className="w-[40px] h-[40px] flex justify-center items-center cursor-pointer hover:text-[#636e72] dark:hover:bg-[#1f2937] rounded-[6px]">
            <CiSettings size={20} />
          </div>
          <ModeToggle />
        </div>
      )}
    </div>
  );
};

export default SideBarHeader;
