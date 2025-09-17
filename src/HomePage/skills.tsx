import nodeicons from "../assets/SkillsLogo/nodejs-logo.svg";
import cssicons from "../assets/SkillsLogo/css-logo.svg";
import expressicons from "../assets/SkillsLogo/expressjs-light-logo.svg";
import figmaicons from "../assets/SkillsLogo/figma-logo.svg";
import htmlicons from "../assets/SkillsLogo/html-logo.svg";
import javascripticons from "../assets/SkillsLogo/javascript-logo.svg";
import labviewicons from "../assets/SkillsLogo/labview-logo.svg";
import mysqlicons from "../assets/SkillsLogo/mysql-logo.svg";
import nexticons from "../assets/SkillsLogo/nextjs-logo.svg";
import prismaicons from "../assets/SkillsLogo/prisma-logo.svg";
import reacticons from "../assets/SkillsLogo/react-logo.svg";
import tailwindicons from "../assets/SkillsLogo/tailwindcss.svg";
import typescripticons from "../assets/SkillsLogo/typescript-logo.svg";

const skills = [
  { name: "Next.js", icon: nexticons, color: "#000000" },
  { name: "MySQL", icon: mysqlicons, color: "#00758F" },
  { name: "Node.js", icon: nodeicons, color: "#339933" },
  { name: "TypeScript", icon: typescripticons, color: "#3178C6" },
  { name: "React", icon: reacticons, color: "#61DAFB" },
  { name: "TailwindCSS", icon: tailwindicons, color: "#38BDF8" },
  { name: "Figma", icon: figmaicons, color: "#F24E1E" },
  { name: "Express.js", icon: expressicons, color: "#000000" },
  { name: "Prisma", icon: prismaicons, color: "#0C344B" },
  { name: "JavaScript", icon: javascripticons, color: "#F7DF1E" },
  { name: "HTML", icon: htmlicons, color: "#E34F26" },
  { name: "CSS", icon: cssicons, color: "#1572B6" },
  { name: "LabVIEW", icon: labviewicons, color: "#FFC20E" },
];

export default function SkillsWalkThrough() {
  return (
    <>
      <div className="w-full bottom-0 bg-white py-6 px-2 flex justify-center items-center shadow-inner overflow-hidden relative z-20">
        <div
          className="flex flex-nowrap items-center animate-marquee xs:gap-24 gap-14"
          style={{
            animation: "marquee 60s linear infinite",
            minWidth: "max-content",
          }}
        >
          {[...skills, ...skills, ...skills].map((skill, i) => (
            <div
              key={`${skill.name}-${i}`}
              className="flex items-center justify-center gap-2 sm:min-w-[150px] min-w-[100px]"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="sm:h-10 sm:w-10 xs:h-8 xs:w-8 h-6 w-6"
              />
              <span
                className="sm:text-2xl xs:text-xl text-base font-bold"
                style={{ color: skill.color }}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute top-0 left-0 w-full h-full flex justify-between">
          {/* Fade kiri */}
          <div className="w-7xl bg-gradient-to-r from-white to-transparent"></div>
          {/* Fade kanan */}
          <div className="w-7xl bg-gradient-to-l from-white to-transparent"></div>
        </div>

        <style>
          {`
        @keyframes marquee {
          0% { transform: translateX(0); }  
          100% { transform: translateX(-33.3333%); }
        }
          `}
        </style>
      </div>
      <div className="absolute  left-0 w-full h-[5vw] bg-gradient-to-b from-white to-transparent shadow-inner z-20" />
    </>
  );
}
