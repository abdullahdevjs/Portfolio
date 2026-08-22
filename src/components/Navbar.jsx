import "./Navbar.css";

import {
  FiActivity,
  FiArrowUpRight,
  FiMenu,
  FiX,
} from "react-icons/fi";

import { useEffect, useState } from "react";


/* =========================================================
   NAVIGATION CONFIGURATION
   ========================================================= */

const navigation = [
  {
    id: "home",
    label: "Home",
    href: "#home",
  },
  {
    id: "about",
    label: "About",
    href: "#about",
  },
  {
    id: "skills",
    label: "Skills",
    href: "#skills",
  },
  {
    id: "what-i-do",
    label: "What I Do",
    href: "#what-i-do",
  },
  {
    id: "projects",
    label: "Work",
    href: "#projects",
  },
  {
    id: "experience",
    label: "Journey",
    href: "#experience",
  },
  {
    id: "contact",
    label: "Contact",
    href: "#contact",
  },
];


/* =========================================================
   NAVBAR COMPONENT
   ========================================================= */

function Navbar() {

  const [isScrolled, setIsScrolled] =
    useState(false);

  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState("home");


  /* =======================================================
     SCROLL / ACTIVE SECTION TRACKING
     ======================================================= */

  useEffect(() => {

    const handleScroll = () => {

      const scrollTop =
        window.scrollY;


      setIsScrolled(
        scrollTop > 30
      );


      const detectionPoint =
        scrollTop +
        window.innerHeight * 0.30;


      let currentSection =
        "home";


      navigation.forEach(
        (item) => {

          const section =
            document.getElementById(
              item.id
            );


          if (!section) {
            return;
          }


          const sectionTop =
            section.offsetTop;


          const sectionBottom =
            sectionTop +
            section.offsetHeight;


          if (
            detectionPoint >= sectionTop &&
            detectionPoint < sectionBottom
          ) {

            currentSection =
              item.id;

          }

        }
      );


      setActiveSection(
        currentSection
      );

    };


    handleScroll();


    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );


    window.addEventListener(
      "resize",
      handleScroll
    );


    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleScroll
      );

    };

  }, []);


  /* =======================================================
     MOBILE MENU BODY LOCK
     ======================================================= */

  useEffect(() => {

    if (isMenuOpen) {

      document.body.style.overflow =
        "hidden";

    } else {

      document.body.style.overflow =
        "";

    }


    return () => {

      document.body.style.overflow =
        "";

    };

  }, [isMenuOpen]);


  /* =======================================================
     CLOSE MENU ON ESCAPE
     ======================================================= */

  useEffect(() => {

    const handleKeyDown = (
      event
    ) => {

      if (
        event.key === "Escape" &&
        isMenuOpen
      ) {

        setIsMenuOpen(
          false
        );

      }

    };


    window.addEventListener(
      "keydown",
      handleKeyDown
    );


    return () => {

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

    };

  }, [isMenuOpen]);


  /* =======================================================
     NAVIGATION HANDLER
     ======================================================= */

  const handleNavigation = (
    href
  ) => {

    const targetId =
      href.replace(
        "#",
        ""
      );


    const target =
      document.getElementById(
        targetId
      );


    setIsMenuOpen(
      false
    );


    if (!target) {
      return;
    }


    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  };


  /* =======================================================
     BRAND CLICK
     ======================================================= */

  const handleBrandClick = () => {

    setIsMenuOpen(
      false
    );


    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  /* =======================================================
     RENDER
     ======================================================= */

  return (

    <header
      className={`navbar ${
        isScrolled
          ? "navbar-scrolled"
          : ""
      }`}
    >

      <div className="container navbar-container">


        {/* =================================================
            BRAND
        ================================================= */}

        <button
          type="button"
          className="navbar-brand"
          onClick={
            handleBrandClick
          }
          aria-label="Go to homepage"
        >

          <span
            className="brand-mark"
            aria-hidden="true"
          >
            M
          </span>


          <span className="brand-content">

            <span className="brand-name">
              Mohd Abdullah
              <span className="brand-dot">
                .
              </span>
            </span>


            <span className="brand-role">
              DATA / AI ENGINEERING
            </span>

          </span>

        </button>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav
          className="navbar-navigation"
          aria-label="Primary navigation"
        >

          {navigation.map(
            (item) => {

              const isActive =
                activeSection ===
                item.id;


              return (

                <button
                  key={item.id}
                  type="button"
                  className={`navbar-link ${
                    isActive
                      ? "navbar-link-active"
                      : ""
                  }`}
                  onClick={() =>
                    handleNavigation(
                      item.href
                    )
                  }
                >

                  <span>
                    {item.label}
                  </span>


                  {isActive && (
                    <span
                      className="navbar-active-dot"
                      aria-hidden="true"
                    />
                  )}

                </button>

              );

            }
          )}

        </nav>


        {/* =================================================
            RIGHT SIDE ACTIONS
        ================================================= */}

        <div className="navbar-actions">


          {/* STATUS */}

          <div
            className="navbar-status"
            aria-label="Currently open to opportunities"
          >

            <span
              className="navbar-status-dot"
              aria-hidden="true"
            />

            <span className="navbar-status-label">
              OPEN TO OPPORTUNITIES
            </span>

          </div>


          {/* CONTACT */}

          <button
            type="button"
            className="navbar-contact"
            onClick={() =>
              handleNavigation(
                "#contact"
              )
            }
          >

            <span>
              Let's connect
            </span>

            <FiArrowUpRight />

          </button>


          {/* MOBILE MENU */}

          <button
            type="button"
            className="navbar-menu-button"
            onClick={() =>
              setIsMenuOpen(
                (previous) =>
                  !previous
              )
            }
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={
              isMenuOpen
            }
            aria-controls="mobile-navigation"
          >

            {isMenuOpen ? (
              <FiX />
            ) : (
              <FiMenu />
            )}

          </button>

        </div>

      </div>


      {/* ===================================================
          MOBILE NAVIGATION
      =================================================== */}

      <div
        id="mobile-navigation"
        className={`mobile-navigation ${
          isMenuOpen
            ? "mobile-navigation-open"
            : ""
        }`}
      >

        <div className="mobile-navigation-inner">


          {/* MOBILE HEADER */}

          <div className="mobile-navigation-header">

            <div>

              <span>
                NAVIGATION
              </span>

              <strong>
                MOHD ABDULLAH
              </strong>

            </div>


            <div className="mobile-navigation-status">

              <FiActivity />

              <span>
                ONLINE
              </span>

            </div>

          </div>


          {/* MOBILE LINKS */}

          <nav
            className="mobile-navigation-links"
            aria-label="Mobile navigation"
          >

            {navigation.map(
              (
                item,
                index
              ) => {

                const isActive =
                  activeSection ===
                  item.id;


                return (

                  <button
                    type="button"
                    key={item.id}
                    className={`mobile-navigation-link ${
                      isActive
                        ? "mobile-navigation-link-active"
                        : ""
                    }`}
                    onClick={() =>
                      handleNavigation(
                        item.href
                      )
                    }
                  >

                    <span className="mobile-link-number">
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </span>


                    <span className="mobile-link-label">
                      {item.label}
                    </span>


                    <FiArrowUpRight />

                  </button>

                );

              }
            )}

          </nav>


          {/* MOBILE FOOTER */}

          <div className="mobile-navigation-footer">

            <span>
              DATA SCIENCE
            </span>

            <i />

            <span>
              SOFTWARE
            </span>

            <i />

            <span>
              AI
            </span>

          </div>

        </div>

      </div>

    </header>

  );

}


export default Navbar;