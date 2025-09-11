import React from 'react'
import Calendar from "../assets/images/calendar.png"
import arrowBtn from "../assets/images/Arrow.png"
function FeaturesSection() {
  return (
    <section className='featuresSection'>
      <div className='featuresCards card1'>
        {" "}
        <img src={Calendar} alt="" width={"25px"} />
        <h4>Discover</h4>
        <p>Discover upcoming events across all departments</p>
        <img src={arrowBtn} alt="" className="arrowBtn" />
      </div>
      <div className='featuresCards card2'>
        <img src={Calendar} alt="" width={"25px"} />
        <h4>Collaborate</h4>
        <p>Browse by categories - Technical, Culture, Sports</p>
        <img src={arrowBtn} alt="" className="arrowBtn" />
      </div>
      <div className='featuresCards card3'>
        <img src={Calendar} alt="" width={"25px"} />
        <h4>View</h4>
        <p>View detailed event information and galleries</p>
        <img src={arrowBtn} alt="" className="arrowBtn" />
      </div>
      <div className='featuresCards card4'>
        <img src={Calendar} alt="" width={"25px"} />
        <h4>Connect</h4>
        <p>Connect with event organizers and coordinators</p>
        <img src={arrowBtn} alt="" className="arrowBtn" />
      </div>
    </section>
  );
}

export default FeaturesSection