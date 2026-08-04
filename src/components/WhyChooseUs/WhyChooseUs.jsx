import "./WhyChooseUs.css";
import {
  FaUserTie,
  FaShieldAlt,
  FaClock,
  FaChartLine,
} from "react-icons/fa";

function WhyChooseUs() {
  return (
    <section className="why-us" id="whyus">

      <div className="why-container">

        {/* Left Side */}

        <div className="why-image">

          <div className="floating-card">

            <h2>21+</h2>

            <p>Years of Combined Expertise</p>

          </div>

        </div>

        {/* Right Side */}

        <div className="why-content">

          <span>WHY CHOOSE US</span>

          <h2>
            Your Trusted Financial Partner For Every Stage Of Growth
          </h2>

          <p>
            At CA Husman & Co., we combine technical expertise with
            personalized attention to deliver financial solutions that help
            businesses grow with confidence.
          </p>

          <div className="features">

            <div className="feature">
              <FaUserTie />
              <div>
                <h4>Experienced Professionals</h4>
                <p>Qualified Chartered Accountants with years of expertise.</p>
              </div>
            </div>

            <div className="feature">
              <FaShieldAlt />
              <div>
                <h4>Complete Confidentiality</h4>
                <p>Your business data is always secure and protected.</p>
              </div>
            </div>

            <div className="feature">
              <FaClock />
              <div>
                <h4>On-Time Compliance</h4>
                <p>Never miss statutory deadlines again.</p>
              </div>
            </div>

            <div className="feature">
              <FaChartLine />
              <div>
                <h4>Business Growth</h4>
                <p>Strategic advice for long-term financial success.</p>
              </div>
            </div>

          </div>

          <a href="#services" className="learn-more-btn">

            Learn More

          </a>

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;