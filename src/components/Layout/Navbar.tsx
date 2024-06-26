import { NavLink } from "react-router-dom";
import loggo from "/loggo.svg";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <nav className="rounded-b-lg bg-color-scheme-mediumgrey text-bookFlix-colors-detail p-4">
      <div className="flex justify-between items-center">
        <NavLink to="/">
          <img className="w-16 ml-9" src={loggo} alt="" />
        </NavLink>

        <NavLink to="/">
          <h1 className=" ml-32  text-3xl font-bold text-white hover:text-color-scheme-accent  cursor-pointer">
            Borås Starter Kit
          </h1>
        </NavLink>
        <div className="text-3xl font-bold text-white hover:text-color-scheme-accent">
          <Dropdown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
