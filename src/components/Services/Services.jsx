import React from "react";
import "./Services.scss";
import services1 from "../../images/services1.png";
import services2 from "../../images/services2.png";

const Services = () => {
  return (
    <div className="Services">
      <div className="heading">
        {" "}
        <span> Our Services </span>{" "}
      </div>
      <div className="content-container">
        <div className="row-1">
          <div className="left">
            <p>
              One Stop solution for all your Home Electrical Supplies and
              Services. We Provide all the essential electrical and electronics
              home appliances and gadgets &nbsp; <br /> Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Voluptatibus libero nesciunt
              labore totam error rem voluptatem iusto assumenda omnis ad!
            </p>
            <button>Get Started</button>
          </div>
          <div className="right">
            <img src={services1} alt="service" />
          </div>
        </div>
        <div className="row-2">
          <div className="left">
            <p>
              One Stop solution for all your Home Electrical Supplies and
              Services. We Provide all the essential electrical and electronics
              home appliances and gadgets &nbsp; <br /> Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Voluptatibus libero nesciunt
              labore totam error rem voluptatem iusto assumenda omnis ad!
            </p>
            <button>Get Started</button>
          </div>
          <div className="right">
            <img src={services2} alt="services" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
