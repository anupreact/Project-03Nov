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

const Home = () => {
  return (
    <div className="Home">
      <Carousal />
      <Services heading={"Our Services"} row1={true} row2={true} />
      <Categories heading={"Featured Categories"} />
      <Products heading={"Featured Products"} />

      <PremiumServices/>
      <Testimonial heading={"Testimonials"} />
      <Brands heading={"Trusted Brands"} />
      <NewContact />

      {/* REFERENCE ------ https://freehtml5.co/preview/?item=solution-free-bootstrap-4-agency-template */}
    </div>
  );
};

export default Home;
