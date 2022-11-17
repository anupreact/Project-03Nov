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

const Products = (props) => {
  const { heading, data } = props;
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
          {data.map((item, index) => {
            const { image, name, description, price, id } = item;
            return (
              <div className="card" key={index}>
                <div className="img-container">
                  <NavLink to={`/product/${id}`}>
                    <img src={image} alt="" />
                  </NavLink>
                </div>
                <NavLink to={`/product/${id}`}>
                  <span className="name">{name}</span>
                </NavLink>
              
                <span className="price">Price : {price}</span>
                <NavLink to="/unavailable">
                  <button>Buy Now</button>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>

      <div className="footer">
        <NavLink to="/products">
          <button>View All Products</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Products;
