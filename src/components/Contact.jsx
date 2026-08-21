import "./Contact.css";

function Contact() {
  return (
    <section
      className="contact-section"
      id="contact"
    >

      <div className="container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="contact-header"
          data-reveal-item
        >

          <div className="contact-heading">

            <span className="section-label">
              Contact
            </span>

            <h2>
              Let's build something
              <span className="gradient-text">
                {" "}meaningful.
              </span>
            </h2>

          </div>


          <div className="contact-header-meta">

            <span>
              04 / CONTACT
            </span>

            <p>
              Have an opportunity, project idea or
              simply want to connect? I'm always open
              to meaningful conversations.
            </p>

          </div>

        </div>


        {/* =================================================
            CONTACT CONTENT
        ================================================= */}

        <div className="contact-layout">


          {/* ===============================================
              LEFT CONNECTION LINE
          ================================================ */}

          <div
            className="contact-timeline"
            data-reveal-item
          >

            <div className="contact-main-line">
              <span></span>
            </div>


            {/* =============================================
                STATUS
            ============================================== */}

            <div className="contact-node contact-node-first">
              <span></span>
            </div>


            <div className="contact-status">

              <span className="contact-status-dot"></span>

              <div>

                <span>
                  CURRENT STATUS
                </span>

                <strong>
                  Open to opportunities
                </strong>

              </div>

            </div>


            {/* =============================================
                EMAIL NODE
            ============================================== */}

            <div className="contact-node contact-node-email">
              <span></span>
            </div>


            <div className="contact-email-block">

              <span>
                EMAIL
              </span>

              <a
                href="mailto:mohdabdullahsheikh36@gmail.com"
              >
                mohdabdullahsheikh36@gmail.com
              </a>

            </div>


            {/* =============================================
                END NODE
            ============================================== */}

            <div className="contact-node contact-node-end">
              <span></span>
            </div>

          </div>


          {/* ===============================================
              RIGHT CONTENT
          ================================================ */}

          <div
            className="contact-content"
            data-reveal-item
          >

            <span className="contact-small-label">
              START A CONVERSATION
            </span>


            <h3>
              Have an idea?
              <br />

              <strong>
                Let's talk.
              </strong>
            </h3>


            <p>
              Whether it's a data project, development
              opportunity, collaboration or just an
              interesting problem to solve, feel free
              to reach out.
            </p>


            {/* =============================================
                PRIMARY CTA
            ============================================== */}

            <a
              href="mailto:mohdabdullahsheikh36@gmail.com"
              className="contact-primary-button"
            >

              <span>
                Send me an email
              </span>

              <b>
                ↗
              </b>

            </a>


            {/* =============================================
                SOCIAL LINKS
            ============================================== */}

            <div className="contact-links">

              <a
                href="https://github.com/abdullahdevjs"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >

                <span className="contact-link-number">
                  01
                </span>

                <span className="contact-link-name">
                  GitHub
                </span>

                <span className="contact-link-arrow">
                  ↗
                </span>

              </a>


              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >

                <span className="contact-link-number">
                  02
                </span>

                <span className="contact-link-name">
                  LinkedIn
                </span>

                <span className="contact-link-arrow">
                  ↗
                </span>

              </a>


              <a
                href="mailto:mohdabdullahsheikh36@gmail.com"
                className="contact-link"
              >

                <span className="contact-link-number">
                  03
                </span>

                <span className="contact-link-name">
                  Email
                </span>

                <span className="contact-link-arrow">
                  ↗
                </span>

              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;