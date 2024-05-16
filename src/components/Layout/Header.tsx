import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-color-scheme-primary text-bookFlix-colors-detail p-4">
      <div className="container mx-auto flex justify-center items-center">
        <NavLink
          to="/"
          className="text-xl font-bold text-color-scheme-detail hover:text-color-scheme-accent"
        >
          <h1 className="font-roboto-slab text-3xl font-bold">
            Borås Starter Kit
          </h1>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
