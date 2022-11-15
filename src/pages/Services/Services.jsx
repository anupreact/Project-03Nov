import React from "react";
import PageCover from "../../components/PageCover/PageCover";
import "./Services.scss";
import ServicesComponent from "../../components/Services/Services";
import Categories from "../../components/Categories/Categories";
import PremiumServices from "../../components/PremiumServices/PremiumServices";

import premImage from "../../images/premium3.png";
import automationImage from "../../images/automation.png";
import automation3 from "../../images/automation3.png";
import automation4 from "../../images/automation4.png";


const Services = () => {
  return (
    <div className="Services">
      <PageCover heading={"Services"} />
      <ServicesComponent row1={true} row2={true} />
      <PremiumServices
        heading={"Premium Services"}
        title={
          "Realtime assistance from initial plannng to final implementation."
        }
        description={
          "  We Know How Tedious it is to find the right electronics/elecrical service providers who can help you through the journey from very start. No Need to worry about what to pick & what to not, Where to place & where to not, What colors to pick and what to not. We have experienced professionals who are experts in Illumination and electric fitting industry, Who can help you through all these."
        }
        image={premImage}
      />
      <PremiumServices
        heading={"Automation Services"}
        title={" Home Automation Solutions and Service providers."}
        description={
          " As the demand for Home Automation is rapidly increasing, we are here to help with all the essential Home Automation services, We are having an alliance with one of the top rated Home Automation firm in Town, who are providing their valuable & premium quality services in the field of Home Automation since 2020."
        }
        image={automation4} bg={""}
      />
      {/* <Categories heading={"Featured Categories"} /> */}

      {/* take reference from -- https://www.medallia.com/services/ */}
    </div>
  );
};

export default Services;
