import React from "react";
import "./Products.scss";
import cFan from "../../images/cfan.png";

const Products = () => {
  return (
    <div className="Products">
      <div className="heading">
        <span>Featured Products</span>
      </div>

      <div className="wrapper">
        <div className="container">
          <div className="card">
            <div className="img-container">
              <img src={cFan} alt="" />
            </div>
            <span className="Name"> Havells Fan</span>
            <span className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate officiis voluptates voluptate!
            </span>
            <button>Add To Cart</button>
          </div>{" "}
          <div className="card">
            <div className="img-container">
              <img src={cFan} alt="" />
            </div>
            <span className="Name"> Havells Fan</span>
            <span className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate officiis voluptates voluptate!
            </span>
            <button>Add To Cart</button>
          </div>{" "}
          <div className="card">
            <div className="img-container">
              <img src={cFan} alt="" />
            </div>
            <span className="Name"> Havells Fan</span>
            <span className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate officiis voluptates voluptate!
            </span>
            <button>Add To Cart</button>
          </div>{" "}
          <div className="card">
            <div className="img-container">
              <img src={cFan} alt="" />
            </div>
            <span className="Name"> Havells Fan</span>
            <span className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate officiis voluptates voluptate!
            </span>
            <button>Add To Cart</button>
          </div>{" "}
          <div className="card">
            <div className="img-container">
              <img src={cFan} alt="" />
            </div>
            <span className="Name"> Havells Fan</span>
            <span className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate officiis voluptates voluptate!
            </span>
            <button>Add To Cart</button>
          </div>{" "}
          <div className="card">
            <div className="img-container">
              <img src={cFan} alt="" />
            </div>
            <span className="Name"> Havells Fan</span>
            <span className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate officiis voluptates voluptate!
            </span>
            <button>Add To Cart</button>
          </div>{" "}
          <div className="card">
            <div className="img-container">
              <img src={cFan} alt="" />
            </div>
            <span className="Name"> Havells Fan</span>
            <span className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate officiis voluptates voluptate!
            </span>
            <button>Add To Cart</button>
          </div>{" "}
          <div className="card">
            <div className="img-container">
              <img src={cFan} alt="" />
            </div>
            <span className="Name"> Havells Fan</span>
            <span className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate officiis voluptates voluptate!
            </span>
            <button>Add To Cart</button>
          </div>{" "}
          
        </div>
      </div>

      <div className="footer">
        <button>
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Products;
