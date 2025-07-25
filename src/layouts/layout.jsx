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

      <footer className="w-[100%]">
        <div className="bg-[#EBE5C2] text-[#504B38] pt-10 pb-20 text-center flex flex-col gap-2">
          <h2 className="font-black text-3xl">Nuriddin</h2>
          <a target="_blank"
            href="tel:+998943322218"
            className="flex justify-center gap-2 items-center hover:underline"
          >
            <img src="/src/assets/phone.png" alt="Phone" className="w-5 h-5" />
            +998 94 332 22 18
          </a>

          <p className="my-4">Sizni ijtimoiy tarmoqlarda kutamiz:</p>

          <div className="flex justify-center gap-6 mt-4">
            <a target="_blank" href="https://github.com/maxmutov-nuriddin?tab=repositories">
              <img src="/src/assets/git.png" alt="git" className="w-8 h-8" />
            </a>
            <a target="_blank" href="https://instagram.com/mv_nuriddin">
              <img
                src="/src/assets/instagram.png"
                alt="instagram"
                className="w-8 h-8"
              />
            </a>
            <a target="_blank" href="https://t.me/mv_nuriddin">
              <img
                src="/src/assets/telegram.png"
                alt="telegram"
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>

        <div className="bg-[#EBE5C2] text-[#504B38] py-4 px-6 fixed bottom-0 w-full z-40 text-center border-t border-[#504B38]/30">
          <span className="layout-span__text">CV base</span> ©2025 Created by{" "}
          <span className="layout-span__text">
            <u>FWB</u>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default LayoutPage;
