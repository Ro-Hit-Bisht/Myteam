// Dependencies
import React from "react";

// stylesheet
import "./Stories.scss";

// Assets
import kady from "../../../Assets/avatars/avatar-kady.jpg";
import aiysha from "../../../Assets/avatars/avatar-aiysha.jpg";
import arthur from "../../../Assets/avatars/avatar-arthur.jpg";

const StoriesArray = [
  {
    id: 1,
    description:
      "“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”",
    name: "Kady Baker",
    job_position: "Product Manager at Bookmark",
    img: kady,
  },
  {
    id: 2,
    description:
      "“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”",
    name: "Aiysha Reese",
    job_position: "Founder of Manage",
    img: aiysha,
  },
  {
    id: 3,
    description:
      "“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”",
    name: "Arthur Clarke",
    job_position: "Co-founder of MyPhysio",
    img: arthur,
  },
];

const newStoriesArray = StoriesArray.map((Story) => {
  const { id, description, name, job_position, img } = Story;
  return (
    <article id="Home_Stories_Article" key={id}>
      <p id="description">{description}</p>
      <br />
      <h4 id="name">{name}</h4>
      <br />
      <p id="job_position">{job_position}</p>
      <br />
      <img src={img} alt={name} />
    </article>
  );
});

const Stories = () => {
  return newStoriesArray;
};

export default Stories;
