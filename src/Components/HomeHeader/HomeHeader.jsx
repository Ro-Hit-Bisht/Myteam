// Dependencies
import React, { useEffect } from "react";

// Stylesheet
import "./HomeHeader.scss";

function HomeHeader() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <section id="Home_Header">
      <h1 id="Home_Header_Heading">
        Find the <br /> best <mark>talent</mark>
      </h1>
      <section id="Home_Header_Para">
        <div></div>
        <p>
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </p>
      </section>
    </section>
  );
}

export default HomeHeader;
