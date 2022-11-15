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
import { NavLink } from "react-router-dom";
import productData from "../../Data/productData"

const Products = (props) => {
  const { heading } = props;
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
            const { image, name, description, price,id } = item;
            return (
              <div className="card" key={index}>
                <div className="img-container">
                  <NavLink to={`/product/${id}`}>

                  <img src={image} alt="" />
                  </NavLink>
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
