import React from "react";
import "./Testimonial.scss";
import man from "../../images/man4.png";

const Testimonial = () => {
  const cardData = [
    {
      image: man,
      name: "Tony Stark",
      message:
        "Lorem ipsum dolor sit amet adipisicing elit.Consequatur, voluptas enim saepe natus aspernatur. Veltemporibus, eveniet sit at ad, sequi eius mollitia cum fugit accusamus rem laboriosam.",
    },
    {
      image: man,
      name: "Tony Stark",
      message:
        "Lorem ipsum dolor sit amet adipisicing elit.Consequatur, voluptas enim saepe natus aspernatur. Veltemporibus, eveniet sit at ad, sequi eius mollitia cum fugit accusamus rem laboriosam.",
    },
    {
      image: man,
      name: "Tony Stark",
      message:
        "Lorem ipsum dolor sit amet adipisicing elit.Consequatur, voluptas enim saepe natus aspernatur. Veltemporibus, eveniet sit at ad, sequi eius mollitia cum fugit accusamus rem laboriosam.",
    },
    {
      image: man,
      name: "Tony Stark",
      message:
        "Lorem ipsum dolor sit amet adipisicing elit.Consequatur, voluptas enim saepe natus aspernatur. Veltemporibus, eveniet sit at ad, sequi eius mollitia cum fugit accusamus rem laboriosam.",
    },
  ];

  return (
    <div className="Testimonial">
      <div className="heading">
        <span>Testimonials</span>
      </div>

      <div className="card-container">
        {cardData.map((item, index) => {
          const { image, name, message } = item;
          return (
            <div className="card" key={index}>
              <div className="image-container">
                <img src={image} alt="not found" />
              </div>
              <span className="Name">{name}</span>
              <span className="message">
                <q>{message}</q>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
