// Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Stylesheet
import "./ContactSection.scss";

function ContactSection() {
  return (
    <section id="Contact_Section">
      <h1 id="Contact_Section_Heading">Ready to get started?</h1>
      <button id="Contact_Section_Btn">
        <Link to="/contact">Contact us</Link>
      </button>
    </section>
  );
}

export default ContactSection;
