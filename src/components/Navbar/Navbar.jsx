import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Industries", to: "industries" },
    { name: "Compliance", to: "compliance-calendar" },
    { name: "Founder", to: "founder" },
    { name: "FAQs", to: "faq" },
    { name: "Contact", to: "contact" },
  ];

  const serviceLinks = [
    "Audit & Assurance",
    "Taxation Services",
    "GST",
    "Corporate & Regulatory",
    "Banking & Financial Advisory",
    "Risk Management & Compliance",
  ];

  const closeMenus = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const handleServiceClick = (index) => {
    closeMenus();

    window.dispatchEvent(
      new CustomEvent("openService", {
        detail: index,
      })
    );
  };

  return (
    <>
      {/* ================= TOP BAR ================= */}

      <div className="top-bar">

        <div className="top-container">

          <div className="top-left">

            <FaMapMarkerAlt />

            <span>
              B/16, Grace Plaza, Off S.V. Road, Agarwal Estate,
              Jogeshwari (W), Mumbai
            </span>

          </div>

          <div className="top-right">

            <a href="tel:+917620144726">

              <FaPhoneAlt />

              <span>076201 44726</span>

            </a>

            <a href="mailto:ca.husman@gmail.com">

              <FaEnvelope />

              <span>ca.husman@gmail.com</span>

            </a>

          </div>

        </div>

      </div>

      {/* ================= NAVBAR ================= */}

      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

        <div className="nav-container">

          {/* Logo */}

          <div className="logo">

            <img
              src={logo}
              alt="H Usman & Co Chartered Accountants"
            />

          </div>

          {/* Navigation */}

          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

            {navLinks.slice(0, 2).map((item) => (

              <li key={item.to}>

                <Link
                  to={item.to}
                  smooth
                  spy
                  duration={600}
                  offset={-90}
                  activeClass="active-link"
                  onClick={closeMenus}
                >
                  {item.name}
                </Link>

              </li>

            ))}

            {/* Services Dropdown */}

            <li
              className="dropdown-parent"
              ref={dropdownRef}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >

              <button
                className="dropdown-trigger"
                type="button"
                aria-expanded={servicesOpen}
                aria-label="Services Menu"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services

                <FaChevronDown
                  className={`dropdown-icon ${
                    servicesOpen ? "rotate" : ""
                  }`}
                />

              </button>

              <ul
                className={`dropdown-menu ${
                  servicesOpen ? "show" : ""
                }`}
              >

                {serviceLinks.map((service, index) => (

                  <li key={service}>

                    <Link
                      to="services"
                      smooth
                      duration={600}
                      offset={-90}
                      onClick={() => handleServiceClick(index)}
                    >
                      {service}
                    </Link>

                  </li>

                ))}

              </ul>

            </li>

            {navLinks.slice(2).map((item) => (

              <li key={item.to}>

                <Link
                  to={item.to}
                  smooth
                  spy
                  duration={600}
                  offset={-90}
                  activeClass="active-link"
                  onClick={closeMenus}
                >
                  {item.name}
                </Link>

              </li>

            ))}

          </ul>

          {/* CTA */}

          <Link
            to="contact"
            smooth
            duration={600}
            offset={-90}
            className="schedule-btn"
          >
            Book Consultation
          </Link>

          {/* Mobile Button */}

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Navigation"
            aria-expanded={menuOpen}
          >

            {menuOpen ? <FaTimes /> : <FaBars />}

          </button>

        </div>

      </nav>
    </>
  );
}

export default Navbar;