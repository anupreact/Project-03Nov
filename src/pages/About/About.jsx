import React from "react";
import PageCover from "../../components/PageCover/PageCover";
import "./About.scss";
import icon from "../../images/icons8-technological-64.png";
import profile from "../../images/profile-removebg-preview.png";
import profile001 from "../../images/profile001.png";

const About = () => {
  const cardData = [
    {
      icon: icon,
      title: "Optimum Client Satisfaction",
      description:
        "It's in our DNA. We are here because of our valuable clients, andtheir success is the main reason we place client pleasure first.We are not afraid to work together to better our ideas andservices. We are motivated by client praise. It's like a crowdheering for a goal, we want to hear it more.",
    },
    {
      icon: icon,
      title: "Optimum Client Satisfaction",
      description:
        "It's in our DNA. We are here because of our valuable clients, andtheir success is the main reason we place client pleasure first.We are not afraid to work together to better our ideas andservices. We are motivated by client praise. It's like a crowdheering for a goal, we want to hear it more.",
    },
    {
      icon: icon,
      title: "Optimum Client Satisfaction",
      description:
        "It's in our DNA. We are here because of our valuable clients, andtheir success is the main reason we place client pleasure first.We are not afraid to work together to better our ideas andservices. We are motivated by client praise. It's like a crowdheering for a goal, we want to hear it more.",
    },
    {
      icon: icon,
      title: "Optimum Client Satisfaction",
      description:
        "It's in our DNA. We are here because of our valuable clients, andtheir success is the main reason we place client pleasure first.We are not afraid to work together to better our ideas andservices. We are motivated by client praise. It's like a crowdheering for a goal, we want to hear it more.",
    },
  ];

  const aboutRight = [
    "We Design, Develop and Market for you: Each member of WPWebInfotech, makes sure they go an extra mile to turn your idea into a reality while also enjoying their work.",
    "Put ourselves in your shoes: We always keep customer satisfaction as our prime motto. Hence, we are always extremely responsive to any of your requests and make sure we are there to help you all the time and make it a smooth sailing development experience for you.",
    "We deliver projects on time: We recognize how important your business is to you, thus we do everything we can to deliver your project on time.",
    "Empowering your business: Our tech-savvy personnel make sure they understand your business logic and goals and provide you with an optimal solution that would benefit your business.",
    "Best company for you: Don’t you think we are the best company for your business? If not, try choosing us, and we will prove to you our calibre.",
  ];

  const aboutLeft = [
    "Anand Electricals is a leading Electrical Retail and Wholesale essentials and service provider in Nagpur. It excels in offering elegant & high quality products ranging from Light bulbs, LED'S, Wires, Cables, Decorative Series, Celing Fans, Table Fans, Desert Coolers, Gyesers, Home Electrical switches, Iron, Water Heaters & Room Heaters . We offer a one-stop solution that includes dealing in  electrical/electronics sales in retail & wholesale, also we provide essential Home appliances repairing service as well. We help our customers by providing all the electrical/electronics service under one roof . Our team comprises tech wizards with extensive experience in creating handcrafted solutions employing Home Electrical fittings, Renovation Services, Home Automation services etc",

  ];

  return (
    <div className="About">
      <PageCover heading={"About Us"} />
      <div className="container">
        <div className="row">
          <div className="left">
            <h2>Who We Are?</h2>
            <span>
            Anand Electricals is a leading Electrical/Electronics Retailer/Wholesaler and service provider in Nagpur. It excels in offering elegant & high quality products ranging from Light bulbs, LED'S, Wires, Cables, Decorative Series, Celing Fans, Table Fans, Desert Coolers, Gyesers, Home Electrical switches, Iron, Water Heaters & Room Heaters . We offer a one-stop solution that includes dealing in  electrical/electronics sales in retail & wholesale, also we provide essential Home appliances repairing service as well. We help our customers by providing all the electrical/electronics service under one roof. Our team comprises tech wizards with extensive experience in creating handcrafted solutions employing Home Electrical fittings, Renovation Services and Home Automation services.
            </span>
            
          </div>
          <div className="right">
            <h2>What We Do?</h2>
            <span>
              Lorem ipsum dolor sit, amet consectetur is atque accusamus
              corrupti voluptas! Vel quisquam suscipit illum?
            </span>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequuntur repudiandae quibusdam alias! ur manobis veritatis
              saepe. adipisci incidunt,
            </span>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequuntur repudiandae quibusdam alias! Cupiditate adipisci
              incique accusamus corrupti voluptas! Vel quisquam suscipit illum?
            </span>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. quae,
              dolores nesciunt minus hic asperiores nostrum, nobiquam suscipit
              illum?
            </span>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequuntur repudiandae quibusdam alias! Cupiditate adipisci
              incidunt, commodi q suscipit illum?
            </span>
          </div>
        </div>
      </div>

      <div className="special">
        <h3>Our Core Principles Make Us Unique</h3>
        <span>Deliver Reliable & Quality Electrical Services</span>
        <div className="card-container">
          {cardData.map((item, index) => {
            const { icon, title, description } = item;
            return (
              <div className="card" key={index}>
                <div className="icon">
                  <img src={icon} alt="" />
                </div>
                {/* <h3 className="title">{title}</h3> */}
                <h3 className="title">Optimum Customer satisfaction</h3>
                <br />
                <p className="desc">{""}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, impedit magni. Odio, quidem quas praesentium, corrupti iusto ipsum eveniet aliquam assumenda eligendi modi ducimus vitae eum repellendus, exercitationem minus dolor?
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <br />

      <div className="info">
        <h2>Meet The Director</h2>
        <div className="content-row">
          <div className="left">
            <div className="quote">
              <span>
                The CEO/Director Mr. Anand Raut son of Ashok Raut is a very
                dynamic and inspirational personality, serving his services
                since 2020 in this consumer centric electronics product based
                business. He is an Electronics Engineer passed out in 2017.
                After Getting enormous success in core Electronics sector, He
                has started the business in 1st quarter of 2k20, and within such
                a short period of time he is now the smartest,youngest and a
                most succesful businessman in Electronics & Electricals domain
                from Nagpur."
              </span>

              <div className="post">
                <span>Name :</span>
                <span> Mr. Anand Ashok Raut.</span>
              </div>

              <div className="social">
                <div className="social-links">
                  <div className="link">
                    <i className="fa fa-facebook"></i>{" "}
                  </div>{" "}
                  <div className="link">
                    <i className="fa fa-instagram"></i>{" "}
                  </div>{" "}
                  <div className="link">
                    <i className="fa fa-linkedin"></i>{" "}
                  </div>{" "}
                  <div className="link">
                    <i className="fa fa-twitter"></i>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="img-container">
              <img src={profile001} alt="not found" />
            </div>

            <div className="post">
                <span> Mr. Anand Ashok Raut.</span>
              </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
