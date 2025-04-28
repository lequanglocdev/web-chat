import { useResponsive } from "@/hooks/useResponsive";
import icons from "@/lib/icon";
import image from "@/assets/woman.png";
interface HeaderMainLayoutProps {
  setShowMainLayout: (show: boolean) => void;
}

const HeaderMainLayout = ({ setShowMainLayout }: HeaderMainLayoutProps) => {
  const { MdOutlineKeyboardArrowRight, FiPhoneCall, FiVideo } = icons;
  const { isMobile } = useResponsive();

  return (
    <div>
      {isMobile ? (
        <div className="flex justify-between items-center gap">
          <div className="flex justify-between items-center gap-2">
            <div
              className="w-[40px] h-[40px] flex justify-center items-center cursor-pointer dark:hover:bg-[#1f2937] rounded-[6px] "
              onClick={() => setShowMainLayout(false)}>
              <MdOutlineKeyboardArrowRight size={20} />
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="relative">
                <img
                  src={image}
                  alt="imageAvarta"
                  className="w-[40px] h-[40px] object-cover "
                />
                <div className="absolute right-0 top-7  w-[12px] h-[12px] rounded-full bg-[#9CA3CF]"></div>
                {/* 22C55E */}
              </div>
              <div>
                <p>Lê Quang Lộc</p>
                <span className="text-[12px]">Đang hoạt động</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center gap-6 ">
            <div className="w-[40px] h-[40px] flex justify-center items-center cursor-pointer hover:text-[#636e72] dark:hover:bg-[#1f2937] rounded-[6px]">
              <FiPhoneCall />
            </div>
            <div className="w-[40px] h-[40px] flex justify-center items-center cursor-pointer hover:text-[#636e72] dark:hover:bg-[#1f2937] rounded-[6px]">
              <FiVideo />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-2">
            <div className="relative">
              <img
                src={image}
                alt="imageAvarta"
                className="w-[40px] h-[40px] object-cover "
              />
              <div className="absolute right-0 top-7  w-[12px] h-[12px] rounded-full bg-[#9CA3CF]"></div>
              {/* 22C55E */}
            </div>
            <div>
              <p>Lê Quang Lộc</p>
              <span className="text-[12px]">Đang hoạt động</span>
            </div>
          </div>
          <div className="flex justify-between items-center gap-6 ">
            <div className="w-[40px] h-[40px] flex justify-center items-center cursor-pointer hover:text-[#636e72] dark:hover:bg-[#1f2937] rounded-[6px]">
              <FiPhoneCall />
            </div>
            <div className="w-[40px] h-[40px] flex justify-center items-center cursor-pointer hover:text-[#636e72] dark:hover:bg-[#1f2937] rounded-[6px]">
              <FiVideo />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderMainLayout;
