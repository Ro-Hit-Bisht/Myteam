// Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Stylesheet
import "./Footer.scss";

// Assets
import logo from "../../Assets/svgs/logo.svg";
import facebook from "../../Assets/svgs/icon-facebook.svg";
import pinterest from "../../Assets/svgs/icon-pinterest.svg";
import twitter from "../../Assets/svgs/icon-twitter.svg";

function Footer(props) {
  return (
    <>
      <section id="Logo_Link">
        <img src={logo} alt="Logo" />
        <ul>
          <li>
            <Link style={{ color: props.homeColor }} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={{ color: props.aboutColor }} to="/about">
              About
            </Link>
          </li>
        </ul>
      </section>
      <p id="Contact_Info">
        987 Hillcrest Lane <br /> Irvine, CA <br /> California 92714 <br /> Call
        Us : 949-833-7432
      </p>
      <section id="Social_Links">
        <ul>
          <li>
            <a href="https://www.facebook.com/">
              <img className="LOGO"src={facebook} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="www.pinterest.com">
              <img src={pinterest} alt="pinterest" />
            </a>
          </li>
          <li>
            <a href="www.twitter.com">
              <img src={twitter} alt="twitter" />
            </a>
          </li>
        </ul>
        <p id="Copyright_Tag">Copyright 2020. All Rights Reserved</p>
      </section>
    </>
  );
}

export default Footer;
