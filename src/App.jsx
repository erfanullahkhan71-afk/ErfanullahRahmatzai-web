import React from "react";
import Nav from "./Component/NaveBar/Nav";
import Hero from "./Component/Herosection/Hero";
import About from "./Component/about/About";
import Skills from "./Component/skill/Skills";
import Project from "./Component/projects/Project";
import Footer from "./Component/footer/Footer";


function App() {
  return (
    <div className="scroll-smooth bg-black dark:bg-gray-900">
      <Nav />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
       <Project/>
      </section >
      <section id="footer">

      <Footer />
      </section>
    
    </div>
    
  );
}

export default App;
