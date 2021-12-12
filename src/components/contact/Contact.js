import React from "react";
import { Heading } from "../heading/Heading";
import { FaPhoneAlt, FaRegEnvelope, FaLocationArrow } from "react-icons/fa";
import Flip from "react-reveal/Flip";
import "./contact.scss";

const Contact = () => {
  return (
    <div
      className="contact"
      id="contact"
      >
      <Heading title="contact us" />
      <Flip left>
        <div className="container">
          <div className="left">
            <div className="call flex">
              <i>
                <FaPhoneAlt />
              </i>
              <div>
                <h5>call us:</h5>
                <p>0403172007</p>
              </div>
            </div>
            <div className="email flex">
              <FaRegEnvelope />
              <div>
                <h5>email us:</h5>
                <p>
                  <a href="#contact">pestcontrolnative@gmail.com</a>
                </p>
              </div>
            </div>
            <div className="location flex">
              <FaLocationArrow />
              <div>
                <h5>location:</h5>
                <p>17 Huntley Drive, blacktown, NSW 2148</p>
              </div>
            </div>
          </div>
          <div className="right">
            <form>
              <input type="text" name="name" placeholder="Name" />
              <input type="text" placeholder="Number" />
              <input type="email" name="user_email" placeholder="Email" />
              <textarea name="message" placeholder="Message" />

              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </Flip>
    </div>
  );
};

export default Contact;
