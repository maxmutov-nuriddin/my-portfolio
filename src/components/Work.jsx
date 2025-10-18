import React from "react";
import CardProject from "../cards/Card";
import { useLanguage } from "../hooks/useLanguage";

const Work = ({ darkMode }) => {
  const { t } = useLanguage();

  return (
    <section className="mt-10" id="work">
      <h2
        className={`text-center font-black text-5xl ${darkMode ? " text-[#fff]" : "text-[#504B38]"
          }`}
      >
        {t.work}
      </h2>

      <div className="my-10">
        <CardProject darkMode={darkMode} />
      </div>
    </section>
  );
};

export default Work;
