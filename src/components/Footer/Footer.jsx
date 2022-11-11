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
          <p>Anand Electronics</p>
          <div className="info">
            001 Main Street, Times building, London, New York
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
            we launch our new arrivals
          </p>
          <input type="text" placeholder="Enter your email" />

          <button>Subscribe</button>
        </section>
      </footer>
    </>
  );
};

export default Footer;
