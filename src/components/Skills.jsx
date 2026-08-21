import "./Skills.css";

const skillGroups = [
  {
    number: "01",
    category: "PROGRAMMING",
    title: "Core Languages",
    description:
      "Languages I use to build programming fundamentals, solve problems and develop practical solutions.",
    skills: [
      {
        name: "Python",
        level: "PRIMARY",
        detail: "Data & Development",
      },
      {
        name: "C",
        level: "FOUNDATION",
        detail: "Programming Fundamentals",
      },
      {
        name: "JavaScript",
        level: "WORKING",
        detail: "Web Development",
      },
    ],
  },

  {
    number: "02",
    category: "DATA",
    title: "Data & Analytics",
    description:
      "Tools and concepts I am using to understand, process and extract meaningful insights from data.",
    skills: [
      {
        name: "SQL",
        level: "PRIMARY",
        detail: "Data Querying",
      },
      {
        name: "Data Analysis",
        level: "LEARNING",
        detail: "Insights & Exploration",
      },
      {
        name: "Excel",
        level: "WORKING",
        detail: "Data Handling",
      },
    ],
  },

  {
    number: "03",
    category: "DEVELOPMENT",
    title: "Web Technologies",
    description:
      "Technologies I use to create responsive interfaces and practical full-stack applications.",
    skills: [
      {
        name: "React",
        level: "WORKING",
        detail: "Frontend Development",
      },
      {
        name: "HTML / CSS",
        level: "WORKING",
        detail: "Interface Development",
      },
      {
        name: "Node.js",
        level: "FAMILIAR",
        detail: "Backend Development",
      },
    ],
  },

  {
    number: "04",
    category: "TOOLS",
    title: "Development Tools",
    description:
      "Tools and platforms that support my development workflow, version control and project deployment.",
    skills: [
      {
        name: "Git & GitHub",
        level: "WORKING",
        detail: "Version Control",
      },
      {
        name: "VS Code",
        level: "DAILY",
        detail: "Development Environment",
      },
      {
        name: "MongoDB",
        level: "FAMILIAR",
        detail: "Database",
      },
    ],
  },
];


function Skills() {
  return (
    <section
      className="skills-section"
      id="skills"
    >

      <div className="container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="skills-header"
          data-reveal-item
        >

          <div className="skills-heading">

            <span className="section-label">
              Skills & Technologies
            </span>

            <h2>
              Tools I use to
              <br />

              <span className="gradient-text">
                turn ideas into reality.
              </span>
            </h2>

          </div>


          <div className="skills-intro">

            <span>
              03 / SKILLS
            </span>

            <p>
              A growing technical toolkit built through
              coursework, self-learning and practical
              projects.
            </p>

          </div>

        </div>


        {/* =================================================
            SKILL SYSTEM
        ================================================= */}

        <div className="skills-system">


          {/* =================================================
              MAIN LINE
          ================================================= */}

          <div
            className="skills-main-line"
            aria-hidden="true"
          >

            <span></span>

          </div>


          {/* =================================================
              SKILL GROUPS
          ================================================= */}

          {skillGroups.map((group) => (

            <article
              key={group.number}
              className="skill-group"
              data-reveal-item
            >

              {/* NUMBER */}

              <div className="skill-index">

                <span>
                  {group.number}
                </span>

              </div>


              {/* CONTENT */}

              <div className="skill-group-content">

                <div className="skill-group-header">

                  <div>

                    <span className="skill-category">
                      {group.category}
                    </span>

                    <h3>
                      {group.title}
                    </h3>

                  </div>

                  <span className="skill-count">
                    {String(
                      group.skills.length
                    ).padStart(2, "0")}
                    {" "}SKILLS
                  </span>

                </div>


                <p className="skill-group-description">
                  {group.description}
                </p>


                {/* SKILL CARDS */}

                <div className="skill-list">

                  {group.skills.map((skill) => (

                    <div
                      className="skill-card"
                      key={skill.name}
                    >

                      <div className="skill-card-main">

                        <span className="skill-dot"></span>

                        <div>

                          <strong>
                            {skill.name}
                          </strong>

                          <small>
                            {skill.detail}
                          </small>

                        </div>

                      </div>


                      <span className="skill-level">
                        {skill.level}
                      </span>


                      <span className="skill-arrow">
                        ↗
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* =================================================
            LEARNING DIRECTION
        ================================================= */}

        <div
          className="skills-direction"
          data-reveal-item
        >

          <div className="skills-direction-label">

            <span className="section-label">
              Current Direction
            </span>

          </div>


          <div className="skills-direction-content">

            <h3>
              Python
              <span> → </span>
              Data Analytics
              <span> → </span>
              Machine Learning
            </h3>

            <p>
              My current learning path is focused on
              strengthening Python and SQL fundamentals,
              becoming more confident with data analysis
              and gradually moving into machine learning.
            </p>

          </div>


          <div className="skills-direction-status">

            <span></span>

            <strong>
              LEARNING IN PROGRESS
            </strong>

          </div>

        </div>


        {/* =================================================
            SKILLS FOOTNOTE
        ================================================= */}

        <div
          className="skills-footnote"
          data-reveal-item
        >

          <span>
            03
          </span>

          <p>
            Skills are continuously evolving through
            projects, experimentation and consistent
            learning.
          </p>

        </div>

      </div>

    </section>
  );
}


export default Skills;