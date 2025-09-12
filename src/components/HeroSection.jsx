import React from "react";
import "../Css/Home.css";
import { Link } from "react-router-dom";
function HeroSection() {
  return (
    <main className="mainContainer">
      <div className="descriptiveContainer">
        <h1>
          Welcome to <span className="campusConnect">CampusConnect</span> - Your
          Gate Way to Campus Life
        </h1>
        <p className="descriptive">
          Stay updated with all campus events, workshops, and activities. Never
          miss out on what's happening at Campus Connect.
        </p>
        <div className="hero-button">
          <Link to={"/register"}>
            <button className="registerEvents">Register Events</button>
          </Link>

          <Link to={"/events"}>
            <button className="exploreEvent">Explore Event</button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
