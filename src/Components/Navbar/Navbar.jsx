// Dependencies
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

// Stylesheet
import "./Navbar.scss";

// Assets
import logo from "../../Assets/svgs/logo.svg";
import burger from "../../Assets/svgs/icon-hamburger.svg";
import close from "../../Assets/svgs/icon-close.svg";

function Navbar(props) {
  const [NavbarOpen, setNavbarOpen] = useState(false);

  const sliderRef = useRef();

  const openSlider = () => {
    setNavbarOpen(true);

    document.body.style.height = "100%";
    document.body.style.overflowY = "hidden";
  };

  const closeSlider = () => {
    setNavbarOpen(false);

    document.body.style.height = "auto";
    document.body.style.overflowY = "visible";
  };

  return (
    <nav id="Nav">
      {/* Logo */}
      <img id="Logo" src={logo} alt="Logo" />

      {/* Start of Desktop  Navbar */}

      {/* Desktop Links */}
      <ul id="Desk_Link">
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

      <button id="Desk_Navbtn">
        <Link to="/contact">Contact us</Link>
      </button>

      {/* End of Desktop Navbar  */}

      {/* Start of Mobile Navbar */}

      {/*  Mobile Hamburger */}
      <img id="Mob_Nav_Burger" src={burger} alt="Burger" onClick={openSlider} />

      {/* Mobile Slider */}
      <section
        style={
          NavbarOpen
            ? {
                transform: "translateX(-100%)",
                display: "initial",
              }
            : {
                transform: "translateX(0%)",
                display: "none",
              }
        }
        id="Mob_Slider"
        ref={sliderRef}
      >
        <figure>
          <img
            id="Mob_Nav_Close"
            src={close}
            alt="Close"
            onClick={closeSlider}
          />
        </figure>
        <ul id="Mob_Link">
          <li>
            <Link
              style={{ color: props.homeColor }}
              onClick={closeSlider}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{ color: props.aboutColor }}
              onClick={closeSlider}
              to="/about"
            >
              About
            </Link>
          </li>
        </ul>
        <button id="Mob_Navbtn" onClick={closeSlider}>
          <Link to="/contact">Contact us</Link>
        </button>
      </section>

      {/* End of Mobile Navbar */}
    </nav>
  );
}

export default Navbar;
