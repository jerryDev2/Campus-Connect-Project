import React, { useEffect, useState } from "react";
import "../Css/Event.css";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { eventDetails } from "../components/EventDetails";

function Events() {
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (current !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [current]);

  const mainCards = [
    {
      cardImg: <div className="card-img1"></div>,
      button1: <button className="event-type-button">Technology</button>,
      heading: <h4>Tech Symposium 2026</h4>,
      text1: (
        <li>
          {" "}
          <i className="fa-regular fa-calendar"></i> January 15, 2026
        </li>
      ),
      text2: (
        <li>
          {" "}
          <i className="fa-regular fa-clock"></i> 10:00 AM - 4:00 PM
        </li>
      ),
      text3: (
        <li>
          {" "}
          <i className="fa-solid fa-location-dot"></i> Main Auditorium
        </li>
      ),
      paragraph: (
        <p>
          Join us for a day of tech talk, workshop and networking opportunities
          with industry experts{" "}
        </p>
      ),
      button2: "View Details",
    },
    {
      cardImg: <div className="card-img2"></div>,
      button1: <button className="event-type-button">Culture</button>,
      heading: <h4>Annual Cultural Festival</h4>,
      text1: (
        <li>
          {" "}
          <i className="fa-regular fa-calendar"></i> December 15-18, 2025
        </li>
      ),
      text2: (
        <li>
          {" "}
          <i className="fa-regular fa-clock"></i> All day
        </li>
      ),
      text3: (
        <li>
          {" "}
          <i className="fa-solid fa-location-dot"></i> College Campus
        </li>
      ),
      paragraph: (
        <p>
          Three days of music , dance, art, and culture performances by student
          and invited artists.
        </p>
      ),

      button2: "View Details",
    },
    {
      cardImg: <div className="card-img3"></div>,

      button1: <button className="event-type-button"> Career</button>,
      heading: <h4>career Fair 2025</h4>,
      text1: (
        <li>
          {" "}
          <i className="fa-regular fa-calendar"></i> May 22, 2026
        </li>
      ),
      text2: (
        <li>
          {" "}
          <i className="fa-regular fa-clock"></i> 9:00 AM - 3:00 PM
        </li>
      ),
      text3: (
        <li>
          {" "}
          <i className="fa-solid fa-location-dot"></i> Sport Complex
        </li>
      ),
      paragraph: (
        <p style={{ width: "80%" }}>
          Connect with over 50 companies looking to hire interns and full-time
          employee
        </p>
      ),
      button2: "View Details",
    },
    {
      cardImg: <div className="card-img4"></div>,

      button1: <button className="event-type-button">Workshop</button>,
      heading: <h4>Environmental Awareness Workshop</h4>,
      text1: (
        <li>
          {" "}
          <i className="fa-regular fa-calendar"></i> February 16, 2026
        </li>
      ),
      text2: (
        <li>
          {" "}
          <i className="fa-regular fa-clock"></i>2:00 PM - 5:00 PM
        </li>
      ),
      text3: (
        <li>
          {" "}
          <i className="fa-solid fa-location-dot"></i>Science Building, Room 302
        </li>
      ),
      paragraph: (
        <p>
          Learn about sustainable practices and how you can contribute to
          environmental conservation.
        </p>
      ),
      button2: "View Details",
    },
  ];
  return (
    <motion.main
      className="the-main-event"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.55 }}
    >
      <motion.section
        className="cub-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <h1 className="contact-heading">EVENTS</h1>
        <p className="cub-paragraph">
          HOME<span className="colorpara">/EVENTS</span>
        </p>
      </motion.section>
      <motion.h3
        className="upcoming-h3"
        style={{
          fontSize: "30px",
          color: "black",
          marginTop: "50px",
          maxWidth: "1100px",
          marginInline: "auto",
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1 }}
      >
        Upcoming Events
      </motion.h3>
      <motion.div
        className="buttonss"
        style={{
          display: "flex",
          gap: "15px",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.18 }}
      >
        <button>Technology</button>
        <button>Culture</button>
        <button>Career</button>
        <button>Workshop</button>
      </motion.div>
      <section className="all-event-cards">
        {mainCards.map((item, index) => (
          <motion.div
            className="main-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ y: -8, boxShadow: "0px 18px 40px rgba(0,0,0,0.15)" }}
          >
            {item.cardImg}
            <div style={{ padding: "20px", listStyle: "none" }}>
              {item.button1}
              {item.text1}
              {item.text2}
              {item.text3}
              {item.paragraph}
              <button onClick={() => setCurrent(index)} className="view">
                {item.button2}
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      <motion.section
        className="registration-deadline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1 }}
      >
        <section className="mini-registration">
          <h4
            style={{
              fontSize: "18px",
              marginBottom: "20px",
            }}
          >
            <i className="fa-regular fa-clock"></i> Registration Deadline
            Approaching
          </h4>
          <div className="regis">
            <div>
              <h4 style={{ color: "black" }}>Annual Sports Championship</h4>
              <p>Registration closes: 12/10/2025</p>
            </div>
            <Link to="/register">
              <button>Register Now!</button>
            </Link>
          </div>
          <div className="regis">
            <div>
              <h4 style={{ color: "black" }}>AI & Machine Learning</h4>
              <p>Registration closes: 29/11/2025</p>
            </div>
            <Link to="/register">
              <button>Register Now!</button>
            </Link>
          </div>
          <div className="regis">
            <div>
              <h4 style={{ color: "black" }}>Spring Cultural Canival</h4>
              <p>Registration closes: 31/9/2025</p>
            </div>
            <Link to="/register">
              <button>Register Now!</button>
            </Link>
          </div>
        </section>
      </motion.section>

      <AnimatePresence>
        {current !== null && (
          <motion.section
            className="detail-container"
            onClick={() => setCurrent(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="detail-card"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 50, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <section className="upper-section">
                <img src={eventDetails[current]?.image} alt="" />
                <div className="upper-section-button">
                  <button>{eventDetails[current]?.category}</button>
                  <button className="other-button">Registration Open</button>
                </div>
                <h2 className="popout-title">{eventDetails[current]?.title}</h2>
                <p className="popout-para">
                  {eventDetails[current]?.department}
                </p>
                <li className="popout-list">
                  <i
                    className="fa-solid fa-calendar"
                    style={{ marginRight: "10px" }}
                  ></i>
                  {eventDetails[current]?.date} . {eventDetails[current]?.time}
                </li>
              </section>
              <div className="list-cont">
                <li className="list-one">Overview</li>
              </div>
              <section className="center-section">
                <div
                  style={{ display: "flex", gap: "10px" }}
                  className="loca-div"
                >
                  <div style={{ display: "flex" }} className="loc">
                    <i className="fa-solid fa-location-dot loc-icon"></i>
                    <div>
                      <p>Venue</p>
                      <p className="people">{eventDetails[current]?.venue}</p>
                    </div>
                  </div>
                  <div style={{ display: "flex" }} className="exp">
                    <i className="fa-solid fa-user loc-icon"></i>
                    <div>
                      <p>Expected</p>
                      <p className="people">500+ participants</p>
                    </div>
                  </div>
                  <div style={{ display: "flex" }} className="org">
                    <i className="fa-solid fa-table-columns loc-icon"></i>
                    <div>
                      <p>Organizer</p>
                      <p className="people">
                        {eventDetails[current]?.organizer}
                      </p>
                    </div>
                  </div>
                </div>
                <h3>About this event</h3>
                <p className="about-event-para">
                  {eventDetails[current]?.description}
                </p>
                <div className="regis-info">
                  <h3>Registration Information</h3>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      maxWidth: "500px",
                      marginTop: "20px",
                    }}
                  >
                    <h5>Registration fee:</h5>
                    <h5>Deadline:</h5>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      maxWidth: "500px",
                      marginBottom: "20px",
                    }}
                  >
                    <p style={{ fontSize: "12px" }}>
                      Free for students, N50,000 for external particpants
                    </p>
                    <p style={{ fontSize: "12px" }}>11/03/2025</p>
                  </div>
                </div>
                <div className="event-prize">
                  <h4> Prizes & Awards</h4>
                  <p>N1,000,000</p>
                </div>
              </section>
              <section className="bottom-section">
                <Link to="/register">
                  <button>Register Now</button>
                </Link>
              </section>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </motion.main>
  );
}

export default Events;
