// Dependencies
import React from "react";

// Stylesheet
import "./AboutDirector.scss";

// Component
import DirectorCard from "./DirectorCard/DirectorCard";

function AboutDirector() {
  return (
    <section id="About_Director">
      <h1>Meet the directors</h1>
      <section id="Cards">
        <DirectorCard />
      </section>
    </section>
  );
}

export default AboutDirector;
