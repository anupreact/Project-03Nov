import React from "react";
import { NavLink } from "react-router-dom";
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
          <NavLink to="/products">
            <button> Get Started</button>
          </NavLink>
          <NavLink to="/contact">
            <button> Get Quote</button>
          </NavLink>
        </div>
      </div>
      <div className="right">
        <img src={image} alt="pic not added" />
      </div>
    </div>
  );
};

export default Hero;
