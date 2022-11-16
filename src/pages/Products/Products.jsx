import React from "react";
import PageCover from "../../components/PageCover/PageCover";
import "./Products.scss";
import ProductComponent from "../../components/Products/Products"
import productData from "../../Data/productData";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import {useRoutes} from "react-router-dom"


const Products = () => {
  const location = window.location.href;
  console.log(location)

  return (
    <div className="Products">
      <PageCover heading={"Products"}/>
      <Breadcrumb link={"home"} text={"products"}/>
      <ProductComponent data = {productData}/>
      <br />
    </div>
  );
};

export default Products;
