import React from "react";
import "./Contact.scss";
import PageCover from "../../components/PageCover/PageCover"
import ContactComp from "../../components/Contact/Contact";
import NewContact from "../../components/NewContact/NewContact";

const Contact = () => {
  return (
    <div className="Contact">
      <PageCover heading={"Contact"}/>
      <NewContact/> 
      {/* <ContactComp/> */}
    </div>
  );
};

export default Contact;
