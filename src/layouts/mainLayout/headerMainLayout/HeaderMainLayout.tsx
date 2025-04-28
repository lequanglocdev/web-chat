import { useResponsive } from "@/hooks/useResponsive";
import icons from "@/lib/icon";

interface HeaderMainLayoutProps {
  setShowMainLayout: (show: boolean) => void;
}

const HeaderMainLayout = ({ setShowMainLayout }: HeaderMainLayoutProps) => {
  const { MdOutlineKeyboardArrowRight } = icons;
  const { isMobile } = useResponsive();

  return (
    <div>
      {isMobile ? (
        <div className="flex justify-between items-center gap">
          <div className="flex justify-between items-center">
            <div
              className="w-[40px] h-[40px] flex justify-center items-center cursor-pointer hover:bg-[#1f2937] rounded-[6px] "
              onClick={() => setShowMainLayout(false)}>
              <MdOutlineKeyboardArrowRight size={20} />
            </div>
            <div>name</div>
          </div>
          <div>icons</div>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <div>Thông tin trạng thái</div>
          <div>gọi và gọi video</div>
        </div>
      )}
    </div>
  );
};

export default HeaderMainLayout;
