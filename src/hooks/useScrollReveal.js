import { useEffect } from "react";

function useScrollReveal() {
  useEffect(() => {

    const elements = document.querySelectorAll(
      "[data-reveal-item]"
    );

    if (!elements.length) {
      return;
    }


    /* =====================================================
       INTERSECTION OBSERVER
    ====================================================== */

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "is-visible"
            );

            /*
             * Once visible, stop observing.
             * This prevents the animation from
             * repeatedly firing while scrolling.
             */

            observer.unobserve(
              entry.target
            );
          }

        });

      },
      {
        threshold: 0.12,

        rootMargin:
          "0px 0px -60px 0px",
      }
    );


    /* =====================================================
       OBSERVE ELEMENTS
    ====================================================== */

    elements.forEach((element, index) => {

      /*
       * Small stagger between nearby elements.
       * The actual transition is controlled by CSS.
       */

      element.style.setProperty(
        "--reveal-delay",
        `${Math.min(index * 70, 420)}ms`
      );

      observer.observe(element);

    });


    /* =====================================================
       CLEANUP
    ====================================================== */

    return () => {

      observer.disconnect();

    };

  }, []);
}


export default useScrollReveal;