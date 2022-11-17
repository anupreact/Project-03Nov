import React from "react";
import PageCover from "../../components/PageCover/PageCover";
import "./About.scss";
import result from "../../images/result.png";
import integrity from "../../images/integrity.png";
import satisfaction from "../../images/satisfaction.png";
import firstPlace from "../../images/firstPlace.png";
import profile001 from "../../images/profile001.png";



import facebook from "../../images/facebook.png";
import insta from "../../images/insta.png";
import linked from "../../images/linked.png";
import tweet from "../../images/tweet.png";
import telegram from "../../images/telegram.png";
import { Link, NavLink } from "react-router-dom";

const About = () => {
  const cardData = [
    {
      icon: satisfaction,
      title: "Optimum Client Satisfaction",
      description:
        " We are here because of our valuable customers, and their satisfaction is the main reason we place client pleasure first.We are not afraid to work together to better our ideas and services. We are motivated by client praise. It's like a crowdheering for a goal, we want to hear it more.",
    },
    {
      icon: result,
      title: "Result Oriented Approach",
      description:
        "Our ideas and execution are our strengths. Right from the very beginning, we follow the result-driven approach. Throughout the process, we strive to deliver a high-quality project our customers expect. This helps us to stay focused on satisfying the customer's requirements and expectations criteria!",
    },
    {
      icon: integrity,
      title: "Integrity in Everything",
      description:
        "Success requires advising teams to function beyond peer groups. Clients benefit from a creative workforce to produce high quality solutions. Involvement in the decision-making process gives each employee the opportunity to voice their opinions therefore creating a strong sense of teamwork.",
    },
    {
      icon: firstPlace,
      title: "Great Place to Work",
      description:
        "Anand Electricals is a great place to work for many reasons. We value each employee equally. There are no superiors or newbies in our view. We value cultural diversity and do not discriminate. We share a passion for our Electrical services & consultations. Finally, humans work here, not robots, so, no pressure.",
    },
  ];

  const aboutLeft = [
    "Anand Electricals is a leading Electrical essentials Retailer/Wholesaler & consulting service provider in Nagpur. It excels in offering elegant & high quality products ranging from Light bulbs, LED'S, Wires, Cables, Decorative Series, Celing Fans, Table Fans, Desert Coolers, Gyesers, Home Electrical switches, Iron, Water Heaters & Room Heaters . We offer a one-stop solution that includes dealing in  electrical/electronics sales in retail & wholesale, also we provide essential Home appliances repairing service as well. We help our customers by providing all the electrical/electronics service under one roof . Our team comprises tech wizards with extensive experience in creating handcrafted solutions employing Home Electrical fittings, Renovation Services, Home Automation services etc",
  ];

  const aboutRight = [
    " We care, we nourish our customers by giving the service which is value for money : Each member of Anand Electricals, will help you with whatsoever requirement you have.",
    "Put ourselves in your shoes: We always keep customer satisfaction as our prime motto. Hence, we are always extremely responsive to any of your requests and make sure we are there to help you all the time and make it a smooth sailing customer service experience.",
    "We deliver/complete projects/service on time: We recognize how important your time & business is to you, thus we do everything we can to deliver the quality services on time.",
    "Best shop for you in town: Don't you think we are the best shop for for your electrical essentials? If not, try choosing us, and we will prove to you our calibre.",
  ];

  const socialLinks = [
    {
      icon: facebook,
      url: "https://www.facebook.com/Anand.kings786",
    },
    {
      icon: insta,
      url: "https://www.instagram.com/anand680/?igshid=YmMyMTA2M2Y%3D",
    },
    {
      icon: linked,
      url: "https://www.instagram.com/anand680/?igshid=YmMyMTA2M2Y%3D",
    },
    {
      icon: tweet,
      url: "https://www.facebook.com/Anand.kings786",
    },{
      icon: telegram,
      url: "https://www.facebook.com/Anand.kings786",
    },
  ];
  
  const infoQuote = "The CEO/Director Mr. Anand Raut son of Ashok Raut is a very dynamic and inspirational personality, serving his services  since 2020 in this consumer centric electronics product based business. He is an Electronics Engineer passed out in 2017. After Getting enormous success in core Electronics sector, He has started the business in 1st quarter of 2k20, and within such a short period of time he is now the smartest,youngest and a most succesful businessman in Electronics & Electricals domain from Nagpur."

  return (
    <div className="About">
      <PageCover heading={"About Us"} />
      <div className="container">
        <div className="row">
          <div className="left">
            <h2>Who We Are?</h2>

            {aboutLeft.map((item, index) => {
              return <span key={index}>{item}</span>;
            })}
          </div>
          <div className="right">
            <h2>What We Do?</h2>

            {aboutRight.map((item, index) => {
              return <span key={index}>{item}</span>;
            })}
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
                <h3 className="title">{title}</h3>

                <br />
                <p className="desc">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
  

      <div className="info">
        <h2>Meet Mr.CEO</h2>
        <div className="content-row">
          <div className="left">
            <div className="quote">
              <span>
               {infoQuote}
              </span>

              <div className="post">
                <span>Name :</span>
                <span> Mr. Anand Ashok Raut.</span>
              </div>

              <div className="social">
                <div className="social-links">
                  {socialLinks.map((item, index) => {
                    return (
                      <div className="link" key={index}>
                       <a href={`${item.url}`}> 
                        <img src={item.icon} alt="" />
                       </a>
                      </div>
                    );
                  })}
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
