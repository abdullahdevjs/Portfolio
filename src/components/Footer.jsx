import "./Footer.css";

import {
  FiArrowUp,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUpRight,
  FiDatabase,
  FiCpu,
  FiBarChart2,
} from "react-icons/fi";


/* =========================================================
   FOOTER
   ========================================================= */

function Footer() {

  const currentYear = new Date().getFullYear();

  return (

    <footer
      className="footer-section"
      id="footer"
    >

      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div
        className="footer-background"
        aria-hidden="true"
      >

        <div className="footer-grid" />

        <div className="footer-glow" />

      </div>


      <div className="container footer-container">


        {/* =================================================
            FOOTER TOP
        ================================================= */}

        <div className="footer-top">


          {/* =================================================
              BRAND
          ================================================= */}

          <div className="footer-brand">


            <a
              href="#home"
              className="footer-logo"
              aria-label="Mohd Abdullah Home"
            >

              <span className="footer-logo-mark">
                M
              </span>

              <span className="footer-logo-name">
                Mohd Abdullah
              </span>

              <span className="footer-logo-dot">
                .
              </span>

            </a>


            <div className="footer-brand-label">

              DATA SCIENCE
              <span>/</span>
              AI ENGINEERING

            </div>


            <p>

              Aspiring Data Scientist with a foundation in
              data analytics, Python and software development,
              building practical projects around data,
              machine learning and intelligent systems.

            </p>


            {/* FOCUS */}

            <div className="footer-focus">


              <span>

                <FiDatabase />

                DATA

              </span>


              <span>

                <FiBarChart2 />

                ANALYTICS

              </span>


              <span>

                <FiCpu />

                AI / ML

              </span>


            </div>


          </div>



          {/* =================================================
              NAVIGATION
          ================================================= */}

          <div className="footer-navigation">


            <span className="footer-column-label">
              NAVIGATION
            </span>


            <a href="#home">
              Home
            </a>


            <a href="#about">
              About
            </a>


            <a href="#skills">
              Skills
            </a>


            <a href="#what-i-do">
              What I Do
            </a>


            <a href="#projects">
              Projects
            </a>


            <a href="#experience">
              Experience
            </a>


            <a href="#contact">
              Contact
            </a>


          </div>



          {/* =================================================
              CONNECT
          ================================================= */}

          <div className="footer-connect">


            <span className="footer-column-label">
              CONNECT
            </span>


            <a
              href="mailto:mohdabdullahsheikh36@gmail.com"
            >

              <FiMail />

              <span>
                Email
              </span>

              <FiArrowUpRight />

            </a>


            <a
              href="https://github.com/abdullahdevjs"
              target="_blank"
              rel="noopener noreferrer"
            >

              <FiGithub />

              <span>
                GitHub
              </span>

              <FiArrowUpRight />

            </a>


            <a
              href="https://www.linkedin.com/in/mohammad-abdullah-9266623ab/"
              target="_blank"
              rel="noopener noreferrer"
            >

              <FiLinkedin />

              <span>
                LinkedIn
              </span>

              <FiArrowUpRight />

            </a>


          </div>


        </div>



        {/* =================================================
            AVAILABILITY BAR
        ================================================= */}

        <div className="footer-availability">


          <div className="footer-availability-left">


            <span className="footer-live-dot" />


            <div>

              <span>
                CURRENT STATUS
              </span>

              <strong>
                Open to opportunities & collaborations
              </strong>

            </div>


          </div>


          <div className="footer-availability-right">


            <span>
              DATA · AI · SOFTWARE
            </span>


            <span>
              AVAILABLE
            </span>


          </div>


        </div>



        {/* =================================================
            DIVIDER
        ================================================= */}

        <div className="footer-divider" />



        {/* =================================================
            BOTTOM
        ================================================= */}

        <div className="footer-bottom">


          <div className="footer-copyright">


            <span>
              © {currentYear} Mohd Abdullah
            </span>


            <i />


            <span>
              Built with React
            </span>


          </div>



          <div className="footer-system-status">


            <span>
              SYSTEM
            </span>


            <i />


            <strong>
              ONLINE
            </strong>


          </div>



          <a
            href="#home"
            className="footer-back-top"
            aria-label="Back to top"
          >

            <span>
              BACK TO TOP
            </span>


            <FiArrowUp />

          </a>


        </div>


      </div>


    </footer>

  );
}


export default Footer;