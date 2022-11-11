import React from "react";
import "./Contact.scss";
import PageCover from "../../components/PageCover/PageCover"
import NewContact from "../../components/NewContact/NewContact";

const Contact = () => {
  return (
    <div className="Contact">
      <PageCover heading={"Contact"}/>
      <NewContact/> 
    </div>
  );
};

export default Contact;
