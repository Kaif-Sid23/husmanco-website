import "./Industries.css";
import {
  FaIndustry, FaTruck, FaBuilding, FaRoad, FaShippingFast,
  FaLaptopCode, FaHeartbeat, FaGraduationCap, FaUserTie,
  FaShoppingCart, FaRocket, FaHandHoldingHeart
} from "react-icons/fa";

function Industries() {
  const industries = [
    { icon: <FaIndustry />, name: "Manufacturing" },
    { icon: <FaTruck />, name: "Trading & Distribution" },
    { icon: <FaBuilding />, name: "Real Estate & Construction" },
    { icon: <FaRoad />, name: "Infrastructure" },
    { icon: <FaShippingFast />, name: "Logistics & Transportation" },
    { icon: <FaLaptopCode />, name: "Information Technology" },
    { icon: <FaHeartbeat />, name: "Healthcare & Hospitals" },
    { icon: <FaGraduationCap />, name: "Education Institutions" },
    { icon: <FaUserTie />, name: "Professional Services" },
    { icon: <FaShoppingCart />, name: "Retail & E-commerce" },
    { icon: <FaRocket />, name: "Start-ups & Emerging Businesses" },
    { icon: <FaHandHoldingHeart />, name: "Non-Profits & Trusts" },
  ];

  return (
    <section className="industries" id="industries">

      <div className="section-heading">
        <span>WHO WE SERVE</span>
        <h2>Industries We Serve</h2>
        <p>
          From SMEs to large corporates, our clientele spans a wide range
          of sectors — each with its own compliance and financial nuances.
        </p>
      </div>

      <div className="industries-grid">
        {industries.map((item, index) => (
          <div className="industry-card" key={index}>
            <div className="industry-icon">{item.icon}</div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Industries;
