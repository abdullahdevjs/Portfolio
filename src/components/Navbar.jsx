import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* =====================================================
     SCROLL EFFECT
  ====================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);


  /* =====================================================
     ACTIVE SECTION
  ====================================================== */

  useEffect(() => {
    const sections = document.querySelectorAll(
      "section[id]"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio
          )[0];

        if (visibleSection) {
          setActiveSection(
            visibleSection.target.id
          );
        }
      },
      {
        rootMargin:
          "-25% 0px -55% 0px",

        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);


  /* =====================================================
     NAVIGATION
  ====================================================== */

  const navItems = [
    {
      label: "Home",
      id: "home",
    },

    {
      label: "About",
      id: "about",
    },

    {
      label: "Skills",
      id: "skills",
    },

    {
      label: "Projects",
      id: "projects",
    },

    {
      label: "Contact",
      id: "contact",
    },
  ];


  /* =====================================================
     CLOSE MOBILE MENU
  ====================================================== */

  const handleNavigation = () => {
    setMenuOpen(false);
  };


  /* =====================================================
     RENDER
  ====================================================== */

  return (
    <header
      className={`
        navbar
        ${scrolled ? "navbar-scrolled" : ""}
        ${menuOpen ? "navbar-open" : ""}
      `}
    >

      <div className="navbar-container">


        {/* =================================================
            BRAND
        ================================================= */}

        <a
          href="#home"
          className="navbar-brand"
          onClick={handleNavigation}
        >

          <span className="navbar-brand-mark">
            MA
          </span>


          <span className="navbar-brand-info">

            <strong>
              Mohammad Abdullah
            </strong>

            <small>
              DATA · CODE · INSIGHT
            </small>

          </span>

        </a>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav
          className="navbar-links"
          aria-label="Main navigation"
        >

          {navItems.map((item, index) => (

            <a
              key={item.id}
              href={`#${item.id}`}
              className={`
                navbar-link
                ${
                  activeSection === item.id
                    ? "navbar-link-active"
                    : ""
                }
              `}
              onClick={handleNavigation}
            >

              <span className="navbar-link-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="navbar-link-label">
                {item.label}
              </span>

              <span className="navbar-link-dot"></span>

            </a>

          ))}

        </nav>


        {/* =================================================
            RIGHT STATUS
        ================================================= */}

        <div className="navbar-status">

          <span className="navbar-status-dot"></span>

          <span>
            OPEN TO OPPORTUNITIES
          </span>

        </div>


        {/* =================================================
            MOBILE BUTTON
        ================================================= */}

        <button
          type="button"
          className={`
            navbar-menu-button
            ${menuOpen ? "menu-active" : ""}
          `}
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={menuOpen}
          onClick={() =>
            setMenuOpen((previous) => !previous)
          }
        >

          <span></span>
          <span></span>

        </button>

      </div>


      {/* =================================================
          MOBILE NAVIGATION
      ================================================= */}

      <div
        className={`
          navbar-mobile
          ${menuOpen ? "navbar-mobile-visible" : ""}
        `}
      >

        <div className="navbar-mobile-inner">

          <span className="navbar-mobile-label">
            NAVIGATION
          </span>


          <nav
            className="navbar-mobile-links"
            aria-label="Mobile navigation"
          >

            {navItems.map((item, index) => (

              <a
                key={item.id}
                href={`#${item.id}`}
                className={`
                  navbar-mobile-link
                  ${
                    activeSection === item.id
                      ? "mobile-link-active"
                      : ""
                  }
                `}
                onClick={handleNavigation}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>
                  {item.label}
                </strong>

                <b>
                  ↗
                </b>

              </a>

            ))}

          </nav>


          <div className="navbar-mobile-footer">

            <span>
              MOHAMMAD ABDULLAH
            </span>

            <span>
              ASPIRING DATA SCIENTIST
            </span>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;