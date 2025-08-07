import React from "react";
import CardProject from "../cards/Card";

const Work = ({darkMode}) => {
  return (
    <section className="mt-10" id="work">
      <h2
        className={`text-center font-black text-5xl ${
          darkMode ? " text-[#fff]" : "text-[#504B38]"
        }`}
      >
        Work
      </h2>

      <div className="my-10">
        <CardProject />
      </div>
    </section>
  );
};

export default Work;
