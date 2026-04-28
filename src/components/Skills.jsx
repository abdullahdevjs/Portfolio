import "./Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <h2 className="section-title">Technical Skills</h2>
        <p className="skills-subtitle">
          Focused on building data-driven solutions and modern web applications.
        </p>

        <div className="skills-grid">

          {/* ===== DATA ANALYTICS ===== */}
          <div className="skill-card">
            <h3>Data Analytics</h3>

            <div className="skill-tags">
              <span>Excel</span>
              <span>SQL</span>
              <span>Python (Pandas)</span>
              <span>Data Cleaning</span>
              <span>Data Visualization</span>
              <span>Exploratory Analysis</span>
            </div>
          </div>

          {/* ===== PROGRAMMING ===== */}
          <div className="skill-card">
            <h3>Programming</h3>

            <div className="skill-tags">
              <span>C</span>
              <span>Python</span>
              <span>JavaScript</span>
              <span>Problem Solving</span>
            </div>
          </div>

          {/* ===== WEB DEVELOPMENT ===== */}
          <div className="skill-card">
            <h3>Web Development</h3>

            <div className="skill-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Responsive Design</span>
              <span>UI Development</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;