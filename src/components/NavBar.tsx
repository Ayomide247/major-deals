import { useState } from "react";

import { HiMenuAlt3, HiX } from "react-icons/hi";
import Logo from "../assets/logo/majorDealsLogo.png";
import { LogInIcon, Phone, Search } from "lucide-react";

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
          className={`absolute top-16 left-0 w-full lg:static lg:flex lg:items-center lg:gap-10 lg:bg-transparent lg:shadow-none  ${
            isMenuOpen
              ? "block shadow-lg bg-pure text-[#ffffff]  py-12 mt-4 transition duration-700 ease-linear"
              : "hidden"
          }`}
        >
          <div className="flex flex-col gap-5 text-center lg:flex-row lg:items-center justify-center lg:ml-30 lg:gap-10 lg:text-left  font-semibold">
            <a
              href="/"
              className="transition-colors duration-700 ease-linear cursor-pointer  hover:underline hover:duration-500 hover:text-primary "
            >
              HOME
            </a>
            <a
              href="/"
              className="transition-colors duration-700 ease-linear cursor-pointer hover:underline hover:duration-500 hover:text-primary"
            >
              ABOUT
            </a>
            <a
              href="/"
              className="transition-colors duration-700 ease-linear cursor-pointer hover:underline hover:duration-500 hover:text-primary"
            >
              SERVICES
            </a>
            <a
              href="/"
              className="transition-colors duration-700 ease-linear cursor-pointer hover:underline hover:duration-500 hover:text-primary"
            >
              FAQ
            </a>
            <a
              href="/"
              className="transition-colors duration-700 ease-linear cursor-pointer hover:underline hover:duration-500 hover:text-primary"
            >
              CONTACTS
            </a>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-5 font-bold cursor-pointer w-1/2">
          <p className="border border-primary/30 py-5  "></p>
          <Search size={30} />
          <div className="flex items-center justify-center w-[200px] gap-3 bg-primary text-secondary p-5 hover:bg-pure transition duration-500 ease-linear  ">
            <Phone />
            <p>Talk To Us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
