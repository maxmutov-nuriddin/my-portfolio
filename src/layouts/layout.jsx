import { Link, NavLink, Outlet } from "react-router-dom";
import { Moon, Sun, Phone } from 'lucide-react';
import Hamburger from "./Hamburger";
import { useState } from "react";

const LayoutPage = ({ toggleTheme, bodyStyle, darkMode }) => {
  const [modal, setModal] = useState(false);

  const toggleMenu = () => {
    setModal((prev) => !prev);
  };
  function togBtn() {
    setModal(false);
  }

  return (
    <div className="flex flex-col min-h-screen " style={bodyStyle}>
      <header
        className={`bg-[#EBE5C2] text-[#504B38] py-3 px-6 fixed top-0 w-full z-40 shadow rounded-b-3xl ${darkMode ? "border border-white" : "border border-transparent shadow-2xl"}`}
        style={bodyStyle}
      >
        <div className="flex justify-between items-center max-w-6xl mx-auto relative ">
          <a href="#" className="hover:underline font-black text-4xl">
            MN
          </a>

          <nav
            style={bodyStyle}
            className={`${modal ? "block flex flex-col items-center gap-6 py-5 mt-[11px]" : "hidden sm:flex gap-6 py-5"}`}


          >
            <a onClick={togBtn} href="#" className="layout-Navlink">
              Home
            </a>
            <a onClick={togBtn} href="#about" className="layout-Navlink">
              About
            </a>
            <a onClick={togBtn} href="#skills" className="layout-Navlink">
              Skills
            </a>
            <a onClick={togBtn} href="#work" className="layout-Navlink">
              Work
            </a>
            <a onClick={togBtn} href="#contact" className="layout-Navlink">
              Contact
            </a>
            <a
              onClick={togBtn}
              href="./Resume.docx"
              download
              className="layout-Navlink"
            >
              Resume
            </a>
            <select
              id="language-select"
              className="appearance-none bg-transparent border-none outline-none cursor-pointer relative z-50"
              style={{
                backgroundColor: 'transparent',
                WebkitAppearance: 'none',
                MozAppearance: 'none',
              }}
            >
              <option onClick={togBtn} className={`${darkMode ? "bg-black" : "bg-[#EBE5C2]" } `} value="en">En</option>
              <option onClick={togBtn} className={`${darkMode ? "bg-black" : "bg-[#EBE5C2]" } `} value="ru">Ru</option>
              <option onClick={togBtn} className={`${darkMode ? "bg-black" : "bg-[#EBE5C2]" } `} value="uz">Uz</option>
            </select>

            <button
              onClick={() => {
                toggleTheme(), togBtn();
              }}
              className="mx-auto transition duration-500 ease-in-out 
    hover:scale-120 hover:shadow-2xl hover:shadow-blue-800/50"
            >
              {
                !darkMode ? (<Moon />) : (<Sun />)
              }
            </button>
          </nav>

          <Hamburger toggleMenu={toggleMenu} darkMode={darkMode} modal={modal} />
        </div>
      </header>

      <main
        className="max-w-6xl mx-auto flex-grow pt-24 pb-16 px-3 sm:px-6"
        style={bodyStyle}
      >
        <Outlet />
      </main>

      <footer className="w-[100%]">
        <div
          className="bg-[#EBE5C2] text-[#504B38] pt-10 pb-20 text-center flex flex-col gap-2"
          style={bodyStyle}
        >
          <h2 className="font-black text-3xl">Nuriddin</h2>
          <a
            target="_blank"
            href="tel:+998943322218"
            className="flex justify-center gap-2 items-center hover:text-[#B9B28A] transition duration-500 ease-in-out"
          >
            <Phone className="w-5 h-5" />+998 94 332 22 18
          </a>

          <p className="my-4">Let’s stay connected on social media:</p>

          <div className="flex justify-center gap-6 mt-4">
            <a
              target="_blank"
              href="https://github.com/maxmutov-nuriddin?tab=repositories"
            >
              <img
                src="./git.png"
                alt="git"
                className={`w-8 h-8 transition duration-500 ease-in-out 
    hover:scale-120 ${darkMode ? "bg-white rounded-[50%] border" : ""
                  }`}
              />
            </a>
            <a target="_blank" href="https://instagram.com/mv_nuriddin">
              <img
                src="./instagram.png"
                alt="instagram"
                className={`w-8 h-8 transition duration-500 ease-in-out 
    hover:scale-120 ${darkMode ? "bg-white rounded-[50%] border !important" : ""
                  }`}
              />
            </a>
            <a target="_blank" href="https://t.me/mv_nuriddin">
              <img
                src="./telegram.png"
                alt="telegram"
                className={`w-8 h-8 transition duration-500 ease-in-out 
    hover:scale-120 ${darkMode ? "bg-white rounded-[50%] border" : ""
                  }`}
              />
            </a>
          </div>
        </div>

        <div
          className={`bg-[#EBE5C2] text-[#504B38] py-4 px-6 fixed bottom-0 w-full z-40 text-center border-t border-[#504B38]/30 rounded-t-3xl ${darkMode ? "border border-white" : "border border-transparent shadow-2xl"}`}
          style={bodyStyle}
        >
          <span className="layout-span__text">CV base</span> ©2025 Created by{" "}
          <span className="layout-span__text">
            <a className="hover:text-[#B9B28A] transition duration-500 ease-in-out" href="https://t.me/fortis_web" target="blank"><u>FWB</u></a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default LayoutPage;
