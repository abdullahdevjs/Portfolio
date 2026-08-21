import { useState } from "react";
import "./Projects.css";


const projects = [
  {
    number: "01",
    category: "DATA ANALYTICS",
    title: "AI Finance Dashboard",

    description:
      "A finance analytics dashboard designed to transform financial data into clear, actionable insights through interactive visualizations and structured analysis.",

    image: "/finance-dashboard.png",

    technologies: [
      "Python",
      "Data Analysis",
      "SQL",
      "Analytics",
    ],

    status: "COMPLETED",

    featured: true,

    github:
      "https://github.com/abdullahdevjs/Portfolio",
  },


  {
    number: "02",
    category: "WEB APPLICATION",
    title: "Online Quiz Application",

    description:
      "A responsive quiz platform focused on structured question handling, user interaction and a clean assessment experience.",

    image: "/quiz.png",

    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "GitHub",
    ],

    status: "COMPLETED",

    featured: false,

    github:
      "https://github.com/abdullahdevjs/quiz",
  },


  {
    number: "03",
    category: "MACHINE LEARNING",
    title: "Financial Fraud Detection System",

    description:
      "A machine learning based system currently in development, focused on identifying suspicious financial transactions through data preprocessing, feature analysis and predictive modelling.",

    image:
      "/fraud-detection-blueprint.png",

    technologies: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "Predictive Modelling",
    ],

    status: "IN DEVELOPMENT",

    featured: false,

    github: null,
  },
];


function Projects() {

  const [imageErrors, setImageErrors] =
    useState({});


  const handleImageError = (number) => {

    setImageErrors((previous) => ({
      ...previous,
      [number]: true,
    }));

  };


  return (
    <section
      className="projects-section"
      id="projects"
    >

      <div className="container">


        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="projects-header"
          data-reveal-item
        >

          <div className="projects-heading-left">

            <span className="section-label">
              Selected Work
            </span>


            <h2 className="section-title">

              Projects built around

              <span className="gradient-text">
                {" "}real problems.
              </span>

            </h2>

          </div>


          <div className="projects-heading-right">

            <span>
              04 / PROJECTS
            </span>

            <p>
              A collection of practical projects where I
              apply programming, data analysis and software
              development concepts to build useful solutions.
            </p>

          </div>

        </div>


        {/* =================================================
            PROJECT SYSTEM
        ================================================= */}

        <div className="projects-system">


          {/* =================================================
              VERTICAL CONNECTION LINE
          ================================================= */}

          <div
            className="projects-main-line"
            aria-hidden="true"
          >

            <span></span>

          </div>


          {/* =================================================
              PROJECTS
          ================================================= */}

          {projects.map((project, index) => (

            <article
              key={project.number}
              className={`
                project-card
                ${project.featured
                  ? "project-featured"
                  : ""
                }
                ${project.status ===
                  "IN DEVELOPMENT"
                  ? "project-development"
                  : ""
                }
              `}
              data-reveal-item
              style={{
                "--project-delay":
                  `${index * 120}ms`,
              }}
            >


              {/* ===========================================
                  PROJECT NODE
              =========================================== */}

              <div className="project-node">

                <span>
                  {project.number}
                </span>

              </div>


              {/* ===========================================
                  PROJECT MEDIA
              =========================================== */}

              <div className="project-media">

                {!imageErrors[project.number] ? (

                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    loading={
                      index === 0
                        ? "eager"
                        : "lazy"
                    }
                    onError={() =>
                      handleImageError(
                        project.number
                      )
                    }
                  />

                ) : (

                  <div className="project-image-fallback">

                    <span>
                      {project.number}
                    </span>

                    <strong>
                      {project.category}
                    </strong>

                    <small>
                      PROJECT PREVIEW
                    </small>

                  </div>

                )}


                <div className="project-image-gradient"></div>


                {/* CATEGORY */}

                <span className="project-media-category">
                  {project.category}
                </span>


                {/* STATUS */}

                <span
                  className={`
                    project-status
                    ${
                      project.status ===
                      "COMPLETED"
                        ? "status-completed"
                        : "status-development"
                    }
                  `}
                >

                  <span></span>

                  {project.status}

                </span>


                {/* VIEW SOURCE */}

                {project.github && (

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-view"
                  >

                    View source

                    <b>
                      ↗
                    </b>

                  </a>

                )}

              </div>


              {/* ===========================================
                  PROJECT BODY
              =========================================== */}

              <div className="project-body">


                {/* META */}

                <div className="project-meta">

                  <span className="project-category">
                    {project.category}
                  </span>


                  {project.featured && (

                    <span className="featured-badge">
                      FEATURED PROJECT
                    </span>

                  )}

                </div>


                {/* TITLE */}

                <h3 className="project-title">
                  {project.title}
                </h3>


                {/* DESCRIPTION */}

                <p className="project-description">
                  {project.description}
                </p>


                {/* TECHNOLOGIES */}

                <div className="project-technologies">

                  {project.technologies.map(
                    (technology) => (

                      <span key={technology}>
                        {technology}
                      </span>

                    )
                  )}

                </div>


                {/* FOOTER */}

                <div className="project-footer">


                  {project.github ? (

                    <>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          project-action
                          primary-action
                        "
                      >

                        GitHub

                        <span className="action-arrow">
                          ↗
                        </span>

                      </a>


                      <span
                        className="
                          project-action
                          secondary-action
                        "
                      >
                        Source available
                      </span>

                    </>

                  ) : (

                    <span
                      className="
                        project-action
                        development-action
                      "
                    >

                      <span className="development-dot"></span>

                      Research & development
                      in progress

                    </span>

                  )}

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* =================================================
            NEXT DIRECTION
        ================================================= */}

        <div
          className="projects-next"
          data-reveal-item
        >

          <div className="projects-next-content">

            <span className="section-label">
              What's Next
            </span>


            <h3>

              From analytics to

              <span>
                intelligent systems.
              </span>

            </h3>


            <p>
              My next stage is focused on strengthening
              machine learning fundamentals and applying
              them to practical data-driven problems.
            </p>

          </div>


          <div
            className="projects-next-visual"
            aria-hidden="true"
          >

            <span className="next-line"></span>

            <span className="next-node node-one"></span>

            <span className="next-node node-two"></span>

            <span className="next-node node-three"></span>

            <span className="next-label">
              ML
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}


export default Projects;