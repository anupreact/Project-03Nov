import React from "react";
import PageCover from "../../components/PageCover/PageCover";
import "./Services.scss";
import ServicesComponent from "../../components/Services/Services"
import Categories from "../../components/Categories/Categories";


const Services = () => {
  return (
    <div className="Services">
      <PageCover heading={"Services"}/>
      <ServicesComponent/>
      <Categories heading={"Featured Categories"}/>
      
      {/* take reference from -- https://www.medallia.com/services/ */}
    </div>
  );
};

export default Services;
