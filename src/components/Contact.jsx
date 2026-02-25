import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import { useState } from "react";
import "./Contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "916393538700";

    const text = `
New Portfolio Message

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Get in Touch</h2>
          <div className="section-line"></div>

          <p>
            Available for internships and professional collaborations.
          </p>

          <div className="contact-links">

            <a href="mailto:mohdabdullahsheikh36@gmail.com" className="contact-card">
              <FaEnvelope />
              <div>
                <span className="label">Email</span>
                <span className="value">mohdabdullahsheikh36@gmail.com</span>
              </div>
            </a>

            <a href="tel:+916393538700" className="contact-card">
              <FaPhone />
              <div>
                <span className="label">Phone</span>
                <span className="value">+91 6393538700</span>
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/mohammad-abdullah-9266623ab"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <FaLinkedin />
              <div>
                <span className="label">LinkedIn</span>
                <span className="value">View Profile</span>
              </div>
            </a>

            <a 
              href="https://instagram.com/sheikh.mohdabdullah"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <FaInstagram />
              <div>
                <span className="label">Instagram</span>
                <span className="value">@sheikh.mohdabdullah</span>
              </div>
            </a>

          </div>
        </motion.div>

        <motion.form
          className="contact-right"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Send Message</h3>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <div className="btn-wrapper">
            <button type="submit" className="send-btn">
              Send Message
            </button>
          </div>

        </motion.form>

      </div>
    </section>
  );
}

export default Contact;