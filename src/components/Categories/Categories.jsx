import React from "react";
import { categoriesData } from "../../Data/categoriesData";
import "./Categories.scss";


const Categories = (props) => {
  const { heading } = props;

  const cardData = categoriesData
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
