import React from 'react'
import Fade from "react-reveal/Fade";


import './card.scss'
const Card = () => {
    return (
      <div className="service-card">
        <div className="inner">
          <Fade left>
            <div>
              <h4>insect control</h4>
            </div>
          </Fade>
          <Fade top>
            <div>
              <h4>rodent control</h4>
            </div>
          </Fade>
          <div>
            <h4>bird control</h4>
          </div>
          <Fade bottom>
            <div >
              <h4>bugs control</h4>
            </div>
          </Fade>
          <Fade right>
            <div >
              <h4>& many more</h4>
            </div>
          </Fade>
        </div>
      </div>
    );
}

export default Card
