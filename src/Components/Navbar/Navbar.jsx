import { faMoon, faSearch, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import Modal from "../Modal/Modal";

const Navbar = () => {
  const [theme, toggleTheme] = useTheme();
  const [showModal, setShowModal] = useState(false);

  return (
    <header>
      <nav
        className={`${
          theme === "dark"
            ? "flex justify-between items-center px-8 xsm:px-12 sm:px-20 py-5 text-lg bg-gray-900 text-white"
            : "flex justify-between items-center px-8 xsm:px-12 sm:px-20 py-5 text-lg bg-white text-black"
        }`}
      >
        {/* Left Panel */}
        <div>
          <Link to={"/"}>
            <img
              src="/blog.webp"
              alt="header logo"
              className="h-14 xsm:h-20 select-none"
            />
          </Link>
        </div>

        {/* Theme Switch */}
        <div onClick={toggleTheme} className="cursor-pointer">
          {theme === "dark" ? (
            <FontAwesomeIcon icon={faSun} className="text-yellow-400" />
          ) : (
            <FontAwesomeIcon icon={faMoon} className="text-gray-800" />
          )}
        </div>

        {/* Right Panel */}
        <div className="hidden xsm:flex items-center gap-4">
          <Link to={"/create-blog"}>
            <button className="px-6 py-2 bg-indigo-600 text-white text-sm rounded capitalize hidden md:block">
              Write
            </button>
          </Link>

          <div className="hidden xsm:flex  items-center gap-2">
            <FontAwesomeIcon
              icon={faSearch}
              className={`text-md -inset-3 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            />
            <span
              className={`capitalize ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              <input
                type="text"
                placeholder="Search your blog..."
                className={`px-2 py-1 rounded outline-none hidden lg:block ${
                  theme === "dark" ? "bg-slate-600" : "bg-slate-200"
                }`}
              />
            </span>
          </div>

          <Link
            to={"/login"}
            className={`capitalize hidden sm:block ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Login
          </Link>

          <span className="bg-gray-600 w-12 h-12 rounded-full hidden justify-center items-center text-white xsm:flex ">
            N
          </span>

          <Link
            to={"/profile"}
            className={`text-sm xsm:text-lg ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            <span>Nazim Uddin</span>
          </Link>
        </div>

        {/* Hamburger Menu (for smaller screens) */}
        <div
          onClick={() => setShowModal(true)}
          className="flex flex-col gap-1 xsm:hidden"
        >
          <div
            className={`h-[1px] w-5 ${
              theme === "dark" ? "bg-slate-50 " : "bg-black"
            }`}
          ></div>
          <div
            className={`h-[1px] w-5 ${
              theme === "dark" ? "bg-slate-50 " : "bg-black"
            }`}
          ></div>
          <div
            className={`h-[1px] w-5 ${
              theme === "dark" ? "bg-slate-50 " : "bg-black"
            }`}
          ></div>
        </div>

        {/* Rendering modal */}
        {showModal &&
          createPortal(
            <Modal onClose={() => setShowModal(false)} />,
            document.body
          )}
      </nav>

      {/* Horizontal Line */}
      <div className="bg-gray-300 h-[1px] w-full"></div>
    </header>
  );
};

export default Navbar;
