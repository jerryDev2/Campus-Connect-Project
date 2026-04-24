import React from "react";
import CardImage1 from "../assets/images/studentsopenmouth.png";
import CardImage2 from "../assets/images/studentperforming.png";
import CardImage3 from "../assets/images/projectdefenceimg.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function UpComingEventComponent() {
  return (
    <motion.main
      className="upcomingEventsContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.55 }}
    >
      <div className="heading">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45 }}
        >
          Upcoming Events
        </motion.h2>
        <Link to="events">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            View all
          </motion.p>
        </Link>
      </div>
      <section className="upComingcardDiv">
        <motion.div
          className="UpComingcard"
          whileHover={{ y: -6 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <img src={CardImage1} alt="" />
          <h3>Cultural Events</h3>
          <p>
            Celebrate diversity through music, dance, drama, and art festivals
          </p>
          <Link to="/register">
            <button>Register Now</button>
          </Link>
        </motion.div>
        <motion.div
          className="UpComingcard"
          whileHover={{ y: -6 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <img src={CardImage3} alt="" />
          <h3> Academic Events</h3>
          <p>
            Attend workshops, seminars, and guest lectures by industry experts
            <pre> </pre>
          </p>
          <Link to="/register">
            <button>Register Now</button>
          </Link>
        </motion.div>
        <motion.div
          className="UpComingcard"
          whileHover={{ y: -6 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
        >
          <img src={CardImage2} alt="" />
          <h3>Sports Events</h3>
          <p>Compete in inter-college tournaments and fitness challenges</p>
          <Link to="/register">
            <button>Register Now</button>
          </Link>
        </motion.div>
      </section>
    </motion.main>
  );
}

export default UpComingEventComponent;
