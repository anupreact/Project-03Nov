import React from "react";
import Slider from "react-slick";
import "./Carousal.scss";



import ban01 from "../../images/banner01.png"
import ban02 from "../../images/banner02.png"
import ban03 from "../../images/banner03.png"

import Hero from "../Hero/Hero";
const Carousal = () => {
  var settings = {  
    dots: true,
  };

  const data = [
    
    {
      title:
        "Planning to reinnovate your home/business electric fittings",
      description:
        "We are having a dedicated team of electricians who can fulfill all your electric fittings from small rooms to huge appartments.",
      image: ban03,
    },
{
      title:
        "Get all your small home electronic essentianls under one roof.",
      description:
        "Offers a wide variety of electronics essentials at unmatched prices.",
      image: ban01,
    }, {
      title:
        "Get the essential requirements for your seasonal requirements.",
      description:
        "Wide variety of coolers ranging from small portable coolers upto large industrial coolers.",
      image: ban02,
    },


  ];

  return (
    <div className="Containar">
      <Slider {...settings} className="slider">
        {data.map((item, index) => {
          return (
            <div className="v" key = {index}>
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
