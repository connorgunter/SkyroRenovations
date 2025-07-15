// src/Contact.jsx
import "./Contact.css";
import Navbar from "../../components/Navbar/Navbar";
function Contact() {
  return (
    <section id="contact" className="contact-section">
      <Navbar />
      <div className="contact-container">
        <h2>Contact Skyro Renovations</h2>
        <p>
          Let’s bring your next project to life. Reach out today or stop by our
          office.
        </p>

        <div className="contact-info">
          <p>
            <strong>Skyro Renovations LLC</strong>
          </p>
          <p>900 Industrial Blvd Unit 11B</p>
          <p>Jensen Beach, FL 34957</p>
          <p>License #: CBC 1263310</p>
          <p>
            Phone: <a href="tel:7723531620">(772) 353-1620</a>
          </p>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
