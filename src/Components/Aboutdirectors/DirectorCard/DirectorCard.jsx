// Dependencies
import React, { useState, useRef } from "react";

// Stylesheet
import "./DirectorCard.scss";

// Assets
import nikita from "../../../Assets/avatars/avatar-nikita.jpg";
import christian from "../../../Assets/avatars/avatar-christian.jpg";
import cruz from "../../../Assets/avatars/avatar-cruz.jpg";
import drake from "../../../Assets/avatars/avatar-drake.jpg";
import griffin from "../../../Assets/avatars/avatar-griffin.jpg";
import aden from "../../../Assets/avatars/avatar-aden.jpg";
import plus from "../../../Assets/svgs/icon-plus.svg";
import cross from "../../../Assets/svgs/icon-cross.svg";
import twitter from "../../../Assets/svgs/icon-twitter.svg";
import linkedin from "../../../Assets/svgs/icon-linkedin.svg";

const CardsDetail = [
  {
    id: 1,
    img: nikita,
    name: "Nikita Marks",
    position: "Founder & CEO",
    quotes:
      "“It always amazes me how much talent there is in every corner of the globe.”",
  },
  {
    id: 2,
    img: christian,
    name: "Cristian Duncan",
    position: "Co-founder & COO",
    quotes:
      "“Distributed teams required unique processes. You need to approach work in a new way.”",
  },
  {
    id: 3,
    img: cruz,
    name: "Cruz Hamer",
    position: "Co-founder & CTO",
    quotes:
      "“Technology is at the forefront of enabling distributed teams. That's where we come in.”",
  },
  {
    id: 4,
    img: drake,
    name: "Drake Heaton",
    position: "Business Development Lead",
    quotes:
      "“Hiring similar people from similar backgrounds is a surefire way to stunt innovation.”",
  },

  {
    id: 5,
    img: griffin,
    name: "Griffin Wise",
    position: "Lead Marketing",
    quotes:
      "“Unique perspectives shape unique products, which is what you need to survive these days.”",
  },
  {
    id: 6,
    img: aden,
    name: "Aden Allan",
    position: "Head of Talent",
    quotes:
      "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
  },
];

function Card(props) {
  const { img, name, position, quotes } = props;

  const [isFlip, setisFlip] = useState(false);

  const cardRef = useRef();
  const flipBtn = useRef();

  const Flip = () => {
    setisFlip(true);
    cardRef.current.style.transform = "rotateY(180deg)";
    flipBtn.current.style.backgroundColor = "#79c8c7";
  };

  const unFlip = () => {
    setisFlip(false);
    cardRef.current.style.transform = "rotateY(0deg)";
    flipBtn.current.style.backgroundColor = "#f67e7e";
  };

  return (
    <article className="Card_Container">
      <div className="Card" ref={cardRef}>
        <div className="Front_Face">
          <img className="Profil_Pic" src={img} alt={name} />
          <h3>{name}</h3>
          <p>{position}</p>
          <button ref={flipBtn} onClick={isFlip ? unFlip : Flip}>
            <img src={isFlip ? cross : plus} alt={isFlip ? "cross" : "plus"} />
          </button>
        </div>
        <div className="Back_Face">
          <h3>{name}</h3>
          <p>{quotes}</p>
          <ul>
            <li>
              <a href="https://www.twitter.com/">
                <img src={twitter} alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/">
                <img src={linkedin} alt="Linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}

const Cards = CardsDetail.map((CardDetail) => {
  const { id, img, name, position, quotes } = CardDetail;
  return (
    <Card
      key={id}
      id={id}
      img={img}
      name={name}
      position={position}
      quotes={quotes}
    />
  );
});

function DirectorCard(props) {
  return Cards;
}

export default DirectorCard;
