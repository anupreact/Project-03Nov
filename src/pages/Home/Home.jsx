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
const Home = () => {
  return (
    <div className="Home">
      <Carousal />
      <Services heading={"Our Services"}/>
      <Categories heading={"Featured Categories"} />
      <Products heading={"Featured Products"} />
      <Testimonial heading={"Testimonials"} />
      <Brands heading={"Trusted Brands"} />
      <Contact heading={"Contact Us"} />

      {/* REFERENCE ------ https://freehtml5.co/preview/?item=solution-free-bootstrap-4-agency-template */}

      {/*  
      <br />
      <br />
      <br />
      <br />

      <h1>Make a products category section</h1>
      <br />
      <br />

      <h1>Few Products with view all button</h1>
      <br />
      <br />

      <h1>Make a products category section</h1>
      <br />
      <br />

      <h1>Testimonial section</h1>
      <br />
      <br />

      <h1>Brands row</h1>
      <br />
      <br /> */}
    </div>
  );
};

export default Home;
