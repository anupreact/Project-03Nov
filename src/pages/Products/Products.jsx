import React from "react";
import PageCover from "../../components/PageCover/PageCover";
import "./Products.scss";
import ProductComponent from "../../components/Products/Products"
const Products = () => {
  return (
    <div className="Products">

      <PageCover heading={"Products"}/>
      <ProductComponent/>
      <h1> A Product Header Which can include a breadcrumb</h1>
      <br />
      <br />
      <h1>
        A sidebar Where a Search input, Categories section , filter selection
      </h1>
      <br />
      <br />
      <h1> main Content where the product cards will be placed </h1>

      <br />
      <br />
    </div>
  );
};

export default Products;
