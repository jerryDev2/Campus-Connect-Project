import React from "react";
import Logo from "../assets/images/logo.png"
import { Link } from "react-router-dom";
function FooterComponent() {
  return (
    <main className="main-footer-container">
      <section className="footer-container">
        <div className="contact-us">
          <h3>CONTACT US</h3>
          <p>
            {" "}
            <span>Address:</span> 99b Austin Building, First East Circular road,
            Benin city Edo State
          </p>
          <p>
            {" "}
            <span>Phone:</span>{" "}
            <a
              href="tel:234703943427"
              style={{ textDecoration: "none", color: "white" }}
            >
              +2347039434273
            </a>
          </p>
          <p>
            {" "}
            <span>Email:</span>{" "}
            <a
              href="/jerrydc56538@gmail.com"
              style={{ textDecoration: "none", color: "white" }}
            >
              campusconnect38@gmail.com
            </a>
          </p>
        </div>
        <div className="quick-links">
          <h3>QUICK LINKS</h3>
          <Link to={"/"}>
            {" "}
            <li>Home</li>
          </Link>
          <Link to={"about-us"}>
            <li>About us</li>{" "}
          </Link>
          <Link to={"events"}>
            <li>Events</li>
          </Link>
          <Link to={"gallery"}>
            <li>Gallery</li>
          </Link>
          <Link to={"/contact-us"}>
            {" "}
            <li>Emergency Contact</li>
          </Link>
        </div>

        <div className="reach-us">
          <img src={Logo} alt="" />
          <div className="reach-us-div">
            <a
              href="https://web.facebook.com/profile.php?id=61580878556636"
              target="_blank"
              style={{
                color: "white",
              }}
            >
              <button>
                <i class="fa-brands fa-facebook-f"></i>
              </button>
            </a>
            <a
              href="https://x.com/campusconnect92"
              target="_blank"
              style={{
                color: "white",
              }}
            >
              <button>
                <i class="fa-brands fa-twitter"></i>
              </button>
            </a>
            <a
              href="https://www.instagram.com/campusconnect385/"
              target="_blank"
              style={{
                color: "white",
              }}
            >
              <button>
                <i class="fa-brands fa-instagram"></i>
              </button>
            </a>
            <a
              href="https://WA.ME/+2347039434273"
              target="_blank"
              style={{
                color: "white",
              }}
            >
              <button>
                <i class="fa-brands fa-whatsapp"></i>
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default FooterComponent;
