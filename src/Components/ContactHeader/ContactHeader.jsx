// Dependencies
import React, { useEffect } from "react";

// Stylesheet
import "./ContactHeader.scss";

// Assets
import svgman from "../../Assets/svgs/icon-person.svg";
import svgcog from "../../Assets/svgs/icon-cog.svg";
import svgchart from "../../Assets/svgs/icon-chart.svg";

function ContactHeader() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="Contact_Header">
      <h1>Contact</h1>
      <h2>Ask us about</h2>
      <section id="Divs">
        <div>
          <img src={svgman} alt="person svg" />
          <h3>The quality of our talent network</h3>
        </div>
        <div>
          <img src={svgcog} alt="cog svg" />
          <h3>Usage & implementation of our software</h3>
        </div>
        <div>
          <img src={svgchart} alt="chart svg" />
          <h3>How we help drive innovation</h3>
        </div>
      </section>
    </section>
  );
}

export default ContactHeader;
