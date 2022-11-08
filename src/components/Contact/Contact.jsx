import React from "react";
import "./Contact.scss";

import video from "../../images/video.mp4";
import video2 from "../../images/Pexels Videos 1851190.mp4";
import video3 from "../../images/pexels-mack-kamp-1449455.jpg";
const Contact = (props) => {
  const { heading } = props;
  return (
    <div className="Contact">
      {heading ? (
        <div className="heading">
          <span>{heading}</span>
        </div>
      ) : (
        ""
      )}

      <div className="info">
        <p>Let’s Discuss Your Requirements & Start Develop Something Unique.</p>
        <span>Get a Free Quote!</span>
      </div>
      <div className="Maincontainer">
        <img src={video3} alt="not found"></img>
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
                <textarea
                  rows="9"
                  cols={"12"}
                  type="text"
                  placeholder="Enter your message"
                />
              </div>
              <div>
                <button>Submit</button>
              </div>
            </form>
          </div>
          {/* <div className="right">image</div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
