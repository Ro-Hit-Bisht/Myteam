// Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Stylesheet
import "./ContactSection.scss";

function ContactSection() {
  return (
    <>
      <h1 id="Contact_Section_Heading">Ready to get started</h1>
      <Link to="/contact">
        <button id="Contact_Section_Btn">Contact us</button>
      </Link>
    </>
  );
}

export default ContactSection;
