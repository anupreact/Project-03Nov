import React from "react";
import "./Hero.scss";

const Hero = (props) => {
  const { title, description, image } = props;
  return (
    <div className="Hero">
      <div className="left">
        <h1>{title}</h1>
        <div className="para">

        <p>{description}</p>
        </div>
        <div className="btns">
        <button> Get Started</button>
        <button> Get Quote</button>
        </div>
      </div>
      <div className="right">
        <img src={image} alt="pic not added" />
      </div>
    </div>
  );
};

export default Hero;
