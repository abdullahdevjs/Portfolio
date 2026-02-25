import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>
            Hi, I'm <span>Abdullah</span>
          </h1>

          <h2>
            <Typewriter
              words={[
                "Data Analyst",
                "Python Developer",
                "SQL Specialist",
                "Web Enthusiast",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p>
            B.Tech 3rd Year Student passionate about building data-driven
            solutions and modern web applications.
          </p>

          <a href="#projects" className="hero-btn">
            View Projects
          </a>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="image-wrapper">
            <img src="/profile.jpg" alt="profile" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;