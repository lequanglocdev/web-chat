import HeaderMainLayout from "./headerMainLayout/headerMainLayout";

interface MainLayoutProps {
  setShowMainLayout: (show: boolean) => void;
}

const MainLayout = ({ setShowMainLayout }: MainLayoutProps) => {
  return (
    <div className="h-screen flex flex-col">
      <div className="h-16 p-4 border-b">
        <HeaderMainLayout setShowMainLayout={setShowMainLayout} />
      </div>
      <div className="flex-1 overflow-auto">chat</div>
      <div className="h-16 border-t">text</div>
    </div>
  );
};

export default MainLayout;
