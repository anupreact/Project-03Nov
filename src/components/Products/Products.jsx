import React from "react";
import "./Products.scss";
import cFan from "../../images/cfan.png";

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
      name: "Havells Fan",
      image: cFan,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis voluptates voluptate!",
      price: "1200 INR",
    },
    {
      name: "Havells Fan",
      image: cFan,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis voluptates voluptate!",
      price: "1200 INR",
    },
    {
      name: "Havells Fan",
      image: cFan,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis voluptates voluptate!",
      price: "1200 INR",
    },
    {
      name: "Havells Fan",
      image: cFan,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis voluptates voluptate!",
      price: "1200 INR",
    },
    {
      name: "Havells Fan",
      image: cFan,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis voluptates voluptate!",
      price: "1200 INR",
    },
    {
      name: "Havells Fan",
      image: cFan,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis voluptates voluptate!",
      price: "1200 INR",
    },
    {
      name: "Havells Fan",
      image: cFan,
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
            const { image, title, description, price } = item;
            return (
              <div className="card" key={index}>
                <div className="img-container">
                  <img src={image} alt="" />
                </div>
                <span className="Name">{title}</span>
                <span className="desc">{description}</span>
                <span>Price :{price}</span>
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
