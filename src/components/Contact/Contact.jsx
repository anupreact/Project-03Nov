import React from "react";
import "./Contact.scss";
const Contact = () => {
  return (
    <div className="Contact">
      <div className="heading">
        <span>Contact Us</span>
      </div>

      <div className="card-container">
        <div className="left">
          <form>
            <div>
              <input type="text" placeholder="Your Name" />
            </div>
            <div>
              <input type="text" placeholder="Your Email" />
            </div>
            <div>
              <textarea rows="9" cols={"12"} type="text" placeholder="Enter Yout Message" />
            </div>
            <div>
              <button>Submit</button>
            </div>
          </form>
        </div>
        <div className="right">image</div>
      </div>
    </div>
  );
};

export default Contact;
