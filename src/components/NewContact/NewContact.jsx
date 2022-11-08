import React from "react";
import "./NewContact.scss";
import icon from "../../images/icons8-technological-64.png";

const NewContact = () => {
  return (
    <div className="NewContact">
      <div className="info">
        <p>Let’s Discuss Your Requirements & Start Develop Something Unique.</p>
        <span>Get a Free Quote!</span>
      </div>

      <div className="container">
        <div className="left">
          <div className="head">
            <span>
              Get In Touch With Our Experts To Turn Your Idea Into Reality.
            </span>
          </div>
          <form>
            <div className="inputs">
              <input type="text" placeholder="Name" />
            </div>
            <div className="inputs">
              <input type="text" placeholder="Email" />
            </div>
            <div className="inputs">
              <input type="text" placeholder="Phone no." />
            </div>
            <div className="inputs">
              <input type="text" placeholder="Address" />
            </div>
            <div className="inputs" placeholder="Name">
              <textarea type="text" placeholder="Your message" rows={12} />
            </div>
            <div className="inputs">
              <button>Submit</button>
            </div>
          </form>
        </div>
        <div className="right">
          <div className="row">
            <div className="left-col">
              <div>
                <img src={icon} alt="" />
              </div>
            </div>
            <div className="right-col">
              <p>We’ll get back to you in 24 hours.</p>
              <span>to address your needs as quick as possible.</span>
            </div>
          </div>{" "}
          <div className="row">
            <div className="left-col">
              <div>
                <img src={icon} alt="" />
              </div>
            </div>
            <div className="right-col">
              <p>We’ll get back to you in 24 hours.</p>
              <span>to address your needs as quick as possible.</span>
            </div>
          </div>{" "}
          <div className="row">
            <div className="left-col">
              <div>
                <img src={icon} alt="" />
              </div>
            </div>
            <div className="right-col">
              <p>We’ll get back to you in 24 hours.</p>
              <span>to address your needs as quick as possible.</span>
            </div>
          </div>{" "}
          <div className="row">
            <div className="left-col">
              <div>
                <img src={icon} alt="" />
              </div>
            </div>
            <div className="right-col">
              <p>We’ll get back to you in 24 hours.</p>
              <span>to address your needs as quick as possible.</span>
            </div>
          </div>{" "}
        </div>
      </div>

      <div className="bottom">
        <div className="column">
          <div className="title">
            <span>INSTANT MESSAGES</span>
          </div>
          <div className="links">
            <span> Business : sales@wpwebinfotech.com</span>
            <br />
            <span>Career : career@wpwebinfotech.com</span>
            <br />
            <span>Skype : sales@wpwebinfotech.com</span>
          </div>
        </div>{" "}
        <div className="column">
          <div className="title">
            <span>INSTANT MESSAGES</span>
          </div>
          <div className="links">
            <span> Business : sales@wpwebinfotech.com</span>
            <br />
            <span>Career : career@wpwebinfotech.com</span>
            <br />
            <span>Skype : sales@wpwebinfotech.com</span>
          </div>
        </div>{" "}
        <div className="column">
          <div className="title">
            <span>INSTANT MESSAGES</span>
          </div>
          <div className="links">
            <span> Business : sales@wpwebinfotech.com</span>
            <br />
            <span>Career : career@wpwebinfotech.com</span>
            <br />
            <span>Skype : sales@wpwebinfotech.com</span>
          </div>
        </div>{" "}
        <div className="column">
          <div className="title">
            <span>INSTANT MESSAGES</span>
          </div>
          <div className="links">
            <span> Business : sales@wpwebinfotech.com</span>
            <br />
            <span>Career : career@wpwebinfotech.com</span>
            <br />
            <span>Skype : sales@wpwebinfotech.com</span>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default NewContact;
