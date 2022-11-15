import React from "react";
import "./Services.scss";
import services1 from "../../images/services1.png";
import services2 from "../../images/services2.png";

const Services = (props) => {
  console.log(props);
  const { heading, row1, row2, bannerText, banImage, banTitle } = props;

  return (
    <div className="Services">
      {heading ? (
        <div className="heading">
          <span>{heading}</span>
        </div>
      ) : (
        ""
      )}
      <div className="content-container">
        {row1 && (
          <div className="row-1">
            <div className="left">
              <p style={{ fontWeight: "bold" }}>
                {banTitle ? banTitle : " Electrical goods seller."}
              </p>
              <p>
                {bannerText ? (
                  bannerText
                ) : (
                  <>
                    One Stop solution for all your Home Electrical/Electronics
                    Supplies and Services. We Provide all the essential
                    electrical and electronics small home appliances and gadgets.
                    &nbsp; <br />
                    Usually deals in Light bulbs, LED'S, Wires, Cables,
                    Decorative Series, Celing Fans, Table Fans, Desert Coolers,
                    Gyesers, Home Electrical switches, Iron, Water Heaters &
                    Room Heaters.
                  </>
                )}
              </p>
              <button>Get Started</button>
            </div>
            <div className="right">
              <img
                src={banImage ? `${banImage}` : `${services1}`}
                alt="service"
              />
            </div>
          </div>
        )}
        {row2 && (
          <div className="row-2">
            <div className="left">
              <p style={{ fontWeight: "bold" }}>
                Essential Electrical/Electronics Service provider.
              </p>
              <p>
                As we proudly call ourself a one stop solution for your needs we
                provide Essential products service maintainence and Repairing.
                We have a team of dedicated professional electricians who are
                having tremendous experties in the field of home electrical &
                electronics essentials.&nbsp; <br /> Having any plan to
                reinnovate your Home electric fitting, Let us know we provide
                Electrician hiring service as well.
              </p>
              <button>Get Started</button>
            </div>
            <div className="right">
              <img src={services2} alt="services" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
