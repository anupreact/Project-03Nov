import React from "react";
import "./Hero.scss";
import heroImg from "../../images/hero.png"

const Hero = () => {
  return (
    <div className="Hero">
      <div className="left">
        <h1>Hello Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quidem
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas ipsam
          nostrum accusantium. autem id?
        </p>
        <button> Get Started</button>
      </div>
      <div className="right">
        <img src={heroImg} alt="pic not added" />
      </div>
    </div>
  );
};

export default Hero;
