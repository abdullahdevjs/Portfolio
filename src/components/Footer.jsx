import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="container">

        {/* =================================================
            TOP
        ================================================= */}

        <div
          className="footer-top"
          data-reveal-item
        >

          <div className="footer-brand">

            <span className="footer-mark">
              MA
            </span>

            <div className="footer-brand-text">

              <strong>
                Mohammad Abdullah
              </strong>

              <span>
                ASPIRING DATA SCIENTIST
              </span>

            </div>

          </div>


          <p className="footer-message">
            Building with curiosity.
            <br />
            Learning with purpose.
          </p>


          <a
            href="#home"
            className="footer-back-top"
          >

            <span>
              BACK TO TOP
            </span>

            <b>
              ↑
            </b>

          </a>

        </div>


        {/* =================================================
            DIVIDER
        ================================================= */}

        <div className="footer-divider"></div>


        {/* =================================================
            MAIN FOOTER
        ================================================= */}

        <div
          className="footer-main"
          data-reveal-item
        >

          <div className="footer-copy">

            <span>
              © {currentYear}
            </span>

            <p>
              Mohammad Abdullah.
              All rights reserved.
            </p>

          </div>


          <div className="footer-links">

            <a
              href="https://github.com/abdullahdevjs"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <span>↗</span>
            </a>


            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <span>↗</span>
            </a>


            <a
              href="mailto:mohdabdullahsheikh36@gmail.com"
            >
              Email
              <span>↗</span>
            </a>

          </div>


          <div className="footer-status">

            <span className="footer-status-dot"></span>

            <span>
              AVAILABLE FOR OPPORTUNITIES
            </span>

          </div>

        </div>


        {/* =================================================
            BOTTOM
        ================================================= */}

        <div
          className="footer-bottom"
          data-reveal-item
        >

          <span>
            B.TECH CSE
          </span>

          <span className="footer-bottom-line"></span>

          <span>
            DATA · CODE · INSIGHT
          </span>

          <span className="footer-bottom-line"></span>

          <span>
            2026
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;