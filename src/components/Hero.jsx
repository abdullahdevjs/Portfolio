import "./Hero.css";

function Hero() {
  return (
    <section
      className="hero"
      id="home"
    >

      {/* =================================================
          BACKGROUND SYSTEM
      ================================================= */}

      <div className="hero-grid"></div>

      <div className="hero-glow hero-glow-one"></div>

      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-noise"></div>


      {/* =================================================
          HERO CONTAINER
      ================================================= */}

      <div className="container hero-container">


        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div
          className="hero-content"
          data-reveal-item
        >

          {/* STATUS */}

          <div className="hero-status">

            <span className="status-dot"></span>

            <span>
              Available for opportunities
            </span>

          </div>


          {/* EYEBROW */}

          <p className="hero-eyebrow">
            4TH YEAR B.TECH CSE
            <span>·</span>
            ASPIRING DATA SCIENTIST
          </p>


          {/* NAME */}

          <div className="hero-name">

            <span className="hero-name-label">
              I'M
            </span>

            <h1>
              Mohammad
              <br />
              <span>
                Abdullah.
              </span>
            </h1>

          </div>


          {/* MAIN HEADLINE */}

          <h2 className="hero-title">

            Turning data into
            <br />

            <span className="gradient-text">
              meaningful insights.
            </span>

          </h2>


          {/* DESCRIPTION */}

          <p className="hero-description">

            I’m a Computer Science Engineering student
            building my path toward Data Science. I work
            with Python, SQL and C, with a focus on
            transforming raw data into useful insights
            and intelligent solutions.

          </p>


          {/* ACTIONS */}

          <div className="hero-actions">

            <a
              href="#projects"
              className="btn btn-primary"
            >

              <span>
                Explore My Work
              </span>

              <b>
                ↗
              </b>

            </a>


            <a
              href="#contact"
              className="btn btn-secondary"
            >

              <span>
                Let's Connect
              </span>

            </a>

          </div>


          {/* STACK */}

          <div className="hero-stack">

            <span>
              Python
            </span>

            <span>
              SQL
            </span>

            <span>
              C
            </span>

            <span>
              Data Analytics
            </span>

            <span>
              Data Science
            </span>

          </div>

        </div>


        {/* =================================================
            RIGHT VISUAL
        ================================================= */}

        <div
          className="hero-visual"
          data-reveal-item
        >


          {/* ORBITS */}

          <div className="visual-orbit orbit-one"></div>

          <div className="visual-orbit orbit-two"></div>


          {/* DATA CARDS */}

          <div className="data-card card-python">

            <span className="mini-icon python-icon">
              Py
            </span>

            <div>

              <strong>
                Python
              </strong>

              <small>
                Data & Logic
              </small>

            </div>

          </div>


          <div className="data-card card-sql">

            <span className="mini-icon sql-icon">
              SQL
            </span>

            <div>

              <strong>
                SQL
              </strong>

              <small>
                Data Queries
              </small>

            </div>

          </div>


          <div className="data-card card-analytics">

            <span className="analytics-bars">

              <i></i>
              <i></i>
              <i></i>
              <i></i>

            </span>

            <div>

              <strong>
                Analytics
              </strong>

              <small>
                Insights from Data
              </small>

            </div>

          </div>


          {/* PROFILE */}

          <div className="hero-profile">

            <div className="profile-ring"></div>

            <div className="profile-ring profile-ring-two"></div>


            <div className="profile-image-wrap">

              <img
                src="/profile.jpg"
                alt="Mohammad Abdullah"
              />

            </div>


            <div className="profile-overlay">

              <span>
                ASPIRING
              </span>

              <strong>
                DATA SCIENTIST
              </strong>

            </div>

          </div>


          {/* DATA NODES */}

          <div className="data-node node-one"></div>

          <div className="data-node node-two"></div>

          <div className="data-node node-three"></div>


          {/* CODE WINDOW */}

          <div className="code-window">

            <div className="code-header">

              <div className="code-dots">

                <span></span>
                <span></span>
                <span></span>

              </div>

              <small>
                analysis.py
              </small>

            </div>


            <div className="code-body">

              <p>

                <span className="code-purple">
                  import
                </span>{" "}

                pandas

                <span className="code-purple">
                  {" "}as
                </span>{" "}

                pd

              </p>


              <p>

                <span className="code-purple">
                  import
                </span>{" "}

                numpy

                <span className="code-purple">
                  {" "}as
                </span>{" "}

                np

              </p>


              <p className="code-space"></p>


              <p>

                data = pd.

                <span className="code-green">
                  read_csv
                </span>

                (

                <span className="code-yellow">
                  "dataset.csv"
                </span>

                )

              </p>


              <p>

                insights = data.

                <span className="code-green">
                  describe
                </span>

                ()

              </p>


              <p className="code-space"></p>


              <p>

                <span className="code-blue">
                  print
                </span>

                (

                <span className="code-yellow">
                  "Finding insights..."
                </span>

                )

              </p>

            </div>

          </div>


        </div>

      </div>


      {/* =================================================
          SCROLL INDICATOR
      ================================================= */}

      <a
        href="#about"
        className="hero-scroll"
      >

        <span>
          SCROLL TO EXPLORE
        </span>

        <div className="scroll-line">

          <span></span>

        </div>

      </a>


      {/* =================================================
          HERO FOOTER META
      ================================================= */}

      <div className="hero-meta">

        <span>
          01 / 05
        </span>

        <span>
          DATA · CODE · INSIGHT
        </span>

      </div>

    </section>
  );
}

export default Hero;