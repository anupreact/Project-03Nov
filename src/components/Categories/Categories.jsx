import React from "react";
import "./Categories.scss";
import wires from "../../images/wires.png";
import tfan from "../../images/tfan.png";
import cfan from "../../images/cfan.png";
import gyesers from "../../images/Products/gyesers.png";
import series from "../../images/series.png";

import iron1 from "../../images/Products/iron1.png"
import tablefan3 from "../../images/Products/tablefan3.png"
import mixer1 from "../../images/Products/mixer1.png"
import oven from "../../images/Products/oven.png"
import stove from "../../images/Products/stove.png"
import juicer from "../../images/Products/juicer.png"
import cooler1 from "../../images/Products/cooler1.png"
import cooler2 from "../../images/Products/cooler2.png"
import extention1 from "../../images/Products/extention1.png"
import extention2 from "../../images/Products/extention2.png"
import extention3 from "../../images/Products/extention3.png"

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
      image: tablefan3,
      title: "Table Fans",
    },
    {
      image: gyesers,
      title: "Gyesers",
    },
    {
      image: iron1,
      title: "Iron",
    },
    {
      image: mixer1,
      title: "Grinder Mixer",
    },
    {
      image: cooler1,
      title: "Coolers",
    },
    {
      image: extention2,
      title: "Extentions",
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
