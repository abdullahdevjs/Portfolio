import "./About.css";

function About() {
  return (
    <section
      className="about-section"
      id="about"
    >

      <div className="container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="about-header"
          data-reveal-item
        >

          <div className="about-heading">

            <span className="section-label">
              About Me
            </span>

            <h2>
              Learning.
              <br />

              <span className="gradient-text">
                Building.
              </span>

              <br />

              Growing.
            </h2>

          </div>


          <div className="about-intro">

            <span>
              02 / ABOUT
            </span>

            <p>
              I'm Mohammad Abdullah, a Computer Science
              Engineering student building a strong
              foundation in programming, data analytics
              and data science.
            </p>

          </div>

        </div>


        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <div className="about-layout">


          {/* =================================================
              LEFT — JOURNEY
          ================================================= */}

          <div
            className="about-journey"
            data-reveal-item
          >

            <div className="about-line">

              <span></span>

            </div>


            <div className="about-step">

              <span className="about-step-number">
                01
              </span>

              <div>

                <small>
                  FOUNDATION
                </small>

                <h3>
                  Computer Science
                </h3>

                <p>
                  Building strong fundamentals through
                  programming, problem solving, databases
                  and core computer science concepts.
                </p>

              </div>

            </div>


            <div className="about-step">

              <span className="about-step-number">
                02
              </span>

              <div>

                <small>
                  CURRENT FOCUS
                </small>

                <h3>
                  Data & Analytics
                </h3>

                <p>
                  Working with Python, SQL and analytical
                  thinking to understand data and turn it
                  into meaningful insights.
                </p>

              </div>

            </div>


            <div className="about-step">

              <span className="about-step-number">
                03
              </span>

              <div>

                <small>
                  NEXT DIRECTION
                </small>

                <h3>
                  Data Science
                </h3>

                <p>
                  Strengthening machine learning and
                  statistical foundations while building
                  practical, data-driven projects.
                </p>

              </div>

            </div>

          </div>


          {/* =================================================
              RIGHT — PROFILE
          ================================================= */}

          <div
            className="about-profile"
            data-reveal-item
          >

            <div className="about-profile-top">

              <span>
                PROFILE
              </span>

              <span>
                2026
              </span>

            </div>


            <div className="about-profile-content">

              <div className="about-profile-number">
                MA
              </div>

              <div>

                <h3>
                  Mohammad Abdullah
                </h3>

                <p>
                  B.Tech CSE Student
                  <br />
                  Aspiring Data Scientist
                </p>

              </div>

            </div>


            <div className="about-profile-grid">

              <div>

                <span>
                  EDUCATION
                </span>

                <strong>
                  B.Tech CSE
                </strong>

              </div>


              <div>

                <span>
                  FOCUS
                </span>

                <strong>
                  Data Science
                </strong>

              </div>


              <div>

                <span>
                  CURRENT
                </span>

                <strong>
                  Learning & Building
                </strong>

              </div>


              <div>

                <span>
                  APPROACH
                </span>

                <strong>
                  Practical
                </strong>

              </div>

            </div>


            <div className="about-profile-footer">

              <span>
                CURIOUS BY NATURE
              </span>

              <span className="about-pulse"></span>

              <span>
                BUILDING WITH PURPOSE
              </span>

            </div>

          </div>

        </div>


        {/* =================================================
            BOTTOM STATEMENT
        ================================================= */}

        <div
          className="about-statement"
          data-reveal-item
        >

          <span className="section-label">
            My Approach
          </span>

          <p>
            I believe the best way to learn technology
            is to build with it — starting with strong
            fundamentals, solving practical problems and
            continuously improving through every project.
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