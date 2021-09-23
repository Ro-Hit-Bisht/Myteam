// Dependencies
import React from "react";

//Stylesheet
import "./HomeMain.scss";

//Component
import MainArticles from "./HomeMain_Articles/MainArticles";

function HomeMain() {
  return (
    <section id="Home_Main">
      <div id="Home_Main_Header">
        <div id="Home_Main_Dash"></div>
        <h2 id="Home_Main_Heading">
          Build & manage <br /> distributed teams <br /> like no one else.
        </h2>
      </div>
      <div id="Home_Main_Articles">
        <MainArticles />
      </div>
    </section>
  );
}

export default HomeMain;
