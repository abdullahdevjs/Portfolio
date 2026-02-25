import { motion } from "framer-motion";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>

          <p>
            I am a third-year B.Tech student with a strong interest in 
            Data Analytics and Software Development. I enjoy working with 
            structured data, solving analytical problems, and building 
            clean, responsive web applications.
          </p>

          <p>
            My technical background includes Python, SQL, Excel, and 
            frontend development technologies. I focus on writing clean 
            code and continuously improving my problem-solving skills.
          </p>

          <p>
            I am currently seeking internship opportunities where I can 
            apply my skills to real-world projects and contribute to 
            data-driven decision-making.
          </p>
        </motion.div>

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="about-box">
            <h4>Education</h4>
            <p>B.Tech – Third Year</p>
          </div>

          <div className="about-box">
            <h4>Primary Focus</h4>
            <p>Data Analytics & Web Development</p>
          </div>

          <div className="about-box">
            <h4>Core Tools</h4>
            <p>Python, SQL, Excel, HTML, CSS, JavaScript</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;