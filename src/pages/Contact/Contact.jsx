import "./Contact.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
function Contact() {
  return (
    <section className="contact-page">
      <Navbar />
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>We’d love to hear about your next renovation project.</p>
      </div>

      <div className="contact-content">
        <form
          className="contact-form"
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Skyro Renovations LLC</h3>
          <p>
            900 Industrial Blvd Unit 11B
            <br />
            Jensen Beach, FL 34957
          </p>
          <p>
            <strong>License:</strong> CBC 1263310
          </p>
          <p>
            <strong>Phone:</strong> (772) 353-1620
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Contact;
