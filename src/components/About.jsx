import "./About.css";


function About() {

  return (
    <section
      className="about-section"
      id="about"
    >

      <div className="container">


        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div
          className="about-header"
          data-reveal-item
        >

          <div className="about-heading">

            <span className="section-label">
              ABOUT ME
            </span>

            <h2>

              Data.
              <br />

              <span className="gradient-text">
                Thinking.
              </span>

              <br />

              Building.

            </h2>

          </div>


          <div className="about-intro">

            <span>
              02 / ABOUT
            </span>

            <p>
              I'm Mohd Abdullah, a Computer Science &
              Engineering student aspiring to build a career
              in Data Science, with a strong interest in Data
              Analytics and practical software development.
            </p>

          </div>

        </div>



        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div className="about-layout">


          {/* ===================================================
              LEFT — PROFESSIONAL JOURNEY
          =================================================== */}

          <div
            className="about-journey"
            data-reveal-item
          >

            <div className="about-line">

              <span />

            </div>


            {/* =================================================
                01 — FOUNDATION
            ================================================= */}

            <div className="about-step">

              <span className="about-step-number">
                01
              </span>

              <div>

                <small>
                  FOUNDATION
                </small>

                <h3>
                  Computer Science & Engineering
                </h3>

                <p>
                  Building a strong technical foundation through
                  programming, problem solving, databases,
                  software development and core computer science
                  concepts.
                </p>

              </div>

            </div>


            {/* =================================================
                02 — DATA ANALYTICS
            ================================================= */}

            <div className="about-step">

              <span className="about-step-number">
                02
              </span>

              <div>

                <small>
                  STRONG AREA
                </small>

                <h3>
                  Data Analytics
                </h3>

                <p>
                  Working with Python, SQL and analytical
                  tools to explore data, identify patterns and
                  turn raw information into meaningful insights.
                </p>

              </div>

            </div>


            {/* =================================================
                03 — DATA SCIENCE
            ================================================= */}

            <div className="about-step">

              <span className="about-step-number">
                03
              </span>

              <div>

                <small>
                  CAREER DIRECTION
                </small>

                <h3>
                  Aspiring Data Scientist
                </h3>

                <p>
                  Developing deeper knowledge in statistics,
                  machine learning and data-driven problem
                  solving while building practical projects
                  that strengthen my understanding of the field.
                </p>

              </div>

            </div>


            {/* =================================================
                04 — WEB DEVELOPMENT
            ================================================= */}

            <div className="about-step">

              <span className="about-step-number">
                04
              </span>

              <div>

                <small>
                  ADDITIONAL STRENGTH
                </small>

                <h3>
                  Web Development
                </h3>

                <p>
                  Hands-on experience building web applications
                  has given me a practical understanding of
                  frontend, backend and software development
                  workflows.
                </p>

              </div>

            </div>

          </div>



          {/* ===================================================
              RIGHT — PROFILE CARD
          =================================================== */}

          <div
            className="about-profile"
            data-reveal-item
          >


            {/* =================================================
                PROFILE HEADER
            ================================================= */}

            <div className="about-profile-top">

              <span>
                PROFESSIONAL PROFILE
              </span>

              <span>
                2026
              </span>

            </div>



            {/* =================================================
                PROFILE IDENTITY
            ================================================= */}

            <div className="about-profile-content">

              <div className="about-profile-number">
                MA
              </div>

              <div>

                <h3>
                  Mohd Abdullah
                </h3>

                <p>
                  Computer Science & Engineering
                  <br />
                  Aspiring Data Scientist
                </p>

              </div>

            </div>



            {/* =================================================
                PROFILE DETAILS
            ================================================= */}

            <div className="about-profile-grid">


              <div>

                <span>
                  PRIMARY FIELD
                </span>

                <strong>
                  Data Science
                </strong>

              </div>


              <div>

                <span>
                  STRONG AREA
                </span>

                <strong>
                  Data Analytics
                </strong>

              </div>


              <div>

                <span>
                  ADDITIONAL
                </span>

                <strong>
                  Web Development
                </strong>

              </div>


              <div>

                <span>
                  FOUNDATION
                </span>

                <strong>
                  B.Tech CSE
                </strong>

              </div>


            </div>



            {/* =================================================
                PROFILE FOOTER
            ================================================= */}

            <div className="about-profile-footer">

              <span>
                DATA
              </span>

              <span className="about-pulse" />

              <span>
                ANALYTICS
              </span>

              <span className="about-pulse" />

              <span>
                SOFTWARE
              </span>

            </div>

          </div>

        </div>



        {/* =====================================================
            APPROACH
        ===================================================== */}

        <div
          className="about-statement"
          data-reveal-item
        >

          <span className="section-label">
            MY APPROACH
          </span>

          <p>
            I believe the strongest way to learn technology is
            to build with it. I focus on understanding the
            fundamentals, working on practical problems and
            continuously improving through real projects.
          </p>

          <span className="about-statement-arrow">
            ↓
          </span>

        </div>


      </div>

    </section>
  );
}


export default About;