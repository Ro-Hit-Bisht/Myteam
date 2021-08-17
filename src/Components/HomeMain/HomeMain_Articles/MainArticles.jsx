// Dependencies
import React from "react";

// stylesheet
import "./MainArticles.scss";

//Assets
import svgman from "../../../Assets/svgs/icon-person.svg";
import svgcog from "../../../Assets/svgs/icon-cog.svg";
import svgchart from "../../../Assets/svgs/icon-chart.svg";

const Articles = [
  {
    id: 1,
    img: svgman,
    imgalt: "man",
    topic: "Experienced Individuals",
    explained:
      "Our network is made up of highly experienced professionals who are passionate about what they do.",
  },
  {
    id: 2,
    img: svgcog,
    imgalt: "cog",
    topic: "Easy to Implement",
    explained:
      "Our processes have been refined over years of implementation meaning our teams always deliver.",
  },
  {
    id: 3,
    img: svgchart,
    imagalt: "chart",
    topic: "Enhanced Productivity",
    explained:
      "Our customized platform with in-built analytics helps you manage your distributed teams.",
  },
];

const newArticles = Articles.map((Article) => {
  const { id, img, imgalt, topic, explained } = Article;
  return (
    <article id="Home_Main_Article" key={id}>
      <img src={img} alt={imgalt} />
      <div>
        <h3>{topic}</h3>
        <br />
        <p>{explained}</p>
      </div>
    </article>
  );
});

function MainArticles() {
  return newArticles;
}

export default MainArticles;
