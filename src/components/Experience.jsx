import "./Experience.css";

import {
  FiArrowDown,
  FiArrowUpRight,
  FiBriefcase,
  FiCode,
  FiLayers,
  FiMapPin,
  FiTrendingUp,
} from "react-icons/fi";

import { motion } from "framer-motion";


const journey = [
  {
    id: "01",
    period: "FOUNDATION",
    year: "2023 — 2024",
    title: "Computer Science Foundations",
    type: "ACADEMIC FOUNDATION",
    icon: FiLayers,
    location: "Integral University · Lucknow",

    description:
      "Building a strong foundation in computer science through programming, databases, software engineering concepts and core technical subjects.",

    focus: [
      "Programming fundamentals",
      "Database concepts",
      "Web fundamentals",
      "Computer science core",
    ],

    technologies: [
      "C",
      "Python",
      "HTML",
      "CSS",
      "SQL",
    ],

    status: "FOUNDATION",
  },

  {
    id: "02",
    period: "DEVELOPMENT",
    year: "2024 — 2025",
    title: "Software Development Projects",
    type: "PROJECT-BASED DEVELOPMENT",
    icon: FiCode,
    location: "Independent Projects",

    description:
      "Moving from programming fundamentals into building complete web applications, APIs and database-backed systems.",

    focus: [
      "Frontend development",
      "REST APIs",
      "Authentication",
      "Database integration",
    ],

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Git",
    ],

    status: "BUILDING",
  },

  {
    id: "03",
    period: "ANALYTICS",
    year: "2025 — 2026",
    title: "Data Analytics Focus",
    type: "DATA / ANALYTICS",
    icon: FiTrendingUp,
    location: "Independent Learning & Projects",

    description:
      "Developing a stronger focus on working with data, analytical thinking and practical workflows using Python, SQL and Excel.",

    focus: [
      "Data cleaning",
      "Exploratory analysis",
      "SQL analysis",
      "Business-oriented insights",
    ],

    technologies: [
      "Python",
      "SQL",
      "Excel",
      "NumPy",
      "Git",
    ],

    status: "CURRENT FOCUS",
  },

  {
    id: "04",
    period: "NEXT",
    year: "2026 →",
    title: "Data Science & AI Engineering",
    type: "PROFESSIONAL DIRECTION",
    icon: FiBriefcase,
    location: "Continuous Development",

    description:
      "Deepening my understanding of statistics, machine learning and applied AI while strengthening the engineering foundation behind data-driven systems.",

    focus: [
      "Statistics",
      "Machine learning",
      "Applied AI",
      "Data-driven systems",
    ],

    technologies: [
      "Python",
      "SQL",
      "Machine Learning",
      "AI",
    ],

    status: "NEXT DIRECTION",
  },
];


const currentFocus = [
  {
    label: "PRIMARY",
    value: "DATA SCIENCE",
  },

  {
    label: "CORE",
    value: "PYTHON + SQL",
  },

  {
    label: "BUILDING",
    value: "ML / AI",
  },

  {
    label: "APPROACH",
    value: "PROJECT-DRIVEN",
  },
];


function Experience() {
  return (
    <section
      className="experience-section"
      id="experience"
    >

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="experience-background"
        aria-hidden="true"
      >

        <span className="experience-bg-line experience-line-one" />

        <span className="experience-bg-line experience-line-two" />

        <span className="experience-bg-line experience-line-three" />

        <span className="experience-bg-node experience-node-one" />

        <span className="experience-bg-node experience-node-two" />

        <span className="experience-bg-node experience-node-three" />

      </div>


      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="container experience-container">


        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          className="experience-header"
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.65,
          }}
        >

          <div className="experience-header-top">

            <div className="section-eyebrow">

              <span />

              JOURNEY / DEVELOPMENT

            </div>


            <div className="experience-header-status">

              <FiTrendingUp />

              <span>
                DIRECTION → DATA SCIENCE
              </span>

            </div>

          </div>


          <div className="experience-heading-row">

            <h2 className="experience-title">

              Building depth,

              <span>
                one layer at a time.
              </span>

            </h2>


            <p>
              My path has moved from computer science
              fundamentals and software development toward
              data analytics, with Data Science and AI as
              the long-term technical direction.
            </p>

          </div>

        </motion.div>


        {/* =====================================================
            CURRENT FOCUS
        ===================================================== */}

        <motion.div
          className="experience-focus-bar"
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

          <div className="experience-focus-label">

            <FiBriefcase />

            <span>
              CURRENT POSITIONING
            </span>

          </div>


          <div className="experience-focus-grid">

            {currentFocus.map((item) => (

              <div
                className="experience-focus-item"
                key={item.label}
              >

                <span>
                  {item.label}
                </span>

                <strong>
                  {item.value}
                </strong>

              </div>

            ))}

          </div>

        </motion.div>


        {/* =====================================================
            TIMELINE
        ===================================================== */}

        <div className="experience-timeline">


          <div
            className="experience-rail"
            aria-hidden="true"
          >

            <span className="experience-rail-progress" />

          </div>


          {journey.map((item, index) => {

            const ItemIcon = item.icon;

            return (

              <motion.article
                className={`experience-item ${
                  index === journey.length - 1
                    ? "experience-item-next"
                    : ""
                }`}
                key={item.id}
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
                  delay: index * 0.08,
                }}
              >


                {/* NODE */}

                <div className="experience-node">

                  <span>
                    {item.id}
                  </span>

                </div>


                {/* CONTENT */}

                <div className="experience-item-content">


                  {/* META */}

                  <div className="experience-item-meta">

                    <span className="experience-period">
                      {item.period}
                    </span>

                    <span className="experience-year">
                      {item.year}
                    </span>

                  </div>


                  {/* CARD */}

                  <div className="experience-card">


                    {/* CARD HEADER */}

                    <div className="experience-card-header">

                      <div className="experience-card-icon">

                        <ItemIcon />

                      </div>


                      <div className="experience-card-heading">

                        <span>
                          {item.type}
                        </span>

                        <h3>
                          {item.title}
                        </h3>

                      </div>


                      <div className="experience-status">

                        <i />

                        {item.status}

                      </div>

                    </div>


                    {/* LOCATION */}

                    <div className="experience-location">

                      <FiMapPin />

                      <span>
                        {item.location}
                      </span>

                    </div>


                    {/* DESCRIPTION */}

                    <p className="experience-description">

                      {item.description}

                    </p>


                    {/* LOWER */}

                    <div className="experience-card-lower">


                      {/* FOCUS */}

                      <div className="experience-focus-list">

                        <span className="experience-sub-label">
                          FOCUS
                        </span>


                        <div>

                          {item.focus.map((focusItem) => (

                            <span key={focusItem}>

                              <b />

                              {focusItem}

                            </span>

                          ))}

                        </div>

                      </div>


                      {/* TOOLKIT */}

                      <div className="experience-stack">

                        <span className="experience-sub-label">
                          TOOLKIT
                        </span>


                        <div>

                          {item.technologies.map(
                            (technology) => (

                              <span key={technology}>
                                {technology}
                              </span>

                            )
                          )}

                        </div>

                      </div>

                    </div>


                    {/* FOOTER */}

                    <div className="experience-card-footer">

                      <span>
                        PHASE_{item.id}
                      </span>

                      <span className="experience-card-line" />

                      <span>
                        {index === journey.length - 1
                          ? "IN PROGRESS"
                          : "COMPLETED / DEVELOPED"}
                      </span>

                    </div>

                  </div>

                </div>

              </motion.article>

            );

          })}

        </div>


        {/* =====================================================
            TRANSITION
        ===================================================== */}

        <motion.div
          className="experience-transition"
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
        >

          <div className="experience-transition-icon">

            <FiArrowDown />

          </div>


          <div className="experience-transition-content">

            <span>
              NEXT LAYER
            </span>

            <h3>
              Turning analytical thinking into
              data-driven systems.
            </h3>

            <p>
              The goal is not simply to collect more tools,
              but to understand how data, models and software
              can work together to solve useful problems.
            </p>

          </div>


          <div className="experience-transition-action">

            <FiArrowUpRight />

          </div>

        </motion.div>


        {/* =====================================================
            BOTTOM SIGNAL
        ===================================================== */}

        <div className="experience-bottom-signal">

          <span>
            FOUNDATION
          </span>

          <div />

          <span>
            DEVELOPMENT
          </span>

          <div />

          <span>
            ANALYTICS
          </span>

          <div />

          <span>
            DATA SCIENCE
          </span>

        </div>

      </div>

    </section>
  );
}


export default Experience;