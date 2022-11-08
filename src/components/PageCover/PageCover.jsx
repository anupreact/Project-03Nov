import React from "react";
import "./PageCover.scss";
import cover from "../../images/cover.jpg";

const PageCover = (props) => {
  const { heading } = props;
  return (
    <div className="PageCover">
      <img src={cover} alt="" />
      <span> {heading}</span>
    </div>
  );
};

export default PageCover;
