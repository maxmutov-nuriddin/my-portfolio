import { Progress } from "@heroui/react";
import Aos from "aos";

const Skills = ({ darkMode }) => {
  Aos.init();
  return (
    <section className="my-10" id="skills">
      <h2
        className={`text-center font-black text-5xl ${
          darkMode ? " text-[#fff]" : "text-[#504B38]"
        }`}
      >
        Skills
      </h2>

      <div className="mt-5 flex justify-between gap-10 items-center flex-col md:flex-row">
        <div className="">
          <h2
            className={`text-start font-black text-3xl ${
              darkMode ? " text-[#fff]" : "text-[#504B38]"
            } `}
          >
            Profesional Skills
          </h2>
          <p className={`${darkMode ? " text-[#fff]" : "text-[#504B38]"}`}>
            Creative and detail-oriented Frontend Developer skilled in modern
            web technologies like HTML, CSS, JavaScript, and React, with
            hands-on experience in Git and UI/UX design tools.
          </p>
          <Progress
            classNames={{
              base: "max-w-2xl",
              track: "drop-shadow-md border rounded-xl border-[#504B38]",
              indicator: "bg-gradient-to-r from-[#F8F3D9] to-[#504B38] ",
              label: "tracking-wider font-medium text-default-600",
              value: "text-foreground/60",
            }}
            label="HTML"
            radius="sm"
            showValueLabel={true}
            size="sm"
            value={98}
          />
          <Progress
            classNames={{
              base: "max-w-2xl",
              track: "drop-shadow-md border rounded-xl border-[#504B38]",
              indicator: "bg-linear-to-r from-[#F8F3D9] to-[#504B38]",
              label: "tracking-wider font-medium text-default-600",
              value: "text-foreground/60",
            }}
            label="СSS"
            radius="sm"
            showValueLabel={true}
            size="sm"
            value={95}
          />
          <Progress
            classNames={{
              base: "max-w-2xl",
              track: "drop-shadow-md border rounded-xl border-[#504B38]",
              indicator: "bg-linear-to-r from-[#F8F3D9] to-[#504B38]",
              label: "tracking-wider font-medium text-default-600",
              value: "text-foreground/60",
            }}
            label="JavaScript"
            radius="sm"
            showValueLabel={true}
            size="sm"
            value={90}
          />
          <Progress
            classNames={{
              base: "max-w-2xl",
              track: "drop-shadow-md border rounded-xl border-[#504B38]",
              indicator: "bg-linear-to-r from-[#F8F3D9] to-[#504B38]",
              label: "tracking-wider font-medium text-default-600",
              value: "text-foreground/60",
            }}
            label="Tailwindcss"
            radius="sm"
            showValueLabel={true}
            size="sm"
            value={97}
          />
          <Progress
            classNames={{
              base: "max-w-2xl",
              track: "drop-shadow-md border rounded-xl border-[#504B38]",
              indicator: "bg-linear-to-r from-[#F8F3D9] to-[#504B38]",
              label: "tracking-wider font-medium text-default-600",
              value: "text-foreground/60",
            }}
            label="Bootstrap"
            radius="sm"
            showValueLabel={true}
            size="sm"
            value={90}
          />
          <Progress
            classNames={{
              base: "max-w-2xl",
              track: "drop-shadow-md border rounded-xl border-[#504B38]",
              indicator: "bg-linear-to-r from-[#F8F3D9] to-[#504B38]",
              label: "tracking-wider font-medium text-default-600",
              value: "text-foreground/60",
            }}
            label="Antd design"
            radius="sm"
            showValueLabel={true}
            size="sm"
            value={79}
          />
          <Progress
            classNames={{
              base: "max-w-2xl",
              track: "drop-shadow-md border rounded-xl border-[#504B38]",
              indicator: "bg-linear-to-r from-[#F8F3D9] to-[#504B38]",
              label: "tracking-wider font-medium text-default-600",
              value: "text-foreground/60",
            }}
            label="React JS"
            radius="sm"
            showValueLabel={true}
            size="sm"
            value={90}
          />
          <Progress
            classNames={{
              base: "max-w-2xl",
              track: "drop-shadow-md border rounded-xl border-[#504B38]",
              indicator: "bg-linear-to-r from-[#F8F3D9] to-[#504B38]",
              label: "tracking-wider font-medium text-default-600",
              value: "text-foreground/60",
            }}
            label="Git"
            radius="sm"
            showValueLabel={true}
            size="sm"
            value={80}
          />
        </div>

        <div>
          <img
            src="./IMG000.jpg"
            alt=""
            className="w-70 h-80 sm:w-100 sm:h-110 md:w-300 md:h-100 lg:w-250 lg:h-110 xl:w-300 xl:h-100  border-transparent rounded-2xl border mx-auto transition duration-500 ease-in-out 
    hover:scale-105 hover:shadow-2xl hover:shadow-blue-800/50"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
