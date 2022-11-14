import React from "react";
import "./Products.scss";
import cFan from "../../images/cfan.png";

import iron1 from "../../images/Products/iron1.png";
import heater2 from "../../images/Products/heater2.png";
import cooler1 from "../../images/Products/cooler1.png";
import extention3 from "../../images/Products/extention3.png";
import portablelamp from "../../images/Products/portablelamp.png";
import racket3 from "../../images/Products/racket3.png";
import pinplugs from "../../images/Products/pinplugs.png";

const Products = (props) => {
  const { heading } = props;

  const productData = [
    {
      name: "Havells Fan",
      image: cFan,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis voluptates voluptate!",
      price: "1200 INR",
    },
    {
      name: "Syska Iron",
      image: iron1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis voluptates voluptate!",
      price: "1200 INR",
    },
    {
      name: "Bajaj water heater",
      image: heater2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis voluptates voluptate!",
      price: "1200 INR",
    },
    {
      name: "Usha Coolers",
      image: cooler1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis voluptates voluptate!",
      price: "1200 INR",
    },
    {
      name: "Extention Boards",
      image: extention3,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis voluptates voluptate!",
      price: "1200 INR",
    },
    {
      name: "Led flash Lamps",
      image: portablelamp,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis voluptates voluptate!",
      price: "1200 INR",
    },
    {
      name: "Mosquito traps",
      image: racket3,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis voluptates voluptate!",
      price: "1200 INR",
    },
    {
      name: "3-pin plugs",
      image: pinplugs,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis voluptates voluptate!",
      price: "1200 INR",
    },
  ];

  return (
    <div className="Products">
      {heading ? (
        <div className="heading">
          <span>{heading}</span>
        </div>
      ) : (
        ""
      )}

      <div className="wrapper">
        <div className="container">
          {productData.map((item, index) => {
            const { image, name, description, price } = item;
            return (
              <div className="card" key={index}>
                <div className="img-container">
                  <img src={image} alt="" />
                </div>
                <span className="name">{name}</span>
                <span className="desc">{description}</span>
                <span className="price">Price : {price}</span>
                <button>Add To Cart</button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="footer">
        <button>View All Products</button>
      </div>
    </div>
  );
};

export default Products;
