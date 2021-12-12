import React, { useState, useEffect } from "react";
import Zoom from "react-reveal/Zoom";

import "./review.scss";
import data from "./reviewData";
const Review = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div
      className="review"
     >
      <div>
        <h1 className="heading">what customer says about us</h1>
      </div>
      <Zoom top>
        <div className="container">
          {people.map((person, personIndex) => {
            const { id, image, name, title, quote } = person;

            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <article className={position} key={id}>
                <img src={image} alt="" />
                <h2 className="title">{name}</h2>
                <h4>{title}</h4>
                <p className="text">{quote}</p>
              </article>
            );
          })}

          <div className="btn">
            <button className="left" onClick={() => setIndex(index - 1)}>
              &#60;
            </button>
            <button className="right" onClick={() => setIndex(index + 1)}>
              &#62;
            </button>
          </div>
          {/* <div className="radio">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div> */}
        </div>
      </Zoom>
    </div>
  );
};

export default Review;
