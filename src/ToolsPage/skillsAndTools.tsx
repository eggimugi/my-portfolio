import nodeicons from "../assets/SkillsLogo/nodejs-logo.svg";
import cssicons from "../assets/SkillsLogo/css-logo.svg";
import expressicons from "../assets/SkillsLogo/expressjs-light-logo.svg";
import figmaicons from "../assets/SkillsLogo/figma-logo.svg";
import htmlicons from "../assets/SkillsLogo/html-logo.svg";
import javascripticons from "../assets/SkillsLogo/javascript-logo.svg";
import labviewicons from "../assets/SkillsLogo/labview-logo.svg";
import mysqlicons from "../assets/SkillsLogo/mysql-logo.svg";
import nexticons from "../assets/SkillsLogo/nextjs-logo.svg";
import photoshopicons from "../assets/SkillsLogo/photoshop-logo.svg";
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
  { name: "Photoshop", icon: photoshopicons, color: "#31A8FF" },
  { name: "LabVIEW", icon: labviewicons, color: "#FFC20E" },
];

export default function SkillsAndTools() {
  return (
    <section className="bg-black min-h-[35vw] flex items-center justify-center md:px-24 sm:px-10 px-8 py-16 relative overflow-hidden">
      <div className="max-w-8xl w-full flex flex-col md:flex-row justify-between items-center gap-12 z-10">
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <div className="relative mb-8">
            <div className="flex items-center">
              <div className="border border-white/60 rounded-md px-6 py-2 text-white text-center text-2xl font-light relative min-w-[250px]">
                Tech Stack
                <span className="absolute -top-2 -left-1.5 w-3 h-3 rounded-full bg-white"></span>
                <span className="absolute -top-2 -right-1.5 w-3 h-3 rounded-full bg-white"></span>
                <span className="absolute -bottom-2 -left-1.5 w-3 h-3 rounded-full bg-white"></span>
                <span className="absolute -bottom-2 -right-1.5 w-3 h-3 rounded-full bg-white"></span>
              </div>
            </div>
          </div>
          <h1 className="text-white md:text-left text-center text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Tools and technologies
            <br className="hidden md:block" />
            I work with to build
            <br className="hidden md:block" />
            meaningful digital
            <br className="hidden md:block" />
            experiences
          </h1>
        </div>
        {/* Right Side */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-4 items-center">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex justify-center items-center gap-2 bg-white rounded-md shadow px-5 py-2 font-semibold text-gray-800 text-base whitespace-nowrap"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className={`w-6 h-6 object-contain`}
                />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Big "Skil" background text */}
      <span className="pointer-events-none select-none fixed right-0 top-0 text-[18vw] font-extrabold text-white/5 z-0 hidden md:block">
        Skil
      </span>
    </section>
  );
}
