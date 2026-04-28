import "./Hero.css";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* LEFT */}
        <div className="hero-left">

          <h1>
            Hi, I'm <span>Abdullah</span>
          </h1>

          <h2>
            <TypeAnimation
              sequence={[
                "Data Analyst",
                2000,
                "Frontend Developer",
                2000,
                "React Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h2>

          <p>
            I build data-driven solutions and modern web applications
            with clean UI, strong logic, and scalable structure.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="hero-btn">
              View Projects
            </a>

            
          </div>

        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <div className="image-wrapper">
            <img src="/profile.jpg" alt="Abdullah" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;