import React from 'react'
import Logo from "../assets/images/logo.png"
import "./Css/Header.css"
function Header() {
    return (
      <header className="headerContainer">
        <div className='miniHeader'>
          <div className="navContainer">
            <img src={Logo} alt="" className="logo" />
            <ul className="ulContainer">
              <li>Home</li>
              <li>About us</li>
              <li> Event</li>
              <li>Gallery</li>
              <li>Feedback</li>
              <li>Contact us</li>
            </ul>
            <button className="registerButton">Register Now!</button>
          </div>

          <button className="input">
            {" "}
            <i class="fa-solid fa-magnifying-glass"></i> Search...
          </button>
        </div>
      </header>
    );
}

export default Header