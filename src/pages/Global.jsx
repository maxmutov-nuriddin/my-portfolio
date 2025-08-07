import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Work from "../components/Work";

const Global = ({ darkMode }) => {
  return (
    <>
      <Hero darkMode={darkMode} />
      <div className="my-10 " >
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Work darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </div>
    </>
  );
};

export default Global;
