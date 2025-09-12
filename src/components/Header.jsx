import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import "../Css/Header.css";
import { Link } from "react-router-dom";
function Header() {


  const [mobileNav, setMobileNav] = useState("Hide")
  
  const handleClick = () => {
    if (mobileNav === "Show") {
      setMobileNav("Hide");
    } else {
      setMobileNav("Show");
    }
  };


  return (
    <header className="headerContainer">
      <div className="miniHeader">
        <div className="navContainer">
          <img src={Logo} alt="" className="logo" />
          <ul className="ulContainer">
            <Link to={"/"}>
              <li>Home</li>
            </Link>

            <Link to={"/about-us"}>
              <li>About us</li>
            </Link>
            <Link to={"/events"}>
              <li> Events</li>
            </Link>

            <Link to={"/gallery"}>
              <li>Gallery</li>
            </Link>

            <Link to={"/feedback"}>
              <li>Feedback</li>
            </Link>
            <Link to={"/contact-us"}>
              {" "}
              <li>Contact us</li>
            </Link>
          </ul>
        </div>

        <Link to={"/register"}>
          <button className="registerButton">Register Now!</button>
        </Link>
        <i class="fa-solid fa-bars" onClick={handleClick}></i>
      </div>
      <ul
        className="mobile-nav"
        style={{
          display: mobileNav === "Hide" ? "none" : "block",
        }}
      >
        <Link to={"/"}>
          <li>Home</li>
        </Link>

        <Link to={"/about-us"}>
          <li>About us</li>
        </Link>
        <Link to={"/events"}>
          <li> Events</li>
        </Link>

        <Link to={"/gallery"}>
          <li>Gallery</li>
        </Link>

        <Link to={"/feedback"}>
          <li>Feedback</li>
        </Link>
        <Link to={"/contact-us"}>
          {" "}
          <li>Contact us</li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
