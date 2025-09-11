import React from "react";
import Logo from "../assets/images/logo.png";
import "../Css/Header.css";
import { Link } from "react-router-dom";
function Header() {
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
          <Link to={"/register"}>
            <button className="registerButton">Register Now!</button>
          </Link>
        </div>

        <button className="input">
          <i class="fa-solid fa-magnifying-glass"></i>
                  <input type="search" name="search" style={{ backgroundColor: "transparent", border:"none",outline:"none",padding:"10px",color:"white" }} />
        </button>
      </div>
    </header>
  );
}

export default Header;
