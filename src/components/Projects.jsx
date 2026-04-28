import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <h2>Projects</h2>

        <div className="projects-grid">

          {/* ===== PROJECT 1 ===== */}
          <div className="project-card">
            <img src="/project1.png" alt="Quiz App" />

            <div className="project-content">
              <h3>Quiz Application</h3>

              <p>
                A responsive quiz application built with JavaScript.
                Features multiple questions, score tracking, and dynamic UI updates.
              </p>

              <div className="tech-stack">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>

              <div className="project-links">
                <a
                  href="https://quiz-1-6z6s.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live
                </a>

                <a
                  href="https://github.com/abdullahdevjs/quiz"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          </div>

          {/* ===== PROJECT 2 (COMING SOON IMPROVED) ===== */}
          <div className="project-card">
            <img src="/project2.jpg" alt="Upcoming Project" />

            <div className="project-content">
              <h3>Student Survey Analysis (In Progress)</h3>

              <p>
                Data analytics project focused on analyzing student behavior
                using Python, SQL, and visualization tools.
                Currently under development.
              </p>

              <div className="tech-stack">
                <span>Python</span>
                <span>SQL</span>
                <span>Excel</span>
              </div>

              <div className="status">
                In Progress
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;