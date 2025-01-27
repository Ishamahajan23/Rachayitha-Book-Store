"use client";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const HeaderLinks = [
    {
      label: "Explore",
      link: "Browse.svg",
    },
    {
      label: "Ranking",
      link: "ranking.svg",
    },
    {
      label: "Create",
      link: "create.svg",
    },
    {
      label: "Library",
      link: "library 1.svg",
    },
    {
      label: "Shorts",
      link: "shorts-removebg-preview 1.svg",
    },
    {
      label: "",
      link: "Frame 2273.svg",
    },
  ];

  return (
    <header id="#top" className="bg-white shadow-sm">
      <div className="relative container mx-auto py-4">
        <div className="flex items-center ml-5 md:w-full justify-between gap-5">
          <div className="flex md:gap-5 md:w-1/2 items-center md:space-x-4">
            <img src="assets/icons/header/image 66.svg" alt="Logo" />
            <div className="hidden md:flex w-full items-center space-x-4">
              <div className="relative w-full">
                <div className="relative w-full flex items-center h-12 border-2 rounded-full border-grape focus-within:shadow-lg bg-white overflow-hidden">
                  <div className="grid place-items-center h-full w-12 text-gray-300">
                    <img src="assets/icons/header/Vector.svg" alt="Logo" />
                  </div>

                  <input
                    className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                    type="text"
                    id="search"
                    placeholder="Search novels, poems and many more.."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex justify-self-end space-x-4">
            <div className="flex gap-10">
              {HeaderLinks.map((link) => (
                <a
                  key={link.label}
                  href="#"
                  className="text-gray-600 flex gap-2 items-center hover:text-purple-600"
                >
                  <img
                    src={`assets/icons/header/${link.link}`}
                    alt={link.label}
                  />
                  <div>{link.label}</div>
                </a>
              ))}
            </div>
            <div className="relative">
              <img
                src="assets/icons/header/Ellipse 251.svg"
                alt="User Avatar"
                className="w-8 h-8 rounded-full border-2 border-gray-200"
              />
              <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
          </div>
          <div className="md:hidden mx-4">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <img src="assets/icons/header/menu-icon.svg" alt="Menu" />
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden z-10 bg-white shadow-xl absolute right-0 mt-4">
            <div className="flex flex-col items-start justify-start p-5 space-y-4">
              {HeaderLinks.map((link) => (
                <a
                  key={link.label}
                  href="#"
                  className="text-gray-600 flex gap-2 items-center hover:text-purple-600"
                >
                  <img
                    src={`assets/icons/header/${link.link}`}
                    alt={link.label}
                  />
                  <div>{link.label}</div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
