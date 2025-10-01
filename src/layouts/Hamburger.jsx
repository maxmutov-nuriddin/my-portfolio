import { useEffect, useState } from "react";

const Hamburger = ({ toggleMenu, modal, darkMode }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(modal);
  }, [modal]);

  return (
    <div
      onClick={() => {
        setOpen(!open);
        toggleMenu();
      }}
      className="absolute right-0 cursor-pointer w-6 h-5 scale-150 z-50 sm:hidden"
    >
      <div
        className={`absolute w-full h-1 transition-transform duration-200 ${open ? "translate-y-[8px] rotate-45" : "",
          darkMode ? "bg-[#fff]" : "bg-[#504B38]"
          }`}
      />
      <div
        className={`absolute w-full h-1 transition-opacity duration-200 top-1/2 -translate-y-1/2 ${open ? "opacity-0" : "", darkMode ? "bg-[#fff]" : "bg-[#504B38]"
          }`}
      />
      <div
        className={`absolute w-full h-1 transition-transform duration-200 bottom-0 ${open ? "-translate-y-[8px] -rotate-45" : "", darkMode ? "bg-[#fff]" : "bg-[#504B38]"
          }`}
      />
    </div>
  );
};

export default Hamburger;
