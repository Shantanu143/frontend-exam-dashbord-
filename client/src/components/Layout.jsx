import SideNav from "./SideNav";

const Layout = ({ children }) => {
    return (
      <div className="flex h-screen">
        <SideNav />
        <main className="flex-1">
          <div className="container mx-auto px-4 py-6">{children}</div>
        </main>
      </div>
    );
  };

  
  export default Layout