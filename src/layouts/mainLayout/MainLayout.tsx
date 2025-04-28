const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="h-16 border-b">name</div>
      <div className="flex-1 overflow-auto">chat</div>{" "}
      <div className="h-16 border-t">text</div>
    </div>
  );
};

export default MainLayout;
