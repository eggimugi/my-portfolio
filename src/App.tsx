import "./App.css";
import Navbar from "./navbar";
import Hero from "./HomePage/hero";
import SkillsWalkThrough from "./HomePage/skills";
import About from "./AboutPage/about";
import SkillsAndTools from "./ToolsPage/skillsAndTools";
import ProjectPage from "./ProjectPage/project";
import Experience from "./ExperiencePage/experience";

function App() {
  return (
    <>
      {/* Navbar Start */}
      <Navbar />
      {/* Navbar End */}

      {/* Home Start */}
      <Hero />
      <SkillsWalkThrough />
      {/* Home End */}

      {/* About Me Start */}
      <About />
      {/* About Me End */}

      {/* Skills & Tools Start */}
      <SkillsAndTools />
      {/* Skills & Tools End */}

      {/* Projects Start */}
      <ProjectPage />
      {/* Projects End */}

      {/* Experience Start */}
      <Experience />
      {/* Experience End */}

      {/* Contact Me Start */}
      {/* Add your Contact Me section here */}
      {/* Contact Me End */}
      {/* Home End */}
    </>
  );
}

export default App;
