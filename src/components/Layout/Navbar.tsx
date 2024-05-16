import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-color-scheme-primary text-color-scheme-detail p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Menu as="div" className="relative">
            <MenuButton className="hover:bg-color-scheme-accent px-4 py-2 rounded flex items-center"></MenuButton>
            <MenuItems className="absolute left-0 w-48 mt-2 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-20"></MenuItems>
          </Menu>
          <NavLink
            to="/my-books"
            className="px-4 py-2 hover:bg-color-scheme-accent text-color-scheme-detail"
          >
            My Books
          </NavLink>
          <NavLink
            to="/search"
            className="px-4 py-2 rounded hover:bg-color-scheme-accent text-color-scheme-detail"
          >
            Search
          </NavLink>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Quick Search..."
            className="p-1 text-center italic text-color-scheme-primary font-roboto-slab"
          />
          <button className="p-1 rounded-r-md">asd</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
