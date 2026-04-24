import React from "react";
import Calendar from "../assets/images/calendar.png";
import arrowBtn from "../assets/images/Arrow.png";
import { motion } from "framer-motion";

function FeaturesSection() {
  return (
    <section className="featuresSection">
      <motion.div
        className="featuresCards card1"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <img src={Calendar} alt="" width={"25px"} />
        <h4>Discover</h4>
        <p>Discover upcoming events across all departments</p>
        <img src={arrowBtn} alt="" className="arrowBtn" />
      </motion.div>
      <motion.div
        className="featuresCards card2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <img src={Calendar} alt="" width={"25px"} />
        <h4>Collaborate</h4>
        <p>Browse by categories - Technical, Culture, Sports</p>
        <img src={arrowBtn} alt="" className="arrowBtn" />
      </motion.div>
      <motion.div
        className="featuresCards card3"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <img src={Calendar} alt="" width={"25px"} />
        <h4>View</h4>
        <p>View detailed event information and galleries</p>
        <img src={arrowBtn} alt="" className="arrowBtn" />
      </motion.div>
      <motion.div
        className="featuresCards card4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <img src={Calendar} alt="" width={"25px"} />
        <h4>Connect</h4>
        <p>Connect with event organizers and coordinators</p>
        <img src={arrowBtn} alt="" className="arrowBtn" />
      </motion.div>
    </section>
  );
}

export default FeaturesSection;
