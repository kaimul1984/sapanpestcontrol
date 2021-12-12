import React from 'react'
import './topbar.scss'
import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { useContext } from "react";
import { Context } from "../../context/Context";
import logo from "../../image/logo.png";

import Button from '../button/Button';

const Topbar = () => {
  const {isOpen, setIsOpen} = useContext(Context);
    return (
      <div className="topbar">
        <div className="top">
          <div className="top-wrapper">
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
          </div>
        </div>
        <div className="wrapper">
          <div className="logo flex">
            <img
              src={logo}
              alt="Logo"
            />
            <div>
              <h1>NATIVE</h1>
              <h3>PEST CONTROL</h3>
            </div>
          </div>
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
          <div className="btn">
            <Button name="get a free quote" />
          </div>
          <div className="bar" onClick={() => setIsOpen(!isOpen)}>
            <AiOutlineBars />
          </div>
        </div>
      </div>
    );
}

export default Topbar
