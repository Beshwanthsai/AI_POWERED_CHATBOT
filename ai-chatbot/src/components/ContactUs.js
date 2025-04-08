import React from 'react'

export default function ContactUs() {
  return (
    <>
      <card2>
        <div className="contact-container">
          <h2>Contact Us</h2>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message"></textarea>
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </card2>
    </>
  )
}
