import "./FAQ.css";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What services does H Usman & Co. offer?",
      a: "We offer Audit & Assurance, Taxation, GST, Corporate & Regulatory compliance, Banking & Financial Advisory, and Risk Management & Compliance services — see our full Services section above for details."
    },
    {
      q: "Do you work with startups and small businesses, or only large corporates?",
      a: "Both. Our clientele ranges from newly established start-ups and SMEs to mid-market companies and large corporates. Founder Hanif Usman's banking background means we understand businesses at every growth stage."
    },
    {
      q: "Can you help if my business is already under GST or Income Tax assessment/scrutiny?",
      a: "Yes. We regularly represent clients in assessments, investigations, audits and appellate proceedings before tax and GST authorities, including handling notices and litigation support."
    },
    {
      q: "Do you offer banking and financial advisory beyond standard CA services?",
      a: "Yes — this is one of our key differentiators. With 21+ years of banking experience across Citigroup, ICICI, Barclays and IndusInd, we advise on credit assessment, project finance, working capital, trade finance and debt syndication, not just compliance."
    },
    {
      q: "How do I get started or book a consultation?",
      a: "Simply use the Contact section below to send us a WhatsApp message, call us, or email us directly — we typically respond within one business day."
    },
  ];

  return (
    <section className="faq" id="faq">

      <div className="section-heading">
        <span>FAQS</span>
        <h2>Frequently Asked Questions</h2>
      </div>

      <div className="faq-container">

        {faqs.map((item, index) => (
          <div
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            key={index}
          >

            <button
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <span>{item.q}</span>
              <FaChevronDown className="faq-icon" />
            </button>

            <div className="faq-answer">
              <p>{item.a}</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default FAQ;
