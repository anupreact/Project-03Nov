import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productData from "../../Data/productData";

const SingleProduct = () => {
  const params = useParams();
  console.log(productData);
  console.log(params);

 console.log(productData.find((p) => p.id === params))

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const product = productData.find((p) => p.id === params.id);
//     setData(product);
//   }, []);


  return (
    <div className="SingleProduct">
      <h4>SingleProduct</h4>
    </div>
  );
};

export default SingleProduct;
