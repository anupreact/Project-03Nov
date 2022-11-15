import React from "react";
import Services from "../Services/Services";
import "./PremiumServices.scss";

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
    </div>
  );
};

export default PremiumServices;
