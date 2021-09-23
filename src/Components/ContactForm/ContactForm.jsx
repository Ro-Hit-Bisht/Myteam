import React from "react";

// Stylesheet
import "./ContactForm.scss";

function ContactForm() {
  return (
    <section id="Contact_Form">
      <form action="" name="Contact_us">
        <input type="text" placeholder="Name" required />
        <span id="Error_Name"></span>

        <input type="email" placeholder="Email Address" required />
        <span id="Error_Email"></span>

        <input type="text" placeholder="Company Name" required />
        <span id="Error_Company_Name"></span>

        <input type="text" placeholder="Title" required />
        <span id="Error_Title"></span>

        <textarea rows="7" placeholder="Message" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
