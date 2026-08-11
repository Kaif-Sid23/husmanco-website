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

      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        className="hero-circle hero-circle-1"
        aria-hidden="true"
      ></div>

      <div
        className="hero-circle hero-circle-2"
        aria-hidden="true"
      ></div>

      <div
        className="hero-grid"
        aria-hidden="true"
      ></div>


      {/* =====================================================
          MAIN HERO CONTAINER
      ====================================================== */}

      <div className="hero-container">

        {/* ===================================================
            LEFT CONTENT
        ==================================================== */}

        <div className="hero-left">

          {/* Trust Badge */}

          <div className="hero-tag">

            <FaAward aria-hidden="true" />

            <span>
              TRUSTED CHARTERED ACCOUNTANTS
            </span>

          </div>


          {/* Main Heading */}

          <h1>

            Helping Businesses

            <span>
              Grow with Confidence.
            </span>

          </h1>


          {/* Service Summary */}

          <h3>
            Chartered Accountancy • GST • Audit • Taxation •
            Regulatory Compliance • Business Advisory
          </h3>


          {/* Company Introduction */}

          <p>

            <strong>H Usman & Co.</strong> is a professionally
            managed Chartered Accountancy firm established in
            2020 and led by <strong>Mr. Hanif Usman</strong>,
            bringing more than

            <strong>
              {" "}21 years of Banking, Finance,
              Credit Risk, Regulatory Compliance and
              Business Advisory experience.
            </strong>

            <br />
            <br />

            We don't just help businesses remain compliant —
            we help them make informed financial decisions,
            reduce risk and build sustainable growth.

          </p>


          {/* =================================================
              TRUST POINTS
          ================================================== */}

          <div className="hero-highlights">

            <div className="highlight">

              <FaCheckCircle aria-hidden="true" />

              <span>
                21+ Years Professional Experience
              </span>

            </div>


            <div className="highlight">

              <FaCheckCircle aria-hidden="true" />

              <span>
                Business-Focused Financial Solutions
              </span>

            </div>


            <div className="highlight">

              <FaCheckCircle aria-hidden="true" />

              <span>
                Trusted Banking & Finance Expertise
              </span>

            </div>


            <div className="highlight">

              <FaCheckCircle aria-hidden="true" />

              <span>
                Serving SMEs, Corporates & Startups
              </span>

            </div>

          </div>


          {/* =================================================
              SERVICE TAGS
          ================================================== */}

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


          {/* =================================================
              ACTION BUTTONS
          ================================================== */}

          <div className="hero-buttons">

            <a
              href="#contact"
              className="primary-btn"
            >
              <span>Book Consultation</span>
              <FaArrowRight aria-hidden="true" />
            </a>


            <a
              href="tel:+919833788522"
              className="secondary-btn"
            >
              <FaPhoneAlt aria-hidden="true" />
              <span>Call Now</span>
            </a>

          </div>


          {/* =================================================
              STATS
          ================================================== */}

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


        {/* ===================================================
            RIGHT CONTENT — FOUNDER IMAGE
        ==================================================== */}

        <div className="hero-right">

          <div className="hero-image-wrapper">


            {/* Trusted Advisor Badge */}

            <div className="hero-badge">

              <FaShieldAlt aria-hidden="true" />

              <span>
                Trusted Business Advisor
              </span>

            </div>


            {/* Founder Image */}

            <img
              src={founder}
              alt="Portrait of Mr. Hanif Usman, Chartered Accountant"
              className="founder-image"
              loading="eager"
              decoding="async"
            />


            {/* =================================================
                EXPERIENCE CARD
            ================================================== */}

            <div className="floating-card experience-card">

              <h2>21+</h2>

              <span>
                Years of Banking &
                <br />
                Financial Expertise
              </span>

            </div>


            {/* =================================================
                PROFESSIONAL JOURNEY CARD
            ================================================== */}

            <div className="floating-card banking-card">

              <div className="card-title">

                <FaUniversity aria-hidden="true" />

                <span>
                  Professional Journey
                </span>

              </div>


              <ul>

                <li>Citigroup</li>

                <li>ICICI Bank</li>

                <li>Barclays Bank</li>

                <li>IndusInd Bank</li>

              </ul>

            </div>


            {/* =================================================
                BUSINESS ADVISORY CARD
            ================================================== */}

            <div className="floating-card advisory-card">

              <FaBriefcase aria-hidden="true" />

              <div>

                <h4>
                  Business Advisory
                </h4>

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