import { motion } from "framer-motion";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <h2>Projects</h2>

        <div className="projects-grid">

          {/* Project 1 - Completed */}
          <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src="/project1.jpg" alt="Zara Electronics Website" />

            <div className="project-content">
              <h3>Zara Electronics & Electricals Website</h3>

              <p>
                Designed and developed a fully responsive business website 
                for Zara Electronics & Electricals. The project focuses on 
                structured layout, product presentation, and clean UI design.
              </p>

              <p>
                The website is deployed on Netlify and built using 
                modern responsive design principles.
              </p>

              <div className="tech-stack">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Netlify</span>
              </div>

              <div className="project-links">
                <a 
                  href="https://zaraelectronicsandelectrical.netlify.app" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>


          {/* Project 2 - Ongoing */}
          <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img src="/project2.jpg" alt="Student Survey Data Analysis" />

            <div className="project-content">
              <h3>Student Survey Data Analysis (Ongoing)</h3>

              <p>
                Conducting exploratory data analysis on student survey data 
                to identify academic trends, performance patterns, and 
                behavioral insights.
              </p>

              <p>
                Applying data cleaning, aggregation, and visualization 
                techniques using Python, SQL, and Excel to generate 
                meaningful insights.
              </p>

              <div className="tech-stack">
                <span>Python</span>
                <span>Pandas</span>
                <span>SQL</span>
                <span>Excel</span>
              </div>

              <div className="project-links">
                <span className="status">Work in Progress</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Projects;