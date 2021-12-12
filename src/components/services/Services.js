import React from "react";
import Button from "../button/Button";
import Fade from "react-reveal/Fade";

import "./services.scss";
import Feature from "../features/Feature";
const Services = () => {
  return (
    <div className="services" id="services">
      <h1 className="heading">services we provide</h1>
      <div className="container">
        <Fade left>
          <div className="residential">
            <div className="inner-wrap">
              <h2>residential pest control</h2>
              <p>
                We Protect your home from unwanted Household pests such as
                cockroaches, ants, rats, mice, spiders, fleas, bugs, flying
                insects, bed bugs, bird control and termites. Our professionally
                trained technicians will identify the problem and administer the
                appropriate treatment to keep pests out of your home.
              </p>
              <div className="btn">
                <Button name="call us now" />
              </div>
            </div>
            <div className="box">
              <img
                src="https://www.residencestyle.com/wp-content/uploads/2019/03/Pest-Control.jpg"
                alt=""
              />
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="commercial">
            <div className="inner-wrap">
              <h2>commercial pest control</h2>
              <p>
                we protect your business from bugs. We offer reliable-effective
                commercial pest control services .Our integrated pest control
                services use the latest technology and tailored solutions to
                ensure a pest-free environment for your business and maintain a
                healthy and hygienic workplace for your staff
              </p>
              <div className="btn">
                <Button name="call us now" />
              </div>
            </div>
            <div className="box">
              <img
                src="https://5.imimg.com/data5/WS/LV/VC/SELLER-26985639/pest-control-services-500x500.jpg"
                alt=""
              />
            </div>
          </div>
        </Fade>
      </div>
      <Feature />
    </div>
  );
};

export default Services;
