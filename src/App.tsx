import "./App.css";
import Navbar from "./navbar";
import Hero from "./HomePage/hero";
import SkillsWalkThrough from "./HomePage/skills";
import About from "./AboutPage/about";
import SkillsAndTools from "./ToolsPage/skillsAndTools";
import ProjectPage from "./ProjectPage/project";
import Experience from "./ExperiencePage/experience";
import Contact from "./ContactPage/contact";
import Footer from "./footer";

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
      <Contact />
      {/* Contact Me End */}

      <Footer />
    </>
  );
}

export default App;
