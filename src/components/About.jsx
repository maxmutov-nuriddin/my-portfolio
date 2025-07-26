import Aos from "aos";
import React from "react";

const About = () => {
  Aos.init();
  return (
    <section
      className=""
      id="about"
    >
      <h2 className="text-center font-black text-5xl text-[#504B38]">About</h2>

      <div className="mt-10 flex justify-between gap-10 items-center flex-col md:flex-row ">
        <div className="">
          <img
            className="w-70 h-80 sm:w-100 sm:h-110 md:w-300 md:h-100 lg:w-250 lg:h-110 xl:w-200 xl:h-110 border-transparent rounded-2xl border mx-auto transition duration-500 ease-in-out 
    hover:scale-105 hover:shadow-2xl hover:shadow-blue-800/50"
            src="./about-me.jpg"
            alt=""
          />
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="font-black text-3xl text-[#504B38]">I'am Nuriddin</h2>
          <p className=" text-[#504B38]">
            I'm Nuriddin Makhmudov — a frontend developer with 2+ years of
            experience in building responsive, user-friendly web interfaces. I'm
            also an Economics student at TMC University. I combine technical
            skills with analytical thinking and currently work as a coding
            instructor at CoddyCamp. Passionate about learning, teaching, and
            solving real-world challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
