import { Link, NavLink, Outlet } from "react-router-dom";
import Hamburger from "./Hamburger";
import { useState } from "react";

const LayoutPage = () => {
  const [modal, setModal] = useState(false);

  const toggleMenu = () => {
    setModal((prev) => !prev);
  };

  console.log(modal);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-[#EBE5C2] text-[#504B38] py-4 px-6 fixed top-0 w-full z-40 shadow">
        <div className="flex justify-between items-center max-w-6xl mx-auto relative">
          <a href="#" className="hover:underline font-black text-4xl">
            MN
          </a>

          <nav
            className={`${
              modal == true ? "block" : "none"
            } hidden sm:flex gap-6 py-5`}
          >
            <a href="#" className="layout-Navlink">
              Home
            </a>
            <a href="#about" className="layout-Navlink">
              About
            </a>
            <a href="#skills" className="layout-Navlink">
              Skills
            </a>
            <a href="#work" className="layout-Navlink">
              Work
            </a>
            <a href="#contact" className="layout-Navlink">
              Contact
            </a>
            <a
              href="/src/assets/Resume.docx"
              download
              className="layout-Navlink"
            >
              Resume
            </a>
          </nav>

          <Hamburger toggleMenu={toggleMenu} />
        </div>
      </header>

      <main className="max-w-6xl mx-auto flex-grow pt-24 pb-16 px-3 sm:px-6">
        <Outlet />
      </main>

      <footer className="bg-[#EBE5C2] text-[#504B38] py-4 px-6 fixed bottom-0 w-full z-40 text-center">
        <span className="layout-span__text">CV base</span> ©2025 Created by{" "}
        <span className="layout-span__text">
          <u>FWB</u>
        </span>
      </footer>
    </div>
  );
};

export default LayoutPage;
