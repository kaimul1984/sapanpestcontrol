import React from 'react'
import './button.scss'

const Button = ({name}) => {
    return (
      <>
        <button>
          <a href="#contact">{name}</a>
        </button>
      </>
    );
}

export default Button
