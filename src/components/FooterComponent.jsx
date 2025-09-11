import React from "react";
import Logo from "../assets/images/logo.png"
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
            <span>Phone:</span> +2347039434273
          </p>
          <p>
            {" "}
            <span>Email:</span> jerrydc56538@gmail.com
          </p>
        </div>
        <div className="quick-links">
          <h3>QUICK LINKS</h3>
          <li>Home</li>
          <li>About us</li>
          <li>Events</li>
          <li>Gallery</li>
          <li>Emergency Contact</li>
        </div>

        <div className="reach-us">
          <img src={Logo} alt="" />
          <div className="reach-us-div">
            <button>
              <i class="fa-brands fa-facebook-f"></i>
            </button>
            <button>
              <i class="fa-brands fa-twitter"></i>
            </button>
            <button>
              <i class="fa-brands fa-instagram"></i>
            </button>
            <button>
              <i class="fa-brands fa-whatsapp"></i>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default FooterComponent;
