import React from 'react'

export default function Contact() {
  return (
    <section className="page contact-page container">
      <header className="hero small">
        <h1>Contact Us</h1>
        <p>Start your home search or request a consultation today.</p>
      </header>

      <div className="contact-grid">
        <form className="contact-form">
          <label>
            Name
            <input placeholder="Your name" />
          </label>
          <label>
            Email
            <input placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea placeholder="Tell us about your needs" />
          </label>
          <button className="btn">Send</button>
        </form>

        <aside className="contact-info">
          <h3>Office</h3>
          <p>123 Main Street<br/>Anytown, USA</p>
          <p>Phone: (555) 123-4567</p>
        </aside>
      </div>
    </section>
  )
}
