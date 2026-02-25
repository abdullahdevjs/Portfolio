import { motion } from "framer-motion";
import "./Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">

          <motion.div 
            className="skill-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Data Analytics</h3>
            <div className="skill">
              <span>Excel</span>
              <div className="progress"><div className="bar excel"></div></div>
            </div>
            <div className="skill">
              <span>SQL</span>
              <div className="progress"><div className="bar sql"></div></div>
            </div>
            <div className="skill">
              <span>Python (Pandas)</span>
              <div className="progress"><div className="bar python"></div></div>
            </div>
          </motion.div>

          <motion.div 
            className="skill-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3>Programming</h3>
            <div className="skill">
              <span>C</span>
              <div className="progress"><div className="bar c"></div></div>
            </div>
            <div className="skill">
              <span>Python</span>
              <div className="progress"><div className="bar python2"></div></div>
            </div>
          </motion.div>

          <motion.div 
            className="skill-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            <h3>Web Development</h3>
            <div className="skill">
              <span>HTML</span>
              <div className="progress"><div className="bar html"></div></div>
            </div>
            <div className="skill">
              <span>CSS</span>
              <div className="progress"><div className="bar css"></div></div>
            </div>
            <div className="skill">
              <span>JavaScript</span>
              <div className="progress"><div className="bar js"></div></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Skills;