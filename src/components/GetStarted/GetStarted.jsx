import "./GetStarted.css";

function GetStarted() {
  return (
    <section className="get-started-section">
      <h2 className="get-started-heading">Ready to get started?</h2>
      <p className="get-started-subtext">
        Send us a message and we’ll get back to you shortly.
      </p>
      <form
        className="get-started-form"
        name="get-started"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="get-started" />
        <div className="form-row">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
        </div>
        <input type="text" name="phone" placeholder="Phone Number" required />
        <textarea
          name="message"
          placeholder="How can we help you?"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default GetStarted;
