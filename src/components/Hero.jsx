import Aos from "aos";
import { Link } from "react-router-dom";

const Hero = () => {
  Aos.init();
  return (
    <section
      className="flex justify-between flex-col md:flex-row gap-5 mt-5"
      data-aos="fade-down-left"
      data-aos-duration="1000"
    >
      <div className="flex flex-col justify-center gap-8 mx-auto md:mx-0">
        <h1 className="text-[#504B38] font-black text-4xl sm:text-6xl md:text-4xl lg:text-6xl">
          Hi,
          <br />
          I'am <span className="text-blue-700 font-black ">Nuriddin</span>
          <br />
          Web Programmer
        </h1>

        <a
          href="#contact"
          className="text-xl border-[#504B38] rounded-lg bg-[#504B38] text-[#F8F3D9] w-30 px-3 py-2 text-center hover:bg-[#B9B28A] hover:text-[#504B38] transition duration-700 ease-in-out"
        >
          Contact
        </a>
      </div>

      <div>
        <img
          className="rounded-[50%] border mx-auto w-80 h-80 sm:w-100 sm:h-100 md:w-90 md:h-90 lg:w-100 lg:h-100 xl:w-120 xl:h-120 transition duration-500 ease-in-out 
    hover:scale-105 hover:shadow-2xl hover:shadow-blue-800/50"
          src="./assets/IMG.PNG"
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
