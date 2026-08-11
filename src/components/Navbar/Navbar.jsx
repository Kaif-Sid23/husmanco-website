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

  /* ==========================================================
     SCROLL DETECTION
  ========================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ==========================================================
     CLOSE DROPDOWN WHEN CLICKING OUTSIDE
  ========================================================== */

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

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /* ==========================================================
     ESCAPE KEY
  ========================================================== */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /* ==========================================================
     NAVIGATION DATA
  ========================================================== */

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

  /* ==========================================================
     CLOSE ALL MENUS
  ========================================================== */

  const closeMenus = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  /* ==========================================================
     SERVICE CLICK
  ========================================================== */

  const handleServiceClick = (index) => {
    closeMenus();

    window.dispatchEvent(
      new CustomEvent("openService", {
        detail: index,
      })
    );
  };

  /* ==========================================================
     MOBILE MENU TOGGLE
  ========================================================== */

  const toggleMobileMenu = () => {
    setMenuOpen((previous) => !previous);
    setServicesOpen(false);
  };

  return (
    <>
      {/* ======================================================
          TOP INFORMATION BAR
      ====================================================== */}

      <div className="top-bar">
        <div className="top-container">

          {/* Office Address */}

          <div className="top-left">
            <FaMapMarkerAlt aria-hidden="true" />

            <span>
              B/16, Grace Plaza, Off S.V. Road, Agarwal Estate,
              Jogeshwari (W), Mumbai
            </span>
          </div>

          {/* Contact Information */}

          <div className="top-right">

            <a
              href="tel:+919833788522"
              aria-label="Call H Usman and Company"
            >
              <FaPhoneAlt aria-hidden="true" />
              <span>98337 88522</span>
            </a>

            <a
              href="mailto:cahanifusman@gmail.com"
              aria-label="Email H Usman and Company"
            >
              <FaEnvelope aria-hidden="true" />
              <span>cahanifusman@gmail.com</span>
            </a>

          </div>

        </div>
      </div>

      {/* ======================================================
          MAIN NAVBAR
      ====================================================== */}

      <nav
        className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
        aria-label="Main navigation"
      >

        <div className="nav-container">

          {/* ==================================================
              PREMIUM BRAND LOGO
          ================================================== */}

          <Link
            to="home"
            smooth
            duration={600}
            offset={-90}
            className="logo"
            aria-label="H Usman and Company - Home"
            onClick={closeMenus}
          >
            <img
              src={logo}
              alt="H Usman & Co. Chartered Accountants"
              className="navbar-logo"
              loading="eager"
              decoding="async"
            />
          </Link>

          {/* ==================================================
              NAVIGATION LINKS
          ================================================== */}

          <ul
            id="main-navigation"
            className={`nav-links ${menuOpen ? "active" : ""}`}
          >

            {/* Home + About */}

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

            {/* ==================================================
                SERVICES DROPDOWN
            ================================================== */}

            <li
              className="dropdown-parent"
              ref={dropdownRef}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >

              <button
                type="button"
                className="dropdown-trigger"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                aria-label="Open Services menu"
                onClick={() => setServicesOpen((previous) => !previous)}
              >
                <span>Services</span>

                <FaChevronDown
                  className={`dropdown-icon ${
                    servicesOpen ? "rotate" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              <ul
                className={`dropdown-menu ${
                  servicesOpen ? "show" : ""
                }`}
                aria-hidden={!servicesOpen}
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

            {/* Remaining navigation links */}

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

          {/* ==================================================
              DESKTOP CTA
          ================================================== */}

          <Link
            to="contact"
            smooth
            duration={600}
            offset={-90}
            className="schedule-btn"
            onClick={closeMenus}
          >
            Book Consultation
          </Link>

          {/* ==================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            className="menu-toggle"
            onClick={toggleMobileMenu}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
          >
            {menuOpen ? (
              <FaTimes aria-hidden="true" />
            ) : (
              <FaBars aria-hidden="true" />
            )}
          </button>

        </div>
      </nav>
    </>
  );
}

export default Navbar;