import React from 'react'
import "../Css/Contact.css"
import MapEmbed from '../components/MapEmbed'
function Contact() {
  return (
    <main>
      <section className="cub-section">
        <h1 className='contact-heading'>CONTACT US</h1>
        <p className="cub-paragraph">
          HOME<span className='colorpara'>/CONTACT US</span>
        </p>
      </section>
      <section className="contain">
        <h3 className="get-intouch">Get In Touch</h3>
        <p className="details">
          Connect with our event coordinators and organizing committees,we are
          here to help you with all your campus event needs.
        </p>
      </section>
      <section className="bar">
        <div className="box">
          <button className="mail">
            <i class="fa-solid fa-envelope"></i>
          </button>
          <h4>Email Us</h4>
          <p className="ash">
            campusConnect34@gmail.com Response within 24 hours
          </p>
        </div>
        <div className="box">
          <button className="mail">
            <i class="fa-solid fa-phone"></i>
          </button>
          <h4>Call Us</h4>
          <p className="ash">+234-8071370987 Mon-Fri 9AM-5PM</p>
        </div>
        <div className="box">
          <button className="mail">
            <i class="fa-solid fa-location-dot"></i>
          </button>
          <h4>Visit Us</h4>
          <p className="ash">Student Activity Centre Ground Floor</p>
        </div>
      </section>
      <section className="contact-container ">
        <h3 className="quick">Quick Inquiry</h3>
        <p className="det">Have A Question? Send Us A Message</p>
        <form className="form-container">
          <div className="form-break">
            <div>
              <label htmlFor="">Enter Your Name*</label>
              <input type="text" id="name" className="input" />{" "}
            </div>

            <div>
              <label htmlFor="">Email Address*</label>
              <input type="Email" id="email" className="input" />
            </div>
          </div>
          <div className="form-break">
            <div>
              <label htmlFor="">Phone Number</label>
              <input type="number" id="phonenumber" className="input" />
            </div>

            <div>
              <label htmlFor="">You Are A:</label>
              <input
                type="text"
                id=""
                placeholder="select..."
                className="input"
              />
              <br />
            </div>
          </div>

          <label htmlFor="">Inquiry Type:</label>
          <br />
          <input type="text" id="" placeholder="select..." className="input" />
          <br />

          <label htmlFor="">Subject*</label>
          <br />
          <input type="text" id="" className="input" />
          <br />

          <label htmlFor="">Message*</label>
          <br />
          <input type="Text" id="" className="open input"  />
          <br />

          <button className="mssg">Send Message</button>
        </form>
      </section>
      <section className="contact-location">
        <h2 className="camp">Find Us On Campus</h2>
        <div className="mapembed">
          <div>
            <h3 className="detail-info">Campus Information</h3>
            <h4 className="off">Main Office Address</h4>
            <p className="location">
              Campus Connect Event Management Office Ground Floor, Student
              Activity Center Aptech Benin 99B Austin building,First East
              Circular road Benin-City Edo State 12345
            </p>
            <h4 className="off">Office Hours</h4>
            <p className="location">
              Monday-Friday: 9:00AM - 5:00 PM Saturday: 10:00AM - 2:00PM Sunday:
              Closed
            </p>
            <h4 className="off">Emergency Support</h4>
            <p className="location">
              24/7 Helpline: +234 (0) 8071370987 Emergency Email:
              divinefavouroni@gmail.com
            </p>
          </div>
          <div>
            <MapEmbed />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact