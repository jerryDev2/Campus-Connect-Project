import React from "react";
import CardImage1 from "../assets/images/studentsopenmouth.png";
import CardImage2 from "../assets/images/studentperforming.png";
import CardImage3 from "../assets/images/projectdefenceimg.png";
import { Link } from "react-router-dom";
function UpComingEventComponent() {
  return (
    <main className="upcomingEventsContainer">
      <div className="heading">
        <h2>Upcoming Events</h2>
        <Link to={"events"}>
          <p>View all</p>
        </Link>
      </div>
      <section className="upComingcardDiv">
        <div className="UpComingcard">
          <img src={CardImage1} alt="" />
          <h3>Cultural Events</h3>
          <p>
            Celebrate diversity through music, dance, drama, and art festivals
          </p>
          <button>View Details</button>
        </div>
        <div className="UpComingcard">
          <img src={CardImage2} alt="" />
          <h3> Academic Events</h3>
          <p>
            Attend workshops, seminars, and guest lectures by industry experts
          </p>
          <button>View Details</button>
        </div>
        <div className="UpComingcard">
          <img src={CardImage3} alt="" /> <h3>Sports Events</h3>
          <p>Compete in inter-college tournaments and fitness challenges</p>
          <button>View Details</button>
        </div>
      </section>
    </main>
  );
}

export default UpComingEventComponent;
