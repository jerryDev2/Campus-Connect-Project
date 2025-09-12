import React from 'react'
import { useEffect } from 'react';
import "../Css/Aboutus.css"
function AboutUs() {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <main>
      <section className="cub-section">
        <h1 className="contact-heading">ABOUT US</h1>
        <p className="cub-paragraph">
          HOME<span className="colorpara">/ABOUT US</span>
        </p>
      </section>
      <section className="descrip-container">
        <div className="about-left-div">
          <p>
            Established in 2015, Campus Connect has been a beacon of academic
            excellence and innovation. Located in NYC, our campus is home to
            over 376 students across various disciplines including Engineering,
            Arts, Sciences, and Management.
          </p>
        </div>
        <div className="about-right-div"></div>
      </section>
      <section className='our-event-container'>
        <h3 className='our-event'> Our Events</h3>
        <div className='our-event-cards'>
          <section className='event-card'>
            <h4>Technical Events</h4>
            <p>
              From hackathons to project exhibitions, explore cutting-edge
              technology and innovation
            </p>
          </section>
          <section className='event-card'>
            <h4>Cultural Events</h4>
            <p>
              Celebrate diversity through music, dance, drama, and art festivals
            </p>
          </section>
          <section className='event-card'>
            {" "}
            <h4>Sports Events</h4>
            <p>Complete in inter-college tournaments and fitness challenges</p>
          </section>
          <section className='event-card'>
            <h4>Academic Events</h4>
            <p>
              Attend workshops, seminars, and guest lectures by industry experts
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}

export default AboutUs