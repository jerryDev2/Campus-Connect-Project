import React from 'react'
import "../Css/Register.css"
import { useEffect } from 'react';
function Register() {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <main>
      <section className="cub-section registration-top">
        <h3
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "30px",
            paddingTop: "120px",
          }}
        >
          Register For Event
        </h3>
        <p
          className=".regis-first-para"
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "13px",
            
            marginInline: "auto",
          }}
        >
          Join our college events platform to register for events and stay
          updated{" "}
        </p>
      </section>

      <form className="registration-form">
        <label htmlFor="text"> Full Name</label>
        <input type="text" placeholder="Enter your full name" required />
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Enter your email" required />
        <label htmlFor="text">StudentID</label>
        <input
          type="text"
          required
          minLength={5}
          maxLength={15}
          placeholder="Enter your studentID"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          required
          minLength={4}
          maxLength={18}
          placeholder="Enter a password"
        />
        <label htmlFor="password"> Confirm Password</label>
        <input
          type="passworkd"
          required
          minLength={4}
          maxLength={18}
          placeholder="Confirm your password"
        />
        <button>Register</button>
      </form>
    </main>
  );
}

export default Register