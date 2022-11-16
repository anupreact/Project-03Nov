import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  const socialLinks = [
    {
      icon: "fa fa-facebook",
      url: "http://facebook.com",
    },
    {
      icon: "fa fa-instagram",
      url: "http://facebook.com",
    },
    {
      icon: "fa fa-google",
      url: "http://facebook.com",
    },
    {
      icon: "fa fa-linkedin",
      url: "http://facebook.com",
    },
    {
      icon: "fa fa-twitter",
      url: "http://facebook.com",
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
            <i class="fa fa-certificate" aria-hidden="true"></i>

            </span>
            <span className="gst">GST No. 27CGWPR1898D1ZK</span>
          </div> 
          <div className="info">
            <span>
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </span>
            <span>ar.electricals007@gmail.com</span>
          </div> 
          <div className="info">
            <span>
            <i class="fa fa-phone-square" aria-hidden="true"></i>

            </span>
            <span>9764921207 / 7709434879</span>
          </div>
          <div className="links">
            {socialLinks.map((item, index) => {
              return (
                <span key={index}>
                  <Link to={`${item.url}`}>
                    <i className={`${item.icon}`} aria-hidden="true"></i>
                  </Link>
                </span>
              );
            })}
          </div>
        </section>

        <div className="linkss">
          <section className="mid-1">
            <p>Pricing</p>
            <div>
              <span>Links</span>
              <span>Links</span>
              <span>Links</span>
              <span>Links</span>
            </div>
          </section>
          <section className="mid-2">
            <p>Affiliate</p>
            <div>
              <span>Links</span>
              <span>Links</span>
              <span>Links</span>
              <span>Links</span>
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

          <button>Subscribe</button>
        </section>
      </footer>
      <div className="disclaimer">
        <span>
          Copyright @ All Rights reserved 2022 | Made with{" "}
          <span className="heart">❤ </span> by Anup
        </span>
      </div>
    </>
  );
};

export default Footer;
