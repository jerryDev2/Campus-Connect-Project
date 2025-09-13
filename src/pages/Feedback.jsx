import React from 'react'
import "../Css/Feedback.css"

function Feedback() {
  return (
    <main>
      <section className="cub-section">
        <h1 className="contact-heading">FEEDBACK</h1>
        <p className="cub-paragraph">
          HOME<span className="colorside">/FEEDBACK</span>
        </p>
      </section>
      <section className="certain">
        <h3 className="feed-event">Event FeedBack</h3>
        <p className="field">
          Your feedback helps us improve future events. Please share your
          thoughts with us!
        </p>
        <form className="form-elements">
          <div className="form-breaker">
            <div className="broken">
              <div>
                <label htmlFor="text">Your Name*</label>
                <input
                  type="text"
                  id="name"
                  className="backfrm"
                  placeholder="John Doe"
                  required
                  minLength={3}
                  maxLength={18}
                />
              </div>

              <div>
                <label htmlFor="">Your Email*</label>
                <input
                  type="Email"
                  id="email"
                  className="backfrm"
                  placeholder="JohnDoe@example.com"
                  required
                  minLength={3}
                  maxLength={25}
                />
                <br />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="">How Would You Rate This Event*</label>
            <br />
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </div>
          <div>
            <label htmlFor="">What Could We Improve For Future Events*</label>
            <input
              type="Text"
              id=""
              className="backspace"
              placeholder="Share what you like about the event..."
              required
            />
            <br />
          </div>
          <div>
            <label htmlFor="">What Could We Improve For Future Events*</label>
            <input
              type="Text"
              id=""
              className="backspace"
              placeholder="Share your suggestions for improvement..."
              required
            />
            <br />
          </div>
          <div>
            <label htmlFor="">Would You Recommend This Event To Others?*</label>
            <br />
            <div className="bttn">
              <input type="radio" className="btttn"  />
              <label>Yes,Definitely</label>
              <br />
            </div>

            <div className="bttn">
              <input type="radio" className="btttn"  />
              <label>Maybe</label>
              <br />
            </div>

            <div className="bttn">
              <input type="radio" className="btttn" />
              <label>No</label>
              <br />
            </div>

            <div>
              <label htmlFor="">Additional Comments(Optional)</label>
              <input
                type="Text"
                id=""
                className="backspace"
                placeholder="Any Other thoughts You would like to share..."
              />
              <br />
            </div>
            <button className="touch">Send Message</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Feedback