import React from "react";
import Button from "../button/Button";
import { Heading } from "../heading/Heading";
import { lists1, lists2 } from "./aboutData";
import Slide from "react-reveal/Slide";
import ab2 from "../../image/ab2.png";
import "./about.scss";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <Slide left>
          <div className="left">
            <Heading title="about us" />
            <h2>welcome to NATIVE pest control</h2>
            <p>
              we are reliable,dedicated and fully professional pest control team
              in your area. we always make difference amd make sure you to feel
              the difference.We inspect every property carefully before deciding
              on treatment. We won’t just come in and spray chemicals
              indiscriminately. We have a fulltime, board-certified entomologist
              on staff to help us understand the way insects behave. This makes
              our treatments so effective.We’ve always been willing to take on
              problems others won’t and to do whatever it takes to help our
              clients.
            </p>
            <h3>why people choose us?</h3>

            <div className="quality flex">
              <div className="col-1">
                {lists1.map((list) => {
                  return (
                    <h4 key={list.id}>
                      <span>{list.icon}</span>
                      {list.title}
                    </h4>
                  );
                })}
              </div>
              <div className="col-2">
                {lists2.map((list) => {
                  return (
                    <h4 key={list.id}>
                      <span>{list.icon}</span>
                      {list.title}
                    </h4>
                  );
                })}
              </div>
            </div>
            <h6>this is what you are after?</h6>
            <div className="about-btn">
              <Button name="call us now" />
            </div>
          </div>
        </Slide>
        <Slide right>
          <div className="right">
            <img src={ab2} alt="img" />
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default About;
