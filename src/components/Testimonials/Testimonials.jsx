import "./Testimonials.css";
import { FaQuoteLeft } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Mehta",
      company: "ABC Industries",
      review:
        "CA Husman & Co. has been our trusted financial advisor for over 7 years. Their professionalism and expertise are exceptional."
    },
    {
      name: "Ayesha Khan",
      company: "AK Enterprises",
      review:
        "Very responsive team. GST filing, taxation and audits are always completed on time without any hassle."
    },
    {
      name: "Mohammed Shaikh",
      company: "MS Traders",
      review:
        "Their consultancy helped us save tax and improve financial planning. Highly recommended."
    }
  ];

  return (
    <section className="testimonials" id="testimonials">

      <div className="section-title">
        <span>CLIENT TESTIMONIALS</span>
        <h2>What Our Clients Say</h2>
        <p>Trusted by businesses and professionals across industries.</p>
      </div>

      <div className="testimonial-container">

        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>

            <FaQuoteLeft className="quote" />

            <p>{item.review}</p>

            <h3>{item.name}</h3>

            <span>{item.company}</span>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Testimonials;