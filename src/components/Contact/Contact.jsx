import "./Contact.css";
import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi, I am ${form.name} (${form.phone}). ${form.message}`;
    window.open(
      `https://wa.me/917620144726?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section className="contact" id="contact">

      <div className="section-heading">
        <span>GET IN TOUCH</span>
        <h2>Let's Talk About Your Business</h2>
        <p>Reach out for a consultation — we typically respond within one business day.</p>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <div className="info-card">
            <FaMapMarkerAlt />
            <div>
              <h4>Office Address</h4>
              <p>B/16, Grace Plaza, Off S V Road, Agarwal Estate, Jogeshwari (W), Mumbai – 400 102, Maharashtra, India</p>
            </div>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt />
            <div>
              <h4>Communication Address</h4>
              <p>401, Maple Towers, Agarwal Estate, Jogeshwari (W), Mumbai – 400 102, Maharashtra, India</p>
            </div>
          </div>

          <div className="info-card">
            <FaPhoneAlt />
            <div>
              <h4>Call Us</h4>
              <p><a href="tel:+917620144726">076201 44726</a></p>
            </div>
          </div>

          <div className="info-card">
            <FaEnvelope />
            <div>
              <h4>Email Us</h4>
              <p><a href="mailto:ca.husman@gmail.com">ca.husman@gmail.com</a></p>
            </div>
          </div>

          <a
            className="whatsapp-btn"
            href="https://wa.me/917620144726"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>

        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={form.phone}
            onChange={handleChange}
          />

          <textarea
            name="message"
            rows="5"
            placeholder="How can we help you?"
            required
            value={form.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Send via WhatsApp</button>

        </form>

      </div>

    </section>
  );
}

export default Contact;
