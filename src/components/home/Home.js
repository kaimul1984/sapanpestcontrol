import React from "react";
import Button from "../button/Button";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import home from "../../image/home-2.png";
//import  hero1  from "../../image/ab2.jpg";
import "./home.scss";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="container">
        <div className="left">
          <Zoom left>
            <h1>
              Annoyed <br /> with pests??
            </h1>
          </Zoom>
          <Fade left>
            <p>
              <span>no worries!!</span> <br /> we will protect your home and
              business from those unwanted guest.
            </p>
          </Fade>
          <Button name="call us now" />
        </div>
        <div className="right">
          <Fade right>
            <img src={home} alt="" />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Home;
