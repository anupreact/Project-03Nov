import React from "react";
import "./NewContact.scss";
import icon from "../../images/icons8-technological-64.png";

const NewContact = () => {
  const contactServices = [
    {
      icon: icon,
      title: "We'll get back to you in 24 hours.",
      description: "to address your needs as quick as possible.",
    },
    {
      icon: icon,
      title: "1 We'll get back to you in 24 hours.",
      description: "to address your needs as quick as possible.",
    },
    {
      icon: icon,
      title: "2 We'll get back to you in 24 hours.",
      description: "to address your needs as quick as possible.",
    },
    {
      icon: icon,
      title: " 3 We'll get back to you in 24 hours.",
      description: "to address your needs as quick as possible.",
    },
  ];

  const contactDetails = [
    {
      title: "INSTANT MESSAGES",
      links: [
        {
          link1: " Business : sales@anandelectronics.com",
          link2: "Career : career@anandelectronics.com",
          link3: "Skype : sales@anandelectronics.com",
        },
      ],
    },
    {
      title: "INSTANT MESSAGES",
      links: [
        {
          link1: " Business : sales@anandelectronics.com",
          link2: "Career : career@anandelectronics.com",
          link3: "Skype : sales@anandelectronics.com",
        },
      ],
    },
    {
      title: "INSTANT MESSAGES",
      links: [
        {
          link1: " Business : sales@anandelectronics.com",
          link2: "Career : career@anandelectronics.com",
          link3: "Skype : sales@anandelectronics.com",
        },
      ],
    },
  ];
  return (
    <div className="NewContact">
      <div className="info">
        <p>Let's Discuss Your Requirements & Start Develop Something Unique.</p>
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
              <textarea type="text" placeholder="Your message" rows={6} />
            </div>
            <div className="inputs">
              <button>Submit</button>
            </div>
          </form>
        </div>

        <div className="right">
          {contactServices.map((item, index) => {
            const { icon, title, description } = item;
            return (
              <div className="row" key={index}>
                <div className="left-col">
                  <div>
                    <img src={icon} alt="" />
                  </div>
                </div>
                <div className="right-col">
                  <p>{title}</p>
                  <span>{description}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bottom">
        {contactDetails.map((items, index) => {
          const { title, links } = items;
          return (
            <div className="column" key={index * 2}>
              <div className="title">
                <span>{title}</span>
              </div>
              <div className="links">
                {links.map((i, index) => {
                  const { link1, link2, link3 } = i;
                  return (
                    <div className="exe" key={index + 1}>
                      <span>{link1}</span>
                      <br />
                      <span>{link2}</span>
                      <br />
                      <span>{link3}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewContact;
