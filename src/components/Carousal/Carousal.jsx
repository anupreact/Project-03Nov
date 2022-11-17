import React from "react";
import Slider from "react-slick";
import "./Carousal.scss";

import Hero from "../Hero/Hero";
import { carousalData } from "../../Data/carousalData";
const Carousal = () => {
  var settings = {
    dots: true,
  };

  const data = carousalData;

  return (
    <div className="Containar">
      <Slider {...settings} className="slider">
        {data.map((item, index) => {
          return (
            <div className="v" key={index}>
              <Hero
                title={item.title}
                description={item.description}
                image={item.image}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousal;
