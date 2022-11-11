import React from "react";
import "./Brands.scss";
import brand from "../../images/man4.png";
import havells from "../../images/Havells.png";
import siemens from "../../images/siemens.png";

const brands = [
  "https://static.javatpoint.com/top10-technologies/images/top-10-electrical-companies-in-india6.png",
  "https://static.javatpoint.com/top10-technologies/images/top-10-electrical-companies-in-india7.png",
  "https://static.javatpoint.com/top10-technologies/images/top-10-electrical-companies-in-india10.png",
  "https://static.javatpoint.com/top10-technologies/images/top-10-electrical-companies-in-india9.png",
  "https://www.mobilityindia.com/wp-content/uploads/2019/09/syska-logo-300x169.jpg",
];

const Brands = () => {
  return (
    <div className="Brands">
      <div className="heading">
        <span>Trusted Brands</span>
      </div>

      <div className="brand-container">
        {brands.map((items, index) => {
          return (
            <div className="card" key={index}>
              <img src={items} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Brands;
