import React from "react";
import { NavLink } from "react-router-dom";
import "./UnAvailable.scss";
import error from "../../images/sererror11.gif"

const UnAvailable = () => {
  return (
    <div className="UnAvailable">
      <div className="img-container">

      <img src={error} alt="" />
      </div>
      <p>
        " We are sorry to inform you that our Online shoping option is
        temporarily closed due to some technical issues on our website. <br />
        Inconvenience caused is deeply regreted."
      </p>
      <NavLink to="/contact">
        {" "}
        Click here to talk to our customer service representative <br /> or{" "}
        <br /> send us your requirement{" "}
      </NavLink>
      <NavLink to="/">
        <button> Go Back </button>
      </NavLink>
    </div>
  );
};

export default UnAvailable;
