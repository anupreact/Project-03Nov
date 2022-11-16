import React from "react";
import "./Testimonial.scss";
import man from "../../images/man4.png";

const Testimonial = () => {
  const cardData = [
    {
      image: man,
      name: "Anup Manwatkar",
      message:
        "Had a wonderful experience. I mean almost everything i found here for my multipurpose requirement, from good quality decorative lightings series upto premium quality mega high powered lamps, almost every essential electrical item is available here.",
    },
    {
      image: man,
      name: "Anurag Lokhande",
      message:
        " Anand Electricals, provided exceptional customer service and care. The owner went above and beyond to resolve the issue and kept us informed at all times. Superb service and would highly recommend. Many thanks to Anand Electricals and the team."
    },

   
    {
      image: man,
      name: "Honey Singh",
      message:
        "Had an amazing experience with you guys, Thank you for helping us to properly illuminate our office, and our appartment too, it was quite difficult to find such amazing service at one stop. Hats off Anand & company ",
    },
    {
      image: man,
      name: "Sumit Ramteke",
      message:
        "I needed somebody to help us with renovation of our bedroom, who can finish the work from start till the very end. They not even bothered me once for the service quality, Anand Electricals is one of the best Electrical service provider in nagpur.",

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
