import "./About.css";
import { FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">

      <div className="section-heading">
        <span>ABOUT US</span>
        <h2>Company Overview</h2>
      </div>

      <div className="about-overview">

        <p>
          H Usman & Co., Chartered Accountants is a professionally managed
          firm established in June 2020 with a vision to provide
          comprehensive, value-driven and practical financial, taxation,
          assurance and advisory services to businesses across diverse
          sectors. The firm was founded by a seasoned professional with
          more than 21 years of extensive experience in Banking, Finance,
          Risk Management, Credit Evaluation, Regulatory Compliance and
          Business Advisory Services.
        </p>

        <p>
          The foundation of the firm is built upon a strong understanding
          of the financial ecosystem, acquired through years of working
          with a wide spectrum of clients ranging from Small and Medium
          Enterprises (SMEs), Mid-Market Companies, Large Corporates,
          Multinational Organizations, Financial Institutions and
          Promoter-led Businesses. This broad exposure enables the firm to
          understand not only regulatory and compliance requirements but
          also the commercial realities and strategic challenges faced by
          businesses in today's dynamic environment.
        </p>

        <p>
          At H Usman & Co., we believe that professional services should
          not merely focus on statutory compliance but should also
          contribute to the overall growth, efficiency and sustainability
          of the client's business. Our approach combines technical
          expertise with commercial understanding to deliver solutions
          that are practical, effective and aligned with the client's
          long-term objectives.
        </p>

      </div>

      <div className="about-container">

        {/* Left */}

        <div className="about-image">

          <div className="experience-card">
            <h2>21+</h2>
            <span>Years Experience</span>
          </div>

        </div>

        {/* Right */}

        <div className="about-content">

          <span className="section-tag">
            WHY IT MATTERS
          </span>

          <h2>
            Banking-Trained Judgement, Applied to Compliance
          </h2>

          <p>
            That banking background means we don't just file your returns;
            we understand how lenders, regulators and auditors actually
            read your numbers.
          </p>

          <div className="about-grid">

            <div className="about-box">
              <FaCheckCircle />
              <span>Income Tax & GST</span>
            </div>

            <div className="about-box">
              <FaCheckCircle />
              <span>Audit & Assurance</span>
            </div>

            <div className="about-box">
              <FaCheckCircle />
              <span>ROC & Corporate Compliance</span>
            </div>

            <div className="about-box">
              <FaCheckCircle />
              <span>Banking & Risk Advisory</span>
            </div>

          </div>

          <a href="#founder" className="about-btn">
            Meet the Founder
          </a>

        </div>

      </div>

      <div className="vision-mission">

        <div className="vm-card">
          <h4>Our Vision</h4>
          <p>
            To be recognized as a trusted professional services firm
            providing innovative, reliable and value-added solutions
            that contribute to the growth and success of our clients.
          </p>
        </div>

        <div className="vm-card">
          <h4>Our Mission</h4>
          <p>
            To deliver high-quality assurance, taxation, compliance and
            advisory services through technical excellence, industry
            knowledge, ethical practices and a deep commitment to client
            success.
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;