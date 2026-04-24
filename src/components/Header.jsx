import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import "../Css/Header.css";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [mobileNav, setMobileNav] = useState("Hide");

  const handleClick = () => {
    setMobileNav((value) => (value === "Hide" ? "Show" : "Hide"));
  };

  const close = () => {
    if (mobileNav === "Show") {
      setMobileNav("Hide");
    }
  };

  return (
    <header className="headerContainer" onClick={close}>
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
              <li>Contact us</li>
            </Link>
          </ul>
        </div>

        <Link to={"/register"}>
          <motion.button
            whileHover={{ scale: 1.03 }}
            className="registerButton"
          >
            Register Now!
          </motion.button>
        </Link>
        <i className="fa-solid fa-bars" onClick={handleClick}></i>
      </div>
      <AnimatePresence>
        {mobileNav === "Show" && (
          <motion.ul
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
            style={{ overflow: "hidden" }}
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
              <li>Contact us</li>
            </Link>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
