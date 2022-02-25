import React from "react";
import "./gallary.scss";
import gallary1 from "../../image/gallary-1.jpg";
import gallary4 from "../../image/gallary-4.jpg";
import gallary3 from "../../image/gallary-3.jpg";

const Gallary = () => {
  return (
    <div className="gallary">
      <div className="container">
        <img src={gallary1} alt="" />
        <img src={gallary4} alt="" />
        <img src={gallary3} alt="" />
      </div>
    </div>
  );
};

export default Gallary;
