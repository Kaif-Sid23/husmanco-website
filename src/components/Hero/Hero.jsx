import "./Hero.css";
import founder from "../../assets/images/founder.png";
import {
  FaCheckCircle,
  FaArrowRight,
  FaPhoneAlt,
  FaUniversity,
  FaShieldAlt,
  FaBriefcase,
  FaAward,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background Shapes */}

      <div className="hero-circle hero-circle-1"></div>
      <div className="hero-circle hero-circle-2"></div>
      <div className="hero-grid"></div>

      <div className="hero-container">

        {/* ===========================
                LEFT CONTENT
        ============================ */}

        <div className="hero-left">

          <div className="hero-tag">

            <FaAward />

            <span>
              TRUSTED CHARTERED ACCOUNTANTS
            </span>

          </div>

          <h1>

            Helping Businesses

            <span> Grow with Confidence.</span>

          </h1>

          <h3>

            Chartered Accountancy • GST • Audit • Taxation •
            Regulatory Compliance • Business Advisory

          </h3>

          <p>

            <strong>H Usman & Co.</strong> is a professionally
            managed Chartered Accountancy firm established in
            2020 and led by <strong>Mr. Hanif Usman</strong>,
            bringing more than
            <strong> 21 years of Banking, Finance,
            Credit Risk, Regulatory Compliance and
            Business Advisory experience.</strong>

            <br /><br />

            We don't just help businesses remain compliant —
            we help them make informed financial decisions,
            reduce risk and build sustainable growth.

          </p>

          {/* ===========================
                  TRUST POINTS
          ============================ */}

          <div className="hero-highlights">

            <div className="highlight">

              <FaCheckCircle />

              <span>21+ Years Professional Experience</span>

            </div>

            <div className="highlight">

              <FaCheckCircle />

              <span>Business-Focused Financial Solutions</span>

            </div>

            <div className="highlight">

              <FaCheckCircle />

              <span>Trusted Banking & Finance Expertise</span>

            </div>

            <div className="highlight">

              <FaCheckCircle />

              <span>Serving SMEs, Corporates & Startups</span>

            </div>

          </div>

          {/* ===========================
                  SERVICE TAGS
          ============================ */}

          <div className="service-tags">

            <span>Income Tax</span>

            <span>GST Advisory</span>

            <span>Audit</span>

            <span>ROC Compliance</span>

            <span>Company Registration</span>

            <span>Risk Management</span>

            <span>Business Advisory</span>

            <span>Financial Consulting</span>

          </div>

          {/* ===========================
                    BUTTONS
          ============================ */}

          <div className="hero-buttons">

            <a
              href="#contact"
              className="primary-btn"
            >

              Book Consultation

              <FaArrowRight />

            </a>

            <a
              href="tel:+917620144726"
              className="secondary-btn"
            >

              <FaPhoneAlt />

              Call Now

            </a>

          </div>

          {/* ===========================
                     STATS
          ============================ */}

          <div className="stats">

            <div className="stat-box">

              <h2>21+</h2>

              <p>

                Years of
                <br />

                Professional Experience

              </p>

            </div>

            <div className="stat-box">

              <h2>2020</h2>

              <p>

                Established
                <br />

                Since

              </p>

            </div>

            <div className="stat-box">

              <h2>12+</h2>

              <p>

                Industries
                <br />

                Served

              </p>

            </div>

            <div className="stat-box">

              <h2>100%</h2>

              <p>

                Client
                <br />

                Commitment

              </p>

            </div>

          </div>

        </div>

        {/* ===========================
                RIGHT CONTENT
        ============================ */}
                <div className="hero-right">

          <div className="hero-image-wrapper">

            {/* Decorative Badge */}

            <div className="hero-badge">

              <FaShieldAlt />

              <span>Trusted Business Advisor</span>

            </div>

            {/* Founder Image */}

            <img
              src={founder}
              alt="Mr. Hanif Usman - Chartered Accountant"
              className="founder-image"
            />

            {/* Experience Card */}

            <div className="floating-card experience-card">

              <h2>21+</h2>

              <span>
                Years of Banking &
                Financial Expertise
              </span>

            </div>

            {/* Banking Experience */}

            <div className="floating-card banking-card">

              <div className="card-title">

                <FaUniversity />

                <span>Professional Journey</span>

              </div>

              <ul>

                <li>Citigroup</li>

                <li>ICICI Bank</li>

                <li>Barclays Bank</li>

                <li>IndusInd Bank</li>

              </ul>

            </div>

            {/* Advisory Card */}

            <div className="floating-card advisory-card">

              <FaBriefcase />

              <div>

                <h4>Business Advisory</h4>

                <p>

                  Audit • GST • Taxation

                  <br />

                  Compliance • Finance

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Hero;