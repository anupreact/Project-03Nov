import React from "react";
import PageCover from "../../components/PageCover/PageCover";
import "./About.scss";
import icon from "../../images/icons8-technological-64.png";

const About = () => {
  const cardData = [
    {
      icon: icon,
      title: "Optimum Client Satisfaction",
      description:
        "It's in our DNA. We are here because of our valuable clients, andtheir success is the main reason we place client pleasure first.We are not afraid to work together to better our ideas andservices. We are motivated by client praise. It's like a crowdheering for a goal, we want to hear it more.",
    },
    {
      icon: icon,
      title: "Optimum Client Satisfaction",
      description:
        "It's in our DNA. We are here because of our valuable clients, andtheir success is the main reason we place client pleasure first.We are not afraid to work together to better our ideas andservices. We are motivated by client praise. It's like a crowdheering for a goal, we want to hear it more.",
    },
    {
      icon: icon,
      title: "Optimum Client Satisfaction",
      description:
        "It's in our DNA. We are here because of our valuable clients, andtheir success is the main reason we place client pleasure first.We are not afraid to work together to better our ideas andservices. We are motivated by client praise. It's like a crowdheering for a goal, we want to hear it more.",
    },
    {
      icon: icon,
      title: "Optimum Client Satisfaction",
      description:
        "It's in our DNA. We are here because of our valuable clients, andtheir success is the main reason we place client pleasure first.We are not afraid to work together to better our ideas andservices. We are motivated by client praise. It's like a crowdheering for a goal, we want to hear it more.",
    },
  ];

  const aboutRight = [
    "We Design, Develop and Market for you: Each member of WPWebInfotech, makes sure they go an extra mile to turn your idea into a reality while also enjoying their work.",
    "Put ourselves in your shoes: We always keep customer satisfaction as our prime motto. Hence, we are always extremely responsive to any of your requests and make sure we are there to help you all the time and make it a smooth sailing development experience for you.",
    "We deliver projects on time: We recognize how important your business is to you, thus we do everything we can to deliver your project on time.",
    "Empowering your business: Our tech-savvy personnel make sure they understand your business logic and goals and provide you with an optimal solution that would benefit your business.",
    "Best company for you: Don’t you think we are the best company for your business? If not, try choosing us, and we will prove to you our calibre.",
  ];

  const aboutLeft = [
    "WPWeb Infotech is a leading Web Development Company in India and USA. It excels in offering elegant & profitable web solutions for a global clientele. We offer a one-stop solution that includes comprehensive backend technologies like PHP, WordPress, Shopify, Magento, Codeigniter, Laravel, Drupal, and Node.Js and frontend technologies like React, Angular, JavaScript, HTML5, and CSS3 assisting businesses to build their brand. We help curate high-performing digital experiences that add value to your business with our web development services. Our team comprises tech wizards with extensive experience in creating handcrafted solutions employing Web Development, eCommerce development, UI/UX Design, Shopify Web Application development, and PHP frameworks like Laravel, CI, and CakePHP.",
    "WPWeb Infotech is a leading Web Development Company in India and USA. It excels in offering elegant & profitable web solutions for a global clientele. We offer a one-stop solution that includes comprehensive backend technologies like PHP, WordPress, Shopify, Magento, Codeigniter, Laravel, Drupal, and Node.Js and frontend technologies like React, Angular, JavaScndcrafted solutions employing Web Development, eCommerce development, UI/UX Design, Shopify Web Application development, and PHP frameworks like Laravel, CI, and CakePHP.",
  ];

  return (
    <div className="About">
      <PageCover heading={"About Us"} />
      <div className="container">
        <div className="row">
          <div className="left">
            <h2>Who We Are?</h2>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              dolore architecto iste, cum dolores cupiditate id laborum mollitia
              commodi necessitatibus, hic eveniet similique consequatur, quos
              reiciendis? Quam, quia natus. Velit deserunt a, eos excepturi et
              qui ex aperiam dolorem ad consectetur ratione cupiditate. Itaque
              illum similique rerum dolore provident? Consequuntur dicta
              officiis commodi sed voluptas modi quae. Provident modi neque,
              quidem vero adipisci facere similique?
            </span>
            <span>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dicta, obcaecati officiis adipisci assumenda consequuntur nemo quisquam eveniet nisi nostrum iure. Eaque, assumenda voluptatum vero rem sunt delectus modi? Odio sapiente magni inventore ipsam! Nisi, quisquam natus in magnam, nobis debitis nemo autem animi, sapiente laboriosam inventore. Perferendis, temporibus id fuga earum tempora amet libero dignissimos, doloribus exercitationem eos, rem aliquam in maiores eligendi odio. Eveniet sunt facilis itaque deserunt unde nemo ad neque inventore quis!
            </span>
          </div>
          <div className="right">
            <h2>What We Do?</h2>
            <span>
              We Design, Develop and Market for you: Each member of WPWeb
              Infotech, makes sure they go an extra mile to turn your idea into
              a reality while also enjoying their work.
            </span>

            <span>
              Put ourselves in your shoes: We always keep customer satisfaction
              as our prime motto. Hence, we are always extremely responsive to
              any of your requests and make sure we are there to help you all
              the time and make it a smooth sailing development experience for
              you.
            </span>

            <span>
              We deliver projects on time: We recognize how important your
              business is to you, thus we do everything we can to deliver your
              project on time.
            </span>

            <span>
              Empowering your business: Our tech-savvy personnel make sure they
              understand your business logic and goals and provide you with an
              optimal solution that would benefit your business.
            </span>

            <span>
              Best company for you: Don’t you think we are the best company for
              your business? If not, try choosing us, and we will prove to you
              our calibre.
            </span>
          </div>
        </div>
      </div>

      <div className="special">
        <h3>Our Core Principles Make Us Unique</h3>
        <span>Deliver Reliable & Quality Web Development Services</span>
        <div className="card-container">
          {cardData.map((item, index) => {
            const { icon, title, description } = item;
            return (
              <div className="card" key={index}>
                <div className="icon">
                  <img src={icon} alt="" />
                </div>
                <h3 className="title">{title}</h3>
                <br />
                <p className="desc">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <br />

      <div className="info">
        <h2>Meet The Director</h2>
        <div className="content-row">
          <div className="left">
            <div className="quote">
              <span>
                {" "}
                “We, 50 tea lovers, 100 identical technoids, endless ideas,
                earning 1000’s of hearts with one purpose in mind: to serve
                technology.” Yes, we are veracious, and we are WPWeb, a tech
                enthusiast!
              </span>

              <div className="post">
                <span>Name</span>
                <span>Post</span>
              </div>

              <div className="social">
                <span>Face</span>
                <span>Insta</span>
                <span>Linked</span>
                <span>Twitter</span>
              </div>
            </div>
          </div>
          <div className="right">
            <img src="" alt="not found" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
