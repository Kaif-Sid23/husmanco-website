            import "./Founder.css";
import founderPhoto from "../../assets/images/founder.png";

function Founder() {
  return (
    <section className="founder" id="founder">

      <div className="founder-container">

        <div className="founder-image">

          <img src={founderPhoto} alt="Mr. Hanif Usman, Founder of H Usman & Co." />

        </div>

        <div className="founder-content">

          <span>FOUNDER & PROPRIETOR</span>

          <h2>Mr. Hanif Usman</h2>

          <h4>Chartered Accountant, FCA</h4>

          <p>
            Mr. Hanif Usman is a seasoned Chartered Accountant with over
            21 years of experience in Banking, Finance, Credit Risk,
            Corporate Banking, Trade Finance and Regulatory Compliance.
            Before founding H Usman & Co. in June 2020, he held key
            positions at Citigroup (via E-Serve International Ltd.),
            ICICI Bank, Barclays and IndusInd Bank, working closely with
            SMEs, mid-market enterprises and large corporates.
          </p>

          <p>
            He has represented and advised clients on complex Income Tax
            and GST matters, and has been actively involved in assessments,
            investigations, audits and appellate proceedings before tax
            authorities.
          </p>

          <div className="founder-details">

            <div>
              <strong>Experience</strong>
              <p>21+ Years</p>
            </div>

            <div>
              <strong>Background</strong>
              <p>Citigroup • ICICI • Barclays • IndusInd</p>
            </div>

          </div>

          <a href="#contact">Schedule Consultation</a>

        </div>

      </div>

    </section>
  );
}

export default Founder;