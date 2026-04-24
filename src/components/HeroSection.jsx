import React from "react";
import "../Css/Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <main className="mainContainer">
      <motion.div
        className="descriptiveContainer"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Welcome to <span className="campusConnect">CampusConnect</span> - Your
          Gate Way to Campus Life
        </motion.h1>
        <motion.p
          className="descriptive"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Stay updated with all campus events, workshops, and activities. Never
          miss out on what's happening at Campus Connect.
        </motion.p>
        <motion.div
          className="hero-button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link to="/register">
            <motion.button whileHover={{ scale: 1.03 }} className="registerEvents">
              Register Events
            </motion.button>
          </Link>

          <Link to="/events">
            <motion.button whileHover={{ scale: 1.03 }} className="exploreEvent">
              Explore Event
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}

export default HeroSection;
