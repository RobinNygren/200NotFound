import { NavLink } from "react-router-dom";
import IconPrototype from  "/IconPrototype.svg"
import Dropdown from "./Dropdown";


const Header = () => {
  return (
    <nav className="bg-color-scheme-primary text-bookFlix-colors-detail">
      
        <NavLink
          to="/"
          className="text-xl font-bold text-color-scheme-detail hover:text-color-scheme-accent flex justify-between items-center"
        >
          <div className="bg-color-scheme-primary text-color-scheme-detail p-4">
      <img className="w-16 ml-9" src={IconPrototype} alt="" />
 
    </div>
          <h1 className="text-3xl font-bold">
            Borås Starter Kit
          </h1>

          <Dropdown />
        </NavLink>
      
    </nav>
  );
};

export default Header;
