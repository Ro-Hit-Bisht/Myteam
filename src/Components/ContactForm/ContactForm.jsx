import React from "react";

// Stylesheet
import "./ContactForm.scss";

// Assets
import svgman from "../../Assets/svgs/icon-person.svg";
import svgcog from "../../Assets/svgs/icon-cog.svg";
import svgchart from "../../Assets/svgs/icon-chart.svg";

function ContactForm() {
  return (
    <>
      <section id="Contact">
        <h1>Conatct</h1>
        <h2>Ask us about</h2>
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
      <section id="Contact_Form">
        <form action="" name="Contact_us">
          <input type="text" placeholder="Name" required />
          <span id="Error_Name"></span>
          <br />
          <br />
          <input type="email" placeholder="Email Address" required />
          <span id="Error_Email"></span>
          <br />
          <br />
          <input type="text" placeholder="Company Name" required />
          <span id="Error_Company_Name"></span>
          <br />
          <br />
          <input type="text" placeholder="Title" required />
          <span id="Error_Title"></span>
          <br />
          <br />
          <textarea
            name=""
            id=""
            rows="6"
            placeholder="Message"
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
}

export default ContactForm;
