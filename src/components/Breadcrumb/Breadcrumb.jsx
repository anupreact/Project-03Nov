import React from "react";
import { NavLink } from "react-router-dom";
import "./Breadcrumb.scss";
const Breadcrumb = (props) => {
  const { text, link } = props;
  return (
    <div className="Breadcrumb">
      <div className="content">
        <span>
         
          <NavLink to={link==="home" ? "/" : `/${link}`}>{link}</NavLink> / {text}
        </span>
      </div>
    </div>
  );
};

export default Breadcrumb;
