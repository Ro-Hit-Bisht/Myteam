// Dependencies
import React from "react";

// Stylesheet
import "./AboutClient.scss";

// Assets
import verge from "../../Assets/logos/logo-the-verge.png";
import jakarta from "../../Assets/logos/logo-jakarta-post.png";
import guardian from "../../Assets/logos/logo-the-guardian.png";
import techradar from "../../Assets/logos/logo-tech-radar.png";
import gadgets from "../../Assets/logos/logo-gadgets-now.png";

function AboutClient() {
  return (
    <section id="About_Client">
      <h1>Some of our clients</h1>
      <section id="Clients">
        <img
          src={`${verge}#svgView(preserveAspectRatio(none))`}
          alt="The Verge"
        />
        <img
          src={`${jakarta}#svgView(preserveAspectRatio(none))`}
          alt="The Jakarta Post"
        />
        <img
          src={`${guardian}#svgView(preserveAspectRatio(none))`}
          alt="The Guardian"
        />
        <img
          src={`${techradar}#svgView(preserveAspectRatio(none))`}
          alt="Techradar"
        />
        <img
          src={`${gadgets}#svgView(preserveAspectRatio(none))`}
          alt="Gadgets Now"
        />
      </section>
    </section>
  );
}

export default AboutClient;
