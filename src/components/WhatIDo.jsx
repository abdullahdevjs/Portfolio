import "./WhatIDo.css";

import { motion } from "framer-motion";

import {
  FiBarChart2,
  FiDatabase,
  FiSearch,
  FiCode,
  FiTrendingUp,
  FiArrowUpRight,
  FiCpu,
  FiActivity,
} from "react-icons/fi";


/* =========================================================
   CAPABILITIES
   ========================================================= */

const capabilities = [

  {
    number: "01",
    icon: <FiDatabase />,
    category: "DATA FOUNDATION",
    title: "Data Preparation",
    shortTitle: "PREPARE",

    description:
      "Working with structured datasets, understanding their shape, cleaning inconsistencies and preparing reliable data for further analysis.",

    tools: [
      "Python",
      "Pandas",
      "SQL",
      "Excel",
    ],
  },


  {
    number: "02",
    icon: <FiSearch />,
    category: "EXPLORATION",
    title: "Exploratory Analysis",
    shortTitle: "EXPLORE",

    description:
      "Exploring datasets to understand distributions, relationships, trends and patterns before moving toward conclusions or modelling.",

    tools: [
      "Python",
      "Pandas",
      "NumPy",
    ],
  },


  {
    number: "03",
    icon: <FiBarChart2 />,
    category: "ANALYTICS",
    title: "Data Analytics",
    shortTitle: "ANALYZE",

    description:
      "Using queries, calculations and structured analytical thinking to transform raw information into understandable and useful insights.",

    tools: [
      "SQL",
      "Excel",
      "Python",
    ],
  },


  {
    number: "04",
    icon: <FiCode />,
    category: "PROGRAMMING",
    title: "Python Data Work",
    shortTitle: "BUILD",

    description:
      "Using Python as my primary programming foundation for data manipulation, numerical operations and reusable analytical workflows.",

    tools: [
      "Python",
      "Pandas",
      "NumPy",
    ],
  },

];


/* =========================================================
   DATA WORKFLOW
   ========================================================= */

const process = [

  {
    number: "01",
    label: "Problem",
    detail: "Understand",
  },

  {
    number: "02",
    label: "Data",
    detail: "Prepare",
  },

  {
    number: "03",
    label: "Analysis",
    detail: "Explore",
  },

  {
    number: "04",
    label: "Insight",
    detail: "Communicate",
  },

];


/* =========================================================
   WHAT I DO COMPONENT
   ========================================================= */

function WhatIDo() {

  return (

    <section
      className="whatido-section"
      id="what-i-do"
    >


      {/* ===================================================
          AI / DATA BACKGROUND
      =================================================== */}

      <div
        className="whatido-background"
        aria-hidden="true"
      >

        <span className="whatido-grid-glow" />

        <span className="whatido-orbit whatido-orbit-one" />

        <span className="whatido-orbit whatido-orbit-two" />

        <span className="whatido-data-node node-one" />

        <span className="whatido-data-node node-two" />

        <span className="whatido-data-node node-three" />

      </div>



      <div className="container whatido-container">


        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <motion.div
          className="whatido-heading"

          initial={{
            opacity: 0,
            y: 25,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
            amount: 0.2,
          }}

          transition={{
            duration: 0.65,
          }}
        >


          <div className="whatido-heading-main">

            <div className="section-eyebrow">

              <span />

              04 / CAPABILITIES

            </div>


            <h2>

              Turning data into

              <span>
                meaningful understanding.
              </span>

            </h2>

          </div>



          <div className="whatido-heading-copy">

            <span className="whatido-heading-index">
              WHAT I DO
            </span>


            <p>

              I work through data problems by understanding
              the question first, preparing the information
              carefully and using analytical methods to find
              patterns that can be communicated clearly.

            </p>

          </div>

        </motion.div>



        {/* =================================================
            CAPABILITY SYSTEM
        ================================================= */}

        <div className="capability-matrix">


          {/* =================================================
              WORKFLOW SIDEBAR
          ================================================= */}

          <motion.aside
            className="capability-sidebar"

            initial={{
              opacity: 0,
              x: -20,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            viewport={{
              once: true,
              amount: 0.15,
            }}

            transition={{
              duration: 0.6,
            }}
          >


            <div className="sidebar-header">

              <div className="sidebar-label">

                <span className="sidebar-dot" />

                DATA WORKFLOW

              </div>


              <FiActivity />

            </div>



            <div className="sidebar-process">


              {process.map(
                (item, index) => (

                  <div
                    className="process-step"
                    key={item.number}
                  >


                    <div className="process-step-index">

                      <span>
                        {item.number}
                      </span>

                    </div>


                    <div className="process-step-content">

                      <strong>
                        {item.label}
                      </strong>

                      <small>
                        {item.detail}
                      </small>

                    </div>


                    <div className="process-step-signal">

                      <span />

                    </div>


                    {index <
                      process.length - 1 && (

                      <div className="process-connector" />

                    )}

                  </div>

                )
              )}


            </div>



            <div className="sidebar-note">

              <span>
                PRINCIPLE
              </span>

              <p>

                Good analysis starts with
                understanding the problem —
                not choosing the tool.

              </p>

            </div>


          </motion.aside>



          {/* =================================================
              CAPABILITY CARDS
          ================================================= */}

          <div className="capability-grid">


            {capabilities.map(
              (item, index) => (

                <motion.article
                  className="capability-card"

                  key={item.number}

                  initial={{
                    opacity: 0,
                    y: 22,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}

                  transition={{
                    duration: 0.5,
                    delay:
                      index * 0.08,
                  }}
                >


                  {/* =========================================
                      CARD TOP
                  ========================================= */}

                  <div className="capability-top">


                    <div>

                      <span className="capability-number">
                        {item.number}
                      </span>

                      <span className="capability-category">
                        {item.category}
                      </span>

                    </div>


                    <div className="capability-icon">

                      {item.icon}

                    </div>


                  </div>



                  {/* =========================================
                      CARD TITLE
                  ========================================= */}

                  <div className="capability-title-row">


                    <h3>
                      {item.title}
                    </h3>


                    <span>
                      {item.shortTitle}
                    </span>


                  </div>



                  {/* =========================================
                      DESCRIPTION
                  ========================================= */}

                  <p className="capability-description">

                    {item.description}

                  </p>



                  {/* =========================================
                      TOOLS
                  ========================================= */}

                  <div className="capability-tools">


                    {item.tools.map(
                      (tool) => (

                        <span key={tool}>

                          <i />

                          {tool}

                        </span>

                      )
                    )}


                  </div>



                  {/* =========================================
                      CARD FOOTER
                  ========================================= */}

                  <div className="capability-card-footer">


                    <div className="capability-signal">

                      <span />

                    </div>


                    <div className="capability-arrow">

                      <FiArrowUpRight />

                    </div>


                  </div>


                </motion.article>

              )
            )}


          </div>


        </div>



        {/* =================================================
            ANALYTICAL THINKING
        ================================================= */}

        <motion.div
          className="analytical-statement"

          initial={{
            opacity: 0,
            y: 22,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
            amount: 0.15,
          }}

          transition={{
            duration: 0.65,
          }}
        >


          <div className="statement-line">

            <span />

          </div>



          <div className="statement-content">


            <span>
              HOW I THINK ABOUT DATA
            </span>


            <h3>

              Find the signal.

              <span>
                Remove the noise.
              </span>

            </h3>


            <p>

              The goal is not to make analysis look
              complicated. The useful part is identifying
              what matters, understanding why it matters
              and communicating the result without
              unnecessary complexity.

            </p>


          </div>



          <div
            className="statement-visual"
            aria-hidden="true"
          >


            <div className="signal-chart">


              <div className="signal-axis-y" />

              <div className="signal-axis-x" />


              <div className="signal-bars">

                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />

              </div>


              <div className="signal-point point-one" />

              <div className="signal-point point-two" />


            </div>


            <div className="signal-label">

              SIGNAL / NOISE

            </div>


          </div>


        </motion.div>



        {/* =================================================
            DEVELOPMENT DIRECTION
        ================================================= */}

        <motion.div
          className="development-direction"

          initial={{
            opacity: 0,
            y: 20,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
            amount: 0.15,
          }}

          transition={{
            duration: 0.65,
          }}
        >


          <div className="direction-icon">

            <FiCpu />

          </div>



          <div className="direction-content">


            <span>
              DATA SCIENCE DIRECTION
            </span>


            <h3>

              Statistics

              <i> / </i>

              Machine Learning

              <i> / </i>

              Applied Data Science

            </h3>


            <p>

              I am building these areas progressively
              on top of my current Python, analytics
              and data-handling foundation.

            </p>


          </div>



          <a
            href="#projects"
            className="direction-link"
          >

            <span>
              Explore my work
            </span>

            <FiArrowUpRight />

          </a>


        </motion.div>



        {/* =================================================
            BOTTOM DATA PIPELINE
        ================================================= */}

        <div className="whatido-pipeline">


          <span>
            RAW DATA
          </span>

          <div>
            <i />
          </div>


          <span>
            CLEAN
          </span>

          <div>
            <i />
          </div>


          <span>
            EXPLORE
          </span>

          <div>
            <i />
          </div>


          <span>
            ANALYZE
          </span>

          <div>
            <i />
          </div>


          <span>
            INSIGHT
          </span>


        </div>


      </div>

    </section>

  );

}


export default WhatIDo;