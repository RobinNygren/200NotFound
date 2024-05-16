import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Navbar from "../components/Layout/Navbar";


const Root = () => {
  /*   const location = useLocation(); */
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
  
        <main className="flex-grow bg-color-scheme-background">
          {/* {location.pathname === "/" && <placeholder />} */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Root;
