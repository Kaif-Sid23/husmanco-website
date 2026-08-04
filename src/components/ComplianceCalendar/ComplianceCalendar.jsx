import "./ComplianceCalendar.css";
import { useState } from "react";
import { FaCalendarAlt, FaPrint } from "react-icons/fa";

function ComplianceCalendar() {

  const months = [
    {
      label: "April 2026",
      items: [
        { date: "7 Apr", tag: "TDS", desc: "TDS/TCS payment for March 2026" },
        { date: "11 Apr", tag: "GST", desc: "GSTR-1 for March 2026 (monthly filers)" },
        { date: "20 Apr", tag: "GST", desc: "GSTR-3B for March 2026" },
        { date: "30 Apr", tag: "TDS", desc: "TDS payment for March 2026 (government deductors)" },
      ]
    },
    {
      label: "May 2026",
      items: [
        { date: "7 May", tag: "TDS", desc: "TDS/TCS payment for April 2026" },
        { date: "11 May", tag: "GST", desc: "GSTR-1 for April 2026" },
        { date: "15 May", tag: "PF/ESI", desc: "PF & ESI payment for April 2026" },
        { date: "20 May", tag: "GST", desc: "GSTR-3B for April 2026" },
        { date: "31 May", tag: "TDS", desc: "TDS Return (Form 24Q/26Q/27Q) for Q4 FY 2025-26" },
      ]
    },
    {
      label: "June 2026",
      items: [
        { date: "7 Jun", tag: "TDS", desc: "TDS/TCS payment for May 2026" },
        { date: "11 Jun", tag: "GST", desc: "GSTR-1 for May 2026" },
        { date: "15 Jun", tag: "Income Tax", desc: "1st instalment of Advance Tax (15%) — FY 2026-27" },
        { date: "15 Jun", tag: "PF/ESI", desc: "PF & ESI payment for May 2026" },
        { date: "20 Jun", tag: "GST", desc: "GSTR-3B for May 2026" },
      ]
    },
    {
      label: "July 2026",
      items: [
        { date: "7 Jul", tag: "TDS", desc: "TDS/TCS payment for June 2026" },
        { date: "11 Jul", tag: "GST", desc: "GSTR-1 for June 2026" },
        { date: "15 Jul", tag: "PF/ESI", desc: "PF & ESI payment for June 2026" },
        { date: "20 Jul", tag: "GST", desc: "GSTR-3B for June 2026" },
        { date: "31 Jul", tag: "Income Tax", desc: "ITR filing — individuals & entities not requiring audit (AY 2026-27)" },
        { date: "31 Jul", tag: "TDS", desc: "TDS Return (Form 24Q/26Q/27Q) for Q1 FY 2026-27" },
      ]
    },
    {
      label: "August 2026",
      items: [
        { date: "7 Aug", tag: "TDS", desc: "TDS/TCS payment for July 2026" },
        { date: "11 Aug", tag: "GST", desc: "GSTR-1 for July 2026" },
        { date: "15 Aug", tag: "PF/ESI", desc: "PF & ESI payment for July 2026" },
        { date: "20 Aug", tag: "GST", desc: "GSTR-3B for July 2026" },
      ]
    },
    {
      label: "September 2026",
      items: [
        { date: "7 Sep", tag: "TDS", desc: "TDS/TCS payment for August 2026" },
        { date: "11 Sep", tag: "GST", desc: "GSTR-1 for August 2026" },
        { date: "15 Sep", tag: "Income Tax", desc: "2nd instalment of Advance Tax (45%) — FY 2026-27" },
        { date: "15 Sep", tag: "PF/ESI", desc: "PF & ESI payment for August 2026" },
        { date: "20 Sep", tag: "GST", desc: "GSTR-3B for August 2026" },
        { date: "30 Sep", tag: "Income Tax", desc: "Tax Audit Report filing (Form 3CA/3CB-3CD) — AY 2026-27" },
      ]
    },
    {
      label: "October 2026",
      items: [
        { date: "7 Oct", tag: "TDS", desc: "TDS/TCS payment for September 2026" },
        { date: "11 Oct", tag: "GST", desc: "GSTR-1 for September 2026" },
        { date: "15 Oct", tag: "PF/ESI", desc: "PF & ESI payment for September 2026" },
        { date: "20 Oct", tag: "GST", desc: "GSTR-3B for September 2026" },
        { date: "29-30 Oct", tag: "ROC", desc: "AOC-4 filing (within 30 days of AGM, indicative)" },
        { date: "31 Oct", tag: "Income Tax", desc: "ITR filing — assessees requiring audit (AY 2026-27)" },
        { date: "31 Oct", tag: "TDS", desc: "TDS Return (Form 24Q/26Q/27Q) for Q2 FY 2026-27" },
      ]
    },
    {
      label: "November 2026",
      items: [
        { date: "7 Nov", tag: "TDS", desc: "TDS/TCS payment for October 2026" },
        { date: "11 Nov", tag: "GST", desc: "GSTR-1 for October 2026" },
        { date: "15 Nov", tag: "PF/ESI", desc: "PF & ESI payment for October 2026" },
        { date: "20 Nov", tag: "GST", desc: "GSTR-3B for October 2026" },
        { date: "29-30 Nov", tag: "ROC", desc: "MGT-7/MGT-7A filing (within 60 days of AGM, indicative)" },
        { date: "30 Nov", tag: "Income Tax", desc: "ITR filing — transfer pricing cases (AY 2026-27)" },
      ]
    },
    {
      label: "December 2026",
      items: [
        { date: "7 Dec", tag: "TDS", desc: "TDS/TCS payment for November 2026" },
        { date: "11 Dec", tag: "GST", desc: "GSTR-1 for November 2026" },
        { date: "15 Dec", tag: "Income Tax", desc: "3rd instalment of Advance Tax (75%) — FY 2026-27" },
        { date: "15 Dec", tag: "PF/ESI", desc: "PF & ESI payment for November 2026" },
        { date: "20 Dec", tag: "GST", desc: "GSTR-3B for November 2026" },
      ]
    },
    {
      label: "January 2027",
      items: [
        { date: "7 Jan", tag: "TDS", desc: "TDS/TCS payment for December 2026" },
        { date: "11 Jan", tag: "GST", desc: "GSTR-1 for December 2026" },
        { date: "15 Jan", tag: "PF/ESI", desc: "PF & ESI payment for December 2026" },
        { date: "20 Jan", tag: "GST", desc: "GSTR-3B for December 2026" },
        { date: "31 Jan", tag: "TDS", desc: "TDS Return (Form 24Q/26Q/27Q) for Q3 FY 2026-27" },
      ]
    },
    {
      label: "February 2027",
      items: [
        { date: "7 Feb", tag: "TDS", desc: "TDS/TCS payment for January 2027" },
        { date: "11 Feb", tag: "GST", desc: "GSTR-1 for January 2027" },
        { date: "15 Feb", tag: "PF/ESI", desc: "PF & ESI payment for January 2027" },
        { date: "20 Feb", tag: "GST", desc: "GSTR-3B for January 2027" },
      ]
    },
    {
      label: "March 2027",
      items: [
        { date: "7 Mar", tag: "TDS", desc: "TDS/TCS payment for February 2027" },
        { date: "11 Mar", tag: "GST", desc: "GSTR-1 for February 2027" },
        { date: "15 Mar", tag: "Income Tax", desc: "4th & final instalment of Advance Tax (100%) — FY 2026-27" },
        { date: "15 Mar", tag: "PF/ESI", desc: "PF & ESI payment for February 2027" },
        { date: "20 Mar", tag: "GST", desc: "GSTR-3B for February 2027" },
        { date: "31 Mar", tag: "TDS", desc: "TDS payment for March 2027 (government deductors)" },
      ]
    },
  ];

  const tagColors = {
    "GST": "#173b72",
    "TDS": "#b5762a",
    "Income Tax": "#1d4f91",
    "ROC": "#5f8fd1",
    "PF/ESI": "#3f7a5c",
  };

  const [activeMonth, setActiveMonth] = useState(3); // default July 2026

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="compliance-calendar" id="compliance-calendar">

      <div className="section-heading">
        <span>OUR PROJECT</span>
        <h2>Compliance Calendar — FY 2026-27</h2>
        <p>
          A month-by-month tracker of key GST, TDS, Income Tax and ROC due
          dates for Financial Year 2026-27, so nothing slips through unnoticed.
        </p>
      </div>

      <div className="cc-tabs">
        {months.map((m, i) => (
          <button
            key={m.label}
            className={`cc-tab ${activeMonth === i ? "active" : ""}`}
            onClick={() => setActiveMonth(i)}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="cc-panel">

        <div className="cc-panel-header">
          <h3><FaCalendarAlt /> {months[activeMonth].label}</h3>
          <button className="cc-print-btn" onClick={handlePrint}>
            <FaPrint /> Print / Save as PDF
          </button>
        </div>

        <div className="cc-list">
          {months[activeMonth].items.map((item, i) => (
            <div className="cc-item" key={i}>
              <div className="cc-date">{item.date}</div>
              <span
                className="cc-tag"
                style={{ background: tagColors[item.tag] }}
              >
                {item.tag}
              </span>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>

      <p className="cc-disclaimer">
        Dates reflect standard, recurring statutory due dates and are for
        general guidance only. Government notifications can extend or revise
        deadlines — please confirm with us closer to any due date.
      </p>

    </section>
  );
}

export default ComplianceCalendar;
