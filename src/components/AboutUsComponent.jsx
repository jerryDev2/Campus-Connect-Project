import React from 'react'
import "../Css/Home.css"
import { Link } from 'react-router-dom';
function AboutUsComponent() {
    return (
      <main className="mainAboutus">
        <section className="aboutUsSection">
          <div className="leftContainer">
            <h2 className="aboutHeading">About Campus-Connect</h2>
            <p className="story">
              Established in 2015, Campus Connect has been a beacon of academic
              excellence and innovation. Located in NYC, our campus is home to
              over 376 students across various disciplines including
              Engineering, Arts, Sciences, and Management.
            </p>
            <Link to={"/about-us"}>
              <button className="learnMore">Learn More</button>
            </Link>
          </div>
          <div className="rightContainer"></div>
        </section>
      </main>
    );
}

export default AboutUsComponent