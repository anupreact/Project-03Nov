import React from "react";
import Slider from "react-slick";
import "./Carousal.scss";
import image1 from "../../images/music-banner.jpg";
import image2 from "../../images/sports-banner.jpg";
import image3 from "../../images/yoga-banner.jpg";
import Hero from "../Hero/Hero";
const Carousal = () => {
  var settings = {
    dots: true,
  };
  const contentStyle = {
    background: "black",
    height: "700px",
    width: "100",
    textAlign: "center",
    objectFit: "cover",
    borderRadius: "0px",
  };
  return (
    <div className="Containar">
      <Slider {...settings} className="slider">
        <div>
          <Hero />
        </div>{" "}
        <div>
          <Hero />
        </div>{" "}
        <div>
          <Hero />
        </div>{" "}
        <div>
          <Hero />
        </div>{" "}
      </Slider>
    </div>
  );
};

export default Carousal;
