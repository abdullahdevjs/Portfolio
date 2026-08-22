import { useEffect, useState } from "react";

import "./ScrollProgress.css";


/* =========================================================
   PORTFOLIO SECTIONS
   ========================================================= */

const sections = [
  {
    id: "home",
    label: "INTRO",
  },

  {
    id: "about",
    label: "ABOUT",
  },

  {
    id: "what-i-do",
    label: "WHAT I DO",
  },

  {
    id: "experience",
    label: "EXPERIENCE",
  },

  {
    id: "skills",
    label: "SKILLS",
  },

  {
    id: "projects",
    label: "PROJECTS",
  },

  {
    id: "contact",
    label: "CONTACT",
  },
];


function ScrollProgress() {

  const [progress, setProgress] =
    useState(0);

  const [activeSection, setActiveSection] =
    useState("home");


  /* =======================================================
     SCROLL STATE
     ======================================================= */

  useEffect(() => {

    let ticking = false;


    const updateScrollState = () => {

      const scrollTop =
        window.scrollY;


      /* ===================================================
         PAGE PROGRESS
      =================================================== */

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;


      const currentProgress =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0;


      setProgress(
        Math.min(
          100,
          Math.max(
            0,
            currentProgress
          )
        )
      );


      /* ===================================================
         ACTIVE SECTION
      =================================================== */

      const viewportPoint =
        window.innerHeight * 0.35;


      let currentSection =
        "home";


      let closestDistance =
        Infinity;


      sections.forEach(
        ({ id }) => {

          const element =
            document.getElementById(id);


          if (!element) {
            return;
          }


          const rect =
            element.getBoundingClientRect();


          /*
            Section is currently around
            the active viewport area.
          */

          if (
            rect.top <= viewportPoint &&
            rect.bottom >= viewportPoint
          ) {

            const distance =
              Math.abs(
                rect.top -
                viewportPoint
              );


            if (
              distance <
              closestDistance
            ) {

              closestDistance =
                distance;

              currentSection =
                id;

            }

          }

        }
      );


      /*
        If no section intersects the
        viewport point, find the latest
        section that has already started.
      */

      if (
        currentSection === "home"
      ) {

        sections.forEach(
          ({ id }) => {

            const element =
              document.getElementById(id);


            if (!element) {
              return;
            }


            const rect =
              element.getBoundingClientRect();


            if (
              rect.top <=
              viewportPoint
            ) {

              currentSection =
                id;

            }

          }
        );

      }


      setActiveSection(
        currentSection
      );


      ticking = false;

    };


    /* =====================================================
       SCROLL HANDLER
       ===================================================== */

    const handleScroll = () => {

      if (!ticking) {

        window.requestAnimationFrame(
          updateScrollState
        );

        ticking = true;

      }

    };


    /* =====================================================
       RESIZE HANDLER
       ===================================================== */

    const handleResize = () => {

      updateScrollState();

    };


    /* =====================================================
       INITIAL STATE
       ===================================================== */

    updateScrollState();


    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );


    window.addEventListener(
      "resize",
      handleResize
    );


    /* =====================================================
       CLEANUP
       ===================================================== */

    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );


      window.removeEventListener(
        "resize",
        handleResize
      );

    };

  }, []);


  /* =======================================================
     SCROLL TO SECTION
     ======================================================= */

  const scrollToSection = (
    id
  ) => {

    const element =
      document.getElementById(id);


    if (!element) {
      return;
    }


    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  };


  /* =======================================================
     RENDER
     ======================================================= */

  return (

    <aside
      className="scroll-progress"
      aria-label="Portfolio progress"
    >


      {/* =================================================
          TRACK
      ================================================= */}

      <div
        className="scroll-progress-track"
      >


        {/* =================================================
            PROGRESS LINE
        ================================================= */}

        <div
          className="scroll-progress-fill"
          style={{
            height:
              `${progress}%`,
          }}
        />


        {/* =================================================
            SECTION NODES
        ================================================= */}

        {sections.map(
          (section) => {

            const isActive =
              activeSection ===
              section.id;


            return (

              <button
                key={section.id}
                type="button"

                className={
                  `scroll-progress-node ${
                    isActive
                      ? "is-active"
                      : ""
                  }`
                }

                onClick={() =>
                  scrollToSection(
                    section.id
                  )
                }

                aria-label={
                  `Go to ${section.label}`
                }

                aria-current={
                  isActive
                    ? "location"
                    : undefined
                }
              >


                <span
                  className=
                    "scroll-progress-dot"
                />


                <span
                  className=
                    "scroll-progress-label"
                >
                  {section.label}
                </span>


              </button>

            );

          }
        )}


      </div>


    </aside>

  );

}


export default ScrollProgress;