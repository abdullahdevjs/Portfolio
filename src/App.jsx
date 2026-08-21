import "./App.css";

import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import useScrollReveal from "./hooks/useScrollReveal";


function App() {

  /* =====================================================
     SCROLL REVEAL
  ====================================================== */

  useScrollReveal();


  return (

    <div className="app">

      {/* =================================================
          SCROLL PROGRESS
      ================================================= */}

      <ScrollProgress />


      {/* =================================================
          NAVBAR
      ================================================= */}

      <Navbar />


      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <main>

        {/* ===============================================
            HERO
        =============================================== */}

        <Hero />


        {/* ===============================================
            ABOUT
        =============================================== */}

        <About />


        {/* ===============================================
            SKILLS
        =============================================== */}

        <Skills />


        {/* ===============================================
            PROJECTS
        =============================================== */}

        <Projects />


        {/* ===============================================
            CONTACT
        =============================================== */}

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