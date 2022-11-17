import React, { useState } from "react";
import "./NewContact.scss";
import icon from "../../images/icons8-technological-64.png";
import icon1 from "../../images/contservice2.png";
import icon2 from "../../images/contservice1.png";
import icon3 from "../../images/contservice3.png";
import emailjs from "@emailjs/browser";

import contbg from "../../images/contbg.png"
import bgimg from "../../images/bgimg.jpg"
import ban33 from "../../images/ban33.jpg"
import ban34 from "../../images/ban34.jpg"
import ban35 from "../../images/ban35.jpg"

const NewContact = () => {
  const contactServices = [
    {
      icon: icon1,
      title: "We'll get back to you in 24 hours.",
      description: "to address your needs as quick as possible.",
    },
    {
      icon: icon2,
      title: "We’ll prepare an estimation of the project.",
      description: "describing the team compostition, timeline and costs.",
    },
    {
      icon: icon3,
      title: "We'll perform a free plan review.",
      description:
        "if you already have an existing plan or setup we can do free plan review",
    },
  ];

  const contactDetails = [
    {
      title: "INSTANT MESSAGES",
      links: [
        {
          link1: " Business : ar.electricals007@gmail.com",
          link2: "Career : ar.electricals007@gmail.com",
          link3: "Skype : ar.electricals007@gmail.com",
        },
      ],
    },
    {
      title: "Direct Contact",
      links: [
        {
          link1: " Whats app : +91- 9764921207.",
          link2: "Contact : +91- 7709434879.",
          // link3: "Skype : sales@anandelectronics.com",
        },
      ],
    },
    {
      title: "Nagpur Office",
      links: [
        {
          link1:
            "AR Electricals, Shop No 02, Deo Nagar, Khamla Road, Near Tajshree Honda Showroom, Nagpur 440015.",
          // link2: "Career : career@anandelectronics.com",
          // link3: "Skype : sales@anandelectronics.com",
        },
      ],
    },
  ];

  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const { Name, email, phone, address, message } = formData;

  const handleChange = (e) => {
    let { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email !== "" && phone !== "") {
      const templateParams = {
        name: Name,
        email: email,
        phone: phone,
        address:address,
        message: message,
      };
      // emailjs.send(serviceID, templateID, templateParams, publicKey);
      // serviceid - service_ow0j48h
      // template id-  template_7vkty33
      // templateParams
      // publicKey- mrTtWk1L0azEIifwa
      emailjs
        .send(
          "service_ow0j48h",
          "template_7vkty33",
          templateParams,
          "mrTtWk1L0azEIifwa"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
          },
          (err) => {
            console.log("FAILED...", err);
          }
        );


      setTimeout(() => {
        setFormData({
          Name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
        })
      }, 1000);
    }
    else{
      alert("email and phone number is required")
    }
  };

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
          <form onSubmit={handleSubmit}>
            <div className="inputs">
              <input
                type="text"
                name="Name"
                value={Name}
                onChange={handleChange}
                placeholder="Name"
              />
            </div>
            <div className="inputs">
              <input
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
            <div className="inputs">
              <input
                type="text"
                name="phone"
                value={phone}
                onChange={handleChange}
                placeholder="Phone no."
              />
            </div>
            <div className="inputs">
              <input
                type="text"
                name="address"
                value={address}
                onChange={handleChange}
                placeholder="Address"
              />
            </div>
            <div className="inputs" placeholder="Name">
              <textarea
                type="text"
                name="message"
                value={message}
                onChange={handleChange}
                placeholder="Your message"
                rows={6}
              />
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
                      <span>{link2}</span>
                      <span>{link3}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <img src={ban35} alt="" />
      </div>
    </div>
  );
};

export default NewContact;
