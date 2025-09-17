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

      <main>
        {/* Home Start */}
          <Hero />
          <SkillsWalkThrough />
        {/* Home End */}

        {/* About Me Start */}
        <section id="about">
          <About />
        </section>
        {/* About Me End */}

        {/* Skills & Tools Start */}
        <section id="skillsTools">
          <SkillsAndTools />
        </section>
        {/* Skills & Tools End */}

        {/* Projects Start */}
        <section id="projects">
          <ProjectPage />
        </section>
        {/* Projects End */}

        {/* Experience Start */}
        <section id="experience">
          <Experience />
        </section>
        {/* Experience End */}

        {/* Contact Me Start */}
        <section id="contactMe">
          <Contact />
        </section>
        {/* Contact Me End */}
      </main>

      <Footer />
    </>
  );
}

export default App;
