import React from "react";
import Hero from "../../components/Hero/Hero";
import "./Home.scss";
import Carousal from "../../components/Carousal/Carousal";
import Services from "../../components/Services/Services";
import Categories from "../../components/Categories/Categories";
import Products from "../../components/Products/Products";
import Testimonial from "../../components/Testimonial/Testimonial";
import Brands from "../../components/Brands/Brands";
import Contact from "../../components/Contact/Contact";
import NewContact from "../../components/NewContact/NewContact";
import PremiumServices from "../../components/PremiumServices/PremiumServices";
import Banners from "../../components/Banners/Banners";
import premImage from "../../images/premium3.png"
import {productData} from "../../Data/productData";
import { Button, DatePicker } from 'antd';




const Home = () => {

  const pData = productData.slice(0,4)
  return (
    // <div className="Home">
    <>
      <Carousal />




      <Banners/>
      <Services heading={"Our Services"} row1={true} row2={true} />
      <Categories heading={"Featured Categories"} />
      <Products heading={"Featured Products"} data={pData}/>

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
      <Testimonial heading={"Testimonials"} />
      <Brands heading={"Trusted Brands"} />
      <NewContact />

      {/* REFERENCE ------ https://freehtml5.co/preview/?item=solution-free-bootstrap-4-agency-template */}
   

    {/* </div> */}
    </>
  );
};

export default Home;
