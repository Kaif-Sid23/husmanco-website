import "./Footer.css";
import logo from "../../assets/images/logo.png";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-col">
          <img src={logo} alt="H Usman & Co." className="footer-logo" />
          <p>
            A professionally managed Chartered Accountancy firm delivering
            audit, taxation, GST, ROC and business advisory services since 2020.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#founder">Founder</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li>Audit & Assurance</li>
            <li>Taxation Services</li>
            <li>GST Compliance</li>
            <li>Corporate & Regulatory</li>
            <li>Banking & Risk Advisory</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="footer-contact">
            <li><FaMapMarkerAlt /> B/16, Grace Plaza, Off S V Road, Agarwal Estate, Jogeshwari (W), Mumbai – 400 102</li>
            <li><FaPhoneAlt /> <a href="tel:+98337 88522"> 98337 88522</a></li>
            <li><FaEnvelope /> <a href="mailto:cahanifusman@gmail.com">cahanifusman@gmail.com</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {year} H Usman & Co., Chartered Accountants. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;
