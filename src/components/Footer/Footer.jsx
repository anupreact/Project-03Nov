import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <section className="left">
          <div className="logo">
            <div className="logo-img">Inox Panda</div>
          </div>
          <div className="info">
            001 Main Street, Times building, London, New York
          </div>
          <div className="links">
            <span>
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </span>

            <span>
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </span>
            <span>
              <i className="fa fa-google" aria-hidden="true"></i>
            </span>
            <span>
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </span>
            <span>
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </span>
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
