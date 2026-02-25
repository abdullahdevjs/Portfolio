import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <h3>Mohammad Abdullah</h3>
          <p>Aspiring Data Analyst & Developer</p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Mohammad Abdullah. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;