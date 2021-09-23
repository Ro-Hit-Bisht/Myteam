// Dependencies
import React, { useEffect } from "react";

// Stylesheet
import "./AboutHeader.scss";

function AboutHeader() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="About_Header">
      <h1 id="About_Header_Heading">About</h1>
      <section id="About_Header_Para">
        <div></div>
        <p>
          We help companies build dynamic teams made up of top global talent.
          Using our network of passionate professionals we drive innovation and
          deliver incredible outcomes. Talented, diverse teams shape the best
          products and experiences. We’ll bring those teams to you.
        </p>
      </section>
    </section>
  );
}

export default AboutHeader;
