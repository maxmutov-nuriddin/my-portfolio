import { Progress } from "@heroui/react";
import Aos from "aos";
import { useLanguage } from "../hooks/useLanguage";

const Skills = ({ darkMode }) => {
  const { t } = useLanguage();

  Aos.init();
  return (
    <section className="my-10" id="skills">
      <h2
        className={`text-center font-black text-5xl ${darkMode ? " text-[#fff]" : "text-[#504B38]"
          }`}
      >
        {t.skills}
      </h2>

      <div className="mt-5 flex justify-between gap-10 items-center flex-col md:flex-row">
        <div className="">
          <h2
            className={`text-start font-black text-3xl ${darkMode ? " text-[#fff]" : "text-[#504B38]"
              } `}
          >
            {t.professionalSkillsTitle}
          </h2>
          <p className={`${darkMode ? " text-[#fff]" : "text-[#504B38]"}`}>
            {t.professionalSkillsText}
          </p>
          <div className="flex flex-col md:flex-row justify-between gap-3 ">
            <div className="w-[100%]">
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
                value={100}
              />
              <Progress
                classNames={{
                  base: "max-w-2xl",
                  track: "drop-shadow-md border rounded-xl border-[#504B38]",
                  indicator: "bg-linear-to-r from-[#F8F3D9] to-[#504B38]",
                  label: "tracking-wider font-medium text-default-600",
                  value: "text-foreground/60",
                }}
                label="СSS / SASS"
                radius="sm"
                showValueLabel={true}
                size="sm"
                value={100}
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
                label="TypeScript"
                radius="sm"
                showValueLabel={true}
                size="sm"
                value={65}
              />
              <Progress
                classNames={{
                  base: "max-w-2xl",
                  track: "drop-shadow-md border rounded-xl border-[#504B38]",
                  indicator: "bg-linear-to-r from-[#F8F3D9] to-[#504B38]",
                  label: "tracking-wider font-medium text-default-600",
                  value: "text-foreground/60",
                }}
                label="React Js"
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
                label="Node Js"
                radius="sm"
                showValueLabel={true}
                size="sm"
                value={70}
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
                value={90}
              />
            </div>
            <div className="w-[100%]">
              <Progress
                classNames={{
                  base: "max-w-2xl",
                  track: "drop-shadow-md border rounded-xl border-[#504B38]",
                  indicator: "bg-linear-to-r from-[#F8F3D9] to-[#504B38]",
                  label: "tracking-wider font-medium text-default-600",
                  value: "text-foreground/60",
                }}
                label="Figma"
                radius="sm"
                showValueLabel={true}
                size="sm"
                value={100}
              />
              <Progress
                classNames={{
                  base: "max-w-2xl",
                  track: "drop-shadow-md border rounded-xl border-[#504B38]",
                  indicator: "bg-linear-to-r from-[#F8F3D9] to-[#504B38]",
                  label: "tracking-wider font-medium text-default-600",
                  value: "text-foreground/60",
                }}
                label="Zustand"
                radius="sm"
                showValueLabel={true}
                size="sm"
                value={80}
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
                label="JQuery"
                radius="sm"
                showValueLabel={true}
                size="sm"
                value={60}
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
                label="Material UI"
                radius="sm"
                showValueLabel={true}
                size="sm"
                value={70}
              />
              <Progress
                classNames={{
                  base: "max-w-2xl",
                  track: "drop-shadow-md border rounded-xl border-[#504B38]",
                  indicator: "bg-linear-to-r from-[#F8F3D9] to-[#504B38]",
                  label: "tracking-wider font-medium text-default-600",
                  value: "text-foreground/60",
                }}
                label="Mongo DB"
                radius="sm"
                showValueLabel={true}
                size="sm"
                value={60}
              />
            </div>
          </div>
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
