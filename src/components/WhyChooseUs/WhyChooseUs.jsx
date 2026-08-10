import "./WhyChooseUs.css";
import {
  FaUserTie,
  FaShieldAlt,
  FaClock,
  FaChartLine,
} from "react-icons/fa";

function WhyChooseUs() {
  return (
    <section className="why-choose-us" id="why-choose-us">
      <div className="why-container">

        {/* =====================================================
            LEFT SIDE — EXPERIENCE PANEL
        ====================================================== */}

        <div className="why-image">

          {/* Decorative background elements */}
          <div className="why-image-glow"></div>
          <div className="why-image-pattern"></div>

          <div className="why-experience-content">
            <span className="why-experience-label">
              PROFESSIONAL EXPERIENCE
            </span>

            <div className="floating-card">
              <h2>21+</h2>
              <p>Years of Combined Expertise</p>
            </div>

            <div className="why-experience-caption">
              <span>Banking</span>
              <span>Finance</span>
              <span>Risk</span>
              <span>Compliance</span>
            </div>
          </div>

        </div>


        {/* =====================================================
            RIGHT SIDE — CONTENT
        ====================================================== */}

        <div className="why-content">

          <span className="why-section-tag">
            WHY CHOOSE US
          </span>

          <h2>
            Your Trusted Financial Partner For Every Stage Of Growth
          </h2>

          <p className="why-intro">
            At CA Husman & Co., we combine technical expertise with
            personalized attention to deliver financial solutions that help
            businesses grow with confidence.
          </p>


          {/* =================================================
              FEATURES
          ================================================= */}

          <div className="features">

            {/* Feature 1 */}
            <div className="feature">

              <div className="feature-icon">
                <FaUserTie />
              </div>

              <div className="feature-content">

                <h4>
                  Experienced Professionals
                </h4>

                <p>
                  Qualified Chartered Accountants with years of expertise.
                </p>

              </div>

            </div>


            {/* Feature 2 */}
            <div className="feature">

              <div className="feature-icon">
                <FaShieldAlt />
              </div>

              <div className="feature-content">

                <h4>
                  Complete Confidentiality
                </h4>

                <p>
                  Your business data is always secure and protected.
                </p>

              </div>

            </div>


            {/* Feature 3 */}
            <div className="feature">

              <div className="feature-icon">
                <FaClock />
              </div>

              <div className="feature-content">

                <h4>
                  On-Time Compliance
                </h4>

                <p>
                  Never miss statutory deadlines again.
                </p>

              </div>

            </div>


            {/* Feature 4 */}
            <div className="feature">

              <div className="feature-icon">
                <FaChartLine />
              </div>

              <div className="feature-content">

                <h4>
                  Business Growth
                </h4>

                <p>
                  Strategic advice for long-term financial success.
                </p>

              </div>

            </div>

          </div>


          {/* =================================================
              CTA
          ================================================= */}

          <a
            href="#services"
            className="learn-more-btn"
          >
            Learn More
          </a>

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;