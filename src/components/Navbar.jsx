import React, { useState } from "react";
import logo from "../assets/bgvss.jpg";
import { MdOutlineLanguage } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const togggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "Feature" },
    { link: "About", path: "About" },
    { link: "Pricing", path: "Pricing" },
  ];
  return (
    <>
      <nav className="bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className="flex space-x-14 items-center">
            <a
              href="/"
              className="text-2xl font-semibold flex item-center space-x-3 text-primary"
            >
              <img
                src={logo}
                alt=""
                className="w-10 inline-block items-center"
              />
              <span>TranThe</span>
            </a>

            {/* showing navitem using map */}
            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <Link
                  spy={true}
                  smooth={true}
                  offset={-100}
                  key={link}
                  to={path}
                  className="block hover:text-gray-300 cursor-pointer"
                >
                  {link}
                </Link>
              ))}
            </ul>
          </div>

          <div className="space-x-12 hidden md:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center hover:text-secondary"
            >
              <MdOutlineLanguage className="mr-2" />
              <span>Language</span>
            </a>
            <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">
              Sign up
            </button>
          </div>

          {/* menu */}
          <div className="md:hidden">
            <button
              onClick={togggleMenu}
              className="text-white focus:outline-none focus:text-gray-300 "
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary " />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* navItems for the mobile */}
      <div
        className={`space-y-4 px-4 pt-24 pb-5 bg-secondary text-xl ${
          isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <Link
            spy={true}
            smooth={true}
            offset={-80}
            key={link}
            to={path}
            className="block hover:text-gray-300 text-white"
            onClick={togggleMenu}
          >
            {link}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
