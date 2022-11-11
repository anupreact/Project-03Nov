import React from "react";
import "./Categories.scss";
import wires from "../../images/wires.png";
import tfan from "../../images/tfan.png";
import cfan from "../../images/cfan.png";
import gyesers from "../../images/gyesers.png";
import series from "../../images/series.png";

const Categories = (props) => {
  const { heading } = props;

  const cardData = [
    {
      image: wires,
      title: "Wires",
    },
    {
      image: cfan,
      title: "Ceiling Fans",
    },
    {
      image: tfan,
      title: "Table Fans",
    },
    {
      image: gyesers,
      title: "Gyesers",
    },
    {
      image: wires,
      title: "Wires",
    },
    {
      image: cfan,
      title: "Ceiling Fans",
    },
    {
      image: series,
      title: "Series",
    },
    {
      image: wires,
      title: "Wires",
    },
  ];
  
  return (
    <div className="Categories">
      {heading ? (
        <div className="heading">
          <span>{heading}</span>
        </div>
      ) : (
        ""
      )}

      <div className="wrapper">
        <div className="cards-container">
          {cardData.map((items, index) => {
            return (
              <div className="cards" key={index}>
                <img src={items.image} alt="" />
                <span>{items.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
