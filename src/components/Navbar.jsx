import { useState } from "react";
import logo from "../assets/logo.png";
//https://react-icons.github.io/react-icons/
//react icon
import { GrLanguage } from "react-icons/gr";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function toggleMenu() {
    setIsOpenMenu(!isOpenMenu);
  }

  const navItem = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "feature" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
  ];

  return (
    <>
      <nav className="bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0">
        <div className="text-lg container mx-auto flex justify-between items-center">
          <div className="flex space-x-14 items-center">
            <a
              className="text-2xl font-semibold flex items-center space-x-3 text-primary"
              href="/"
            >
              <img
                className="w-10 inline-block item-center"
                src={logo}
                alt=""
              />{" "}
              <span>XYZ</span>
            </a>

            {/* showing navbar using map */}
            <ul className="md:flex space-x-12 hidden">
              {navItem.map(({ link, path }) => (
                <a key={link} href={path} className="block hover:text-gray-300">
                  {link}
                </a>
              ))}
            </ul>
          </div>

          {/* language and signup */}
          <div className="space-x-12 hidden md:flex items-center">
            <a
              className="hidden lg:flex items-center hover:text-secondary"
              href="/"
            >
              <GrLanguage className="mr-2" /> <span>Language</span>
            </a>
            <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">
              Sign up
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              {isOpenMenu ? (
                <FaXmark className="w6 h6 text-primary" />
              ) : (
                <FaBars className="w6 h6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* navigation for mobile device */}
      <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary ${isOpenMenu ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
        {navItem.map(({ link, path }) => (
          <a key={link} href={path} className="block hover:text-gray-300">
            {link}
          </a>
        ))}
      </div>
    </>

    
  );
};
