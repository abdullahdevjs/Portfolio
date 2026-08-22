import "./Hero.css";

import {
  FiArrowDown,
  FiArrowUpRight,
  FiDatabase,
  FiLayers,
  FiMail,
  FiTerminal,
  FiTrendingUp,
} from "react-icons/fi";

import { motion } from "framer-motion";

/* =========================================================
   HERO DATA
   ========================================================= */

const technicalSignals = [
  {
    label: "DATA",
    value: "01",
  },
  {
    label: "ANALYTICS",
    value: "02",
  },
  {
    label: "MACHINE LEARNING",
    value: "03",
  },
  {
    label: "AI",
    value: "04",
  },
];


const stack = [
  "Python",
  "SQL",
  "Pandas",
  "NumPy",
  "Excel",
  "Git",
];


const pipeline = [
  {
    number: "01",
    label: "DATA",
    detail: "COLLECT",
  },
  {
    number: "02",
    label: "CLEAN",
    detail: "PREPARE",
  },
  {
    number: "03",
    label: "ANALYSE",
    detail: "EXPLORE",
  },
  {
    number: "04",
    label: "MODEL",
    detail: "LEARN",
  },
  {
    number: "05",
    label: "INSIGHT",
    detail: "DECIDE",
  },
];


/* =========================================================
   HERO COMPONENT
   ========================================================= */

function Hero() {

  const scrollToSection = (sectionId) => {

    const target =
      document.getElementById(sectionId);

    if (!target) {
      return;
    }

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };


  return (

    <section
      className="hero"
      id="home"
    >

      {/* ===================================================
          TECHNICAL BACKGROUND
      =================================================== */}

      <div
        className="hero-background"
        aria-hidden="true"
      >

        <div className="hero-grid" />

        <div
          className="hero-vertical-line hero-line-left"
        />

        <div
          className="hero-vertical-line hero-line-center"
        />

        <div
          className="hero-vertical-line hero-line-right"
        />

        <div
          className="hero-horizontal-line hero-h-line-one"
        />

        <div
          className="hero-horizontal-line hero-h-line-two"
        />


        {/* =================================================
            DATA / AI NETWORK
        ================================================= */}

        <div className="hero-network">

          <span
            className="hero-network-node node-one"
          />

          <span
            className="hero-network-node node-two"
          />

          <span
            className="hero-network-node node-three"
          />

          <span
            className="hero-network-node node-four"
          />

          <span
            className="hero-network-node node-five"
          />


          <span
            className="hero-network-link link-one"
          />

          <span
            className="hero-network-link link-two"
          />

          <span
            className="hero-network-link link-three"
          />

          <span
            className="hero-network-link link-four"
          />

        </div>


        {/* =================================================
            AMBIENT GLOW
        ================================================= */}

        <div
          className="hero-glow hero-glow-one"
        />

        <div
          className="hero-glow hero-glow-two"
        />

      </div>


      {/* ===================================================
          MAIN CONTAINER
      =================================================== */}

      <div className="container hero-container">


        {/* =================================================
            TOP SYSTEM BAR
        ================================================= */}

        <motion.div
          className="hero-system-bar"

          initial={{
            opacity: 0,
            y: -10,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.65,
          }}
        >

          <div className="hero-system-left">

            <FiTerminal />

            <span>
              PERSONAL SYSTEM / 2026
            </span>

          </div>


          <div className="hero-system-center">

            <span />

            <span>
              DATA → INSIGHT → SYSTEM
            </span>

            <span />

          </div>


          <div className="hero-system-right">

            <span>
              STATUS
            </span>

            <b>
              ACTIVE
            </b>

          </div>

        </motion.div>


        {/* =================================================
            HERO CONTENT
        ================================================= */}

        <div className="hero-main">


          {/* ===============================================
              LEFT CONTENT
          =============================================== */}

          <motion.div
            className="hero-content"

            initial={{
              opacity: 0,
              y: 25,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.75,
              delay: 0.08,
            }}
          >


            {/* =================================================
                EYEBROW
            ================================================= */}

            <div className="hero-eyebrow">

              <span className="hero-eyebrow-line" />

              <span>
                COMPUTER SCIENCE & ENGINEERING / DATA SCIENCE
              </span>

            </div>


            {/* =================================================
                NAME
            ================================================= */}

            <h1 className="hero-title">

              <span className="hero-title-muted">
                Hi, I'm
              </span>

              <span className="hero-title-name">
                Mohammad Abdullah
                <i>.</i>
              </span>

            </h1>


            {/* =================================================
                PRIMARY ROLE
            ================================================= */}

            <div className="hero-role">

              <span className="hero-role-index">
                01
              </span>

              <div className="hero-role-line" />

              <span>
                ASPIRING DATA SCIENTIST
              </span>

              <span className="hero-role-divider">
                /
              </span>

              <span>
                DATA ANALYTICS
              </span>

            </div>


            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p className="hero-description">

              I'm a Computer Science & Engineering student
              aspiring to build a career in Data Science. I have
              a strong foundation in Data Analytics and hands-on
              experience in Web Development, with a focus on
              Python, SQL and building practical, data-driven
              solutions.

            </p>


            {/* =================================================
                SECONDARY CAPABILITY
            ================================================= */}

            <div className="hero-capability">

              <span className="hero-capability-label">
                ADDITIONAL STRENGTH
              </span>

              <span className="hero-capability-value">
                 WEB DEVELOPMENT
              </span>

            </div>


            {/* =================================================
                CTA
            ================================================= */}

            <div className="hero-actions">

              <button
                type="button"
                className="hero-primary-button"
                onClick={() =>
                  scrollToSection("projects")
                }
              >

                <span>
                  EXPLORE MY WORK
                </span>

                <FiArrowUpRight />

              </button>


              <button
                type="button"
                className="hero-secondary-button"
                onClick={() =>
                  scrollToSection("contact")
                }
              >

                <FiMail />

                <span>
                  GET IN TOUCH
                </span>

              </button>

            </div>


            {/* =================================================
                CURRENT TOOLKIT
            ================================================= */}

            <div className="hero-stack">

              <span className="hero-stack-label">
                CURRENT TOOLKIT
              </span>


              <div className="hero-stack-items">

                {stack.map(
                  (technology) => (

                    <span
                      key={technology}
                    >
                      {technology}
                    </span>

                  )
                )}

              </div>

            </div>


          </motion.div>


          {/* ===============================================
              RIGHT VISUAL
          =============================================== */}

          <motion.div
            className="hero-visual"

            initial={{
              opacity: 0,
              scale: 0.96,
            }}

            animate={{
              opacity: 1,
              scale: 1,
            }}

            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >


            {/* =================================================
                VISUAL HEADER
            ================================================= */}

            <div className="hero-visual-header">

              <div>

                <span>
                  SYSTEM PROFILE
                </span>

                <strong>
                  MOHD_ABDULLAH
                </strong>

              </div>


              <div className="hero-visual-live">

                <i />

                LIVE

              </div>

            </div>


            {/* =================================================
                PROFILE AREA
            ================================================= */}

            <div className="hero-profile-area">


              {/* ===============================================
                  PROFILE IMAGE
              =============================================== */}

              <div className="hero-profile-frame">

                <div
                  className="hero-profile-corner corner-tl"
                />

                <div
                  className="hero-profile-corner corner-tr"
                />

                <div
                  className="hero-profile-corner corner-bl"
                />

                <div
                  className="hero-profile-corner corner-br"
                />


                <div className="hero-profile-image-wrap">

                  <img
                    src="/profile.jpg"
                    alt="Mohd Abdullah"
                    className="hero-profile-image"
                  />

                </div>


                <div className="hero-profile-scan" />

              </div>


              {/* ===============================================
                  PROFILE META
              =============================================== */}

              <div className="hero-profile-meta">

                <div className="hero-meta-item">

                  <span>
                    PRIMARY FIELD
                  </span>

                  <strong>
                    DATA SCIENCE
                  </strong>

                </div>


                <div className="hero-meta-item">

                  <span>
                    FOCUS
                  </span>

                  <strong>
                    DATA ANALYTICS
                  </strong>

                </div>


                <div className="hero-meta-item">

                  <span>
                    FOUNDATION
                  </span>

                  <strong>
                    CSE
                  </strong>

                </div>

              </div>

            </div>


            {/* =================================================
                DATA PIPELINE
            ================================================= */}

            <div className="hero-pipeline">

              <div className="hero-pipeline-header">

                <span>
                  DATA SCIENCE WORKFLOW
                </span>

                <span>
                  FLOW_01
                </span>

              </div>


              <div className="hero-pipeline-track">

                {pipeline.map(
                  (
                    item,
                    index
                  ) => (

                    <div
                      className="hero-pipeline-item"
                      key={item.number}
                    >

                      <div className="hero-pipeline-node">

                        <span>
                          {item.number}
                        </span>

                      </div>


                      <div className="hero-pipeline-text">

                        <strong>
                          {item.label}
                        </strong>

                        <span>
                          {item.detail}
                        </span>

                      </div>


                      {index <
                        pipeline.length - 1 && (

                        <div
                          className="hero-pipeline-connector"
                        >

                          <span />

                        </div>

                      )}

                    </div>

                  )
                )}

              </div>

            </div>


            {/* =================================================
                VISUAL FOOTER
            ================================================= */}

            <div className="hero-visual-footer">

              <div>

                <FiDatabase />

                <span>
                  DATA LAYER
                </span>

              </div>


              <div>

                <FiLayers />

                <span>
                  ANALYTICS LAYER
                </span>

              </div>


              <div>

                <FiTrendingUp />

                <span>
                  INSIGHT LAYER
                </span>

              </div>

            </div>


          </motion.div>

        </div>


        {/* =================================================
            TECHNICAL SIGNALS
        ================================================= */}

        <motion.div
          className="hero-signals"

          initial={{
            opacity: 0,
            y: 15,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
            delay: 0.35,
          }}
        >

          {technicalSignals.map(
            (signal) => (

              <div
                className="hero-signal"
                key={signal.label}
              >

                <span>
                  {signal.value}
                </span>

                <div />

                <strong>
                  {signal.label}
                </strong>

              </div>

            )
          )}

        </motion.div>


        {/* =================================================
            SCROLL INDICATOR
        ================================================= */}

        <button
          type="button"
          className="hero-scroll"
          onClick={() =>
            scrollToSection("about")
          }
        >

          <span>
            SCROLL TO EXPLORE
          </span>

          <FiArrowDown />

        </button>


      </div>

    </section>

  );
}


export default Hero;