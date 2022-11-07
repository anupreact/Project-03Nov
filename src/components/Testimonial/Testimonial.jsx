import React from "react";
import "./Testimonial.scss";
import man from "../../images/man4.png";

const Testimonial = () => {
  return (
    <div className="Testimonial">
      <div className="heading">
        <span>Testimonials</span>
      </div>

      <div className="card-container">
        <div className="card">
          <div className="image-container"> 
            <img src={man} alt="" />
          </div>
          <span className="Name">Tony Stark</span>
          <span className="message">
            <q>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, voluptas enim saepe natus voluptate aspernatur. Vel,
              temporibus, eveniet sit at ad, sequi eius mollitia eos cum fugit
              accusamus rem laboriosam.
            </q>
          </span>
        </div>{" "}
        <div className="card">
          <div className="image-container">
            <img src={man} alt="" />
          </div>
          <span className="Name">Tony Stark</span>
          <span className="message">
            <q>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, voluptas enim saepe natus voluptate aspernatur. Vel,
              temporibus, eveniet sit at ad, sequi eius mollitia eos cum fugit
              accusamus rem laboriosam.
            </q>
          </span>
        </div>{" "}
        <div className="card">
          <div className="image-container">
            <img src={man} alt="" />
          </div>
          <span className="Name">Tony Stark</span>
          <span className="message">
            <q>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, voluptas enim saepe natus voluptate aspernatur. Vel,
              temporibus, eveniet sit at ad, sequi eius mollitia eos cum fugit
              accusamus rem laboriosam.
            </q>
          </span>
        </div>{" "}
        <div className="card">
          <div className="image-container">
            <img src={man} alt="" />
          </div>
          <span className="Name">Tony Stark</span>
          <span className="message">
            <q>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, voluptas enim saepe natus voluptate aspernatur. Vel,
              temporibus, eveniet sit at ad, sequi eius mollitia eos cum fugit
              accusamus rem laboriosam.
            </q>
          </span>
        </div>{" "}
      </div>
    </div>
  );
};

export default Testimonial;
