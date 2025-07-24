import About from "../components/About";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Work from "../components/Work";

const Global = () => {
  return (
    <>
      <Hero />
      <div className="my-10">
        <About />
        <Skills />
        <Work />
      </div>
    </>
  );
};

export default Global;
