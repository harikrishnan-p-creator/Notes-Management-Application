// components/Contact.js

function Contact() {
  return (
    <section className="contact">
      <h1>Get in Touch</h1>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Scribly</h3>
          <p>Thrissur,Kerala India</p>
          <p>📞 +91 8897737510 </p>
          <p>✉️ scriblysupport@gmail.com</p>
          <p>
            Have questions, feedback, or suggestions? We'd love to hear from
            you.
          </p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Enter Your Name" />
          <input type="email" placeholder="Enter Your Email" />
          <textarea placeholder="Enter Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;