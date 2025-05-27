import { useState } from "react";

import { HiMenuAlt3, HiX } from "react-icons/hi";
import Logo from "../assets/logo/majorDealsLogo.png";
import { Phone } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-30 transition duration-300 text-primary text-pure bg-white  ">
      <div className="flex items-center justify-between px-5 py-5 lg:px-20 font-rubik lg:gap-20 w-full ">
        <div className="flex items-center">
          <a href="/">
            <img src={Logo} alt="Logo" className="w-[200px] lg:w-[450px]" />
          </a>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <HiX className="text-[30px]" />
            ) : (
              <HiMenuAlt3 className="text-[30px]" />
            )}
          </button>
        </div>

        <div
          className={`absolute top-16 left-0 w-full lg:static lg:flex lg:items-center lg:gap-10 lg:bg-transparent lg:shadow-none transition duration-700 ease-linear ${
            isMenuOpen
              ? "block shadow-lg bg-pure text-[#ffffff]  py-12 mt-2 "
              : "hidden"
          }`}
        >
          <div className="flex flex-col gap-5 text-center lg:flex-row lg:items-center justify-center lg:ml-30 lg:gap-10 lg:text-left  font-semibold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-colors duration-700 ease-linear cursor-pointer hover:underline hover:text-primary ${
                  isActive ? "text-primary font-bold underline" : ""
                }`
              }
            >
              HOME
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition-colors duration-700 ease-linear cursor-pointer hover:underline hover:text-primary ${
                  isActive ? "text-primary font-bold underline" : ""
                }`
              }
            >
              ABOUT
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                `transition-colors duration-700 ease-linear cursor-pointer hover:underline hover:text-primary ${
                  isActive ? "text-primary font-bold underline" : ""
                }`
              }
            >
              SERVICES
            </NavLink>

            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                `transition-colors duration-700 ease-linear cursor-pointer hover:underline hover:text-primary ${
                  isActive ? "text-primary font-bold underline" : ""
                }`
              }
            >
              CONTACTS
            </NavLink>
          </div>
        </div>

        <Link
          to="/contacts"
          className="hidden lg:flex items-center gap-5 font-bold justify-between cursor-pointer w-1/2"
        >
          <p className="border border-primary/30 py-5  "></p>
          <div className="flex items-center justify-center w-[200px] gap-3 bg-primary text-secondary p-5 hover:bg-pure transition duration-500 ease-linear  ">
            <Phone />
            <p>Talk To Us</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
