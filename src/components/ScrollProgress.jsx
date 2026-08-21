import { useEffect, useState } from "react";

import "./ScrollProgress.css";

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
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] =
    useState("home");

  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      const scrollTop = window.scrollY;

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
          Math.max(0, currentProgress)
        )
      );

      const viewportPoint =
        window.innerHeight * 0.32;

      let currentSection = "home";

      sections.forEach(({ id }) => {
        const element =
          document.getElementById(id);

        if (!element) return;

        const rect =
          element.getBoundingClientRect();

        if (
          rect.top <= viewportPoint &&
          rect.bottom >= viewportPoint
        ) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(
          updateScrollState
        );

        ticking = true;
      }
    };

    const handleResize = () => {
      updateScrollState();
    };

    updateScrollState();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      handleResize
    );

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

  const scrollToSection = (id) => {
    const element =
      document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <aside
      className="scroll-progress"
      aria-label="Portfolio progress"
    >

      {/* =====================================
          TRACK
      ====================================== */}

      <div className="scroll-progress-track">

        <div
          className="scroll-progress-fill"
          style={{
            height: `${progress}%`,
          }}
        />

        {sections.map((section) => {
          const isActive =
            activeSection === section.id;

          return (
            <button
              key={section.id}
              type="button"
              className={`scroll-progress-node ${
                isActive
                  ? "is-active"
                  : ""
              }`}
              onClick={() =>
                scrollToSection(section.id)
              }
              aria-label={`Go to ${section.label}`}
              aria-current={
                isActive
                  ? "location"
                  : undefined
              }
            >
              <span className="scroll-progress-dot"></span>

              <span className="scroll-progress-label">
                {section.label}
              </span>
            </button>
          );
        })}

      </div>

    </aside>
  );
}

export default ScrollProgress;