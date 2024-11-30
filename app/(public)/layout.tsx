export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="drawer">
        <input
          id="left-sidebar-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col ">
          <main className="flex-1 overflow-y-auto  ">
            {children}
            <div className="h-16"></div>
          </main>
        </div>
      </div>
    </>
  );
}
