import React from "react";
import "./Banners.scss";

import led from "../../images/led-lights.jpg";
import rcb1 from "../../images/Rcb11.png";
import wire from "../../images/house-wire.jpg";
import mcb from "../../images/mcb-changeover.jpg";
import rccb from "../../images/rccb.jpg";
import switch1 from "../../images/switch11.png";
import appliances from "../../images/appliances.png";
import coolers from "../../images/cooler2.png";

const Banners = () => {
  return (
    <div className="Banners">
      <div className="wrapper">
        <div className="card">
          <img src={led} alt="" />
        </div>{" "}
        <div className="card">
          <img src={wire} alt="" />
        </div>{" "}
        <div className="card">
          <img src={rcb1} alt="" />
        </div>{" "}
        <div className="card">
          <img src={mcb} alt="" />
        </div>{" "}
        <div className="card">
          <img src={appliances} alt="" />
        </div>{" "}
        <div className="card">
          <img src={rccb} alt="" />
        </div>{" "}
        <div className="card">
          <img src={coolers} alt="" />
        </div>{" "}
        <div className="card">
          <img src={switch1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banners;
