import "./App.css";

import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";

import Hero from "./components/Hero";
import About from "./components/About";
import WhatIDo from "./components/WhatIDo";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="app">

      {/* =================================================
          GLOBAL NAVIGATION
      ================================================= */}

      <Navbar />

      <ScrollProgress />


      {/* =================================================
          MAIN PORTFOLIO
      ================================================= */}

      <main>

        {/* 01 — INTRO */}
        <Hero />


        {/* 02 — ABOUT */}
        <About />


        {/* 03 — CAPABILITIES */}
        <WhatIDo />


        {/* 04 — EXPERIENCE */}
        <Experience />


        {/* 05 — SKILLS */}
        <Skills />


        {/* 06 — PROJECTS */}
        <Projects />


        {/* 07 — CONTACT */}
        <Contact />

      </main>


      {/* =================================================
          FOOTER
      ================================================= */}

      <Footer />

    </div>
  );
}


export default App;