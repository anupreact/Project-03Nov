import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Footer.scss";

import facebook from "../../images/facebook.png";
import insta from "../../images/insta.png";
import linked from "../../images/linked.png";
import tweet from "../../images/tweet.png";
import telegram from "../../images/telegram.png";

const Footer = () => {
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
    },
    {
      icon: telegram,
      url: "https://www.facebook.com/Anand.kings786",
    },
  ];

  const companyLinks = [
    {
      name: "Services",
      link: "services",
    },
    {
      name: "Contact Us",
      link: "contact",
    },
    {
      name: "About Us",
      link: "about",
    },
    {
      name: "Careers",
      link: "contact",
    },
  ];

  const affiliateLinks = [
    {
      name: "Partner",
      link: "services",
    },
    {
      name: "Market",
      link: "services",
    },
    {
      name: "Products",
      link: "products",
    },
    {
      name: "Hire us",
      link: "contact",
    },
  ];

  return (
    <>
      <footer className="footer">
        <section className="left">
          <p>Anand Electricals</p>
          <div className="info">
            AR Electricals, Shop No 02, Deo Nagar, Khamla Road, Near Tajshree
            Honda Showroom, Nagpur 440015
          </div>
          <div className="info">
            <span>
              <i className="fa fa-certificate" aria-hidden="true"></i>
            </span>
            <span className="gst">GST No. 27CGWPR1898D1ZK</span>
          </div>
          <div className="info">
            <span>
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </span>
            <span>ar.electricals007@gmail.com</span>
          </div>
          <div className="info">
            <span>
              <i className="fa fa-phone-square" aria-hidden="true"></i>
            </span>
            <span>9764921207 / 7709434879</span>
          </div>
          <div className="links">
            {socialLinks.map((item, index) => {
              return (
                <span key={index}>
                  <a target="_blank" rel="noreferrer" href={`${item.url}`}>
                    <img src={item.icon} alt="" />
                  </a>
                </span>
              );
            })}
          </div>
        </section>

        <div className="linkss">
          <section className="mid-1">
            <p>Company</p>
            <div>
              {companyLinks.map((item, index) => {
                return (
                  <span key={index}>
                    <NavLink to={`/${item.link}`}>{item.name}</NavLink>
                  </span>
                );
              })}
            
            </div>
          </section>
          <section className="mid-2">
            <p>Affiliate</p>
            <div>
            {affiliateLinks.map((item, index) => {
                return (
                  <span key={index}>
                    <NavLink to={`/${item.link}`}>{item.name}</NavLink>
                  </span>
                );
              })}
            </div>
          </section>
        </div>

        <section className="right">
          <p>Newsletter</p>
          <p>
            By Subscribing to our NewsLetter , You will get notified everytime
            we launch or add new products in our portfolio.
          </p>
          <input type="text" placeholder="Enter your email" />
          <div className="btn">
            <button>Subscribe</button>
          </div>
        </section>
      </footer>

      <div className="disclaimer">
        <span>
          Copyright @ All Rights reserved 2022 | Made with{" "}
          <span className="heart">❤ </span> by Anup &nbsp; |&nbsp;{" "}
          <a target="_blank" rel="noreferrer" href="https://anupmanwatkar.netlify.app/">
            {" "}
            Know more{" "}
          </a>
        </span>
      </div>
    </>
  );
};

export default Footer;
