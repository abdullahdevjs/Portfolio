import "./Skills.css";

import {
  FiBarChart2,
  FiCode,
  FiDatabase,
  FiLayers,
  FiTerminal,
  FiTrendingUp,
} from "react-icons/fi";

import { motion } from "framer-motion";


/* =========================================================
   PRIMARY DATA SCIENCE SKILLS
   ========================================================= */

const dataSkills = [
  {
    name: "Python",
    level: "Strong foundation",
    detail:
      "Programming, data handling, problem solving and analytical workflows",
    tag: "PRIMARY",
  },

  {
    name: "SQL",
    level: "Working knowledge",
    detail:
      "Queries, filtering, joins, aggregation and relational data",
    tag: "CORE",
  },

  {
    name: "Pandas",
    level: "Working knowledge",
    detail:
      "Data cleaning, transformation, exploration and analysis",
    tag: "DATA",
  },

  {
    name: "NumPy",
    level: "Developing",
    detail:
      "Numerical operations, arrays and data preparation",
    tag: "PYTHON",
  },

  {
    name: "Excel",
    level: "Working knowledge",
    detail:
      "Data cleaning, analysis, formulas and structured reporting",
    tag: "ANALYTICS",
  },
];


/* =========================================================
   ANALYTICS & DATA THINKING
   ========================================================= */

const analyticsSkills = [
  {
    name: "Data Analysis",
    level: "Core focus",
    detail:
      "Exploring datasets, identifying patterns and extracting insights",
    tag: "FOCUS",
  },

  {
    name: "Data Cleaning",
    level: "Working knowledge",
    detail:
      "Preparing structured datasets for reliable analysis",
    tag: "PROCESS",
  },

  {
    name: "Data Visualization",
    level: "Developing",
    detail:
      "Communicating trends and findings through clear visual analysis",
    tag: "INSIGHT",
  },

  {
    name: "Statistics",
    level: "Building",
    detail:
      "Strengthening statistical thinking for analytical and modelling work",
    tag: "FOUNDATION",
  },
];


/* =========================================================
   PROGRAMMING
   ========================================================= */

const programmingSkills = [
  {
    name: "Python",
    level: "Strong foundation",
    detail:
      "Core programming, functions, collections and problem solving",
    tag: "CORE",
  },

  {
    name: "C",
    level: "Working knowledge",
    detail:
      "Programming fundamentals and computational problem solving",
    tag: "FUNDAMENTALS",
  },

  {
    name: "JavaScript",
    level: "Working knowledge",
    detail:
      "Frontend logic and interactive application development",
    tag: "WEB",
  },

  {
    name: "Git / GitHub",
    level: "Working knowledge",
    detail:
      "Version control, repositories and project workflow",
    tag: "TOOLS",
  },
];


/* =========================================================
   WEB DEVELOPMENT
   ========================================================= */

const webSkills = [
  {
    name: "React",
    level: "Working knowledge",
    detail:
      "Component-based frontend development and application UI",
    tag: "FRONTEND",
  },

  {
    name: "HTML",
    level: "Working knowledge",
    detail:
      "Semantic structure and accessible web interfaces",
    tag: "WEB",
  },

  {
    name: "CSS",
    level: "Working knowledge",
    detail:
      "Responsive layouts, UI systems, animation and interactions",
    tag: "UI",
  },

  {
    name: "Node.js",
    level: "Working knowledge",
    detail:
      "Backend fundamentals and JavaScript server-side development",
    tag: "BACKEND",
  },
];


/* =========================================================
   SKILL GROUPS
   ========================================================= */

const skillGroups = [
  {
    id: "01",
    category: "DATA SCIENCE",
    title: "Working with data",
    description:
      "The core technologies I use to work with datasets and build a foundation for data science.",
    icon: FiBarChart2,
    skills: dataSkills,
  },

  {
    id: "02",
    category: "DATA ANALYTICS",
    title: "Finding meaningful patterns",
    description:
      "The analytical skills I am developing to turn raw data into useful information and insights.",
    icon: FiTrendingUp,
    skills: analyticsSkills,
  },

  {
    id: "03",
    category: "PROGRAMMING",
    title: "Building with code",
    description:
      "Programming fundamentals that support my data work as well as broader software development.",
    icon: FiCode,
    skills: programmingSkills,
  },

  {
    id: "04",
    category: "WEB DEVELOPMENT",
    title: "Building applications",
    description:
      "Hands-on web development knowledge that helps me understand and build complete software products.",
    icon: FiLayers,
    skills: webSkills,
  },
];


/* =========================================================
   DATA SCIENCE ROADMAP
   ========================================================= */

const roadmap = [
  {
    step: "01",
    title: "Data handling",
    status: "CURRENT",
    description:
      "Strengthening data cleaning, exploration and structured data workflows.",
  },

  {
    step: "02",
    title: "Statistics",
    status: "BUILDING",
    description:
      "Developing stronger statistical thinking for analysis and modelling.",
  },

  {
    step: "03",
    title: "Machine learning",
    status: "NEXT",
    description:
      "Building practical understanding of models, training and evaluation.",
  },

  {
    step: "04",
    title: "Applied data science",
    status: "DIRECTION",
    description:
      "Connecting data preparation, analysis and modelling through real projects.",
  },
];


/* =========================================================
   CORE TOOLKIT
   ========================================================= */

const coreTools = [
  "PYTHON",
  "SQL",
  "PANDAS",
  "NUMPY",
  "EXCEL",
  "STATISTICS",
  "C",
  "JAVASCRIPT",
  "REACT",
  "GIT",
  "GITHUB",
];


/* =========================================================
   SKILLS COMPONENT
   ========================================================= */

function Skills() {

  return (

    <section
      className="skills-section"
      id="skills"
    >


      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div
        className="skills-background"
        aria-hidden="true"
      >

        <span className="skills-bg-line skills-bg-line-one" />

        <span className="skills-bg-line skills-bg-line-two" />

        <span className="skills-bg-line skills-bg-line-three" />

        <span className="skills-bg-node skills-bg-node-one" />

        <span className="skills-bg-node skills-bg-node-two" />

        <span className="skills-bg-node skills-bg-node-three" />

      </div>


      {/* ===================================================
          CONTAINER
      =================================================== */}

      <div className="container skills-container">


        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          className="skills-header"

          initial={{
            opacity: 0,
            y: 24,
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

          <div className="skills-header-top">


            <div className="section-eyebrow">

              <span />

              SKILLS / DATA SCIENCE TOOLKIT

            </div>


            <div className="skills-header-status">

              <FiTrendingUp />

              <span>
                CONTINUOUSLY DEVELOPING
              </span>

            </div>

          </div>


          <div className="skills-heading-row">

            <h2 className="skills-title">

              Skills I use to
              <span>
                work with data and build.
              </span>

            </h2>


            <p className="skills-intro">

              My primary focus is Data Science and Data
              Analytics, supported by Python, SQL and a
              broader software development foundation.

            </p>

          </div>

        </motion.div>


        {/* =================================================
            CORE TOOL STRIP
        ================================================= */}

        <motion.div
          className="skills-tool-strip"

          initial={{
            opacity: 0,
            y: 15,
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
            duration: 0.55,
          }}
        >

          <div className="skills-tool-strip-label">

            <FiTerminal />

            <span>
              CORE TOOLKIT
            </span>

          </div>


          <div className="skills-tool-list">

            {coreTools.map(
              (tool) => (

                <span
                  key={tool}
                  className="skills-tool"
                >

                  {tool}

                </span>

              )
            )}

          </div>

        </motion.div>


        {/* =================================================
            SKILL GROUPS
        ================================================= */}

        <div className="skills-groups">

          {skillGroups.map(
            (group, groupIndex) => {

              const GroupIcon =
                group.icon;


              return (

                <motion.article
                  className="skills-group"
                  key={group.id}

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
                    amount: 0.12,
                  }}

                  transition={{
                    duration: 0.6,
                    delay:
                      groupIndex * 0.08,
                  }}
                >


                  {/* =======================================
                      GROUP HEADER
                  ======================================= */}

                  <div className="skills-group-header">

                    <div className="skills-group-number">
                      {group.id}
                    </div>


                    <div className="skills-group-icon">

                      <GroupIcon />

                    </div>


                    <div className="skills-group-heading">

                      <span>
                        {group.category}
                      </span>

                      <h3>
                        {group.title}
                      </h3>

                    </div>

                  </div>


                  <p className="skills-group-description">

                    {group.description}

                  </p>


                  {/* =======================================
                      SKILL ROWS
                  ======================================= */}

                  <div className="skills-list">

                    {group.skills.map(
                      (skill, skillIndex) => (

                        <motion.div
                          className="skill-row"
                          key={skill.name}

                          initial={{
                            opacity: 0,
                            x: -10,
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
                            duration: 0.4,
                            delay:
                              skillIndex * 0.05,
                          }}

                          data-data-card
                        >

                          <div className="skill-row-main">

                            <div className="skill-row-name">

                              <strong>
                                {skill.name}
                              </strong>

                              <span>
                                {skill.tag}
                              </span>

                            </div>


                            <span className="skill-row-level">

                              {skill.level}

                            </span>

                          </div>


                          <div className="skill-row-detail">

                            <span>
                              {skill.detail}
                            </span>


                            <div className="skill-row-signal">

                              <span />

                            </div>

                          </div>

                        </motion.div>

                      )
                    )}

                  </div>

                </motion.article>

              );

            }
          )}

        </div>


        {/* =================================================
            DATA SCIENCE DIRECTION
        ================================================= */}

        <motion.div
          className="skills-roadmap"

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
            amount: 0.15,
          }}

          transition={{
            duration: 0.65,
          }}
        >

          <div className="skills-roadmap-header">

            <div>

              <div className="section-eyebrow">

                <FiDatabase />

                DATA SCIENCE DIRECTION

              </div>

              <h3>
                Building depth step by step.
              </h3>

            </div>


            <p>

              My goal is to develop strong fundamentals first,
              then progress into machine learning and applied
              data science through practical projects.

            </p>

          </div>


          <div className="skills-roadmap-track">

            {roadmap.map(
              (item, index) => (

                <div
                  className={`roadmap-item ${
                    item.status === "CURRENT"
                      ? "roadmap-item-current"
                      : ""
                  }`}

                  key={item.step}
                >

                  <div className="roadmap-node">

                    <span>
                      {item.step}
                    </span>

                  </div>


                  <div className="roadmap-content">

                    <div className="roadmap-title-row">

                      <h4>
                        {item.title}
                      </h4>

                      <span>
                        {item.status}
                      </span>

                    </div>


                    <p>
                      {item.description}
                    </p>

                  </div>


                  {index <
                    roadmap.length - 1 && (

                    <div className="roadmap-connector">

                      <span />

                    </div>

                  )}

                </div>

              )
            )}

          </div>

        </motion.div>


        {/* =================================================
            BOTTOM TECHNICAL SIGNAL
        ================================================= */}

        <div className="skills-bottom-signal">

          <span>
            DATA
          </span>

          <div />

          <span>
            ANALYSIS
          </span>

          <div />

          <span>
            MODELLING
          </span>

          <div />

          <span>
            AI / ML
          </span>

          <div />

          <span>
            INSIGHT
          </span>

        </div>

      </div>

    </section>

  );
}


export default Skills;