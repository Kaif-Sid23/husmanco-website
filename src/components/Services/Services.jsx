import "./Services.css";
import { useState, useEffect } from "react";
import {
  FaBalanceScale,
  FaFileInvoiceDollar,
  FaBuilding,
  FaUniversity,
  FaShieldAlt,
  FaSearchDollar,
  FaChevronDown
} from "react-icons/fa";

function Services() {

  const [openIndex, setOpenIndex] = useState(null);

  const services = [
    {
      icon: <FaSearchDollar />,
      title: "Audit & Assurance",
      desc: "Independent, thorough assurance built on real commercial understanding.",
      items: [
        "Statutory Audits", "Tax Audits", "Internal Audits", "Management Audits",
        "Concurrent Audits", "Stock & Receivable Audits", "Due Diligence Reviews",
        "Forensic Audits & Investigations", "Compliance Audits", "Risk-Based Audits"
      ]
    },
    {
      icon: <FaBalanceScale />,
      title: "Taxation Services",
      desc: "End-to-end direct tax advisory, planning and representation.",
      items: [
        "Income Tax Advisory & Compliance", "Corporate Tax Planning",
        "Tax Representation before Authorities", "Tax Assessments & Appeals",
        "TDS Compliance & Advisory", "International Taxation Advisory", "NRI Taxation Services"
      ]
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: "GST (Goods & Services Tax)",
      desc: "Registration through litigation — complete GST lifecycle support.",
      items: [
        "GST Registration & Compliance", "GST Advisory & Litigation Support",
        "GST Audits & Reviews", "Refund Applications", "GST Assessments & Appeals",
        "Input Tax Credit Reviews", "GST Health Checks & Risk Assessments"
      ]
    },
    {
      icon: <FaBuilding />,
      title: "Corporate & Regulatory",
      desc: "Structuring and compliance for companies, LLPs and partnerships.",
      items: [
        "Company Incorporation & Structuring", "LLP & Partnership Advisory",
        "Corporate Governance Support", "FEMA & RBI Compliance",
        "Secretarial & Regulatory Compliance", "ROC Filing & Compliance Management"
      ]
    },
    {
      icon: <FaUniversity />,
      title: "Banking & Financial Advisory",
      desc: "21+ years of banking-side experience, now working for you.",
      items: [
        "Credit Assessment & Financial Analysis", "Project Finance Advisory",
        "Working Capital Assessment", "Debt Syndication Support",
        "Banking Documentation & Compliance", "Trade Finance Structuring",
        "Financial Restructuring Advisory"
      ]
    },
    {
      icon: <FaShieldAlt />,
      title: "Risk Management & Compliance",
      desc: "Building controls that protect the business, not just satisfy auditors.",
      items: [
        "Enterprise Risk Assessment", "Regulatory Compliance Reviews",
        "Internal Control Framework Design", "Fraud Risk Management",
        "Anti-Money Laundering (AML) Compliance", "Process Improvement & Control Reviews"
      ]
    }
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handler = (e) => setOpenIndex(e.detail);
    window.addEventListener("openService", handler);
    return () => window.removeEventListener("openService", handler);
  }, []);

  return (

    <section className="services" id="services">

      <div className="section-heading">

        <span>OUR SERVICES</span>

        <h2>Professional Services Tailored For Your Business</h2>

        <p>
          Six core practice areas built on 21+ years of banking and financial
          services experience. Tap any service to see exactly what's included.
        </p>

      </div>

      <div className="services-grid">

        {services.map((service, index) => (

          <div
            className={`service-card ${openIndex === index ? "open" : ""}`}
            key={index}
          >

            <button className="service-card-header" onClick={() => toggle(index)}>

              <div className="icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.desc}</p>

              <FaChevronDown className="expand-icon" />

            </button>

            <div className="service-card-body">
              <ul>
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <a href="#contact" className="enquire-link">Enquire About This →</a>
            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Services;
