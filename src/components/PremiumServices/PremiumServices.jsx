import React from "react";
import Services from "../Services/Services";
import "./PremiumServices.scss";
import ban37 from "../../images/ban37.jpg"

const PremiumServices = (props) => {
  const { heading, title, description, image, bg } = props;
  return (
    <div className="PremiumServices" style={{backgroundColor:bg}}>
      <Services
        row1={true}
        row2={false}
        heading={heading}
        banTitle={title}
        bannerText={description}
        banImage={image}
      />
      <img className="bg" src={ban37} alt="" />
    </div>
  );
};

export default PremiumServices;
