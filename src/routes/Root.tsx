import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Navbar from "../components/Layout/Navbar";
import RenderCarousel from "../components/RenderCarousel/RenderCarousel";

const Root = () => {
  /*   const location = useLocation(); */
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Navbar />
        <main className="flex-grow bg-color-scheme-background">
          {/* {location.pathname === "/" && <placeholder />} */}
          <RenderCarousel
            images={[
              {
                src: "https://sas.vgregion.se/contentassets/bf2f11fdeb6a47e2af7f60aa5cdc3361/cropped-vgr16-sc384sc384s20entrc3a9202015_03381.jpg?w=1200&h=675&mode=crop&anchor=topcenter",
                alt: "alt1",
              },
              {
                src: "https://www.boras.se/images/18.3ccb264318d2a9491e6a269/1705934980194/ungdomar%20puff.webp",
                alt: "alt2",
              },
              {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI39Cllx7HKXDG6QAnhqhvKxu5Xj5A6LEPJKK1DS9xFg&s",
                alt: "alt3",
              },
              {
                src: "https://tidningenkonsulten.se/app/uploads/sites/3/2022/03/skatteverket-byline-mostphotos-792x320.jpg",
                alt: "alt4",
              },
              {
                src: "https://images.vastsverige.com/publishedmedia/fmjc488ymm9ovxg2w758/Vinci3.jpg",
                alt: "alt5",
              },
              {
                src: "https://www.boras.se/images/18.72871fcb1892e059f79b24ca/1689407775457/kulturhusetsentre.jpg",
                alt: "alt6",
              },
              {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOniZ5a8XL5Tg-Rd9NcSg308iyxnUl7ZDmty3X_5LkYg&s",
                alt: "Navet",
              },
              {
                src: "https://www.boras.se/images/18.2c696da0186d27a65085cbf3/1705580158319/VISKning_webb.webp",
                alt: "alt8",
              },
              {
                src: "https://www.boras.se/images/18.2cfd8fa7158d2732081e0136/1705582836649/Frisbee.webp",
                alt: "alt9",
              },
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Extri%C3%B6r-Simonsland.jpg",
                alt: "alt10",
              },
            ]}
          />
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Root;
