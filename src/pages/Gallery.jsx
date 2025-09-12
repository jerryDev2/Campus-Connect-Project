import React from "react";
import "../Css/Gallery.css"
import { useEffect } from "react";
function Gallery() {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <main>
      <section className="cub-section">
        <h1 className="contact-heading">EVENT GALLERY</h1>
        <p className="cub-paragraph">
          HOME<span className="colorpara">/EVENT GALLERY</span>
        </p>
      </section>

      <section className="all-gallery-card">
        {" "}
        <div className="gallery-card">
          <div className="gallery-img1"></div>
          <div
            style={{
              padding: "10px",
            }}
          >
            <h4>Tech Symposium 2023</h4>
            <p>Technology . January 22, 2023</p>
          </div>
        </div>
        <div className="gallery-card">
          <div className="gallery-img2"></div>
          <div
            style={{
              padding: "10px",
            }}
          >
            <h4>Tech Symposium 2022</h4>
            <p>Technology . January 17, 2022 </p>
          </div>
        </div>
        <div className="gallery-card">
          {" "}
          <div className="gallery-img3"></div>
          <div
            style={{
              padding: "10px",
            }}
          >
            <h4>Annual Cultural Festival</h4>{" "}
            <p>Cultural . December 2, 2022 </p>
          </div>
        </div>
        <div className="gallery-card">
          <div className="gallery-img4"></div>
          <div
            style={{
              padding: "10px",
            }}
          >
            <h4>Career Fair 2023</h4> <p>Career . April 22, 2023</p>
          </div>
        </div>
        <div className="gallery-card">
          {" "}
          <div className="gallery-img5"></div>
          <div
            style={{
              padding: "10px",
            }}
          >
            {" "}
            <h4>Annual Cultural Festival </h4>{" "}
            <p>Cultural . November 8-11, 2023</p>
          </div>
        </div>
        <div className="gallery-card">
          {" "}
          <div className="gallery-img6"></div>
          <div
            style={{
              padding: "10px",
            }}
          >
            <h4>Science Exhibition </h4> <p>Academic . August 18, 2024</p>
          </div>
        </div>
        <div className="gallery-card">
          {" "}
          <div className="gallery-img7"></div>
          <div
            style={{
              padding: "10px",
            }}
          >
            <h4>Sports Tournament </h4>
            <p>Sports . September 9, 2024 </p>
          </div>
        </div>
        <div className="gallery-card">
          <div className="gallery-img8"></div>
          <div
            style={{
              padding: "10px",
            }}
          >
            <h4>Environment Awareness Workshop</h4>
            <p>Workshop . June 21, 2022</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Gallery;
