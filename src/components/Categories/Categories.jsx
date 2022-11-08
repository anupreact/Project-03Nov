import React from "react";
import "./Categories.scss";
import wires from "../../images/wires.png";
import tfan from "../../images/tfan.png";
import cfan from "../../images/cfan.png";
import gyesers from "../../images/gyesers.png";
import series from "../../images/series.png";

const Categories = (props) => {
  const {heading} = props
  return (
    <div className="Categories">
      {
        heading ? (
          <div className="heading">
          <span>{heading}</span>
        </div>
        ) : ""
      }
     
      <div className="wrapper">
        <div className="cards-container">
          <div className="cards">
            <img src={wires} alt="" />
            <span>Wires</span>
          </div>
          <div className="cards">
            <img src={cfan} alt="" />
            <span>Celing Fans</span>
          </div>
          <div className="cards">
            <img src={tfan} alt="" />
            <span>Table Fans</span>
          </div>
          <div className="cards">
            <img src={gyesers} alt="" />
            <span>Gyesers</span>
          </div>
          <div className="cards">
            <img src={wires} alt="" />
            <span>Wires</span>
          </div>
          <div className="cards">
            <img src={cfan} alt="" />
            <span>Celing Fans</span>
          </div>
          <div className="cards">
            <img src={series} alt="" />
            <span>Series</span>
          </div>
          <div className="cards">
            <img src={wires} alt="" />
            <span>Wires</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
