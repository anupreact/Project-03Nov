import React from "react";
import PageCover from "../../components/PageCover/PageCover";
import "./Products.scss";
import ProductComponent from "../../components/Products/Products"
const Products = () => {
  return (
    <div className="Products">

      <PageCover heading={"Products"}/>
      <h1> Breadcrumb and a filter bar with search input.</h1>
      <ProductComponent/>
      <br />
     
    </div>
  );
};

export default Products;
