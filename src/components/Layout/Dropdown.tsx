import React, { useState } from "react";

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language: string) => {
    // Här kan du lägga till logik för att hantera valt språk
    console.log("Valt språk: " + language);
    setIsOpen(false); // Stäng dropdown-menyn när ett språk väljs
  };

  return (
    <div className="relative inline-block text-left">
      <button onClick={toggleDropdown} className="text-2xl font-bold mr-24">
        Välj språk
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1">
            <a
              href="#"
              onClick={() => selectLanguage("sv")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              Svenska
            </a>
            <a
              href="#"
              onClick={() => selectLanguage("en")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              English
            </a>
            <a
              href="#"
              onClick={() => selectLanguage("en")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              Polski
            </a>
            <a
              href="#"
              onClick={() => selectLanguage("en")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              Türkçe
            </a>
            <a
              href="#"
              onClick={() => selectLanguage("en")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              العربية
            </a>
            <a
              href="#"
              onClick={() => selectLanguage("en")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              日本語
            </a>
            {/* Lägg till fler språk här enligt behov */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
