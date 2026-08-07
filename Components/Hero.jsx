import React from "react";
import "../Styles/Hero.css";
import VIDEO from "../Assets/Hero-video-play.mp4"


const Hero = () => {
  return (
     <section className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={VIDEO} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <div > */}
        <h1 className="hero-content">Your Trusted  <span className="company-name">Travel Company</span></h1>
      {/* </div> */}
    </section>
  );
};

export default Hero;