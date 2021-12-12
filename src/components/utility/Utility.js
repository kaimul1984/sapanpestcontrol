import React from 'react'
import Button from '../button/Button';
import './utility.scss'

const Utility = () => {
    return (
      <div className="utility">
        <div>
          <img
            src="https://www.pngitem.com/pimgs/m/75-753813_pests-control-hd-png-download.png"
            alt=""
          />
          <h1>do you have any pests problems?</h1>
        </div>
        <Button name="Book an Appoinment" />
      </div>
    );
}

export default Utility
