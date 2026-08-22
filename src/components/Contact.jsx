import "./Contact.css";

import { useState } from "react";

import {
  FiArrowUpRight,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiMapPin,
  FiCheckCircle,
  FiCpu,
  FiDatabase,
  FiBarChart2,
} from "react-icons/fi";



/* =========================================================
   CONTACT
   ========================================================= */

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);


  /* =======================================================
     INPUT HANDLER
     ======================================================= */

  const handleChange = (event) => {

    const {
      name,
      value,
    } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (submitted) {
      setSubmitted(false);
    }
  };


  /* =======================================================
     FORM SUBMIT
     ======================================================= */

  const handleSubmit = (event) => {

    event.preventDefault();


    const emailAddress =
      "mohdabdullahsheikh36@gmail.com";


    const subject =
      formData.subject ||
      `Portfolio enquiry from ${formData.name}`;


    const body = `
Hello Mohd Abdullah,

Name: ${formData.name}
Email: ${formData.email}

Message:

${formData.message}
    `.trim();


    const mailtoLink =
      `mailto:${emailAddress}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;


    window.location.href = mailtoLink;


    setSubmitted(true);

  };


  return (

    <section
      className="contact-section"
      id="contact"
    >


      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div
        className="contact-background"
        aria-hidden="true"
      >

        <div className="contact-grid" />

        <div className="contact-glow" />

        <div className="contact-orbit contact-orbit-one" />

        <div className="contact-orbit contact-orbit-two" />

      </div>



      <div className="container contact-container">


        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="contact-header">


          <div className="contact-header-left">


            <span className="contact-eyebrow">

              <i />

              07 / CONTACT

            </span>


            <h2>

              Let's build
              <span> something useful.</span>

            </h2>


          </div>


          <div className="contact-header-right">

            <p>

              Whether you're working on a data problem,
              building an analytical product, or exploring
              an AI-driven idea, I'd be happy to connect.

            </p>


            <div className="contact-header-line">

              <span />

              OPEN TO CONVERSATIONS

            </div>

          </div>


        </div>



        {/* =================================================
            CONTACT WORKSPACE
        ================================================= */}

        <div className="contact-workspace">


          {/* =================================================
              LEFT INFORMATION PANEL
          ================================================= */}

          <aside className="contact-info">


            <div className="contact-info-top">


              <span className="contact-panel-label">
                CONNECTION / 01
              </span>


              <div className="contact-status">

                <i />

                AVAILABLE

              </div>


            </div>


            <div className="contact-info-content">


              <h3>

                Have a question,
                <span> idea or opportunity?</span>

              </h3>


              <p>

                I'm interested in data science,
                analytics, machine learning and
                software projects where I can
                learn, contribute and build.

              </p>


            </div>



            {/* =================================================
                FOCUS
            ================================================= */}

            <div className="contact-focus">


              <span className="contact-small-label">
                AREAS OF INTEREST
              </span>


              <div className="contact-focus-list">


                <div>

                  <FiDatabase />

                  <span>
                    Data Science
                  </span>

                </div>


                <div>

                  <FiBarChart2 />

                  <span>
                    Data Analytics
                  </span>

                </div>


                <div>

                  <FiCpu />

                  <span>
                    AI / Machine Learning
                  </span>

                </div>


              </div>

            </div>



            {/* =================================================
                DIRECT CONTACT
            ================================================= */}

            <div className="contact-direct">


              <span className="contact-small-label">
                DIRECT CONTACT
              </span>


              <a
                href="mailto:mohdabdullahsheikh36@gmail.com"
                className="contact-email"
              >

                <span className="contact-email-icon">

                  <FiMail />

                </span>


                <span className="contact-email-content">

                  <small>
                    EMAIL
                  </small>

                  <strong>
                    mohdabdullahsheikh36@gmail.com
                  </strong>

                </span>


                <FiArrowUpRight />

              </a>


              <div className="contact-location">

                <FiMapPin />

                <span>
                  Lucknow, India
                </span>

              </div>


            </div>



            {/* =================================================
                SOCIAL LINKS
            ================================================= */}

            <div className="contact-socials">


              <a
                href="https://github.com/abdullahdevjs"
                target="_blank"
                rel="noopener noreferrer"
              >

                <FiGithub />

                <span>
                  GitHub
                </span>

                <FiArrowUpRight />

              </a>


              <a
                href="https://www.linkedin.com/in/mohammad-abdullah-9266623ab/"
                target="_blank"
                rel="noopener noreferrer"
              >

                <FiLinkedin />

                <span>
                  LinkedIn
                </span>

                <FiArrowUpRight />

              </a>


            </div>


          </aside>



          {/* =================================================
              MESSAGE FORM
          ================================================= */}

          <div className="contact-form-panel">


            <div className="contact-form-header">


              <div>

                <span className="contact-panel-label">
                  MESSAGE / 02
                </span>

                <h3>
                  Send a message
                </h3>

              </div>


              <div className="contact-form-code">

                <span>
                  FORM_01
                </span>

                <FiSend />

              </div>


            </div>



            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >


              {/* =================================================
                  NAME + EMAIL
              ================================================= */}

              <div className="contact-form-row">


                <div className="contact-field">

                  <label htmlFor="contact-name">

                    <span>
                      01
                    </span>

                    YOUR NAME

                  </label>


                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                  />

                </div>


                <div className="contact-field">

                  <label htmlFor="contact-email">

                    <span>
                      02
                    </span>

                    EMAIL ADDRESS

                  </label>


                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />

                </div>


              </div>



              {/* =================================================
                  SUBJECT
              ================================================= */}

              <div className="contact-field">

                <label htmlFor="contact-subject">

                  <span>
                    03
                  </span>

                  SUBJECT

                </label>


                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                />

              </div>



              {/* =================================================
                  MESSAGE
              ================================================= */}

              <div className="contact-field contact-message-field">

                <label htmlFor="contact-message">

                  <span>
                    04
                  </span>

                  MESSAGE

                </label>


                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me a little about your idea, project or opportunity..."
                  rows="7"
                  required
                />

              </div>



              {/* =================================================
                  FORM FOOTER
              ================================================= */}

              <div className="contact-form-footer">


                <div className="contact-form-note">

                  <FiCheckCircle />

                  <span>
                    Your message will open in your email client.
                  </span>

                </div>


                <button
                  type="submit"
                  className="contact-submit"
                >

                  <span>
                    SEND MESSAGE
                  </span>

                  <FiArrowUpRight />

                </button>


              </div>


              {submitted && (

                <div className="contact-success">

                  <FiCheckCircle />

                  <span>
                    Your email client should now be open.
                  </span>

                </div>

              )}


            </form>


          </div>


        </div>



        {/* =================================================
            BOTTOM SIGNAL
        ================================================= */}

        <div className="contact-bottom">


          <div className="contact-bottom-item">

            <span>
              01
            </span>

            <div />

            <strong>
              DATA
            </strong>

          </div>


          <div className="contact-bottom-item">

            <span>
              02
            </span>

            <div />

            <strong>
              ANALYTICS
            </strong>

          </div>


          <div className="contact-bottom-item">

            <span>
              03
            </span>

            <div />

            <strong>
              MACHINE LEARNING
            </strong>

          </div>


          <div className="contact-bottom-item">

            <span>
              04
            </span>

            <div />

            <strong>
              AI ENGINEERING
            </strong>

          </div>


        </div>


      </div>


    </section>

  );

}


export default Contact;