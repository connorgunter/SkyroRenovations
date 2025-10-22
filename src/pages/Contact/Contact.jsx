import "./Contact.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Contact() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="main-content">
        <section className="contact-content">
          <div className="contact-info">
            <h1>Contact Us</h1>
            <p>
              Have a project in mind? We'd love to hear from you.
              <br />
              <br />
              Let’s elevate your space with craftsmanship &amp; class.
              <br />
              <br />
              <strong>📍</strong> 900 Industrial Blvd Unit 11B
              <br />
              Jensen Beach, FL 34957
              <br />
              <strong>🏷️ License:</strong> CBC 1263310
              <br />
              <strong>📞 Phone:</strong> (772) 353-1620
            </p>
          </div>

          <form
            className="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/thanks"               /* redirect after submit (optional) */
          >
            {/* Required hidden fields for Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden" style={{ display: "none" }}>
              <label>Don’t fill this out: <input name="bot-field" /></label>
            </p>

            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="tel" name="phone" placeholder="Your Phone Number" required />
            <textarea name="message" placeholder="Your Message" required />
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
