import "./Stats.css";
import { FaBriefcase, FaCalendarAlt, FaLayerGroup, FaUniversity } from "react-icons/fa";

function Stats() {

  const stats = [
    { icon: <FaBriefcase />, value: "21+", label: "Years of Professional Experience" },
    { icon: <FaCalendarAlt />, value: "2020", label: "Firm Established" },
    { icon: <FaLayerGroup />, value: "12+", label: "Industries Served" },
    { icon: <FaUniversity />, value: "6", label: "Core Practice Areas" },
  ];

  return (
    <section className="stats-section">

      <div className="stats-container">

        {stats.map((item, index) => (
          <div className="stats-box" key={index}>

            <div className="stats-icon">{item.icon}</div>

            <h2>{item.value}</h2>

            <p>{item.label}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Stats;
