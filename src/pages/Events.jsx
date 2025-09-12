import React from "react";
import "../Css/Event.css";
import { useEffect,useState } from "react";
function Events() {
  const [current, setCurrent] = useState(null);
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
 const mainCards = [
   {
     cardImg: <div className="card-img1"></div>,
     button1: <button className="event-type-button">Technology</button>,
     heading: <h4>Tech Symposium 2026</h4>,
     text1: (
       <li>
         {" "}
         <i class="fa-regular fa-calendar"></i> January 15, 2026
       </li>
     ),
     text2: (
       <li>
         {" "}
         <i class="fa-regular fa-clock"></i> 10:00 AM - 4:00 PM
       </li>
     ),
     text3: (
       <li>
         {" "}
         <i class="fa-solid fa-location-dot"></i> Main Auditorium
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
     cardImg: <div className="card-img1"></div>,
     button1: <button className="event-type-button">Culture</button>,
     heading: <h4>Annual Cultural Festival</h4>,
     text1: (
       <li>
         {" "}
         <i class="fa-regular fa-calendar"></i> December 15-18, 2025
       </li>
     ),
     text2: (
       <li>
         {" "}
         <i class="fa-regular fa-clock"></i> All day
       </li>
     ),
     text3: (
       <li>
         {" "}
         <i class="fa-solid fa-location-dot"></i> College Campus
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
         <i class="fa-regular fa-calendar"></i> May 22, 2026
       </li>
     ),
     text2: (
       <li>
         {" "}
         <i class="fa-regular fa-clock"></i> 9:00 AM - 3:00 PM
       </li>
     ),
     text3: (
       <li>
         {" "}
         <i class="fa-solid fa-location-dot"></i> Sport Complex
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
         <i class="fa-regular fa-calendar"></i> February 16, 2026
       </li>
     ),
     text2: (
       <li>
         {" "}
         <i class="fa-regular fa-clock"></i>2:00 PM - 5:00 PM
       </li>
     ),
     text3: (
       <li>
         {" "}
         <i class="fa-solid fa-location-dot"></i>Science Building, Room 302
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
    <main className="the-main-event">
      <section className="cub-section">
        <h1 className="contact-heading">EVENTS</h1>
        <p className="cub-paragraph">
          HOME<span className="colorpara">/EVENTS</span>
        </p>
      </section>
      <h3
        className="upcoming-h3"
        style={{
          fontSize: "30px",
          color: "black",
          marginTop: "50px",
          maxWidth: "1100px",
          marginInline: "auto",

        }}
      >
        {" "}
        Upcoming Events
      </h3>
      <div
        className="buttonss"
        style={{
          display: "flex",
          gap: "15px",
        }}
      >
        <button>All</button>
        <button>Technology</button>
        <button>Culture</button>
        <button>Career</button>
        <button>Workshop</button>
      </div>
      <section className="all-event-cards">
        {mainCards.map((item, index) => (
          <div className="main-card" key={index}>
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
          </div>
        ))}
      </section>

      <section className="registration-deadline">
        <section className="mini-registration">
          <h4
            style={{
              fontSize: "18px",
              marginBottom: "20px",
            }}
          >
            {" "}
            <i class="fa-regular fa-clock"></i> Registration Deadline
            Approaching
          </h4>
          <div className="regis">
            {" "}
            <div>
              <h4 style={{ color: "black" }}>Annual Sports Championship</h4>
              <p>Registration closes: 12/10/2025</p>
            </div>{" "}
            <button>Register Now!</button>
          </div>
          <div className="regis">
            {" "}
            <div>
              <h4 style={{ color: "black" }}>AI & Machine Learning</h4>
              <p>Registration closes: 29/11/2025</p>
            </div>
            <button>Register Now!</button>
          </div>
          <div className="regis">
            {" "}
            <div>
              <h4 style={{ color: "black" }}>Spring Cultural Canival</h4>
              <p>Registration closes: 31/9/2025</p>
            </div>{" "}
            <button>Register Now!</button>
          </div>
        </section>
      </section>
      {current && (
        <section className="detail-container" onClick={() => setCurrent(null)}>
          <div
            className="detail-card"
            onClick={(e) => e.stopPropagation()}
          ></div>
          <div></div>
        </section>
      )}
    </main>
  );
}

export default Events;
