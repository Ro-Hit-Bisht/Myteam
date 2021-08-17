// Dependencies
import React from "react";

// Stylesheet
import "./HomeStories.scss";

// Component
import Stories from "./Stories_Section/Stories";

function HomeStories() {
  return (
    <section id="Home_Stories">
      <h1>
        Delivering real results for top companies. Some of our{" "}
        <mark> success stories.</mark>
      </h1>
      <section id="Home_Stories_Articles">
        <Stories />
      </section>
    </section>
  );
}

export default HomeStories;
