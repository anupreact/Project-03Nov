import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Products from "../../components/Products/Products";
import {productData} from "../../Data/productData";
import "./SingleProduct.scss";

const SingleProduct = ({ match }) => {
  const param = useParams();
  const product = productData.find((px) => px.id === +param.id);
  const { id, name, image, description, price } = product;
  const pData = productData.slice(0,4)

  return (
    <div className="SingleProduct">

      <Breadcrumb link={"products"}  text={name} />
      <div className="row">
        <div className="left">
          <img src={image} alt="" />
        </div>
        <div className="right">
          <span>{name}</span>
          <span>
            {description} Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Veritatis culpa ea a architecto libero ducimus asperiores,
            quae harum itaque tempora accusamus totam sit repellat ad possimus.
            Commodi ab corrupti atque, sit officiis reprehenderit!{" "}
          </span>
          <span>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star-half" aria-hidden="true"></i>{" "}
          </span>
          <span>Price : {price}</span>
          <div className="btn">
            <NavLink to="/unavailable">

            <button>Add to Cart </button>
            </NavLink>
            
          </div>
        </div>
      </div>

      <Products heading={"Related Products"} data={pData}/>
      {/* <img src={image} alt="" /> */}
    </div>
  );
};

export default SingleProduct;
