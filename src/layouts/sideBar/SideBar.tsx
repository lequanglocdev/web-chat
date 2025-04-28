import SideBarHeader from "./sideBarHeader/SideBarHeader";

interface SideBarProps {
  setShowMainLayout: (show: boolean) => void;
}

const SideBar = ({ setShowMainLayout }: SideBarProps) => {
  return (
    <div className="h-screen p-2 dark:border border-l ">
      <SideBarHeader setShowMainLayout={setShowMainLayout} />
    </div>
  );
};

export default SideBar;
