import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "home",
    "about",
    "skills",
    "projects",
    "contact",
    "github"
  ];

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="logo">Abdullah</div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={
                item === "github"
                  ? "https://github.com/abdullahdevjs"
                  : `#${item}`
              }
              target={item === "github" ? "_blank" : "_self"}
              rel="noreferrer"
              className={active === item ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;