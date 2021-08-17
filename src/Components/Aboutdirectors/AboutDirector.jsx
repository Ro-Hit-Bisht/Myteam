// Dependencies
import React from "react";

// Stylesheet
import "./AboutDirector.scss";

// Component
import DirectorCard from "./DirectorCard/DirectorCard";

function AboutDirector() {

  return (
    <section id="About_Director">
      <article id="Grid1">
        <h1>Meet the directors</h1>
      </article>
      <DirectorCard  />
    </section>
  );
}

export default AboutDirector;
