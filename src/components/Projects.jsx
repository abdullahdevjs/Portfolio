import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <h2>Projects</h2>

        <div className="projects-grid">

          {/* ===== PROJECT 1 ===== */}
          <div className="project-card">
            <img src="/project1.png" alt="Quiz Application" />

            <div className="project-content">
              <h3>Quiz Application</h3>

              <p>
                A fully responsive quiz application built using React.
                It includes a real-time timer, score tracking, and a detailed
                result summary showing accuracy, attempted, and skipped questions.
              </p>

              {/* Features */}
              <div className="tech-stack">
                <span>React</span>
                <span>JavaScript</span>
                <span>Timer</span>
                <span>Score Tracking</span>
                <span>Accuracy</span>
              </div>

              {/* Links */}
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

          {/* ===== PROJECT 2 ===== */}
          <div className="project-card">
            <img src="/project2.jpg" alt="Student Survey Analysis" />

            <div className="project-content">
              <h3>Student Survey Analysis (In Progress)</h3>

              <p>
                A data analytics project focused on analyzing student responses
                using Python, SQL, and Excel to generate meaningful insights
                and visual reports.
              </p>

              <div className="tech-stack">
                <span>Python</span>
                <span>SQL</span>
                <span>Excel</span>
                <span>Data Analysis</span>
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