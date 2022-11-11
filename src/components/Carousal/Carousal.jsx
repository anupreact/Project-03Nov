import React from "react";
import Slider from "react-slick";
import "./Carousal.scss";
import image1 from "../../images/music-banner.jpg";
import image2 from "../../images/sports-banner.jpg";
import image3 from "../../images/yoga-banner.jpg";
import banner1 from "../../images/banner1.gif";
import banner2 from "../../images/banner2.gif";
import banner3 from "../../images/banner3.gif";
import Hero from "../Hero/Hero";
const Carousal = () => {
  var settings = {  
    dots: true,
  };

  const data = [
    {
      title:
        "The world's First learning solution for everyone.",
      description:
        "Lorem ipsum dolor sit amet elit. Eius quidem Lorem ipsum dolor sit Lorem ipsum dolor sit amet elit. Eius quidem Lorem ipsum dolor.",
      image: banner1,
    }, {
      title:
        "Your Trusted ",
      description:
        "Lorem ipsum dolor sit amet elit. Eius quidem Lorem ipsum dolor sit",
      image: banner1,
    }, {
      title:
        "Your Trusted ",
      description:
        "Lorem ipsum dolor sit amet elit. Eius quidem Lorem ipsum dolor sit",
      image: banner1,
    },



    // {
    //   title:
    //     " 2 Your Trusted and Reliable Electricals & Electronics goods supplier as well as custom service provider for yoyr home and office requirements",
    //   description:
    //     "Lorem ipsum dolor sit amet elit. Eius quidem Lorem ipsum dolor sit amet, adipisicing elit Quas ipsam nostrum accusantium. autem id?",
    //   image: banner2,
    // },
    // {
    //   title:
    //     "3 Your Trusted and Reliable Electricals & Electronics goods supplier as well as custom service provider for yoyr home and office requirements",
    //   description:
    //     "Lorem ipsum dolor sit amet elit. Eius quidem Lorem ipsum dolor sit amet, adipisicing elit Quas ipsam nostrum accusantium. autem id?",
    //   image: banner3,
    // },
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
