import React from "react";
import "./feature.scss";
import items from "./featureData";
import Zoom from "react-reveal/Zoom";
const Feature = () => {
  return (
    <div className="feature">
      <h1 className="heading">common pest control</h1>
      <div className="wrapper">
        {items.map((item) => {
          return (
            <div className="image" key={item.id}>
              <Zoom left>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </Zoom>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feature;
