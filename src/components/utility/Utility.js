import React from 'react'
import Button from '../button/Button';
import './utility.scss'
import logo1 from "../../image/logo-1.png";

const Utility = () => {
    return (
      <div className="utility">
        <div>
          <img
            src={logo1}
            alt=""
          />
          <h1>do you have any pests problems?</h1>
        </div>
        <Button name="Book an Appoinment" />
      </div>
    );
}

export default Utility
