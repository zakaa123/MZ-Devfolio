import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Styles/main.css";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Stats from "./Components/Stats";
import CodeComparison from "./Components/CodeComparison";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import ContactModal from "./Pages/Contact";

function App() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="portfolio-container light">
      <Navbar onContactClick={() => setShowContactModal(true)} />

      <section id="home">
        <Hero
          onContactClick={() => setShowContactModal(true)}
          onViewWorkClick={() => {
            console.log("View Work clicked ✅");
            setShowProjects(true);
          }}
        />
      </section>

      <Stats />
      <CodeComparison />

      <section id="skills">
        <Skills />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>


      {showContactModal && (
        <ContactModal onClose={() => setShowContactModal(false)} />
      )}

      <Footer />
    </div>
  );
}

export default App;
