import "./FloatingButtons.css";
import { useState, useEffect } from "react";
import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from "react-icons/fa";

function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="floating-buttons">

      <a
        href="https://wa.me/917620144726"
        target="_blank"
        rel="noreferrer"
        className="float-btn whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>

      <a
        href="tel:+917620144726"
        className="float-btn call"
        aria-label="Call us"
      >
        <FaPhoneAlt />
      </a>

      <button
        className={`float-btn top ${showTop ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>

    </div>
  );
}

export default FloatingButtons;
